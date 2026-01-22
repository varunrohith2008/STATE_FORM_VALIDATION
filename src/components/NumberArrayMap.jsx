import { useState } from 'react';

const NumberArrayMap = () => {
    const [inputValue, setInputValue] = useState('');
    const [numberList, setNumberList] = useState([]);

    const handleAddNumber = () => {
        if (inputValue !== '') {
            setNumberList([...numberList, inputValue]);
            setInputValue('');
        }
    };

    const handleClear = () => {
        setNumberList([]);
    };

    return (
        <div className="card">
            <h3>6. Number Array Mapping</h3>
            <div className="input-group">
                <input
                    type="number"
                    placeholder="Enter a number..."
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                />
                <button onClick={handleAddNumber}>Add to List</button>
                <button className="secondary" onClick={handleClear}>Clear</button>
            </div>
            <div className="display-area">
                <strong>List of Numbers:</strong>
                {numberList.length > 0 ? (
                    <div className="mapped-list">
                        {numberList.map((num, index) => (
                            <span key={index} className="number-tag">
                                {num}
                            </span>
                        ))}
                    </div>
                ) : (
                    <span className="placeholder">Add numbers to see them mapped here</span>
                )}
            </div>
        </div>
    );
};

export default NumberArrayMap;
