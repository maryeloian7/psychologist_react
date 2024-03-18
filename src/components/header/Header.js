// import { useState } from "react";

// import "./Header.css";

// const Header = () => {
//   const [isBurgerOpen, setIsBurgerOpen] = useState(false);
//   const onNavMenuOpen = () => {
//     setIsBurgerOpen(!isBurgerOpen);
//   };

//   const closeMenu = () => {
//     setIsBurgerOpen(false);
//   };
//   const data = [
//     { name: "Направления моей работы", href: "#BodyContent" },
//     { name: "Как я работаю ?", href: "#HowIWork" },
//     { name: "Кейсы", href: "#Cases" },
//     { name: "Услуги", href: "#Service" },
//     { name: " Контакты", href: "#Footer" },
//   ];
//   return (
//     <div>
//       <header className="header " id="header">
//         <nav className="header_block _container">
//           <ul
//             onClick={closeMenu}
//             className={isBurgerOpen ? "header_items active" : "header_items"}
//           >
//             {data.map((row, i) => {
//               return (
//                 <li className="header_item _work" key={i}>
//                   <a href={row.href} className="header_itemLink">
//                     {row.name}
//                   </a>
//                 </li>
//               );
//             })}
//           </ul>
//           <div
//             className={
//               isBurgerOpen ? "toggle mobileBurgerButton" : "mobileBurgerButton"
//             }
//             onClick={onNavMenuOpen}
//           >
//             <div className="line1"></div>
//             <div className="line2"></div>
//             <div className="line3 "></div>
//           </div>
//         </nav>
//       </header>
//     </div>
//   );
// };

// export default Header;
