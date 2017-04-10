/**
 * Created by IreneZhou on 4/10/17.
 */
(function () {
    var app = angular.module('notebook', []);
    app.controller('HashControl', function($scope) {

        $scope.notes = [{text: "#buy: notebook, pen, milk tea, paper, bag", hash:"#buy"},
            {text: "#today: stats101 hw2, cs31 project1, go to lost & found", hash:"#today"}, {text: "go to the doctor #today at 2pm", hash: "#today"}];

        $scope.addNote = function () {

            if ($scope.NoteText.length != 0) {
                var patt = new RegExp("#[a-zA-Z\u4E00-\u9FA5\uF900-\uFA2D]+");
                var res = '';
                if(patt.test($scope.NoteText)) {
                    res = patt.exec($scope.NoteText)[0];
                }
                $scope.notes.push({text:$scope.NoteText, hash: res});
                $scope.NoteText = '';
            }

        };
    });

    app.filter('unique', function() {
        return function(input, key) {
            var unique = {};
            var uniqueList = [];
            for(var i = 0; i < input.length; i++){
                if(typeof unique[input[i][key]] == "undefined"){
                    unique[input[i][key]] = "";
                    uniqueList.push(input[i]);
                }
            }
            return uniqueList;
        };
    });

})();
