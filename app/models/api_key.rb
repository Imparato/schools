# == Schema Information
#
# Table name: api_keys
#
#  id         :bigint           not null, primary key
#  key        :string
#  comment    :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class ApiKey < ApplicationRecord
  before_save :check_key

  private

  def check_key
    self.key = SecureRandom.uuid if key.nil?
  end
end
