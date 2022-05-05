import React, {useState} from "react"
import { BiArrowBack } from "react-icons/bi"
import { useRouter } from "next/router"
import { Formik, Form, Field } from "formik"
import * as Yup from "yup"
import Input from "../components/custom/Input"

const SignupSchemaOne = Yup.object().shape({
  password: Yup.string()
    .min(8, "Password must be 8 character long.")
    .max(20, "Too Long Password!")
    .required("Password cannot be empty!"),
  fullName: Yup.string()
    .min(4, "Full name is too small.")
    .max(40, "Full name is too large!")
    .required("Name cannot be empty!"),
  email: Yup.string()
    .email("Invalid email address!")
    .required("Email address is required!"),
  agreeEnrPolicy: Yup.boolean().isTrue("This field is required.")
})


const SignupSchemaTwo = Yup.object().shape({
  password: Yup.string()
    .min(8, "Password must be 8 character long.")
    .max(20, "Too Long Password!")
    .required("Password cannot be empty!"),
  fullName: Yup.string()
    .min(4, "Full name is too small.")
    .max(40, "Full name is too large!")
    .required("Name cannot be empty!"),
  email: Yup.string()
    .email("Invalid email address!")
    .required("Email address is required!"),
  agreeInvOne: Yup.boolean().isTrue("This field is required."),
  agreeInvTwo: Yup.boolean().isTrue("This field is required."),
})

const Signup = () => {
    const [selectedForm, setSelectedForm] = useState("invest")
  const router = useRouter()
  return (
    <div className="flex flex-col w-[vw] h-[100vh] mb-[50px] mt-[50px] items-center">
      <div className="flex  shadow-lg flex-col relative p-10 h-auto w-[380px] md:w-[450px] rounded border-2 border-[#d1def3] items-center justify-center">
        {/* back button */}
        <div
          onClick={() => router.back()}
          className="absolute top-2 shadow-md cursor-pointer left-[-12px] border-2 bg-white-light border-[#d1def3] p-3 rounded-full "
        >
          <BiArrowBack />
        </div>

        <h1 className="text-center text-[28px]">Get Started Now</h1>
        <h4 className="text-center text-[15px] opacity-70 mb-5 ">
          It’s easy to create a pitch using our online form. Your pitch can be
          in front of our investors before you know it.
        </h4>

        {/* form */}

        <div className="flex w-full py-5 gap-5">
          <label className="flex gap-x-2 ">
            <input
              type="radio"
              onChange={(e) => setSelectedForm(e.target.value)}
              name="pick"
              defaultChecked
              value="investor"
            />
            I&apos;m an Investor
          </label>
          <label className="flex gap-x-2 ">
            <input
              type="radio"
              onChange={(e) => setSelectedForm(e.target.value)}
              name="pick"
              value="entrepreneur"
            />
            I&apos;m an Entrepreneur
          </label>
        </div>
        {selectedForm == "entrepreneur" ? (
          <Formik
            initialValues={{
              password: "",
              email: "",
              fullName: "",
              pick: "investor",
              agreeEnrPolicy: false,
            }}
            validationSchema={SignupSchemaOne}
            onSubmit={(values) => {
              // same shape as initial values
              console.log(values)
            }}
          >
            {({ errors, touched }) => (
              <Form className="flex flex-col w-full">
                <Input
                  placeholder="Your Full Name..."
                  name="fullName"
                  type="text"
                  error={touched.fullName && errors.fullName}
                  touched={touched.fullName}
                />
                <Input
                  placeholder="Your Email Address..."
                  name="email"
                  type="email"
                  error={touched.email && errors.email}
                  touched={touched.email}
                />

                <Input
                  placeholder="Your Password..."
                  name="password"
                  type="password"
                  error={touched.password && errors.password}
                  touched={touched.password}
                />

                <div className="flex-col py-5 gap-5">
                  <label className="flex gap-x-2 text-[14px] opacity-80 ">
                    <Field type="checkbox" name="agreeEnrPolicy" />I certify
                    that I agree to the website&apos;s Privacy Policy, Terms and
                    Conditions and Refund Policy; and I understand it is my
                    responsibility to do due diligence on any investor I meet
                    via this platform.
                  </label>
                  {errors.agreeEnrPolicy && touched.agreeEnrPolicy ? (
                    <div className="mb-2 mt-4 text-[red]">
                      {errors.agreeEnrPolicy}
                    </div>
                  ) : null}
                </div>

                <button
                  className="w-full bg-primary-light py-3 mt-3 rounded "
                  type="submit"
                >
                  Submit
                </button>
              </Form>
            )}
          </Formik>
        ) : (
          <Formik
            initialValues={{
              password: "",
              email: "",
              fullName: "",
              pick: "investor",
              agreeInvOne: false,
              agreeInvTwo: false,
            }}
            validationSchema={SignupSchemaTwo}
            onSubmit={(values) => {
              // same shape as initial values
              console.log(values)
            }}
          >
            {({ errors, touched }) => (
              <Form className="flex flex-col w-full">
                <Input
                  placeholder="Your Full Name..."
                  name="fullName"
                  type="text"
                  error={touched.fullName && errors.fullName}
                  touched={touched.fullName}
                />
                <Input
                  placeholder="Your Email Address..."
                  name="email"
                  type="email"
                  error={touched.email && errors.email}
                  touched={touched.email}
                />

                <Input
                  placeholder="Your Password..."
                  name="password"
                  type="password"
                  error={touched.password && errors.password}
                  touched={touched.password}
                />

                <div className="flex-col py-5 gap-5">
                  <label className="flex gap-x-2 text-[14px] opacity-80 ">
                    <Field type="checkbox" name="agreeInvOne" />I agree to the
                    website&apos;s Privacy Policy & Terms and Conditions.
                  </label>
                  {errors.agreeInvOne && touched.agreeInvOne ? (
                    <div className="mb-4 mt-4 text-[red]">
                      {errors.agreeInvOne}
                    </div>
                  ) : null}

                  <label className="flex gap-x-2 text-[14px] opacity-80 ">
                    <Field type="checkbox" name="agreeInvTwo" />I certify that I
                    am an accredited investor.
                  </label>
                  {errors.agreeInvTwo && touched.agreeInvTwo ? (
                    <div className="mb-2 mt-4 text-[red]">
                      {errors.agreeInvTwo}
                    </div>
                  ) : null}
                </div>

                <button
                  className="w-full bg-primary-light py-3 mt-3 rounded "
                  type="submit"
                >
                  Submit
                </button>
              </Form>
            )}
          </Formik>
        )}
      </div>
      <div className="flex mt-3 text-[14px] items-center w-[380px] md:w-[450px] pb-[50px] justify-between">
        <p className="text-primary-light">
          Already have an account?
          <span
            onClick={() => router.push("/login")}
            className="cursor-pointer hover:underline "
          >
            {"   "} Login
          </span>
        </p>
      </div>
    </div>
  )
}

export default Signup
