class CoursesController < ApplicationController
  
  def index
    @school = School.find(params[:school_id])
    @courses = [].sort
    @school.addresses.each do |address| 
      address.courses.each do |course|
        @courses << course
      end
    end
  end

  def new
    @school = School.find(params[:school_id])
    @course = @school.courses.new
    authorize @school
    add_breadcrumb("Ajouter un cours")
  end
  
  def show
    @school = School.find(params[:school_id])
    @course = Course.find(params[:id])
    authorize @school
  end

  def update
    @school = School.find(params[:school_id])
    @course = Course.find(params[:id])
    if @course.update(
      published: course_params[:published],  
      name: course_params[:name],
      price: course_params[:price],
      price_period: course_params[:price_period], 
      description: course_params[:description], 
      start_time: course_params[:start_time], 
      end_time: course_params[:end_time] 
      )
      @address = Address.find(course_params[:address_id])
      @course.address = @address
      authorize @school
      redirect_to school_courses_path(@school), notice: "Modification du cours reussi"
    else
      render :show
    end
  end

  def create
    @school = School.find(params[:school_id])
    @course = Course.new(
      published: course_params[:published],  
      name: course_params[:name],
      price: course_params[:price],
      price_period: course_params[:price_period], 
      description: course_params[:description], 
      start_time: course_params[:start_time], 
      end_time: course_params[:end_time] 
      )
    @address = Address.find(course_params[:address_id])
    @course.address = @address
    # @course.school = @school
    authorize @school
    if @course.save
      redirect_to school_courses_path(@school), notice: "Création du cours reussi"
    else
      render :new
    end
  end

  def destroy
    @school = School.find(params[:school_id])
    @course = Course.find(params[:id])
    authorize @school
    @course.destroy  
    redirect_to school_courses_path(@school), notice: "Suppression du cours reussi"
  end

  def course_params
    params.require(:course).permit(:published, :price, :price_period, :name, :start_time, :end_time, :address_id, :teachers, :description)
  end
end