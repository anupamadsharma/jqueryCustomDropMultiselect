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

