import React from 'react'


function Counter(props) {
   const {title,count} = props
    return (
        <div>
            <button>{title}:{count}</button>
            {/* <button>{props.title}:{props.count}</button> */}
        </div>
    )
}

export default Counter
