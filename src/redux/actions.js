import { LOGIN, SHOW_ERROR_ALERT, HIDE_ERROR_ALERT, SAVE_AUTH, LOGOUT, FETCH_DATA, CLEAR_DATA, SAVE_DATA} from "./types";
import { push } from 'connected-react-router'



export const getData = () => 
{
  return dispatch => {
    if(localStorage.getItem('data'))
    {
      let data = localStorage.getItem('data');
      data = JSON.parse(data);
      dispatch({type: SAVE_DATA, payload: data});
    }
    else 
    {
      let token = localStorage.getItem('token');

      return fetch('http://acosta.r52.ru/api/getSchedule/', {
        method: 'GET',
        headers: {
            'Authorization': 'JWT ' + token,
            'Content-Type': 'application/json'
        }
      }).then((response) =>
      {
        return response.json();
      }).then((data) =>
      {
        dispatch({type: FETCH_DATA, payload: data});
        localStorage.setItem('data', JSON.stringify(data));
      });
    }
  }
}

export const getProfile = () => 
{
  return dispatch => 
  {
    if(localStorage.getItem('token'))
    {
      dispatch(getData());
      let token = localStorage.getItem('token');
      dispatch({type: SAVE_AUTH, payload: token});
      dispatch(push('/')); 
    }
    else 
    {
      dispatch(push('/auth'));
    }
  }
}

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
              localStorage.setItem("token", data.token);
              dispatch(getProfile());
              dispatch({type: HIDE_ERROR_ALERT});
              dispatch({type: LOGIN, payload: data.token});  
              dispatch(push('/'));
            }
            else 
            {
              dispatch({type: SHOW_ERROR_ALERT});
            }
      })
  }
}


export const userLogout = () => 
{
  return dispatch => 
  {
    localStorage.removeItem('token');
    localStorage.removeItem('data');
    dispatch({type: LOGOUT});
    dispatch({type: CLEAR_DATA});
    dispatch(push('/auth'));
  }
}
