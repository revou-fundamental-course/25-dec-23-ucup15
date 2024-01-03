/*   Author : Muhammad Yusup
     Date   : 1 January 2024
     Fundamental Course RevoU */


/*line 7-19 is a code for logic luas segitiga*/ 
function calculateArea() {
    const base = parseFloat(document.getElementById('base').value);
    const height = parseFloat(document.getElementById('height').value);

    if (!isNaN(base) && !isNaN(height)) {
        const area = 0.5 * base * height;
        document.getElementById('Output3').innerHTML ='Luas Segitiga = 1/2 x Alas x Tinggi';
        document.getElementById('Output4').innerHTML ='Luas Segitiga = 1/2' + ' x '+ base +' x '+ height;
        document.getElementById('result').innerHTML = 'Luas Segitiga = '+ area;
    } else {
        document.getElementById('result').innerHTML = 'Masukkan angka valid untuk alas dan tinggi.';
    }
}

/*line 7-19 is a code for logic Keliling segitiga*/ 
function calculatePerimeter() {
    const side1 = parseFloat(document.getElementById('side1').value);
    const side2 = parseFloat(document.getElementById('side2').value);
    const side3 = parseFloat(document.getElementById('side3').value);
    
    if (!isNaN(side1) && !isNaN(side2) && !isNaN(side3)) {
        const Perimeter = side1 + side2 + side3;
        document.getElementById('Output1').innerHTML ='Keliling Segitiga = Sisi1 + Sisi2 + Sisi3';
        document.getElementById('Output2').innerHTML ='Keliling Segitiga = ' + ''+ side1 + ' + '+ side2 +' + ' + side3;
        document.getElementById('result').innerHTML = 'Keliling Segitiga = ' + Perimeter;
    } else {
        document.getElementById('result').innerHTML = 'Masukkan angka valid untuk panjang sisi.';
    }
}

/*line 37-42 is a code for reset value of keliling segitiga to null*/ 
function resetbtn1(){
    document.getElementById('Output1').innerHTML='';
    document.getElementById('Output2').innerHTML='';
    document.getElementById('result').innerHTML='';
}

//*line 45-59 is a code for reset value of luas segitiga to null*/  
function resetbtn2(){
    document.getElementById('Output3').innerHTML ='';
    document.getElementById('Output4').innerHTML ='';
    document.getElementById('result').innerHTML = '';
}