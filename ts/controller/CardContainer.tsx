import * as React from "react";
import * as ReactDOM from "react-dom";
import {bindActionCreators} from 'redux';
import { Provider, connect} from 'react-redux';
//自己的第三方组件
import {
    AppBody,
    Panel,
    Echarts,
    Buttons,
    Row,
    Col} from '../components/index';
//自己书写的基类
import BaseContainer from '../common/BaseContainer';
import {BaseStore} from '../redux/store/BaseStore';
//表单验证模块
import Verifier from '../pub/Verifier';
const store = BaseStore({  });
class IndexApp extends BaseContainer {
    constructor(props) {
        super(props);
    }

    render() {
        let {Actions} = this.props;
        return (
           <AppBody>
                <Panel  title="卡片 - 固定宽">
                   <div className="ui-box-list">
                        <div className="ui-item-box">
                            <div className="ui-item">
                                <div className="ui-img">
                                    <img src="http://192.168.1.159:80//group1/M00/00/1D/wKgBn1esPzGAIonKAAAOx9rpefc934.png" />
                                </div>
                                <div>
                                    <p>九天集团超级跑车开售了</p>
                                </div>
                            </div>
                            <div className="ui-item">
                                <div className="ui-img">
                                    <img src="http://192.168.1.159:80//group1/M00/00/1D/wKgBn1esPzGAIonKAAAOx9rpefc934.png" />
                                </div>
                                <div>
                                    <p>九天集团超级跑车开售了</p>
                                </div>
                            </div>
                            <div className="ui-item">
                                <div className="ui-img">
                                    <img src="http://192.168.1.159:80//group1/M00/00/1D/wKgBn1esPzGAIonKAAAOx9rpefc934.png" />
                                </div>
                                <div>
                                    <p>九天集团超级跑车开售了</p>
                                </div>
                            </div>
                        </div>
                   </div>
                </Panel>
            </AppBody>
        );
    }

    componentDidMount():void {
      let {Actions} = this.props;
    }

    componentWillUnmount():void {
        
    }
}

let mapStateToProps = (state) => {
    return {
       
    }
}

function mapDispatchToProps(dispatch) {
    return {
        Actions: bindActionCreators({
                
             }, dispatch)
    };
}
/**
 * 添加监听数据
 */
const App = connect(mapStateToProps,mapDispatchToProps)(IndexApp);
const ElementContainer = document.getElementById("example");
ReactDOM.render(
    <Provider store = {store}>
        <App />
    </Provider>,
    ElementContainer
);



