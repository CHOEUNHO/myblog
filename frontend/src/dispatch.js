import axios from "axios";


export const loginDispatch = async (user, dispatch) => {
    dispatch({type: "LOGIN_START"})
    try {
        const response = await axios.post("auth/login", user);
        dispatch({ type:"LOGIN_SUCCESS", payload: response.data});
    } catch(err){
        dispatch({ type:"LOGIN_ERROR", payload: err});
        alert('아이다와 비밀번호를 확인해주세요');
    }
};