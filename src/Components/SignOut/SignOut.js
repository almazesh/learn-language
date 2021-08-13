import cls from './SignOut.module.css'
const Signout = ({onSignOut}) =>{
    return(
        <>
            <div className={cls.root}>
                <button onClick={onSignOut}>
                    Sign Out
                </button>
            </div>
        </>
    )
}

export default Signout;