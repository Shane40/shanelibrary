console.log('The Iron Yard Rocks');

// var tim = {};
// tim.now = function (arr) {
//         return new Date().getTime();
//         console.log(tim);
// };

// // Greeting Function
// tim.greeting = function (message) {

//         // Check for Time of Day
//         var time = new Date(),
//                         initial_greeting = '',
//                         time_hours = time.getHours(),
//                         final_greeting;

//         if (time_hours < 12) {
//                 initial_greeting = 'Good Morning';
//         } else if (time_hours >= 12 && time_hours <= 17) {
//                 initial_greeting = 'Good Afternoon';
//         } else if (time_hours > 17 && time_hours <= 24) {
//                 initial_greeting = 'Good Evening';
//         }

//         final_greeting = (message != null) ? initial_greeting + ', ' + message : initial_greeting;

//         return final_greeting;
// };

// // Random Function
// // From Underscorejs.org
// tim.random = function (min, max) {
//                 if (max == null) {
//                         max = min;
//                         min = 0;
//                 }
//     return min + Math.floor(Math.random() * (max - min + 1));
// };



//Coding that uses the "for" loop to access an array of members of my family
var i;
var myFamily = ["Mike", "Bindy", "Shane", "Chance", "Tara"];
for (i = 0; i < myFamily.length; i++) {

console.log (myFamily[i]);
};

//Now sort the myFamily array alphabetically
myFamily.sort();        
console.log (myFamily);

//Now sort the myFamily array reverse-alphabetically.
myFamily.sort();   
myFamily.reverse();     
console.log (myFamily);


//Coding that accesses objects inside an array and prints out by object number.
var familyMember = [
	{
	firstName: "Mike",
	lastName: "Blatt",
	age: 68,
	role: "dad"
	},
	
	{
	firstName: "Bindy",
	lastName: "Blatt",
	age: 70,
	role: "mom"
	},

	{
	firstName: "Shane",
	lastName: "Blatt",
	age: 40,
	role: "oldest child"
	},

	{
	firstName: "Chance",
	lastName: "Blatt",
	age: 38,
	role: "middle child"
	},

	{
	firstName: "Tara",
	lastName: "Blatt Carter",
	age: 35,
	role: "youngest child"
	},

];

console.log (familyMember[0].firstName + " " + familyMember[0].lastName + " is " + familyMember[0].age + ", and " + familyMember[0].firstName + " is " + "the " + familyMember[0].role);
console.log (familyMember[1].firstName + " " + familyMember[1].lastName + " is " + familyMember[1].age + ", and " + familyMember[1].firstName + " is " + "the " + familyMember[1].role);
console.log (familyMember[2].firstName + " " + familyMember[2].lastName + " is " + familyMember[2].age + ", and " + familyMember[2].firstName + " is " + "the " + familyMember[2].role);
console.log (familyMember[3].firstName + " " + familyMember[3].lastName + " is " + familyMember[3].age + ", and " + familyMember[3].firstName + " is " + "the " + familyMember[3].role);
console.log (familyMember[4].firstName + " " + familyMember[4].lastName + " is " + familyMember[4].age + ", and " + familyMember[4].firstName + " is " + "the " + familyMember[4].role);




//Function that returns brothers + a string of stuff 
var a = "Shane";
var b = "Chance";
var x = function (a, b) {
    return a + " and " + b + " are brothers, just two years apart";
};
var brothers = x(a, b);
console.log (brothers);


//Function that returns siblings array in reverse
var siblings = ["Shane", "Chance", "Tara"];
	siblings.reverse();
    console.log (siblings);     

//Function that returns siblings array in reverse
var parents = ["Mike", "Bindy"];
	parents.reverse();
    console.log (parents);   


//Function that spits back a random number in the button. Oh what fun!
function myFunction() {
    document.getElementById("blattMath").innerHTML = ((Math.random() * 10) + 1);
}

//Function that says something
function greetings() {
       alert("Mike, Bindy, Shane, Chance and Tara");
      };
