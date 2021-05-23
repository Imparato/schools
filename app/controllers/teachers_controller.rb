require 'json'

class TeachersController < ApplicationController
  def index
    # @school = current_user.schools.find(params[:school_id])
    teachers = School.find(params[:id].teachers)
    render json: teachers
  end
end
