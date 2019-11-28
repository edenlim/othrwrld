class CreateSequenceNotes < ActiveRecord::Migration[6.0]
  def change
    create_table :sequence_notes do |t|
      t.references :stories_sequence
      t.string :description

      t.timestamps
    end
  end
end