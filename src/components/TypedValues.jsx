import { useState } from 'react';

const TypedValues = () => {
    const [text, setText] = useState('');

    return (
        <div className="card">
            <h3>1. Real-time Typed Values</h3>
            <input
                type="text"
                placeholder="Type something..."
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <div className="display-area">
                <strong>Output:</strong> {text || <span className="placeholder">Nothing typed yet...</span>}
            </div>
        </div>
    );
};

export default TypedValues;
