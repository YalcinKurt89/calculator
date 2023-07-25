// Initialisiere die Variable 'input' als leeren String.
let input = '';
// Erstelle eine Konstante 'display', die auf das HTML-Element mit der ID 'display' zugreift.
const display = document.getElementById('display');



// Funktion, um den übergebenen Wert an den 'input'-String anzuhängen und das Ergebnis im 'display' anzuzeigen.
function appendInput(value) {
  input += value;
  display.value = input;
}



// Funktion, um den 'input'-String zu leeren und das 'display' zurückzusetzen.
function clearDisplay() {
  input = '';
  display.value = '';
}



// Funktion, um das letzte Zeichen aus dem 'input'-String zu entfernen und das aktualisierte Ergebnis im 'display' anzuzeigen.
function deleteLastInput() {
  input = input.slice(0, -1);
  display.value = input;
}



// Funktion, um eine negative Zahl einzugeben. Sie sucht das letzte Vorkommen eines Operators (+, -, *, /) im 'input'-String und negiert dann die Zahl, die nach diesem Operator folgt.
function negateNumber() {
  const lastOperatorIndex = input.lastIndexOf('+', input.length - 2) ||
    input.lastIndexOf('-', input.length - 2) ||
    input.lastIndexOf('*', input.length - 2) ||
    input.lastIndexOf('/', input.length - 2);

  if (lastOperatorIndex !== -1) {
    const numberToNegate = input.slice(lastOperatorIndex + 1);
    const negatedNumber = -parseFloat(numberToNegate);
    input = input.slice(0, lastOperatorIndex + 1) + negatedNumber;
    display.value = input;
  } else if (input !== '') {
    input = '-' + input;
    display.value = input;
  }
}



// Funktion, um die eingegebene Rechenoperation auszuwerten und das Ergebnis im 'display' anzuzeigen.
function calculate() {
  try {
    const result = eval(input);
    display.value = result;
    input = result.toString();
  } catch (error) {
    display.value = 'Error';
  }
}



// Füge einen Event-Listener hinzu, der auf Tastatureingaben reagiert.
document.addEventListener('keydown', function(event) {
  const key = event.key;
// Überprüfe, ob die Taste eine Zahl, ein Punkt oder ein unterstützter Operator ist, und füge sie dann dem 'input'-String hinzu.
  if (!isNaN(key) || key === '.' || key === '+' || key === '-' || key === '*' || key === '/' || key === '(' || key === ')') {
    appendInput(key);
// Überprüfe, ob die Taste die Eingabetaste ist und führe die Berechnung aus.
  } else if (key === 'Enter') {
    calculate();
// Überprüfe, ob die Taste die Rücktaste ist und entferne das letzte Zeichen aus dem 'input'-String.
  } else if (key === 'Backspace') {
    deleteLastInput();
  }
});





// für den Del-Button

// Initialisiere die Variable 'inputback' als leeren String.
let inputback = '';
// Erstelle eine Konstante 'displayback', die auf das HTML-Element mit der ID 'display' zugreift.
const displayback = document.getElementById('display');



// Funktion, um den übergebenen Wert an den 'inputback'-String anzuhängen und das Ergebnis im 'displayback' anzuzeigen.
function appendInput(value) {
  inputback += value;
  display.value = inputback;
}



// Funktion, um den 'inputback'-String zu leeren und das 'displayback' zurückzusetzen.
function clearDisplay() {
  inputback = '';
  display.value = '';
}


// Funktion, um das letzte Zeichen aus dem 'inputback'-String zu entfernen und das aktualisierte Ergebnis im 'displayback' anzuzeigen.
function deleteLastInput() {
  inputback = inputback.slice(0, -1);
  display.value = inputback;
}



// Funktion, um die eingegebene Rechenoperation auszuwerten und das Ergebnis im 'displayback' anzuzeigen.
function calculate() {
  try {
    const result = eval(inputback);
    display.value = result;
    inputback = result.toString();
  } catch (error) {
    display.value = 'Error';
  }
}


/*
appendInput(value): Diese Funktion fügt den übergebenen value an den inputback-String an und aktualisiert das displayback mit dem aktualisierten inputback-String.

clearDisplay(): Diese Funktion leert den inputback-String und setzt das displayback auf einen leeren Wert, wodurch der Taschenrechner zurückgesetzt wird.

deleteLastInput(): Diese Funktion entfernt das letzte Zeichen aus dem inputback-String und aktualisiert das displayback mit dem neuen Wert.

calculate(): Diese Funktion wertet den inputback-String als Rechenoperation aus und zeigt das Ergebnis im displayback an. Falls ein Fehler bei der Auswertung auftritt, wird "Error" im displayback angezeigt.
*/