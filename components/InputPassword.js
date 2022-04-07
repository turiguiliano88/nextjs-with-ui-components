import { EyeIcon, EyeOffIcon } from "@heroicons/react/solid";
import { useState } from "react";

export default function InputPassword(props) {
  const [visible, setVisible] = useState(false);
  return (
    <div className="text-zinc-800 mb-sm flex flex-col">
      {props.label && <div className="mb-xxs">{props.label}</div>}
      <div className="flex items-center rounded-sm grow px-sm py-xs border-gray-200 border-2 focus-within:outline-none focus-within:border-primary">
        <input
          className="p-0 m-0 grow border-none focus:outline-none focus:border-primary"
          type={visible ? "text" : "password"}
          onChange={props.onChange}
          placeholder="Text"
        />
        <div onClick={() => setVisible(!visible)}>
          {visible && <EyeIcon className="w-4 h-4 text-gray-400" />}
          {!visible && <EyeOffIcon className="w-4 h-4 text-gray-400" />}
        </div>
      </div>
    </div>
  );
}
