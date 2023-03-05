// let mainMenu;

// function triangleArea(base, height) {
//     base = parseFloat(prompt("Digite o número correspondente à base do triângulo"));
//     height = parseFloat(prompt("Digite o número correspondente à altura do triângulo"));
//     return (base * height) / 2;
// }

// function rectangleArea(base, height) {
//     base = parseFloat(prompt("Digite o número correspondente à base do retângulo"));
//     height = parseFloat(prompt("Digite o número correspondente à altura do retângulo"));
//     return base * height;
// }

// function squareArea(side1, side2) {
//     side1 = parseFloat(prompt("Digite o número correspondente a um lado do quadrado"));
//     side2 = parseFloat(prompt("Digite o número correspondente ao outro lado do quadrado"));
//     return side1 * side2;
// }

// function trapeziumArea(higherBase, lowerBase, height) {
//     higherBase = parseFloat(prompt("Digite o número correspondente à base maior do trapézio"));
//     lowerBase = parseFloat(prompt("Digite o número correspondente à base menor do trapézio"));
//     height = parseFloat(prompt("Digite o número correspondente à altura do trapézio"));
//     return (higherBase + lowerBase) * height / 2;
// }

// function circleArea(radius) {
//     radius = parseFloat(prompt("Digite o número correspondente ao raio do círculo"));
//     return 3.14 * (radius ** 2);
// }

// function calculate() {
//     do {
//         mainMenu = prompt(`Calculadora Geométrica
//         O que deseja fazer? (digite o número da opção):
        
//         1- Calcular área do triângulo
//         2- Calcular área do retângulo
//         3- Calcular área do quadrado
//         4- Calcular área do trapézio
//         5- Calcular área do círculo
//         6- Sair do programa`);
    
//         switch(mainMenu) {
//             case "1":
//                 const triangleAreaResults = triangleArea();
//                 alert(`Resultado: ${triangleAreaResults}`);
//                 break;
//             case "2":
//                 const rectangleAreaResults = rectangleArea();
//                 alert(`Resultado: ${rectangleAreaResults}`);
//                 break;
//             case "3":
//                 const squareAreaResults = squareArea();
//                 alert(`Resultado: ${squareAreaResults}`);
//                 break;
//             case "4":
//                 const trapeziumAreaResults = trapeziumArea();
//                 alert(`Resultado: ${trapeziumAreaResults}`);
//                 break;
//             case "5":
//                 const circleAreaResults = circleArea();
//                 alert(`Resultado: ${circleAreaResults}`);
//                 break;
//             case "6":
//                 alert("Saindo...");
//                 break;
//             default:
//                 alert("Opção inválida! Digite apenas o número da opção!");
//         }
//     } while(mainMenu !== "6");
// }

// calculate();

const triangleButton = document.querySelector("#triangle");
const rectangleButton = document.querySelector("#rectangle");
const squareButton = document.querySelector("#square");
const trapeziumButton = document.querySelector("#trapezium");
const circleButton = document.querySelector("#circle");

const inputContainer = document.querySelector(".input-container");
const quickReviewContainer = document.querySelector(".quick-review-container");

triangleButton.addEventListener("click", () => {
    quickReviewContainer.style.borderWidth = ".2rem"
    quickReviewContainer.style.borderStyle = "solid"
    
    const triangleAreaQuickReviewHeader = document.createElement("h3");
    triangleAreaQuickReviewHeader.innerText = "Cálculo da área de um triângulo:"

    const triangleAreaQuickReviewImage = document.createElement("img");
    triangleAreaQuickReviewImage.id = "quickReviewImage";
    triangleAreaQuickReviewImage.setAttribute("src", "https://static.todamateria.com.br/upload/re/ai/rea_isosceles.jpg");
    triangleAreaQuickReviewImage.setAttribute("alt", "Imagem da área de um triângulo");

    const triangleAreaQuickReview = document.createElement("p");
    triangleAreaQuickReview.innerText = "Área = área do triângulo \n b = base do triângulo \n h = altura do triângulo";

    const triangleBaseInput = document.createElement("input");
    triangleBaseInput.setAttribute("type", "number");
    triangleBaseInput.id = "triangleBaseInput";

    const triangleBaseInputLabel = document.createElement("label");
    triangleBaseInputLabel.setAttribute("for", "triangleBaseInput");
    triangleBaseInputLabel.innerText = "Informe a base do triângulo";

    const triangleHeightInput = document.createElement("input");
    triangleHeightInput.setAttribute("type", "number");
    triangleHeightInput.id = "triangleHeightInput";

    const triangleHeightInputLabel = document.createElement("label");
    triangleHeightInputLabel.setAttribute("for", "triangleHeightInput");
    triangleHeightInputLabel.innerText = "Informe a altura do triângulo";

    const calculateTriangleAreaButton = document.createElement("button");
    calculateTriangleAreaButton.innerText = "Calcular a área";

    quickReviewContainer.append(triangleAreaQuickReviewHeader, triangleAreaQuickReviewImage, triangleAreaQuickReview);
    inputContainer.append(triangleBaseInputLabel, triangleBaseInput, triangleHeightInputLabel, triangleHeightInput, calculateTriangleAreaButton);
})