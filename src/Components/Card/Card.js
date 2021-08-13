import cls from './Card.module.css'
import {AiOutlineDelete ,AiOutlineEdit} from 'react-icons/ai'
const Card = ({ru , en , isRemembered , rotate , onDelete , onChangeCard}) =>{
    return(
        <>
           <div onClick={rotate} className={`${cls.root} ${isRemembered ? cls.isRemembered : null}`}>
                <p className={cls.front}>{en}</p>
                <p className={cls.back}>{ru}</p>
           </div>
           <div className={cls.icons}>
               <AiOutlineDelete onClick={onDelete} className={cls.delete}/>
               <AiOutlineEdit onClick={onChangeCard}  className={cls.edits}/>
           </div>
        </>
    )
}

export default Card;