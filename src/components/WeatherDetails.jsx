import React,{useState,useEffect} from 'react'

function WeatherDetails({data}) {
    const [type,setType] = useState('')
    useEffect(()=>{
        if(data.coord){
            switch(data.weather[0].main){
                case "Clouds":
                    setType("wi-day-cloudy");
                    break;
                case "Haze":
                    setType("wi-fog");
                break;
                case "Clear":
                    setType("wi-day-sunny");
                break;
                case "Mist":
                    setType("wi-dust");
                break;
                case "Rain":
                    setType("wi-day-rain");
                break;
        
                default:
                    setType("wi-day-sunny");
                break;
                }
        }
        
    },[data.coord])
    let sunset = ''
    if(data.coord){
        let time = new Date(data.sys.sunset * 1000)
        sunset = `${time.getHours()}:${time.getMinutes()}`
    }
    return data.coord ?(
        <>
            <article className="widget">
                <div className="weatherIcon">
                    <i className={`wi ${type}`}></i>
                </div>
                <div className="weatherInfo">
                    <div className="temperature">
                        <span>{data.main.temp}&deg;</span>
                    </div>
                    <div className="description">
                        <div className="weatherCondition">{data.weather[0].description}</div>
                        <div className="place">{data.name}</div>
                    </div>
                </div>
                <div className="date">
                    {new Date().toLocaleString()}
                </div>
                <div className="extra-temp">
                    <div className="temp-info-minmax">
                        <div className="two-sided-section">
                            <p>
                                <i className="wi wi-sunset"></i>
                            </p>
                            <p className="extra-info-leftside">
                                {sunset} PM<br/>
                                sunset
                            </p>
                        </div>
                    
                        <div className="two-sided-section">
                            <p>
                                <i className="wi wi-humidity"></i>
                            </p>
                            <p className="extra-info-leftside">
                                {data.main.humidity} <br/>
                                Humidity
                            </p>
                        </div>
                    </div>

                    <div className="temp-info-minmax">
                        <div className="two-sided-section">
                            <p>
                                <i className="wi wi-rain"></i>
                            </p>
                            <p className="extra-info-leftside">
                                {data.main.pressure} <br/>
                                Pressure
                            </p>
                        </div>
                    
                        <div className="two-sided-section">
                            <p>
                                <i className="wi wi-strong-wind"></i>
                            </p>
                            <p className="extra-info-leftside">
                                {data.wind.speed} <br/>
                                Wind Speed
                            </p>
                        </div>
                    </div>

                </div>
            </article>
        </>
    ) : ''
}

export default WeatherDetails