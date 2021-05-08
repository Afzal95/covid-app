import React, { useEffect, useState } from "react";
import { request } from "../utils";
import { Card } from "./Card";

function Todo(){

    const [date,setDate] = useState("");
    const [date1,setDate1] = useState("");
    const [data,setData] = useState([]);
    const [loading,setLoading] = useState(false);
    const [error,setError] = useState(false);
    const [pin,setPin] = useState("");

    const fetch = async()=>{
        setError(false)
        setLoading(true);
        const result = await request.get(`/findByPin?pincode=${pin}&date=${date1}`).catch(err=>setError(true));
//        console.log(result.data.sessions);
        if(result.data.sessions.length==0){
            return alert("seems pin/date is wrong or no data for this pin")
            
        }
        setData(result.data.sessions);
        // setData(result.data);
        setLoading(false);
    }

    const handleChange=(e)=>{
        const val =e.target.value;
        setDate(val);
        let newDate = val.split("-");
        let [y,m,d] = newDate;
        const fDate = d+"-"+m+"-"+y;
//        console.log(fDate);
        setDate1(fDate);
        // console.log(val);
    }

    const handleClick= async()=>{
        if(pin==""){
            alert("pin can't br empty");
            return
        } else if(pin.length!==6){
            alert("pin should be of 6 numbers");
            return            
        }else if(date==""){
            alert("please select date. ");
            return
        }

        fetch();

    }
        return  <div>
                <input style={{borderRadius:"20px",outline:"none",padding:"6px",marginLeft:"-50px"}} 
                type="number" value={pin} name="pin" onChange={e=>setPin(e.target.value)}
                placeholder="type pincode" /><br/>
                <input style={{borderRadius:"20px",outline:"none",backgroundColor:"lightgrey",padding:"2px",marginTop:"10px"}} type="date" name="date" min="01-01-2018" max="31-12-2030" value={date} onChange={handleChange} placeholder="add something..." />
                <button style={{borderRadius:"10px",outline:"none",padding:"3px",marginTop:"10px",backgroundColor:"yellowgreen"}} onClick={()=>handleClick(date)}>search</button>
                {data?.map(el=>{
                    return  <div key={el.id} style={{display:"grid",gridTemplateColumns:"30vw 30vw",gridTemplateRows:"auto"}}>
                                <Card el={el} />
                            </div>
                })}
              </div>
}

export {Todo};