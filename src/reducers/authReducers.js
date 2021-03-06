const initialState = {
    isLoggedIn: false
}

export const authReducer = (state = initialState, action) =>{
    switch (action.type) {
        case "TOOGLE_LOGIN":
            return {...state, isLoggedIn: !state.isLoggedIn}
        default:
            return state;
    }
}