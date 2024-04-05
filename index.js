$(document).ready(function () {
$('#telefone').mask('(00) 0000-0000');
});

function moveSubmitButton() {

    let submitBtn= document.getElementById('submitBtn');
    submitBtn.classList.add('clicked');
    
}