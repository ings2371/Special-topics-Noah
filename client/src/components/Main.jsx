import React, { useEffect, useState } from 'react';
import '../css/main.css'
import 'font-awesome/css/font-awesome.min.css';
import axios from 'axios';
import Card from './Card'

const Main = () => {
  //define state hook to store our data
  const [cards, setCards] = useState([]);
  //for search bar
  const [search, setSearch] = useState('');
  //for dropdown search
  const [typeFilter, setTypeFilter] = useState('');


  useEffect(() => {
    axios.get("http://localhost:5000/api/cards/")
    .then((response) => {
      console.log(response.data)
      setCards(response.data)
    })
    .catch(err => console.log(err))
  }, [])

  // Handle search input change
  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  // Filter cards based on search query
  const filteredCards = cards.filter((card) => {
    // Check if any field contains the search query (case insensitive)
    return (
      card.Card_Name.toLowerCase().includes(search.toLowerCase())
    );
  });

    return ( 
      <div>
        <section className="jumbotron text-center">
          <div className="container">
            <div className="input-group">
              <input type="text" className="form-control" placeholder="Search for a card" value={search} onChange={handleSearchChange} />
              <div className="input-group-append">
                <button className="btn btn-secondary" type="button">
                  <i className="fa fa-search"></i>
                </button>
              </div>
            </div>
          </div>
        </section>

        <div className="album py-5 bg-light">
          <div className="container">
            <div className="row">
              {
                filteredCards.map( card =>{
                  return (
                  <Card key={card._id} card={card}/>
                  )
                })
              }
              
            </div>
          </div>
        </div>
      </div>
    );
}
 
export default Main;