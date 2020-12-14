import React from 'react';
import './IdInput.css';

const IdInput = ({ onInputChange, onButtonSubmit }) => {
    return (
        <div>
            <p className='f3'>
                {'Please input video ID to use the application'}
            </p>
            <div className='center'>
                <div>
                    <input type='text' onChange={onInputChange} />
                </div>
                <button
                    onClick={onButtonSubmit}
                >Steal Data</button>
            </div>
        </div>
    );
}

export default IdInput;