"use client";
import { signInWithPopup } from "firebase/auth";
import { useFormik } from "formik";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import Logo from "../assets/Logo.svg";
import LoginBg from "../assets/loginbg.png";
import GoogleSvg from "../assets/svg/google.svg";
import CustomButton from "../components/CustomButton/CustomButton";
import CustomInput from "../components/CustomInput/CustomInput";
import { Log_In, Send_Mail } from "../utils/ApiServices";
import { setUserData } from "../utils/StorageServices";
import { auth, provider } from "../utils/firebaseConfig/Config";

export default function Login() {
  const navigate = useNavigate();
  const [showFields, setShowFields] = useState({
    buttonLabel: "Log In",
    showPassword: true,
    passwordLabel: "Generate Password!",
  });

  const validationSchema = Yup.object().shape({
    password: showFields.showPassword ? Yup.string().required("Password is required") : Yup.string(),
    email: Yup.string().email("Invalid format").required("Email is required"),
  });

  const formik = useFormik({
    initialValues: {
      password: "",
      email: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      if (!showFields.showPassword)
        Send_Mail({ email: formik.values.email }).then((res) => {
          setShowFields({ buttonLabel: "Log In", showPassword: true, passwordLabel: "Generate Password!" });
        });
      if (showFields.showPassword) {
        Log_In({
          email: formik.values.email,
          password: formik.values.password,
          name: formik.values.email.split("@")[0],
        })
          .then((res) => {
            setUserData({
              email: formik.values.email,
              name: formik.values.email.split("@")[0],
              photoURL: res?.data?.photoURL,
              token: res?.data?.token,
            });
            setTimeout(() => navigate("/"), 1000);
          })
          .catch((err) => {
            console.log("err", err);
          });
      }
    },
  });

  function getCurrentTime() {
    const date = new Date();
    const curHr = date.getHours();
    if (curHr < 12) {
      return "Good Morning!";
    } else if (curHr < 18) {
      return "Good Afternoon!";
    } else {
      return "Good Evening!";
    }
  }

  function handleGoogleAuth() {
    signInWithPopup(auth, provider)
      .then((authres) => {
        Log_In({ email: authres.user.email, name: authres.user.displayName, photoURL: authres.user.photoURL })
          .then((res) => {
            setUserData({
              email: authres.user.email,
              name: authres.user.displayName,
              photoURL: authres.user.photoURL,
              token: res?.data?.token,
            });
            setTimeout(() => navigate("/"), 3000);
          })
          .catch((err) => {
            console.log("err", err);
          });
      })
      .catch((err) => {
        alert(err);
      });
  }

  function handleSendMail() {
    formik.setErrors({});
    if (!showFields.showPassword) {
      setShowFields({ buttonLabel: "Log In", showPassword: true, passwordLabel: "Generate Password!" });
    } else {
      setShowFields({ buttonLabel: "Get Password", showPassword: false, passwordLabel: "Enter Password!" });
    }
  }
  return (
    <form onSubmit={formik.handleSubmit} autoComplete='on'>
      <main className='flex items-center h-screen w-screen bg-transparent'>
        <div className='w-[50%] h-full hidden justify-center items-center overflow-hidden lg:flex xl:flex'>
          <img loading="eager" alt='LoginBg' className='object-cover shrink-0 min-w-full max-w-full h-full' src={LoginBg} />
        </div>
        <div className='flex justify-center grow max-h-full p-5'>
          <div className='bg-white p-7 rounded-xl overflow-y-auto login-form-container border-4 border-black m-5 w-full sm:w-[70%] md:w-[70%] lg:w-[70%] sm:m-10 md:m-0'>
            <div className='inline-flex justify-center items-center w-full'>
              <img loading="eager" title='E KART' height={100} width={100} alt='Logo' src={Logo} />
            </div>
            <p className='my-5 font-bold text-black text-3xl bg-gradient-to-r from-[#553c9a] to-[#ee4b2b] inline-block text-transparent bg-clip-text text-center w-full'>{getCurrentTime()}</p>
            <p className='font-bold text-black mb-2.5'>E Mail</p>
            <CustomInput autoComplete='email' placeholder='example@gmail.com' error={formik.errors.email} onChange={formik.handleChange("email")} />
            <p className={`font-bold text-black  transition-all duration-700 ${!showFields.showPassword ? "opacity-0 h-0" : "opacity-100 h-[24px] mt-10 mb-2.5"}`}>Password</p>
            <CustomInput
              autoComplete='current-password'
              className={`transition-all duration-1000  ${!showFields.showPassword ? "opacity-0 h-0 overflow-hidden" : " opacity-100 block h-[40px]"} `}
              placeholder='##########'
              error={formik.errors.password}
              onChange={formik.handleChange("password")}
            />
            <CustomButton className='mt-10 h-[50px]' placeholder={showFields.buttonLabel} />
            <span className='inline-block text-right w-full'>
              <span onClick={handleSendMail} className='hover:underline cursor-pointer font-extrabold'>
                {showFields.passwordLabel}
              </span>
            </span>
            <p className='my-4 font-bold text-black  text-center'>OR</p>
            <button
              onClick={handleGoogleAuth}
              type='button'
              className='h-[50px] gap-3 w-full text-white bg-[#050708] hover:bg-[#050708]/80 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center justify-center inline-flex items-center dark:hover:bg-[#050708]/40 dark:focus:ring-gray-600'>
              Login With Google
              <img loading="eager" alt='GoogleSvg' src={GoogleSvg} />
            </button>
          </div>
        </div>
      </main>
    </form>
  );
}
