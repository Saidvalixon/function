// function nizomiddin() {
// 	console.log("salom man robot!")
// }
// nizomiddin();
// nizomiddin();
// nizomiddin();
// nizomiddin();

// function toritorburce(heigh, width){
// 	console.log(heigh * width)
// }
// toritorburce(10, 5)

function ielts(reading, speaking, writing, listening){    
	var reading = prompt("reading")
	var listening = prompt("listening")
	var writing = prompt("writing")
	var speaking = prompt("speaking")
	var overall = ((reading + speaking + writing + listening) /4)
	if (overall >= 5.5 && overall <=6.25) {
		alert("6")
		}else if (overall >= 5.75 && overall <=6.25) {
			alert("6.5")
		}else if (overall >= 6.25 && overall <=6.75) {
			alert("7")
		}else if (overall >= 7.25 && overall <=7.75) {
			alert("7.5")
		}else if (overall >= 7.75 && overall <=8.25) {
			alert("8")
		}else if (overall >= 8.25 && overall <=8.75) {
			alert("8.5")
		}else if (overall >= 8.75 && overall <=9) {
			alert("9")
		}
     console.log( (reading + speaking + writing + listening) /4)
}
ielts( 8.5, 7.5, 6.5, 5.5)
