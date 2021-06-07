Rails.application.routes.draw do
  devise_for :admin_users, ActiveAdmin::Devise.config
  ActiveAdmin.routes(self)
  devise_for :users
  root to: 'schools#index'
  get '/api/schools', to:'api#index'
  get '/api/school', to:'api#show'
  get '/api/cities', to:'api#cities'

  resources :schools do
    resources :teachers
    resources :addresses
    resources :networks, only: [:index, :create, :update, :destroy]
  end

  post "/upload_image" => "upload#upload_image", :as => :upload_image
  get "/download_file/:name" => "upload#access_file", :as => :upload_access_file, :name => /.*/
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
