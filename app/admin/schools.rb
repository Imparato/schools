ActiveAdmin.register School do
  menu priority: 2
  # See permitted parameters documentation:
  # https://github.com/activeadmin/activeadmin/blob/master/docs/2-resource-customization.md#setting-up-strong-parameters
  #
  # Uncomment all parameters which should be permitted for assignment
  #
  permit_params :name, :published, :description, :email, :website, :blog_default, :user_id, :imparato_blog_link, :city, :blog_order, :blog_default_days
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
  scope(:paris) { |schools| schools.where(city: "Paris") }
  scope(:Lyon) { |schools| schools.where(city: "Lyon") }
  scope(:marseille) { |schools| schools.where(city: "Marseille") }
  scope(:Bordeaux) { |schools| schools.where(city: "Bordeaux") }
  scope(:Nantes) { |schools| schools.where(city: "Nantes") }
  scope(:Toulouse) { |schools| schools.where(city: "Toulouse") }
  scope(:Lille) { |schools| schools.where(city: "Lille") }
  scope(:Nice) { |schools| schools.where(city: "Nice") }
  scope(:Strasbourg) { |schools| schools.where(city: "Strasbourg") }


  index do
    selectable_column
    id_column
    column :name
    column :blog_order
    column :published
    column :email
    column :city
    column :updated_at
    actions
  end

end
