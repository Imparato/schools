class CoursesController < ApplicationController
  
  def index
    @school = School.find(params[:school_id])
    @courses = []
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

  def create
    @school = School.find(params[:school_id])
    @course = Course.new(
      price: course_params[:price],
      price_period: course_params[:price_period], 
      description: course_params[:description], 
      )
    @address = Address.find(course_params[:address_id])
    @course.address = @address
    # @course.school = @school
    authorize @school
    if @course.save
      redirect_to school_courses_path(@school)
    else
      render :new
    end
  end

  def destroy
  
  end
  def course_params
    params.require(:course).permit(:price, :price_period, :address_id, :teachers, :description)
  end
end
