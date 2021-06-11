# == Schema Information
#
# Table name: schools
#
#  id                 :bigint           not null, primary key
#  blog_default       :text
#  blog_default_days  :string
#  blog_order         :integer          default(0)
#  city               :string
#  description        :text
#  email              :string
#  imparato_blog_link :string
#  name               :string
#  published          :boolean
#  website            :string
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#  user_id            :bigint           not null
#
# Indexes
#
#  index_schools_on_user_id  (user_id)
#
# Foreign Keys
#
#  fk_rails_...  (user_id => users.id)
#
class School < ApplicationRecord
  belongs_to :user
  has_many :networks, dependent: :destroy
  has_many :addresses, dependent: :destroy
  has_many :teachers, dependent: :destroy
  has_many :courses, through: :addresses
  has_rich_text :description

  accepts_nested_attributes_for :networks
  
  validates_presence_of :name, message: "Veuillez entrer un nom à votre école"
  validates_presence_of :city, message: "Veuillez préciser la ville votre école"
  validates :email, format: {with: /\A[^@\s]+@[^@\s]+\z/, message: "L'email n'est pas valide"}

  validates_uniqueness_of :name, scope: [:city], message: "Cette école existe déjà"
  # validates_uniqueness_of :blog_order, scope: [:city]
  before_validation :check_order
  
  # last update of school and associated entities
  def last_update
    request = <<-STRING
                SELECT max(updated_at) FROM
                (SELECT updated_at FROM schools WHERE id = #{id}
                UNION
                SELECT updated_at FROM teachers WHERE school_id = #{id}
                UNION
                SELECT updated_at FROM addresses WHERE school_id = #{id}
                UNION
                SELECT c.updated_at FROM courses c, addresses a WHERE a.school_id = #{id} AND c.address_id = a.id
                UNION
                SELECT p.updated_at FROM properties p, courses c, addresses a WHERE a.school_id = #{id} AND c.address_id = a.id AND p.course_id = c.id) as subquery
    STRING
    return ActiveRecord::Base.connection.execute(request).first["max"]
  end

  # last update of a city name (get the max last update form all school and asociated entities)
  def self.last_udpate_city(city)
    request = <<-STRING
                SELECT max(updated_at) FROM
                (SELECT updated_at FROM schools WHERE city = '#{city}'
                UNION
                SELECT t.updated_at FROM teachers t, schools s WHERE t.school_id = s.id AND s.city = '#{city}'
                UNION
                SELECT a.updated_at FROM addresses a, schools s WHERE a.school_id = s.id AND s.city = '#{city}'
                UNION
                SELECT c.updated_at FROM courses c, addresses a, schools s WHERE a.school_id = s.id AND s.city = '#{city}' AND c.address_id = a.id
                UNION
                SELECT p.updated_at FROM properties p, courses c, addresses a, schools s WHERE a.school_id = s.id AND s.city = '#{city}' AND c.address_id = a.id AND p.course_id = c.id) as subquery
    STRING
    return ActiveRecord::Base.connection.execute(request).first["max"]
  end

  # gives cities names that are not in main_cities
  def self.secondary_cities
    request_other_cities = "SELECT distinct s.city FROM schools s LEFT JOIN main_cities mc ON mc.city = s.city WHERE mc.id IS NULL ORDER BY city ASC"
    other_cities = ActiveRecord::Base.connection.execute(request_other_cities)
  end

  private

  def check_order
    # renumbering cascade if collision
    if will_save_change_to_blog_order?
      to_move = School.where(city: city, blog_order: blog_order).first
      to_move&.update!(blog_order: to_move.blog_order + 1)
    end
  end
end
