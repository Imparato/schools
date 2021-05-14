class ApiKey < ApplicationRecord
  before_save :check_key
  
  private

  def check_key
    self.key = SecureRandom.uuid if key.nil?
  end


end
