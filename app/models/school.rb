class School < ApplicationRecord
  belongs_to :user
  has_many :networks, :dependent => :destroy
  has_many :addresses, :dependent => :destroy
  has_many :teachers, :dependent => :destroy


  validates_uniqueness_of :name, :scope => [:city]
  validates_uniqueness_of :blog_order, :scope => [:city]
  before_validation :check_order

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

  # class method to return last update from all schools of a city
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

  private

  def check_order
      # renumbering cascade if collision
      if will_save_change_to_blog_order?
        to_move = School.where(city: self.city, blog_order: self.blog_order).first
        to_move.update!(blog_order: to_move.blog_order+1) if to_move
      end
  end

end
