let display = document.querySelector(".iron-born");
let magicBtn = document.querySelector("#magic-btn");

// variable containing my name and courses
let name = "Ifeanyi F. Okwuobi";
const courses = ["Design","Frontend","Backend"];
console.log(`My name is ${name} and i offer the following courses ${courses[0]},${courses[1]} and ${courses[2]}`);
let nameCourses = `My name is ${name} and I offer the following courses ${courses[0]}, ${courses[1]} and ${courses[2]}`;
magicBtn.addEventListener('click',()=>{
	display.classList.add("display");
	display.textContent = nameCourses;
});

// function that takes an argument of how many courses offered and displays the resultant numbers odd or even in the console
const courseChecker = (courseLength)=>{
let numberDisplay = document.querySelector(".grey-worm");
let typeOfNumbers = [];
	if(courseLength % 2!== 0){
		for(let i = 0; i < 200; i++){
		if(i % 2!== 0){
			typeOfNumbers.push(i);
			}
		}
	}else if(courseLength % 2 === 0){
		for(let i = 0; i < 200; i++){
		if(i % 2 == 0){
			typeOfNumbers.push(i);
			}
		}
	}
	console.log(typeOfNumbers)
	alert(typeOfNumbers);
}
// this function prompts the user to type in the amount of courses offered to determine whether to display odd numbers of even numbers
function checkHowManyCourses(){
	let courseLength = prompt("How many courses are you taking in this program DON't Lie To me ... I know everything");

	if(courseLength == ""){
		alert("DON'T Play With Me");
		courseLength = prompt("How many courses are you taking in this program DON't Lie To me ... I know everything");
// this function would recursively ask you to input the amount of courses you offer
		const recursiveAsk = (courseLength)=>{
			if(courseLength == ""){
				alert("DON'T Play With Me !!!");
			courseLength = prompt("How many courses are you taking in this ?... program DON't Lie To me ... I know everything");
			recursiveAsk(courseLength);
			}else{
				courseChecker(courseLength);
			}
		}
		recursiveAsk(courseLength);
	}else{
		courseChecker(courseLength);
		}

}
checkHowManyCourses();

// courseChecker(courseLength);