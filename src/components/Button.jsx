import React from 'react';
import './Button.css';

const Button = ({
    children,
    variant = 'primary',
    onClick,
    className = '',
    icon: Icon
}) => {
    return (
        <button
            className={`btn btn-${variant} ${className}`}
            onClick={onClick}
        >
            {children}
            {Icon && <Icon size={18} className="btn-icon" />}
        </button>
    );
};

export default Button;
