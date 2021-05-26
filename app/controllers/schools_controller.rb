require 'json'
class SchoolsController < ApplicationController
  def index
    @schools = School.where(user: current_user)
  end

  def show 
    @school = School.find(params[:id])
    networks_count = 4 - @school.networks.count
    networks_count.times {@school.networks.build}
  end

  def new
    @school = School.new
    @school.networks.build
  end
  
  def create
    @school = School.new(schools_params)
    @school.user = current_user

    redirect_to schools_path, notice: "Creation reussie"
  end
  
  def update
    @school = School.find(params[:id])
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

  def schools_params
    params.require(:school).permit(:name, :published, :description, :email, :website, :city, networks_attributes: [:id, :url])
  end
end
