import {FormikErrors, FormikTouched} from "formik"
export interface InputProps {
    label: string
    name: string
    placeholder?: string
    errors?: FormikErrors<{
      [field: string]: any
    }>
    touched?: FormikTouched<{
      [field: string]: any
    }>
    autofocus?: boolean
    disabled?: boolean
  }