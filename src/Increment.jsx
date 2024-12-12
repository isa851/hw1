import React from 'react';

const Increment = ({countIncrement}) => {
    return (
        <div>
            <button onClick={countIncrement}>+</button>
        </div>
    );
}

export default Increment;
