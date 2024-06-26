// JS INTERVIEW IMPORTANT BASIC QUESTION

// REVERSE A STRING 
var a = "hello bro How are you?";
a1 = a.split(" ");
a2 = a1.reverse();
a3 = a2.join(" ");
console.log(a3);

// CHECK IF A STRING IS PALINDROME 

var a = "madam";
a1 = a.split(" ");
a2 = a1.reverse();
a3 = a2.join(" ");
console.log(a3);
function Same(){
    if (a == a3){
        console.log("it is Palindrome");
    }
    else{
        console.log("it is not palindrome");
    }
}
console.log(Same());


// FIND THE LONGEST WORD IN A STRING 

var a = "Hello I'm Sufyan Talib and University UOS Jamshoro"
function LongestWord(){
    var str = a.split(" ");
    var Longest = 0;
    var Word = "";
    str.forEach(
        function(str){
            if(Longest < str.length
            ){
                Longest = str.length;
                Word = str;
            }
        }
    )
    return Word
}
console.log(LongestWord());

