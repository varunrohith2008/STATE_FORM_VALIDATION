import { useState } from 'react';

const OddNumberValidator = () => {
    const [number, setNumber] = useState('');
    const [error, setError] = useState('');

    const handleChange = (e) => {
        const val = e.target.value;
        setNumber(val);

        if (val !== '' && Number(val) % 2 !== 0) {
            setError('⚠️ This is not an even number!');
        } else {
            setError('');
        }
    };

    return (
        <div className="card">
            <h3>5. Odd Number Validator</h3>
            <input
                type="number"
                placeholder="Enter an even number..."
                value={number}
                onChange={handleChange}
            />
            <div className="display-area">
                {error ? (
                    <span className="error">{error}</span>
                ) : number !== '' ? (
                    <span className="success">Great! {number} is even.</span>
                ) : (
                    <span className="placeholder">Enter a number to validate</span>
                )}
            </div>
        </div>
    );
};

export default OddNumberValidator;
