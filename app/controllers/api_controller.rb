require 'json'

class ApiController < ApplicationController
  skip_before_action :authenticate_user!
  def show
    api_key = check_authentification(params[:key])
    if api_key.nil?
      render_unauthorized
    else
      render json: {ok:"ok"}
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
