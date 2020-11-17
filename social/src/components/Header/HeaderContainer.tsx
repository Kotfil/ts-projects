import React, {useEffect} from "react";
import Header from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {setAuthUserData, StateType} from "../redux/auth-reducer";
import {AppStateType} from "../redux/redux-store";
import {Dispatch} from "redux";
import {setUserNameAC} from "../redux/profile-reducer";

type MapDispatchPropsType = {
    setAuthUserData: (id: number,email:string,login:string) => void
}

type MapStatePropsType = {
    login: string | null
    isAuth: boolean
}

export type HeaderType = MapDispatchPropsType & MapStatePropsType

const HeaderContainer = (props: any) => {
    useEffect(() => {

            .then(response => {

                if(response.data.resultCode === 0) {
                    let {id, email, login} = response.data.data
                    props.setAuthUserData(id,login,email)
                }
            });

    },[])
    return (<>
            <Header {...props}/>
        </>
    )
}
let mapStateToProps = (state: AppStateType):MapStatePropsType => ({
    login: state.auth.login,
    isAuth: state.auth.isAuth
})

// let mapDispatchToProps = (dispatch: Dispatch):MapDispatchPropsType => {
//     return {
//         setUserData: (id,email,login)  => {
//             dispatch(setAuthUserData(id,email,login))
//         }
//     }
// }

export default connect(mapStateToProps,{setAuthUserData})(HeaderContainer)