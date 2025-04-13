import axios from 'axios';
import {useForm} from "react-hook-form";
import {useNavigate} from "react-router-dom";
import { useState } from 'react';
import '../css/signin.css';

const CreateForm = props => {
    const [serverMessage, setServerMessage] = useState(null)
    const {register, handleSubmit, formState: {errors}} = useForm();
    const navigate = useNavigate();

    const newItem = (items) => {
        const upload = {
            Card_Name: items.Card_Name,
            Attribute: items.Attribute,
            Type_of_card: items.Type_of_card,
            LevelRankLink: parseInt(items.LevelRankLink, 10), // Convert to number
            Image: items.Image,
            Types: items.Types.split('/').map(store => store.trim()), // Convert comma-separated string to an array
            Card_Text: items.Card_Text,
            Stats: {
                ATK: items.ATK,
                DEF: items.DEF ? parseInt(items.DEF, 10) : null, //null if blank for link monsters
            },
            Number_Own: parseInt(items.Number_Own, 10), // Convert to number,
        };

        axios.post('http://localhost:5000/api/cards/', upload)
        .then(() => {
            navigate('/');
        })
         .catch(error => {
        setServerMessage(error.response?.data?.message || 'An error occurred.');
      });
    }

    return ( 
        <form onSubmit={handleSubmit(newItem)} className="form-signin">
            <h1 className="h3 mb-3 font-weight-normal text-center">Add a card</h1>

            <label htmlFor="Card_Name" className="sr-only">Card Name</label>
            <input {...register('Card_Name')} type="text" id="Card_Name" className="form-control" placeholder="card name" required autoFocus />

            <label htmlFor="Type_Of" className="sr-only">Type of card</label>
            <input {...register('Type_of_card')} type="text" id="Type_Of" className="form-control" placeholder="Normal, Effect or Xyz" required />

            {/* Dropdown for Attribute so my images don't mess up */}
            <label htmlFor="Attribute" className="sr-only">Attribute</label>
            <select
                {...register('Attribute')}
                id="Attribute"
                className="form-control"
                required
                >
                <option value="">Select Attribute</option>
                <option value="Dark">Dark</option>
                <option value="Divine">Divine</option>
                <option value="Earth">Earth</option>
                <option value="Fire">Fire</option>
                <option value="Light">Light</option>
                <option value="Water">Water</option>
                <option value="Wind">Wind</option>
            </select>
            <label htmlFor="Star" className="sr-only">star/rank/link</label>
            <input {...register('LevelRankLink')} type="number" id="Star" className="form-control" placeholder="star, rank, or link" required />

            <label htmlFor="Image" className="sr-only">Image</label>
            <input {...register('Image')} type="url" id="Image" className="form-control" placeholder="Image link" required />

            <label htmlFor="Types" className="sr-only">Types</label>
            <input {...register('Types')} type="text" id="Types" className="form-control" placeholder="Cyberse/Fusion/Effect" required />

            <label htmlFor="Card_Text" className="sr-only">Card Text</label>
            <textarea {...register('Card_Text')} type="text" id="Card_Text" className="form-control" placeholder="Card Text" required />

            <label htmlFor="ATK" className="sr-only">ATK value</label>
            <input {...register('ATK')} type="number" min="0" id="ATK" className="form-control" placeholder="ATK" required />

            <label htmlFor="DEF" className="sr-only">DEF value</label>
            <input {...register('DEF')} type="number" id="Type_Of" className="form-control" placeholder="DEF or don't put for link" required />

            <label htmlFor="numOwn" className="sr-only">Number own</label>
            <input {...register('Number_Own')} type="number" min="1" id="numOwn" className="form-control" placeholder="Copies own" required />

            {serverMessage && <p className="text-danger">{serverMessage}</p>}
            <button className="btn btn-lg btn-primary btn-block" type="submit">Add Card</button>
        </form>
     );
}
 
export default CreateForm;