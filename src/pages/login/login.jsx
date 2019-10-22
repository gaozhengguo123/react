import React, { Component } from 'react'
import { Redirect } from "react-router-dom";
import { Form, Icon, Input, Button} from 'antd';
import qs from 'qs'
import { connect } from "react-redux";


import logo from './images/logo.png'
import './login.less'

// const { Item } = Form   不写Form.Item 写Item的时候用
class Login extends Component {
  handleSubmit = (event) =>{
    event.preventDefault() // 阻止表单提交
    // 对所有表单项进行统一的表单验证
    this.props.form.validateFields((err,values)=>{
      if (!err) {
        console.log('发ajax请求', values)
      }else{

      }
    })
    // 读取form收集的数据
    // const form = this.props.form
    // const username = form.getFieldValue('username')
    // const password = form.getFieldValue('password')
    // const values = form.getFieldsValue()
    // console.log('发ajax请求', username, password, values)
  }
  //对密码进行校验
  validatePwd = (rule,value,callback) =>{
     /*
    用户名/密码的的合法性要求
      1). 必须输入
      2). 必须大于等于4位
      3). 必须小于等于12位
      4). 必须是英文、数字或下划线组成
    */
    if(value ===''){
      callback('密码必须输入')
    }else if(value.length<4){
      callback('密码必须大于4位')
    }else if(value.length>12){
      callback('密码必须小于等于12位')
    }else if(!/^[a-zA-Z0-9_]+$/.test(value)){
      callback('密码必须是英文、数字或下划线组成')
    }else{
      callback()// 验证通过/成功
    }
  }

  render() {
    const { getFieldDecorator } = this.props.form;

    return (
      <div className='login'>
        <header className='login-header'>
          <img src={logo} alt=""/>
          <h1>后台管理系统</h1>
        </header>
        <div className='login-content'>
          <h1>用户登录</h1>
          <Form onSubmit={this.handleSubmit} className="login-form">
            <Form.Item>
              {getFieldDecorator('username', {//配置对象
              initialValue: '',
              /*
                  用户名/密码的的合法性要求
                    1). 必须输入
                    2). 必须大于等于4位
                    3). 必须小于等于12位
                    4). 必须是英文、数字或下划线组成
                  */
                  // 声明式验证: 利用已有的验证规则进行验证, 不用亲自判断
              rules: [
                { required: true,whitespace:true, message: '用户名必须输入' },
                { min:4,message:'用户名不能小于4'},
                { max: 12, message: '用户名不能大于12位' },
                { pattern: /^[a-zA-Z0-9_]+$/, message: '用户名必须是英文、数字或下划线组成' },
              ],
            })(
              <Input
                  prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  placeholder="用户名"
                />
            )}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator('password', {
                initialValue: '', // 初始值
              rules: [
                //自定义校验
                { validator:this.validatePwd}
              ],
            })(
              <Input
                  prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  type="password"
                  placeholder="密码"
                />
            )}
            </Form.Item>
            <Form.Item>
            <Button type="primary" htmlType="submit" className="login-form-button">登陆</Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    )
  }
}
const LoginWrap = Form.create()(Login)
export default LoginWrap