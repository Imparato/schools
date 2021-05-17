class Provider < ApplicationRecord
  has_many :networks, dependent: :destroy
  validates :name, uniqueness: true
end
