const Testimonial = ({ name, text }) => {
  return (
    <div className="bg-gray-100 p-4 rounded-lg">
      <p>"{text}"</p>
      <p className="text-right font-bold">- {name}</p>
    </div>
  );
};

export default Testimonial;