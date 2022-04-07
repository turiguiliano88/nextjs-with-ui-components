import { EyeIcon, EyeOffIcon } from "@heroicons/react/solid";
import { useState } from "react";

export default function InputPassword(props) {
  const [visible, setVisible] = useState(false);
  return (
    <div className="text-gray-800 mb-xs flex flex-col">
      {props.label && <div className="mb-xxs">{props.label}</div>}
      <div className="flex items-center rounded-sm grow px-sm py-xs border-gray-200 border-2 focus-within:outline-none focus-within:border-primary">
        <input
          className="p-0 m-0 grow border-none focus:outline-none focus:border-primary"
          type={visible ? "text" : "password"}
          required={props.required}
          onChange={props.onChange}
          placeholder="***"
        />
        <div onClick={() => setVisible(!visible)}>
          {visible && <EyeIcon className="w-4 h-4 text-gray-600" />}
          {!visible && <EyeOffIcon className="w-4 h-4 text-gray-300" />}
        </div>
      </div>
    </div>
  );
}
