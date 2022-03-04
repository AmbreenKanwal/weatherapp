const apikey = 'HH4dAqpbtbtj8vdRX5N8njXrCR798vZ'

const getcityInfo =async (city) => {
    const baseurl = "http://dataservice.accuweather.com/locations/v1/cities/search"
    const query = `?apikey=${apikey}&q=${city}`
    const cityInfo = await fetch(baseurl+query)
    const data = await cityInfo.json();
    //console.log(data)
    return data[0]


}
getcityInfo('')


const getWeather =async (id) => {
    const baseurl = "http://dataservice.accuweather.com/currentconditions/v1/"
    const query = `?apikey=${apikey}${id}`
    const res = await fetch(baseurl+query)
    const data = await res.json();
    //console.log(data)
    return data[0]


}

