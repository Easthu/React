import React, {Component} from 'react';
import api from '../../api/admin'
// 引入接口
import { Form, Input, Button, Checkbox,message } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import style from './index.module.less'
class Login extends Component {
    onFinish = values => {
        console.log('Received values of form: ', values);
        let {userName,passWord} = values
        api.login({userName,passWord}).then((res)=>{
          console.log(res)
          message.success('登陆成功，3s后跳转首页',3,()=>{
            this.props.history.push('/admin')
          });
        }).catch((err)=>{
          console.log(err)
          message.error('登录失败,请重试');
        })
        // console.log({username,password})
        
      };
      // componentWillUnmount = () => {
      //   this.setState = (state,callback)=>{
      //     return;
      //   }}

    render() {
        return (
            <div className={style['login-box']}>
            {/* 
            name:id名字
            className:class属性
            initialValues:表单默认值，只有初始化以及重置时生效
            onFinish:提交表单且数据验证成功后回调事件
            rules:校验规则，设置字段的校验逻辑。
            prefix:前缀 字体图标 突变样式
            */}
            <Form
            name="normal_login"
            className={style['login-form']}
            initialValues={{ remember: true }}
            onFinish={this.onFinish}
          >
            {/* 用户名 */}
            <Form.Item
              name="userName"
              rules={[{ required: true, message: '请输入你的用户名!' }]}
            >
              <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
            </Form.Item>
            {/* 密码 */}
            <Form.Item
              name="passWord"
              rules={[{ required: true, message: '请输入你的密码!' }]}
            >
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Password"
              />
            </Form.Item>
            <Form.Item>
              <Form.Item name="remember" valuePropName="checked" noStyle>
                <Checkbox>Remember me</Checkbox>
              </Form.Item>
      
              <a className="login-form-forgot" href="">
                Forgot password
              </a>
            </Form.Item>
      
            <Form.Item>
              <Button type="primary" htmlType="submit" className="login-form-button">
                Log in
              </Button>
              Or <a href="">register now!</a>
            </Form.Item>
          </Form>
          </div>
        );
    }
}

export default Login;