import { SelectorIcon } from "@heroicons/react/solid";

export default function Select(props) {
  return (
    <div className="text-zinc-800 mb-sm flex flex-col">
      {props.label && <div className="mb-xxs">{props.label}</div>}
      <div className="flex items-center rounded-sm grow px-sm py-xs border-gray-200 border-2 focus-within:border-primary">
        <select
          onChange={props.onChange}
          defaultValue={props.selected}
          className="appearance-none w-full bg-transparent focus:outline-none"
        >
          {props.options &&
            props.options.map((o) => (
              <option key={o.name} value={o.value}>
                {o.name}
              </option>
            ))}
        </select>
        <SelectorIcon className="w-3 h-3 text-gray-400" />
      </div>
    </div>
  );
}
