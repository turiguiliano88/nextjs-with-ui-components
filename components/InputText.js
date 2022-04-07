export default function InputText(props) {
  return (
    <div className="text-gray-800 mb-xs flex flex-col">
      {props.label && <div className="mb-xxs">{props.label}</div>}
      <div className="flex items-center rounded-sm px-sm py-xs border-gray-200 border-2 focus-within:outline-none focus-within:border-primary">
        <input
          required={props.required}
          className="p-0 m-0 grow border-none focus:outline-none"
          type="text"
          onChange={props.onChange}
          placeholder={props.placeholder ? props.placeholder : "Text"}
        />
        {props.icon}
      </div>
    </div>
  );
}
