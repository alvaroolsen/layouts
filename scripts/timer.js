function Timer(timerContainer){
	this.CSS = "http://thysector.com/projects/css/timer.css";
	this.jQUERY = "http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js";
	this.second = $("#ss");
	this.minute = $("#mm");
	this.hour = $("#hh");
	this.ssTick = 0;
	this.mmTick = 0;
	this.hhTick = 0;
	this.setUp = function(){
		if(jQuery){
			alert(":D")
			$("head").append("<link rel='StyleSheet' href='"+this.CSS+"'/>");
			$("#"+timerContainer).append("<div id='hh' class='time'></div>:");
			$("#"+timerContainer).append("<div id='mm' class='time'></div>:");
			$("#"+timerContainer).append("<div id='ss' class='time'></div>");
		}else{
			document.getElementsByTagName("head").append("<link rel='StyleSheet' href='"+this.CSS+"'/>");
			document.getElementsByTagName("head").append("<script src='"+this.jQUERY+"'></script>");
			document.getElementById(timerContainer).append("<div id='hh' class='time'></div>:");
			document.getElementById(timerContainer).append("<div id='mm' class='time'></div>:");
			document.getElementById(timerContainer).append("<div id='ss' class='time'></div>:");
		}	
	}
	this.startTimer = function(){
   		setInterval(function(){
   			this.second = $("#ss");
			this.minute = $("#mm");
			this.hour = $("#hh");
			this.ssTick++; //adds seconds
			console.log(typeof(this.ssTick))
			if(this.mmTick == 0){this.mmTick = 0;}
			if(this.hhTick == 0){this.hhTick = 0;}
			if(this.ssTick == 0){this.ssTick = 0;}
			if(this.ssTick < 10){ //checks if seconds if less than 10 and adds a 0 before it
				if(this.ssTick == 0){this.ssTick = 0;
				}else{this.ssTick = 0 + this.ssTick;}
			}else if(this.ssTick == 60){this.ssTick = 0; this.mmTick++;
				if(this.mmTick < 10){this.mmTick = 0 + this.mmTick;
				}else if(this.mmTick == 0){this.mmTick = 0; console.log(this.mmTick)
				}else if(this.mmTick == 60){this.mmTick = 0; this.this.hhTick++;
					if(this.hhTick==0){this.hhTick = 0;
					}else if(this.hhTick < 10){this.hhTick = 0 + this.hhTick;
					}else if(this.hhTick == 24){this.hhTick = 0;}
					console.log("___________")}}
			//Display in DIVs
			this.second.html(this.ssTick);this.minute.html(this.mmTick);this.hour.html(this.hhTick);
		}, 1000);}
 }