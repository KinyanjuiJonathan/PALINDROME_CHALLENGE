const word= " racecar "
newword= word.split('').reverse().join("")
console.log('the new word is ' + newword)
 if(newword===word){
     console.log('the number is a palindrom')
 }
 else{
    console.log( 'the number is not a palindrome')
 }