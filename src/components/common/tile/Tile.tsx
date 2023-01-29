type TileVariantType =
  | "default"
  | "clickable"
  | "selectable"
  | "expandable"
  | "radio";

const Tile = () => {
  return (
    <div className="Tile">
      <p className="fs-05 ff-medium">Rendered Tile</p>
    </div>
  );
};

export default Tile;
