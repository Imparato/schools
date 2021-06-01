class TeachersController < ApplicationController
  
  before_action :set_teacher, except: [:index, :new, :create]

  def index
    @school = School.find(params[:school_id]) 
    @teachers = @school.teachers.order("last_name")
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
    if @teacher.update(teacher_params)
      redirect_to school_teachers_path(@school)
    else
      render :index
    end
  end


  def destroy
    @school = School.find(params[:school_id])
    @teacher.destroy

    redirect_to school_teachers_path(@school)
  end

  private

  def teacher_params
    params.require(:teacher).permit( :email, :first_name, :last_name, :bio, :phone, :photo)
  end

  def set_teacher
    @teacher = Teacher.find(params[:id])
    authorize @teacher
  end

end
