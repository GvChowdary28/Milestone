// Collapse/Expand Toggle (+/-)
$('#title').click(function() {
    if($(this).hasClass('fa-plus')) {
        $(this).removeClass('fa-plus');
        $(this).addClass('fa-minus')
    } else {
      $(this).removeClass('fa-minus');
        $(this).addClass('fa-plus');
    }
    $('#content').toggle();
});