import React, { FunctionComponent, useState } from 'react';
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

const ForgotPasswordPage: FunctionComponent<RouteComponentProps> = (props: RouteComponentProps) => {
  const userState = useRecoilValue(UserState);
  const [loading, setLoading] = useState<boolean>(false);

  const schema = Yup.object().shape({
    Email: Yup.string()
      .max(40, 'This field cannot have more then 40 characters')
      .email('This is not a valid email')
      .required('This field is required')
  });

  const submit = async (user: User): Promise<void> => {
    setLoading(true);

    await axios.post<User>(`${process.env.URL_API_USER}/forgot-password`, user);

    setLoading(false);

    navigate('/');
  };

  return (
    <Row className="authentication-wrapper center" gutter={24}>
      <Col xs={2} sm={2} md={2} lg={6} xl={6}></Col>
      <Col xs={20} sm={20} md={20} lg={12} xl={12}>
        <div className="form-wrapper">
          <div className="title-wrapper">
            Welcome back to <Link to="/">zro17</Link>
          </div>

          <div className="subtitle-wrapper">Enter your email to recover your account</div>

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
                    <Button text="Send password recovery email" type="submit" design="primary" size="big" loading={loading} />
                  </Col>
                </Row>
              </Form>
            )}
          </Formik>

          <Divider plain>or</Divider>
          
          <div className="align-center">
            <Link to="/login">Log in with your existing account</Link>
          </div>
        </div>
      </Col>
      <Col xs={2} sm={2} md={2} lg={6} xl={6}></Col>
    </Row>
  );
};

export default ForgotPasswordPage;
