import React, { useContext } from 'react'
import './navbar.scss'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined'
import LanguageIcon from '@mui/icons-material/Language'
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined'
import FullscreenExitIcon from '@mui/icons-material/FullscreenExit'
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined'
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline'
import ListIcon from '@mui/icons-material/List'
import { DarkModeContext } from '../../context/darkModeContext'

function Navbar() {
  const { dispatch } = useContext(DarkModeContext)
  return (
    <div className='navbar'>
      <div className='wrapper'>
        <div className='search'>
          <input type='text' placeholder='Search...' />
          <SearchOutlinedIcon className='searchIcon' />
        </div>
        <div className='items'>
          <div className='item'>
            <LanguageIcon className='icon' />
            English
          </div>
          <div className='item'>
            <DarkModeOutlinedIcon
              className='icon'
              onClick={() => dispatch({ type: 'TOGGLE' })}
            />
          </div>
          <div className='item'>
            <FullscreenExitIcon className='icon' />
          </div>
          <div className='item'>
            <NotificationsOutlinedIcon className='icon' />
            <div className='counter'>1</div>
          </div>
          <div className='item'>
            <ChatBubbleOutlineIcon className='icon' />
            <div className='counter'>2</div>
          </div>
          <div className='item'>
            <ListIcon />
          </div>
          <div className='item'>
            {/* <img src='../../images/profile.jpg' alt='img' className='avatar' /> */}
            <img
              src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZVhgYgBXkDTCE2Pu-n5D5zwNoEwDGifYMRQ&usqp=CAU'
              alt='img'
              className='avatar'
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
