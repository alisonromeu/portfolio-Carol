import { AiOutlineWhatsApp, AiOutlineMail, AiFillEnvironment } from 'react-icons/ai';

import '../../styles/components/informationContainer.sass';

const InformationContainer = () => {
  return (
    <section id='information-container'>
        <div className="info-card">
            <AiOutlineWhatsApp id='phone-icon' />
            <div>
                <h3>Telefone:</h3>
                <p>(16) 99308-6272</p>
            </div>
        </div>
        <div className="info-card">
            <AiOutlineMail id='email-icon' />
            <div>
                <h3>E-mail:</h3>
                <p>jessicasabino29@gmail.com</p>
            </div>
        </div>
        <div className="info-card">
            <AiFillEnvironment id='pin-icon' />
            <div>
                <h3>Localização:</h3>
                <p>Taquaritinga / SP</p>
            </div>
        </div>
    </section>
  )
}

export default InformationContainer