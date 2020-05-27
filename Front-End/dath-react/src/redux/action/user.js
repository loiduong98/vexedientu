import {userService} from '../service'

export const login = user => {
    return dispatch => {
        userService.dangNhap(user)
        .then(res=>{
            console.log(res);
        }).catch(err => {
            console.log(err);
        });
    };
};