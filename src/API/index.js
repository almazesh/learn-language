import { API } from './api';
import { createNewCard , getCardsRoute ,changeCardsRoute , deleteCardsRoute} from './routes';


export const getCard = ( userId ) =>{
    return API.get(getCardsRoute , userId)
}

export const createCard = ( data , userId ) =>{
     return API.post(JSON.stringify(data) , createNewCard , userId)
}


export const changeCard = ( body  , userId , cardId) =>{
    return API.patch(JSON.stringify(body) , changeCardsRoute , userId , cardId)
}


export const deleteCard = ( userId , cardId) =>{
    return API.delete(deleteCardsRoute , userId , cardId)
}