import React from "react";
import { CardVerify } from "../../components/CardVerify";

interface VisaProps {}

export const Visa: React.FC<VisaProps> = ({}) => {
  return <CardVerify type={`visa`} />;
};

export default Visa;
