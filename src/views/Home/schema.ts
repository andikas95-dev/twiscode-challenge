import * as yup from 'yup'

const validation = yup.object().shape({
  last_name: yup.string().required('Last name is required'),
  first_name: yup.string().required('First name is required'),
  email: yup
    .string()
    .email('Invalid email')
    .required('Email is required'),
  phone: yup.number().required('Phone is required'),
  country: yup.string().required('Country is required'),
  birthday: yup.date().required('Birthday is required'),
})

export default validation
