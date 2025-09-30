// src/pages/FracturesTrauma.js
import { Link } from 'react-router-dom';
import StatisticCard from '../components/StatisticCard';
import Testimonial from '../components/Testimonial';
import FAQ from '../components/FAQ';

const FracturesTrauma = () => {
  return (
    <div className="container mx-auto p-4">
      <section className="text-center mb-8">
        <h1 className="text-4xl font-bold">Dr. Apoorv Dua</h1>
        <p className="text-2xl">Traumatology & complex Fracture</p>
        <p>We provide specialized trauma and fracture care to ensure a smooth and effective recovery. Our expert team offers:</p>
      </section>

      <section className="mb-8">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/fnYXBLiRkZ4"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="mx-auto"
        ></iframe>
      </section>

      <section className="mb-8">
        <h2 className="text-3xl font-bold mb-4">Consult a Doctor</h2>
        <h3 className="text-2xl font-bold mb-2">Fracture</h3>
        <p>A fracture is a partial or complete break in the bone. When a fracture occurs, it is classified into two types: open or closed:</p>
        <ul className="list-disc pl-6 mb-4">
          <li>Open Fracture (Compound Fracture): The bone breaks and protrudes through the skin, or a deep wound exposes the bone externally.</li>
          <li>Closed Fracture (Simple Fracture): The bone breaks, but the skin remains intact.</li>
        </ul>
        <p>Common types of fractures:</p>
        <ul className="list-disc pl-6 mb-4">
          <li>Greenstick Fracture: Incomplete break, part breaks, other side bends, often in children due to softer bones.</li>
          <li>Transverse Fracture: Bone breaks in a straight line across.</li>
          <li>Spiral Fracture: Bone breaks in a spiral pattern, usually from twisting injury.</li>
          <li>Oblique Fracture: Break occurs diagonally across the bone.</li>
          <li>Compression Fracture: Bone is crushed, often resulting in wider or flatter appearance.</li>
          <li>Comminuted Fracture: Bone breaks into three or more pieces, with fragments at the fracture site.</li>
          <li>Segmental Fracture: Bone breaks in two separate places, leaving a “floating” piece of bone.</li>
          <li>Avulsion Fracture: Bone fractures near a tendon or ligament, caused by pulling off a small piece of bone.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-3xl font-bold mb-4">Know More</h2>
        <h3 className="text-2xl font-bold mb-2">About Fracture</h3>
        <h4 className="text-xl font-bold mb-2">Symptoms</h4>
        <ul className="list-disc pl-6 mb-4">
          <li>Severe pain at the site, especially when touched, moved, or pressured.</li>
          <li>Swelling around the injury site due to body’s response.</li>
          <li>Visible abnormal shape or angle (e.g., crooked or misaligned limbs).</li>
          <li>Difficulty or inability to move the affected part.</li>
          <li>Grinding or crackling sensation/sound when broken bone ends rub.</li>
          <li>Numbness or tingling, indicating possible nerve damage.</li>
          <li>Symptoms of shock (cold, clammy skin, rapid breathing, weakness, dizziness, fainting), especially in open fractures with significant bleeding.</li>
        </ul>
        <h4 className="text-xl font-bold mb-2">Diagnosis</h4>
        <ul className="list-disc pl-6 mb-4">
          <li>Inspection for deformity, swelling, or bruising.</li>
          <li>Palpation (gentle pressing) to locate tenderness, deformities, or abnormal movement.</li>
          <li>Checking for open fractures (bone sticking out).</li>
          <li>Assessment of range of motion (e.g., joint or bone movement).</li>
          <li>Checking for neurological (numbness, tingling) or vascular symptoms (pulse, skin color) to assess nerve or blood vessel impact.</li>
        </ul>
        <h4 className="text-xl font-bold mb-2">Treatment</h4>
        <ul className="list-disc pl-6 mb-4">
          <li>Casting or Splinting: For non-displaced fractures, immobilize with cast or splint for natural healing.</li>
          <li>Surgical Intervention: For displaced or complex fractures, realign bones and secure with hardware (plates, screws, rods).</li>
          <li>Follow-up: Regular visits to monitor healing, adjust splints/casts, ensure proper alignment.</li>
        </ul>
        <p>Fractures cause severe pain if not immobilized properly; treatment aims to manage pain for comfort and care.</p>
        <p>Fractures can have psychological impact, limiting mobility or independence; effective treatment provides physical recovery and confidence.</p>
        <p>Healing process: Bones must...</p>
        {/* Note: Summary truncated */}
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
        <p>Enquire about fracture and trauma treatment costs.</p>
        <Link to="#" className="bg-blue-600 text-white p-2 rounded">Get a Quote</Link> {/* Mock */}
      </section>

      <section className="mb-8">
        <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
        <FAQ question="What is a fracture?" answer="A partial or complete break in the bone." />
        <FAQ question="What are treatment options?" answer="Casting, splinting, or surgery depending on severity." />
        {/* Add more */}
      </section>

      <section>
        <h2 className="text-3xl font-bold mb-4">What Our Patients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Testimonial name="Patient 1" text="Fast recovery from fracture." />
          <Testimonial name="Patient 2" text="Expert trauma care." />
          <Testimonial name="Patient 3" text="Highly recommend." />
        </div>
      </section>
    </div>
  );
};

export default FracturesTrauma;