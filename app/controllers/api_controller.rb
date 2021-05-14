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
      if id
        school = School.find(id)
      end
      if name
        school = School.find_by('name ILIKE ?', "%#{name}%")
      end
      if city
        school = School.find_by('city = ?', city.capitalize)
      end

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
          address <<  {
            address: addrs,
            courses: courses
          }
        end
        #
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
      if schools[0]
      result = {}
        schools.each do |school|
          result[school.id] = {
            id: school.id,
            name: school.name,
            city: school.city,
            modified_at: school.updated_at.to_s
          }
        end
        render json: result
      else
        render json: {
          error: "Not found"
        }, status: :not_found
      end
    end
  end

  private

  def check_authentification(key)
    ApiKey.find_by(key: key)
  end

  def render_unauthorized
    render json: { errors: [{ message: 'unauthorized' }] }, status: :unauthorized
  end
end
