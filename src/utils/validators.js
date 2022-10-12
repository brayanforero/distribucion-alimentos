import * as yup from 'yup'

export const userSchema = yup
  .object({
    username: yup.string().min(6).max(10).trim().required(),
    password: yup.string().min(6).max(10).trim().required(),
  })
  .required()
