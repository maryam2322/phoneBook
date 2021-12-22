import React from 'react'
import './Button.style.css'
const Button = ({ onClick, children }) => {
    return (
        <button className='CustomButton' onClick={onClick}>
            {children}
        </button>
    )
}

export default Button