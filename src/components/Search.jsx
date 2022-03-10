import React,{useState} from 'react'
import WeatherDetails from "./WeatherDetails"



function Search() {
    const [city,setCity] = useState('')
    const [data,setData] = useState({})

    async function getData(){

        try{
            const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=93ce8e801f3fd7011b5c5b4b8e464556`)
            .then(res=>res.json())
            .then(data=>data)
                setData(data)
        }
        catch(err){
            console.log(err + 'error')
        }
        
    }
    
    
    return (
        <>
            <div className="wrap">
                <input 
                type="text" 
                id="search" 
                className='searchTerm' 
                placeholder='type city name' 
                onChange={(e)=>{setCity(e.target.value)}}
                />

                <button className="searchButton" onClick={getData}>Search</button>
            </div>
            <WeatherDetails data={data} />
        </>
    )
}

export default Search