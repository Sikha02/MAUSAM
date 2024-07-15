import { useEffect, useState } from "react";

export const useDate = () => {
    const locale="en-US";
    const [today,setDate]=useState(new Date())

    useEffect(()=>{
        const timer=setInterval(()=>{
            setDate(new Date())
        },60*1000)

        return ()=>{
            clearInterval(timer)
        }
    },[])
    const day= today.toLocaleDateString(locale,{weekday:"long"})
    const date='${day},${today.getDate()},${today.tolocaleDateString(locale,{month:"long"})}\n\n'
    const time=today.toLocaleTimeString(locale,{hour:"numeric",hour12:true,minute:"numeric",second:"numeric"})

    return{
        date,time
    }
}