document.getElementById('cubismo-option').addEventListener('click', function() {
    document.querySelectorAll('.cubismo').forEach(function(el) {
        el.setAttribute('visible', true);
    });
    document.querySelectorAll('.impresionismo').forEach(function(el) {
        el.setAttribute('visible', false);
    });
});

document.getElementById('impresionismo-option').addEventListener('click', function() {
    document.querySelectorAll('.cubismo').forEach(function(el) {
        el.setAttribute('visible', false);
    });
    document.querySelectorAll('.impresionismo').forEach(function(el) {
        el.setAttribute('visible', true);
    });
});


console.log("hola ")