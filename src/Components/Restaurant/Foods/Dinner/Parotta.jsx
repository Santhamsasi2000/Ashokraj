import CommonCard from "../../../Common/Card/CommonCard";
import { ParottaData } from "../../Data/Dinner/ParottaData";

const Parotta = () => {
  const parotta = ParottaData.map((data) => (
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
        {parotta}
      </div>
    </>
  );
};

export default Parotta;
