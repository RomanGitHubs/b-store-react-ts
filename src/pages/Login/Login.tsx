import React from 'react';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import { useLocation, useNavigate } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useAppDispatch } from '../../store/hooks';
import { putUser } from '../../store/reducers/user';
import { loginUser } from '../../api/services/users';
import { LoginForm } from '../../models/loginForm';
import UButton from '../../components/UI/Button/UButton';
import UInput from '../../components/UI/Input/UInput';
import mailIco from '../../assets/mail-ico.svg';
import hideIco from '../../assets/hide-ico.svg';
import mainPicture from '../../assets/reg-chel.webp';

const constans = {
  mailIco,
  hideIco,
  placeholderEmail: 'Email',
  placeholderPassword: 'Password',
  labelEmail: 'Enter your email',
  labelPassword: 'Enter your password',
};

const warningEmail = {
  email: 'Wrong email',
  max: 'Email too long, get another',
  required: 'Need email',
};

const warningPassword = {
  matches: 'Password must contain at least 1 lowercase letter, at least 1 uppercase letter, and 1 special character',
  min: 'Password shoud be min 6 charactes',
  required: 'Need password',
};

const loginSchema = yup.object({
  email: yup.string().email(warningEmail.email).required(warningEmail.required),
  password: yup.string().required(warningPassword.required),
  replay: yup.string(),
});

interface ILocation {
  from: {
    pathname: string,
  }
}

const Login: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const location = useLocation();

  const from: ILocation = location.state as ILocation || { from: { pathname: '/' } };

  // console.log(from);

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
      replay: '',
    },
  });

  const onSubmit = async (data: LoginForm) => {
    // console.log('Send it ...');
    try {
      const response = await loginUser(data);
      dispatch(putUser(response.data.user));
      // console.log('Response Login >>> ', response);

      navigate(from.from.pathname, { replace: true });
    } catch (e: any) {
      console.error('Error Login >>> ', e.response.data);
    }
  };

  return (
    <Body>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <h2 className='title'>Log In</h2>

        <UInput
          placeholder={constans.placeholderEmail}
          icon={constans.mailIco}
          label={constans.labelEmail}
          error={errors.email}
          register={register}
          regtxt={'email'}
        />

        <UInput
          placeholder={constans.placeholderPassword}
          icon={constans.hideIco}
          label={constans.labelPassword}
          error={errors.password}
          register={register}
          regtxt={'password'}
          type={'password'}
        />

        <UButton text='Log In' view='primary'/>
      </Form>

      <Image src={mainPicture} alt=''/>
    </Body>
  );
};

export default Login;

const Body = styled.main`
  display: flex;
  justify-content: space-between;
  margin: 90px auto 80px;
  padding: 0 calc((1.3% - 9px) * 8);
  max-width: var(--width_content);
`;

const Form = styled.form`
  font-weight: 700;
  font-size: 40px;
  line-height: 60px;
  color:  var(--dark);
  max-width: 413px;
  width: 100%;

  .title {
    font-weight: 700;
    font-size: 40px;
    line-height: 60px;
    color: var(--dark);
    margin: 0;
    margin-bottom: 60px;
  }
`;

const Image = styled.img`
  display: flex;
  max-width: 612px;
  max-height: 522px;
  height: 45.7%;
  min-width: 390px;
  padding-left:20px;
`;
