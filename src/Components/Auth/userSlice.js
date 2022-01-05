import { loadData, saveData } from "../Utils/localStorage"

const LOGIN = "LOGIN"
const LOGOUT = "LOGOUT"

export const trackLogin = (data) => {
  return{
      type: LOGIN,
      payload:data
  }
} 

export const trackLogout = () => {
  return{
      type: LOGOUT,
  }
} 
const init = loadData("userData")||{
  userData:null,
  isAuth:false
}

export const userReducer = (state=init,action)=>{
  switch (action.type) {
    case LOGIN:{
      const updateState = {
          ...state,
          isAuth : true,
          userData : action.payload
      }
     saveData("userData",updateState)
      return updateState
  }
    case LOGOUT: {
      const updateState = {
          ...state,
          isAuth : false,
          userData : {},
      }
      saveData("userData",updateState)
      return updateState
  }
    default:
      return state
  }
  export {loadData,saveData}