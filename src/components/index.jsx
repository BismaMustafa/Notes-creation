// import React, { useState } from 'react';

// const App = () => {
//   const [showRegistrationForm, setShowRegistrationForm] = useState(false);
//   const [showNotesPage, setShowNotesPage] = useState(false);
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   const notes = [
//     { title: "Math Lecture Notes", content: "These are some notes on algebra." },
//     { title: "Science Lecture Notes", content: "Notes on Newton's laws of motion." },
//     { title: "History Lecture Notes", content: "Ancient civilization notes." }
//   ];

//   const handleRegisterClick = () => {
//     setShowRegistrationForm(!showRegistrationForm);
//   };

//   const handleRegistrationSubmit = (event) => {
//     event.preventDefault();
//     setShowRegistrationForm(false);
//     setIsLoggedIn(true);
//     alert('Registration Successful');
//   };

//   const handleNotesPageLinkClick = () => {
//     setShowNotesPage(true);
//   };

//   return (
//     <div>
//       <nav className="bg-gray-800 p-4">
//         <div className="container mx-auto flex items-center justify-between">
//           <a className="text-white" href="#"><img src="./logo192.png" alt="logo" className="h-12 w-12" /></a>
//           <button className="block lg:hidden text-white focus:outline-none" id="navToggle">
//             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
//             </svg>
//           </button>
//           <div className="hidden lg:flex lg:items-center lg:w-auto" id="navMenu">
//             <ul className="lg:flex lg:items-center lg:space-x-6">
//               {isLoggedIn && (
//                 <>
//                   <li id="homeLink">
//                     <a className="text-white hover:text-gray-300" aria-current="page" href="#">Home</a>
//                   </li>
//                   <li id="notesLink">
//                     <a className="text-white hover:text-gray-300" href="#" onClick={handleNotesPageLinkClick}>Notes</a>
//                   </li>
//                 </>
//               )}
//             </ul>
//             <div className="flex items-center space-x-4 ml-4">
//               {!isLoggedIn ? (
//                 <>
//                   <button
//                     className="btn btn-outline-success text-white border border-green-500 py-2 px-4 rounded hover:bg-green-500"
//                     onClick={handleRegisterClick}
//                   >
//                     {showRegistrationForm ? 'Cancel Registration' : 'Register'}
//                   </button>
//                   <button className="btn btn-outline-success text-white border border-green-500 py-2 px-4 rounded hover:bg-green-500">
//                     Signup
//                   </button>
//                 </>
//               ) : (
//                 <button
//                   className="btn btn-outline-success text-white border border-green-500 py-2 px-4 rounded hover:bg-green-500"
//                   onClick={() => setIsLoggedIn(false)}
//                 >
//                   Logout
//                 </button>
//               )}
//             </div>
//           </div>
//         </div>
//       </nav>

//       {showRegistrationForm && (
//         <div className="container mx-auto mt-4">
//           <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
//             <h5 className="text-gray-900 text-xl font-bold mb-4">Registration</h5>
//             <form onSubmit={handleRegistrationSubmit}>
//               <div className="mb-4">
//                 <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Name</label>
//                 <input type="text" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" placeholder="Enter your name" />
//               </div>
//               <div className="mb-4">
//                 <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email</label>
//                 <input type="email" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" placeholder="Enter your email" />
//               </div>
//               <div className="mb-4">
//                 <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">Password</label>
//                 <input type="password" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password" placeholder="Enter password" />
//               </div>
//               <div className="mb-4">
//                 <label htmlFor="confirmPassword" className="block text-gray-700 text-sm font-bold mb-2">Confirm Password</label>
//                 <input type="password" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="confirmPassword" placeholder="Confirm password" />
//               </div>
//               <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Register</button>
//             </form>
//           </div>
//         </div>
//       )}

//       {showNotesPage && (
//         <div className="container mx-auto mt-4">
//           <h2 className="text-2xl font-bold mb-4">Student Notes</h2>
//           <ul className="list-none p-0" id="notesList">
//             {notes.map((note, index) => (
//               <li key={index} className="bg-white shadow-md rounded px-4 py-2 mb-2">
//                 <h5 className="font-bold">{note.title}</h5>
//                 <p>{note.content}</p>
//               </li>
//             ))}
//           </ul>
//         </div>
//       )}
//     </div>
//   );
// };

// export default App;
