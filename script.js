function checkPassword() {
    var password = document.getElementById('password').value;
    if (password === 'abc') { 
        document.getElementById('loginPage').style.display = 'none';
        document.getElementById('dataPage').style.display = 'block';
    } else {
        alert('Incorrect password');
    }
}
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/service-worker.js')
        .then(reg => console.log('Service Worker registered', reg))
        .catch(err => console.log('Service Worker not registered', err));
    });
  }
  