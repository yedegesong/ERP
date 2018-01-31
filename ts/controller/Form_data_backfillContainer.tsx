import * as React from "react";
import * as ReactDOM from "react-dom";
import {bindActionCreators} from 'redux';
import { Provider, connect} from 'react-redux';
//自己的第三方组件
import {
    AppBody,
    Panel,
    FormGroup,
    FormItems,
    InputText,
    InputSelect,
    InputRadio,
    InputCheckbox,
    CheckGroup,
    RadioGroup,
    Buttons,
    Tips} from '../components/index';
//自己书写的基类
import BaseContainer from '../common/BaseContainer';
import {BaseStore} from '../redux/store/BaseStore';
import {FormVerifierReducer, ChangeDataAction} from '../redux/FormVerifierReducer';
//表单验证模块
import Verifier from '../pub/Verifier';
import Tool from '../pub/Tool';
const store = BaseStore({ FormVerifierReducer });
//验证的表单配置
let Verifier_Config = {
    accout: {
        name: '用户',
        require:true
    },
    phone: {
        name: '手机号码',
        mobile: true
    },
    password: {
        name: '密码',
        require: true
    },
    password_repeat:{
        name: '确认密码',
        require: true
    },
    city: {
        name: '城市',
        select: '-1'
    },
    delivery_channel:{
        name: '投放位置',
        select: '-1'
    },
    Interest:{
        name:'兴趣爱好',
        group:1
    },
    email:{
        name:'电子邮箱',
        email: true
    },
    bank:{
        name: '银行',
        bank: true
    }
};
class IndexApp extends BaseContainer {
    date: any[];
    submitDate:any;
    checkedValue: any;
    constructor(props) {
        super(props);
        let {FormVerifierReducer, Actions} = this.props;
        this.date = [{
            label: '北京',
            value: '北京'
        }, {
            label: '福州',
            value: '福州'
        }];
        //验证的表单
        this.submitDate= {
            accout:'',
            password:'',
            password_repeat: '',
            city:'-1',
            delivery_channel:'-1',
            Interest:[],
            phone:'',
            email:'',
            bank:''
        }
    }

    sublimeButton(){
        let isChecked = this.checkedValue.state.checked;
        if (!isChecked) {
            Tips({
                message: '请必须勾选合作协议',
                type: 2
            });
            return false;
        }
            //提交数据表单
            let verifyResult = Verifier.verifyConfig(this.submitDate, Verifier_Config, true);
            if(verifyResult.length > 0){
                Tips({
                    message: verifyResult[0].tips,
                    type: 2
                });
                return false;
            }
            if (this.submitDate.password != this.submitDate.password_repeat) {
                Tips({
                    message: '两次输入的密码不一致！',
                    type: 2
                });
            } else {
                Tips({
                    message: '通过验证!',
                    type: 1
                });
                console.log(this.submitDate)
            }
    }

    valueChange(name,value){
        this.submitDate[name] = value;
    }

    valueChannelChange(name,value){
        let {Actions} = this.props;
        this.submitDate[name] = value;
        Actions.ChangeDataAction(this.submitDate);
    }

    valueInterestChange(name,value){
        let {Actions} = this.props;
        this.submitDate[name] = value;
        Actions.ChangeDataAction(this.submitDate);
    }
    
    render() {
        let {FormVerifierReducer,Actions} = this.props;
        this.submitDate = Tool.assign({}, this.submitDate, FormVerifierReducer.submitDate);
        return (<div>
            <AppBody>
                <Panel title = "表单验证 - 基于redux的数据回填">
                    <FormGroup horizontal >
                        <FormItems label="用户名">
                            <InputText  type="test" placeholder="请输入您的账号" value={this.submitDate.accout} onChange={(event) => this.valueChange('accout', event.target.value) }/>
                        </FormItems>
                        <FormItems label="手机号码">
                            <InputText type="test" placeholder="请输入您的手机号码" value={this.submitDate.phone} onChange={(event) => this.valueChange('phone', event.target.value) }/>
                        </FormItems>
                        <FormItems label="银行卡号">
                            <InputText type="test" placeholder="请输入您的银行卡号" value={this.submitDate.bank} onChange={(event) => this.valueChange('bank', event.target.value) }/>
                        </FormItems>
                        <FormItems label="邮箱">
                            <InputText type="test" placeholder="请输入您的邮箱" value={this.submitDate.email} onChange={(event) => this.valueChange('email', event.target.value) }/>
                        </FormItems>
                        <FormItems label="密码" >
                            <InputText type="password" placeholder="请输入您的密码" value={this.submitDate.password} onChange={(event)=>this.valueChange('password',event.target.value)}/>
                        </FormItems>
                        <FormItems label="确认密码" >
                            <InputText type="password" placeholder="请输入您的密码" value={this.submitDate.password_repeat} onChange={(event) => this.valueChange('password_repeat', event.target.value) }/>
                        </FormItems>
                        <FormItems label="城市">
                            <InputSelect  data={this.date}  value= {this.submitDate.city} onChange={(event) => this.valueChange('city',event.target.value) } />
                        </FormItems>
                        <FormItems label="投放位置">
                            <RadioGroup onChange={(event) => this.valueChannelChange('delivery_channel', event.target.value) } value={this.submitDate.delivery_channel}>
                                <InputRadio label="全部"   name="delivery_channel" value="1" />
                                <InputRadio label="微信"  name="delivery_channel" value="2"  />
                                <InputRadio label="APP" name="delivery_channel" value="3" />
                            </RadioGroup>
                        </FormItems>
                        <FormItems label="兴趣爱好">
                            <CheckGroup  options={[{ label: '篮球', value: '1' }, { label: '足球', value: '2' }]}  value={this.submitDate.Interest} onChange={(checkedValues) => this.valueInterestChange('Interest', checkedValues) }/>
                        </FormItems>
                        <FormItems label="是否同意协议">
                            <InputCheckbox label="你必须阅读并同意" name="circle"  checked ref={(c) => this.checkedValue = c} />
                        </FormItems>
                        <FormItems >
                            <Buttons type = "danger" display = "block" onClick = {() => this.sublimeButton() } >登录</Buttons>
                        </FormItems>
                    </FormGroup>

                </Panel>
            </AppBody>
            </div>
        );
    }

    componentDidMount():void {
        let {FormVerifierReducer, Actions} = this.props;
    }
    
    componentWillUnmount():void {
        
    }

    /**
     * 解决二次渲染值回填
     */
    componentWillReceiveProps(nextProps) {
        let type = nextProps.FormVerifierReducer.delivery_channel;
        this.setState({ type: type });
    }

}

let mapStateToProps = (state) => {
    return {
        FormVerifierReducer: state.FormVerifierReducer
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



