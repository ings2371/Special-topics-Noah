var express = require('express');
var router = express.Router();
var Card = require('../../models/monster_Card')

//Get all cards --> /books/
router.get('/', (req, res) => {
  Card.find().exec() 
    .then(card => {
      res.send(card)
  })
  .catch(err => {
      res.status(500).send()
  })
})

//Get one card by ID
router.get('/:id', (req, res) => {
  Card.findById(req.params.id).exec()
      .then( card => {
          if(!card){
              res.status(404).send()//card with given id does not exist
          } else{
              res.send(card)
          }
      })
      .catch( err => {
          if (err.name === "CastError"){
              res.status(400).send({message: "Invalid ID Provided"})
          } else{
              res.status(500).send({message: "Server error, come back soon"})
          }
      })
})

//Create a new card
router.post('/', (req, res) => {
    
  //creat a new instance of Card and apply the req.body into it
  const newCard = new Card(req.body)
  //persist it the database
  newCard.save()
  .then( result => res.status(201).send(result))
  .catch( err => res.status(500).send())
})


//update a Card by ID
router.put('/:id', (req, res) => {
  Card.findByIdAndUpdate(req.params.id, req.body, { new: true }).exec()  // Pass req.body as the update data and { new: true }
      .then(updatedCard => {
          if (!updatedCard) {
              // If the card was not found
              return res.status(404).send({ message: "card not found" });
          }
          // Return the updated book
          res.status(200).send(updatedCard);
      })
      .catch(err => {
          console.error(err);  // Log the error for debugging
          if (err.name === "CastError") {
              // Handle invalid ObjectId format
              res.status(400).send({ message: "Invalid ID Provided" });
          } else {
              // Handle server errors
              res.status(500).send({ message: "Server error, please try again later" });
          }
      });
});


//Delete one Card by ID
router.delete('/:id', (req, res) => {
  Card.findByIdAndDelete(req.params.id).exec()
      .then(result => {
          if (!result) {
              // If no card was found
              res.status(404).send(); // This is fine, but let's ensure this path is not left unhandled
          } else {
              // If deletion was successful, but we're missing the proper response status
              res.status(200).send({
                  message: "Object was deleted!",
                  book: result
              });
          }
      })
      .catch(err => {
          if (err.name === "CastError") {
              res.status(400).send({ message: "Invalid ID Provided" });
          } else {
              res.status(500).send({ message: "Server error, come back soon" });
          }
      });
});


module.exports = router