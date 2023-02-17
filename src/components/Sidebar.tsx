import { Section, Field } from "@/pages/Data/type";
import { useState } from "react";
import Slider from "@mui/material/Slider";
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

const SectionComponent = ({ field }: { field: Field }) => {
  return (
    <div>
      <div className="text-xl font-semibold underline">
        {field.heading.name}
      </div>
      <div className="flex flex-col gap-2 mt-2">
        {field.options.map((option) => {
          if (option.type === "boolean") {
            return (
              <div className="flex justify-between gap-10" key={option.id}>
                <div>{option.name}</div>{" "}
                <div>
                  <input type="checkbox" className="w-5 h-5 accent-teal-600 " />
                </div>
              </div>
            );
          } else if (option.type === "pricerange") {
            return (
              <div className="flex flex-col gap-2" key={option.id}>
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

export const SideBar = ({ fields }: { fields: Section["fields"] }) => {
  return (
    <aside className="  rounded-lg bg-white border-teal-600 border-2 p-5 flex gap-5 flex-col ">
      {fields.map((field, index) => {
        return <SectionComponent key={index} field={field} />;
      })}
    </aside>
  );
};
