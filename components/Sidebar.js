export const Sidebar = ({ children, enabled }) => {
  return (
    <>
      <div
        className={`${
          !enabled && "hidden"
        } fixed top-0 left-0 right-0 w-full h-full bg-gray-800/80 flex p-3`}
      ></div>
      <div
        className={`${
          enabled ? "translate-x-0" : "translate-x-[640px]"
        } fixed top-0 right-0 h-full transition bg-white z-10 p-md flex flex-col w-[640px]`}
      >
        {children}
      </div>
    </>
  );
};

export const SidebarContent = ({ children }) => {
  return <div className="">{children}</div>;
};

export const SidebarAction = ({ children }) => {
  return <div>{children}</div>;
};
