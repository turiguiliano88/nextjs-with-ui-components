import Button from "../Button";
import InputText from "../InputText";
import InputPassword from "../InputPassword";
import { Card, CardContent, CardTitle } from "../Card";
import Check from "../Check";
import Link from "next/link";
import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <Card>
      <CardTitle>Log In</CardTitle>
      <CardContent>
        <InputText
          label="Email"
          onChange={(event) => setEmail(event.target.value)}
        />
        <InputPassword
          label="Password"
          onChange={(event) => setPassword(event.target.value)}
        />
        <div className="mb-md">
          <Check label="Remember me" />
        </div>
        <div className="self-start">
          <Button>Login</Button>
        </div>
        <hr className="my-sm text-gray-200" />
        <div className="">
          <span>Don't have an account? </span>
          <Link href="/signup">
            <a className="text-primary">Sign up</a>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
