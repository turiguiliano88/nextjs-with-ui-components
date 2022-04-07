export default function Button(props) {
  return (
    <button className="flex-initial bg-primary py-xs px-md rounded-lg text-white">
      {props.children}
    </button>
  );
}
