import * as React from "react";
import Radios from "@mui/material/Radio";
import FormControlLabel from "@mui/material/FormControlLabel";

export default function Radio() {
  const [selectedValue, setSelectedValue] = React.useState("a");

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      <FormControlLabel
        control={
          <Radios
            checked={selectedValue === "a"}
            onChange={handleChange}
            value="a"
            name="radio-buttons"
          />
        }
        label="3 million years"
        sx={{ color: "beige" }}
      />
      <FormControlLabel
        control={
          <Radios
            checked={selectedValue === "b"}
            onChange={handleChange}
            value="1 million years"
            name="radio-buttons"
          />
        }
        label="7 million years"
        sx={{ color: "beige" }}
      />
      <FormControlLabel
        control={
          <Radios
            checked={selectedValue === "c"}
            onChange={handleChange}
            value="8 million years"
            name="radio-buttons"
          />
        }
        label="5 million years"
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
        label="8 million years"
        sx={{ color: "beige" }}
      />
    </div>
  );
}