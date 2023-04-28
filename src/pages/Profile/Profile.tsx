import React, { useState, useEffect } from 'react';
// import { useLocation, useNavigate } from 'react-router';
import styled from 'styled-components';
import { AxiosError } from 'axios';
import { useForm } from 'react-hook-form';
import { putUser } from '../../store/reducers/user';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { photoUser, updateUser } from '../../api/services/users';
import ProfilePhoto from './Components/ProfilePhoto';
import UProfileInput from '../../components/UI/ProfileInput/UProfileInput';
import UButton from '../../components/UI/Button/UButton';
import scrollToTop from '../../components/ScrollToTop/ScrollToTop';
import userIco from '../../assets/user-ico.svg';
import mailIco from '../../assets/mail-ico.svg';
import hideIco from '../../assets/hide-ico.svg';

export interface IProfileValues {
  name: string,
  email: string,
  password: string
  newPassword: string
  newPasswordReplay: string
}

const Profile: React.FC = () => {
  scrollToTop();
  const user = useAppSelector((state) => state.userSlice.user);
  const dispatch = useAppDispatch();
  // const navigate = useNavigate();
  // const location = useLocation();
  const [updatable, setUpdatable] = useState(false);
  const [userPhoto, setUserPhoto] = useState<string | null>(null);

  useEffect(() => {
    if (user) {
      setValue('name', user.name);
      setValue('email', user.email);
      if (user.photo !== '') setUserPhoto(user.photo);
    }
  }, []);

  const {
    handleSubmit,
    // formState: { errors },
    register,
    setValue,
    // setError,
  } = useForm({
    defaultValues: {
      name: '',
      email: '',
      password: '',
      newPassword: '',
      newPasswordReplay: '',
    },
  });

  const onSubmit = async (data: IProfileValues) => {
    // console.log('Form data >>> ', data);
    try {
      if (data.password === '') {
        const { name, email } = data;

        const response = await updateUser({ name, email });
        // console.log(response);

        dispatch(putUser(response.data.user));
        // console.log('Submite', response);
        setUpdatable((prevValue) => !prevValue);
      } else if (data.newPassword === data.newPasswordReplay && data.password) {
        const { newPasswordReplay, ...rest } = data;

        const response = await updateUser(rest);
        dispatch(putUser(response.data.user));
        // console.log('Submite', response);

        setUpdatable(updatable);
      } else {
        // console.log('Not submite');
      }
    } catch (e) {
      if (e instanceof AxiosError) {
        const { response } = e;
        return console.error('Error >>> ', response?.data);
      }
      // alert('UNEXPECTED');
    }
  };

  const handleAvatar: React.ChangeEventHandler<HTMLInputElement> = async (event) => {
    try {
      const uploadFile = event.target?.files?.[0];

      if (!uploadFile) {
        // return alert('No file');
        return;
      }

      const toDataURL = (uploadFile: File) => new Promise<string>((resolve, reject) => {
        const reader = new FileReader();
        reader.onloadend = () => resolve(reader.result as string);
        reader.onerror = reject;
        reader.readAsDataURL(uploadFile);
      });

      const dataUrl = await toDataURL(uploadFile);
      // console.log('PAYLOAD:', dataUrl);

      const response = await photoUser({ file: dataUrl });
      // console.log(response);

      dispatch(putUser(response.data.user));
    } catch (e) {
      if (e instanceof AxiosError) {
        const { response } = e as AxiosError;
        return console.error('Error Avatar >>> ', response?.data);
      }
    }
  };

  return (
    <Body>
      <ProfilePhoto updatable={updatable} photo={userPhoto} updateFunc={handleAvatar}/>

      <form className='form' onSubmit={handleSubmit(onSubmit)}>
        <div className='form__header'>
          <h3 className='form__header__title'>Personal information</h3>

          <span
            className='form__header__button'
            onClick={() => setUpdatable((state) => !state)}
          >
            Change information
          </span>
        </div>

        <UProfileInput
          topLabel='Your name'
          placeholder='Enter your name'
          icon={userIco}
          disabled={!updatable}
          register={register}
          registerName='name'
        />

        <UProfileInput
          topLabel='Your email'
          placeholder='Enter your email'
          icon={mailIco}
          disabled={!updatable}
          register={register}
          registerName='email'
        />

        <div className='form__header'>
          <h3 className='form__header__title'>Password information</h3>
          {/* <button
            className='form__header__button'
            onClick={() => setUpdatable(state => !state)}
          >
            Change password
          </button> */}
        </div>

        <UProfileInput
          topLabel='Old password'
          placeholder='************'
          icon={hideIco}
          disabled={!updatable}
          register={register}
          registerName='password'
        />

        {updatable && <>
          <UProfileInput
            bottomLabel='Enter your password'
            placeholder='New password'
            icon={hideIco}
            disabled={!updatable}
            register={register}
            registerName='newPassword'
          />

          <UProfileInput
            bottomLabel='Repeat your password without errors'
            placeholder='Password replay'
            icon={hideIco}
            disabled={!updatable}
            register={register}
            registerName='newPasswordReplay'
          />

          <UButton text='Confirm' view='primary' width='short' mtop='50px'/>
        </>}
      </form>
    </Body>
  );
};

export default Profile;

const Body = styled.main`
  display: flex;
  margin: 0 auto;
  max-width: var(--width_content);
  min-height: calc(100vh - 112px - 294px);
  padding: 60px calc((1.3% - 9px) * 8) 110px;

  .form {
    display: flex;
    flex-direction: column;
    width: 522px;
    padding-left: 110px;

    @media screen and (max-width: 1100px) {
      padding-left: 50px;
    }

    @media screen and (max-width: 960px) {
      padding-left: 20px;
    }

    &__header {
      display: flex;
      justify-content: space-between;
      font-size: 20px;
      line-height: 30px;
      color: var(--dark);
      margin-bottom: 30px;
      
      &__title {
        font-weight: 500;
        font-size: 20px;
        line-height: 30px;
        margin: 0;
      }
      
      &__button {
        font-weight: 500;
        font-size: 14px;
        line-height: 21px;
        text-decoration-line: underline;
        color: var(--dark_green);
        border: none;
        background-color: white;
        cursor: pointer;
      }
    }
  }
`;
