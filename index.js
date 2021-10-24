function sum() {
    num1 = 5
    num2 = 20
    sum = num1 + num2
    return sum
  }
  
  console.log(sum)
  console.log(sum())
  
  function multiply(mul1, mul2){
    num3 = mul1
    num4 = mul2
    mul = mul1 * mul2
    return mul
  }
  console.log(multiply(5, 8))
  console.log(multiply(45, 68))

  var person1 = {
    fullname : 'sachin',
    age : 22
  }
  var person2 = {
    fullname : 'raviteja',
    age : 23
  }
  var person3 = {
    fullname : 'sachin',
    age : 21
  }
  var person4 = {
    fullname : 'sachin',
    age : 22
  }
  // find out how many names are sachin in this array
  // var testArray = [person1, person2, person3, person4]
  
  // function checkName(){
  //   var test = 0
  //   for(i=0; i< testArray.length; i++){
  //      if(testArray[i].fullname === 'sachin'){
  //       test++
  //     }
  //   }
  //    console.log('Number of people with name sachin are  ' +test)
  // }
  // checkName()
  
  // find out how many names are sachin and age is 22 in this array
  var testArray = [person1, person2, person3, person4]
  
  function checkName(){
    var test = 0
    for(i=0; i< testArray.length; i++){
       if(testArray[i].fullname === 'sachin' && testArray[i].age === 22){
        test++
      }
    }
     console.log('Number of people with name sachin and age 22 are  ' +test)
  }
  checkName()