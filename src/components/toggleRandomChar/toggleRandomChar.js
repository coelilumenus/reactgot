import React from 'react';

const ToggleRandomChar = ({toggleRandomChar}) => {
    return (
        <button 
            type="button"
            className="btn btn-light btn-lg mb-5"
            onClick={toggleRandomChar}>Toggle random character</button>
    )
}

export default ToggleRandomChar;