# == Schema Information
#
# Table name: properties
#
#  id         :bigint           not null, primary key
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  course_id  :bigint           not null
#  tag_id     :bigint           not null
#
# Indexes
#
#  index_properties_on_course_id  (course_id)
#  index_properties_on_tag_id     (tag_id)
#
# Foreign Keys
#
#  fk_rails_...  (course_id => courses.id)
#  fk_rails_...  (tag_id => tags.id)
#
class Property < ApplicationRecord
  belongs_to :course
  belongs_to :tag
end
