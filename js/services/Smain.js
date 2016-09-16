(function(angunlar){
	
	var mainSev=angular.module('mainSev',[]);
	mainSev.service('mainMySev',['$window',function($window){
		var storage=$window.localStorage;
		
		var todos=storage['mytodosList'] ? JSON.parse(storage['mytodosList']) : [];
		//var todos=storage.getItem()
		
		this.save=function(){
			storage['mytodosList']=JSON.stringify(todos);
		}
		
		//返回todos
		this.get=function(){
			return todos;
		}
		
		//增加单个
		this.add=function(text){
			todos.push({
				'id':Math.random(),
				'thing':text,
				'comleted':false
			});
			this.save();
		};
		
		//点击删除单个
		this.remove=function(id){
			for (var i=0;i<todos.length;i++){
				if(todos[i].id===id){
					todos.splice(i,1);
					break;
				};
				this.save();
			}
		}
		
		//删除所有已经完成
		this.clear=function(){
			var uncomplete=[];
			for (var i=0;i<todos.length;i++){
				if(!todos[i].completed){
					uncomplete.push(todos[i]);
				};
			};
			todos=uncomplete;
			this.save();
			return todos;    //返回去重新绑定
		}  
		
		//是否存在有已经完成的
		this.exitConpleted=function(){
			for (var i=0;i<todos.length;i++){
				if(todos[i].completed){
					return true;
				};
			}
		}
		
		//编辑功能 不需要  不是业务逻辑
		
		
		//全选功能
		var now=true;
		this.checkedall=function(){
			for (var i=0;i<todos.length;i++){
				todos[i].completed=now;
			}
			now=!now;
			this.save();
		}
		
		
		
	}])
	
	
	
	
	
	
	
	
	
})(angular)
