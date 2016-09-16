(function (angular) {
	'use strict';

	// Your starting point. Enjoy the ride!
	var myMod=angular.module('Mod',['ngRoute','mainMod']);
	
	myMod.config(['$routeProvider',function($routeProvider){
		$routeProvider
			.when('/:status?',{controller:'mainCtrl',templateUrl:'mainTemp'})
			.otherwise({redirectTo:'///'});//任何都是可以的
	}]);
	
	
	
	/*myMod.controller('mainCtrl',['$scope','$location',function($scope,$location){
		
		$scope.text='';
		$scope.todos=[{
			'id':0.124,
			'thing':'吃饭',
			'completed':true
		},{
			'id':0.247,
			'thing':'睡觉',
			'completed':false
		},{
			'id':0.214,
			'thing':'打豆豆',
			'completed':false
		}];
		
		//增加内容
		$scope.add=function(){
			if ($scope.text){
				$scope.todos.push({
					'id':Math.random(),
					'thing':$scope.text,
					'comleted':false
				});
			};
			$scope.text='';
		};
		
		//点击删除单个
		$scope.remove=function(id){
			for (var i=0;i<$scope.todos.length;i++){
				if($scope.todos[i].id===id){
					$scope.todos.splice(i,1);
					break;
				};
				
			}
		}
		
		
		//删除所有已经完成
		$scope.clear=function(){
			var uncomplete=[];
			for (var i=0;i<$scope.todos.length;i++){
				if(!$scope.todos[i].completed){
					uncomplete.push($scope.todos[i]);
				};
			};
			$scope.todos=uncomplete;
		}
		
		//是否存在有已经完成的
		$scope.exitConpleted=function(){
			for (var i=0;i<$scope.todos.length;i++){
				if($scope.todos[i].completed){
					return true;
				};
			}
		}
		
		
		//编辑功能
		$scope.nowEditingid=-1;
		
		$scope.changeditingId=function(id){
			$scope.nowEditingid=id
		}
		$scope.changediting=function(id){
			$scope.nowEditingid=-1;
		}
		
		//全选功能
		var now=true;
		$scope.checkedall=function(){
			for (var i=0;i<$scope.todos.length;i++){
				$scope.todos[i].completed=now;
			}
			now=!now;
		}
		
///////////////////////////////////////////////////////////////////////////////////////////////////		
		//状态筛选
		
		//通过$location传入的参数，不用window.location,是为了减少对外界的依赖
		//$watch只能监视的是$scope下面的属性
		//$location.path()就等同于window.location.hash
		
		
		$scope.selector={};
		$scope.$location=$location;
		//console.log($location)
		//console.log($location.path()); 
		$scope.$watch('$location.path()',function(now,old){
			switch(now){
				case '/active':
					$scope.selector={completed:false};
				break;
				case '/completed':
					$scope.selector={completed:true};
				break;
				default:
					$scope.selector={};
				break;
			}
		})
		
/////////////////////////////////////////////////////////////////////////////////////////////////		
	}])*/
	
	
	
})(angular);
