import React from 'react'
import 
{BsGrid1X2Fill, BsCartFill, BsMenuButtonWideFill, BsFillGearFill,BsStarHalf}
 from 'react-icons/bs'
 import logo from '../public/download-removebg-preview.png';


function Sidebar({openSidebarToggle, OpenSidebar}) {
  return (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive": ""}>
        <div className='sidebar-title'>
            <div className='sidebar-brand'>
                <img src={logo} alt="Logo" className='logo'/>
            </div>
            <span className='icon close_icon' onClick={OpenSidebar}>x</span>
        </div>

        <ul className='sidebar-list'>
            <li className='sidebar-list-item dashboard'>
                <a className="dashboard-title" href="">
                    <BsGrid1X2Fill className='icon'/> Dashboard
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a className="non-dashboard" href="">
                    <BsCartFill className='icon'/> User Chats
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a className="non-dashboard" href="">
                    <BsStarHalf className='icon'/> Administration
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a className="non-dashboard" href="">
                    <BsStarHalf className='icon'/> Reports
                </a>
            </li>
        </ul>
    </aside>
  )
}

export default Sidebar