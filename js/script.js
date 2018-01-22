//quotes
var sources = {
	original : [
		"Do not take life too seriously, or you will never get out of it alive - Elbert Hubbard",
		"To succeed in life, you need three things : a wishbone, a backbone and a funny bone - Reba McEntire",
		"I may be drunk, Miss, but in the morning i will be sober and you will still be ugly - Winston Churchill",
		"Always remember that you are absolutely unique. Just like everyone else - Margaret Mead",
		"Behind every great man is a woman rolling her eyes - Jim Carrey",
		"Progress is man's ability to complicate simplicity - Thor Heyerdahl",
		"No man has a good enough memory to be a successful liar - Abraham Lincoin",
		"People who think they know everything are a great annouyance to those of us who do - IsaacAsimov",
		"My fake plants died because i did not pretend to water them - Mitch Hedberg",
		"Laziness is nothing more than the habit ofresting before you get tired - Jules Renard",
		"Age is something that does not matter,unless you are a cheese - Luis Bunuel",
		"Procrastination is the art of keeping up with yesterday - Don Marquis",
		"I can resist everything except temptation - Oscar Wilde",
		"My life needs editing - Mort Sahl",
		"Comedy is simply a funny way of being serious - Peter Ustinov",
		"I used to be Snow White, but i drifted - Mae West",
		"What is another word for Thesaurus? - Steven Wright",
		"I looked up my family tree and found out i was the sap - Rodney Dangerfield"
	],

	wierd : [
		
			[

				"I went to the park",
				"I ate icre-cream",
				"I cooked ",
				"I saw him",
				"I saw her",
				"He saw me",
				"She saw me",
				"She drove",
				"He played",
				"She worked"

			],
			[

				" with my horse",
				" with my dog",
				" with my cat",
				" with him",
				" with her",
				" making poison",
				" drinking",
				" reading newspaper",
				" dancing"

			],
			[

				", and we flew to the galaxy.",
				", and we drank together.",
				", and we watched television together.",
				", and we ate together.",
				", and we played together.",
				", and we danced together.",
				", and we kicked each other.",
				", and we studied together.",
				", and we talked together.",
				", and we shouted together."

			]
		
	]
};

//start generating quotes and display the quit button
function displayQuotes() {
	var quitButton = document.getElementById("quit");
	var inputNumberValue = document.getElementById("inputNumber").value;
	var formValue = document.getElementById("formType")["quoteType"].value;
	document.getElementById("inputInfo").innerHTML = "";
	document.getElementById("radioInfo").innerHTML = "";

	if (validateUserInputs(inputNumberValue,formValue) == true ) {
		document.getElementById("dis").innerHTML = generate(inputNumberValue, formValue);
		quitButton.style.display = "block"; //visible
	}
	
};

//validation
function validateUserInputs(inputNumberValue, formValue) {
	var valid = true;
	//validate the input value
	if (inputNumberValue == "" || inputNumberValue < 1 || inputNumberValue > 5) {
		document.getElementById("inputInfo").innerHTML = "Please input the correct value";
		valid= false;
	} 

	//validate the type of the quote
	if (formValue == "") {
		document.getElementById("radioInfo").innerHTML = "Please select one of the quote type";
		valid = false;
	}

	return valid;
}

//make the random the quotes
var originalLength = sources["original"].length;
var randomOriginalQuotes = function() { return Math.floor(Math.random() * originalLength);}
var wierdLength = sources["wierd"].length;
var randomWierdQuotes = function() { return Math.floor(Math.random() * wierdLength);}

//checks the form value
function generateRandomQuote(formValue) {
	if (formValue == "original") {
		return sources[formValue][randomOriginalQuotes()];
	} else if (formValue == "wierd") { 
		var frontRandomQuotes = Math.floor(Math.random() * (sources["wierd"][0].length));
		var middleRandomQuotes = Math.floor(Math.random() * (sources["wierd"][1].length));
		var endRandomQuotes = Math.floor(Math.random() * (sources["wierd"][2].length));
		return sources["wierd"][0][frontRandomQuotes] + sources["wierd"][1][middleRandomQuotes] + sources["wierd"][2][endRandomQuotes];
	}
};

//generates how many of the random quotes and the type
function generate(inputNumberValue, formValue) {
	var result = "";
		for (i = 0; i < inputNumberValue; i++) { 
			result = result + generateRandomQuote(formValue) + "<br>";
		}
	return result;

}; 





var sideForm = document.getElementById("sideForm");
var genNew = document.getElementById("genNew")
//quit
function quit() {
	//hide sideForm
	sideForm.style.display = "none";

	//show button
	genNew.style.display = "block";

	//show the user quit
	document.getElementById("dis").innerHTML = "You quit";
}

//generate another new quote
function genAgain() {
	//show side form
	sideForm.style.display = "block";

	//hide generate again button
	genNew.style.display = "none";

	//clear everything in display
	document.getElementById("dis").innerHTML = "";
}