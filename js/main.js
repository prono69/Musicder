/*!
 * Made by Tuhin Kanti Pal
 * Using Own Jiosaavn API  https://github.com/cachecleanerjeet/jiosaavnapi
 * Visit https://tu.hin.life
 */

function firstF() {
    var songname = document.getElementById("search").value;
    var snformat = songname.replace(/ /g, "+");
    document.getElementById("firsts").style.display = "none";
    document.getElementById("footer").style.display = "block";
    document.getElementById("loads").style.display = "block";
    var getJSON = function(url, callback) {

        var xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);
        xhr.responseType = 'json';

        xhr.onload = function() {

            var status = xhr.status;

            if (status == 200) {
                callback(null, xhr.response);
            } else {
                callback(status);
            }
        };

        xhr.send();
    };

    getJSON('https://savan.myrias.ml/search?query=' + snformat, function(err, data) {

        if (err != null) {
            console.error(err);
        } else {
            document.getElementById("loads").style.display = "none";
            document.getElementById("seconds").style.display = "block";

            var tempone = `${data[0]}`;
            var temptwo = `${data[1]}`;
            var tempthree = `${data[2]}`;
            var tempfour = `${data[3]}`;
            var tempfive = `${data[4]}`;


            if (tempone === "undefined") {
                document.getElementById("errresult").style.display = "block";
                document.getElementById("sfirst").style.display = "none";
            } else {
                document.getElementById("errresult").style.display = "none";
                var songnameone = `${data[0].title}`;
                var albumone = `${data[0].album}`;
                var imageone = `${data[0].image}`;
                var artistone = `${data[0].more_info.singers}`;
                var id_one = `${data[0].id}`;
                document.getElementById("tu").innerHTML = "<h1 class='headingtwo'>" + songnameone + "</h1><br><p class='parag'>" + artistone + "</p><br><p class='parag'> Album : " + albumone + "</p>";
                document.getElementById("imageone").src = imageone;
                document.getElementById("dldone").href = "download/?id=" + id_one;
                document.getElementById("playone").href = "play/?id=" + id_one + "&n=" + songnameone;
            }


            if (temptwo === "undefined") {
                document.getElementById("ssecond").style.display = "none";
            } else {
                var songnametwo = `${data[1].title}`;
                var albumtwo = `${data[1].album}`;
                var imagetwo = `${data[1].image}`;
                var artisttwo = `${data[1].more_info.singers}`;
                var id_two = `${data[1].id}`;
                document.getElementById("hin").innerHTML = "<h1 class='headingtwo'>" + songnametwo + "</h1><br><p class='parag'>" + artisttwo + "</p><br><p class='parag'> Album : " + albumtwo + "</p>";
                document.getElementById("imagetwo").src = imagetwo;
                document.getElementById("dldtwo").href = "download/?id=" + id_two;
                document.getElementById("playtwo").href = "play/?id=" + id_two + "&n=" + songnametwo;
            }


            if (tempthree === "undefined") {
                document.getElementById("sthird").style.display = "none";
            } else {
                var songnamethree = `${data[2].title}`;
                var albumthree = `${data[2].album}`;
                var imagethree = `${data[2].image}`;
                var artistthree = `${data[2].more_info.singers}`;
                var id_three = `${data[2].id}`;
                document.getElementById("life").innerHTML = "<h1 class='headingtwo'>" + songnamethree + "</h1><br><p class='parag'>" + artistthree + "</p><br><p class='parag'> Album : " + albumthree + "</p>";
                document.getElementById("imagethree").src = imagethree;
                document.getElementById("dldthree").href = "download/?id=" + id_three;
                document.getElementById("playthree").href = "play/?id=" + id_three + "&n=" + songnamethree;
            }


            if (tempfour === "undefined") {
                document.getElementById("sfourth").style.display = "none";
            } else {
                var songnamefour = `${data[3].title}`;
                var albumfour = `${data[3].album}`;
                var imagefour = `${data[3].image}`;
                var artistfour = `${data[3].more_info.singers}`;
                var id_four = `${data[3].id}`;
                document.getElementById("iamtuhin").innerHTML = "<h1 class='headingtwo'>" + songnamefour + "</h1><br><p class='parag'>" + artistfour + "</p><br><p class='parag'> Album : " + albumfour + "</p>";
                document.getElementById("imagefour").src = imagefour;
                document.getElementById("dldfour").href = "download/?id=" + id_four;
                document.getElementById("playfour").href = "play/?id=" + id_four + "&n=" + songnamefour;
            }

            if (tempfive === "undefined") {
                document.getElementById("sfifth").style.display = "none";
            } else {
                var songnamefive = `${data[4].title}`;
                var albumfive = `${data[4].album}`;
                var imagefive = `${data[4].image}`;
                var artistfive = `${data[4].more_info.singers}`;
                var id_five = `${data[4].id}`;
                document.getElementById("ga").innerHTML = "<h1 class='headingtwo'>" + songnamefive + "</h1><br><p class='parag'>" + artistfive + "</p><br><p class='parag'> Album : " + albumfive + "</p>";
                document.getElementById("imagefive").src = imagefive;
                document.getElementById("dldfive").href = "download/?id=" + id_five;
                document.getElementById("playfive").href = "play/?id=" + id_five + "&n=" + songnamefive;
            }
        }
    });
}
window.addEventListener('keydown', function(e) {
    if (e.keyIdentifier == 'U+000A' || e.keyIdentifier == 'Enter' || e.keyCode == 13) {
        if (e.target.nodeName == 'INPUT' && e.target.type == 'text') {
            e.preventDefault();
            return false;
        }
    }
}, true);
document.addEventListener('contextmenu', event => event.preventDefault());

/*!
 * Made by Tuhin Kanti Pal
 * Using Own Jiosaavn API  https://github.com/cachecleanerjeet/jiosaavnapi
 * Visit https://tu.hin.life
 */