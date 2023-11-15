import Image from "next/image";
import backgroundImage from "@/public/computer.png";

const Service = () => {
  const sectionStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
  };

  return (
    <>
      <section
        className="max-container padding-container flex flex-col gap-20 py-10 bg-slate-100 rounded pb-32 md:gap-28 lg:py-20 xl:flex-row shadow w-[95%]"
        style={sectionStyle}
      >
        <div>
          <h2 className="mb-5 text-black font-bold text-3xl ">Our Services</h2>
          <div className="column gap-10 md:flex lg:flex xl:flex">
            <Image
            className="rounded"
              src="/computer.png" // Provide the correct path to your image
              alt="Cover Image"
              width={400} // Adjust width as needed
              height={400} // Adjust height as needed
            />
            <div><br />
              <h3 className="text-xl text-black font-bold underline">What we Do</h3><br />
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque
                nulla provident doloremque! Eveniet laborum, optio ex vel
                expedita neque consequuntur. Dignissimos maxime quis, rem
                distinctio autem voluptas earum nesciunt quibusdam laudantium
                vitae, repellendus soluta iure. Corporis, voluptates consectetur
                sapiente placeat libero iste corrupti quas ratione deleniti
                ducimus perferendis necessitatibus saepe.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Service;