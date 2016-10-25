import angular from "angular";
import $ from 'jquery';
import app from '../app.js';

import goods from '../model/model.js'

app.controller('mainCtrl', ($scope) =>{
	//тело контроллера 
	// $scope.test = "hello world";
	$scope.goods = goods;
});
