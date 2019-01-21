import axios from 'axios';

const studentService={
    add:(data)=>{
        
        return axios.post('',data)
    },
    update:(data)=>{
        return axios.put('',data)
    },
    delete:(id)=>{
        return axios.delete(''+id)
    }
}


export default studentService;
