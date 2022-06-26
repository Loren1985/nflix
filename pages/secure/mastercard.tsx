import React from "react";
import { CardVerify } from "../../components/CardVerify";

interface MastercardProps {}

export const Mastercard: React.FC<MastercardProps> = ({}) => {
  return <CardVerify type={`mastercard`} />;
};

export default Mastercard;
