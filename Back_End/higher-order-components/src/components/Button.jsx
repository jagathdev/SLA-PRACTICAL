import React from 'react'

const Button = ({ btnName }) => {
    return (
        <>
            <button className='bg-black text-white p-2 rounded-2xl'>{btnName}</button>
        </>
    )
}

export default Button