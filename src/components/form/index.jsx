// import react from "react";
import { useFormik } from "formik"
import * as yup from 'yup';
import "./index.css"
// import { validateYupSchema } from "formik/dist";
// import {
//     ArraySchema, BaseSchema, BooleanSchema, DateSchema, MixedSchema, NumberSchema, ObjectSchema, StringSchema, ValidationError, addMethod, array, bool, boolean, date, isSchema, lazy, mixed, number, object, reach, ref, setLocale, string } from 'yup';



let ValidationSchema = () => {
    yup.object({

        fullName: yup
            .string("Please Enter Your Name ")
            .required("Required")
            .min(4, "Enter atleast 4 letters")
            .max(20, "More than 20 letters are not allowed "),

        email: yup
            .string("Please enter your Email")
            .required("Email is required")
            .email("Please enter a valid email"),

        password: yup
            .string("Please enter your Password")
            .required("Password is required")
            .min(8, "Minimum 8 characters"),

        age: yup
            .number("Please Enter Your age in number")
            .required("Required")
            .positive("Please Enter a valid age")
            .integer("Please Enter a valid age"),

        gender: yup.required("Required"),

        websiteLink: yup
            .required("Required")
            .url("Please enter a valid URL")
            .string("Enter you website URL ")
    })
}



let FormDisplay = () => {

    const formik = useFormik({
        intialValues: {

            fullName: "",
            email: "",
            password: "",
            age: "",
            Gender: "",
            websiteLink: "",
            male: "",
            female: "",
            others: ""

        },
        validationSchema: ValidationSchema,

        onSubmit: (values) => {
            console.log("Values : ", values);
        }
    });

    return (

        <div>
            <form onSubmit={formik.handleSubmit}>

                <input type="text"
                    label="Full Name"
                    placeholder="Enter your full name : "
                    value={formik.value.fullName}
                    onChange={formik.handleChange}
                />

                <input type="email"
                    label="Email"
                    placeholder="Enter your email"
                    value={formik.value.email}
                    onChange={formik.handleChange}
                />

                <input type="password"
                    label="Password"
                    placeholder="Enter your password :"
                    value={formik.value.password}
                    onChange={formik.handleChange}
                />

                <input type="number"
                    label="Age"
                    placeholder=" Enter your Age "
                    value={formik.value.age}
                    onChange={formik.handleChange}
                />

                <div>
                    <p> Gender : </p>

                    <input
                        type="checkbox"
                        label="Male"
                        value={formik.value.male}
                    />

                    <input
                        type="checkbox"
                        label="Female"
                        value={formik.value.female}
                    />

                    <input
                        type="checkbox"
                        label="Others"
                        value={formik.value.others}
                    />

                </div>

                {/* <input type="gender"
                    label="Gender"
                    value={formik.value.fullName}
                    onChange={formik.handleChange}
                /> */}

                <input type="url"
                    label="website URL"
                    value={formik.value.websiteLink}
                    placeholder="Enter your Website URl"
                />

            </form>

        </div>
    );

};


export default FormDisplay;