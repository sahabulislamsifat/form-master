import { useContext } from "react";
import { MoneyContext } from "../GrandFather/GrandFather";

const Brother = () => {
  const [money] = useContext(MoneyContext);
  return (
    <div>
      <h3>Brother</h3>
      <p>GrandFather : {money}</p>
    </div>
  );
};

export default Brother;
