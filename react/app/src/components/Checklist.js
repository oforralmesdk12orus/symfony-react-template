import React from 'react'

export default function Checklist() {
  return (
    <div className='alert alert-default'>
      <h2>User Checklist</h2>
      <div className='row'>
        <div className='col-md-1-12 text-right'>
          <span className='fa fa-check text-success' />
        </div>
        <div className='col-md-11-12'>
          <p>Create user with username, email, and password</p>
        </div>
      </div>
      <div className='row'>
        <div className='col-md-1-12 text-right'>
          <span className='fa fa-check text-success' />
        </div>
        <div className='col-md-11-12'>
          <p>User is set to enabled</p>
        </div>
      </div>
      <div className='row'>
        <div className='col-md-1-12 text-right'>
          <span className='fa fa-check text-success' />
        </div>
        <div className='col-md-11-12'>
          <p>Assign filters</p>
        </div>
      </div>
      <div className='row'>
        <div className='col-md-1-12 text-right'>
          <span className='fa fa-check text-success' />
        </div>
        <div className='col-md-11-12'>
          <p>Assign a role: Admin, Local Admin, Teacher, or Scorer</p>
        </div>
      </div>
      <h3 className='text-success'>User is ready to login!</h3>
    </div>
  )
}
