export type AuthState = {
    isAuthenticated: boolean;
    userName: string;
    accessToken: string;
    refreshToken: string
}

const initialState: AuthState = {

    isAuthenticated: false,
    userName: "",
    accessToken: "",
    refreshToken: ""
}

export type AuthAction = {
    type: "auth_login" | "auth_logout";
    payload?: AuthState
} 

// Action: login {type: "auth_login", paylaod: {isAthenticated: true, ....} }
// Action logout {type: "auth_logout"}

export const authReducer = (currentState=initialState, action: AuthAction) => {

    //return the new/updated state;
    if(action.type === "auth_login" && action.payload){
        return action.payload;
    }

    if(action.type === "auth_logout"){
        return initialState;
    }


    return currentState;

}