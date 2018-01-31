import * as React from "react";
import classNames from "classnames";
import ComponentsConfig from "../ComponentsConfig";
import Tool from "../../pub/Tool";
const css_prefix = ComponentsConfig.css_prefix;
interface FormItemsProps {
    label?: string;
    className?: string;
    default?:any;
    help?:string;
    BtnFormItems?:any;
    require?:any;
    labelCol?:string;
    wrapperCol?:string;
    isInline?:boolean;
}
export default class FormItems extends React.Component<any,any> {
    
    static defaultProps = {
        labelCol:'20',
        wrapperCol:'67'
    }

    constructor(props){
        super(props);
    }

    toChild(){
        let {children, label, className,help,isInline,require,wrapperCol,labelCol} = this.props;
        let Cls = isInline ? '' : `${css_prefix}-col-${wrapperCol}`;
        let opts_obj = null;
        return React.Children.map(children, (c: any,index:any) => {
            let AddCls = classNames([`${Cls}`],
            {[`${c.props.className}`]: c.props.className });
            if(c.props.id){
                opts_obj = Tool.assign({},{ className: `${AddCls}`,id:c.props.id})
            }else{
                opts_obj = { className: `${AddCls}`};
            }
            return React.cloneElement(c,opts_obj)
        });
    }
    /**
     * body 主容器 包括头部和菜单
     */
    render() {
        let {children, label, className,help,isInline,require,labelCol} = this.props;
        let addClassName = className;
        let contenCls = classNames(`${css_prefix}-form-items`, {[`${addClassName}`]: className });
        let Cls = classNames(`${css_prefix}-form-label`,
        {[`${css_prefix}-col-${labelCol}`]: labelCol&&!isInline });
        
        let helpStyle = {
            "marginLeft":`${labelCol}%`
        }
        let labelTel = label ? (<label className={Cls}><span>{require?<strong className="require">*</strong>:false}{label}</span></label>) : false;
        let helpTips = help ? (<div className={`${css_prefix}-form-items-help`} style={helpStyle}>{help}</div>) : false;
        return (<div className={contenCls}>
                    {labelTel}
                    {this.toChild()}
                    {helpTips}
                </div>
                    );
    }

}