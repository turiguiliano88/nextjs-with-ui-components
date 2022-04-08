import Button from "../Button";
import Input from "../Input";
import { Card, CardContent, CardTitle } from "../Card";
import Check from "../Check";
import Link from "next/link";
import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        alert("submit");
      }}
    >
      <Card>
        <CardTitle>Log In</CardTitle>
        <CardContent>
          <Input
            label="Email*"
            onChange={(event) => setEmail(event.target.value)}
            required
            type="email"
          />
          <Input
            label="Password*"
            onChange={(event) => setPassword(event.target.value)}
            required
            type="password"
          />
          <div className="mb-md">
            <Check label="Remember me" />
          </div>
          <div className="self-start">
            <Button submit>Login</Button>
          </div>
          <hr className="my-sm text-gray-200" />
          <div className="text-gray-500">
            <span>Don't have an account? </span>
            <Link href="/signup">
              <a className="text-primary">Sign up</a>
            </Link>
          </div>
        </CardContent>
      </Card>
    </form>
  );
}
