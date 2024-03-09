
import Cases1 from './Cases1';
import Cases2 from './Cases2';
import Cases3 from './Cases3';
import Cases4 from './Cases4';
import Cases5 from './Cases5';
import Cases6 from './Cases6';
import '../cases/Cases.css'

const Cases = () => {

//     import React, { useState } from 'react';

// const TabComponent = ({ tabs, tabsContent, tabsParentSelector, activeClass }) => {
//   const [activeTab, setActiveTab] = useState(0);

//   const hideTabContent = () => {
//     tabsContent.forEach((item) => {
//       item.classList.add('hide');
//       item.classList.remove('show', 'fade');
//     });

//     tabs.forEach((item) => {
//       item.classList.remove(activeClass);
//     });
//   };

//   const showTabContent = (i) => {
//     tabsContent[i].classList.add('show', 'fade');
//     tabsContent[i].classList.remove('hide');
//     tabs[i].classList.add(activeClass);
//   };

//   const handleTabClick = (i) => {
//     hideTabContent();
//     showTabContent(i);
//     setActiveTab(i);
//   };

//   return (
//     <div>
//       {tabs.map((tab, i) => (
//         <div
//           key={i}
//           className={activeTab === i ? `${tabsSelector.slice(1)} ${activeClass}` : tabsSelector.slice(1)}
//           onClick={() => handleTabClick(i)}
//         >
//           {tab}
//         </div>
//       ))}
//     </div>
//   );
// };


    return (
        <div className="cases" id='Cases'>
            <div className="  _container">
                <h2 className="cases_title">Кейсы</h2>
        <div className="cases_bloc block"> 
            <Cases1/>  
            <Cases2/> 
            <Cases3/> 
            <Cases4/> 
            <Cases5/> 
            <Cases6/>       
        </div>
        </div>
        </div>
    )

}

export default Cases;