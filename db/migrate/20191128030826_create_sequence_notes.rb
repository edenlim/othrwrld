class CreateSequenceNotes < ActiveRecord::Migration[6.0]
  def change
    create_table :sequence_notes do |t|
      t.integer :story_sequence_id
      t.string :description

      t.timestamps
    end
  end
end
