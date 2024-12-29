// // src/Register.js
// import React, { useState } from 'react';
// import axios from 'axios';

// const Register = () => {
//   const [displayname, setDisplayname] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [error, setError] = useState('');
//   const [success, setSuccess] = useState('');

//   // const handleSubmit = async (e) => {
//   //   e.preventDefault();
//   //   setError('');
//   //   setSuccess('');

//   //   // Check if password and confirmPassword match
//   //   if (password !== confirmPassword) {
//   //     setError('Passwords do not match');
//   //     return;
//   //   }

//   //   try {
//   //     const response = await axios.post('http://localhost:4000/api/users/signup', { displayname, email, password });
//   //     setSuccess('User registered successfully');
//   //     setDisplayname('');
//   //     setEmail('');
//   //     setPassword('');
//   //     setConfirmPassword('');
//   //   } catch (error) {
//   //     if (error.response && error.response.data.error) {
//   //       setError(error.response.data.error);  // Error from backend
//   //     } else {
//   //       setError('Registration failed. Please try again.');
//   //     }
//   //   }
//   // };
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError('');
//     setSuccess('');
  
//     // Check if password and confirmPassword match
//     if (password !== confirmPassword) {
//       setError('Passwords do not match');
//       return;
//     }
  
//     try {
//       const response = await axios.post('http://localhost:4000/api/users/signup', { displayName: displayname, email, password });
//       setSuccess('User registered successfully');
//       setDisplayname('');
//       setEmail('');
//       setPassword('');
//       setConfirmPassword('');
//     } catch (error) {
//       if (error.response && error.response.data.error) {
//         setError(error.response.data.error);  // Error from backend
//       } else {
//         setError('Registration failed. Please try again.');
//       }
//     }
//   };
//   return (
//     <div className="container mx-auto mt-10">
//       <h2 className="text-2xl text-center mb-4">Register</h2>
//       {error && <div className="text-red-500 text-center mb-4">{error}</div>}
//       {success && <div className="text-green-500 text-center mb-4">{success}</div>}
//       <form onSubmit={handleSubmit} className="max-w-md mx-auto p-6 border border-gray-300 rounded-lg">
//         <div className="mb-4">
//           <label htmlFor="displayname" className="block text-sm font-medium">Display Name</label>
//           <input
//             type="text"
//             id="displayname"
//             value={displayname}
//             onChange={(e) => setDisplayname(e.target.value)}
//             className="mt-1 p-2 w-full border border-gray-300 rounded-md"
//             required
//           />
//         </div>
//         <div className="mb-4">
//           <label htmlFor="email" className="block text-sm font-medium">Email</label>
//           <input
//             type="email"
//             id="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             className="mt-1 p-2 w-full border border-gray-300 rounded-md"
//             required
//           />
//         </div>
//         <div className="mb-4">
//           <label htmlFor="password" className="block text-sm font-medium">Password</label>
//           <input
//             type="password"
//             id="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             className="mt-1 p-2 w-full border border-gray-300 rounded-md"
//             required
//           />
//         </div>
//         <div className="mb-4">
//           <label htmlFor="confirmPassword" className="block text-sm font-medium">Confirm Password</label>
//           <input
//             type="password"
//             id="confirmPassword"
//             value={confirmPassword}
//             onChange={(e) => setConfirmPassword(e.target.value)}
//             className="mt-1 p-2 w-full border border-gray-300 rounded-md"
//             required
//           />
//         </div>
//         <button type="submit" className="w-full py-2 bg-blue-500 text-white rounded-md">Register</button>
//       </form>
//     </div>
//   );
// };

// export default Register;




// import React, { useState } from 'react';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import { Link, useNavigate } from 'react-router-dom';
// import axios from 'axios';

// export default function Register() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [name, setName] = useState('');
//   const [userType, setUserType] = useState('');
//   const navigate = useNavigate();

//   const handleLogin = async () => {
//     const body = {
//       name,
//       email,
//       password,
//       userType,
//     };

//     try {
//       const response = await axios.post('http://localhost:3002/user', body, {
//         headers: { 'Content-Type': 'application/json' },
//       });

//       if (response.status === 200) {
//         toast.success(response.data.message);
//         setTimeout(() => {
//           navigate('/login');

//         }, 2000)
//       }
//     } catch (err) {
//       toast.error(err.response.data.message);
//     }
//   };

//   return (
//     <div
//       className="w-full h-screen bg-cover bg-center "
//       style={{
//         backgroundImage: `url('/images/login.png')`,
//       }}
//     >
//       <div className="w-full max-w-xs m-auto mt-20">
//         {userType === '' ? (
//           <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
//             <h2 className="text-green-700 text-xl font-bold mb-4">Select User Type</h2>
//             <div className="flex justify-between">
              
//               <button
//                 className={`bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${userType === 'student' ? 'bg-green-700' : ''
//                   }`}
//                 onClick={() => setUserType('student')}
//               >
//                 User
//               </button>
//             </div>
//           </div>
//         ) : (
//           <form className="bg-gradient-to-r from-green-400 via-blue-500 to-green-400 bg-opacity-90 shadow-md rounded-3xl px-8 pt-6 pb-8 mb-4">
//             <div className="mb-4">
//               <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
//                 Name
//               </label>
//               <input
//                 className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                 id="name"
//                 type="text"
//                 placeholder="Name"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//               />
//             </div>
//             <div className="mb-4">
//               <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
//                 Email
//               </label>
//               <input
//                 className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                 id="email"
//                 type="email"
//                 placeholder="Email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//               />
//             </div>
//             <div className="mb-6">
//               <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
//                 Password
//               </label>
//               <input
//                 className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
//                 id="password"
//                 type="password"
//                 placeholder="******************"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//               />
//             </div>
//             <div className="flex items-center justify-between">
//               <button
//                 className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//                 type="button"
//                 onClick={handleLogin}
//               >
//                 Register
//               </button>
//             </div>
//             <p>If you are already register then move to login page <Link to='/login'>Login</Link></p>
//           </form>
//         )}
//         <ToastContainer />
//       </div>
//     </div>
//   );
// }
import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [userType, setUserType] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    const body = {
      name,
      email,
      password,
      userType,
    };

    try {
      const response = await axios.post('http://localhost:3002/user', body, {
        headers: { 'Content-Type': 'application/json' },
      });

      if (response.status === 200) {
        toast.success(response.data.message);
        setTimeout(() => {
          navigate('/login');
        }, 2000);
      }
    } catch (err) {
      toast.error(err.response.data.message);
    }
  };

  return (
    <div
      className="w-full h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url('/images/login.png')`,
      }}
    >
      <div className="w-full max-w-md m-auto mt-20">
        {userType === '' ? (
          <div className="bg-gradient-to-r from-green-400 via-blue-500 to-green-400 bg-opacity-90 shadow-md rounded-lg px-8 py-6 mb-6">
            <h2 className="text-white text-2xl font-semibold mb-4 text-center">Select User Type</h2>
            <div className="flex justify-between">
              <button
                className={`w-full bg-gradient-to-r from-green-500 to-green-700 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline ${userType === 'student' ? 'bg-green-700' : ''}`}
                onClick={() => setUserType('student')}
              >
                User
              </button>
            </div>
          </div>
        ) : (
          <form className="bg-gradient-to-r from-green-400 via-blue-500 to-green-400 bg-opacity-90 shadow-lg rounded-3xl px-8 py-8 mb-6">
            <h2 className="text-white text-2xl font-bold mb-6 text-center">Register</h2>
            <div className="mb-4">
              <label className="block text-white text-sm font-bold mb-2" htmlFor="name">
                Name
              </label>
              <input
                className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label className="block text-white text-sm font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input
                className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-6">
              <label className="block text-white text-sm font-bold mb-2" htmlFor="password">
                Password
              </label>
              <input
                className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="******************"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-gradient-to-r from-blue-500 to-green-500 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline w-full"
                type="button"
                onClick={handleLogin}
              >
                Register
              </button>
            </div>
            <p className="text-center text-white mt-4 text-sm">
              Already registered? <Link to="/login" className="text-blue-300 hover:text-blue-500">Login</Link>
            </p>
          </form>
        )}
        <ToastContainer />
      </div>
    </div>
  );
}
