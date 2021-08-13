import cls from './Content.module.css'
const Content = () =>{
    return(
        <>
            <div className={cls.root}>
                <div className={cls.content}>
                    <h1>{'<'}Welcome to World{'>'}</h1>
                    <p>Lorem ipsum dolor imit</p>
                </div>
            </div>
        </>
    )
}

export default Content;