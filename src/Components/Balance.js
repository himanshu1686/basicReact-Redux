import React from 'react'
import {useSelector} from 'react-redux'
const Balance = () => {
    const Bank = useSelector(state => state.Bank)
    return (
        <div>
            <h1> {Bank.amount} </h1>
        </div>
    )
}

export default Balance
