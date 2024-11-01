import Friend from "../../Father/MySelf/Friend";
import Special from "../../Father/MySelf/Special";

const Cousin = ({ name, assets }) => {
  return (
    <div>
      <h3>Cousin</h3>
      <p>{name}</p>
      {assets && <Special assets={assets}></Special>}
      {name === "Tayebaa" && <Friend></Friend>}
    </div>
  );
};

export default Cousin;
