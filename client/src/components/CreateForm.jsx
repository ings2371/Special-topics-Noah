import React from 'react';
import '../css/signin.css';

const CreateForm = props => {
    return ( 
        <form className="form-signin">
            <h1 className="h3 mb-3 font-weight-normal text-center">Add a card</h1>

            <label htmlFor="Card_Name" className="sr-only">Card Name</label>
            <input type="name" id="Card_Name" className="form-control" placeholder="card name" required autoFocus />

            <label htmlFor="Type_Of" className="sr-only">Type of card</label>
            <input type="type" id="Type_Of" className="form-control" placeholder="Normal, Effect or Xyz" required />

            <label htmlFor="Attribute" className="sr-only">Attribute</label>
            <input type="attribute" id="Attribute" className="form-control" placeholder="Water" required />

            <label htmlFor="Star" className="sr-only">star/rank/link</label>
            <input type="Star" id="Star" className="form-control" placeholder="4" required />

            <label htmlFor="Image" className="sr-only">Image Link</label>
            <input type="Image" id="Image" className="form-control" placeholder="image link" required />

            <label htmlFor="Types" className="sr-only">Types</label>
            <input type="types" id="Types" className="form-control" placeholder="Cyberse/Fusion/Effect" required />

            <label htmlFor="ATK" className="sr-only">ATK value</label>
            <input type="ATK" id="ATK" className="form-control" placeholder="2100" required />

            <label htmlFor="DEF" className="sr-only">DEF value</label>
            <input type="type" id="Type_Of" className="form-control" placeholder="1600" required />

            <label htmlFor="numOwn" className="sr-only">Number own</label>
            <input type="numOwn" id="numOwn" className="form-control" placeholder="5" required />

            <button className="btn btn-lg btn-primary btn-block" type="submit">Add Card</button>
        </form>
     );
}
 
export default CreateForm;