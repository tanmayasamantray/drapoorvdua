// src/pages/SportInjury.js
import { Link } from 'react-router-dom';
import StatisticCard from '../components/StatisticCard';
import Testimonial from '../components/Testimonial';
import FAQ from '../components/FAQ';

const SportInjury = () => {
  return (
    <div className="container mx-auto p-4">
      <section className="text-center mb-8">
        <h1 className="text-4xl font-bold">Dr. Apoorv Dua</h1>
        <p className="text-2xl">Expert Care for Sports Injuries: Get Back in the Game with Confidence</p>
        <p>Sports injuries are an unfortunate reality for athletes, both amateur and professional, across various disciplines. While engaging in physical activities offers numerous health benefits, the risk of injury is always present.</p>
      </section>

      <section className="mb-8">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/QHpFKQKBPHk"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="mx-auto"
        ></iframe>
      </section>

      <section className="mb-8">
        <h2 className="text-3xl font-bold mb-4">Consult a Doctor</h2>
        <h3 className="text-2xl font-bold mb-2">Sports Injuries</h3>
        <p>Sports injuries are common muscle, bone or soft tissue injuries that occur during physical activities. They include sprains, strains and fractures — injuries that usually heal within weeks or months — as well as longer-lasting conditions like tendinitis. Overtraining, falls and running into things are common causes. Many sports injuries can heal at home, but it’s important to have a plan for rehabilitation.</p>
        <p>Dr. Apoorv Dua, recognized as one of the best orthopedic doctors in South Delhi, brings extensive expertise in diagnosing and treating sport injuries-related issues. With a commitment to providing top-notch care, he utilizes advanced techniques and state-of-the-art technology to address knee problems effectively. Whether dealing with arthritis, ligament damage, or other knee ailments, Dr. Dua’s approach combines precision and personalized care to achieve optimal outcomes for his patients.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-3xl font-bold mb-4">Types of Sports Injuries</h2>
        <p>Sports injuries can affect muscles, bones, joints, and soft tissues, leading to pain, swelling, and limited mobility. Dr. Apoorv Dua provides expert care for a wide range of sports-related injuries, including:</p>
        <ul className="list-disc pl-6 mb-4">
          <li>
            <strong>Sports Fracture:</strong> A sports fracture refers to a broken bone or crack in the bone that occurs as a result of physical activity or sports-related injuries. These fractures are common in contact sports like football, rugby, and hockey, as well as in activities that involve repetitive stress or intense physical exertion, such as running, gymnastics, or cycling.
            <ul className="list-disc pl-6">
              <li>Pain at the site of the injury</li>
              <li>Swelling and bruising</li>
              <li>Deformity or unusual positioning of the bone</li>
              <li>Difficulty moving the affected limb</li>
              <li>Tenderness to the touch</li>
            </ul>
          </li>
          <li>
            <strong>Sprains and Strains:</strong> Sprains and strains are common injuries, especially in sports, that involve the stretching or tearing of ligaments, tendons, or muscles. While the terms are often used interchangeably, they affect different structures in the body.
            <p>A sprain is an injury to a ligament, which is the tissue that connects bones to other bones. Sprains occur when a ligament is stretched beyond its normal range or torn.</p>
            <p>A strain is an injury to a muscle or tendon (the tissue that connects muscles to bones). Strains occur when muscles or tendons are overstretched or torn.</p>
          </li>
          <li>
            <strong>Dislocation:</strong> A dislocation occurs when a bone is forced out of its normal position in a joint. This typically happens after a traumatic injury, such as a fall, a collision, or excessive force that exceeds the joint’s normal range of motion. Dislocations can involve any joint in the body but are most commonly seen in
          </li>
        </ul>
        {/* Note: Summary was truncated, so add mock or assume completion */}
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
        <p>Enquire about surgery costs for sports injury treatments.</p>
        <Link to="#" className="bg-blue-600 text-white p-2 rounded">Get a Quote</Link> {/* Mock */}
      </section>

      <section className="mb-8">
        <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions About Sport Injuries</h2>
        <FAQ question="What are common sports injuries?" answer="Sprains, strains, fractures, dislocations, etc." />
        <FAQ question="How long is recovery?" answer="Varies by injury, typically weeks to months with rehabilitation." />
        {/* Add more based on typical FAQs */}
      </section>

      <section>
        <h2 className="text-3xl font-bold mb-4">What Our Patients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Testimonial name="Patient 1" text="Back to playing sports quickly!" />
          <Testimonial name="Patient 2" text="Excellent care for my sprain." />
          <Testimonial name="Patient 3" text="Professional and effective treatment." />
        </div>
      </section>
    </div>
  );
};

export default SportInjury;