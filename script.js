$('.btn__add').on('click', function(){
     //Grab value
     var name = $("input[type='text']").val();
     var tel = $("input[type='tel']").val();
     var email = $("input[type='email']").val();
    
     ///Clear fields 
     init();
     
    
     ///Add new Item
     var msg = '<li><p>Name: ' + name + '</p>';
     msg += '<p>Phone: ' + tel + '</p>';
     msg += '<p class="contact__email">E-mail: ' + email + '</p>';
     msg += '<span>X</span></li>';
     $('ul').append(msg);
});

$('.btn__clear').on('click', function() {
    init();
});

$('ul').on('click', 'span', function(e) {
    e.stopPropagation();
    $(this).parent().fadeOut(500, function() {
        $(this).remove();
    })
});


////Clear Fields 
function init() {
    $("input[type='text']").val('');
    $("input[type='tel']").val('');
    $("input[type='email']").val('');
};
