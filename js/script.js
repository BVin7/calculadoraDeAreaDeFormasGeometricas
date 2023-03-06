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

const calculatorContainer = document.querySelector(".calculator-container");

triangleButton.addEventListener("click", () => {
    const quickReviewContainer = document.createElement("div");
    quickReviewContainer.className = "quick-review-container";
    quickReviewContainer.style.borderWidth = ".2rem";
    quickReviewContainer.style.borderStyle = "solid";

    const triangleAreaQuickReviewHeader = document.createElement("h3");
    triangleAreaQuickReviewHeader.innerText = "Cálculo da área de um triângulo:"

    const triangleAreaQuickReviewImage = document.createElement("img");
    triangleAreaQuickReviewImage.id = "quickReviewImage";
    triangleAreaQuickReviewImage.setAttribute("src", "https://2.bp.blogspot.com/-E36qS9bNo6g/XMrkpuEk8fI/AAAAAAAALeY/vrPaBs22I6gxVvFZeJQZdFyrHAxZOYMwQCLcBGAs/s1600/calcucar-area-triangulo.png");
    triangleAreaQuickReviewImage.setAttribute("alt", "Imagem da área de um triângulo");

    const triangleAreaQuickReview = document.createElement("p");
    triangleAreaQuickReview.innerText = "A (área do triângulo) = b (base do triângulo) * h (altura do triângulo) / 2";

    const inputContainer = document.createElement("div");
    inputContainer.className = "input-container";

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

    calculatorContainer.replaceChildren(quickReviewContainer, inputContainer);
    quickReviewContainer.append(triangleAreaQuickReviewHeader, triangleAreaQuickReviewImage, triangleAreaQuickReview);
    inputContainer.append(triangleBaseInputLabel, triangleBaseInput, triangleHeightInputLabel, triangleHeightInput, calculateTriangleAreaButton);
});

rectangleButton.addEventListener("click", () => {
    const quickReviewContainer = document.createElement("div");
    quickReviewContainer.className = "quick-review-container";
    quickReviewContainer.style.borderWidth = ".2rem"
    quickReviewContainer.style.borderStyle = "solid"

    const rectangleAreaQuickReviewHeader = document.createElement("h3");
    rectangleAreaQuickReviewHeader.innerText = "Cálculo da área de um retângulo:"

    const rectangleAreaQuickReviewImage = document.createElement("img");
    rectangleAreaQuickReviewImage.id = "quickReviewImage";
    rectangleAreaQuickReviewImage.setAttribute("src", "https://static.todamateria.com.br/upload/57/7b/577bef35ed40f-area-do-retangulo.jpg");
    rectangleAreaQuickReviewImage.setAttribute("alt", "Imagem da área de um retângulo");

    const rectangleAreaQuickReview = document.createElement("p");
    rectangleAreaQuickReview.innerText = "Área = base x altura";

    const inputContainer = document.createElement("div");
    inputContainer.className = "input-container";

    const rectangleBaseInput = document.createElement("input");
    rectangleBaseInput.setAttribute("type", "number");
    rectangleBaseInput.id = "rectangleBaseInput";

    const rectangleBaseInputLabel = document.createElement("label");
    rectangleBaseInputLabel.setAttribute("for", "rectangleBaseInput");
    rectangleBaseInputLabel.innerText = "Informe a base do retângulo";

    const rectangleHeightInput = document.createElement("input");
    rectangleHeightInput.setAttribute("type", "number");
    rectangleHeightInput.id = "rectangleHeightInput";

    const rectangleHeightInputLabel = document.createElement("label");
    rectangleHeightInputLabel.setAttribute("for", "rectangleHeightInput");
    rectangleHeightInputLabel.innerText = "Informe a altura do retângulo";

    const calculateRectangleAreaButton = document.createElement("button");
    calculateRectangleAreaButton.innerText = "Calcular a área";

    calculatorContainer.replaceChildren(quickReviewContainer, inputContainer);
    quickReviewContainer.append(rectangleAreaQuickReviewHeader, rectangleAreaQuickReviewImage, rectangleAreaQuickReview);
    inputContainer.append(rectangleBaseInputLabel, rectangleBaseInput, rectangleHeightInputLabel, rectangleHeightInput, calculateRectangleAreaButton);
});

squareButton.addEventListener("click", () => {
    const quickReviewContainer = document.createElement("div");
    quickReviewContainer.className = "quick-review-container";
    quickReviewContainer.style.borderWidth = ".2rem"
    quickReviewContainer.style.borderStyle = "solid"

    const squareAreaQuickReviewHeader = document.createElement("h3");
    squareAreaQuickReviewHeader.innerText = "Cálculo da área de um quadrado:"

    const squareAreaQuickReviewImage = document.createElement("img");
    squareAreaQuickReviewImage.id = "quickReviewImage";
    squareAreaQuickReviewImage.setAttribute("src", "https://www.gigacalculator.com/img/calculators/area-square.png");
    squareAreaQuickReviewImage.setAttribute("alt", "Imagem da área de um quadrado");

    const squareAreaQuickReview = document.createElement("p");
    squareAreaQuickReview.innerText = "Área = s² (s = side ou 'lado')";

    const inputContainer = document.createElement("div");
    inputContainer.className = "input-container";

    const squareSideInput = document.createElement("input");
    squareSideInput.setAttribute("type", "number");
    squareSideInput.id = "squareSideInput";

    const squareSideInputLabel = document.createElement("label");
    squareSideInputLabel.setAttribute("for", "squareSideInput");
    squareSideInputLabel.innerText = "Informe o lado do quadrado";

    const calculateSquareAreaButton = document.createElement("button");
    calculateSquareAreaButton.innerText = "Calcular a área";

    calculatorContainer.replaceChildren(quickReviewContainer, inputContainer);
    quickReviewContainer.append(squareAreaQuickReviewHeader, squareAreaQuickReviewImage, squareAreaQuickReview);
    inputContainer.append(squareSideInputLabel, squareSideInput, calculateSquareAreaButton);
});

trapeziumButton.addEventListener("click", () => {
    const quickReviewContainer = document.createElement("div");
    quickReviewContainer.className = "quick-review-container";
    quickReviewContainer.style.borderWidth = ".2rem";
    quickReviewContainer.style.borderStyle = "solid";

    const trapeziumAreaQuickReviewHeader = document.createElement("h3");
    trapeziumAreaQuickReviewHeader.innerText = "Cálculo da área de um trapézio:"

    const trapeziumAreaQuickReviewImage = document.createElement("img");
    trapeziumAreaQuickReviewImage.id = "quickReviewImage";
    trapeziumAreaQuickReviewImage.setAttribute("src", "https://static.mundoeducacao.uol.com.br/mundoeducacao/2021/07/elementos-trapezio.jpg");
    trapeziumAreaQuickReviewImage.setAttribute("alt", "Imagem da área de um trapézio");

    const trapeziumAreaQuickReview = document.createElement("p");
    trapeziumAreaQuickReview.innerText = "Área do trapézio = (base maior (B) + base menor do trapézio (b)) * altura do trapézio (h) / 2";

    const inputContainer = document.createElement("div");
    inputContainer.className = "input-container";

    const trapeziumHigherBaseInput = document.createElement("input");
    trapeziumHigherBaseInput.setAttribute("type", "number");
    trapeziumHigherBaseInput.id = "trapeziumHigherBaseInput";

    const trapeziumHigherBaseInputLabel = document.createElement("label");
    trapeziumHigherBaseInputLabel.setAttribute("for", "trapeziumHigherBaseInput");
    trapeziumHigherBaseInputLabel.innerText = "Informe a base maior do trapézio";

    const trapeziumLowerBaseInput = document.createElement("input");
    trapeziumLowerBaseInput.setAttribute("type", "number");
    trapeziumLowerBaseInput.id = "trapeziumLowerBaseInput";

    const trapeziumLowerBaseInputLabel = document.createElement("label");
    trapeziumLowerBaseInputLabel.setAttribute("for", "trapeziumLowerBaseInput");
    trapeziumLowerBaseInputLabel.innerText = "Informe a base menor do trapézio";

    const trapeziumHeightInput = document.createElement("input");
    trapeziumHeightInput.setAttribute("type", "number");
    trapeziumHeightInput.id = "trapeziumHeightInput";

    const trapeziumHeightInputLabel = document.createElement("label");
    trapeziumHeightInputLabel.setAttribute("for", "trapeziumHeightInput");
    trapeziumHeightInputLabel.innerText = "Informe a altura do trapézio";

    const calculateTrapeziumAreaButton = document.createElement("button");
    calculateTrapeziumAreaButton.innerText = "Calcular a área";

    calculatorContainer.replaceChildren(quickReviewContainer, inputContainer);
    quickReviewContainer.append(trapeziumAreaQuickReviewHeader, trapeziumAreaQuickReviewImage, trapeziumAreaQuickReview);
    inputContainer.append(trapeziumHigherBaseInputLabel, trapeziumHigherBaseInput, trapeziumLowerBaseInputLabel, trapeziumLowerBaseInput, trapeziumHeightInputLabel, trapeziumHeightInput, calculateTrapeziumAreaButton);
});

circleButton.addEventListener("click", () => {
    const quickReviewContainer = document.createElement("div");
    quickReviewContainer.className = "quick-review-container";
    quickReviewContainer.style.borderWidth = ".2rem"
    quickReviewContainer.style.borderStyle = "solid"

    const circleAreaQuickReviewHeader = document.createElement("h3");
    circleAreaQuickReviewHeader.innerText = "Cálculo da área de um círculo:"

    const circleAreaQuickReviewImage = document.createElement("img");
    circleAreaQuickReviewImage.id = "quickReviewImage";
    circleAreaQuickReviewImage.setAttribute("src", "https://2.bp.blogspot.com/-vYCBtTh-hkM/XMrlaQtSITI/AAAAAAAALeg/HBp5kTdq-TYYlUGACBCLKNiWUNT27Ss6ACLcBGAs/s1600/calcucar-area-circulo.png");
    circleAreaQuickReviewImage.setAttribute("alt", "Imagem da área de um círculo");

    const circleAreaQuickReview = document.createElement("p");
    circleAreaQuickReview.innerText = "Área = π (pi) x r² (raio elevado ao quadrado)";

    const inputContainer = document.createElement("div");
    inputContainer.className = "input-container";

    const circleRadiusInput = document.createElement("input");
    circleRadiusInput.setAttribute("type", "number");
    circleRadiusInput.id = "circleRadiusInput";

    const circleRadiusInputLabel = document.createElement("label");
    circleRadiusInputLabel.setAttribute("for", "circleRadiusInput");
    circleRadiusInputLabel.innerText = "Informe o raio do círculo";

    const calculateCircleAreaButton = document.createElement("button");
    calculateCircleAreaButton.innerText = "Calcular a área";

    calculatorContainer.replaceChildren(quickReviewContainer, inputContainer);
    quickReviewContainer.append(circleAreaQuickReviewHeader, circleAreaQuickReviewImage, circleAreaQuickReview);
    inputContainer.append(circleRadiusInputLabel, circleRadiusInput, calculateCircleAreaButton);
});
