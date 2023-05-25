function number(a) {
return "■■■問" + a + "■■■" + "<br>";
}
var kuro = "★";
var shiro = "☆";
//問1
document.write(number(1));
for (var a=0; a<5; a++){
    document.write(kuro);
}
//問2
document.write("<br>"+number(2));
for(var c=1; c<=2; c++){
    for(var d=1; d<=3; d++){
        document.write(kuro);
    }
    document.write("<br>");
}
//問3
document.write(number(3));
for(var e=1; e<=2; e++){
    for(var f=1; f<=5; f++){
        document.write(shiro);
    }
    document.write("<br>");
}
//問4
document.write(number(4));
for(var g=1; g<=4; g++){
    for(var h=1; h<=5; h++){
        document.write(kuro);
    }
    document.write("<br>");
}
//問5
document.write(number(5));
for(var i=1; i<=4; i++){
    for(var j=1; j<=3; j++){
        document.write(kuro);
    }
    document.write("<br>");
}
//問6
document.write(number(6))
for(var k=1; k<=3; k++){
    for(var l=1; l<=3; l++){
        if(l%2==0){
            document.write(shiro);
        }
        else{
            document.write(kuro);
        }
    }
    document.write("<br>");
}
//問7
document.write(number(7))
for(var m=1; m<=4; m++){
    for(var n=1; n<=5; n++){
        if(n%2==0){
            document.write(shiro);
        }
        else{
            document.write(kuro);
        }
    }
    document.write("<br>");
}
//問8
document.write(number(8));
for(var o=1; o<=5; o++){
    for(var p=1; p<=o; p++){
        document.write(kuro);
    }
    document.write("<br>");
}