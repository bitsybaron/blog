const initialState = {
    posts: [],
    products: []
}


export function getPosts(posts){
    return {
        type: "GET_POSTS",
        payload: posts

    }
}

export function getProducts(products){
    return {
        type: "GET_PRODUCTS",
        payload: products

    }
}


export default function reducer(state = initialState, action){
    const {type, payload} = action
    switch(type) {
        case "GET_POSTS":
            return {...state, posts: payload}
        case "GET_PRODUCTS":
            return {...state, products: payload}
        default:
            return state
    }
        
          
}