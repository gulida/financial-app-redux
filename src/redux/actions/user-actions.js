import {userService} from "../../services";
import { history} from "../../_helpers";
import { alertActions} from "./alert-actions";
import {userConstants} from "../constants";


 const login = (phone, password) => {
    return dispatch => {
        dispatch(request({phone}))

        userService.login(phone, password)
            .then(
                user => {
                    dispatch(success(user))
                    history.push('/')
                },
                error => {
                    dispatch(failure(error))
                    dispatch(alertActions.error(error))
                }
            )
    }

    const request = (user) => {
        return {
            type: userConstants.LOGIN_REQUEST,
            payload: user
        }
    }

    const success = ( user ) => {
        return {
            type: userConstants.LOGIN_SUCCESS,
            payload: user
        }
    }

    const failure = (error) => {
        return {
            type: userConstants.LOGIN_FAILURE,
            payload: error
        }
    }
}

const logout = () => {
     userService.logout()
    return {
         type: userConstants.LOGOUT
    }
}


const register = ( user ) => {
     return dispatch => {
         dispatch(request(user))

         userService.register(user)
             .then(
                 user => {
                     dispatch(success())
                     history.push('/login')
                     dispatch(alertActions.success('Registration successful'))
                 },
                 error => {
                     dispatch(failure(error))
                     dispatch(alertActions.error(error))
                 }
             )
     }

     const request = (user) => {
         return {
             type: userConstants.REGISTER_REQUEST,
             payload: user
         }
     }

     const success = (user) => {
         return {
             type: userConstants.REGISTER_SUCCESS,
             payload: user
         }
     }

     const failure = (error) => {
         return {
             type: userConstants.REGISTER_FAILURE,
             payload: error
         }
     }
}

const getAll = () => {
     return dispatch => {
         dispatch(request())

         userService.getAll()
             .then(
                 users => dispatch(success(users)),
                 error => dispatch(failure(error))
             )
     }
     const request = () => {
         return {
             type: userConstants.GETALL_REQUEST
         }
     }

     const success = (users) => {
         return {
             type: userConstants.GETALL_SUCCESS,
             payload: users
         }
     }

     const failure = (error) => {
         return {
             type: userConstants.GETALL_FAILURE,
             payload: error
         }
     }
}

const _delete = (id) => {
     return dispatch => {
         dispatch(request(id))

         userService.delete(id)
             .then(
                 user => {
                     dispatch(success(id))
                 },
                 error => {
                     dispatch(failure(id, error))
                 }
             )
     }

     const request = (id) => {
         return {
             type: userConstants.DELETE_REQUEST,
             payload: id
         }
     }

     const success = (id) => {
         return {
             type: userConstants.DELETE_SUCCESS,
             payload: id
         }
     }

     const  failure = ( id, error ) => {
         return {
             type: userConstants.DELETE_FAILURE,
             id,
             error
         }
     }
}

export const userActions = {
    login,
    logout,
    register,
    getAll,
    delete: _delete
}