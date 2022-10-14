import * as yup from 'yup'

const regexPhone = /\+58(416|426|424|414|412)([0-9]){7}/g

export const userSchema = yup
  .object({
    username: yup.string().min(6).max(10).trim().required(),
    password: yup.string().min(6).max(10).trim().required(),
  })
  .required()

export const memberSchema = yup
  .object({
    cedula: yup.string().min(4).max(10).trim().required(),
    names: yup.string().min(4).max(20).trim().required(),
    lastnames: yup.string().min(4).max(20).trim().required(),
    phone_number: yup
      .string()
      .matches(regexPhone, 'Phone is not a Venezuelan valid number'),
    address: yup.string(),
    member_of_family: yup.number().min(0).max(10).required(),
    is_worker: yup.bool().required(),
  })
  .required()
