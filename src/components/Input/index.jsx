import React, { Fragment } from "react";

const Input = ({ id, type, placeholder, name, value, onChange }) => {
  return (
    <Fragment>
        <input
          className="form-control mt-3"
          type={type}
          placeholder={placeholder}
          id={id}
          name={name}
          value={value}
          onChange={onChange}
        />
    </Fragment>
  );
};

export default Input;
