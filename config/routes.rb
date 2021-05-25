Rails.application.routes.draw do
  devise_for :admin_users, ActiveAdmin::Devise.config
  ActiveAdmin.routes(self)
  devise_for :users
  root to: 'pages#home'
  get '/api/schools', to:'api#index'
  get '/api/school', to:'api#show'
  get '/api/cities', to:'api#cities'

# react router
  get '/ecole', to: 'pages#home'
  get '/adresses', to: 'pages#home'
  get '/professeurs', to: 'pages#home'
  get '/profil', to: 'pages#home'


  resources :schools, only: [ :index, :update] do
    resources :addresses, only: [:index, :create, :update, :destroy]
    resources :networks, only: [:index, :create, :update, :destroy]
    resources :teachers, only: [:index, :create, :update, :destroy]
  end
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
