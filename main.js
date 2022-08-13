var hours= document.querySelector(".hours");
var minutes = document.querySelector(".minutes");
var seconds = document.querySelector(".seconds");
var ampm=document.querySelector(".ampm")



function updateTime(){
	var time = new Date();
	var hrs = time.getHours();
	var min = time.getMinutes();
	var sec = time.getSeconds();
	if(hrs>=12){
		
		hrs=hrs-12;
		ampm.textContent="PM";
	}
	
	hours.textContent=hrs;
	minutes.textContent=min;
	seconds.textContent=sec;
	setTimeout(function() {
		updateTime();
	},1000);

}

updateTime();
