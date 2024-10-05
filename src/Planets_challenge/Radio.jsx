import * as React from "react";
import Radios from "@mui/material/Radio";
import FormControlLabel from "@mui/material/FormControlLabel";
export default function Radio() {
  const [selectedValue, setSelectedValue] = React.useState("a");
  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };
  return (
    <div>
      {" "}
      <FormControlLabel
        control={
          <Radios
            checked={selectedValue === "a"}
            onChange={handleChange}
            value="a"
            name="radio-buttons"
          />
        }
        label="Option A"
        sx={{ color: "beige" }}
      />
      <FormControlLabel
        control={
          <Radios
            checked={selectedValue === "b"}
            onChange={handleChange}
            value="b"
            name="radio-buttons"
          />
        }
        label="Option B"
        sx={{ color: "beige" }}
      />
      <FormControlLabel
        control={
          <Radios
            checked={selectedValue === "c"}
            onChange={handleChange}
            value="c"
            name="radio-buttons"
          />
        }
        label="option c"
        sx={{ color: "beige" }}
      />
      <FormControlLabel
        control={
          <Radios
            checked={selectedValue === "d"}
            onChange={handleChange}
            value="d"
            name="radio-buttons"
          />
        }
        label="Option D"
        sx={{ color: "beige" }}
      />
    </div>
  );
}
