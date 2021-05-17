ActiveAdmin.register Teacher do
  menu priority: 4
  # See permitted parameters documentation:
  # https://github.com/activeadmin/activeadmin/blob/master/docs/2-resource-customization.md#setting-up-strong-parameters
  #
  # Uncomment all parameters which should be permitted for assignment
  #
  permit_params :first_name, :last_name, :bio, :phone, :school_id
  #
  # or
  #
  # permit_params do
  #   permitted = [:first_name, :last_name, :bio, :phone, :school_id]
  #   permitted << :other if params[:action] == 'create' && current_user.admin?
  #   permitted
  # end

  index do
    selectable_column
    id_column
    column :last_name
    column :first_name
    column :phone
    column :school
    column :updated_at
    actions
  end


  
end
