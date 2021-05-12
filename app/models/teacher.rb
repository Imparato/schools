class Teacher < ApplicationRecord
  has_many :teachings, :dependent => :destroy
end
