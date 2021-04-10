import {Switch,Route } from 'react-router-dom' 
import Dashboard from './Components/Page/Dashboard'
const  App = ()=> {
  return (
    <div >
        <Switch>
          <Route path='/'
            // render = {()=>{ <Dashboard/>} }
            component ={Dashboard} 
             />  

        </Switch>
    </div>
  );
}

export default App;
