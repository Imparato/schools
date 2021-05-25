class NetworksController < ApplicationController
  def index
    school = School.find(params[:school_id])
    network = Network.where(school: school)

    render json: network
  end
  def create
    school = School.find(params[:school_id])
    network = Network.new(network_params)
    network.school = school
    network.save

    render json: network
  end

  def update
    school = School.find(params[:school_id])
    network = Network.find(params[:id])
    network.update(network_params)

    render json: network
  end

  def destroy
    school = School.find(params[:school_id])
    network = Network.find(params[:id])
    network.destroy

    render json: network
  end

  private

  def network_params
    params.require(:network).permit(:url)
  end

end
