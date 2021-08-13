import { fire , googleProvider} from '../../service/firebase';
import cls from './Login.module.css'

const Login = () =>{
    const signIn = e =>{
        e.preventDefault();

        fire.auth().signInWithPopup(googleProvider)
        .then(res => console.log(res))
    }

    return(
        <>
            <div className={cls.root}>
                <div className={cls.card}>
                    <h1>Authorization</h1>
                    <button
                        onClick={signIn}
                    >
                        <img src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png" alt=""/>
                    </button>
                </div>
            </div>
        </>
    )
}

export default Login;