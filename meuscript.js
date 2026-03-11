       document.getElementById("paragrafo").innerHTML = "Este é o texto do parágrafo.";

       var objt1 = document.getElementById("paragrafo2");
       var n1 = 10;

       function funcaoSoma(num1) {
           var x = num1 +3;
           return x;
       }

       

       //objt1.innerHTML = funcaoSoma(100);

       function funcaoAdicionaTitulo() {
        if (objt1.innerText === "Este é um título") {
                return objt1.innerHTML = "OI";
            else{
                return objt1.innerHTML = "<h1>Este é um título</h1>";
            }
        }   
       }