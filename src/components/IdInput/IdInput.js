import React from 'react';
import './IdInput.css';

const IdInput = ({ onInputChange, onButtonSubmit }) => {
    return (
        <div>
            <div className='center'>
                <div>
                    <input type='text' name='videoId' onChange={onInputChange} />
                </div>
                <button
                    type='submit'
                    onClick={onButtonSubmit}
                >Steal Data</button>
            </div>
        </div>
    );
}

export default IdInput;