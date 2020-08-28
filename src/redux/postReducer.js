

const initialState = {
    posts: [],
    products: [],
    cart: [],
    total: 0,
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

export function addItem(cart){
    return{
        type: "ADD_ITEM",
        payload: cart
    }
}

export function increment(cart){
    return{
        type: "INCREMENT",
        payload: cart
    }
}

export function getTotal(total) {
    return{
        type: "TOTAL",
        payload: total
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
        case "TOTAL":
            return {...state, total: payload}
        default:
            return state
    }
        
          
}