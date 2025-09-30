const AppointmentForm = () => {
  return (
    <form className="bg-white p-6 shadow-md rounded-lg">
      <h3 className="text-2xl font-bold mb-4">Get Appointment</h3>
      <input type="text" placeholder="Name" className="block w-full mb-2 p-2 border" />
      <input type="email" placeholder="Email" className="block w-full mb-2 p-2 border" />
      <input type="tel" placeholder="Phone" className="block w-full mb-2 p-2 border" />
      <textarea placeholder="Message" className="block w-full mb-2 p-2 border"></textarea>
      <button type="submit" className="bg-blue-600 text-white p-2 rounded">Submit</button>
    </form>
  );
};

export default AppointmentForm;