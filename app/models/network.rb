# == Schema Information
#
# Table name: networks
#
#  id         :bigint           not null, primary key
#  school_id  :bigint           not null
#  url        :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Network < ApplicationRecord
  belongs_to :school

  after_create :empty_network

  def empty_network
    self.destroy if url == "" 
  end
end
