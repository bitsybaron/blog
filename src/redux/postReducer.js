const initialState = {
    posts: []
}


export function getPosts(posts){
    return {
        type: "GET_POSTS",
        payload: posts

    }
}



export default function reduer(state = initialState, action){
    const {type, payload} = action
    switch(type) {
        case "GET_POSTS":
            return {...state, posts: payload}
        default:
            return state
    }
        
          
}