import { SiCanva, SiAdobephotoshop, SiFigma, SiAdobeindesign, SiAdobeillustrator } from 'react-icons/si';

import '../../styles/components/technologiesContainer.sass';

const technologies = [
  {id: "canva", name: "Canva", icon: <SiCanva />},
  {id: "figma", name: "Figma", icon: <SiFigma />},
  {id: "photoshop", name: "Photoshop", icon: <SiAdobephotoshop />},
  {id: "inDesign", name: "InDesign ", icon: <SiAdobeindesign />},
  {id: "illustrator", name: "Illustrator", icon: <SiAdobeillustrator />},
]

const TechnologiesContainer = () => {
  return (
    <section className="technologies-container">
      <h2>Habilidades</h2>
      <div className="technologies-grid">
        {technologies.map((tech) => (
          <div className="technology-card" id={tech.id} key={tech.id}>
            {tech.icon}
            <div className="technology-info">
              <h3>{tech.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default TechnologiesContainer