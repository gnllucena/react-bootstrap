import React, { FunctionComponent, useState } from 'react';
import axios from 'axios';
import Divider from 'antd/lib/divider';
import * as Yup from 'yup';
import { RouteComponentProps, Link, navigate } from '@reach/router';
import { Formik, Form } from 'formik';
import { Row, Col } from 'antd';
import { useRecoilValue } from 'recoil';
import Input from '../../../components/form/Input/Input';
import Password from '../../../components/form/Password/Password';
import Switch from '../../../components/form/Switch/Switch';
import Button from '../../../components/form/Button/Button';
import User from '../../../domain/User';
import { UserState } from '../../../store/LoginPageState';

import '../../../assets/styles/Authentication.scss';

const CreateNewAccountPage: FunctionComponent<RouteComponentProps> = (props: RouteComponentProps) => {
  const userState = useRecoilValue(UserState);
  const [loading, setLoading] = useState<boolean>(false);

  const schema = Yup.object().shape({
    Name: Yup.string()
      .max(40, 'This field cannot have more then 40 characters')
      .required('This field is required'),
    Email: Yup.string()
      .max(40, 'This field cannot have more then 40 characters')
      .email('This is not a valid email')
      .required('This field is required'),
    Password: Yup.string()
      .max(40, 'This field cannot have more then 40 characters')
      .required('This field is required')
      .min(6, 'This field cannot have less then 6 characters'),
    ConfirmPassword: Yup.string()
      .max(40, 'This field cannot have more then 40 characters')
      .required('This field is required')
      .oneOf([Yup.ref('Password')], "Passwords don't match")
      .min(6, 'This field cannot have less then 6 characters'),
    AgreeTermsAndCondition: Yup.boolean()
      .required('This field is required.')
      .oneOf([true], 'This field is required.')
  });

  const submit = async (user: User): Promise<void> => {
    setLoading(true);

    await axios.post<User>(`${process.env.URL_API_USER}/register`, user);

    setLoading(false);

    navigate('/');
  };

  return (
    <Row className="authentication-wrapper uncentered" gutter={24}>
      <Col xs={2} sm={2} md={2} lg={6} xl={6}></Col>
      <Col xs={20} sm={20} md={20} lg={12} xl={12}>
        <div className="form-wrapper">
          <div className="title-wrapper">
            Welcome to <Link to="/">zro17</Link>
          </div>

          <div className="subtitle-wrapper">Please register for your new account</div>

          <Formik
            initialValues={{
              ...userState, Password: '', ConfirmPassword: '', AgreeTermsAndCondition: false
            }}
            validationSchema={schema}
            onSubmit={submit}
          >
            {(): JSX.Element => (
              <Form>
                <Row>
                  <Col span={24} className="align-left">
                    <Input name="Name" label="Name" value={userState.Name} />
                  </Col>
                </Row>

                <Row>
                  <Col span={24} className="align-left">
                    <Input name="Email" label="Email" autoComplete="username" value={userState.Email} />
                  </Col>
                </Row>

                <Row>
                  <Col span={24} className="align-left">
                    <Password name="Password" label="Password" autoComplete="new-password" />
                  </Col>
                </Row>

                <Row>
                  <Col span={24} className="align-left">
                    <Password name="ConfirmPassword" label="Confirm password" autoComplete="new-password" />
                  </Col>
                </Row>

                <Row>
                  <Col span={24} className="align-left">
                    <Switch name="AgreeTermsAndCondition" label="I agree with terms and conditions" value={false} />
                  </Col>
                </Row>

                <Row>
                  <Col span={24} className="align-left">
                    <Button text="Create new account" type="submit" design="primary" size="big" loading={loading} />
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

export default CreateNewAccountPage;
