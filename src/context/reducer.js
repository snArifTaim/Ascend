
export const reducer = (state, action) => {
    switch (action.type) {
      
      case "set_data":
        return {
          ...state,
          datas: action.data
        }
      case "set_web":
        return {
          ...state,
          web: action.web
        }

      case "set_langs":
        return {
          ...state,
          langs: action.lang
        }
        case "set_all":
          return {
            ...state,
            all_langs: action.all_langs
          }
        case "login":
          return {
            ...state,
            login: action.login_data
          }

  
      default:
        return state
    }
  }
  
  export const initialState = {
    langs: null,
    all_langs: null,
    login: null,
    web: null,
    datas: null,
  }