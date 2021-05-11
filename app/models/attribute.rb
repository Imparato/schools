class Attribute < ApplicationRecord
  belongs_to :course
  belongs_to :tag
end
