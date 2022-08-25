import React from 'react'
import './widget.scss'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined'
import BadgeOutlinedIcon from '@mui/icons-material/BadgeOutlined'
import SupportAgentOutlinedIcon from '@mui/icons-material/SupportAgentOutlined'
import AccountBalanceOutlinedIcon from '@mui/icons-material/AccountBalanceOutlined'

function Widget({ type }) {
  let data
  switch (type) {
    case 'user':
      data = {
        title: 'USERS',
        isMoney: false,
        link: 'See all users',
        icon: (
          <PersonOutlinedIcon
            className='icon'
            style={{ color: 'red', backgroundColor: 'orange' }}
          />
        ),
      }
      break
    case 'employee':
      data = {
        title: 'EMPLOYEES',
        isMoney: false,
        link: 'See all employees',
        icon: (
          <BadgeOutlinedIcon
            className='icon'
            style={{ color: 'lightgreen', backgroundColor: 'darkgreen' }}
          />
        ),
      }
      break
    case 'customer':
      data = {
        title: 'CUSTOMERS',
        isMoney: false,
        link: 'See all customers',
        icon: (
          <SupportAgentOutlinedIcon
            className='icon'
            style={{ color: 'lightyellow', backgroundColor: 'black' }}
          />
        ),
      }
      break
    case 'balance':
      data = {
        title: 'BALANCES',
        isMoney: true,
        link: 'See all balances',
        icon: (
          <AccountBalanceOutlinedIcon
            className='icon'
            style={{ color: 'lightgray', backgroundColor: 'gray' }}
          />
        ),
      }
      break
    default:
      break
  }

  // temporary
  let amount = 135
  let diff = 45

  return (
    <div className='widget'>
      <div className='left'>
        <span className='title'>{data.title}</span>
        <span className='counter'>
          {data.isMoney && '$'} {amount}
        </span>
        <span className='link'>{data.link}</span>
      </div>
      <div className='right'>
        <div className='percentage positive'>
          <KeyboardArrowUpIcon />
          {diff} %
        </div>
        {data.icon}
      </div>
    </div>
  )
}

export default Widget
