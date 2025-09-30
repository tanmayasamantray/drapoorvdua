// src/pages/ShoulderTreatment.js
import { Link } from 'react-router-dom';
import StatisticCard from '../components/StatisticCard';
import Testimonial from '../components/Testimonial';
import FAQ from '../components/FAQ';

const ShoulderTreatment = () => {
  return (
    <div className="container mx-auto p-4">
      <section className="text-center mb-8">
        <h1 className="text-4xl font-bold">Dr. Apoorv Dua</h1>
        <p className="text-2xl">Move Freely, Live Fully. Expert Shoulder Care for a Pain-Free Life!</p>
        <p>Shoulder pain shouldn’t limit your movement. Whether due to injury, arthritis, or stiffness, Dr. Apoorv Dua offers advanced treatments to restore strength, flexibility, and comfort.</p>
      </section>

      <section className="mb-8">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/E6gRV14ITS0"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="mx-auto"
        ></iframe>
      </section>

      <section className="mb-8">
        <h2 className="text-3xl font-bold mb-4">Shoulder Replacement</h2>
        <p>Shoulder replacement removes damaged areas of bone and replaces them with metal and plastic implants. This surgery is called shoulder arthroplasty.</p>
        <p>The shoulder is a ball-and-socket joint, with the round head (ball) of the upper arm bone fitting into a shallow socket. Damage can cause pain, weakness, and stiffness.</p>
        <p>Implants are available in different shapes and sizes, with options for partial and total replacements using anatomic or reverse implants.</p>
        <p>Success rate: High, with significant pain relief and improved mobility. Satisfaction rates are around 90%.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-3xl font-bold mb-4">Know More About Shoulder Replacement</h2>
        <p>Surgery relieves pain and symptoms from damage to the shoulder joint.</p>
        <ul className="list-disc pl-6 mb-4">
          <li>Osteoarthritis: Wear-and-tear arthritis damaging cartilage.</li>
          <li>Rotator cuff injuries: Damage to muscles and tendons surrounding the joint.</li>
          <li>Fractures: Upper humerus fractures requiring replacement.</li>
          <li>Rheumatoid arthritis and other inflammatory disorders: Immune system-related cartilage and bone damage.</li>
          <li>Osteonecrosis: Blood flow issues leading to bone collapse.</li>
        </ul>
        <h3 className="text-2xl font-bold mb-2">Diagnosis Methods</h3>
        <ul className="list-disc pl-6 mb-4">
          <li>Physical exam: Checks for abnormalities, pain levels during rest and activity.</li>
          <li>X-rays: Confirms arthritis by showing joint space loss.</li>
          <li>CT scan: Evaluates bone integrity.</li>
          <li>MRI: Assesses soft tissues like rotator cuff tendons.</li>
          <li>EMG test or nerve conduction study: For suspected nerve damage.</li>
        </ul>
        <p>Procedure: Replaces the ball and socket with a prosthetic, involving anesthesia, incision, removal of old parts, insertion of new parts, and closing the incision.</p>
        <p>Recommended when other treatments fail, for severe pain and loss of function due to arthritis, instability, previous injuries, or avascular necrosis.</p>
        <h3 className="text-2xl font-bold mb-2">Recovery</h3>
        <p>Varies, typically 3-6 months for full recovery.</p>
        <ul className="list-disc pl-6 mb-4">
          <li>Pain and swelling taper off within four days.</li>
          <li>Physical therapy starts within a week or two to strengthen muscles and improve movement.</li>
          <li>Avoid activities involving reaching, lifting heavy objects, sudden movements, or putting the arm behind the back.</li>
          <li>Follow doctor’s instructions for blood thinners and pain medication.</li>
        </ul>
        <h3 className="text-2xl font-bold mb-2">Rehabilitation</h3>
        <ul className="list-disc pl-6 mb-4">
          <li>Tailored exercises for strength and mobility.</li>
          <li>Movements to improve flexibility.</li>
          <li>Exercises for strength and stability.</li>
          <li>Techniques and medications for post-rehabilitation discomfort.</li>
          <li>Gradual reintroduction to daily tasks.</li>
        </ul>
        <h3 className="text-2xl font-bold mb-2">Prevention</h3>
        <ul className="list-disc pl-6 mb-4">
          <li>Strengthening shoulder muscles.</li>
          <li>Using correct techniques during physical activities and sports.</li>
        </ul>
      </section>

      {/* Add sections for Rotator Cuff Repair and Frozen Shoulder based on summary if more details were provided */}

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
        <p>Enquire about shoulder treatment costs.</p>
        <Link to="#" className="bg-blue-600 text-white p-2 rounded">Get a Quote</Link> {/* Mock */}
      </section>

      <section className="mb-8">
        <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
        <FAQ question="What is shoulder replacement?" answer="Surgery to replace damaged shoulder joint with implants." />
        <FAQ question="What is recovery time?" answer="3-6 months." />
        {/* Add more */}
      </section>

      <section>
        <h2 className="text-3xl font-bold mb-4">What Our Patients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Testimonial name="Patient 1" text="Pain-free shoulder now!" />
          <Testimonial name="Patient 2" text="Great rotator cuff repair." />
          <Testimonial name="Patient 3" text="Excellent care." />
        </div>
      </section>
    </div>
  );
};

export default ShoulderTreatment;