import React from 'react'
import { TailSpin } from 'react-loader-spinner'


const Loader = () => {
    return (
        <div style={{ width:"100%", display: 'flex', justifyContent: 'center', alignItems: 'center', height: '1000px' }}>
            <TailSpin height="100" width="100" color='grey' ariaLabel='loading '></TailSpin>
        </div>
    )
}

export default Loader
