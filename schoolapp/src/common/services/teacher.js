import axios from 'axios';

const teacherService={
    add:(data)=>{
        return axios.post('',data)
    },
    get:()=>{
        return axios.get('')
    },
    put:(data)=>{
        return axios.put('',data)
    },
    delete:(id)=>{
        return axios.delete('')
    }
}


export default teacherService;
