import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Link,
  Switch,
  withRouter,
} from 'react-router-dom'
import {
  rootRouters,
  routers,
} from '@/router/index.jsx'

 class App extends Component{
    constructor(props) {
        super(props);
        this.state = {
            code: '',
        }
    }

   render() {
     return (
       <div className="App">
         <Router>
           <Switch>
             {
               routers.map((route,index) => {
                 return(
                   <Route
                     key={index}
                     path={route.path}
                     exact={route.exact}
                     component={route.component}/>
                 )
               })
             }
           </Switch>
         </Router>
       </div>
     );
   }
}
export default App
