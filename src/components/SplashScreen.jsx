import React from 'react'
import './SplashScreen.css'
import clouds from '../assets/clouds.svg'
import cupid from '../assets/cupid.svg'


const SplashScreen = () => {
    return (
        <main>
            <div>
                <img className='clouds' src={clouds} alt="clouds" />
            </div>
            <h3>FIND YOUR LOVE AT</h3>
            <h1 className='logo'>AstroAmor</h1>
            <div>
                <img className='cupids' src={cupid} alt="" />

            </div>
            <div>
                <img className='clouds' src={clouds} alt="clouds" />
            </div>
        </main>
    )
}

export default SplashScreen