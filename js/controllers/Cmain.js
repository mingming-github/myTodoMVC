(function(angular){
	
	var mainMod=angular.module('mainMod',['mainSev'])
	
	mainMod.controller('mainCtrl',['$scope','$routeParams','$route','mainMySev',function($scope,$routeParams,$route,mainMySev){
		
		//获得数据todos
		$scope.text='';
		$scope.todos=mainMySev.get();
		
		
		//增加内容
		$scope.add=function(){
			if (!$scope.text){
				return ;
			};
			mainMySev.add($scope.text)
			$scope.text='';
		};
		
		//点击删除单个
		$scope.remove=mainMySev.remove;
		
		//删除所有已经完成
		$scope.clear=function(){
			var newtodos=mainMySev.clear();
			
			$scope.todos=newtodos; //需要重新绑定关系
		}
		
		//是否存在有已经完成的
		$scope.exitConpleted=mainMySev.exitConpleted;
		
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
		$scope.checkedall=mainMySev.checkedall;
		$scope.toggle=mainMySev.save;
		
		
		//状态筛选
		$scope.selector={};
		var status=$routeParams.status;
		
		switch(status){
			case 'active':
				$scope.selector={completed:false};
			break;
			case 'completed':
				$scope.selector={completed:true};
			break;
			default:
				$route.updateParams({status:''});
				$scope.selector={};
			break;
		}
		
		
	}])
	
	
	
	
	
	
	
	
})(angular)
