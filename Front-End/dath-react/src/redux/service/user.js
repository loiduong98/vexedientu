import Axios from "axios";

class userService {
    dangNhap(user){
        console.log(user);
        return Axios({
            method:"POST",
            url:'http://127.0.0.1:8000/api/login',
            data:user
        })
    }
}
export default userService;