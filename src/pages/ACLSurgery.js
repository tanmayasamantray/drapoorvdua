// src/pages/ACLSurgery.js
import { Link } from 'react-router-dom';
import StatisticCard from '../components/StatisticCard';
import Testimonial from '../components/Testimonial';
import FAQ from '../components/FAQ';

const ACLSurgery = () => {
  return (
    <div className="container mx-auto p-4">
      <section className="text-center mb-8">
        <h1 className="text-4xl font-bold">Dr. Apoorv Dua</h1>
        <p className="text-2xl">Recovering from ACL & PCL Injuries: Surgical Solutions for a Stronger Knee</p>
        <p>Dr. Apoorv Dua is a renowned orthopedic surgeon in South Delhi, specializing in minimally-invasive arthroscopic ACL and PCL reconstruction surgeries for quicker recovery and enhanced outcomes.</p>
      </section>

      <section className="mb-8">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/Yub2flY2PBg"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="mx-auto"
        ></iframe>
      </section>

      <section className="mb-8">
        <h2 className="text-3xl font-bold mb-4">Consult a Doctor</h2>
        <h3 className="text-2xl font-bold mb-2">ACL Injury</h3>
        <p>Orthopedics covers musculoskeletal conditions, with arthroscopic ACL reconstruction treating torn ACLs. Notes that 45% of ACL injuries are sports-related, and untreated injuries can cause long-term damage.</p>
        <p>Dr. Apoorv Dua's minimally-invasive approach using arthroscopy ("keyhole surgery") with a special camera and tools through small holes, allowing joint assessment and repair without fully opening the joint, speeding recovery due to less trauma.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-3xl font-bold mb-4">Know More</h2>
        <h3 className="text-2xl font-bold mb-2">About ACL Injury</h3>
        <p>ACL injuries occur during high-impact sports or activities involving sudden stops, jumps, or twists, with symptoms like severe pain, swelling, instability, and difficulty walking or bearing weight, ranging from mild sprains to complete tears requiring surgery.</p>
        <ul className="list-disc pl-6 mb-4">
          <li>High-risk sports (e.g., soccer, basketball), sudden direction changes, symptoms (pain, swelling), knee instability, difficulty in weight-bearing or walking.</li>
          <li>Physical examination for knee instability, MRI for ligament damage, X-rays for bone structure, custom treatment plans, experienced orthopedic team.</li>
          <li>Arthroscope-assisted surgery for precision, small incisions, use of grafts, outpatient procedure, faster recovery.</li>
          <li>Chronic ACL deficiency, heightened knee instability, frequent knee give-outs, intense pain, early osteoarthritis.</li>
          <li>Initial physical therapy within days, strength training, gradual activity increase, return to sports within 6-9 months, ongoing monitoring and support.</li>
          <li>Personalized rehab plans, emphasis on strength and flexibility, post-surgery monitoring, pain management, mobility, long-term follow-up.</li>
          <li>Strengthening exercises for knee stability, importance of proper warm-ups, wearing supportive footwear, focus on movement technique and agility, education on avoiding high-risk actions.</li>
        </ul>
        <h3 className="text-2xl font-bold mb-2">PCL Injury</h3>
        <p>The PCL as stabilizing the knee, connecting the thighbone to the shinbone, larger and stronger than...</p>
        {/* Note: Summary truncated, add mock or complete based on context */}
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
        <p>Enquire about ACL/PCL surgery costs.</p>
        <Link to="#" className="bg-blue-600 text-white p-2 rounded">Get a Quote</Link> {/* Mock */}
      </section>

      <section className="mb-8">
        <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
        <FAQ question="What is ACL reconstruction?" answer="Minimally invasive surgery to repair torn ACL using grafts." />
        <FAQ question="How long is recovery?" answer="6-9 months for full return to sports." />
        {/* Add more */}
      </section>

      <section>
        <h2 className="text-3xl font-bold mb-4">What Our Patients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Testimonial name="Patient 1" text="Successful ACL surgery!" />
          <Testimonial name="Patient 2" text="Quick recovery." />
          <Testimonial name="Patient 3" text="Highly skilled surgeon." />
        </div>
      </section>
    </div>
  );
};

export default ACLSurgery;