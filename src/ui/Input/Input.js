import React from 'react'

export const Input = ({type = "text", name, id = null, placeholder = null}) => {
    return (
        <input type={type} name={name} id={id} placeholder={placeholder} />
    )
}