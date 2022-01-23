function display_number(value) {
    // we want to dispay the numbers in textbox display, we need to give this function in all numbers and signs except C and =
    result.value += value
}

function clear_display() {
    result.value = ""
}

function calculate_display() {
    result.value = eval(result.value) // eval() is a javascript method which automatically calculate mathematical expression provided that the expression is valid
}
