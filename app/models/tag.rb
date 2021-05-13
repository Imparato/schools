class Tag < ApplicationRecord
  has_many :properties, :dependent => :destroy
  validates :name, uniqueness: true
end
