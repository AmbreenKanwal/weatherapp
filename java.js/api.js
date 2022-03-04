const cityform =document.querySelector('.city-form')
const icon =document.querySelector('.icon')
const card =document.querySelector('.card')

const updateCity =async (city) => {
  
    const cityDetail = await getCityInfo(city)
    const weather = await getWeather(cityDetail.Key)
    return{cityDetail,weather}
   

}

cityform.addEventListener('submit' ,(e) =>{
    e.preventDefault();

 const city =cityform.city.value.trim();
 cityform.reset();

 card.classList.remove('d-none')
 updateCity(city).then(data=>updateUI(data))
 .catch(err=>console.log(err))


})
const time =document.querySelector('.time')

const detail=document.querySelector('.detail')

const updateUI =(data) => {
    const{cityDetail,weather}=data;


    details.innerHTML=`
    <h5 class="my-5">${cityDetail.EnglishName} </h5>
    <div class"my-3">${weather.WeatherText}</div>
    <div class="display-4 my-4">${weather.Temperature.Metric.Value}<span>&deg;C</span> </div>  
 `





    let timesource =null;
    if(weather.isDaytime){
       timesource=''
    }else{
        timesource=''
    }
   
    time.setAttribute('src',timesource)

    let iconSource =`iamge/icon/${weather.weathericon}.svg`
    icon.setAttribute('src', iconSource)
   
    }





