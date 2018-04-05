window.onload = function () {
    this.document.getElementById("button").onclick = function () {
        var xhr = new XMLHttpRequest();
        xhr.open("GET", "file1.html", true);

        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && xhr.status == 200) {
                document.getElementById("output").innerHTML += xhr.responseText;
            }
        }
        xhr.send();
    }
}