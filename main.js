console.log("estoy en Js")
let $resultado = document.getElementById("resul")

function FSumar(){
    let num1 = parseInt(n1.value)s
    let num2 = parseInt(n2.value)
    //console.log(typeof(num1))
    $resultado.innerHTML = "la suma es: "+ (num1+num2)
   
}
function FRestar(){
    let num1 = parseInt(n1.value)
    let num2 = parseInt(n2.value)
    $resultado.innerHTML ("la resta es: "+ (num1-num2))
}

function FMultiplicar(){
    let num1 = parseInt(n1.value)
    let num2 = parseInt(n2.value)
    $resultado.innerHTML ("la multiplicacion es: "+ (num1*num2))
}

function FDividir(){
    let num1 = parseInt(n1.value)
    let num2 = parseInt(n2.value)
    if(num2===0)
    {$resultado.innerHTML = "la division entre cero (0) no es posible"}
    else{ $resultado.innerHTML = "la division es: "+ (num1/num2)}
   
}