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
    const matchesSearch =
    card.Card_Name.toLowerCase().includes(search.toLowerCase()) ||
    card.Type_of_card.toLowerCase().includes(search.toLowerCase()) 

    const matchesType = typeFilter === '' || card.Type_of_card === typeFilter;

    return matchesSearch && matchesType;

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
              <div className="input-group mt-3">

                {/* drop down of Type of card */}
              <select
                className="form-control"
                value={typeFilter}
                onChange={(e) => setTypeFilter(e.target.value)}
              >
                <option value="">All Types</option>
                <option value="Normal">Normal</option>
                <option value="Effect">Effect</option>
                <option value="Fusion">Fusion</option>
                <option value="Link">Link</option>
                <option value="Xyz">Xyz</option>
                <option value="Synchro">Synchro</option>
              </select>
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