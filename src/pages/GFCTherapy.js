// src/pages/GFCTherapy.js
import { Link } from 'react-router-dom';
import StatisticCard from '../components/StatisticCard';
import Testimonial from '../components/Testimonial';
import FAQ from '../components/FAQ';

const GFCTherapy = () => {
  return (
    <div className="container mx-auto p-4">
      <section className="text-center mb-8">
        <h1 className="text-4xl font-bold">Dr. Apoorv Dua</h1>
        <p className="text-2xl">REBUILD YOUR STRENGTH WITH ADVANCED GFC THERAPY FOR BONES AND JOINTS</p>
        <p>Experience a renewed sense of freedom and comfort with our state-of-the-art GFC Therapy.</p>
      </section>

      <section className="mb-8">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/wqz4WGaz5yI"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="mx-auto"
        ></iframe>
      </section>

      <section className="mb-8">
        <h2 className="text-3xl font-bold mb-4">Consult a Doctor</h2>
        <h3 className="text-2xl font-bold mb-2">GFC Therapy: Pioneering Non-Surgical Treatment</h3>
        <p>At Dr. Apoorv Dua’s Clinic, we bring you GFC (Growth Factor Concentrate) Therapy, a cutting-edge, non-surgical treatment designed to repair and rejuvenate bones and joints. This innovative therapy harnesses the body’s natural growth factors to promote healing, reduce pain, and restore mobility.</p>
        <p>For decades, it has been known that platelets contain powerful growth factors like PDGF (Platelet-derived Growth Factor), TGF-β (Transforming Growth Factor), and VEGF (Vascular Endothelial Growth Factor), which play a vital role in tissue regeneration and repair. However, the challenge has always been in effectively extracting and activating these growth factors.</p>
        <p>This is where GFC Therapy excels. With its proprietary in vitro platelet activation system, GFC Therapy offers superior results compared to traditional treatments like PRP. By utilizing your body’s own growth factors, GFC Therapy provides a safe, natural, and effective solution for conditions like arthritis, joint pain, and sports injuries.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-3xl font-bold mb-4">Know More</h2>
        <h3 className="text-2xl font-bold mb-2">Benefits of GFC Therapy</h3>
        <ul className="list-disc pl-6 mb-4">
          <li>No Platelet Loss</li>
          <li>High Concentration of Growth Factors</li>
          <li>Naturally Regenerates Damaged Tissue</li>
        </ul>
        <p>With GFC therapy, you experience the benefits of no platelet loss, ensuring that the full potential of your body’s natural growth factors is preserved. This treatment uses a high concentration of growth factors, carefully extracted and activated to promote optimal healing and rejuvenation. By tapping into your body’s own healing power, GFC therapy naturally regenerates damaged tissue, stimulating collagen production and encouraging cellular repair.</p>
        <p>GFC therapy is completely safe, as it is derived from the patient’s own blood, eliminating any risk of allergic reactions or rejection. The treatment uses a 100% autologous process, meaning there are no foreign substances involved, ensuring that the growth factors are fully compatible with the individual’s body. Prepared in a sterile environment, GFC therapy is contamination-free, providing an extra layer of safety and minimizing any chance of infection. This advanced process ensures that all components remain pure and natural, harnessing the body’s innate healing power for optimal, risk-free results.</p>
        <p>GFC therapy is designed to fit seamlessly into your busy schedule with a lunchtime procedure that requires minimal downtime. The entire process is quick and efficient, allowing you to get back to your daily activities without disruption. The preparation of GFC is easy, rapid, and highly consistent, ensuring that each treatment is of the highest quality. The blood is drawn, processed, and activated in a streamlined manner, allowing for maximum growth factor concentration and optimal therapeutic benefits. This ensures consistent results with each session, providing a reliable and hassle-free experience.</p>
        <p>GFC therapy represents the latest and most innovative advancement in regenerative medicine. Developed through cutting-edge research and clinical studies, this therapy incorporates the most recent scientific breakthroughs in growth factor technology. It has been carefully researched and formulated in India, utilizing world-class medical expertise and high standards of practice.</p>
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
        <p>Enquire about GFC Therapy costs.</p>
        <Link to="#" className="bg-blue-600 text-white p-2 rounded">Get a Quote</Link> {/* Mock */}
      </section>

      <section className="mb-8">
        <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
        <FAQ question="What is GFC Therapy?" answer="Non-surgical treatment using growth factors for joint repair." />
        <FAQ question="Is it safe?" answer="Yes, autologous and contamination-free." />
        {/* Add more */}
      </section>

      <section>
        <h2 className="text-3xl font-bold mb-4">What Our Patients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Testimonial name="Patient 1" text="Amazing results with GFC!" />
          <Testimonial name="Patient 2" text="Pain-free now." />
          <Testimonial name="Patient 3" text="Quick and effective." />
        </div>
      </section>
    </div>
  );
};

export default GFCTherapy;