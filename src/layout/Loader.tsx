export type TypeLoaderProps = {
  type?: "spinning";
  name?: "App";
};

const Loader = ({ type = "spinning", name = "App" }: TypeLoaderProps) => {
  return (
    <div>
      <h1>Loading {name}...</h1>
      <p>Loader Type: {type}</p>
    </div>
  );
};
export default Loader;
