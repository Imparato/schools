class Tag < ApplicationRecord
  has_many :properties, :dependent => :destroy
end
