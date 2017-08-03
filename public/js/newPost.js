$('.newPostButton').on('click',openDialog);
$('.newPostSubmit').on('click',closeDialog);
$('.newPostCancel').on('click',closeDialog);
let dialog = $('.dialogContainer');
function openDialog(){
    if( dialog.hasClass('hide')){
        $('.dialogContainer').removeClass('hide')
    }
    dialog.addClass('show');
}

function closeDialog(){
        if( dialog.hasClass('show')){
            dialog.removeClass('show')
        }
        $('.newPostMessage').val('');
        dialog.addClass('hide');
}
