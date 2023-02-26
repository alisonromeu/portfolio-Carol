import { FaLinkedinIn, FaInstagram, FaFacebook  } from 'react-icons/fa'

import '../../styles/components/socialNetworks.sass';

const socialNetworks = [
    {
        name: "instagram", link: "https://www.instagram.com/sabino_line/", icon: <FaInstagram />
    },
    {
        name: "facebook", link: "https://www.facebook.com/line.bruxinha", icon: <FaFacebook />
    },
    {
        name: "linkedin", link: "https://www.linkedin.com/in/j%C3%A9ssica-caroline/", icon: <FaLinkedinIn />
    }
]

const SocialNetworks = () => {
  return (
    <section id='social-networks'>
        {socialNetworks.map((network) => (
            <a href={network.link}
                target="_blank" 
                className='social-btn' 
                id={network.name} 
                key={network.name}
            >
                {network.icon}
            </a>
        ))}
    </section>
  )
}

export default SocialNetworks