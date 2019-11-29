# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.create(email: "testing@gmail.com", username: 'TestUser', password: 'password')

Universe.create(name: "Alorramola", description: 'Has magical properties', user_id: 1)
Universe.create(name: "Techdevia", description: 'Sci-fi Universe', user_id: 1)

Character.create(name: "Jane Hutton", qualities: '{"Hair": "Red"}', user_id: 1)
Character.create(name: "Hiro Smith", qualities: '{"Hair": "Black"}', user_id: 1)
Character.create(name: "Marie Alex", qualities: '{"Hair": "Rainbow"}', user_id: 1)
Character.create(name: "Roxanne Mecure", qualities: '{"Hair": "Black and white"}', user_id: 1)
Character.create(name: "Debra", qualities: '{"Hair": "Black"}', user_id: 1)

Relationship.create(character1: 1, character2: 2, relationship: "Cousin")
Relationship.create(character1: 1, character2: 4,
  relationship: "Friend")
Relationship.create(character1: 2, character2: 3, relationship: "Friend")
Relationship.create(character1: 2, character2: 5, relationship: "Couple")
Relationship.create(character1: 3, character2: 5, relationship: "Friend")