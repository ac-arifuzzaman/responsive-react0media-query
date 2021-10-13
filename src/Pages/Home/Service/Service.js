import React from 'react';
import './Service.css'

const Service = ({ service }) => {
    // console.log(service)
    // Service = (props) =>{
    //     const {service} = props;
    const { name, img, description, price } = service;
    return (
        <div className='service'>
            <img className="pt-2" src={img} alt="" />
            <h3>Name: {name}</h3>
            <h5>Price: {price}</h5>
            <p className="px-5">{description}</p>
        </div>
    );
};

export default Service;