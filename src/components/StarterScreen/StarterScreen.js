import { MdSend } from 'react-icons/md';
import { FaFacebookMessenger, FaSnapchatGhost } from 'react-icons/fa';
import { AiOutlineWhatsApp } from 'react-icons/ai';
import { BsTelegram } from 'react-icons/bs';

import './StarterScreen.css';

const StarterScreen = ({ setStarterScreen }) => {
  return (
    <div style={{display: 'flex', flexDirection: 'column', gap: '15px'}}>
        <div style={{ borderRadius: '8px', padding: '15px', border: '1px solid gainsboro'}}>
            <h3 style={{fontSize: '19px'}}>Hi there</h3>
            <p style={{fontSize: '15px', padding: '15px 0'}}>Lorem ipsum, dolor sit amet consectetur</p>
            <button onClick={() => setStarterScreen(false)} style={{fontSize: '15px', padding: '7px', display: 'flex', gap: '10px', alignItems: 'center', border: 'none', borderRadius: '8px', color: 'white', backgroundColor: '#1260df', cursor: 'pointer'}}>
              <MdSend/>
              Start a conversation
            </button>
        </div>
        <div style={{ borderRadius: '8px', padding: '15px', border: '1px solid gainsboro'}}>
          <h3 style={{fontSize: '19px'}}>Save 50% Today!</h3>
          <img src="https://images.squarespace-cdn.com/content/v1/59b7d9cfa8b2b0ac83066978/1507071844775-1S64PBGGUXRNJBDJRMAM/ke17ZwdGBToddI8pDm48kA_SSaoz4elkj-HsZd8gX3Z7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UWPwZyNcweDIvdeL5kotwkIXjs9g0WibSO_cU-Ijy4Pwg6poS-6WGGnXqDacZer4yQ/no-50-Birmingham-2.jpg" alt="" style={{width: '80%', display: 'block', margin: '5px auto', borderRadius: '8px'}} />
          <a href="" style={{fontSize: '15px'}}>50% Discount</a>
          <p style={{fontSize: '15px', marginTop: '8px'}}>Lorem ipsum, dolor sit amet consectetur adipisicing</p>
        </div>
        <div style={{ borderRadius: '8px', padding: '15px', border: '1px solid gainsboro'}}>
          <h4 style={{fontSize: '15px'}}>Contact us directly:</h4>
          <div style={{display: 'flex', justifyContent: 'center', gap: '15px', color: '#1260df', fontSize: '26px', paddingTop: '15px'}}>
            <FaFacebookMessenger/>
            <BsTelegram/>
            <AiOutlineWhatsApp/>
            <FaSnapchatGhost/>
          </div>
        </div>
    </div>
  )
}

export default StarterScreen;