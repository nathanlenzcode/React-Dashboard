import * as React from 'react'
import { DataGrid } from '@mui/x-data-grid'
import './datatable.scss'
import { userRows, userColumns } from '../../datatablesource'
import { Link } from 'react-router-dom'

function Datatable() {
  const actionColumn = [
    {
      field: 'action',
      headerName: 'Action',
      width: 200,
      renderCell: () => {
        return (
          <div className='cellAction'>
            <Link to='/users/test' style={{ textDecoration: 'none' }}>
              <div className='viewButton'>View</div>
            </Link>
            <div className='deleteButton'>delete</div>
          </div>
        )
      },
    },
  ]
  return (
    <div className='datatable'>
      <div className='datatableTitle'>
        Users
        <Link
          to='/users/new'
          style={{ textDecoration: 'none' }}
          className='link'
        >
          Add New
        </Link>
      </div>
      <DataGrid
        className='datagrid'
        rows={userRows}
        columns={userColumns.concat(actionColumn)}
        pageSize={10}
        rowsPerPageOptions={[10]}
        checkboxSelection
      />
    </div>
  )
}

export default Datatable