const initialState = {
    posts: []
}


export function getAllPosts(posts){
    return {
        type: "GET_ALL_POSTS",
        payload: posts

    }
}

export default function reduer(state = initialState, action){
    const {type, payload} = action
    switch(type) {
        case "GET_ALL_POSTS":
            return {...state, posts: payload}
        default:
            return state
    }
        
          
}