import { useState } from "react";

const StateFulForm = () => {
  const [nameChange, setNameChange] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password.length <= 6) {
      setError("Password must be 6 character or longer.");
    } else {
      setError("");
      console.log(nameChange);
      console.log(email);
      console.log(password);
    }
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleChangeName = (e) => {
    setNameChange(e.target.value);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input onChange={handleChangeName} type="text" name="name" />
        <br />
        <input
          onChange={handleEmailChange}
          type="email"
          name="email"
          id=""
          required
        />
        <br />
        <input
          onChange={handleChangePassword}
          type="password"
          name="password"
        />
        <br />
        <button>Submit</button>
        {error && <p>{error}</p>}
      </form>
    </div>
  );
};

export default StateFulForm;
