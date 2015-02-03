
//Coding that uses the "for" loop to access an array of members of my family
var i;
var myFamily = ["Mike", "Bindy", "Shane", "Chance", "Tara"];
for (i = 0; i < myFamily.length; i++) {

console.log (myFamily[i]);
};


//Coding that uses the "for" loop to access just my brother, sister and me
var i;
var myFamily = ["Mike", "Bindy", "Shane", "Chance", "Tara"];
for (i = 2; i < myFamily.length; i++) {

console.log (myFamily[i]);
};

//Now sort the myFamily array alphabetically
myFamily.sort();        
console.log (myFamily);

//Now sort the myFamily array reverse-alphabetically.
myFamily.sort();   
myFamily.reverse();     
console.log (myFamily);


//Coding that accesses objects (each member of my family) inside an array and prints out by object number.
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


//applies a forEach loop to print out the ages of everyone
familyMember.forEach(function (item){
	console.log(item.age);
	});

//applies a filter to print out the roles of everyone
familyMember.filter(function (item){
	console.log(item.role);
	});


	// 	if (familyMember.age > 40) {
 //    return "old fart";
 //    console.log (familyMember.firstName);
	// 	} else {
 //    return "young thing";
	// 		}

	// console.log (familyMember.firstName);

//adds the next generation to the family, my nieces and nephew
var additionalFamily = ["Mike", "Bindy", "Shane", "Chance", "Tara"];
additionalFamily.push("Ty Alexander", "Mati Jean", "Povey Love"); 
console.log (additionalFamily);



//Function that returns brothers + a string of information
var a = "Shane";
var b = "Chance";
var x = function (a, b) {
    return a + " and " + b + " are brothers, just two years apart";
};
var brothers = x(a, b);
console.log (brothers);


//Function that returns siblings' array in reverse
var siblings = ["Shane", "Chance", "Tara"];
	siblings.reverse();
    console.log (siblings);     

//Function that returns parents' array in reverse
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
