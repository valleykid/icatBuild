/*
 * Applaction: {%=name%}
 * Author: {%=author_name%}
 * Date: {%=grunt.template.today("yyyy-mm-dd HH:MM:ss")%}.
 */

(function(iCat){
	//定义应用
	iCat.app('{%=appName%}', function(){
		return {
			version: '{%=(subapp? subapp+"-" : "") + version%}',
			init: function(){
				{% if(hasMVC){ %}iCat.require({
					modName: 'appmvc',
					callback: function(){
						var c = new {%=appName%}.Controller('mc');
						// your code...
					}
				});{% }else{print('// your code...')}%}
			}
		};
	});

	//初始化
	{%=appName%}.init();
})(ICAT);