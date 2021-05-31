class SchoolsController < ApplicationController
  
  before_action :set_school, except: [:index, :new, :create]

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
    @school = School.new(schools_params)
    @school.user = current_user
    authorize @school
    if @school.save
      redirect_to schools_path, notice: "Création reussie"
    else
      render "new"
    end
  end
  
  def update
    if @school.update(schools_params)
      redirect_to schools_path, notice: "Modification reussie"
    else
      render :show
    end
  end

  def destroy
    authorize @school
    @school.destroy
    redirect_to schools_path
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
