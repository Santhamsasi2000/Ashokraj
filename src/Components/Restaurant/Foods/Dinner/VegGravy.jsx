import CommonCard from "../../../Common/Card/CommonCard";
import { VegGravyData } from "../../Data/Dinner/VegGravyData";

const VegGravy = () => {
  const vegVarieties = VegGravyData.map((data) => (
    <CommonCard
      key={data.id}
      image={data.image}
      name={data.name}
      desc={data.desc}
      number={data.number}
      which={data.which}
    />
  ));

  return (
    <>
      <div className="row gx-5 gy-5">
        {vegVarieties}
      </div>
    </>
  );
};

export default VegGravy;
