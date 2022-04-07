import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Login from "../components/forms/Login";
import { useState } from "react";
import Button from "../components/Button";
import { Sidebar, SidebarAction, SidebarContent } from "../components/SideBar";

export default function Home() {
  const [showSidebar, setShowSidebar] = useState(false);
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  return (
    <div className="">
      <div className="flex justify-center">
        <div className="w-6/12 p-3">
          <Login />
          {/* <Toggle enabled={confirm} onChange={() => setConfirm(!confirm)} /> */}
          {/* <Button onClick={() => setShowModal(!showModal)}>show Modal</Button> */}
        </div>
      </div>
      {/* <div className="self-start">
        <Button onClick={() => setShowSidebar(!showSidebar)}>
          Show sidebar
        </Button>
      </div>
      <Sidebar enabled={showSidebar}>
        <SidebarContent>
          <p>This is sidebar content</p>
        </SidebarContent>
        <SidebarAction>
          <Button onClick={() => setShowSidebar(!showSidebar)}>Ok</Button>
        </SidebarAction>
      </Sidebar> */}
    </div>
  );
}
