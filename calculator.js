
 function cal(){
    var num1 = parseFloat(document.querySelector(".num1").value)
    var num2 = parseFloat(document.querySelector(".num2").value)
    var sum = num1 + num2
    document.querySelector(".result").innerText=sum

 }
 
//  multiply

 function cal(operation){
    var num1 = parseFloat(document.querySelector(".num1").value)
    var num2 = parseFloat(document.querySelector(".num2").value)
    let result
    if(operation==="add"){
      
        result=num1+num2

    }

    else if(operation==="sub"){
        result= num1-num2
    }
    
    else if(operation==="mul"){
        result= num1*num2
    }

    else if(operation==="div"){
        result= num1/num2
    }

    document.querySelector(".result").innerText=result

//     if( result<50){
//   document.body.style.backgroundColor = "blue";
//     }
//     else{
//         document.body.style.backgroundColor = "green"; 
//     }

 }