import { createContext, useReducer } from "react";
import AuthReducer from "./AuthReducer";

//최초의 유저상태
const initialState = {
    user: null,
    isFetching: false,
    error: false,
};

//상태를 글로벌하게 관리
export const AuthContext = createContext(initialState);

export const AuthContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(AuthReducer, initialState);
    return (
        <AuthContext.Provider 
            value={{
                user: state.user,
                isFetching: state.isFetching,
                error: state.error,
                dispatch,
            }}>
            {children}
        </AuthContext.Provider>
    )
};