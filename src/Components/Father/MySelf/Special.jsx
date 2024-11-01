import { useContext } from "react";
import { AssetContext } from "../../GrandFather/GrandFather";

const Special = ({ assets }) => {
  const gift = useContext(AssetContext);
  return (
    <div>
      <h3>Special</h3>
      <p>Has: {assets}</p>
      <p>also has: {gift}</p>
    </div>
  );
};

export default Special;
