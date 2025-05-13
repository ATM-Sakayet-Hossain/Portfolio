// import React, { useState } from "react";
// import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";

// const UserInformation = () => {
//   let [name, setName] = useState("");
//   let [nameErr, setNameErr] = useState("");
//   let [email, setEmail] = useState("");
//   let [emailErr, setEmailErr] = useState("");
//   let [budget, setBudget] = useState("");
//   let [budgetErr, setBudgetErr] = useState("");
//   let [subject, setSubject] = useState("");
//   let [subjectErr, setSubjectErr] = useState("");
//   let [message, setMessage] = useState("");
//   let [messageErr, setMessageErr] = useState("");

//   const handelSubmit = (e) => {
//     e.preventDefault();
//       if (!name) {
//         setNameErr("type your name");
//     } else if (!email) {
//       setEmailErr("Type your Email");
//     } else if (!budget) {
//       setBudgetErr("Type your Email");
//     } else if (!subject) {
//       setSubjectErr("Type your Email");
//     } else if (!message) {
//       setMessageErr("Type your Email");
//     } else {
//       alert("Submited");
//     }
//   };
//   return (
//     <form onSubmit={handelSubmit} className="grid grid-cols-1 gap-6">
//       {nameErr && <p className="flex justify-center">{nameErr}</p>}
//       <input
//         onChange={(e) => {
//           setName(e.target.value), setNameErr("");
//         }}
//         type="text"
//         placeholder="Name"
//         className="border-0 border-b border-gray-300 text-gray-700 hover:text-band hover:border-band focus:text-band focus:border-band focus:outline-none transition-all duration-200 pl-5 h-9"
//       />
//       {emailErr && <p className="flex justify-center">{emailErr}</p>}
//       <input
//         onChange={(e) => {
//           setEmail(e.target.value), setEmailErr("");
//         }}
//         type="email"
//         placeholder="Email"
//         className="border-0 border-b border-gray-300 text-gray-700 hover:text-band hover:border-band focus:text-band focus:border-band focus:outline-none transition-all duration-200 pl-5 h-9"
//       />
//       <input
//         type="text"
//         placeholder="Location"
//         className="border-0 border-b border-gray-300 text-gray-700 hover:text-band hover:border-band focus:text-band focus:border-band focus:outline-none transition-all duration-200 pl-5 h-9"
//       />
//       <div className="grid grid-cols-2 gap-6">
//         {budgetErr && <p className="flex justify-center">{budgetErr}</p>}
//         <input
//           onChange={(e) => {
//             setBudget(e.target.value), setBudgetErr("");
//           }}
//           type="text"
//           placeholder="Budget"
//           className="border-0 border-b border-gray-300 text-gray-700 hover:text-band hover:border-band focus:text-band focus:border-band focus:outline-none transition-all duration-200 pl-5 h-9"
//         />
//         {subjectErr && <p className="flex justify-center">{subjectErr}</p>}
//         <input
//           onChange={(e) => {
//             setSubject(e.target.value), setSubjectErr("");
//           }}
//           type="text"
//           placeholder="Subject"
//           className="border-0 border-b border-gray-300 text-gray-700 hover:text-band hover:border-band focus:text-band focus:border-band focus:outline-none transition-all duration-200 pl-5 h-9"
//         />
//       </div>
//       {messageErr && <p className="flex justify-center">{messageErr}</p>}
//       <input
//         onChange={(e) => {
//           setMessage(e.target.value), setMessageErr("");
//         }}
//         type="text"
//         placeholder="Message"
//         className="border-0 border-b border-gray-300 text-gray-700 hover:text-band hover:border-band focus:text-band focus:border-band focus:outline-none transition-all duration-200 pl-5 h-9"
//       />
//       <button
//         className="w-fit py-3 px-6 border border-band text-band hover:text-white hover:bg-band text-base font-semibold font-workSans rounded-sm flex! items-center gap-3 transition-all "
//         type="Submit"
//       >
//         Submit
//         <span>
//           <MdOutlineKeyboardDoubleArrowRight />
//         </span>
//       </button>
//     </form>
//   );
// };

// export default UserInformation;

import React, { useState } from "react";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";

const UserInformation = () => {
  const [name, setName] = useState("");
  const [nameErr, setNameErr] = useState("");
  const [email, setEmail] = useState("");
  const [emailErr, setEmailErr] = useState("");
  const [budget, setBudget] = useState("");
  const [budgetErr, setBudgetErr] = useState("");
  const [subject, setSubject] = useState("");
  const [subjectErr, setSubjectErr] = useState("");
  const [message, setMessage] = useState("");
  const [messageErr, setMessageErr] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    let isValid = true;

    if (!name) {
      setNameErr("Please type your name");
      isValid = false;
    } else {
      setNameErr("");
    }

    if (!email) {
      setEmailErr("Please type your email");
      isValid = false;
    } else {
      setEmailErr("");
    }

    if (!budget) {
      setBudgetErr("Please enter your budget");
      isValid = false;
    } else {
      setBudgetErr("");
    }

    if (!subject) {
      setSubjectErr("Please enter the subject");
      isValid = false;
    } else {
      setSubjectErr("");
    }

    if (!message) {
      setMessageErr("Please enter your message");
      isValid = false;
    } else {
      setMessageErr("");
    }

    if (isValid) {
      alert("Submitted");
      // Optional: Reset form here
    }
  };

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6">
      {nameErr && <p className="text-red-500 text-sm">{nameErr}</p>}
      <input
        onChange={(e) => {
          setName(e.target.value);
          setNameErr("");
        }}
        type="text"
        placeholder="Name"
        className="border-0 border-b border-gray-300 text-gray-700 hover:text-band hover:border-band focus:text-band focus:border-band focus:outline-none transition-all duration-200 pl-5 h-9"
      />

      {emailErr && <p className="text-red-500 text-sm">{emailErr}</p>}
      <input
        onChange={(e) => {
          setEmail(e.target.value);
          setEmailErr("");
        }}
        type="email"
        placeholder="Email"
        className="border-0 border-b border-gray-300 text-gray-700 hover:text-band hover:border-band focus:text-band focus:border-band focus:outline-none transition-all duration-200 pl-5 h-9"
      />

      <input
        type="text"
        placeholder="Location"
        className="border-0 border-b border-gray-300 text-gray-700 hover:text-band hover:border-band focus:text-band focus:border-band focus:outline-none transition-all duration-200 pl-5 h-9"
      />

      <div className="grid grid-cols-2 gap-6">
        <div>
          {budgetErr && <p className="text-red-500 text-sm">{budgetErr}</p>}
          <input
            onChange={(e) => {
              setBudget(e.target.value);
              setBudgetErr("");
            }}
            type="text"
            placeholder="Budget"
            className="border-0 border-b border-gray-300 text-gray-700 hover:text-band hover:border-band focus:text-band focus:border-band focus:outline-none transition-all duration-200 pl-5 h-9"
          />
        </div>

        <div>
          {subjectErr && <p className="text-red-500 text-sm">{subjectErr}</p>}
          <input
            onChange={(e) => {
              setSubject(e.target.value);
              setSubjectErr("");
            }}
            type="text"
            placeholder="Subject"
            className="border-0 border-b border-gray-300 text-gray-700 hover:text-band hover:border-band focus:text-band focus:border-band focus:outline-none transition-all duration-200 pl-5 h-9"
          />
        </div>
      </div>

      {messageErr && <p className="text-red-500 text-sm">{messageErr}</p>}
      <input
        onChange={(e) => {
          setMessage(e.target.value);
          setMessageErr("");
        }}
        type="text"
        placeholder="Message"
        className="border-0 border-b border-gray-300 text-gray-700 hover:text-band hover:border-band focus:text-band focus:border-band focus:outline-none transition-all duration-200 pl-5 h-9"
      />

      <button
        className="w-fit py-3 px-6 border border-band text-band hover:text-white hover:bg-band text-base font-semibold font-workSans rounded-sm flex items-center gap-3 transition-all"
        type="submit"
      >
        Submit
        <span>
          <MdOutlineKeyboardDoubleArrowRight />
        </span>
      </button>
    </form>
  );
};

export default UserInformation;