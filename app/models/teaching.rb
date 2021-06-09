# == Schema Information
#
# Table name: teachings
#
#  id         :bigint           not null, primary key
#  course_id  :bigint           not null
#  teacher_id :bigint           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Teaching < ApplicationRecord
  belongs_to :course
  belongs_to :teacher
end
