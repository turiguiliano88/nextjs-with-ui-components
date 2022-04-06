export const Card = (props) => {
  return (
    <div className="rounded-sm p-md bg-white">
      {/* <Card.Title /> */}
      {props.children}
    </div>
  );
};

export const CardContent = (props) => {
  return <div className="flex flex-col">{props.children}</div>;
};

export const CardTitle = (props) => {
  return <div className="text-4xl mb-lg font-semibold">{props.children}</div>;
};
