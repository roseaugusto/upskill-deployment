import * as Yup from 'yup';
import { Registration } from '../interfaces/Registration';

export const RegistrationSchema: Yup.ObjectSchema<Registration> =
  Yup.object().shape({
    name: Yup.string().required().label('Name'),
    email: Yup.string().email().required().label('Email'),
    contact: Yup.string()
      .required()
      .label('Contact Number')
      .length(11, 'Incorrect number of digits')
      .matches(/^\d+$/, 'Enter numbers only'),
    address: Yup.string().required().label('Address'),
    birthdate: Yup.date().required().label('Birthday'),
    profile_picture: Yup.mixed<FileList>()
      .transform((v) => (v.length ? v : undefined))
      .required()
      .label('Profile Picture'),
  });
