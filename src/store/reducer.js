import { createSlice } from '@reduxjs/toolkit';

export const Reducer = createSlice({
    name: 'main',
    initialState: {
        login: {
            token: "",
            name: "",
            id: 0,
            email: "",
            picture: ""
        }
    },
    reducers: {
        setLogin: (state, action) => {
            state.login.token = action.payload.token;
            state.login.name = action.payload.name;
            state.login.id = action.payload.id;
            state.login.email = action.payload.email;
            state.login.picture = action.payload.picture;
        },
        setLogout: (state) => {
            state.login.token = "";
            state.login.name = "";
            state.login.id = 0;
            state.login.email = "";
            state.login.picture = "";
        }
    }
})

export const { setLogin, setLogout } = Reducer.actions;

export const selectLogin = (state) => state.main.login;

export default Reducer.reducer;