import { useState } from 'react'
import cls from './AddCard.module.css'

const AddCard = ({addHandleInput , disabledBtn , setEn , setRu}) =>{
    const [enInput , setEnInput] = useState('')
    const [ruInput , setRuInput] = useState('')

    return(
        <>
            <div className={cls.root}>
                 <input 
                    type="text"
                    placeholder="English variant"
                    onChange={(e) => setEnInput(e.target.value)}
                    value={enInput}
                 />
                 <input 
                    type="text"
                    placeholder="Russian variant"
                    onChange={(e) => setRuInput(e.target.value)}
                    value={ruInput}
                 />
                 <button
                    disabled={disabledBtn}
                    onClick={(e) =>{
                        e.preventDefault();
                        addHandleInput(enInput , ruInput , setRuInput , setEnInput)
                    }}
                 >Add</button>
            </div>
        </>
    )
}

export default AddCard