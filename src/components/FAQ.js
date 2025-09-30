const FAQ = ({ question, answer }) => {
  return (
    <div className="mb-4">
      <h4 className="font-bold">{question}</h4>
      <p>{answer}</p>
    </div>
  );
};

export default FAQ;