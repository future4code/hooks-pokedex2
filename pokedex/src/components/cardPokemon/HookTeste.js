import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { base_url } from "../../constants/Constants";

const HookTeste = (url)=>{
    const [data, setData] = useState([])
    
    useEffect(()=>{
        axios.get(`${base_url}${url}`).then((res)=>{setData(res.data)})
    },[])


    return [data]
}

export default HookTeste