import React, { FunctionComponent, useEffect, useState } from 'react';
import axios from 'axios';
import Divider from 'antd/lib/divider';
import * as Yup from 'yup';
import { RouteComponentProps, Link, navigate } from '@reach/router';
import { Formik, Form, FormikProps } from 'formik';
import { Row, Col } from 'antd';
import { useRecoilState } from 'recoil';
import { Input } from '../../../components/form/Input/Input';
import { Button } from '../../../components/form/Button/Button';
import { UserState } from '../../../domain/atoms/UserState';
import { User } from '../../../domain/models/User';

import './../../../assets/styles/Authentication.scss';
import { Password } from '../../../components/form/Password/Password';

const logo = require('../../../assets/images/logo-alt.svg') as string;

export const ResetPasswordPage: FunctionComponent<RouteComponentProps> = (props: RouteComponentProps) => {
  const [userState, setUserState] = useRecoilState(UserState);
  const [token, setToken] = useState<string>('')

  useEffect(() => {
    if (!props?.location?.search) {
      return;
    }

    let querystring = props.location.search.substring(1);

    let params = querystring.split('&');

    for (var i=0; i < params.length; i++) {
      let pair = params[i].split('=');

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

  const submit = async (user: User) => {
    // https://github.com/facebookexperimental/Recoil/issues/171#issuecomment-634212164
    // TODO: trocar para selector
    let response = await axios.post<User>(process.env.URL_API_STOCK + 'reset-password',  { ...user, Token: token } );

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

        <div className="title-info-wrapper">Enter your email to recover your account</div>

        <Formik
          initialValues={{ ...userState, Password: '', ConfirmPassword: '' }}
          validationSchema={schema}
          onSubmit={submit}>
          {(props: FormikProps<User>) => (
            <Form>
              <Row>
                <Col span={24} className='align-left'>
                  <Password name="Password" label="New password" autoComplete="new-password" />
                </Col>
              </Row>

              <Row>
                <Col span={24} className='align-left'>
                  <Password name="ConfirmPassword" label="Confirme new password" autoComplete="new-password" />
                </Col>
              </Row>

              <Row>
                <Col span={24} className='align-left'>
                  <Button text="Reset password" type="submit" style='primary' />
                </Col>
              </Row>
            </Form>
          )}
        </Formik>
      </div>
    
      <div className="banner-wrapper">
        <div className="banner-wrapper-image"></div>
      </div>
    </div>
  );
}

export default ResetPasswordPage;