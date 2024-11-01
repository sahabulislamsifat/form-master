import useInputState from "./hooks/useInputState";

const HookForm = () => {
  //   const [name, handleNameChange] = useInputState("Sun Flower Hooked");
  const emailState = useInputState("rojoni@sojoni.com");

  const handleSubmit = (e) => {
    // console.log("form data", name);
    console.log("form data", emailState.value);

    e.preventDefault();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {/* <input
          value={name}
          onChange={handleNameChange}
          type="text"
          name="name"
        /> */}
        <br />
        <input {...emailState} type="email" name="email" id="" />
        <br />
        <input type="password" name="password" />
        <br />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default HookForm;
