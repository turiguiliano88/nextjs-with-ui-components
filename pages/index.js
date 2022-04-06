import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Button from "../components/Button";
import { Input, InputLabel, InputText, InputIcon } from "../components/Input";
import { Card, CardContent, CardTitle } from "../components/Card";
import { Check, CheckLabel, CheckRadio } from "../components/Check";
import { EyeIcon } from "@heroicons/react/solid";
import { useState } from "react";

export default function Home() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="w-6/12 bg-gray-400">
      <Card>
        {/* <Card.Title>Card</Card.Title>
        <Card.Content>content</Card.Content> */}
        <CardTitle>Log In</CardTitle>
        <CardContent>
          <Input label="Email">
            {/* <InputLabel>Email</InputLabel> */}
            <InputText onChange={(event) => setEmail(event.target.value)} />
          </Input>
          <Input label="Password">
            {/* <InputLabel>Password</InputLabel> */}
            <InputText onChange={(event) => setPassword(event.target.value)} />
            <InputIcon>
              <EyeIcon className="w-4 h-4 text-gray-400" />
            </InputIcon>
          </Input>
          <div className="mb-md">
            <Check label="Remember me" />
          </div>
          <Button>Login</Button>
        </CardContent>
      </Card>
    </div>
  );
}
