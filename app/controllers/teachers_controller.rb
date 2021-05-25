require 'json'

class TeachersController < ApplicationController
  
  def index
    teachers = School.find(params[:school_id]).teachers
    render json: teachers
  end

  def update
    school = School.find(params[:school_id])
    teacher = Teacher.find(params[:id])
    teacher.update(teacher_params)
    render json: teacher
  end

  def create
    school = School.find(params[:school_id])
    teacher = Teacher.new(teacher_params)
    teacher.school = school
    teacher.save
    
    render json: teacher
  end

  def destroy
    teacher = Teacher.find(params[:id])
    teacher.destroy

    render json: teacher
  end

  private

  def teacher_params
    params.require(:teacher).permit(:first_name, :last_name, :bio, :phone)
  end

end
