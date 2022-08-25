import React, { useContext } from 'react'
import './sidebar.scss'
import DashboardIcon from '@mui/icons-material/Dashboard'
import ContactPhoneIcon from '@mui/icons-material/ContactPhone'
import ChairIcon from '@mui/icons-material/Chair'
import WorkIcon from '@mui/icons-material/Work'
import PaidIcon from '@mui/icons-material/Paid'
import LanIcon from '@mui/icons-material/Lan'
import SettingsIcon from '@mui/icons-material/Settings'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import LoginIcon from '@mui/icons-material/Login'
import { Link } from 'react-router-dom'
import { DarkModeContext } from '../../context/darkModeContext'

function Sidebar() {
  const { dispatch } = useContext(DarkModeContext)
  return (
    <div className='sidebar'>
      <div className='top'>
        <Link to='/' style={{ textDecoration: 'none' }}>
          <span className='logo'>Vip Erp</span>
        </Link>
      </div>
      <hr />
      <div className='center'>
        <ul>
          <p className='title'>HOME</p>
          <Link to='/' style={{ textDecoration: 'none' }}>
            <li>
              <DashboardIcon className='icon' />
              <span>Dashboard</span>
            </li>
          </Link>
          <p className='title'>ADMINISTRATION</p>
          <Link to='/users' style={{ textDecoration: 'none' }}>
            <li>
              <ContactPhoneIcon className='icon' />
              <span>Contacts</span>
            </li>
          </Link>
          <Link to='/products' style={{ textDecoration: 'none' }}>
            <li>
              <ChairIcon className='icon' />
              <span>Bureau</span>
            </li>
          </Link>
          <p className='title'>ACCOUNTING</p>
          <li>
            <WorkIcon className='icon' />
            <span>Production</span>
          </li>
          <li>
            <PaidIcon className='icon' />
            <span>Finance</span>
          </li>
          <p className='title'>IT</p>
          <li>
            <LanIcon className='icon' />
            <span>Parc IT</span>
          </li>
          <li>
            <SettingsIcon className='icon' />
            <span>Parametre</span>
          </li>
          <p className='title'>USER</p>
          <li>
            <AccountCircleIcon className='icon' />
            <span>Profile</span>
          </li>
          <li>
            <LoginIcon className='icon' />
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className='bottom'>
        <div
          className='colorOption'
          onClick={() => dispatch({ type: 'LIGHT' })}
        ></div>
        <div
          className='colorOption'
          onClick={() => dispatch({ type: 'DARK' })}
        ></div>
      </div>
    </div>
  )
}

export default Sidebar
