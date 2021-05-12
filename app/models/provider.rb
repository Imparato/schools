class Provider < ApplicationRecord
  has_many :networks, :dependent => :destroy
end
