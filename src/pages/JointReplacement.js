import StatisticCard from '../components/StatisticCard';
import Testimonial from '../components/Testimonial';
import FAQ from '../components/FAQ';

const JointReplacement = () => {
  return (
    <div className="container mx-auto p-4">
      <section className="text-center mb-8">
        <h1 className="text-4xl font-bold">Rediscover Mobility with Advanced Joint Replacement at Dr. Dua’s Speciality Clinic</h1>
      </section>

      <section className="mb-8">
        <iframe 
          width="560" 
          height="315" 
          src="https://www.youtube.com/embed/BM51SZkE1Ws" 
          title="YouTube video player" 
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen
          className="mx-auto"
        ></iframe>
      </section>

      <section className="mb-8">
        <h2 className="text-3xl font-bold mb-4">MISCR Knee Replacement</h2>
        <p>Surgeons do not cut Quadriceps or VMO muscles, using special instruments, surgery time of 30 minutes, less pain, and quicker recovery.</p>
        {/* Add more content from summary */}
        <ul className="list-disc pl-6">
          <li>Symptoms: persistent pain, swelling, stiffness...</li>
          {/* Continue with key points */}
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-3xl font-bold mb-4">HIP Replacement</h2>
        <p>Total hip replacement as effective for hip joint damage or arthritis...</p>
        {/* Add details */}
      </section>

      <section className="mb-8">
        <h2 className="text-3xl font-bold mb-4">Shoulder Replacement</h2>
        <p>Removing damaged bone and replacing with metal and plastic implants...</p>
        {/* Add details */}
      </section>

      <section className="mb-8">
        <h2 className="text-3xl font-bold mb-4">Why Choose Dr. Apoorv Dua</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <StatisticCard number="70,000+" label="Patients Experience" />
          <StatisticCard number="25,000+" label="Procedures" />
          <StatisticCard number="60,000+" label="Trauma surgeries" />
          <StatisticCard number="5000" label="Joint Replacement Surgeries" />
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-3xl font-bold mb-4">Check Surgery Cost</h2>
        <p>Enquire about surgery costs...</p>
        {/* Add mock button or form */}
      </section>

      <section className="mb-8">
        <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
        {/* Add FAQs from summary if available */}
        <FAQ question="Question 1?" answer="Answer 1." />
        {/* More */}
      </section>

      <section>
        <h2 className="text-3xl font-bold mb-4">What Our Patients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Testimonial name="Patient 1" text="Great joint replacement!" />
          {/* Mock */}
        </div>
      </section>
    </div>
  );
};

export default JointReplacement;