$( ".ms-selectall" ).after( "<a class='ms-applyQuery' href='javascript:;'>Save</a>" );



            $('select[multiple]').siblings('a.daddoptgetvalues')
                    .click(function (event) {
                        event.preventDefault();

                        alert(
                                'Selected Values: '
                                + $(this).siblings('select[multiple]').val()
                                );
                    });

            $('select[multiple]').siblings('a.ms-applyQuery')
                    .click(function (event) {
                        event.preventDefault();

                        alert(
                                'Selected Values: '
                                + $(this).siblings('select[multiple]').val()
                                );
                    });


var ca = $('#food').siblings('div .ms-options');
ca = $('#food').siblings('div').find('.ms-search').siblings('a').html("");


alert('Single selection allowed');
if ($(this).is(':checked')){
    $(this).prop("checked", false);
    $(this).closest( 'li' ).toggleClass( 'selected' );
}
return true;




                   
                if (currentId == 'food'){
                    $(valsFoodIds).each(function(index, id){
                        if (_tmpCurrentOptionId != id){
                            var _tmpChecked = $("#"+id).prop("checked",false);
                            var data = $("#"+id).val();
                            //$("#ms-opt-24").parents().closest("li").attr("class")
                            $("#"+id).parents().closest("li").removeClass( 'selected' );
                            //var _tmpChecked = select.find('option[value="'+ instance._escapeSelector( data ) +'"]').prop("checked", false);
                            //var _tmpSelected = select.find('option[value="'+ instance._escapeSelector( data ) +'"]').closest('select').toggleClass( 'selected');
                            //var _tmpSelected = select.find('option[value="'+ instance._escapeSelector( data ) +'"]').removeClass('selected');
                            
                            //$(this).closest( 'li' ).toggleClass( 'selected' );
                            
                            // toggle clicked option 
                            var _tmpCurrentData = $(data.split(''));
                            select.find('option[value="'+ instance._escapeSelector( data ) +'"]').prop('selected', _tmpCurrentData.is(':checked')).closest('select');
                            instance._updateSelectAllText();
                            instance._updatePlaceholderText(); 
                        }
                        logOnConsole(data);
                    }); 
                } 