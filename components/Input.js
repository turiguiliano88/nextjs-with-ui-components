export const Input = (props) => {
  return (
    <div className="text-zinc-800 mb-sm flex flex-col">
      {props.label && <div className="mb-xxs">{props.label}</div>}
      <div className="flex items-center rounded-sm grow px-sm py-xs border-gray-200 border-2 focus-within:outline-none focus-within:border-primary">
        {props.children}
      </div>
    </div>
  );
};

export const InputLabel = (props) => {
  return <div className="mb-xxs">{props.children}</div>;
};

export const InputText = ({ onChange }) => {
  return (
    <input
      className="p-0 m-0 grow border-none focus:outline-none focus:border-primary"
      type="text"
      onChange={onChange}
      placeholder="Text"
    />
  );
};

export const InputIcon = ({ onClick, children }) => {
  return <div onClick={onClick}>{children}</div>;
};
