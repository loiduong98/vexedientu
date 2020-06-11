import {userService} from '../service'
import { FETCH_CREDENTIALS } from './type';

export const login = user => {
    return dispatch => {
        userService
        .dangNhap(user)
        .then(res=>{
            dispatch(createAction(FETCH_CREDENTIALS,res.data))
        }).catch(err => {
            console.log(err);
        });
    };
};