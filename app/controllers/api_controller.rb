require 'json'

class ApiController < ApplicationController
  skip_before_action :authenticate_user!

  def show
    api_key = check_authentification(params[:key])
    if api_key.nil?
      render_unauthorized
    else
      city = params[:city]
      name = params[:name]
      id = params[:id]
      school = School.find(id) if id
      school = School.find_by('name ILIKE ?', "%#{name}%") if name
      school = School.find_by('city = ?', city.capitalize) if city

      if school
        # Addresses et cours
        address = []
        school.addresses.each do |addrs|
          courses = []
          addrs.courses.each do |cours|
            courses << {
              course: cours,
              teachers_ids: cours.teachers.ids
            }
          end
          address << {
            address: addrs,
            courses: courses
          }
        end
        response = {
          school: school,
          network: school.networks,
          addresses: address,
          teachers: school.teachers
        }

        render json: response
      else
        render json: {
          error: "Not found"
        }, status: :not_found
      end
    end
  end

  def index
    api_key = check_authentification(params[:key])
    if api_key.nil?
      render_unauthorized
    else
      city = params[:city]
      schools = School.where(city: city.capitalize)
      if schools.empty?
        render json: {
          error: "Not found"
        }, status: :not_found
      else
        result = { city: city.capitalize, school_count: School.where(city: city.capitalize).count, schools: [] }
        schools.each do |school|
          result[:schools] << {
            id: school.id,
            name: school.name,
            city: school.city,
            modified_at: school.last_update.to_s
          }
        end
        render json: result
      end
    end
  end

  # return cities
  def cities
    result = []

    # main cities
    MainCity.all.order("blog_important DESC, city ASC").each do |main_city|
      city = { name: main_city.city,
               important: main_city.blog_important,
               max: School.last_udpate_city(main_city.city).to_s,
               school_count: School.where(city: main_city.city).count }
      result.push city
    end

    # other cities if any
    other_cities = School.secondary_cities
    other_cities.each do |other_city|
      city = { name: other_city,
               important: false,
               max: School.last_udpate_city(other_city).to_s,
               school_count: School.where(city: main_city.city).count }
      result.push city
    end
    # render result
    render json: result
  end

  private

  def check_authentification(key)
    ApiKey.find_by(key: key)
  end

  def render_unauthorized
    render json: { errors: [{ message: 'unauthorized' }] }, status: :unauthorized
  end
end
