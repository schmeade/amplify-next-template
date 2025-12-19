"use client";

import { useEffect, useState } from "react"

export default function LocationFinderServer() {

    const [locationInfo, setLocationInfo] = useState({City: 'N/A'})
    const [weatherInfo, setWeatherInfo] = useState()

    const getLocationInfo = async () => {
        const locationRes = await fetch('https://apip.cc/json');
        const locationData = await locationRes.json();
        console.log(locationData);
        setLocationInfo(locationData);

        const weatherRes = await fetch('https://www.7timer.info/bin/astro.php?lon=-89.4512&lat=43.0334&ac=0&unit=metric&output=json&tzshift=0');
        const weatherData = await weatherRes.json();
        console.log(weatherData);
        setWeatherInfo(weatherData);
    }

    useEffect(() => {
        getLocationInfo();
    }, [])

    return (
        <>
            <h1>Hello from {locationInfo.City} - client component</h1>
            <h2>It is {weatherInfo?.dataseries[0]?.temp2m}&deg;C</h2>
        </>
    )
}