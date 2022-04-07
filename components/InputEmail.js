export default function InputEmail(props) {
  return (
    <div className="mb-xs flex flex-col">
      {props.label && <div className="mb-xxs">{props.label}</div>}
      <div className="flex items-center rounded-sm px-sm py-xs border-gray-200 border-2 focus-within:outline-none focus-within:border-primary">
        <input
          required={props.required}
          className="p-0 m-0 grow border-none focus:outline-none"
          type="email"
          onChange={props.onChange}
          placeholder={props.placeholder ? props.placeholder : "john@doe"}
        />
        {props.icon}
      </div>
    </div>
  );
}
