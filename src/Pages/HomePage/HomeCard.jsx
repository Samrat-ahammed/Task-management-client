import "aos/dist/aos.css";
import Aos from "aos";

const HomeCard = ({ item }) => {
  const { title, description, date } = item || {};
  Aos.init({
    duration: 1000,
    easing: "ease-in-out",
    once: true,
    mirror: false,
  });
  return (
    <div data-aos="fade-right">
      <div className="card bg-[#B3E0FF] text-black">
        <div className="card-body">
          <h2 className="card-title">{title || "No Title"}</h2>
          <p className="text-pink-950S">{description}</p>
          <p className="text-pink-950S">{date}</p>
        </div>
      </div>
    </div>
  );
};

export default HomeCard;
