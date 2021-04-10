const initState  = {
    user:{},
    logedIn:false
}

const AuthReducer = ( state = initState , action)=>{
    switch(action.type){
      case  "TOGGLE":
            return {
                ...state,
                logedIn: !state.logedIn
            }
        default:
        return state;
    } 
}
export default AuthReducer