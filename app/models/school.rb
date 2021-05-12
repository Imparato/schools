class School < ApplicationRecord
  belongs_to :user
  has_many :networks, :dependent => :destroy
  has_many :addresses, :dependent => :destroy

end
