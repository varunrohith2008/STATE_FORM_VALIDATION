import { useState } from 'react';

const AgeValidation = () => {
    const [age, setAge] = useState('');

    const isEligible = age !== '' && Number(age) >= 18;

    return (
        <div className="card">
            <h3>3. Age Validation (18+)</h3>
            <input
                type="number"
                placeholder="Enter your age..."
                value={age}
                onChange={(e) => setAge(e.target.value)}
            />
            <div className="display-area">
                {age === '' ? (
                    <span className="placeholder">Enter age to check eligibility</span>
                ) : (
                    <span className={isEligible ? 'success' : 'error'}>
                        {isEligible ? '✅ Eligible (18 or older)' : '❌ Not Eligible (Under 18)'}
                    </span>
                )}
            </div>
        </div>
    );
};

export default AgeValidation;
