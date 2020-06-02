import { LOGIN, SHOW_ERROR_ALERT, HIDE_ERROR_ALERT, SAVE_AUTH } from "./types";
import { push } from 'connected-react-router'


export const userLoginFetch = user => {
    console.log(push);
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
                // dispatch({});
                dispatch(push('/home'));
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
      dispatch(push('/home'));
      let token = localStorage.getItem('token');
      dispatch({type: SAVE_AUTH, payload: token});
    }
  }
}
