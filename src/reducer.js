
const initialState = {
    username: "abhishek saxena"
}

export default function updateUsername(state = initialState, action) {
    if (typeof state === 'undefined') {
        return initialState
    }
    // console.log("HI = ", action);
    // For now, don't handle any actions
    // and just return the state given to us.
    switch (action.type) {
        case "ADD_USER_NAME":
            console.log("Reducer  = ", action);
            return Object.assign({}, state, {
                toggleTodo: action.payload
            })
        default:
            return state
    }
    //return state
}