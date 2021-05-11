class CreateSchools < ActiveRecord::Migration[6.1]
  def change
    create_table :schools do |t|
      t.string :name
      t.boolean :published
      t.text :description
      t.string :email
      t.string :website
      t.text :blog_default
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
