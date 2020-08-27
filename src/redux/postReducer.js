const initialState = {
    posts: [],
    products: [],
    cart: [],
    user: {},
    isLoggedIn: false
}


export function getPosts(posts){
    return {
        type: "GET_POSTS",
        payload: posts

    }
}

export function registerUser(user){
    return {
        type: "REGISTER",
        payload: user
    }
}

export function getProducts(products){
    return {
        type: "GET_PRODUCTS",
        payload: products

    }
}

export function getCart(cart){
    return {
        type: "GET_CART",
        payload: cart
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
    const {type, payload} = action
    switch(type) {
        case "GET_POSTS":
            return {...state, posts: payload}
        case "GET_PRODUCTS":
            return {...state, products: payload}
        case "GET_CART":
            return {...state, cart: payload}
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