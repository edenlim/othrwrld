class CreateStories < ActiveRecord::Migration[6.0]
  def change
    create_table :stories do |t|
      t.string :name
      t.references :universe
      t.references :genre
      t.string :summary
      t.references :user, foreign_key: true

      t.timestamps
    end
  end
end