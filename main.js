$(document).ready(function() {
    $('header button').click(function(){
        $('form').slideDown();

    })

    $('#button_cancelar').click(function(){
        $('form').slideUp();
    })

$('form').on('submit',function(e){
        console.log('submit');
        e.preventDeFalt();
})

})
