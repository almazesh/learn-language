import Content from "../../Components/Content/Content";
import cls from './Main.module.css'
import Card from "../../Components/Card/Card";
import { useEffect, useState } from "react";
import AddCard from "../../Components/AddCard/AddCard";
import Signout from "../../Components/SignOut/SignOut";
import {fire} from '../../service/firebase'
import { createCard , getCard  , deleteCard, changeCard} from "../../API";
import { useAuthState } from 'react-firebase-hooks/auth';
import Loading from "../../Components/Loading/Loading";




function Main() {
  const [rotate , setRotate] = useState(null)
  const [text , setText] = useState('')
  const [user] = useAuthState(fire.auth())
  const [disabledBtn , setDisabledBtn] = useState(false)
  useEffect(() =>{
    getCard(`${user.uid}.json`)
    .then(res => res.json())
    .then(r =>{
       if(r){
        const data = Object.entries(r).map(item =>{
          const id = item[0];
          return {
            ...item[1],
            id
          }
        })

        setRotate(data)
       }else{
         setRotate([])
       }
    })
    
  } , [user.uid , text ])

  console.log(rotate) 

  const handleRotate = (id) =>{
      setRotate(prev => {
        return prev.map(item => {
          if(item.id === id){
            return {
              ...item,
              isRemembered:!item.isRemembered
            }
          }else{
            return item
          } 
        })
      })
  }

  const onNewCard = (en , ru , setEn , setRu) =>{
      setDisabledBtn(true)
      if(en !== '' && ru !== ''){
          createCard(
             {
               enLang:en,
               ruLang:ru,
               isRemembered:false
             },
             `${user.uid}.json`
          )
          .then(res => res.json())
          .then(r => {
            setDisabledBtn(false)
            setText(r)
            setEn('')
            setRu('')
          })
      }else{
        alert('Fill the area!')
      }
  }

  const onDeleteCard = (id) =>{
    console.log(id)
    deleteCard(user.uid , id)
    .then(res => res.json())
    .then(r => setText(id))
  }


  const handleChange = (id , isRemembered)=>{
     changeCard(
       {
         isRemembered:!isRemembered
       },
       user.uid,
       id
     ).
     then(res => res.json())
     .then(r =>{
       setText({
         id , r
       })
     })
  }

  const signOut = (e) =>{
    e.preventDefault();
    fire.auth().signOut();
  }
  return (
    <>
      <div className={cls.root}>
          <Content />
          <div className={cls.content}>
              <Signout onSignOut={signOut}/>
              <AddCard   disabledBtn={disabledBtn} addHandleInput={onNewCard}/>
              <div className={cls.cards}>
                  {

                    rotate?.length === 0 ? (
                       <p style={{textAlign:'center',color:'red'}}>Карточек нет! Добавьте  новое слово, чтобы добвить в карточки</p>
                    ) :
                    rotate ? (
                      rotate.map(({ ruLang , enLang  , id , isRemembered}) =>{
                        return (
                          <Card 
                            onChangeCard={() =>{
                               handleChange(id)
                            }}
                            onDelete={() =>{
                               onDeleteCard(id)
                            }}
                            rotate={() =>{
                               handleRotate(id)
                            }} 
                            isRemembered={isRemembered} 
                            ru={ruLang} 
                            en={enLang} 
                            key={id}/>
                        )
                      })
                    ) : (
                      <Loading />
                    )
                  }
              </div>
          </div>
      </div>
    </>
  );
}

export default Main;
