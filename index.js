const displayEl=document.getElementById("display");
let justCalculated = false;
function appendNumber(number) {
    if (justCalculated) {
        displayEl.value = "";
    }
    justCalculated = false;
    displayEl.value += number;
}
  

function clearDisplay()
{
    displayEl.value="";
}
function appendOperator(operator)
{
    displayEl.value+=operator;
}
function calculateResult()
{
    let exp=displayEl.value;
  
   try{
        let result = eval(exp);
        displayEl.value = result;
        justCalculated=true;
   }
   catch(error)
   {
        
       displayEl.value = "Error";
       justCalculated=true;
   }
}
