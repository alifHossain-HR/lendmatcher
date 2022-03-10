import React from 'react'
import {BiArrowBack} from 'react-icons/bi'
import { useRouter } from 'next/router'
import { Formik, Form } from "formik"
import * as Yup from "yup"
import Input from '../components/custom/Input'

const LoginSchema = Yup.object().shape({
  password: Yup.string()
    .min(8, "Password must be 8 character long.")
    .max(20, "Too Long Password!")
    .required("Password is required!"),
  email: Yup.string().email("Invalid email address!").required("Email address is required!"),
})



const Login = () => {
    const router = useRouter()

  return (
    <div className="flex flex-col w-[vw] h-[100vh] items-center justify-center">
      <div className="flex  shadow-lg flex-col relative p-10 h-auto w-[380px] md:w-[450px] rounded border-2 border-[#d1def3] items-center justify-center">
        {/* back button */}
        <div
          onClick={() => router.back()}
          className="absolute top-2 shadow-md cursor-pointer left-[-12px] border-2 bg-white-light border-[#d1def3] p-3 rounded-full "
        >
          <BiArrowBack />
        </div>

        <h1 className="text-center text-[28px]">Login</h1>
        <h4 className="text-center text-[15px] opacity-70 mb-5 ">
          Log in now to get full access.
        </h4>

        {/* form */}
        <Formik
          initialValues={{
            password: "",
            email: "",
          }}
          validationSchema={LoginSchema}
          onSubmit={(values) => {
            // same shape as initial values
            console.log(values)
          }}
        >
          {({ errors, touched }) => (
            <Form className="flex flex-col w-full">
              <Input
                placeholder="Your Email Address..."
                name="email"
                type="email"
                error={errors.email}
                touched={touched.email}
              />

              <Input
                placeholder="Your Password..."
                name="password"
                type="password"
                error={errors.password}
                touched={touched.password}
              />

              <button
                className="w-full bg-primary-light py-3 mt-3 rounded "
                type="submit"
              >
                Submit
              </button>
            </Form>
          )}
        </Formik>
      </div>
      <div className="flex mt-3 text-[14px] items-center w-[380px] md:w-[450px] justify-between">
        <p className="text-primary-light cursor-pointer hover:underline ">
          Forgot your password?
        </p>
        <p className="text-primary-light">
          Not registered yet?{" "}
          <span onClick={() => router.push("/signup")} className="cursor-pointer hover:underline ">
            Click here to sign up?
          </span>
        </p>
      </div>
    </div>
  )
}

export default Login