import React from 'react'
import {Field} from 'formik'

const Input = ({error, type, placeholder, name, touched}) => {
    // console.log(error)
  return (
    <>
      <Field
        name={name}
        placeholder={placeholder}
        type={type}
        className={`border-2  border-opacity-30 ${
          error ? "border-[red]" : "border-[#333]"
        }  rounded px-[18px] py-[8px] outline-none mb-5 ${
          error && "mb-0"
        } w-full`}
      />
      {error && touched ? <div className="mb-2 text-[red]">{error}</div> : null}
    </>
  )
}

export default Input