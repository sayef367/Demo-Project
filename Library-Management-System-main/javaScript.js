function myFunction() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}

function output() {
    m1 = document.getElementById("mir_1").value;
    m2 = document.getElementById("mir_2").value;
    m3 = document.getElementById("mir_3").value;
    m4 = document.getElementById("mir_4").value;
    m5 = document.getElementById("mir_5").value;
    document.getElementById("result").innerHTML = 
    "Success: Your book has been successfully added<br>"
    + "Book ID : " + m1 + "<br>Title : " + m2 + "<br>Author : " 
    + m3 + "<br>Edition : " + m4 + "<br>Publication : " + m5;
}