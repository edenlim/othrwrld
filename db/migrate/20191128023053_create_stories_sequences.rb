class CreateStoriesSequences < ActiveRecord::Migration[6.0]
  def change
    create_table :stories_sequences do |t|
      t.references :story
      t.integer :chronology
      t.string :title

      t.timestamps
    end
  end
end