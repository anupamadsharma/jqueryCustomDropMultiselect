var state ='';
var food ='';

$(function () {
    setTimeout(function () {
        $(".ms-selectall").after(" <a class='ms-applyQuery' href='javascript:;'>Save</a> ");
        getOnClickSave();
    }, 100);

    setTimeout(function () {
        $(".ms-applyQuery").after(" <a class='ms-reset' href='javascript:;'>Reset</a> ");
        getOnClickReset();
    }, 100);
});


function getOnClickReset() {
    $('.ms-reset').bind('click', function (event) {
        event.preventDefault();
        //$(this).siblings('select[multiple]').multiselect( 'reset' );

        $(this).siblings('ul').find('li:not(.optgroup, .ms-hidden).selected').removeClass('selected');
        $(this).siblings('ul').find('li:not(.optgroup, .ms-hidden, .selected) input[type="checkbox"]:not(:disabled)').prop('checked', false);
      
        var placeholder    = $(this).parents().siblings('div');
            var placeholderTxt = placeholder.find('span');
        placeholderTxt.text("");
    });
}

function getOnClickSave() {
    $('.ms-applyQuery').bind('click', function (event) {
        event.preventDefault();
        vals = [];
        $(this).siblings('ul').find('li.selected input[type="checkbox"]').each(function () {
            vals.push($(this).val());
            //vals.push($(this).text());
        });
        var currentId = $(this).parents().siblings('select').attr('id');
        if(currentId == 'state'){
           state = vals;
       
        }else if(currentId == 'food'){
            food = vals;
            foodData = {'food':food.join(',')};
        }
        alert(' vals : ' + ' selected for : ' + currentId + ' : ' + vals);
    });

}
 function getData(){
   $.ajax({
        url: "data.php",
        type: 'GET',
      //  data: {'state':state.join(',')},
        data: foodData,
        dataType: 'json',
        success: function (data) {
         
        },
        error: function (e) {
            //called when there is an error
            console.log(e.message);
        }
    });


 }