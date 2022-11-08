function compute()
{
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    //alert if principal is zero or negative
    if (principal <= 0) { 
        alert("Enter a positive number");
        document.getElementById("principal").focus();
        return false;
    }
    //calculate interest amount
    var interest = principal * years * rate /100;
    //calculate year by adding current year + no of years entered by user
    var year = new Date().getFullYear()+parseInt(years);
    var result= "If you deposit <mark>"+principal+"</mark>,\<br\>at an interest rate of <mark>"+rate+"%</mark>.\<br\>You will receive an amount of <mark>"+interest+"</mark>,\<br\>in the year <mark>"+year+"</mark>\<br\>";
    document.getElementById("result").innerHTML=result;
    
}
//reads the value of the range slider and displays it the <span>adjacent to the slider.
function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}
        
        