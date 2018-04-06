window.onload = function () {
    this.document.getElementById("button").onclick = function () {
        var xhr1 = new XMLHttpRequest();
        var xhr2 = new XMLHttpRequest();

        xhr1.open("GET", "file1.html", true);
        xhr2.open("GET", "file2.html", true);

        // xhr1.onreadystatechange = function () {
        //     if (xhr1.readyState == 4 && xhr1.status == 200) {
        //         document.getElementById("output").innerHTML += xhr1.responseText;
        //     }
        //     if(xhr2.readyState ==4 && xhr2.status){
        //         document.getElementById("output").innerHTML += xhr2.responseText;
        //     }
        // }
        // xhr1.send();
        // xhr2.send();
        xhr1.onreadystatechange = function () {
            if (xhr1.readyState == 4) {
                xhr2.onreadystatechange = function () {
                    if (xhr2.readyState == 4) {
                        if (xhr2.status == 200) {
                            document.getElementById("output").innerHTML += xhr2.responseText;
                        }
                    }
                }
                xhr2.send();
                if (xhr1.status == 200) {
                    document.getElementById("output").innerHTML += xhr1.responseText;
                }
            }
        }
        xhr1.send();
    }
}