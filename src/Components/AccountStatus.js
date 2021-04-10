import React from 'react'
import {useSelector} from 'react-redux'
const AccountStatus = () => {
    const Bank =   useSelector( state=> state.Bank  )
    return (
        <div>
            <h1> 
              {Bank.accountType} 
            </h1>
        </div>
    )
}

export default AccountStatus
