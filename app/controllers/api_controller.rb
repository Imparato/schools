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
        # Addresses et cours  
        address = []
        school.addresses.each do |addrs|
          courses = []
          addrs.courses.each do |cours| 
            courses << {
              course: cours,
              teacher: cours.teachers
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
    end

  end

  def index
    api_key = check_authentification(params[:key])
    if api_key.nil?
      render_unauthorized
    else
      city = params[:city]
      schools = School.where(city: city.capitalize)
      result = {}
      schools.each do |school|
        addresses = []
        school.addresses.each do |address|
          courses = {}
          address.courses.each do |course|
            courses[course.id] = { 
              course: course, 
              tags: course.tags, 
              teachers: course.teachers 
            }
            addresses << {
              address: address,
              courses: courses
            } 
          end
        end
        result[school.id] = {
          school: school,
          addresses: addresses,
          network: school.networks,
          teachers: school.teachers,

        }
      end
      render json: result
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
