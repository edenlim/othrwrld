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

Character.create(name: "Jane Hutton",  user_id: 1)
Character.create(name: "Hiro Smith",  user_id: 1)
Character.create(name: "Marie Alex",  user_id: 1)
Character.create(name: "Roxanne Mecure",  user_id: 1)
Character.create(name: "Debra", user_id: 1)

Relationship.create(character_id: 1, character2: 2, affiliation: "Cousin")
Relationship.create(character_id: 1, character2: 4, affiliation: "Friend")
Relationship.create(character_id: 2, character2: 3, affiliation: "Friend")
Relationship.create(character_id: 2, character2: 5, affiliation: "Couple")
Relationship.create(character_id: 3, character2: 5, affiliation: "Friend")



CharactersStory.create(character_id: 1, story_id: 1, importance: 1, notes: "Not important")
CharactersStory.create(character_id: 1, story_id: 2, importance: 1, notes: "Not important")
CharactersStory.create(character_id: 2, story_id: 2, importance: 5, notes: "Very important")
CharactersStory.create(character_id: 3, story_id: 1, importance: 2, notes: "A little important")
CharactersStory.create(character_id: 3, story_id: 2, importance: 5, notes: "Very important")
CharactersStory.create(character_id: 4, story_id: 1, importance: 5, notes: "Very little important")
CharactersStory.create(character_id: 4, story_id: 2, importance: 2, notes: "A little important")
CharactersStory.create(character_id: 5, story_id: 2, importance: 5, notes: "Very important")

Genre.create(name: "Sci-fi")
Genre.create(name: "Comedy")
Genre.create(name: "Romance")
Genre.create(name: "Horror")

Story.create(name: "The Lorems", universe_id: 1, genre_id: 3, summary: "Funny Romance story about a group of kids",user_id: 1)
Story.create(name: "Bananas", universe_id: 1, genre_id: 4, summary: "A mind-controlling virus called Banana is spreading across the world",user_id: 1)
Story.create(name: "General Assembly", universe_id: 1, genre_id: 1, summary: "An alternative world where Coders conquered the world and everyone is enlisted to code",user_id: 1)

Quality.create(quality: 'Hair', value: 'Black', character_id: 1)
Quality.create(quality: 'Hair', value: 'Brown', character_id: 2)
Quality.create(quality: 'Hair', value: 'Black', character_id: 3)
Quality.create(quality: 'Height', value: 'Tall', character_id: 1)