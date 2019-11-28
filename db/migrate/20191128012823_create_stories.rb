class CreateStories < ActiveRecord::Migration[6.0]
  def change
    create_table :stories do |t|
      t.string :name
      t.references :universe
      t.string :genre
      t.string :summary
      t.integer :user_id

      t.timestamps
    end
  end
end