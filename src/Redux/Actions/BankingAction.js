export const withdraw = (amount)=>{
    return { 
        type:"WITHDRAW" ,
        payload:amount
    }
}
export const collectIntrest = ()=>{
    return {
         type:"COLLECT_INTREST" 
    }
}
export const deposit = (amount)=>{
    return { 
        type:"DEPOSIT",
        payload:amount
     }
}
export const deleteAccount = ()=>{
    return { 
        type:"DELETE_ACC"
     }
}
export const changeAccount = ()=>{
    return {
        type:"CHANGE_ACC"
    }
}
