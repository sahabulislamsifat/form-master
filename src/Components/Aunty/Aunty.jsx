import Cousin from "../Uncle/Cousin/Cousin";
import { MoneyContext } from "../GrandFather/GrandFather";
import { useContext } from "react";
const Aunty = () => {
  const [money, setMoney] = useContext(MoneyContext);
  return (
    <div>
      <h3>Aunty</h3>
      <section className="flex">
        <Cousin name={"Rokib "}></Cousin>
        <Cousin name={"Tayebaa"}></Cousin>
      </section>
      <p>Money: {money}</p>
      <button onClick={() => setMoney(money + 1000)}>Add 1000 tk</button>
    </div>
  );
};

export default Aunty;
