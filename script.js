function compute() {
    //retrieve principal value
    var principal = parseFloat(document.getElementById("principal").value);
    
    //block the value from going below 0, display error if it does and highlight the box
    if(principal == "" || principal <= 0)
    {
        alert("Enter a positive number");
        document.getElementById("principal").focus();
        return;
    }
    
    //retrieve remaining values
    var rate = parseFloat(document.getElementById("rate").value);
    var years = parseInt(document.getElementById("years").value);
    var interest = principal * years * rate /100;
    var year = new Date().getFullYear() + years;

    //Return the result message right below the interest
    document.getElementById("result").innerHTML="If you deposit <mark>" + principal + "</mark>,\<br\>at an interest rate of <mark>" + rate + "%</mark>\<br\>You will receive an amount of <mark>" + interest + "</mark>,\<br\>in the year <mark>" + year + "</mark>\<br\>";
}

//Add a function to show the slider values
function updateRate() {
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}
