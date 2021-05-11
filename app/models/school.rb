class School < ApplicationRecord
  belongs_to :user
  has_many :networks
  has_many :addresses

end
