import { useState } from 'react';
import './MyForm.css';

function MyForm() {
    const [myCar, setMyCar] = useState('Volvo');

    const handleChange = (event) => {
        setMyCar(event.target.value);
    };

    return (
        <div className="my-form">
            <form>
                <label>Select a car:</label>
                <select className="form-control" value={myCar} onChange={handleChange}>
                    <option value="Ford">Ford</option>
                    <option value="Volvo">Volvo</option>
                    <option value="Fiat">Fiat</option>
                </select>
            </form>
            <hr />
            <p>My Car: {myCar}</p>
        </div>
    );
}

export default MyForm;