import React, { FC } from 'react'

export const adminDetails = {
    email: "admin@gmail.com",
    password: "admin1234"
}

export const standardDetails = {
    email: "standard@gmail.com",
    password: "standard1234"
}

interface constantsProps {

}

const constants: React.FC<constantsProps> = (props) => {
    return (
        <div>
            constants
        </div>
    )
}

export default constants;