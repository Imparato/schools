ActiveAdmin.register School do
  menu priority: 2
  # See permitted parameters documentation:
  # https://github.com/activeadmin/activeadmin/blob/master/docs/2-resource-customization.md#setting-up-strong-parameters
  #
  # Uncomment all parameters which should be permitted for assignment
  #
  permit_params :name, :published, :description, :email, :website, :blog_default, :user_id, :imparato_blog_link, :city
  #
  # or
  #
  # permit_params do
  #   permitted = [:name, :published, :description, :email, :website, :blog_default, :user_id, :imparato_blog_link, :city]
  #   permitted << :other if params[:action] == 'create' && current_user.admin?
  #   permitted
  # end

  scope(:non_published) { |schools| schools.where(published: false) }
  scope(:published) { |schools| schools.where(published: true) }

  index do
    selectable_column
    id_column
    column :name
    column :order
    column :published
    column :email
    column :city
    column :updated_at
    actions
  end

end
