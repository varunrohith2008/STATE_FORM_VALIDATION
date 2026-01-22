import { useState } from 'react';

const EvenNumberList = () => {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    const evenNumbers = numbers.filter(n => n % 2 === 0);

    return (
        <div className="card">
            <h3>4. Even Numbers from List</h3>
            <div className="array-preview">
                <strong>Source Array:</strong> [{numbers.join(', ')}]
            </div>
            <div className="display-area">
                <strong>Even Numbers:</strong>
                <ul className="number-list">
                    {evenNumbers.map(n => (
                        <li key={n} className="even-badge">{n}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default EvenNumberList;
