import { $FONTVARIANT } from "../app/types/data.types";

const DisplaySurfaces = () => {
  const surfaceKeys = [
    "p-surface-L0",
    "p-surface-L1",
    "p-surface-L2",
    "p-surface-L3",
    "p-surface-L4",
  ];

  return (
    <div className="surface-swatch">
      {surfaceKeys.map((key) => (
        <div key={key} className={key}>
          {key}
        </div>
      ))}
    </div>
  );
};

const DisplayTypography = () => {
  const typoKeys = [
    $FONTVARIANT.headline1,
    $FONTVARIANT.headline2,
    $FONTVARIANT.subheadline1,
    $FONTVARIANT.subheadline2,
    $FONTVARIANT.overline1,
    $FONTVARIANT.overline2,
    $FONTVARIANT.action1,
    $FONTVARIANT.action2,
    $FONTVARIANT.label1,
    $FONTVARIANT.label2,
    $FONTVARIANT.bodyL,
    $FONTVARIANT.body1,
    $FONTVARIANT.body2,
    $FONTVARIANT.caption1,
    $FONTVARIANT.caption2,
    $FONTVARIANT.footnote1,
    $FONTVARIANT.footnote2,
  ];

  return (
    <div className="surface_swatch-container">
      <h3 data-font-type={$FONTVARIANT.subheadline1}>Typography</h3>
      {typoKeys.map((font) => (
        <div key={font}>
          <p data-font-type={font}>{font}</p>
        </div>
      ))}
    </div>
  );
};

const Home = () => {
  return (
    <>
      <DisplaySurfaces />
    </>
  );
};
export default Home;
