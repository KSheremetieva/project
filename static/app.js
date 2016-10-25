import angular from "angular"; //адр к ангуляр файлу(но вебпак понимает без полного адр, что это ангуляр)
//ангуляр в полной инкапсуляции - без того поключения не работает
//improt angular - переменная
console.log(angular);

import $ from 'jquery'; //подключили jquery
console.log( $ );

// var app = angular.module('app', []);

// app.controller('mainCtrl', ($scope) => {
// 	//тело контроллера 
// 	$scope.test = "hello world";

// });
import './app/controllers/mainCtrl.js';