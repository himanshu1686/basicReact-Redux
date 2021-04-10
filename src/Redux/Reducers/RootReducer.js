import { combineReducers } from "redux";
import BankingReducer from './BankingReducer'
import AuthReducer from './AuthReducer'
const RootReducer  = combineReducers(
    {
        Bank:BankingReducer,
        Auth:AuthReducer
    }
)
export default RootReducer;