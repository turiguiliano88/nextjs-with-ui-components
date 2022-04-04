import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Button from "../components/Button";
import { Input, InputLabel, InputText } from "../components/Input";
import { Card, CardContent, CardTitle } from "../components/Card";
import { useState } from "react";

export default function Home() {
  const [input, setInput] = useState("");
  return (
    <div>
      <Card>
        {/* <Card.Title>Card</Card.Title>
        <Card.Content>content</Card.Content> */}
        <CardTitle>Card</CardTitle>
        <CardContent>
          <Input>
            <InputLabel>Name</InputLabel>
            <InputText onChange={(event) => setInput(event.target.value)} />
          </Input>
          {input}

          <Button>Home</Button>
        </CardContent>
      </Card>
    </div>
  );
}
