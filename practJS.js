var checkButton = document.getElementById('checkButton');
checkButton.addEventListener('click',()=>
{
    var userName = document.getElementById('userInput').value;
    var passwrd = document.getElementById('pswdInput').value;
    if(userName==='admin' && passwrd==='admin')
    {
        localStorage.setItem('user',JSON.stringify({name:userName, password:passwrd}));
        var status=document.getElementById('status');
        status.textContent="User info save in localStorage";
        status.style.backgroundColor='green'
    }
    else{
        var status=document.getElementById('status');
        status.textContent="Error, some wrong";
        status.style.backgroundColor='red'
    }

});