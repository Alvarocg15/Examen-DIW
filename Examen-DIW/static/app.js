console.log("Hola mundo...");

// Continuar codigo javascript desde aqui ...


const btnBorra = document.querySelectorAll("td button.btnBorrar");
console.log(btnBorra);
const dialogBorrar = document.querySelector("div.dialogBorrar");
const btnB = document.querySelectorAll(".btnB");
 
btnB.forEach(function(btn2){
 
    btn2.addEventListener('click', function () {
   
        dialogBorrar.style.display = "none";
    });
});
btnBorra.forEach(function(btn){
    console.log("Prueba1");
    btn.addEventListener('click', function () {
        console.log("Prueba2");
       dialogBorrar.style.display = "flex";
    });
});
 
 