function test() {
    var number = document.getElementById("number").value;
    var table = document.getElementsByTagName("table")[0];

    for (var i = 0; i < 10; i++) {
        for (var j = 0; j < 10; j++) {
            table.rows[i].cells[j].style.backgroundColor = "yellow";
        }
    }

    for (var i = 0; i < 10; i++) {
        for (var j = 0; j < 10; j = j + 2) {
            table.rows[i].cells[j].innerHTML = Math.floor(Math.random() * number + 1);
            table.rows[i].cells[j + 1].innerHTML = Math.floor(Math.random() * number + 1);
            if (i % 2 == 0) {
                table.rows[i + 1].cells[j + 1].style.backgroundColor = "green";
                table.rows[j].cells[i].style.backgroundColor = "green";
            }
        }
    }
}