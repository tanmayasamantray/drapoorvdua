import { Link } from 'react-router-dom';

const ServiceCard = ({ title, description, link }) => {
  return (
    <div className="bg-white p-4 shadow-md rounded-lg">
      <h3 className="text-xl font-bold">{title}</h3>
      <p>{description}</p>
      <Link to={link} className="text-blue-600 hover:underline">Read More</Link>
    </div>
  );
};

export default ServiceCard;