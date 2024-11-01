import Cousin from "./Cousin/Cousin";

const Uncle = () => {
  return (
    <div>
      <h3>Uncle</h3>
      <section className="flex">
        <Cousin name={"Rafsan"}></Cousin>
        <Cousin name={"Sohana"}></Cousin>
      </section>
    </div>
  );
};

export default Uncle;
