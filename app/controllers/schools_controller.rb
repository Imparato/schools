require 'json'
class SchoolsController < ApplicationController
  def index
    result = []
    schools = School.where(user: current_user)
    schools.each do |school|
      result << {
        school: school,
        network: school.networks
      }
    end
    render json: schools
  end

  def update
    school = School.find(params[:id])
    if school.update(schools_params)
      result = []
      result << {
        school: school,
        network: school.networks
      }
      render json: school
    else
      render json: :error
    end
  end

  private

  def schools_params
    params.require(:school).permit(:name, :published, :description, :email, :website, :city)
  end
end
