/**
 * Created by apple on 16/7/28.
 */
//API接口 配置模块 全局注入
(function(){
        //全局路径
        function basePath (){
                return 'http://127.0.0.1:9090'
        }
        //全局Api地址
        function baseApiPath(){
                return 'https://yedegesong.github.io/ERP'
                //return 'http://218.106.156.27:8001'
        }

        window.applicationConfig = {
                TelBaseUrl: basePath () + '/pages/',
                version:'4.0.0',
                ApiBaseUrl:  baseApiPath ()
        }
})(window);