//write a function that will count the number of xs and os in a given string and return true if the amount of xs and os is equal and false if not. 
function XO(str) {
    //code here
    let oNum = ""; //initialzing the variables that will hold the x and o count
    let xNum = "";

    for(let i = 0; i<str.length; i++) { //initalize for loop to go through the string
        if(str[i].toLowerCase() == 'x'){ //use tolowercase to make it case insensitive
            xNum += str[i] //adds a count to the x array for later comparison *
        }
        else if (str[i].toLowerCase() == 'o'){ //*ditto with os
            oNum += str[i];
        }
    }
    return xNum.length === oNum.length; //compares the resulting two arrays

}
//prep
//will need something that goes through the string and tallies the xs and os and stores them each in a variable
//conditional that will compare and output a boolean true or false