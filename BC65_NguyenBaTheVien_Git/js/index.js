// Bai 1
function hanldeTinh(){
    var luong=document.getElementById("luong").value;
    var ngay=document.getElementById("ngay").value;
    var tinhluong;
    tinhluong=luong*ngay;
    document.getElementById('result').innerHTML=tinhluong;
}
// Bai 2
function hanldeTB(){
    var number1=document.getElementById('number1').value*1;
    var number2=document.getElementById('number2').value*1;
    var number3=document.getElementById('number3').value*1;
    var number4=document.getElementById('number4').value*1;
    var number5=document.getElementById('number5').value*1;
    var tinhTB;
    TB = (number1+number2+number3+number4+number5)/5;
    document.getElementById("DTB").innerHTML=TB;
}
// Bai 3
function hanldeUSD(){
    var usd = document.getElementById("usd").value;
    var number = new Intl.NumberFormat('en-US', {
        style: 'currency', 
        currency: 'USD', 
        minimumFractionDigits: 0, 
      });
    var tien = number.format(usd*23500);
    document.getElementById('tien').innerHTML=tien;
}
// Bai 4
function hanldeHcn(){
    var cd=document.getElementById('cd').value*1;
    var cr=document.getElementById('cr').value*1;
    var dt,cv;
    dt=cd*cr;
    cv=(cd+cr)/2;
    
    document.getElementById('dtcv').innerHTML=`Dien tich = ${dt}, chu vi = ${cv}`
}

//Bai 5
function hanldeKyso() {
    var kyso = document.getElementById('kyso').value;
    var donvi= Math.abs(kyso % 10); 
    var chuc = Math.trunc(kyso / 10); 
    var sum = donvi + chuc;
    document.getElementById('sumks').innerHTML = sum;
}

