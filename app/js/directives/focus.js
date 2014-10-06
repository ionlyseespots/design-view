angular.module('Simple').directive('focus',

    function($timeout) {

        return {

            scope : {

                trigger : '@focus'

            },

            link : function(scope, element) {

                scope.$watch('trigger', function(value) {

                    if (value === "true") {

                        $timeout(function() {

                            element[0].focus();

                        });
                    }
                });
            }

        };

    }

);


Simple.directive('tj:focus', function(){
    return function(scope, element){
        element[0].focus();
    };
});

// want text angular to auto focus on load, its annoying to have to click in every time. but I don't think it will allow this ux