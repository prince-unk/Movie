import React from 'react'

const Card = ({movie}) => {
    return (
        <>
            <div className='card_main'>
                <div className='top'><h2>{movie.title}</h2></div>
                <div className='middle'></div>
                <div className='bottom'><h4>{}</h4></div>
            </div>
        </>
    )
}

export default Card
