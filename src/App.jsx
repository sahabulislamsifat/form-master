import "./App.css";
import GrandFather from "./Components/GrandFather/GrandFather";
// import ReusableForm from "./Components/ReusableForm/ReusableForm";
// import HookForm from "./Components/HookForm/HookForm";
// import RefForm from "./Components/refForm/RefForm";
// import SimpleForm from "./Components/simpleForm/SimpleForm";
// import StateFulForm from "./Components/stateFulForm/StateFulForm";

function App() {
  // const handleSignUpSubmit = (data) => {
  //   console.log("sing up ", data);
  // };
  // const handleProfileUpdate = (data) => {
  //   console.log("update profile", data);
  // };
  return (
    <>
      <h2>Form Master By React</h2>
      {/* <SimpleForm></SimpleForm> */}
      {/* <StateFulForm></StateFulForm> */}
      {/* <RefForm></RefForm> */}
      {/* <HookForm></HookForm> */}
      {/* <ReusableForm
        formTitle={"Sign UP"}
        handleSubmit={handleSignUpSubmit}
      ></ReusableForm>
      <ReusableForm
        formTitle={"Profile Update"}
        handleSubmit={handleProfileUpdate}
        submitBtnText="Update"
        ></ReusableForm> */}
      <GrandFather></GrandFather>
    </>
  );
}

export default App;
