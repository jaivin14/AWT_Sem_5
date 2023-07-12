let PageNo = 0;
var data = new Array();
data.push(["Jaivin", "jpS@gmail.com", "Surat"]);
data.push(["Abhi", "AkR@gmail.com", "Rajkot"]);
data.push(["Ankit", "Ankit122@gmail.com", "Surat"]);
data.push(["Divy", "Divy@gmail.com", "Botad"]);
data.push(["Dhruv", "Dhruv45@gmail.com", "Surat"]);
data.push(["Bhavy", "Bhavy78@gmail.com", "Surat"]);
data.push(["Param", "param04@gmail.com", "Dhoraji"]);
data.push(["Prasan", "prasan66@gmail.com", "Surat"]);


window.onload = function () {
    console.log("loaded");
    createTable(data);
    createButtons();
}



function createTable(arr, index = 0) {
    var table = document.getElementById("TableID").getElementsByTagName("tbody")[0];
    table.innerHTML = "";
    var end = Math.min(index + 4, arr.length);
    for (var i = index; i < end; i++) {
        var row = table.insertRow(-1);
        for (const data of arr[i]) {
            var cell = row.insertCell(-1);
            cell.innerHTML = data;
        }
    }
    var spacing = document.createElement("br");
    body.appendChild(spacing);
}

function createButtons() {
    var body = document.getElementById("body");
    var div = document.createElement("div");

    // prev
    var Prev = document.createElement("button");
    Prev.onclick = function () {
        if (PageNo > 0) {
            PageNo--;
            var index = PageNo * 4;
            createTable(data, index);
        }
    };
    Prev.innerHTML = "Prev";
    div.appendChild(Prev);

    // numbers
    var btns = Math.ceil(data.length / 5);
    for (var i = 0; i < btns; i++) {
        var btn = document.createElement("button");
        btn.innerHTML = i + 1;
        btn.value = i;
        btn.onclick = function () {
            NumberPages(this.value);
        };
        div.appendChild(btn);
    }

    // next
    var Next = document.createElement("button");
    Next.onclick = function () {
        var index = (PageNo + 1) * 4;
        if (index < data.length) {
            PageNo++;
            createTable(data, index);
        }
    };
    Next.innerHTML = "Next";
    div.appendChild(Next);

    // all buttons to div
    body.appendChild(div);
}

function NumberPages(Pages) {
    PageNo = parseInt(Pages);
    createTable(data, PageNo * 4);
}