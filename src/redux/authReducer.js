const initialState = {
    user: {},
    isLoggedIn: false
}

export function registerUser(user){
    return {
        type: "REGISTER",
        payload: user
    }
}

export function loginUser(user){
    return {
        type: "LOGIN",
        payload: user
    }
}

export function logoutUser(user){
    return {
        type: "LOGOUT",
        payload: initialState
    }
}

export default function reducer(state = initialState, action){
    const {type, payload} = action;
    switch(type) {
        case "REGISTER": 
            return {...state, user: payload, isLoggedIn: true}
        case "LOGIN":
            return {...state, user: payload, isLoggedIn: true}
        case "LOGOUT":
            return {...state, ...payload}
        default:
            return state
    }
}