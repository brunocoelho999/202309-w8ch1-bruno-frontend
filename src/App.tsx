import React, { useState } from "react";
import "./App.css";

function App() {
  const [loginFormData, setLogininFormData] = useState({
    email: "",
    passwd: "",
  });
  const [signupFormData, setSignupFormData] = useState({
    email: "",
    passwd: "",
    image: "",
  });
  const [token, setToken] = useState("");

  const handleLoginSubmit = async () => {
    const apiURL = "http://localhost:2700/users/login"; // this is the url to the backend /

    try {
      const data = await fetch(apiURL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginFormData),
      });

      if (!data.ok) {
        throw new Error("Something went wrong");
      }

      const response = await data.json();
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSignupSubmit = async () => {
    const apiURL = "http://localhost:2700/users/register"; // this is the url to the backend /

    try {
      const formData = new FormData(); // Usar FormData para manejar archivos
      formData.append("email", signupFormData.email);
      formData.append("passwd", signupFormData.passwd);
      formData.append("image", signupFormData.image);

      const data = await fetch(apiURL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginFormData),
      });

      if (!data.ok) {
        throw new Error("Something went wrong");
      }

      const response = await data.json();
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  // const handleImageChange = (event) => {
  //   const imageFile = event.target.files[0];
  //   setSignupFormData({
  //     ...signupFormData,
  //     image: imageFile,
  //   });
  // };

  return (
    <div className="App">
      <p className="big-text">Login</p>

      <p>User:</p>
      <input
        type="text"
        onChange={(event) =>
          setLogininFormData({ ...loginFormData, email: event.target.value })
        }
      />

      <p>Password:</p>
      <input
        type="password"
        onChange={(event) =>
          setLogininFormData({ ...loginFormData, passwd: event.target.value })
        }
      />

      <button onClick={() => handleLoginSubmit()}>Log In</button>

      <p className="big-text">Sign Up</p>

      <p>User:</p>
      <input
        type="text"
        onChange={(event) =>
          setSignupFormData({ ...signupFormData, email: event.target.value })
        }
      />

      <p>Password:</p>
      <input
        type="text"
        onChange={(event) =>
          setSignupFormData({ ...signupFormData, passwd: event.target.value })
        }
      />
      {/* 
      <p>Image:</p>
      // <input type="file" accept="image/*" onChange={handleImageChange} /> */}

      <button onClick={() => handleSignupSubmit()}>Sign Up</button>
      <input type="file" />
    </div>
  );
}

export default App;
