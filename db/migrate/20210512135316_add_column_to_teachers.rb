class AddColumnToTeachers < ActiveRecord::Migration[6.1]
  def change
    add_reference :teachers, :school, foreign_key: true
  end
end
