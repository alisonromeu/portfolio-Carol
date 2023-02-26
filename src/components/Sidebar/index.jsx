import Profile from '../../img/profile.jpg';

import SocialNetworks from '../SocialNetworks';
import InformationContainer from '../InformationContainer';

import '../../styles/components/sidebar.sass';



const Sidebar = () => {
  return (
    <aside id="sidebar">
        <img src={Profile} alt="Jéssica Caroline Sabino" />
        <p className="title">Designer Gráfica</p>
        <SocialNetworks />
        <InformationContainer />
        <a href="#" className="btn">
            Download CV
        </a>
    </aside>
  )
}

export default Sidebar;