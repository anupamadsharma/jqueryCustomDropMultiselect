var state = '';
var food = '';

$(function () {

    $('select[multiple].active.3col.state').multiselect({
        columns: 6,
        placeholder: 'Select States',
        search: true,
        searchOptions: {
            'default': 'Search States'
        },
        selectAllITV: true,
        applyQuery: false,
        resetITVQuery: true,//Added for reset
    });

    $('select[multiple].active.3col.food').multiselect({
        columns: 6,
        placeholder: 'Select food',
        search: true,
        searchOptions: {
            'default': 'Search Food'
        },
        selectAllITV: true,
        applyQuery: false,
        resetITVQuery: true,
    });

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

function setNewFood(data) {
    /*var options = [{
            name: 'Option 1',
            value: 1,
            checked: false
        }, {
            name: 'Option 2',
            value: 2,
            checked: true
        }, {
            name: 'Option 3',
            value: 3,
            checked: false
        }, {
            name: 'Option 4',
            value: 4,
            checked: true
        }, {
            name: 'Option 5',
            value: 5,
            checked: false
        }];*/
    var options = 
    $('select[multiple].active.3col.food').multiselect('loadOptions', options, {
        columns: 6,
        placeholder: 'Select food',
        search: true,
        searchOptions: {
            'default': 'Search Food'
        },
        selectAllITV: true,
        applyQuery: false,
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
	alert(ids + " , " + currentId);
}

function callResetQuery(currentId){	
	alert('In reset : ' + currentId);	
}
