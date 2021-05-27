class Network < ApplicationRecord
  belongs_to :school

  after_create :empty_network

  def empty_network
    self.destroy if url == "" 
  end
end
