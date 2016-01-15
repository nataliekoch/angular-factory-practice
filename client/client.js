var app = angular.module('userApp', []);

app.controller('mainController', ['$scope', 'thetaFacts', function($scope, thetaFacts){
    $scope.facts = thetaFacts.getFacts;
}]);

app.factory('thetaFacts', function(){
    var facts = {
        cohort: 'Theta',
        mascot: 'Wolverine',
        themeSong: 'Danger Zone',
        startDate: 'December',
        instructor: 'Joel Miller',
        Ta: 'Kristy',
        location: 'Bloomington',
        school: 'Prime Digital academy',
        ceo: 'Mark',
        teaches: 'Web Development'
    }

    return {
        getFacts: facts
    }
});
