import React, { useEffect, FunctionComponent } from 'react';
import * as Yup from 'yup';
import Divider from 'antd/lib/divider';
import { RouteComponentProps, Link } from '@reach/router';
import { Formik, Form, FormikHelpers, FormikProps } from 'formik';
import { Input } from '../../components/form/Input/Input';
import { Password } from '../../components/form/Password/Password';

import './LoginPage.scss';
import { Switch } from '../../components/form/Switch/Switch';
import { Button } from '../../components/form/Button/Button';
import { Row, Col } from 'antd';
import { useRecoilState } from 'recoil';

export const LoginPage: FunctionComponent<RouteComponentProps> = (props: RouteComponentProps) => {
  // const [user, setUser] = useRecoilState();

  const logo = require('../../assets/images/logo-alt.svg') as string;
  
  const schema = Yup.object().shape({
    Email: Yup.string()
      .max(80, 'This field cannot have more then 40 characters')
      .email('This is not a valid email')
      .required('This field is required'),
    Password: Yup.string()
      .max(40, 'This field cannot have more then 40 characters')
      .required('This field is required'),
  });

  useEffect(() => {
    return () => { };
  }, []);

  function submit(values: any, actions: FormikHelpers<any>) {
    console.log('values: ' + values);
    console.log('actions: ' + actions);
  }

  return (
    <div className="login-wrapper">
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
          initialValues={{ Email: '', Password: '', RememberMe: false }}
          validationSchema={schema}
          onSubmit={submit}
        >
          {(props: FormikProps<any>) => (
            <Form>
              <Row>
                <Col span={24} className='align-left'>
                  <Input name="Email" label="Email" autoComplete="username" />
                </Col>
              </Row>

              <Row>
                <Col span={24} className='align-left'>
                  <Password name="Password" label="Password" autoComplete="current-password" />
                </Col>
              </Row>

              <Row>
                <Col span={12} className='align-left'>
                  <Switch name="RememberMe" label="Remember Me" value={false} />    
                </Col>
                <Col span={12} className='align-right'>
                  <Link to="/">Forgot password?</Link>
                </Col>
              </Row>

              <Row>
                <Col span={24} className='align-left'>
                  <Button text="Log In" type="submit" style='primary' />
                </Col>
              </Row>
            </Form>
          )}
        </Formik>
        
        <Divider>Or log in with</Divider>
        
        {/*
        <SocialLogin />
        <Text>
          Don't Have an Account?&nbsp;
          <Link to={REGISTRATION_PAGE}>Registration</Link>
        </Text> */}
      </div>
    </div>
  );
}

export default LoginPage;