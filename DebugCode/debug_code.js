    
    function performOperation() {
        // Get user input from input fields
        let num1 = parseInt(document.getElementById('input1').value);
        let num2 = parseInt(document.getElementById('input2').value);
        // Check if inputs are valid numbers
        if (!isNaN(num1) && !isNaN(num2)) {
        // Perform the operation
                        let result = multiply(num1, num2);
                        let result1 = add(num1, num2);
                        let result2 = divide(num1, num2)
    
                        // Display the result
                        displayResult(result, result1, result2);
                    } else {
                        displayResult('Please enter valid numbers');
                    }
                }
    
                function multiply(a, b) {
                    // Introduce a debugger statement to pause execution
                    debugger;
    
                    // Multiply the numbers
                    return a * b;
                }
                function add(a, b) {
                    // Introduce a debugger statement to pause execution
                    debugger;
    
                    // Multiply the numbers
                    return a + b;
                }
                function divide(a, b) {
                    // Introduce a debugger statement to pause execution
                    debugger;
                    // Multiply the numbers
                    return a / b;
                }
    
                function displayResult(result, result1, result2) {
                    // Display the result in the paragraph element
                    const resultElement = document.getElementById('result');
                    const result1Element = document.getElementById('result1');
                    const result2Element = document.getElementById('result2');
                    resultElement.textContent = `The result is: ${result}`;
                    result1Element.textContent = `The result is: ${result1}`;
                    result2Element.textContent = `The result is: ${result2}`;
                    
                }
            