import React from 'react';

const Input = ({ props }) => {
    const { label, type, value, onChange, placeholder, maxLength } = props;

    return (
        <div>
            <label>{label}</label>
            <input 
                type={type}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                maxLength={maxLength}
                
            />
        </div>
    );
};

export default Input;