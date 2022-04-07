import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Login from "../components/forms/Login";
import SignUp from "../components/forms/SignUp";
import { useState } from "react";
import Select from "../components/Select";
import Toggle from "../components/Toggle";
import Button from "../components/Button";
import {
  Modal,
  ModalAction,
  ModalContent,
  ModalTitle,
} from "../components/Modal";

export default function Home() {
  const options = [1, 3, 4, 5, 7];
  const [country, setCountry] = useState(1);
  const [confirm, setConfirm] = useState(false);
  const [showModal, setShowModal] = useState(false);
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  return (
    <div className="flex w-full">
      <div className="w-6/12 p-3">
        <Login />
        {/* <Toggle enabled={confirm} onChange={() => setConfirm(!confirm)} /> */}
        {/* <Button onClick={() => setShowModal(!showModal)}>show Modal</Button> */}
      </div>
      <div className="w-6/12 p-3">
        <SignUp />
      </div>
    </div>
  );
}
