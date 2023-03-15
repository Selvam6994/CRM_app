import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Formik,useFormik } from "formik";
import { useNavigate } from "react-router-dom";

function Signup() {
    const navigate = useNavigate();
  const [formState, setFormState] = useState("primary");
  const { values, handleChange, handleSubmit } = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    onSubmit: async (values) => {
      const postData = await fetch("http://localhost:4000/CRM/signUpManager", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(values),
      });
      if (postData.status == 401) {
        setFormState("warning");
      } else {
        const result = await postData.json();
        console.log(result);
        navigate("/");
      }
    },
  });

  return (
    <form onSubmit={handleSubmit} className="signUpPage">
      <TextField
        name="name"
        onChange={handleChange}
        id="standard-basic"
        label="Name"
        variant="standard"
        type="text"
      />
      <TextField
        name="email"
        onChange={handleChange}
        id="standard-basic"
        label="Email"
        variant="standard"
        type="email"
      />
      <TextField
        id="standard-basic"
        label="Enter New Password"
        variant="standard"
      />
      <TextField
        name="password"
        onChange={handleChange}
        id="standard-basic"
        label="Confirm Password"
        variant="standard"
        type="password"
      />
      <Button color={formState} type="submit" variant="contained">
       {formState=="primary"?"Submit":"Retry"}
      </Button>

      {formState == "warning" ? <h3>Invalid Credentials</h3> : ""}
    </form>
  );
}

export default Signup;
