import React, { FunctionComponent } from 'react';
import axios from 'axios';
import Divider from 'antd/lib/divider';
import * as Yup from 'yup';
import { RouteComponentProps, Link, navigate } from '@reach/router';
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

export const CreateNewAccountPage: FunctionComponent<RouteComponentProps> = (props: RouteComponentProps) => {
  const [userState, setUserState] = useRecoilState(UserState);

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

  const submit = async (user: User) => {
    // https://github.com/facebookexperimental/Recoil/issues/171#issuecomment-634212164
    // TODO: trocar para selector
    let response = await axios.post<User>(process.env.URL_API_STOCK + 'register', user);

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

        <div className="title-wrapper">Welcome to semnome017</div>

        <div className="title-info-wrapper">Please register for your new account</div>

        <Formik
          initialValues={{ ...userState, Password: '', ConfirmPassword: '', AgreeTermsAndCondition: false }}
          validationSchema={schema}
          onSubmit={submit}>
          {(props: FormikProps<User>) => (
            <Form>
               <Row>
                <Col span={24} className='align-left'>
                  <Input name="Name" label="Name" value={userState.Name} />
                </Col>
              </Row>

              <Row>
                <Col span={24} className='align-left'>
                  <Input name="Email" label="Email" autoComplete="username" value={userState.Email} />
                </Col>
              </Row>

              <Row>
                <Col span={24} className='align-left'>
                  <Password name="Password" label="Password" autoComplete="new-password" />
                </Col>
              </Row>

              <Row>
                <Col span={24} className='align-left'>
                  <Password name="ConfirmPassword" label="Confirm password" autoComplete="new-password" />
                </Col>
              </Row>

              <Row>
                <Col span={24} className='align-left'>
                  <Switch name="AgreeTermsAndCondition" label="I agree with terms and conditions" value={false} />    
                </Col>
              </Row>

              <Row>
                <Col span={24} className='align-left'>
                  <Button text="Create new account" type="submit" style='primary' />
                </Col>
              </Row>
            </Form>
          )}
        </Formik>
        
        <Divider></Divider>

        <div className="align-center">
          <Link to="/login">Log in with your existing account</Link>
        </div>
      </div>
    
      <div className="banner-wrapper">
        <div className="banner-wrapper-image"></div>
      </div>
    </div>
  );
}

export default CreateNewAccountPage;