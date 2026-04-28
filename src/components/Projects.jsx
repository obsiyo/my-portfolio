import { motion } from "framer-motion";

const projects = [
  { title: "Banking Dashboard", desc: "Transaction monitoring system" },
  { title: "Portfolio Website", desc: "Personal developer portfolio" },
  { title: "Payment API", desc: "Telebirr & MPESA integration" },
];

export default function Projects() {
  return (
    <section id="projects" className="bg-dark text-white py-5">
      <div className="container">
        <h2 className="fw-bold text-center mb-4">Projects</h2>

        <div className="row">
          {projects.map((p, i) => (
            <div key={i} className="col-md-4 mb-3">
              <motion.div whileHover={{ scale: 1.05 }} className="card bg-secondary text-white p-3">
                <h5>{p.title}</h5>
                <p className="text-light">{p.desc}</p>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}