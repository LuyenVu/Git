/// <reference path="../plugin/angular/angular.js" />
var myApp = angular.module("myModule", []);

myApp.controller("mySchool", mySchool);
myApp.controller("myTeacher", myTeacher);
myApp.controller("myStudent", myStudent);

myApp.controller("myProvince", myProvince);
myApp.controller("myHome", myHome);

//how to call service
myApp.service("validate", validate); 
myApp.controller("testService", testService);

//working with directive
myApp.directive("testDirective", testDirective);

testService.$inject = ['$scope', 'validate'];
function testService($scope, validate) {
    $scope.kiemtra = function () {
        $scope.thongbao = validate.checkingNumber($scope.txtNum); 
    }
    $scope.txtNum = 1 //binding in html
    
}

//declear
function mySchool($scope){
    $scope.message = "This is a message from School";
}

function myTeacher($scope) {
    $scope.message = "This is a message from Teacher";
}

function myStudent($scope) {
    $scope.message = "This is a message from Student";
}

function myProvince($rootScope,$scope) {
    $rootScope.message = "This is a message from Province";
}

function myHome($scope) {
    //nothing
}

//example for service
function validate($window) {
    return {
        checkingNumber: checkNum
    }
   
    function checkNum(input) {
        if (input % 2 == 0) {
            return 'This is even';
        }
        else
            return 'This is odd';

    }
}

function testDirective() {
    return {
        template: "<h1> This is may first custome directive </h1>"
    }
}

