class School < ApplicationRecord
  belongs_to :user
  has_many :networks, :dependent => :destroy
  has_many :addresses, :dependent => :destroy

  validates_uniqueness_of :name, :scope => [:city]
end
