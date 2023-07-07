import React from 'react'
import UpdateUserForm from './UpdateUserForm'
import AddUserForm from './AddUserForm'

function Form() {
    const flag = false
  return (
    <div className="container mx-auto my-4">
        {flag ? <AddUserForm/> : <UpdateUserForm/>}
    </div>
  )
}

export default Form