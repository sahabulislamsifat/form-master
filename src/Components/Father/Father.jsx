import Brother from "./Brother";
import MySelf from "./MySelf/MySelf";
import Sister from "./Sister";

const Father = ({ assets }) => {
  return (
    <div>
      <h3>Father</h3>
      <section className="flex">
        <MySelf assets={assets}></MySelf>
        <Brother></Brother>
        <Sister></Sister>
      </section>
    </div>
  );
};

export default Father;
