import { useState } from "react";

const Section = ({ titel, discription, isvisible, setVisble }) => {
  return (
    <div className="border border-black p-2 m-2">
      <h3 className="font-semibold">{titel}</h3>

      <button onClick={() => setVisble(true)}>
        {isvisible ? "Show" : "Hide"}
      </button>

      {isvisible && <p>{discription}</p>}
    </div>
  );
};

const Instamart = () => {
  const [sectionConfig, setsectionConfig] = useState("about");
  return (
    <>
      <div>
        <Section
          titel={"About Instamart"}
          discription={
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis, veritatis nisi soluta nobis totam expedita necessitatibus tenetur corrupti deserunt sed dolor? Odit reprehenderit temporibus veritatis fugiat delectus expedita."
          }
          isvisible={sectionConfig === "about"}
          setVisble={() => setsectionConfig("about")}
        />
      </div>
      <div>
        <Section
          titel={"Team Instamart"}
          discription={
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis, veritatis nisi soluta nobis totam expedita necessitatibus tenetur corrupti deserunt sed dolor? Odit reprehenderit temporibus veritatis fugiat delectus expedita."
          }
          isvisible={sectionConfig === "team"}
          setVisble={() => setsectionConfig("team")}
        />
      </div>
      <div>
        <Section
          titel={"Carer Instamart"}
          discription={
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis, veritatis nisi soluta nobis totam expedita necessitatibus tenetur corrupti deserunt sed dolors Odit reprehenderit temporibus veritatis fugiat delectus expedita."
          }
          isvisible={sectionConfig === "Carer"}
          setVisble={() => setsectionConfig("Carer")}
        />
      </div>
    </>
  );
};

export default Instamart;
