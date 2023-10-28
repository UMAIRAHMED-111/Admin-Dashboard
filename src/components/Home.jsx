import React from 'react'
import { BsFillArchiveFill, BsFillChatSquareDotsFill, BsPeopleFill} from 'react-icons/bs'

import {MdOutlineSupportAgent} from 'react-icons/md'

import {FaHandHoldingDollar, FaLocationDot} from 'react-icons/fa6'


import {PiWarningOctagonFill} from 'react-icons/pi'

const handleRefresh = () => {
  window.location.reload(); // This line will reload the entire page
};

function Home() {
  return (
    <main className='main-container'>
        <div className='main-title'>
            <h3>Home</h3>
        </div>

        <div className='main-cards'>
            <div className='card' onClick={handleRefresh}>
                <div className='card-inner'>
                    <BsFillChatSquareDotsFill className='card_icon'/>
                    <h1>500</h1>
                    <h3>All Chats</h3>
                </div>
            </div>
            <div className='card' onClick={handleRefresh}>
                <div className='card-inner'>
                    <BsPeopleFill className='card_icon'/>
                    
                    <h1>100</h1>
                    <h3>Leads</h3>
                </div>
            </div>
            <div className='card'>
                <div className='card-inner' onClick={handleRefresh}>
                    <MdOutlineSupportAgent className='card_icon'/>
                    
                    <h1>100</h1>
                    <h3>Support Requests</h3>
                </div>
            </div>
        </div>
        <div className='main-cards'>
        <div className='card2'>
                <div className='card-inner' onClick={handleRefresh}>
                    <FaHandHoldingDollar className='card_icon'/>
                    
                    <h1>100</h1>
                    <h3>Refund Requests</h3>
                </div>
            </div>
            <div className='card2'>
                <div className='card-inner' onClick={handleRefresh}>
                    <FaLocationDot className='card_icon'/>
                    
                    <h1>100</h1>
                    <h3>Locations</h3>
                </div>
            </div>
            <div className='card2'>
                <div className='card-inner' onClick={handleRefresh}>
                    <PiWarningOctagonFill className='card_icon'/>
                    
                    <h1>100</h1>
                    <h3>Complaints</h3>
                </div>
            </div>
        </div>
    </main>
  )
}

export default Home