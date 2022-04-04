export const Input = (props) => {
  return <div className="">{props.children}</div>;
};

export const InputLabel = (props) => {
  return <div className="mb-xs">{props.children}</div>;
};

export const InputText = ({ onChange }) => {
  return (
    <input
      className="rounded-sm p-sm bg-gray-100"
      type="text"
      onChange={onChange}
    />
  );
};
