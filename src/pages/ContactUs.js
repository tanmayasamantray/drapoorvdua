// src/pages/ContactUs.js
import AppointmentForm from '../components/AppointmentForm';

const ContactUs = () => {
  return (
    <div className="container mx-auto p-4">
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold text-primary-text">Book Appointment with Dr. Apoorv Dua – Orthopedic Expert in Delhi</h1>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-primary-text mb-4">Contact Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md border border-border-gray">
            <h3 className="text-2xl font-bold text-primary-text mb-2">Greater Kailash Location</h3>
            <p className="text-secondary-text mb-4">M-85, M Block, 80 Feet Rd, Block M, Greater Kailash II, Delhi, 110048</p>
            <iframe
              title="Greater Kailash Clinic Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3505.123!2d77.242467!3d28.5338204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce17fd3ca1de5%3A0x31da8f490016b055!2sBlock%20M%2C%20Greater%20Kailash%20II%2C%20Greater%20Kailash%2C%20New%20Delhi%2C%20Delhi%20110048!5e0!3m2!1sen!2sin!4v1727723456789"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border border-border-gray">
            <h3 className="text-2xl font-bold text-primary-text mb-2">Vasant Kunj Location</h3>
            <iframe
              title="Vasant Kunj Clinic Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3505.678!2d77.1604048!3d28.5194391!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1d080c000001%3A0xdc68ebc7ff708935!2sIndian%20Spinal%20Injuries%20Centre!5e0!3m2!1sen!2sin!4v1727723456789"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-primary-text mb-4">Make An Appointment & Save Your Seat</h2>
        <AppointmentForm />
      </section>
    </div>
  );
};

export default ContactUs;