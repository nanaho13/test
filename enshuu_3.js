document.write("■■■問1■■■" + "<br>");
function menseki(hankei) {
    return hankei * hankei * 3.14 + "㎠";
}

function mensekihyouji(hankei) {
    return "半径" + hankei + "㎝の円<br>" + menseki(hankei) + "<br>";
}

document.write("半径5㎝の円" + "<br>" + menseki(5) + "<br>");
document.write("半径7㎝の円" + "<br>" + menseki(7) + "<br>");
document.write("半径10㎝の円" + "<br>" + menseki(10) + "<br>");
document.write(mensekihyouji(8));

document.write("■■■問2■■■" + "<br>");
function total(kids, adult) {
    return (kids * 200) + (adult * 500);
}
function nyuuen(group,kids,adult){
    return group + "グループの合計金額は、子供"+kids+"人、大人"+adult+"人なので、" + total(kids,adult) + "円です。" + "<br>";
}
document.write("Aグループの合計金額" + total(4,2) + "円です。" + "<br>");
document.write("Bグループの合計金額" + total(5,1) + "円です。" + "<br>");
document.write("Cグループの合計金額" + total(7,3) + "円です。" +"<br>");
document.write(nyuuen("D",10,5));
