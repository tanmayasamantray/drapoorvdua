// Updated src/pages/Home.js (add import and component at the top after container)
import ServiceCard from '../components/ServiceCard';
import StatisticCard from '../components/StatisticCard';
import Testimonial from '../components/Testimonial';
import AppointmentForm from '../components/AppointmentForm';
import HeroCarousel from '../components/HeroCarousel';  // New import

const Home = () => {
  return (
    <div className="container mx-auto p-4">
      <HeroCarousel />
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold text-primary-text">Dr. Apoorv Dua</h1>
        <p className="text-xl text-secondary-text">Orthopaedic Surgeon in South Delhi</p>
        <p className="text-secondary-text">M.B.B.S., M.S. Orthopaedics, FIJRR(Germany), FIAS (Mumbai), FIFA Diploma (Switzerland), IFICS, Fellowship</p>
      </section>

      {/* Rest of the content remains the same */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
        <StatisticCard number="12+" label="Years Experience" />
        <StatisticCard number="70K+" label="Happy Patients" />
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-primary-text mb-4">Meet Dr. Apoorv Dua – Leading Orthopedic Surgeon in South Delhi</h2>
        <p className="text-secondary-text">Dr. Apoorv Dua is a highly skilled orthopedic surgeon renowned for his expertise in hip, knee, and shoulder replacement and reconstruction. With a patient-centric approach and years of experience, he provides comprehensive care in the following areas:</p>
        <ul className="list-disc pl-6 text-secondary-text">
          <li>Joint Replacement & Reconstruction: Total & Partial Knee Replacement, Hip Replacement Surgery, Shoulder Replacement & Reconstruction.</li>
          <li>Arthroscopic & Sports Injury Treatments: ACL/PCL Surgery, Meniscus Repair, Arthroscopic Rotator Cuff Repair, SLAP Repair – Labral Repair, Shoulder Arthroscopy & Fracture Management.</li>
          <li>Advanced Regenerative & Non-Surgical Treatments: PRP Injections for Joint & Tendon Healing, GFC Therapy for Pain Relief & Cartilage Repair, Viscosupplementation Injection Therapy.</li>
          <li>Traumatology & Complex Fracture Management: Expert in handling complex fractures and trauma cases, ensuring precision-driven surgeries for optimal recovery and mobility.</li>
        </ul>
        <p className="text-secondary-text">At Dr. Dua’s Speciality Clinic, we are committed to providing world-class orthopedic solutions tailored to each patient’s needs. Our goal is to help you move pain-free and live actively with the latest advancements in orthopedic care.</p>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-primary-text mb-4">We Offer Different Services To Improve Your Health</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <ServiceCard
            title="JOINT REPLACEMENT"
            description="Rediscover mobility with advanced Joint Replacement Surgery at Dr. Dua's Speciality Clinic, specializing in knee, hip, and shoulder replacements for pain relief and faster recovery."
            link="/joint-replacement"
          />
          <ServiceCard
            title="SPORTS INJURIES"
            description="Expert care for sports injuries, including sprains, strains, shin splints, tennis elbow, dislocations, fractures, plantar fasciitis, ACL injuries, and Achilles tendinitis."
            link="/sport-injury"
          />
          <ServiceCard
            title="ACL & PCL Surgery"
            description="Restore knee stability and get back to your active lifestyle with our advanced ACL and PCL reconstruction procedures. Using minimally invasive techniques, we offer quicker recovery, reduced pain, and long-term joint strength."
            link="/acl-surgery"
          />
          <ServiceCard
            title="Non-surgical treatment"
            description="GFC (Growth Factor Concentrate) Therapy is a cutting-edge, non-surgical treatment that uses your body’s natural growth factors to accelerate tissue regeneration and repair."
            link="/gfc-therapy"
          />
          <ServiceCard
            title="SHOULDER TREATMENT"
            description="Comprehensive shoulder care for conditions like rotator cuff tears, arthritis, fractures, labral injuries, tendon ruptures, and more."
            link="/shoulder-joint-treatment"
          />
          <ServiceCard
            title="Traumatology & complex Fracture"
            description="Expert care for fractures and trauma, providing advanced treatments to restore bone health, mobility, and functionality. From minor fractures to complex injuries."
            link="/fractures-and-trauma"
          />
        </div>
      </section>

      <section className="mb-12">
        <AppointmentForm />
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-primary-text mb-4">Why Choose Us</h2>
        <p className="text-secondary-text">Expert Orthopedic Care for a Pain-Free Life</p>
        <p className="text-secondary-text">At our clinic, you can expect care from an experienced orthopedic surgeon committed to restoring your mobility and improving your quality of life. We specialize in treating fractures, sports injuries, arthritis, and a wide range of musculoskeletal conditions.</p>
        <ul className="list-disc pl-6 text-secondary-text">
          <li>Expertise in Orthopedic Care: Years of experience in diagnosing and treating complex musculoskeletal issues.</li>
          <li>Holistic Approach: Personalized treatment plans tailored to each patient’s unique needs.</li>
          <li>Focus on Patient Education: We empower patients with knowledge about their condition and treatment options.</li>
          <li>Compassionate Care: A supportive environment where your comfort and recovery are our top priorities.</li>
        </ul>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-4">
          <StatisticCard number="70,000+" label="Patients Experience" />
          <StatisticCard number="25,000+" label="Procedures" />
          <StatisticCard number="60,000+" label="Trauma surgeries" />
          <StatisticCard number="5000" label="Joint Replacement Surgeries" />
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-primary-text mb-4">What Our Patients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Testimonial
            name="Jaswanti Singh"
            text="I went to Dr. Apoorv Dua for my daughter’s hand fracture. He handled the case very nicely. He is a humble person, and my daughter is recovering very nicely."
            date="12 Apr 25"
          />
          <Testimonial
            name="Gaurav Panday"
            text="I had a total knee replacement surgery by Dr. Apoorv Dua. His compassion and skills are remarkable. I received good preoperative and postoperative care. I am happy with the results and highly recommend him."
            date="11 Mar 25"
          />
          <Testimonial
            name="Mihika Aggarwal"
            text="Dr. Apoorv Dua resolved my wrist issue that plagued me for a year. His conservative treatment avoided invasive options. He was patient, kind, and knowledgeable."
            date="22 Jan 25"
          />
        </div>
      </section>
    </div>
  );
};

export default Home;