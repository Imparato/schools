ActiveAdmin.register MainCity do
  menu priority: 10
  # See permitted parameters documentation:
  # https://github.com/activeadmin/activeadmin/blob/master/docs/2-resource-customization.md#setting-up-strong-parameters
  #
  # Uncomment all parameters which should be permitted for assignment
  #
  permit_params :city, :country_code, :blog_title, :blog_slug, :blog_map_iframe, :blog_important, :blog_intro, :blog_voir_aussi, :dedicated_host
  #
  # or
  #
  # permit_params do
  #   permitted = [:city, :country_code, :blog_title, :blog_slug, :blog_map_iframe, :blog_important, :blog_intro, :blog_voir_aussi, :dedicated_host]
  #   permitted << :other if params[:action] == 'create' && current_user.admin?
  #   permitted
  # end

  scope(:importants) { |city| city.where(blog_important: true) }

  index do
    selectable_column
    id_column
    column :city
    column :country_code
    column :blog_important
    column :dedicated_host
    actions
  end

end
