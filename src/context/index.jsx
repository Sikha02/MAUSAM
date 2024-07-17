import { useContext,createContext,useState,useEffect } from "react";

import axios from 'axios' 

const StateContext = createContext()

export const StateContextProvider = ({children}) => {
    const [weather,setWeather] = useState({})
    const [values,setValues] = useState({})
    const [place,setplace] = useState('odisha')
    const [loaction,setLocation] = useState('')

    //fetch API

    const fetchWeather = async() => {
        const option = {
            method:'GET',
            url:'https://visual-crossing-weather.p.rapidapi.com/forecast',
            params:{
                aggregateHours:'24',
                loacation: place,
                contentType:'json',
                unitGroup:'metric',
                shortColumnNames:0,
            },
            headers:{
                'X-RapidAPI-key': import.meta.env.VITE_API_KEY,
                'X-RapidAPI-Host': 'visual-crossing-weather.p.rapidapi.com'
            }

        }


        try{
            const response = await axios.request(option);
            console.log(response.data);
            const thisData = object.values(response.data.location)[0]
            setLocation(thisData.address)
            setValues(thisData.values)
            setWeather(this.values[0])

        }catch(e){
            console.error(e);

            //if the api throws error

            alert('This place does exist')
        }
    }

    useEffect(() => {
       fetchWeather()
    },[place])


    useEffect(() => {
        console.log(values);
    },[values])


    return(
        <StateContext.Provider value={{
            weather,
            setplace,
            values,
            loaction
        }}>
            {children}
        </StateContext.Provider>
    )

}


export const useStateContext = () => useContext(StateContext)