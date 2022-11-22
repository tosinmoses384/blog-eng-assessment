import React, { useEffect } from "react";
import Select from "react-select";

const CategoryDropDown = (props) => {
  useEffect(() => {}, []);

  const loading = false;

  const allCategories = [
    {
      label: "Health",
      value: "Health",
    },
    {
      label: "Housing",
      value: "Housing",
    },
    {
      label: "Technology",
      value: "Technology",
    },
    {
      label: "Business",
      value: "Business",
    },
  ];

  //handleChange
  const handleChange = (value) => {
    props.onChange("category", value);
  };
  //handleBlur
  const handleBlur = () => {
    props.onBlur("category", true);
  };
  return (
    <div style={{ margin: "1rem 0" }}>
      {loading ? (
        <h3 className="text-base text-green-600">
          Product categories list are loading please wait...
        </h3>
      ) : (
        <Select
          onChange={handleChange}
          onBlur={handleBlur}
          id="category"
          options={allCategories}
          value={props?.value?.label}
        />
      )}
      {/* Display */}
      {props?.error && (
        <div style={{ color: "red", marginTop: ".5rem" }}>{props?.error}</div>
      )}
    </div>
  );
};

export default CategoryDropDown;
