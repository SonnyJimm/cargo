import { LoginFeedBack } from "types/ActionTypes"
import { useDispatch } from "react-redux"
import {useState}from "react"
import * as Yup from "yup"
import { useFormik } from "formik"
import { Link } from "react-router-dom"
import { login } from "utils"

const initialValues = {
  email: "admin@demo.com",
  password: "demo",
}
const UserLogin: React.FC = () => {
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(false)
  const LoginSchema = Yup.object().shape({
    email: Yup.string()
      .email("Wrong email format")
      .min(3, "Minimum symbol 3 symbol")
      .max(50, "Maximum symbol 50")
      .required("Email cant be empty"),
    password: Yup.string()
      .min(3, "Minimum 3 symbols")
      .max(50, "Maximum 50 symbols")
      .required("Password cant be empty"),
  })
 
  const enableLoading = () => {
    setLoading(true)
  }

  const disableLoading = () => {
    setLoading(false)
  }
  const formik = useFormik({
    initialValues,
    validationSchema: LoginSchema,
    onSubmit: (values, { setStatus, setSubmitting }) => {
      let res
      enableLoading()
      setTimeout(() => {
        res=login(values.email,values.password,dispatch)
        console.log(values)
        if(res.feedback === LoginFeedBack.FAILED){
          setStatus(res.error)
        }
        setSubmitting(false)
        disableLoading()}, 1000)
    },
  })
  const getInputClassesEmail = () => {
    if (formik.touched.email && formik.errors.email) {
      return "is-invalid"
    }

    if (formik.touched.email && !formik.errors.email) {
      return "is-valid"
    }

    return ""
  }
  const getInputClassesPassword = () => {
    if (formik.touched.password && formik.errors.password) {
      return "is-invalid"
    }

    if (formik.touched.password && !formik.errors.password) {
      return "is-valid"
    }

    return ""
  }
  return (
    <div className="login-form login-signin" id="kt_login_signin_form">
    {/* begin::Head */}
    <div className="text-center mb-10 mb-lg-20">
      <h3 className="font-size-h1">
        Please Login
      </h3>
      <p className="text-muted font-weight-bold">
        Та нэр нууц үгээ оруулана уу
      </p>
    </div>
    {/* end::Head */}

    {/*begin::Form*/}
    <form
      onSubmit={formik.handleSubmit}
      className="form fv-plugins-bootstrap fv-plugins-framework"
    >
      {formik.status ? (
        <div className="mb-10 alert alert-custom alert-light-danger alert-dismissible">
          <div className="alert-text font-weight-bold">{formik.status}</div>
        </div>
      ) : null}

      <div className="form-group fv-plugins-icon-container">
        <input
          placeholder="Емайл"
          type="email"
          className={`form-control form-control-solid h-auto py-5 px-6 ${getInputClassesEmail()}`}
          style = {{width:400}}
          {...formik.getFieldProps("email")}
        />
        {formik.touched.email && formik.errors.email ? (
          <div className="fv-plugins-message-container">
            <div className="fv-help-block">{formik.errors.email}</div>
          </div>
        ) : null}
      </div>
      <div className="form-group fv-plugins-icon-container">
        <input
          placeholder="Нууц үг"
          type="password"
          className={`form-control form-control-solid h-auto py-5 px-6 ${getInputClassesPassword}`}
          style = {{width:400}}
          {...formik.getFieldProps("password")}
        />
        {formik.touched.password && formik.errors.password ? (
          <div className="fv-plugins-message-container">
            <div className="fv-help-block">{formik.errors.password}</div>
          </div>
        ) : null}
      </div>
      <div className="form-group d-flex flex-wrap justify-content-between align-items-center">
        <Link
          to="/auth/forgot-password"
          className="text-dark-50 text-hover-primary my-3 mr-2"
          id="kt_login_forgot"
        >
          Forgot Password ?
        </Link>
        <button
          id="kt_login_signin_submit"
          type="submit"
          disabled={formik.isSubmitting}
          className={`btn btn-primary font-weight-bold px-9 py-4 my-3`}
        >
          <span>Нэвтрэх</span>
          {loading && <span className="ml-3 spinner spinner-white"></span>}
        </button>
      </div>
    </form>
    {/*end::Form*/}
  </div>
  )
}
export default UserLogin
