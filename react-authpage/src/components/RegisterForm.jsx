import { useContext } from "react";
import { useFormik } from "formik";
import apiService from "../services/apiService";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import * as Yup from "yup";
import "../styles/registerForm.css";

const initialValues = {
  email: "",
  password: "",
  name: "",
  gender: "",
  dateOfBirth: "",
  address: "",
};

// const validate = (values) => {
//   let errors = {};

//   if (!values.name) {
//     errors.name = "This field is required";
//   }

//   return errors;
// };

const validationSchema = Yup.object({
  email: Yup.string().email("Invalid email").required("This field is required"),
  password: Yup.string()
    .min(8)
    .matches(/\d+/)
    .required("This field is required"),
  name: Yup.string().required("This field is required"),
  gender: Yup.string().required("This field is required"),
  dateOfBirth: Yup.date().required("This field is required"),
  address: Yup.string().required("This field is required"),
});

const RegisterForm = () => {
  const navigate = useNavigate();
  const context = useContext(AuthContext);

  const loginAfterRegistration = async (email, password) => {
    try {
      const response = await apiService.login(email, password);
      if (response.data.success) {
        context.onLogin();
        navigate("/dashboard");
      } else {
        console.error("Login failed after registration.");
      }
    } catch (err) {
      console.error("There was an error logging in after registration!", err);
    }
  };

  const onSubmit = async (values, { setSubmitting }) => {
    try {
      await apiService.register(values);
      await loginAfterRegistration(values.email, values.password);
    } catch (err) {
      console.error("There was an error with registration!", err);
    } finally {
      setSubmitting(false);
    }
  };

  const formik = useFormik({ initialValues, onSubmit, validationSchema });

  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <div className="form-group">
          <input
            type="email"
            name="email"
            id=""
            placeholder="email"
            {...formik.getFieldProps("email")}
          />
        </div>

        <div className="form-group">
          <input
            type="password"
            name="password"
            id=""
            placeholder="password"
            {...formik.getFieldProps("password")}
          />
        </div>

        <div className="form-group">
          <input
            type="text"
            name="name"
            id="name"
            placeholder="name"
            {...formik.getFieldProps("name")}
          />
          {formik.touched.name && formik.errors.name ? (
            <div className="error">{formik.errors.name}</div>
          ) : null}
        </div>

        <div className="form-group">
          <input
            type="text"
            name="gender"
            id="gender"
            placeholder="gender"
            {...formik.getFieldProps("gender")}
          />
        </div>

        <div className="form-group">
          <input
            type="date"
            name="dateOfBirth"
            id="dateOfBirth"
            placeholder="dateOfBirth"
            {...formik.getFieldProps("dateOfBirth")}
          />
        </div>

        <div className="form-group">
          <input
            type="address"
            name="address"
            id="address"
            placeholder="address"
            {...formik.getFieldProps("address")}
          />
        </div>
        <div>
          <button type="submit">Register</button>
        </div>
      </form>
    </>
  );
};

export default RegisterForm;
//✅ useState for each input - FORMIK
//before registration check if this email already exist (useEffect - but not for each keystop) - check in DB
//validation email, password (progress bar for password strenth)
//validation start onBlur (do as procademy shows)
//before send to backend format capitalize for inputs "name", "gender", "address"
//after registration what should be next step? redirect to profile? or ask to login?
