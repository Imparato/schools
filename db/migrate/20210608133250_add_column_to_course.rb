class AddColumnToCourse < ActiveRecord::Migration[6.1]
  def change
    add_column :courses, :name, :string
    add_column :courses, :start_time, :string
    add_column :courses, :end_time, :string
  end
end
