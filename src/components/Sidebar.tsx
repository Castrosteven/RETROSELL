import { useState } from "react";
import Slider from "@mui/material/Slider";
import { Section } from "../__generated__/graphql";
function valuetext(value: number) {
  return `$ ${value}`;
}

const PriceRangeSlider = () => {
  const [value, setValue] = useState<number[]>([20, 500]);

  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);
  };
  return (
    <div>
      <Slider
        getAriaLabel={() => "Temperature range"}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        max={500}
        getAriaValueText={valuetext}
        sx={{
          color: "#0d9488",
        }}
      />
      <div>
        {valuetext(value[0])} - {valuetext(value[1])}
      </div>
    </div>
  );
};

const SectionComponent = ({ field }: { field: Section }) => {
  return (
    <div>
      <div className="text-xl font-semibold underline">{field.name}</div>
      <div className="flex flex-col gap-2 mt-2">
        {field.fields.map((option) => {
          if (option.type === "BOOLEAN") {
            return (
              <div className="flex justify-between gap-10" key={option.name}>
                <div>{option.name}</div>{" "}
                <div>
                  <input type="checkbox" className="w-5 h-5 accent-teal-600 " />
                </div>
              </div>
            );
          } else if (option.type === "PRICERANGE") {
            return (
              <div className="flex flex-col gap-2" key={option.name}>
                <div>{option.name}</div>
                <div>
                  <PriceRangeSlider />
                </div>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export const SideBar = ({ sections }: { sections: Section[] }) => {
  return (
    <aside className="  rounded-lg bg-white border-teal-600 border-2 p-5 flex gap-5 flex-col ">
      {sections.map((field, index) => {
        return <SectionComponent key={index} field={field} />;
      })}
    </aside>
  );
};
