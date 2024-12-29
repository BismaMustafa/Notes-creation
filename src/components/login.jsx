// // src/Login.js
// import React, { useState } from 'react';
// import axios from 'axios';

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError(''); // Clear any previous error message

//     try {
//       const response = await axios.post('http://localhost:4000/api/users/login', { email, password });
//       alert('User logged in successfully');
//       // Save the token to local storage or context
//       localStorage.setItem('token', response.data.token);
//     } catch (error) {
//       console.error('Login error:', error); // Log error details
//       if (error.response && error.response.status === 401) {
//         setError('Invalid credentials');
//       } else {
//         setError('Login failed. Please try again.');
//       }
//     }
//   };

//   return (
//     <div className="container mx-auto mt-10">
//       <h2 className="text-2xl text-center mb-4">Login</h2>
//       {error && <div className="text-red-500 text-center mb-4">{error}</div>}
//       <form onSubmit={handleSubmit} className="max-w-md mx-auto p-6 border border-gray-300 rounded-lg">
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
//         <button type="submit" className="w-full py-2 bg-blue-500 text-white rounded-md">Login</button>
//       </form>
//     </div>
//   );
// };

// export default Login;


// import React, { useState } from 'react';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';

// export default function Example() {
//   const [email, setEmail] = useState('')
//   const [password, setPassword] = useState('')
//   const navigate = useNavigate()
//   const handleLogin = async () => {
//     const body = {
//       email: email,
//       password: password
//     }
//     try {
//       const response = await axios.post('http://localhost:3002/user/login', body,
//         { headers: { "Content-Type": "application/json" } }
//       )
//       if (response.status = 200) {
//         toast.success(response.data.message)
//         localStorage.setItem('token', response.data.token)
//         setTimeout(()=>{
//           navigate('/');
  
//           }, 2000)
//       }
//     }
//     catch (err) {
//       toast.error(err.response.data.message)

//     }

//   }
//   return (
 
//       <div
//         className="w-full h-screen bg-cover bg-center flex items-center justify-center"
//         style={{
//           backgroundImage: `url('/images/login.png')`,
//         }}
//       >
//        <div className="w-full max-w-xs m-auto mt-20 bg-gradient-to-r from-green-400 via-blue-500 to-green-400 bg-opacity-90 rounded-3xl shadow-lg p-6">
//   <form className="bg-white bg-opacity-90 shadow-md rounded-3xl px-8 pt-6 pb-8 mb-4">
//     <div className="mb-4">
//       <label
//         className="block text-gray-700 text-sm font-bold mb-2"
//         htmlFor="username"
//       >
//         Email
//       </label>
//       <input
//         className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//         id="email"
//         type="email"
//         placeholder="Email"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//       />
//     </div>
//     <div className="mb-6">
//       <label
//         className="block text-gray-700 text-sm font-bold mb-2"
//         htmlFor="password"
//       >
//         Password
//       </label>
//       <input
//         className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
//         id="password"
//         type="password"
//         placeholder="******************"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//       />
//     </div>
//     <div className="flex items-center justify-between">
//       <button
//         className="bg-gradient-to-r from-blue-500 to-green-500 hover:from-green-500 hover:to-blue-500 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline"
//         type="button"
//         onClick={handleLogin}
//       >
//         Sign In
//       </button>
//       <a
//         className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
//         href="#"
//       >
//         Forgot Password?
//       </a>
//     </div>
//   </form>
//   <p className="text-center text-gray-500 text-xs">
//     &copy;2020 Acme Corp. All rights reserved.
//   </p>
//   <ToastContainer />
// </div>
// </div>
     
//     );
    

// }
import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    const body = {
      email: email,
      password: password
    };
    try {
      const response = await axios.post('http://localhost:3002/user/login', body, {
        headers: { "Content-Type": "application/json" }
      });
      if (response.status === 200) {
        toast.success(response.data.message);
        localStorage.setItem('token', response.data.token);
        setTimeout(() => {
          navigate('/');
        }, 2000);
      }
    } catch (err) {
      toast.error(err.response.data.message);
    }
  };

  return (
    <div
      className="w-full h-screen bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage: `url('/images/login.png')`,
      }}
    >
      <div className="w-full max-w-md m-auto mt-20 bg-gradient-to-r from-green-400 via-blue-500 to-green-400 bg-opacity-90 rounded-xl shadow-2xl p-8 transform hover:scale-105 transition duration-300 ease-in-out">
        <form className="bg-white bg-opacity-80 shadow-xl rounded-3xl p-8 space-y-6">
          <div className="mb-4">
            <label className="block text-gray-700 text-lg font-semibold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="shadow-lg appearance-none border rounded-xl w-full py-3 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-transparent"
              id="email"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-lg font-semibold mb-2" htmlFor="password">
              Password
            </label>
            <input
              className="shadow-lg appearance-none border rounded-xl w-full py-3 px-4 text-gray-700 mb-3 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-transparent"
              id="password"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="w-full py-3 bg-gradient-to-r from-blue-500 to-green-500 hover:from-green-500 hover:to-blue-500 text-white text-xl font-semibold rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-300"
              type="button"
              onClick={handleLogin}
            >
              Sign In
            </button>
          </div>
          <div className="mt-4 flex justify-between items-center">
            <a
              className="text-sm text-blue-500 hover:text-blue-700 font-semibold"
              href="#"
            >
              Forgot Password?
            </a>
            <p className="text-xs text-gray-500">
              &copy; 2024 My App. All rights reserved.
            </p>
          </div>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
}
