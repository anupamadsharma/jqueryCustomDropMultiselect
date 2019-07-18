var state = '';
var food = '';

var allOptionsList = [{"class":"state", "label":"States", "selectall":true}, {"class":"food", "label":"Food", "selectall":true} ];
$(function () {
	
	$(allOptionsList).each(function(index, data){
		var _action = data.class;
		var _label = data.label;
		var _selectall = data.selectall;
		if (_selectall === true){
			_selectall = true;
		}
		else{
			_selectall = false;
		}
		
		$('select[multiple].active.3col.' + _action).multiselect({
			columns: 6,
			placeholder: 'Select ' + _label,
			search: true,
			searchOptions: {
				'default': 'Search ' + _label,
			},
			selectAllITV: _selectall,
			applyQuery: true,
			resetITVQuery: true,//Added for reset
		});
	});
     
    setTimeout(function () {
        //$(".ms-selectall").after(" <a class='ms-applyQuery' href='javascript:;'>Save</a> ");
        //getOnClickSave();
    }, 100);

    setTimeout(function () {
        //$(".ms-applyQuery").after(" <a class='ms-reset' href='javascript:;'>Reset</a> ");
        //getOnClickReset();
    }, 100);
});


function getOnClickReset() {
    //$('.ms-reset').bind('click');
    $('.ms-reset').bind('click', function (event) {
        event.preventDefault();
        //$(this).siblings('select[multiple]').multiselect( 'reset' );

        $(this).siblings('ul').find('li:not(.optgroup, .ms-hidden).selected').removeClass('selected');
        $(this).siblings('ul').find('li:not(.optgroup, .ms-hidden, .selected) input[type="checkbox"]:not(:disabled)').prop('checked', false);

        var placeholder = $(this).parents().siblings('div');
        var placeholderTxt = placeholder.find('span');
        placeholderTxt.text("");
    });
}

function getOnClickSave() {
     //$('.ms-reset').bind('click');
    $('.ms-applyQuery').bind('click', function (event) {
        event.preventDefault();
        vals = [];
        $(this).siblings('ul').find('li.selected input[type="checkbox"]').each(function () {
            vals.push($(this).val());
            //vals.push($(this).text());
        });
        var currentId = $(this).parents().siblings('select').attr('id');
        if (currentId == 'state') {
            state = vals;
            //getData(currentId);
        } else if (currentId == 'food') {
            food = vals;
            foodData = {'food': food.join(',')};
            //setNewFood(currentId);
            //getfoodtypeData(currentId);
        }
        alert(' vals : ' + ' selected for : ' + currentId + ' : ' + vals);

    });
    return true;
}
function getfoodtypeData(data) {
    $('#foodtype').html('vegee');
}
function getData(currentId) {
    $.ajax({
        url: "data.php",
        type: 'GET',
        data: {'action': currentId},
        success: function (data) {
            console.log(data);
            setNewFood(data);
            //getfoodtypeData(currentId);
        },
        error: function (e) {
            //called when there is an error
            console.log(e.message);
        }
    });




}
 
function getState() {
    $.ajax({
        url: "data.php",
        type: 'GET',
        // data: {'state':state},
        data: state,
        dataType: 'html',
        success: function (data) {

        },
        error: function (e) {
            //called when there is an error
            console.log(e.message);
        }
    });
}

function callSaveNow(ids, currentId){
	alert('In callSaveNow : ' +  ids + " , " + currentId);
}

function callResetQuery(currentId){	
	alert('In reset : ' + currentId);	
}
