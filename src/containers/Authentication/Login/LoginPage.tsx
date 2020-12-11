import React, { FunctionComponent } from 'react';
import axios from 'axios';
import Divider from 'antd/lib/divider';
import { navigate, RouteComponentProps, Link } from '@reach/router';
import * as Yup from 'yup';
import { Formik, Form } from 'formik';
import { Row, Col } from 'antd';
import { useRecoilState } from 'recoil';
import Input from '../../../components/form/Input/Input';
import Password from '../../../components/form/Password/Password';
import Switch from '../../../components/form/Switch/Switch';
import Button from '../../../components/form/Button/Button';
import User from '../../../domain/User';
import { LoginPageState } from '../../../store/LoginPageState';

import '../../../assets/styles/Authentication.scss';

const logo = require('../../../assets/images/logo-alt.svg') as string;

const LoginPage: FunctionComponent<RouteComponentProps> = (props: RouteComponentProps) => {
  const [loginPageState, setLoginPageState] = useRecoilState(LoginPageState);

  const schema = Yup.object().shape({
    Email: Yup.string()
      .max(40, 'This field cannot have more then 40 characters')
      .email('This is not a valid email')
      .required('This field is required'),
    Password: Yup.string()
      .max(40, 'This field cannot have more then 40 characters')
      .required('This field is required')
  });

  const submit = async (user: User): Promise<void> => {
    const response = await axios.get<User>(`${process.env.URL_API_STOCK}login`);

    response.data.RememberMe = user.RememberMe;

    setLoginPageState(response.data);

    navigate(url());
  };

  const url = (): string => {
    let route = '/';

    const url = window.location.href.split('?');

    if (url.length > 1) {
      const params = url[1].split('&');

      for (let param of params) {
        const pair = param.split('=');
  
        const name = pair[0].toLowerCase();
        const value = pair[1].toLowerCase();
  
        if (name === 'url') {
          route = value;
          
          break;
        }
      }
    }

    return route;
  }

  return (
    <div className="authentication-wrapper">
      <div className="form-wrapper">
        <div className="logo-wrapper">
          <Link to="/">
            <img src={logo} alt="semnome017" />
            <h3>semnome017</h3>
          </Link>
        </div>

        <div className="title-wrapper">Welcome Back</div>

        <div className="title-info-wrapper">Please log into your account</div>

        <Formik
          initialValues={{
            ...loginPageState, Password: ''
          }}
          validationSchema={schema}
          onSubmit={submit}
        >
          {(): JSX.Element => (
            <Form>
              <Row>
                <Col span={24} className="align-left">
                  <Input name="Email" label="Email" autoComplete="username" value={loginPageState.Email} />
                </Col>
              </Row>

              <Row>
                <Col span={24} className="align-left">
                  <Password name="Password" label="Password" autoComplete="current-password" />
                </Col>
              </Row>

              <Row>
                <Col span={12} className="align-left">
                  <Switch name="RememberMe" label="Remember Me" value={loginPageState.RememberMe} />
                </Col>
                <Col span={12} className="align-right">
                  <Link to="/forgot-password">Forgot password?</Link>
                </Col>
              </Row>

              <Row>
                <Col span={24} className="align-left">
                  <Button text="Log In" type="submit" design="primary" size="big" />  
                </Col>
              </Row>
            </Form>
          )}
        </Formik>

        <Divider />

        <div className="align-center">
          <Link to="/create-new-account">Create a new account</Link>
        </div>
      </div>

      <div className="banner-wrapper">
        <div className="banner-wrapper-image" />
      </div>
    </div>
  );
};

export default LoginPage;
