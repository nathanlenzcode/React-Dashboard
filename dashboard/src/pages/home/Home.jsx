import React from 'react'
import './home.scss'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import Widget from '../../components/widget/Widget'
import Featured from '../../components/featured/Featured'
import Chart from '../../components/chart/Chart'
import Table from '../../components/table/Table'

function Home() {
  return (
    <div className='home'>
      <Sidebar />
      <div className='homeContainer'>
        <Navbar />
        <div className='widgets'>
          <Widget type='user' />
          <Widget type='employee' />
          <Widget type='customer' />
          <Widget type='balance' />
        </div>
        <div className='charts'>
          <Featured />
          <Chart />
        </div>
        <div className='listContainer'>
          <div className='listTitle'>Latest Transaction</div>
          <Table />
        </div>
      </div>
    </div>
  )
}

export default Home
