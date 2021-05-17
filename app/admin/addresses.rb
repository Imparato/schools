ActiveAdmin.register Address do

  menu priority: 3
  # permit_params do
  #   permitted = [:published, :school_id, :address, :address_complement, :city, :zipcode, :details, :phone]
  #   permitted << :other if params[:action] == 'create' && current_user.admin?
  #   permitted
  # end
  # scope(:city) { |addresses| addresses.school }
  scope(:non_published) { |addresses| addresses.where(published: false) }
  scope(:published) { |addresses| addresses.where(published: true) }
  scope(:paris) { |addresses| addresses.where(city: "Paris") }
  scope(:Marseille) { |addresses| addresses.where(city: "Marseille") }
  scope(:Lyon) { |addresses| addresses.where(city: "Lyon") }
  scope(:Bordeaux) { |addresses| addresses.where(city: "Bordeaux") }
  scope(:Nantes) { |addresses| addresses.where(city: "Nantes") }
  scope(:Toulouse) { |addresses| addresses.where(city: "Toulouse") }
  scope(:Lille) { |addresses| addresses.where(city: "Lille") }
  scope(:Nice) { |addresses| addresses.where(city: "Nice") }
  scope(:Strasbourg) { |addresses| addresses.where(city: "Strasbourg") }

  index do
    selectable_column
    id_column
    column  :city
    column  :zipcode
    column :published
    column :address
    column :address_complement
    column :phone
    column :details
    column :school
  end
  
end
