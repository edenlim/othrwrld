class CreateStoriesNotes < ActiveRecord::Migration[6.0]
  def change
    create_table :stories_notes do |t|
      t.integer :stories_id
      t.string :description

      t.timestamps
    end
  end
end
