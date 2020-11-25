import React, {useEffect} from "react";
import Header from "./Header";
import {connect} from "react-redux";
import authReducer, {authThunkCreator, setAuthUserData, StateType} from "../redux/auth-reducer";
import {AppStateType} from "../redux/redux-store";
import {Dispatch} from "redux";
import {setUserNameAC} from "../redux/profile-reducer";
import {usersAPI} from "../../api/api";

type MapDispatchPropsType = {
    setAuthUserData: (email:string,id: number,login:string) => void
    authThunkCreator: () => void
}

type MapStatePropsType = {
    login: string | null
    isAuth: boolean
}

export type HeaderType = MapDispatchPropsType & MapStatePropsType

const HeaderContainer = (props: any) => {
    return (<>
            <Header {...props}/>
        </>
    )
}
let mapStateToProps = (state: AppStateType):MapStatePropsType => ( {
    login: state.auth.login,
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps,{setAuthUserData,authThunkCreator})(HeaderContainer)