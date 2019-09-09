
//Data for all cities

const city = [
    {  name: "Maharashtra", city: "Pune", tempC: 27.2,date: "Sunday", condition: "Partly cloud ☁️", timeStamp: "AM"},
    {  name: "Maharashtra", city: "Mumbai", tempC: 27, date: "Sunday", condition: "Cloudy 🌨️", timeStamp: "PM"},
    {  name: "Karnataka", city: "Benguluru", tempC: 27,date: "Sunday", condition: "Rain",timeStamp: "AM"},
    {  name: "Maharashtra", city: "Kolhapur", tempC: 24,date: "Sunday", condition: "Heavy Rain ☔",timeStamp: "PM"},
    {  name: "Maharashtra", city: "Satara", tempC:31,date: "Sunday", condition: "cloudy 🌨️",timeStamp: "PM"},
    {  name: "Maharashtra", city: "Karad", tempC: 25,date: "Sunday", condition: "Winter",timeStamp: "AM"},
    {  name: "Maharashtra", city: "Sangali", tempC: 25,date: "Sunday", condition: "Cloudy 🌨️",timeStamp: "PM"},
    {  name: "Tamilnadu", city: "Chennai", tempC: 30,date: "Sunday", condition: "Heavy Rain ☔",timeStamp: "AM"},
    {  name: "Goa", city: "Panaji", tempC: 32,date: "Sunday", condition: "Cloudy 🌨️",timeStamp: "AM"}

];

 //Process which gives a temprature of city in celcius 
 function process()
 {
     
    var selectedValue=document.getElementById("city").value;
    var temp=city.filter((v)=> v.city===selectedValue);
    document.getElementById("state").innerHTML=temp[0].city+" , "+temp[0].name;
    document.getElementById("temp").innerHTML=temp[0].tempC+""+"&#8451;";
    var today = new Date();
    var time = today.getHours() + ":" + today.getMinutes();
    document.getElementById("time").innerHTML=temp[0].date+",  "+time+" "+temp[0].timeStamp;
    document.getElementById("condition").innerHTML=temp[0].condition;
 }

 //Process which gives a temprature of city in Ferinite
 function findTemp()
 {
    var selectedValue=document.getElementById("city").value;
    var temp=city.filter((v)=> v.city===selectedValue);
    document.getElementById("state").innerHTML=temp[0].city+" , "+temp[0].name;
    var temp=city.filter((v)=> v.city===selectedValue);
    var new1=Math.round((temp[0].tempC*(9/5)+32));
    document.getElementById("temp").innerHTML=new1+""+"&#8457;";
    var today = new Date();
    var time = today.getHours() + ":" + today.getMinutes();
    document.getElementById("time").innerHTML=temp[0].date+",  "+time+" "+temp[0].timeStamp;
    document.getElementById("condition").innerHTML=temp[0].condition;
 }

