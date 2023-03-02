import React from 'react'

const Child = ({ setMessage }) => {
    return (
        <div className='bg-green-400'>
            <div className=''>Child</div>
            <button onClick={() => setMessage('I am changed from child')}>Change Conetent</button>
        </div>

    )
}

export default Child