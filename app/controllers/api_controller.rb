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
        school = School.find_by('name = ?', name.capitalize)
      end
      if city
        school = School.find_by('city = ?', city.capitalize)
      end
        # Addresses et cours  
        address = {} 
        school.addresses.each do |addrs|
          courses = {}
          addrs.courses.each do |cours| 
            courses[cours.id] = {
              course: cours,
              teacher: cours.teachers
            }
          end
          address[addrs.id] = {
            address: addrs,
            courses: courses
          }
        end

        # school[:address] = school.addresses 
        prof = school.teachers
        response = {}
        response = {
          school: school,
          addresses: address,
          "teachers" => school.teachers
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
        result[school.id] = school.name
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
