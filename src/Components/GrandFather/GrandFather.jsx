import Aunty from "../Aunty/Aunty";
import Father from "../Father/Father";
import Uncle from "../Uncle/Uncle";
import "./GrandFather.css";

const GrandFather = () => {
  return (
    <div className="grandFather">
      <h2>GrandFather</h2>
      <section className="flex">
        <Father></Father>
        <Uncle></Uncle>
        <Aunty></Aunty>
      </section>
    </div>
  );
};

export default GrandFather;
