
const SubmitBtn=document.getElementById('SubmitBtn');
const cityname=document.getElementById('cityname');
const city_name=document.getElementById('city_name');
const temp_real_val=document.getElementById('temp_real_val');
const temp_status=document.getElementById('temp_status');
const datahide=document.querySelector(".middle_layer");

const getInfo=async(event)=>{
    event.preventDefault();
    let cityVal=cityname.value;
   if(cityVal===""){
        city_name.innerText="Please Enter The City Before Search";
        datahide.classList.add('data_hide');
   }else{
       try{
    let url=`http://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=db3c6f9b683ae016887434a2026e7308`;
    const response=await fetch(url);
    const data=await response.json();
    console.log(data);

    const arrData=[data];
    city_name.innerText=`${arrData[0].name},${arrData[0].sys.country} `;
    temp_real_val.innerText=arrData[0].main.temp;
    
    const tempStatus=arrData[0].weather[0].main;


    if (tempStatus == "Clear") {
        temp_status.innerHTML =
          "<i class='fas  fa-sun' style='color: #eccc68;'></i>";
      } else if (tempStatus == "Clouds") {
        temp_status.innerHTML =
          "<i class='fas  fa-cloud' style='color: #f1f2f6;'></i>";
      } else if (tempStatus == "Rain") {
        temp_status.innerHTML =
          "<i class='fas  fa-cloud-rain' style='color: #a4b0be;'></i>";
      } else {
        temp_status.innerHTML =
          "<i class='fas  fa-sun' style='color:#eccc68;'></i>";
      }

      datahide.classList.remove('data_hide');


    
       }catch{
        city_name.innerText="Please Enter The City Correctly";
        datahide.classList.add('data_hide');

 
       }

   }
}

SubmitBtn.addEventListener('click',getInfo);
    