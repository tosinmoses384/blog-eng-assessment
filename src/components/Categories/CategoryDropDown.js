import React, { useEffect } from "react";
import Select from "react-select";

// const options = [
//   { value: "chocolate", label: "Chocolate" },
//   { value: "strawberry", label: "Strawberry" },
//   { value: "vanilla", label: "Vanilla" },
// ];

const CategoryDropDown = (props) => {
  //dispatch action

  useEffect(() => {}, []);

  //select categories
  // const categoryList = [];
  const loading = false;
  // const appErr = null;
  // const serverErr = null;
  // const appErr = 'this is app err';
  // const serverErr = 'this is server error';
  // const isCreated = true;
  // const isCreated = false;

  // const allCategories = categoryList?.map(category => {
  //   return {
  //     label: category?.title,
  //     value: category?._id,
  //   };
  // });

  const allCategories = [
    {
      label: "label 1",
      value: "value 1",
    },
    {
      label: "label 2",
      value: "value 2",
    },
    {
      label: "label 3",
      value: "value 3",
    },
    {
      label: "label 4",
      value: "value 4",
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
