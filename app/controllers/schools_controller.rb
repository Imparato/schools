class SchoolsController < ApplicationController
  
  before_action :set_school, except: [:index, :new]

  def index
    @disable_nav = true
  end

  def show 
    networks_count = 4 - @school.networks.count
    networks_count.times {@school.networks.build}
  end

  def new
    @school = current_user.schools.new
    authorize @school
    @school.networks.build
  end
  
  def create
    authorize @school
    @school = current_user.school.new(schools_params)
    if @school.save
      redirect_to schools_path, notice: "Creation reussie"
    else
      render :new, alert: @school.errors
    end
  end
  
  def update
    if @school.update(schools_params)
      redirect_to schools_path, notice: "Modification reussie"
    else
      raise
      render :show, alert: @school.errors
    end
  end

  def destroy

  end

  private

  def set_school
    @school = School.find(params[:id])
    authorize @school
  end

  def schools_params
    params.require(:school).permit(:name, :published, :description, :email, :website, :city, networks_attributes: [:id, :url])
  end
end
