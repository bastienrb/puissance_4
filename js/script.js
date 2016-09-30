var joueur = 1; // num joueur en cours
var colonne = 5;
var ligne = 5;
var game = true; // jeu en cours
var textehtml = "";


var columns1 = new Array(5);
var columns2 = new Array(5);
var columns3 = new Array(5);
var columns4 = new Array(5);
var columns5 = new Array(5);


var rows = new Array(5);
rows[0] = columns1
rows[1] = columns2;
rows[2] = columns3;
rows[3] = columns4;
rows[4] = columns5;


for (var i = 0; i < 5; i++) {
    for (var j = 0; j < 5; j++) {
        rows[i][j] = 0;
    }
}
console.log(rows);

var disp_puis = document.getElementById("Puissance4").innerHTML;


function reset_board() {
    for (var i = 0; i < 5; i++) {
        for (var j = 0; j < 5; j++) {
            rows[i][j] = 0;
        }
    }
    disp();
}


function disp() {


    var txt1 = "";
    txt1 += "<table>";

    for (var i = 0; i < 5; i++) {
        txt1 += "<tr>";
        for (var j = 0; j < 5; j++) {
            if (rows[i][j] == 0)
                txt1 += "<td onclick = pointset(" + i + "," + j + ")>" + "<div id='" + i + j + "'></div>" + "</td>";
            else if (rows[i][j] == 1)
                txt1 += "<td onclick = pointset("+ i + "," + j + ")>" + "<div class = 'joueur1' id='" + i + j + "'></div>" + "</td>";
            else
                txt1 += "<td onclick = pointset("+ i + "," + j + ")>" + "<div class = 'joueur2' id='" + i + j + "'></div>" + "</td>";


        }
        txt1 += "</tr>";

    }
    document.getElementById("Puissance4").innerHTML = txt1 + "</table>";

}

function pointset(line, col) {

    if (joueur == 1) {
        if (rows[4][col] == 0)
            rows[4][col] = 1;
        else if (rows[3][col] == 0)
            rows[3][col] = 1;
        else if (rows[2][col] == 0)
            rows[2][col] = 1;
        else if (rows[1][col] == 0)
            rows[1][col] = 1;
        else if (rows[0][col] == 0)
            rows[0][col] = 1;
    }

    else {
        if (rows[4][col] == 0)
            rows[4][col] = 2;
        else if (rows[3][col] == 0)
            rows[3][col] = 2;
        else if (rows[2][col] == 0)
            rows[2][col] = 2;
        else if (rows[1][col] == 0)
            rows[1][col] = 2;
        else if (rows[0][col] == 0)
            rows[0][col] = 2;
    }

    verticalwin(col);
    horizontalwin(line);

    if (joueur == 2)
        joueur = 1;
    else
        joueur = 2;



    disp();

}


function verticalwin(j){
    var compteur1 = 0;
    var compteur2 = 0;

    for(i=colonne-1; i>0; i--){
        if(rows[i][j] == 1){
            compteur1 = compteur1 + 1;
        }
        else if(rows[i][j] == 2){
            compteur2 = compteur2 + 1;
        }
    }

    if (compteur1 == 4){
        alert("joueur 1 a gagné");
    }
    else if(compteur2 == 4){
        alert("joueur 2 a gagné");
    }
};

function horizontalwin(i){
    var compteur1 = 0;
    var compteur2 = 0;

    for(j=0; j<ligne; j++){
        if(rows[i][j] == 1){
            compteur1 = compteur1 + 1;
        }
        else if(rows[i][j] == 2){
            compteur2 = compteur2 + 1;
        }
    }

    if (compteur1 == 4){
        alert("joueur 1 a gagné");
    }
    else if(compteur2 == 4){
        alert("joueur 2 a gagné");
    }
};

disp();






