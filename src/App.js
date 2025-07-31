import logo from './logo.svg';
import './App.css';
import SecondScreen from './screens/SecondScreen';
import AboutMe from './components/me/Me';
import FirstScreen from './screens/FirstScreen';
import image1 from "./images/סיון גרוס תמונת פתיחה 1.png"

import image3 from "./images/סוויטה לבדיקה 10.png"
import open1 from "./images/סיון תמונות פתיחה 1.png"
import open2 from "./images/סיון תמונות פתיחה 2.png"
import open3 from "./images/סיון תמונות פתיחה 3.png"
import image4 from "./images/סוויטה להצגה מסך ראשוני 4.png"

import image6 from "./images/סיון גרוס תמונת פתיחה 2.png"
import TextFillEffect from './screens/ThirdScreen';
import ForthScreen from './screens/ForthScreen';

import FifthScreen from './screens/FifthScreen';
import { useEffect } from 'react';
import ByMe from './components/ByMe/ByMe';
import ParralexScreen from './screens/ParralexScreen';
import Recommendations from './components/recommends/Recommends';
import SocialLinks from './components/social/Social';
import SivanNew from './screens/SivanProjects';
import InteriorDesign from './components/jobs/Jobs';
// מערך תמונות מסוגנן בפורמט שהקומפוננט מצפה לקבל
const images = [
  { src: open1, },
  { src: open2, }, 

  { src: open3, },

 
];

function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return <>
    <FirstScreen images={images}/>
    {/* <TextFillEffect/> */}

    <AboutMe/>
    <Recommendations/>
    <SivanNew/>
    {/* <SecondScreen/> */}
    <ForthScreen/>



    <ByMe/>
  </>
}

export default App;