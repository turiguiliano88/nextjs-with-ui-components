import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Login from "../components/forms/Login";
import { useState } from "react";
import Select from "../components/Select";
import Toggle from "../components/Toggle";

export default function Home() {
  const options = [1, 3, 4, 5, 7];
  const [country, setCountry] = useState(1);
  const [confirm, setConfirm] = useState(false);
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  return (
    <div className="w-6/12">
      <Login />
      <Select
        label="Country"
        options={options}
        onChange={(event) => setCountry(event.target.value)}
      />
      <Toggle state={confirm} onChange={() => setConfirm(!confirm)} />
    </div>
  );
}
