import React, { FunctionComponent, Suspense } from 'react';
import axios from 'axios';
import Divider from 'antd/lib/divider';
import { navigate } from "@reach/router"
import * as Yup from 'yup';
import { RouteComponentProps, Link } from '@reach/router';
import { Formik, Form, FormikProps } from 'formik';
import { Row, Col } from 'antd';
import { useRecoilState } from 'recoil';
import { Input } from '../../../components/form/Input/Input';
import { Password } from '../../../components/form/Password/Password';
import { Switch } from '../../../components/form/Switch/Switch';
import { Button } from '../../../components/form/Button/Button';
import { UserState } from '../../../domain/atoms/UserState';
import { User } from '../../../domain/models/User';

import './../../../assets/styles/Authentication.scss';

const logo = require('../../../assets/images/logo-alt.svg') as string;

export const LoginPage: FunctionComponent<RouteComponentProps> = (props: RouteComponentProps) => {
  const [userState, setUserState] = useRecoilState(UserState);
    
  const schema = Yup.object().shape({
    Email: Yup.string()
      .max(40, 'This field cannot have more then 40 characters')
      .email('This is not a valid email')
      .required('This field is required'),
    Password: Yup.string()
      .max(40, 'This field cannot have more then 40 characters')
      .required('This field is required')
  });

  const submit = async (user: User) => {
    // https://github.com/facebookexperimental/Recoil/issues/171#issuecomment-634212164
    // TODO: trocar para selector
    // TODO: trocar para POST
    let response = await axios.get<User>(process.env.URL_API_STOCK + 'login');

    // TODO: remover
    response.data.RememberMe = user.RememberMe;

    setUserState(response.data);

    // TODO: trocar para useEffect quando o POST for para o selector
    navigate('/');
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
          initialValues={{ ...userState, Password: '' }}
          validationSchema={schema}
          onSubmit={submit}>
          {(props: FormikProps<User>) => (
            <Form>
              <Row>
                <Col span={24} className='align-left'>
                  <Input name="Email" label="Email" autoComplete="username" value={userState.Email} />
                </Col>
              </Row>

              <Row>
                <Col span={24} className='align-left'>
                  <Password name="Password" label="Password" autoComplete="current-password" />
                </Col>
              </Row>

              <Row>
                <Col span={12} className='align-left'>
                  <Switch name="RememberMe" label="Remember Me" value={userState.RememberMe} />    
                </Col>
                <Col span={12} className='align-right'>
                  <Link to="/forgot-password">Forgot password?</Link>
                </Col>
              </Row>

              <Row>
                <Col span={24} className='align-left'>
                  <Suspense fallback={
                    <Button text="Foiiiiii" type="submit" style='ghost' />
                  }>
                    <Button text="Log In" type="submit" style='primary' />
                  </Suspense>
                </Col>
              </Row>
            </Form>
          )}
        </Formik>
        
        <Divider></Divider>

        <div className="align-center">
          <Link to="/create-new-account">Create a new account</Link>
        </div>
      </div>
    
      <div className="banner-wrapper">
        <div className="banner-wrapper-image"></div>
      </div>
    </div>
  );
}

export default LoginPage;