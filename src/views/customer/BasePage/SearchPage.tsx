import * as Yup from "yup"
import { useFormik } from "formik"
import { useState } from "react"
import { left } from "@popperjs/core"
const initialValues = {Search:""}
const SearchPage:React.FC = ()=>{
    const [loading, setLoading] = useState(false)
    const LoginSchema = Yup.object().shape({
        Search: Yup.string()
          .min(3, "Minimum symbol 3 symbol")
          .required("Cant search empty")})
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
                disableLoading()
                setSubmitting(false)
                disableLoading()}, 100)
            },
          })
          const getInputClassesSearch = () => {
            if (formik.touched.Search && formik.errors.Search) {
              return "is-invalid"
            }
        
            if (formik.touched.Search && !formik.errors.Search) {
              return "is-valid"
            }

            return ""
          }
    return <>
        <form
      onSubmit={formik.handleSubmit}
      className="form fv-plugins-bootstrap fv-plugins-framework"
    >
      {formik.status ? (
        <div className="mb-10 alert alert-custom alert-light-danger alert-dismissible">
          <div className="alert-text font-weight-bold">{formik.status}</div>
        </div>
      ) : null}

    <div className="row">
    <div className ="col-sm">
    <div className="form-group fv-plugins-icon-container " >
        <input
          placeholder="Захиалгын дугаар"
          className={`form-control form-control-solid  h-auto py-5 px-6 ${getInputClassesSearch}`}
          
          {...formik.getFieldProps("Search")}
        />
        {formik.touched.Search && formik.errors.Search ? (
          <div className="fv-plugins-message-container">
            <div className="fv-help-block">{formik.errors.Search}</div>
          </div>
        ) : null}
      </div>
    </div>
     
      <div className="col-sm">
      <div className="form-group d-flex flex-wrap  justify-content-between align-items-center">
        <button
          id="kt_login_signin_submit"
          type="submit"
          disabled={formik.isSubmitting}
          className={`btn btn-primary font-weight-bold h-auto py-5 px-6`}
        >
          <span>Хайх</span>
          {loading && <span className="ml-3 spinner spinner-white"></span>}
        </button>
      </div>
    </div>
      </div>
    </form>
    </>
}
export default SearchPage