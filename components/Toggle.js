export default function Toggle({ enabled, onChange }) {
  return (
    <div
      className={`${
        enabled ? "bg-primary" : "bg-gray-400"
      } w-[64px] h-[32px] rounded-full hover`}
      onClick={onChange}
    >
      <div
        className={`${
          enabled
            ? "translate-x-5 border-primary"
            : "translate-x-0 border-gray-400"
        } transition rounded-full w-5 h-5 bg-white border-2`}
      ></div>
    </div>
  );
}
