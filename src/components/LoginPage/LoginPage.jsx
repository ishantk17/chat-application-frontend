// import React, { useState } from 'react';
// import axios from 'axios';

// function LoginPage({ isLogin, setIsLogin }) {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [message, setMessage] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       let res = await axios.post('http://localhost:5000/api/login', { email, password });
//       if (res.status === 200) {
//         setIsLogin(true);
//       } else {
//         // If login fails, try to sign up
//         res = await axios.post('http://localhost:5000/api/login', { email, password });
//         if (res.status === 200) {
//           setIsLogin(true);
//         } else {
//           setMessage('An error occurred');
//         }
//       }
//     } catch (err) {
//       console.error(err);
//       setMessage('An error occurred 2');
//     }
//   };

//   return (
//     <div className="LoginPageContainer">
//       <h1>Login/Signup</h1>
//       <form onSubmit={handleSubmit}>
//         <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className='email'/>
//         <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className='pass'/>
//         <button type='submit'>Login/Signup</button>
//       </form>
//       {message && <p>{message}</p>}
//     </div>
//   );
// }

// export default LoginPage;
import React, { useState } from 'react';
import axios from 'axios';

function LoginPage({ isLogin,  setIslogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/login', { email, password });
      if (res.status === 200) {
        setIslogin(true);
        setMessage(res.data);
      } else {
        setMessage('An error occurred');
      }
    } catch (err) {
      console.error(err);
      setMessage('An error occurred');
    }
  };

  return (
    <div className="LoginPageContainer">
      <h1>Login/Signup</h1>
      <form onSubmit={handleSubmit}>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className='email'/>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className='pass'/>
        <button type='submit'>Login/Signup</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}

export default LoginPage;

