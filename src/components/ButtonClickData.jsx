import { useState } from 'react';

const ButtonClickData = () => {
    const [inputValue, setInputValue] = useState('');
    const [displayValue, setDisplayValue] = useState('');

    const handleShowData = () => {
        setDisplayValue(inputValue);
    };

    return (
        <div className="card">
            <h3>2. Show Data on Button Click</h3>
            <div className="input-group">
                <input
                    type="text"
                    placeholder="Enter data..."
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                />
                <button onClick={handleShowData}>Show Data</button>
            </div>
            <div className="display-area">
                <strong>Output:</strong> {displayValue || <span className="placeholder">Click button to show data</span>}
            </div>
        </div>
    );
};

export default ButtonClickData;
