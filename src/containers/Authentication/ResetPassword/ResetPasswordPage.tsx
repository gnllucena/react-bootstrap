import React, { FunctionComponent, useEffect, useState } from 'react';
import axios from 'axios';
import * as Yup from 'yup';
import { RouteComponentProps, Link, navigate } from '@reach/router';
import { Formik, Form } from 'formik';
import { Row, Col } from 'antd';
import { useRecoilValue } from 'recoil';
import Button from '../../../components/form/Button/Button';
import User from '../../../domain/User';
import { UserState } from '../../../store/LoginPageState';
import Password from '../../../components/form/Password/Password';

import '../../../assets/styles/Authentication.scss';

const logo = require('../../../assets/images/logo-alt.svg') as string;

const ResetPasswordPage: FunctionComponent<RouteComponentProps> = (props: RouteComponentProps) => {
  const [token, setToken] = useState<string>('');
  const userState = useRecoilValue(UserState);

  useEffect(() => {
    if (!props?.location?.search) {
      return;
    }

    const querystring = props.location.search.substring(1);

    const params = querystring.split('&');

    for (let i = 0; i < params.length; i++) {
      const pair = params[i].split('=');

      if (pair[0] === 't') {
        setToken(decodeURIComponent(pair[1]));

        break;
      }
    }
  }, []);

  const schema = Yup.object().shape({
    Password: Yup.string()
      .max(40, 'This field cannot have more then 40 characters')
      .required('This field is required')
      .min(6, 'This field cannot have less then 6 characters'),
    ConfirmPassword: Yup.string()
      .max(40, 'This field cannot have more then 40 characters')
      .required('This field is required')
      .oneOf([Yup.ref('Password')], "Passwords don't match")
      .min(6, 'This field cannot have less then 6 characters')
  });

  const submit = async (user: User): Promise<void> => {
    await axios.post<User>(`${process.env.URL_API_USER}/reset-password`, {
      ...user, Token: token
    });

    navigate('/');
  };

  return (
    <div className="authentication-wrapper">
      <div className="form-wrapper">
        <div className="logo-wrapper">
          <Link to="/">
            <img src={logo} alt="zro17" />
            <h3>zro17</h3>
          </Link>
        </div>

        <div className="title-wrapper">Welcome Back</div>

        <div className="title-info-wrapper">Enter your email to recover your account</div>

        <Formik
          initialValues={{
            ...userState, Password: '', ConfirmPassword: ''
          }}
          validationSchema={schema}
          onSubmit={submit}
        >
          {(): JSX.Element => (
            <Form>
              <Row>
                <Col span={24} className="align-left">
                  <Password name="Password" label="New password" autoComplete="new-password" />
                </Col>
              </Row>

              <Row>
                <Col span={24} className="align-left">
                  <Password name="ConfirmPassword" label="Confirme new password" autoComplete="new-password" />
                </Col>
              </Row>

              <Row>
                <Col span={24} className="align-left">
                  <Button text="Reset password" type="submit" design="primary" size="big" />
                </Col>
              </Row>
            </Form>
          )}
        </Formik>
      </div>

      <div className="banner-wrapper">
        <div className="banner-wrapper-image" />
      </div>
    </div>
  );
};

export default ResetPasswordPage;
