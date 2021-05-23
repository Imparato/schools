require 'json'

class AddressesController < ApplicationController
  def index
    addresses = School.find(params[:school_id]).addresses
    
    render json: addresses
  end

  def update
    school = School.find(params[:school_id])
    address = Address.find(params[:id])
    address.update(address_params)
    render json: address
  end

  def create
    school = School.find(params[:school_id])
    address = Address.new(address_params)
    address.school = school
    address.save
    
    render json: address
  end

  private
  def address_params
    params.require(:address).permit(:published, :address_complement, :city, :zipcode, :phone, :details)
  end
end
