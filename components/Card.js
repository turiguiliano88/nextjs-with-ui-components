export const Card = (props) => {
  return (
    <div className="rounded-md p-sm bg-gray-50">
      {/* <Card.Title /> */}
      {props.children}
    </div>
  );
};

export const CardContent = (props) => {
  return <div className="flex flex-col">{props.children}</div>;
};

export const CardTitle = (props) => {
  return <div className="text-lg">{props.children}</div>;
};
