class TeachersController < ApplicationController
  
  before_action :set_teacher, only: [:show, :update, :destroy]

  def index
    @school = policy_scope(School).find(params[:school_id]) 
    @teachers =  @school.teachers
  end
  
  def show
  end

  def new
    @school = School.find(params[:school_id])
    @teacher = @school.teachers.new
    authorize @teacher
  end
  
  def create
    @school = School.find(params[:school_id])
    @teacher = Teacher.new(teacher_params)
    @teacher.first_name = teacher_params[:first_name].split(" ")[0]
    @teacher.last_name = teacher_params[:first_name].split(" ")[1]
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
    if  teacher.update(teacher_params)
      redirect_to school_teachers_path(@school)
    else
      render :show
    end
  end


  def destroy
    teacher = Teacher.find(params[:id])
    teacher.destroy

    render :index
  end

  private

  def teacher_params
    params.require(:teacher).permit(:name, :first_name, :bio, :phone)
  end

  def set_teacher
    @teacher = Teacher.find(params[:id])
    authorize @teacher
  end
end
