require 'action_text'
class ApplicationController < ActionController::Base
  helper ActionText::Engine.helpers

  before_action :authenticate_user!
  before_action :set_schools
  
  include Pundit
  # Pundit: white-list approach.
  after_action :verify_authorized, except: :index, unless: :skip_pundit?
  after_action :verify_policy_scoped, only: :index, unless: :skip_pundit?

  # rescue_from Pundit::NotAuthorizedError, with: :user_not_authorized
  # def user_not_authorized
  #   flash[:alert] = "You are not authorized to perform this action."
  #   redirect_to(root_path)
  # end

  private

  def skip_pundit?
    devise_controller? || params[:controller] =~ /(^(rails_)?admin)|(^pages$)/
  end

  def set_schools
    @schools =  policy_scope(School).where(user: current_user)
  end
  
end
