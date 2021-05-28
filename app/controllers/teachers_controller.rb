class TeachersController < ApplicationController
  
  before_action :set_teacher, only: [:show, :update, :destroy]

  def index
    @school = policy_scope(School).find(params[:school_id]) 
    @teachers =  @school.teachers
  end
  
  def show
    @school = School.find(params[:school_id])
  end

  def new
    @school = School.find(params[:school_id])
    @teacher = @school.teachers.new
    authorize @teacher
  end
  
  def create
    @school = School.find(params[:school_id])
    @teacher = Teacher.new(teacher_params)
    fullname = teacher_params[:first_name].split(" ")
    @teacher.first_name = fullname[0]
    @teacher.last_name = fullname[1]
    @teacher.school = @school
    authorize @teacher
    if @teacher.save
      redirect_to school_teachers_path(@school)
    else
      render :new
    end
  end

  def update
    
    @school = School.find(params[:school_id])
    fullname = teacher_params[:first_name].split(" ")
    if @teacher.update(teacher_params)
      @teacher.update(first_name: fullname[0], last_name: fullname[1])
      redirect_to school_teachers_path(@school)
    else
      render :show
    end
  end


  def destroy
    @school = School.find(params[:school_id])
    teacher = Teacher.find(params[:id])
    teacher.destroy

    redirect_to school_teachers_path(@school)
  end

  private

  def teacher_params
    params.require(:teacher).permit( :email, :first_name, :bio, :phone)
  end

  def set_teacher
    @teacher = Teacher.find(params[:id])
    authorize @teacher
  end
end
