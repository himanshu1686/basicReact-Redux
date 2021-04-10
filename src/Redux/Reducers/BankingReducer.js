const initState = {
    amount : 0 ,
    accountType:"Saving Account"   
}
const BalanceReducer = ( state=initState , action  )=>{
    switch(action.type){
        case "WITHDRAW": 
        return {
            ...state,
            amount:state.amount-action.payload
        }
        case "DEPOSIT": 
        return {
            ...state,
            amount:state.amount+action.payload
        }
        case "DELETE_ACC": 
        return {
            ...state,
            amount:0
        }
        case "COLLECT_INTREST": 
        return {
            ...state,
            amount:(state.amount*1.08)
        }
        case "CHANGE_ACC":
            return {
                ...state,
                accountType: (state.accountType==="Saving Account") ? "Current Account":"Saving Account" ,
            }
        default :
        return state
    }
}
export default BalanceReducer