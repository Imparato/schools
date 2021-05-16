class CreateMainCities < ActiveRecord::Migration[6.1]
  def change
    create_table :main_cities do |t|
      t.string :city
      t.string :country_code
      t.text :blog_title
      t.string :blog_slug
      t.string :blog_map_iframe
      t.boolean :blog_important
      t.text :blog_intro
      t.text :blog_voir_aussi
      t.string :dedicated_host

      t.timestamps
    end
  end
end
