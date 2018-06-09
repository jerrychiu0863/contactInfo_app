////////////////////////////////////////////////
//Add listItem
$('.btn__add').on('click', function(){
     //Grab value
     var name = $("input[type='text']").val();
     var tel = $("input[type='tel']").val();
     var email = $("input[type='email']").val();
    
     ///Clear fields 
     init();
     
     ///Add new Item
     var msg = '<li><p><i class="fas fa-user-alt contact__icon"></i> ' + name + '</p>';
     msg += '<p><i class="fas fa-phone contact__icon"></i> ' + tel + '</p>';
     msg += '<p class="contact__email"><i class="fas fa-envelope contact__icon"></i> ' + email + '</p>';
     msg += '<span><i class="fas fa-trash-alt contact__icon contact__icon--trashcan"></i></span></li>';
     $('ul').append(msg);
});


////////////////////////////////////////////////
//Clear Fields
$('.btn__clear').on('click', function() {
    init();
});


////////////////////////////////////////////////
//Init function
function init() {
    $("input[type='text']").val('');
    $("input[type='tel']").val('');
    $("input[type='email']").val('');
};


////////////////////////////////////////////////
//Delete Item
$('ul').on('click', 'span', function(e) {
    e.stopPropagation();
    $(this).parent().fadeOut(300, function() {
        $(this).remove();
    });
    
    $('li').css({"transform": "scale(1)", "box-shadow": "0 2px 4px rgba(0,0,0, .18)"});
});


////////////////////////////////////////////////
//ListItem animation
$(document).on('mouseenter', 'li', function() {
    $(this).css({"transform": "scale(1.03)", "box-shadow": "0 0px 15px rgba(0,0,0, .6)"});
    $(this).siblings().css("transform", "scale(.9)")
});

$(document).on('mouseleave', 'li', function() {
    $(this).css({"transform": "scale(1)", "box-shadow": "0 2px 4px rgba(0,0,0, .18)"});
    $(this).siblings().css("transform", "scale(1)")
});
