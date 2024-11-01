import { useContext } from "react";
import { AssetContext } from "../../GrandFather/GrandFather";

const Friend = () => {
  const gift = useContext(AssetContext);
  return (
    <div>
      <h3>Friend</h3>
      <p>has also: {gift}</p>
    </div>
  );
};

export default Friend;
