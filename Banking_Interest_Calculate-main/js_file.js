function amount() {
    var balance = document.getElementById("balance").value;
    var percent = document.getElementById("percent").value;
    var vat = document.getElementById("vat").value;
    var year = document.getElementById("year").value;
    balance = parseFloat(balance);
    percent = parseFloat(percent);
    vat = parseFloat(vat);
    year = parseFloat(year);
    var x = 1;
    var interest = 0;
    var original = balance;

    while (x <= year) {
        interest = percent * (balance / 100);
        balance = ((balance + interest) - (vat * (interest / 100)));
        x++;
    }
    document.getElementById("years").innerHTML = year;
    document.getElementById("result").innerHTML = balance;
    document.getElementById("original").innerHTML = balance - original;
}