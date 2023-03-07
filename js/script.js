const triangleButton = document.querySelector("#triangle");
const rectangleButton = document.querySelector("#rectangle");
const squareButton = document.querySelector("#square");
const trapeziumButton = document.querySelector("#trapezium");
const circleButton = document.querySelector("#circle");

const calculatorContainer = document.querySelector(".calculator-container");
const resultsSection = document.querySelector(".results-section");
const spanWithResultsInside = document.querySelector("#span-with-results-inside");

triangleButton.addEventListener("click", () => {
    const quickReviewContainer = document.createElement("div");
    quickReviewContainer.className = "quick-review-container";
    quickReviewContainer.style.borderWidth = ".2rem";
    quickReviewContainer.style.borderStyle = "solid";

    const triangleAreaQuickReviewHeader = document.createElement("h3");
    triangleAreaQuickReviewHeader.innerText = "Cálculo da área de um triângulo:"

    const triangleAreaQuickReviewImage = document.createElement("img");
    triangleAreaQuickReviewImage.id = "quickReviewImage";
    triangleAreaQuickReviewImage.setAttribute("src", "https://static.todamateria.com.br/upload/re/ad/readotriangulo-cke.jpg?auto_optimize=low");
    triangleAreaQuickReviewImage.setAttribute("alt", "Imagem da área de um triângulo");

    const triangleAreaQuickReview = document.createElement("p");
    triangleAreaQuickReview.innerText = "Área = base (b) * altura (h) / 2";

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
    calculateTriangleAreaButton.id = "calculateAreaButton"
    calculateTriangleAreaButton.innerText = "Calcular a área";

    calculatorContainer.replaceChildren(quickReviewContainer, inputContainer);
    quickReviewContainer.append(triangleAreaQuickReviewHeader, triangleAreaQuickReviewImage, triangleAreaQuickReview);
    inputContainer.append(triangleBaseInputLabel, triangleBaseInput, triangleHeightInputLabel, triangleHeightInput, calculateTriangleAreaButton);

    const calculateTheArea = document.querySelector("#calculateAreaButton");
    calculateTheArea.addEventListener("click", () => {
        const triangleBase = parseFloat(triangleBaseInput.value);
        const triangleHeight = parseFloat(triangleHeightInput.value);
        const results = (triangleBase * triangleHeight) / 2;
        spanWithResultsInside.replaceChildren(results);
    });
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
    rectangleAreaQuickReviewImage.setAttribute("src", "https://escolaeducacao.com.br/wp-content/uploads/2020/02/como-calcular-area-do-retangulo-4-750x430.png");
    rectangleAreaQuickReviewImage.setAttribute("alt", "Imagem da área de um retângulo");

    const rectangleAreaQuickReview = document.createElement("p");
    rectangleAreaQuickReview.innerText = "Área = base (b) x altura (h)";

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
    calculateRectangleAreaButton.id = "calculateAreaButton";
    calculateRectangleAreaButton.innerText = "Calcular a área";

    calculatorContainer.replaceChildren(quickReviewContainer, inputContainer);
    quickReviewContainer.append(rectangleAreaQuickReviewHeader, rectangleAreaQuickReviewImage, rectangleAreaQuickReview);
    inputContainer.append(rectangleBaseInputLabel, rectangleBaseInput, rectangleHeightInputLabel, rectangleHeightInput, calculateRectangleAreaButton);

    const calculateTheArea = document.querySelector("#calculateAreaButton");
    calculateTheArea.addEventListener("click", () => {
        const rectangleBase = parseFloat(rectangleBaseInput.value);
        const rectangleHeight = parseFloat(rectangleHeightInput.value);
        const results = rectangleBase * rectangleHeight;
        spanWithResultsInside.replaceChildren(results);
    });
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
    squareAreaQuickReviewImage.setAttribute("src", "https://escolaeducacao.com.br/wp-content/uploads/2020/02/area-de-um-quadrado-1-750x430.png");
    squareAreaQuickReviewImage.setAttribute("alt", "Imagem da área de um quadrado");

    const squareAreaQuickReview = document.createElement("p");
    squareAreaQuickReview.innerText = "Área = lado (L) elevado ao quadrado";

    const inputContainer = document.createElement("div");
    inputContainer.className = "input-container";

    const squareSideInput = document.createElement("input");
    squareSideInput.setAttribute("type", "number");
    squareSideInput.id = "squareSideInput";

    const squareSideInputLabel = document.createElement("label");
    squareSideInputLabel.setAttribute("for", "squareSideInput");
    squareSideInputLabel.innerText = "Informe o lado do quadrado";

    const calculateSquareAreaButton = document.createElement("button");
    calculateSquareAreaButton.id = "calculateAreaButton";
    calculateSquareAreaButton.innerText = "Calcular a área";

    calculatorContainer.replaceChildren(quickReviewContainer, inputContainer);
    quickReviewContainer.append(squareAreaQuickReviewHeader, squareAreaQuickReviewImage, squareAreaQuickReview);
    inputContainer.append(squareSideInputLabel, squareSideInput, calculateSquareAreaButton);

    const calculateTheArea = document.querySelector("#calculateAreaButton");
    calculateTheArea.addEventListener("click", () => {
        const squareSide = parseFloat(squareSideInput.value);
        const results = squareSide ** 2;
        spanWithResultsInside.replaceChildren(results);
    });
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
    trapeziumAreaQuickReviewImage.setAttribute("src", "https://static.todamateria.com.br/upload/re/ad/readotrapezio-cke.jpg?auto_optimize=low");
    trapeziumAreaQuickReviewImage.setAttribute("alt", "Imagem da área de um trapézio");

    const trapeziumAreaQuickReview = document.createElement("p");
    trapeziumAreaQuickReview.innerText = "Área = (base maior (B) + base menor (b)) * altura (h) / 2";

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
    calculateTrapeziumAreaButton.id = "calculateAreaButton";
    calculateTrapeziumAreaButton.innerText = "Calcular a área";

    calculatorContainer.replaceChildren(quickReviewContainer, inputContainer);
    quickReviewContainer.append(trapeziumAreaQuickReviewHeader, trapeziumAreaQuickReviewImage, trapeziumAreaQuickReview);
    inputContainer.append(trapeziumHigherBaseInputLabel, trapeziumHigherBaseInput, trapeziumLowerBaseInputLabel, trapeziumLowerBaseInput, trapeziumHeightInputLabel, trapeziumHeightInput, calculateTrapeziumAreaButton);

    const calculateTheArea = document.querySelector("#calculateAreaButton");
    calculateTheArea.addEventListener("click", () => {
        const trapeziumHigherBase = parseFloat(trapeziumHigherBaseInput.value);
        const trapeziumLowerBase = parseFloat(trapeziumLowerBaseInput.value);
        const trapeziumHeight = parseFloat(trapeziumHeightInput.value);
        const results = (trapeziumHigherBase + trapeziumLowerBase) * trapeziumHeight / 2;
        spanWithResultsInside.replaceChildren(results);
    });
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
    circleAreaQuickReviewImage.setAttribute("src", "https://escolaeducacao.com.br/wp-content/uploads/2020/02/como-calcular-area-de-um-circulo.png");
    circleAreaQuickReviewImage.setAttribute("alt", "Imagem da área de um círculo");

    const circleAreaQuickReview = document.createElement("p");
    circleAreaQuickReview.innerText = "Área = pi (π) x raio (r) elevado ao quadrado";

    const inputContainer = document.createElement("div");
    inputContainer.className = "input-container";

    const circleRadiusInput = document.createElement("input");
    circleRadiusInput.setAttribute("type", "number");
    circleRadiusInput.id = "circleRadiusInput";

    const circleRadiusInputLabel = document.createElement("label");
    circleRadiusInputLabel.setAttribute("for", "circleRadiusInput");
    circleRadiusInputLabel.innerText = "Informe o raio do círculo";

    const calculateCircleAreaButton = document.createElement("button");
    calculateCircleAreaButton.id = "calculateAreaButton";
    calculateCircleAreaButton.innerText = "Calcular a área";

    calculatorContainer.replaceChildren(quickReviewContainer, inputContainer);
    quickReviewContainer.append(circleAreaQuickReviewHeader, circleAreaQuickReviewImage, circleAreaQuickReview);
    inputContainer.append(circleRadiusInputLabel, circleRadiusInput, calculateCircleAreaButton);

    const calculateTheArea = document.querySelector("#calculateAreaButton");
    calculateTheArea.addEventListener("click", () => {
        const circleRadius = parseFloat(circleRadiusInput.value);
        const results = 3.14 * (circleRadius ** 2);
        spanWithResultsInside.replaceChildren(results);
    });
});
