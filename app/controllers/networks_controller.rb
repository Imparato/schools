class NetworksController < ApplicationController

  def create
    school = School.find(params[:school_id])
    network = Network.new(network_params)
    network.school = school
    network.save
  
    render json: render_json(school)
  end

  def update
    school = School.find(params[:school_id])
    network = Network.find(params[:id])
    network.update(network_params)

    render json: render_json(school)
  end

  private

  def network_params
    params.require(:network).permit(:url)
  end

  def render_json(school)
    result = []
      result << {
        school: school,
        network: school.networks
      }
    return result
  end
  
end
