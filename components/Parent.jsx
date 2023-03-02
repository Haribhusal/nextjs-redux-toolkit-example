import React, { useState } from 'react'
import Child from './Child'

const Parent = () => {
    const [message, setMessage] = useState('Hello, I am parent data')

    return (
        <div className='bg-red-700 p-10'  >
            This is parent which has message like : {message}
            <Child setMessage={setMessage} />

        </div>
    )
}

export default Parent