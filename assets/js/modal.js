const mymodal = new bootstrap.Modal(document.getElementById('LoadingModal'), {
keyboard: false});
mymodal.show();
setTimeout(function (){mymodal.hide()}, 3000);   
