class CreatePosts < ActiveRecord::Migration[5.1]
  def change
    create_table :posts do |t|
      t.string :name
      t.text :description
      t.integer :category_id

      t.timestamps
    end
  end
end
