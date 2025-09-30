const StatisticCard = ({ number, label }) => {
  return (
    <div className="text-center p-4">
      <h2 className="text-4xl font-bold">{number}</h2>
      <p>{label}</p>
    </div>
  );
};

export default StatisticCard;