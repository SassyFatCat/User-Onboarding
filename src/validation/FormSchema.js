import * as yup from 'yup'

const formSchema = yup.object().shape({
  email: yup
    .string()
    .email("Email must be valid")
    .required("Email is required"),
  firstName: yup
    .string()
    .min(2, "Please enter your full first name")
    .required("First name is required"),
  password: yup
    .string()
    .min(7, "Minimum of 7 characters required")
    .required("Password is required"),
  ToS: yup
    .string()
    .oneOf(['true'], "Accepting ToS is required")
})

export default formSchema