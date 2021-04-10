import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { toggleLogin } from '../Redux/Actions/AuthAction';

const Auth = () => {
const Auth = useSelector(state => state.Auth)
const dispatch = useDispatch();    
const handleToggleLogin = ()=>{
        dispatch( toggleLogin() )
    }
    return (
        <div  >
          {  (!Auth.logedIn)?
            <button className=" btn btn-sm  btn-success " onClick = {handleToggleLogin} > Login </button>
            :<button className = "btn btn-sm btn-danger" onClick = {handleToggleLogin}> Logout </button> 
          }
            </div>
    )
}

export default Auth
