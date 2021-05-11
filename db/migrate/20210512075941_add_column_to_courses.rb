class AddColumnToCourses < ActiveRecord::Migration[6.1]
  def change
    add_column :courses, :price_period, :string
  end
end
