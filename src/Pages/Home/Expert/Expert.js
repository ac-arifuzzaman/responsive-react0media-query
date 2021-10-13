import React from 'react';

const Expert = ({ expert }) => {
    const { img, name, experts } = expert;
    return (
        <div className='col-md-4 col-1'>
            <img src={img} alt="" />
            <h2>{name}</h2>
            <h5 className="text-danger">{experts}</h5>
        </div>

    );
};

export default Expert;