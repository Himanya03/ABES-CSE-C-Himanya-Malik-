// //npm run dev 
// import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";

// function Com1() {
//   return (
//     <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">
//       <a className="navbar-brand d-flex align-items-center" href="#">
//         <img
//           src="https://img.freepik.com/free-vector/bird-colorful-gradient-design-vector_343694-2506.jpg?semt=ais_hybrid&w=740&q=80"
//           alt="Logo"
//           className="rounded-circle me-2"
//           width="50"
//           height="50"
//         />
//       </a>
//       <div className="collapse navbar-collapse">
//         <ul className="navbar-nav ms-auto">
//           <li className="nav-item">
//             <a className="nav-link" href="#">Home</a>
//           </li>
//           <li className="nav-item">
//             <a className="nav-link" href="#">About Us</a>
//           </li>
//         </ul>
//       </div>
//     </nav>
//   );
// }

// function Com2() {
//   return (
//     <div className="text-center my-4">
//       <h2>Welcome to Our Hotel</h2>
//     </div>
//   );
// }

// function Com3() {
//   const menuItems = [
//     { name: "Pizza", img: "https://b.zmtcdn.com/data/pictures/chains/3/143/ce0341e58cf96f163101b4dff77ed938.jpg?fit=around|960:500&crop=960:500;*,*",  rate: "₹250" },
//     { name: "Burger", img: "https://b.zmtcdn.com/data/pictures/7/20885107/72d5c0358828df225e02389bc3ac8c75_featured_v2.jpg", rate: "₹150" },
//     { name: "Coke", img: "https://cdn.uengage.io/uploads/18085/image-179182-1711711756.jpeg", rate: "₹80" },
//   ];

//   return (
//     <div className="container text-center my-4">
//       <h3>Our Menu</h3>
//       <div className="row mt-3">
//         {menuItems.map((item, index) => (
//           <div className="col-md-4 mb-4" key={index}>
//             <div className="card shadow">
//               <img src={item.img} className="card-img-top" alt={item.name} style={{ width: "100%", height: "200px", objectFit: "cover" }}/>
//               <div className="card-body">
//                 <h5 className="card-title">{item.name}</h5>
//                 <p className="card-text">Rate: {item.rate}</p>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// function Com4() {
//   return (
//     <footer className="bg-dark text-white text-center py-3 mt-4">
//       <p>Address: 123 Food Street, Delhi, India</p>
//     </footer>
//   );
// }

// export default function App() {
//   return (
//     <div>
//       <Com1 />
//       <Com2 />
//       <Com3 />
//       <Com4 />
//     </div>
//   );
// }



import React from 'react'

function App() {
  return (
    <div>
      <Link />
       
    </div>
  )
}

export default App
