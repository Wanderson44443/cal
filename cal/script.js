/*function ola(){
/*
  numeroUM = parseFloat(document.querySelector("#numeroum").value);
  numeroDois = parseFloat(document.querySelector("#numDois").value);
  console.log(numeroUM)
  console.log(numeroDois)
  


 console.log(numeroUM * numeroDois);
}
*/
function ola(){
let numeroUM, numeroDois,numeroTres, oper 
  
      numeroUM = document.querySelector("#numeroum").value;
      numeroUM = parseFloat(numeroUM);
      numeroDois = document.querySelector("#numDois").value;
      numeroDois = parseFloat(numeroDois);
      
       
      oper = document.querySelector("#operacao").value;
    
      if(oper === "soma") {

        numeroTres = parseFloat(numeroUM) + parseFloat(numeroDois);
       // function soma(){

         // numeroUM = parseFloat(document.querySelector("#numeroum").value);
         // numeroDois = parseFloat(document.querySelector("#numDois").value);
         // console.log(numeroUM)
         // console.log(numeroDois)
          
        
        
        // console.log(numeroUM + numeroDois);
        //}
        
      }
      if (oper === "subtracao"){
        numeroTres = parseFloat(numeroUM) - parseFloat(numeroDois);
      }
      if (oper === "divisao"){
        numeroTres = parseFloat(numeroUM) / parseFloat(numeroDois);
      }
      if(oper == "multiplica"){
        numeroTres = parseFloat(numeroUM) * parseFloat(numeroDois);
      }
      
  
      document.querySelector("#Resultado").innerHTML = numeroTres;
    }
