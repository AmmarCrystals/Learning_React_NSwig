import { useState } from "react";

const Section = ({ titel, discription, isVisible, setIsVisible,setIsVisiblet }) => {
  return (
    <div className="border border-black p-2 m-2 ">
      <h2 className="font-bold text-2xl">{titel}</h2>

      {isVisible ? (
        <button onClick={() => setIsVisiblet()} className="border underline p-1">
          Hide
        </button>
      ) : (
        <button onClick={() => setIsVisible()} className="border underline p-1">
          Show
        </button>
      )}

      {isVisible && <p>{discription}</p>}
    </div>
  );
};

const Instamart = () => {
  const [sectionConfig, setSectionConfig] = useState();
  return (
    <div>
      <Section
        titel={"About"}
        discription={
          "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages."
        }
        setIsVisible={() => {
          setSectionConfig("about");
        }}
        setIsVisiblet={() => {
          setSectionConfig("t");
        }}
        isVisible={sectionConfig === "about"}
      />
      <Section
        titel={"Teams"}
        discription={
          "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages."
        }
        setIsVisible={() => {
          setSectionConfig("teams");
        }}
        setIsVisiblet={() => {
          setSectionConfig("t");
        }}
        isVisible={sectionConfig === "teams"}
        />
      <Section
        titel={"Carrer"}
        discription={
          "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages."
        }
        setIsVisible={() => {
          setSectionConfig("Carrer");
        }}
        setIsVisiblet={() => {
          setSectionConfig("t");
        }}
        isVisible={sectionConfig === "Carrer"}
      />
    </div>
  );
};

export default Instamart;
