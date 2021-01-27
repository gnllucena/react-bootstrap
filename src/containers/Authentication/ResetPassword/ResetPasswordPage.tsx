import React, { FunctionComponent, useEffect, useState } from 'react';
import axios from 'axios';
import * as Yup from 'yup';
import { RouteComponentProps, Link, navigate } from '@reach/router';
import { Formik, Form } from 'formik';
import { Row, Col } from 'antd';
import { useRecoilValue } from 'recoil';
import { Button } from '../../../components/form/Button/Button';
import User from '../../../domain/User';
import { UserState } from '../../../store/LoginPageState';
import { Password } from '../../../components/form/Password/Password';

import '../../../assets/styles/Authentication.scss';

const ResetPasswordPage: FunctionComponent<RouteComponentProps> = (props: RouteComponentProps) => {
  const [token, setToken] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
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
    setLoading(true);

    await axios.post<User>(`${process.env.URL_API_USER}/reset-password`, {
      ...user, Token: token
    });
    
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
              ...userState, Password: '', ConfirmPassword: ''
            }}
            validationSchema={schema}
            onSubmit={submit}
          >
            {(): JSX.Element => (
              <Form>
                <Row>
                  <Col span={24} className="align-left">
                    <Password name="Password" label="New password" autoComplete="new-password" focus />
                  </Col>
                </Row>

                <Row>
                  <Col span={24} className="align-left">
                    <Password name="ConfirmPassword" label="Confirme new password" autoComplete="new-password" />
                  </Col>
                </Row>

                <Row>
                  <Col span={24} className="align-left">
                    <Button text="Reset password" type="submit" design="primary" size="big" loading={loading} />
                  </Col>
                </Row>
              </Form>
            )}
          </Formik>
        </div>
      </Col>
      <Col xs={2} sm={2} md={2} lg={6} xl={6}></Col>
    </Row>
  );
};

export default ResetPasswordPage;
