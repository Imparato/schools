require 'json'

class AddressesController < ApplicationController
  def index
    # @school = current_user.schools.find(params[:school_id])
    @school = current_user.schools
    addresses = @school[0].addresses
    render json: addresses
  end
end
