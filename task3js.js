var btn = document.getElementById('showbtn');
btn.addEventListener('click',()=>
{
var protoText = document.getElementById('proto').value;
var resultText =protoText; 
if(document.getElementById('boldIn').checked)
{
    resultText = "<b>"+resultText+"</b>"
}
if (document.getElementById('underIn').checked) {
    resultText = "<u>" + resultText + "</u>";
}

if (document.getElementById('italIn').checked) {
    resultText = "<i>" + resultText + "</i>";
}
var alignment = document.querySelector('input[name="alignment"]:checked');
if(alignment)
{
    resultText = "<div style='text-align:" + alignment.value + "'>" + resultText + "</div>";
}
document.getElementById('clearT').innerHTML = resultText;

});