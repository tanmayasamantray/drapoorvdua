// src/pages/AboutUs.js
import StatisticCard from '../components/StatisticCard';

const AboutUs = () => {
  return (
    <div className="container mx-auto p-4">
      <section className="text-center mb-12">
        <div className="relative">
          <img 
            src="https://t3.ftcdn.net/jpg/06/45/68/94/360_F_645689490_Fzwptjq0YLCW8JZpC6lASo1KJcAgzZPj.jpg" 
            alt="Dr. Apoorv Dua - Expert Orthopedic Surgeon Banner" 
            className="w-full h-48 md:h-64 object-cover rounded-lg mb-6" 
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 rounded-lg">
            <h1 className="text-white text-3xl md:text-4xl font-bold px-4">Get to Know Dr. Dua – Expert Orthopedic Surgeon in Delhi NCR</h1>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
        <StatisticCard number="12+" label="Years Experience" />
        <StatisticCard number="70K+" label="Happy Patients" />
      </section>

      <section className="mb-12">
        <div className="flex flex-col md:flex-row items-center mb-6">
          <img 
            src="https://www.shutterstock.com/image-photo/profile-photo-attractive-family-doc-600nw-1724693776.jpg" 
            alt="Dr. Apoorv Dua Profile" 
            className="w-full md:w-1/3 h-auto rounded-lg mb-4 md:mb-0 md:mr-6" 
          />
          <div>
            <h2 className="text-3xl font-bold text-primary-text mb-4">Dr. Apoorv Dua</h2>
            <h3 className="text-2xl font-bold text-primary-text mb-2">Orthopaedic Surgeon in South Delhi</h3>
            <p className="text-secondary-text">M.B.B.S., M.S. Orthopaedics</p>
            <p className="text-secondary-text">FIJRR(Germany), FIAS (Mumbai)</p>
            <p className="text-secondary-text">FIFA Diploma (Switzerland), IFICS</p>
            <p className="text-secondary-text">Fellowship</p>
          </div>
        </div>

        <h3 className="text-2xl font-bold text-primary-text mb-2">Meet Dr. Apoorv Dua – Leading Orthopedic Surgeon in South Delhi</h3>
        <p className="text-secondary-text">Dr. Apoorv Dua is a highly skilled orthopedic surgeon renowned for his expertise in hip, knee, and shoulder replacement and reconstruction. With a patient-centric approach and years of experience, he provides comprehensive care in the following areas:</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <div>
            <img 
              src="https://www.uhhospitals.org/-/media/images/blog/2018/04/joint-replacement.jpg?h=600&w=960&la=en&hash=16C27F4514922A6951CD8CCBF2529CDC" 
              alt="Joint Replacement Illustration" 
              className="w-full h-auto rounded-lg mb-4" 
            />
            <h4 className="text-xl font-bold text-primary-text mb-2">Joint Replacement & Reconstruction</h4>
            <ul className="list-disc pl-6 text-secondary-text">
              <li>Total & Partial Knee Replacement</li>
              <li>Hip Replacement Surgery</li>
              <li>Shoulder Replacement & Reconstruction</li>
            </ul>
          </div>

          <div>
            <img 
              src="https://www.trustwellhospitals.com/wp-content/uploads/2025/02/arthroscopy-image.jpg" 
              alt="Arthroscopic & Sports Injury Treatments" 
              className="w-full h-auto rounded-lg mb-4" 
            />
            <h4 className="text-xl font-bold text-primary-text mb-2">Arthroscopic & Sports Injury Treatments</h4>
            <ul className="list-disc pl-6 text-secondary-text">
              <li>ACL/PCL Surgery</li>
              <li>Meniscus Repair</li>
              <li>Arthroscopic Rotator Cuff Repair</li>
              <li>SLAP Repair – Labral Repair</li>
              <li>Shoulder Arthroscopy & Fracture Management</li>
            </ul>
          </div>

          <div>
            <img 
              src="https://www.nist.gov/sites/default/files/styles/480_x_480_limit/public/images/2022/02/15/AdobeStock_450785039.jpeg?itok=vEn6Hl_h" 
              alt="Advanced Regenerative Treatments" 
              className="w-full h-auto rounded-lg mb-4" 
            />
            <h4 className="text-xl font-bold text-primary-text mb-2">Advanced Regenerative & Non-Surgical Treatments</h4>
            <ul className="list-disc pl-6 text-secondary-text">
              <li>PRP Injections for Joint & Tendon Healing</li>
              <li>GFC Therapy for Pain Relief & Cartilage Repair</li>
              <li>Viscosupplementation Injection Therapy</li>
            </ul>
          </div>

          <div>
            <img 
              src="https://drmahibulislam.in/wp-content/uploads/2023/04/trauma-1024x677.jpg" 
              alt="Traumatology & Complex Fracture Management" 
              className="w-full h-auto rounded-lg mb-4" 
            />
            <h4 className="text-xl font-bold text-primary-text mb-2">Traumatology & Complex Fracture Management</h4>
            <p className="text-secondary-text">Dr. Apoorv Dua is an expert in handling complex fractures and trauma cases, ensuring precision-driven surgeries for optimal recovery and mobility.</p>
          </div>
        </div>

        <p className="text-secondary-text mt-6">At Dr. Dua’s Speciality Clinic, we are committed to providing world-class orthopedic solutions tailored to each patient’s needs. Our goal is to help you move pain-free and live actively with the latest advancements in orthopedic care.</p>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-primary-text mb-4">PUBLICATIONS</h2>
        <ul className="list-disc pl-6 text-secondary-text">
          <li>An exceptional case of suture related pseudo-infection (SRPI)/granuloma following total knee replacement: Case report, International Journal Orthopedics Sciences.</li>
          <li>Osteochondroma of distal tibia as a solitary variant: case report and literature review, International Journal of Orthopedics Sciences.</li>
          <li>A Comparison of Anteromedial Plating Versus Anterolateral Plating for Humerus Shaft Fractures Using the Anterolateral Approach.</li>
          <li>Needle cap external fixator for proximal phalanx fracture – A case report. Journal of Orthopaedic case reports 2022 October 12</li>
          <li>Correlation of patient’s height, weight and BMI and sizing of autogenous hamstring graft with functional outcome in patients with arthroscopic ACL reconstruction.</li>
          <li>Minimally invasive percutaneous plate osteo-synthesis in type 2 and type 3 AO distal tibia fractures.</li>
          <li>Transverse fracture of metacarpal and proximal phalangeal shaft fractures of the hand treated by Theta fixation.</li>
          <li>Ulnar wrist pain in distal end radius fractures prevented by prophylactic corticosteroid injection.</li>
          <li>Case Report: Plexiform neurofibroma from palmaris longus with Carpal tunnel syndrome - A case report, Journal of MGM Journal of Medical Sciences</li>
        </ul>
      </section>
    </div>
  );
};

export default AboutUs;