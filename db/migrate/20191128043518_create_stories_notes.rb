class CreateStoriesNotes < ActiveRecord::Migration[6.0]
  def change
    create_table :stories_notes do |t|
      t.references :story
      t.string :description

      t.timestamps
    end
  end
end