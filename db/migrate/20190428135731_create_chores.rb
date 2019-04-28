class CreateChores < ActiveRecord::Migration[5.2]
  def change
    create_table :chores do |t|
      t.string :content

      t.timestamps
    end
  end
end
