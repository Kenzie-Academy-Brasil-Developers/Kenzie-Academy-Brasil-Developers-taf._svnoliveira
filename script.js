// Variáveis para aplicar os resultados do teste. Não as altere.

gender = process.argv[2]; // Sexo 
height = process.argv[3]; // Altura
barReps = process.argv[4]; // Repetições com barra
barSeconds = process.argv[5]; // Tempo das repetições com barra 
abs = process.argv[6]; // Abdominais
runDistance = process.argv[7]; // Distância da corrida
runTime = process.argv[8]; // Tempo da corrida
swimDistance = process.argv[9]; // Distância da natação
swimTime = process.argv[10]; // Tempo da natação
diveTime = process.argv[11]; // Tempo de mergulho

let generalPass
let barPass
let runPass
let swimPass

passed = false;

// Importante:
// Se o sexo (gender) for masculino, utilize a palavra "male"
// Se o sexo (gender) for feminino, utilize a palavra "female"

// Sugestão para começar:
// if (gender === "male")  
// **sua lógica a partir daqui**



if (gender == "male" && height > 1.69 && abs > 40 ) {       // Teste Masculino: Altura e abdominais.
        generalPass = true
        if (barReps > 5 || barSeconds < 16){                // Teste nas barras.
            barPass = true
        }
        if (runDistance > 2999 && runTime < 721 ){          // Teste De corrida.
            runPass = true
        } else if (runDistance > 4999 && runTime < 1201){
            runPass = true
        }
        if (swimDistance > 99 && swimTime < 61){            // Teste de Natação.
            swimPass = true
        } else if (diveTime < 31){
            swimPass = true
        }
    }

if (gender == "female" && height > 1.59 && abs > 40 ) {     // Teste Feminino: Altura, abdominais.
        generalPass = true
        if (barReps > 4 || barSeconds < 13){                // Teste nas barras.
            barPass = true
        }
        if (runDistance > 3999 && runTime < 901 ){          // Teste De corrida.
            runPass = true
        } else if (runDistance > 5999 && runTime < 1321){
            runPass = true
        }
        if (swimDistance > 99 && swimTime < 61){            // Teste de Natação.
            swimPass = true
        } else if (diveTime < 31){
            swimPass = true
        }
    }
if (generalPass && barPass && runPass && swimPass == true){
    passed = true
} else {
    passed = false
}


// Deve conter apenas esse console.log no seu código.
// Senão os testes não irão funcionar.
console.log(passed);



