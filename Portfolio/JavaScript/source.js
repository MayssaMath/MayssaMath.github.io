function Moyenne(form1) {
var DC1 = parseFloat( document.form1.input1.value ), Coeff1=parseFloat( document.form1.input2.value) , DC2=parseFloat( document.form1.input3.value), Coeff2=parseFloat( document.form1.input4.value), DS=parseFloat( document.form1.input5.value), Coeff3=parseFloat( document.form1.input6.value);
var resultat;
resultat = (DC1 * Coeff1 + DC2 * Coeff2 + DS * Coeff3 ) / (Coeff1+Coeff2+Coeff3);
alert("La moyenne est " + resultat );
}
