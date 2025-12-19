export default async function LocationFinderServer() {

        const locationRes = await fetch('https://apip.cc/json');
        const locationData = await locationRes.json();

        const weatherRes = await fetch('https://www.7timer.info/bin/astro.php?lon=-89.4512&lat=43.0334&ac=0&unit=metric&output=json&tzshift=0');
        const weatherData = await weatherRes.json();

        const locationInfo = locationData;
        const weatherInfo = weatherData;
    

    return (
        <>
            <h1>Hello from {locationInfo?.City} - server component</h1>
            <h2>It is {weatherInfo?.dataseries[0]?.temp2m}&deg;C</h2>
        </>
    )
}