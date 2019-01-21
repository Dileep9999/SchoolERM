import axios from 'axios'

var feeService={

    add:(data)=>{
        return axios.post('/',data)
    }
}


export default feeService;
