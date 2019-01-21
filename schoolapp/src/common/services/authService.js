import axios from 'axios'
var URL='http://localhost:8000/';

 var authService={ 
    login : (data)=> {
        return axios.post(URL+'login',data)
   }
}

export default authService;
