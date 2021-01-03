import React, { FunctionComponent } from 'react';
import axios from 'axios';
import Divider from 'antd/lib/divider';
import * as Yup from 'yup';
import { RouteComponentProps, Link, navigate } from '@reach/router';
import { Formik, Form } from 'formik';
import { Row, Col } from 'antd';
import { useRecoilValue } from 'recoil';
import Button from '../../../components/form/Button/Button';
import User from '../../../domain/User';
import { UserState } from '../../../store/LoginPageState';
import Input from '../../../components/form/Input/Input';

import '../../../assets/styles/Authentication.scss';

const logo = require('../../../assets/images/logo-alt.svg') as string;

const ForgotPasswordPage: FunctionComponent<RouteComponentProps> = (props: RouteComponentProps) => {
  const userState = useRecoilValue(UserState);

  const schema = Yup.object().shape({
    Email: Yup.string()
      .max(40, 'This field cannot have more then 40 characters')
      .email('This is not a valid email')
      .required('This field is required')
  });

  const submit = async (user: User): Promise<void> => {
    await axios.post<User>(`${process.env.URL_API_USER}/forgot-password`, user);

    navigate('/');
  };

  return (
    <div className="authentication-wrapper">
      <div className="form-wrapper">
        <div className="logo-wrapper">
          <Link to="/">
            <h3>zro17</h3>
          </Link>
        </div>

        <div className="title-wrapper">Welcome Back</div>

        <div className="title-info-wrapper">Enter your email to recover your account</div>

        <Formik
          initialValues={{
            ...userState
          }}
          validationSchema={schema}
          onSubmit={submit}
        >
          {(): JSX.Element => (
            <Form>
              <Row>
                <Col span={24} className="align-left">
                  <Input name="Email" label="Email" autoComplete="username" value={userState.Email} />
                </Col>
              </Row>

              <Row>
                <Col span={24} className="align-left">
                  <Button text="Send password recovery email" type="submit" design="primary" size="big" />
                </Col>
              </Row>
            </Form>
          )}
        </Formik>

        <Divider />

        <div className="align-center">
          <Link to="/login">Log in with your existing account</Link>
        </div>
      </div>

      <div className="banner-wrapper">
        <div className="banner-wrapper-image" />
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
