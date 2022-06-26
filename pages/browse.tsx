import React from "react";
import { Modal } from "../components/Modal";
import Head from 'next/head'

interface browseProps {}

export const browse: React.FC<browseProps> = ({}) => {
  return <>
  <Head>
    <title>Home - Netflix</title>
  </Head>
  <Modal />
  </>;
};

export default browse;
