app = angular.module('T9Sada', []);

app.controller('T9Ctrl', function ($scope) {

    $scope.buttons = [
        {'number': '1', 'letters': []},
        {'number': '2', 'letters': ['a', 'b', 'c']},
        {'number': '3', 'letters': ['d', 'e', 'f']},
        {'number': '4', 'letters': ['g', 'h', 'i']},
        {'number': '5', 'letters': ['j', 'k', 'l']},
        {'number': '6', 'letters': ['m', 'n', 'o']},
        {'number': '7', 'letters': ['p', 'q', 'r', 's']},
        {'number': '8', 'letters': ['t', 'u', 'v']},
        {'number': '9', 'letters': ['w', 'x', 'y', 'z']},
        {'number': '*', 'letters': []},
        {'number': '0', 'letters': '_'},
        {'number': '#', 'letters': []}
    ];

    $scope.text = '';
    $scope.suggestions = [];

    $scope.suggest = function ($data) {
        tmp = $scope.suggestions;
        if ($data == '_') {
            $scope.text += $scope.suggestions[0] + ' '; // if hit space - add first suggestion
            $scope.suggestions = []; // adding word to an input and deleting extra suggestions
        } else if ($data.length > 0) {
            $scope.suggestions = [];
            for (var i = 0; i < $data.length; i++) {
                if (tmp.length == 0) { // if no suggestions yet, just looping through all the letters on the button and creating suggestions array
                    if ($scope.text == '') {
                        $scope.suggestions.push($data[i].toUpperCase()); // capitalize first word.
                    } else {
                        $scope.suggestions.push($data[i]);
                    }
                } else {
                    for (var j = 0; j < tmp.length; j++) { // looping through existing suggestions and adding more suggestions (looping through all letters on next button)
                        $scope.suggestions.push(tmp[j] + $data[i]);
                    }
                }
            }
        }
    };

    $scope.type = function ($data) {
        $scope.text += $data + ' ';
        $scope.suggestions = []; // adding word to an input and deleting extra suggestions
    }

})
;

app.directive('key', [function () {
    return {
        restrict: 'E',
        replace: true,
        template: '<div class="key" ng-click="suggest(button.letters)">' + //buttons block
        '<div>{{ button.number }}</div>' +
        '<div><span ng-repeat="letter in button.letters"> {{ letter }}</span></div>' +
        '</div>',
        controller: function ($scope, $element) { // imitating 'focus' effect on key buttons
            $element
                .on('mousedown', function () {
                    $element.addClass('active');
                })
                .on('mouseup', function () {
                    $element.removeClass('active');
                });
        }
    };
}]);

app.directive('suggestions', [function () {
    return {
        restrict: 'E',
        replace: true,
        template: '<div class="suggestions"> Suggestions:' +  // suggestions block
        '<span ng-repeat="suggestion in suggestions" ng-click="type(suggestion)"> {{ suggestion }}</span>' +
        '</div>'
    };
}]);