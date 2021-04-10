import React , {useState} from 'react'
import {useDispatch} from 'react-redux'
import { changeAccount, collectIntrest, deleteAccount, deposit, withdraw } from '../Redux/Actions/BankingAction'
export const Banking = () => {
    const [value, setvalue] = useState('')
    const dispatch = useDispatch()
    const handleDeposit = ()=>{
        dispatch( deposit(parseInt(value)) )
    }
    const handleWithdraw = ()=>{
        dispatch(withdraw(parseInt(value)))
    }
    const handleIntrest =()=>{
        dispatch(collectIntrest())
    }
    const handleDelete = ()=>{
        dispatch( deleteAccount() )
    }
    const changeAcc = ()=>{
        dispatch( changeAccount() )
    }
    const handleChange = (e)=>{
        setvalue(e.target.value)
    }
    
    return (
        <div className="form-group">
            <input type="text" className="form-control my-3" value={value} onChange={handleChange} />
            <button className="btn btn-success mx-2 " onClick={handleDeposit} > Deposit </button>
            <button className="btn btn-primary mx-2" onClick={handleWithdraw}> Withdraw </button>
            <button className="btn btn-warning mx-2" onClick={handleIntrest}> Collect Intrest </button>
            <button className="btn btn-danger mx-2" onClick={handleDelete} > Delete Account </button>
            <button className="btn btn-secondary mx-2" onClick={changeAcc} > Change Acount Type</button>
        </div>
    )

}
