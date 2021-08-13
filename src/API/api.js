export const baseURL = 'https://database-cc3d2-default-rtdb.firebaseio.com/'

export const API = {
    get: ( url  , userId) =>{
        return fetch(`${baseURL}/${url}/${userId}`)
    },

    post: ( data , url , userId ) =>{
        return fetch(`${baseURL}/${url}/${userId}` ,{
            method:'POST',
            body:data
        })
    },
    patch: (data , url , userId , cardId) =>{
        return fetch(`${baseURL}/${url}/${userId}/${cardId}` , {
            method:'PATCH',
            body:data
        })
    },
    delete: (url, userId , cardId) =>{
        return fetch(`${baseURL}/${url}/${userId}/${cardId}.json` , {
            method:'DELETE'
        })
    }
}