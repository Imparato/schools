class AddressesController < ApplicationController

  before_action :set_schools
  before_action :set_school, except: [ :new]
  before_action :set_address, except: [:index, :new, :create]

  def index
    @addresses = @school.addresses    
    add_breadcrumb("Mes lieux de cours")
  end

  def show
    add_breadcrumb("Mes lieux de cours", school_addresses_path(@school))
    add_breadcrumb(@address.address)
    add_breadcrumb("Modifier")
  end

  def edit
    
  end

  def update
    @address = Address.find(params[:id])
    if @address.update(address_params)
      redirect_to school_addresses_path(@school)
    else
      render :edit
    end
  end

  def new
    @school = School.find(params[:school_id])
    @address = @school.addresses.new
    authorize @address
    add_breadcrumb("Mes lieux de cours", school_addresses_path(@school))
    add_breadcrumb("Ajouter un lieu")
  end

  def create
    @address = Address.new(address_params)
    @address.school = @school
    authorize @address
    if @address.save
      redirect_to school_addresses_path(@school)
    else
      render :new
    end
  end

  def destroy
    @address.destroy
    redirect_to school_addresses_path(@school)
  end

  private

  def address_params
    params.require(:address).permit(:published, :address_complement,:address, :city, :zipcode, :phone, :details)
  end

  def set_address
    @address = Address.find(params[:id])
    authorize @address
  end

  def set_schools
    @schools =  policy_scope(School).where(user: current_user)
  end

  def set_school
    @school = policy_scope(School).find(params[:school_id])
  end
  
end
