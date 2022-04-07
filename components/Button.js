export default function Button(props) {
  let styleColor;
  switch (props.type) {
    case "neutral":
      styleColor = "bg-gray-200 text-gray-900 hover:ring-gray-300";
      break;
    case "secondary":
      styleColor = "bg-secondary text-white  hover:ring-secondary/40";
      break;
    case "transparent":
      styleColor = "bg-transparent text-gray-900";
      break;
    default:
      styleColor = "bg-primary text-white hover:ring-primary/40";
      break;
  }

  let styleSize;
  switch (props.size) {
    case "small":
      styleSize = "py-xxs px-sm";
      break;

    default:
      styleSize = "py-xs px-md";
      break;
  }

  return (
    <button
      onClick={props.onClick}
      className={`${styleColor} ${styleSize} transition flex-initial rounded-lg hover:ring-2 hover:opacity-90`}
    >
      {props.children}
    </button>
  );
}
