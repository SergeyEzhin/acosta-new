import { LOGIN, SHOW_ERROR_ALERT, HIDE_ERROR_ALERT, SAVE_AUTH } from "./types"


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
              if (data.token) 
              {
                localStorage.setItem("token", data.token);
                console.log(data.token);
                dispatch({type: HIDE_ERROR_ALERT});
                dispatch({type: LOGIN, payload: data.token});
              }
              else 
              {
                dispatch({type: SHOW_ERROR_ALERT});
              }
        })
    }
}

export const getProfile = () => 
{
  return dispatch => 
  {
    if(localStorage.getItem('token'))
    {
      let token = localStorage.getItem('token');
      dispatch({type: SAVE_AUTH, payload: token});
    }
  }
}
