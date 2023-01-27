import { Fragment } from "react";
import { USSTATEDATA } from "../../../utils/localization/locale-types";
import SelectWrapper from "./SelectWrapper";
import useSelectMenu from "./useSelectMenu";

const CountrySelect = () => {
  const { isOpen, options, handleIsOpen, handleUpdateSelected, selected } =
    useSelectMenu(USSTATEDATA);

  console.log(selected);

  return (
    <SelectWrapper title="Your State">
      <button className="button" onClick={handleIsOpen}>
        {selected.title === "" ? "Choose a state..." : selected.title}
      </button>

      {isOpen ? (
        <Fragment>
          {options.map(({ title, value }) => (
            <button
              key={value}
              value={value ?? "value"}
              onClick={() =>
                handleUpdateSelected({ title: title, value: value })
              }
            >
              {title}
            </button>
          ))}
        </Fragment>
      ) : null}
    </SelectWrapper>
  );
};

export default CountrySelect;
