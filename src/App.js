import Routes from "./Components/Routes/Routes"
import {useAuthState} from 'react-firebase-hooks/auth'
import {fire} from './service/firebase'
import Loading from "./Components/Loading/Loading"
import cls from './App.module.css'

const App = () =>{
  const [user , loading ] = useAuthState(fire.auth())

  if(loading){
    return (
      <div className={cls.loadingContainer}>
          <Loading />
      </div>
    )
  }else{
    return(
      <>
          <div>
              <Routes user={user}/>
          </div>
      </>
    )
  }
  
}

export default App