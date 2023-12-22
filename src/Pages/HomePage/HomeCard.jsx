const HomeCard = ({ item }) => {
  const { title, description, date } = item || {};
  return (
    <div>
      <div className="card bg-[#B3E0FF] text-black">
        <div className="card-body">
          <h2 className="card-title">{title || "No Title"}</h2>
          <p className="text-pink-950S">{description}</p>
          <p className="text-pink-950S">{date}</p>
          <div className="card-actions justify-end">
            <button className="btn">Read More..</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeCard;
