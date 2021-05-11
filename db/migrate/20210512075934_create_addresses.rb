class CreateAddresses < ActiveRecord::Migration[6.1]
  def change
    create_table :addresses do |t|
      t.boolean :published
      t.references :school, null: false, foreign_key: true
      t.string :address
      t.string :address_complement
      t.string :city
      t.string :zipcode
      t.text :details
      t.string :phone

      t.timestamps
    end
  end
end
