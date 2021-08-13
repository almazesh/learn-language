import { Redirect, Route, Switch } from "react-router-dom"
import Login from "../../Pages/Login/Login";
import Main from "../../Pages/Main/Main";

const Routes = ({user}) =>{
    return(
        <>
            <div>
                {
                    user ? (
                        <Switch>
                            <Route path='/'  exact component={Main}/>
                            <Redirect to='/'/>
                        </Switch>
                    ) : (
                        <Switch >
                            <Route path='/login' component={Login}/>
                            <Redirect to='/login'/>
                        </Switch>
                    )
                }
            </div>
        </>
    )
}
export default Routes;