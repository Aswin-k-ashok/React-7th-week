import React from 'react'

function Employee(props) {
    return (
        <div>
            <h1> index :{props.key}, name:{props.name},age:{props.age} </h1>
        </div>
    )
}

export default Employee

