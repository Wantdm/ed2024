function checkPassword() {
    var password = document.getElementById('password').value;
    if (password === 'abc') { 
        document.getElementById('loginPage').style.display = 'none';
        document.getElementById('dataPage').style.display = 'block';
    } else {
        alert('Incorrect password');
    }
}
