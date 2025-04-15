# Special-topics-Noah

This litle section is to help you install this properly
1. open the powershell terminal in the project folder
2. do a "npm i" in terminal to get the node_modules
3. do a "cd client" in terminal to go to the client folder
4. type "npm i: in the terminal to get the node_modules for client 

how to run code
1. go to the client folder if you are in a sub-folder in ther terminal
2. in terminal type "npm run dev" to run the program

how to add/mess with the database from Postman or thunderClient
in the url section of them type "http://localhost:5000/api/cards/"

how some of the HTTP stuff works on this

GET - gets all the data

GET/id - gets data by the id of whatever the data is

post - post post things to the database(here's a example of how a item is added this way)
{
  "Card_Name": "Gem-Knight pearl",
  "Attribute": "Earth",
  "Type_of_card": "Xyz",
  "LevelRankLink": 4,
  "Image": "https://static.wikia.nocookie.net/vsbattles/images/4/43/GemKnightPearl-TF06-JP-VG.png/revision/latest?cb=20181013073646",
  "Types": [
      "Rock",
      "Xyz"
  ],
  "Card_Text": "2 level 4 monsters",
  "Stats": {
      "ATK": 2600,
      "DEF": 1900
  },
  "Number_Own": 3
} 

(and if you add a " mark in the Card_text section than add a \ before the ")

PUT/id - this replaces the information of a item by the id (example of changed stuff from up top)

{
  "Card_Name": "Gem-Knight pearl",
  "Attribute": "Water",
  "Type_of_card": "Xyz",
  "LevelRankLink": 4,
  "Image": "https://static.wikia.nocookie.net/vsbattles/images/4/43/GemKnightPearl-TF06-JP-VG.png/revision/latest?cb=20181013073646",
  "Types": [
      "Rock",
      "Xyz"
  ],
  "Card_Text": "2 level 4 monsters.",
  "Stats": {
      "ATK": 2600,
      "DEF": 1900
  },
  "Number_Own": 4
} 

DELETE/id - this deletes a item from the database by its id
