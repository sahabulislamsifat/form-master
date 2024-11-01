import Cousin from "../Uncle/Cousin/Cousin";

const Aunty = () => {
  return (
    <div>
      <h3>Aunty</h3>
      <section className="flex">
        <Cousin name={"Rokib "}></Cousin>
        <Cousin name={"Tayebaa"}></Cousin>
      </section>
    </div>
  );
};

export default Aunty;
