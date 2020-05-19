import { LOGIN } from "./types"


export const userLoginFetch = user => {
    return dispatch => {
        console.log(user)
        return fetch('http://acosta.r52.ru/api/api-token-auth/', {
            method: "POST",
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
            })
            .then(resp => resp.json())
            .then(data => {
              if (data) 
              {
                localStorage.setItem("token", data.token);
                console.log(data.token);
                dispatch({type: LOGIN, payload: data.token});
              }
        })
    }
}
