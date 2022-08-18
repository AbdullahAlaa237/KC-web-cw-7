function BMI (weight =80,height =1.7) {

  let result=  weight / (height * height) ;

return result ;


}

console.log(BMI())



function Status (bmi){

if (bmi < 18.5) {

  document.getElementById("result").style.color = "#FF8C00"

    return "لديك نقص في الوزن"	 ;

   

} else if ( bmi >= 18.5 && bmi < 25 )  {  


  document.getElementById("result").style.color = "##008000"




return "وزنك صحي " ;





} else if ( bmi >= 25 )  {



  document.getElementById("result").style.color = "#8B0000"




return "لديك زياده في الوزن " ;




} 



}

function calculate() {

     let weight = document.getElementById("weight").value ;
     let height = document.getElementById("height").value ;

    let bmi = BMI (weight,height) ;
    let desc = Status(bmi) ;

    let div = document.getElementById("result") ;
    div.innerText = bmi + " == " + desc ;

}













