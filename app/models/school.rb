class School < ApplicationRecord
  belongs_to :user
  has_many :networks, dependent: :destroy
  has_many :addresses, dependent: :destroy
  has_many :teachers, dependent: :destroy

  validates_uniqueness_of :name, scope: [:city]
  validates_uniqueness_of :blog_order, scope: [:city]
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
      to_move.update!(blog_order: to_move.blog_order + 1) if to_move
    end
  end
end
