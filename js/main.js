var firebaseConfig = {
    apiKey: "AIzaSyC3nL49UW4fwjni2Wk2UOnH2sy8xBOUQrI",
    authDomain: "esp32-firebase-80d4f.firebaseapp.com",
    databaseURL: "https://esp32-firebase-80d4f-default-rtdb.firebaseio.com",
    projectId: "esp32-firebase-80d4f",
    storageBucket: "esp32-firebase-80d4f.appspot.com",
    messagingSenderId: "976012416764",
    appId: "1:976012416764:web:00c2ca3bd96a619bc6a979",
    measurementId: "G-E4Z62SB8TZ"
 };

firebase.initializeApp(firebaseConfig);


//điều khiển login                           
const Btnlogin = document.querySelector('.js-login-btn')
const modal = document.querySelector('.js-modal')
const modalContainer = document.querySelector('.js-modal-container')
const modalClose = document.querySelector('.js-modal-close')
const Siginbtn =document.querySelector('#sigin-btn')
//xử lí sự kiện phần login
function showlogin (){
    modal.classList.add('open')
    }
    
    function highlogin (){
    modal.classList.remove('open')
    }

//phòng khách
const Btnlib = document.querySelector('.js-lib-btn')
const Control = document.querySelector('.js-control')
const List = document.querySelector('.js-list')
const ControlClose = document.querySelector('.control-close')
//Xử lí sự kiện Phòng khách
function showcontrol (){
	Control.classList.add('open')
}

function highcontrol(){
	Control.classList.remove('open')
}

Btnlib.addEventListener('click',showcontrol)
ControlClose.addEventListener('click', highcontrol)
Control.addEventListener('click', highcontrol)
List.addEventListener('click' ,function(event){
event.stopPropagation()
})
//phòng ngủ
const Btnbed = document.querySelector('.js-bed-btn');
const Controlbed = document.querySelector('.js-control-bedroom');
const ControlClosebed = document.querySelector('.js-control-close-bed')
const Listbed = document.querySelector('.js-list-bedroom');
//xu lys su kien phong ngu
function showcontrolbed (){
	Controlbed.classList.add('open')
}

function highcontrolbed(){
	Controlbed.classList.remove('open')
}

Btnbed.addEventListener('click',showcontrolbed)
Controlbed.addEventListener('click', highcontrolbed)
ControlClosebed.addEventListener('click', highcontrolbed)
Listbed.addEventListener('click' ,function(event){
event.stopPropagation()
})
//phong bep
const Btnkit = document.querySelector('.js-kit-btn');
const Controlkit = document.querySelector('.js-control-kitchen');
const ControlClosekit = document.querySelector('.js-control-close-kit')
const Listkit = document.querySelector('.js-list-kitchen');
//xu lys su kien phong bep
function showcontrolkit (){
	Controlkit.classList.add('open')
}

function highcontrolkit(){
	Controlkit.classList.remove('open')
}

Btnkit.addEventListener('click',showcontrolkit)
Controlkit.addEventListener('click', highcontrolkit)
ControlClosekit.addEventListener('click', highcontrolkit)
Listkit.addEventListener('click' ,function(event){
event.stopPropagation()
})

//thông tin
const Btninf = document.querySelector('.js-inf-btn')
const display = document.querySelector('.js-display')
const DisplayDevice = document.querySelector('.js-display-device')


//Xử lí sự kiện hiển thị độ ẩm nhiệt độ
function showdisplay (){
	display.classList.add('open')
}

function highdisplay (){
	display.classList.remove('open')
}
Btninf.addEventListener('click', showdisplay)
ControlClose.addEventListener('click', highdisplay)
display.addEventListener('click', highdisplay)


//xử lí sensor
const Btnsensor = document.querySelector('.js-sensor-btn')
const sensor = document.querySelector('.js-sensor')
const SensorDevice = document.querySelector('.js-sensor-device')


//Xử lí sự kiện hiển thị độ ẩm nhiệt độ
function showsensor (){
	sensor.classList.add('open')
}

function highsensor (){
	sensor.classList.remove('open')
}
Btnsensor.addEventListener('click', showsensor)
ControlClose.addEventListener('click', highsensor)
sensor.addEventListener('click', highsensor)

               

$(document).ready(function(){
	var database = firebase.database();
	var Led1Status;
	var Led2Status;
	var Led3Status;
	var Led4Status;
	var RainStatus;
	var DayStatus;

	database.ref().on("value", function(snap){
		
		RainStatus = snap.val().RainStatus;
		DayStatus = snap.val().DayStatus;
		
		if(RainStatus == "1"){
			document.getElementById("rain").setAttribute("src",".//assets/img/sunset.gif");
			
		} else {
			document.getElementById("rain").setAttribute("src",".//assets/img/rain.gif");
			
		}
		if(DayStatus == "1"){
			document.getElementById("day").setAttribute("src",".//assets/img/moon.gif");
			
		} else {
			document.getElementById("day").setAttribute("src",".//assets/img/day.gif");
		
		}
	});

	

	$(".switch-toggle1").click(function(){
		var firebaseRef = firebase.database().ref("DoAnTotNghiep").child("Led1Status");
		if(Led1Status == "1"){
			document.getElementById("imglamp1").setAttribute("src",".//assets/img/denoff1.jpg");
			firebaseRef.set("0");
			Led1Status = "0";
		} 
		else {
			document.getElementById("imglamp1").setAttribute("src",".//assets/img/denon1.jpg");
			firebaseRef.set("1");
			Led1Status = "1";
		}
	})
	$(".switch-toggle2").click(function(){
		var firebaseRef = firebase.database().ref("DoAnTotNghiep").child("Led2Status");
		if(Led2Status == "1"){
			document.getElementById("imglamp2").setAttribute("src",".//assets/img/dennguoff.jpg");
			firebaseRef.set("0");
			Led2Status = "0";
		} 
		else {
			document.getElementById("imglamp2").setAttribute("src",".//assets/img/dennguon.jpg");
			firebaseRef.set("1");
			Led2Status = "1";
		}
	})
	$(".switch-toggle3").click(function(){
		var firebaseRef = firebase.database().ref("DoAnTotNghiep").child("Led3Status");
		if(Led3Status == "1"){
			document.getElementById("imglamp3").setAttribute("src",".//assets/img/tivioff.jpg");
			firebaseRef.set("0");
			Led3Status = "0";
		} 
		else {
			document.getElementById("imglamp3").setAttribute("src",".//assets/img/tivion.jpg");
			firebaseRef.set("1");
			Led3Status = "1";
		}
	})
	$(".switch-toggle4").click(function(){
		var firebaseRef = firebase.database().ref("DoAnTotNghiep").child("Led4Status");
		if(Led4Status == "1"){
			document.getElementById("imglamp4").setAttribute("src",".//assets/img/dieuhoa.png");
			firebaseRef.set("0");
			Led4Status = "0";
		} 
		else {
			document.getElementById("imglamp4").setAttribute("src",".//assets/img/dieuhoaon.jpg");
			firebaseRef.set("1");
			Led4Status = "1";
		}
	})

	
	
	
	
});




var valueTemp = firebase.database().ref('DoAnTotNghiep').child('Temperature');
valueTemp.on('value', snap=>{
    console.log("Nhiet do : "+snap.val());
    document.getElementById("tvTemp").innerHTML= snap.val()+"°C";
});

var valueHumid = firebase.database().ref('DoAnTotNghiep').child('Humid');
valueHumid.on('value', snap=>{
    console.log("Do am : "+snap.val());
    document.getElementById("tvHumid").innerHTML= snap.val()+"%";
});






 


