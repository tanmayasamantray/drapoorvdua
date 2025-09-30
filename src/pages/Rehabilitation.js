// src/pages/Rehabilitation.js
const Rehabilitation = () => {
  const rehabItems = [
    {
      title: "Shoulder Strengthening Exercises",
      icon: "https://via.placeholder.com/100?text=Shoulder",
      link: "http://drapoorvdua.com/wp-content/uploads/2025/09/Shoulder-Strengthening-Exercises.pdf",
    },
    {
      title: "SLAP Repair Rehabilitation Protocol",
      icon: "https://via.placeholder.com/100?text=SLAP",
      link: "http://drapoorvdua.com/wp-content/uploads/2025/09/SLAP-Repair-Rehabilitation-Protocol.pdf",
    },
    {
      title: "Total Knee Replacement Rehab",
      icon: "https://via.placeholder.com/100?text=Knee",
      link: "http://drapoorvdua.com/wp-content/uploads/2025/09/TOTAL-KNEE-REPLACEMENT-REHAB.pdf",
    },
    {
      title: "Uncemented Total Hip Replacement Rehab",
      icon: "https://via.placeholder.com/100?text=Hip",
      link: "http://drapoorvdua.com/wp-content/uploads/2025/09/UNCEMENTED-TOTAL-HIP-REPLACEMENT-REHAB.pdf",
    },
    {
      title: "Plantar Fasciitis Exercise Chart",
      icon: "https://via.placeholder.com/100?text=Foot",
      link: "http://drapoorvdua.com/wp-content/uploads/2025/09/plantar-fasciitis-exercises-chart.pdf",
    },
    {
      title: "Shoulder Pain & Stiffness Relief Guide",
      icon: "https://via.placeholder.com/100?text=Shoulder+Pain",
      link: "http://drapoorvdua.com/wp-content/uploads/2025/09/Shoulder-pain-and-stiffness.pdf",
    },
    {
      title: "Lumbar Flexion Exercises Chart",
      icon: "https://via.placeholder.com/100?text=Lumbar+Flexion",
      link: "http://drapoorvdua.com/wp-content/uploads/2025/09/LUMBAR-FLEXION-EXERCISES.pdf",
    },
    {
      title: "MCL & LCL Rehab",
      icon: "https://via.placeholder.com/100?text=MCL+LCL",
      link: "http://drapoorvdua.com/wp-content/uploads/2025/09/MCL-LCL-REHAB.pdf",
    },
    {
      title: "Meniscus Repair Rehab Protocol",
      icon: "https://via.placeholder.com/100?text=Meniscus",
      link: "http://drapoorvdua.com/wp-content/uploads/2025/09/Meniscus-Repair-Rehab-Protocol.pdf",
    },
    {
      title: "PCL Reconstruction Rehab",
      icon: "https://via.placeholder.com/100?text=PCL",
      link: "http://drapoorvdua.com/wp-content/uploads/2025/09/PCL-REHAB-POST-OP.pdf",
    },
    {
      title: "Knee strengthening exercises",
      icon: "https://via.placeholder.com/100?text=Knee+Strength",
      link: "http://drapoorvdua.com/wp-content/uploads/2025/09/Knee-strengthening-exercises.pdf",
    },
    {
      title: "Lumbar Extension Exercises Chart",
      icon: "https://via.placeholder.com/100?text=Lumbar+Extension",
      link: "http://drapoorvdua.com/wp-content/uploads/2025/09/LUMBAR-EXTENSION-EXERCISES.pdf",
    },
    {
      title: "Exercises for Osteoarthritis",
      icon: "https://via.placeholder.com/100?text=Osteoarthritis",
      link: "http://drapoorvdua.com/wp-content/uploads/2025/09/Exercises-for-Osteoarthritis.pdf",
    },
    {
      title: "ACL Reconstruction with Meniscus Repair Rehab",
      icon: "https://via.placeholder.com/100?text=ACL+Meniscus",
      link: "http://drapoorvdua.com/wp-content/uploads/2025/09/ACL-RECONSTRUCTION-REHABILITATION-PROTOCOL_compressed.pdf",
    },
    {
      title: "ACL Post-Operative Rehab",
      icon: "https://via.placeholder.com/100?text=ACL+Post-Op",
      link: "http://drapoorvdua.com/wp-content/uploads/2025/09/ACL-REHAB-POST-OP_compressed.pdf",
    },
    {
      title: "Arthroscopic Bankart Repair Rehab",
      icon: "https://via.placeholder.com/100?text=Bankart",
      link: "http://drapoorvdua.com/wp-content/uploads/2025/09/Arthroscopic-Bankart-Repair-Repair-Rehabilitation-protocol_compressed.pdf",
    },
  ];

  return (
    <div className="container mx-auto p-4">
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold text-primary-text">Rehabilitation</h1>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-primary-text mb-4">Comprehensive Orthopedic Surgery Rehab Guides</h2>
        <p className="text-secondary-text mb-6">
          Explore expert-designed rehabilitation guides for various orthopedic surgeries by Dr. Apoorv Dua. Empower your recovery with clear, easy-to-follow protocols for optimal healing and mobility restoration.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {rehabItems.map((item, index) => (
            <div key={index} className="bg-teal-600 text-white p-6 rounded-lg shadow-md flex flex-col items-center">
              <img src={item.icon} alt={item.title} className="w-16 h-16 mb-4" />
              <h3 className="text-lg font-bold mb-4 text-center">{item.title}</h3>
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-teal-600 px-4 py-2 rounded-full font-semibold hover:bg-gray-100"
              >
                View Now
              </a>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Rehabilitation;