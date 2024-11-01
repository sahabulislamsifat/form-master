import Cousin from "./Cousin/Cousin";

const Uncle = ({ assets }) => {
  return (
    <div>
      <h3>Uncle</h3>
      <section className="flex">
        <Cousin assets={assets} name={"Rafsan"}>
          {" "}
        </Cousin>
        <Cousin name={"Sohana"}></Cousin>
      </section>
    </div>
  );
};

export default Uncle;
