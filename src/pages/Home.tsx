import { useState } from "react";
import { $FONTVARIANT, $THEMEMODE } from "../app/types/data.types";

const DisplaySurfaces = () => {
  const surfaceKeys = [
    { title: "Primary Surface 01", value: "pri-surface-01" },
    { title: "Primary Surface 02", value: "pri-surface-02" },
    { title: "Primary Surface 03", value: "pri-surface-03" },
    { title: "Primary Surface 04", value: "pri-surface-04" },
    { title: "Secondary Surface 01", value: "sec-surface-01" },
    { title: "Secondary Surface 02", value: "sec-surface-02" },
    { title: "Secondary Surface 03", value: "sec-surface-03" },
    { title: "Secondary Surface 04", value: "sec-surface-04" },
  ];

  return (
    <div>
      <h3 data-font-type={$FONTVARIANT.subheadline1}>Theme Surfaces</h3>
      {surfaceKeys.map((surface) => (
        <div key={surface.value} className={`${surface.value} surface-swatch`}>
          <p data-font-type={$FONTVARIANT.overline1}>{surface.title}</p>
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
  const [thememode, thememodeSet] = useState($THEMEMODE.light);

  function handleThemeUpdate(value: $THEMEMODE) {
    thememodeSet(value);
  }

  return (
    <>
      <div>
        <DisplaySurfaces />
      </div>
    </>
  );
};
export default Home;
