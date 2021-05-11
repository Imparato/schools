class CreateNetworks < ActiveRecord::Migration[6.1]
  def change
    create_table :networks do |t|
      t.references :school, null: false, foreign_key: true
      t.references :provider, null: false, foreign_key: true
      t.string :url

      t.timestamps
    end
  end
end
