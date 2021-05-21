require 'json'

class TeachersController < ApplicationController
  def index
    # @school = current_user.schools.find(params[:school_id])
    @school = current_user.schools
    teachers = @school[0].teachers
    render json: teachers
  end
end
