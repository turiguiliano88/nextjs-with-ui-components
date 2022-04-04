export default function Button(props) {
  return (
    <button className="bg-primary py-sm px-lg rounded-lg text-white">
      {props.children}
    </button>
  );
}
