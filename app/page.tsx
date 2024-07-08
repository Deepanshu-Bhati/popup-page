"use client";
import React, { useState } from 'react';
import Popup from "reactjs-popup";
import 'reactjs-popup/dist/index.css';
import Input from "./components/input";
import { useRouter } from 'next/navigation';

export default function Home() {
  const [name, setName] = useState("");
  const route = useRouter();
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);

  // Save form data to localStorage
  const handleSave = () => {
    localStorage.setItem("name", name);
    localStorage.setItem("phone", phone);
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);
    setShow(true);
  };

  return (
    <div className="flex justify-center items-center w-full h-screen">
      <div className="border w-1/2 flex flex-col items-center p-5 space-y-4">
        <Input label="Name" placeholder="Enter your name" setitem={setName} />
        <Input label="Phone" placeholder="Enter your phone" setitem={setPhone} />
        <Input label="Email" placeholder="Enter your email" setitem={setEmail} />
        <Input label="Password" placeholder="Enter your password" setitem={setPassword} />

        <button className="mt-5 p-2 bg-blue-500 text-white rounded" onClick={handleSave}>Send data</button>

        <Popup
          open={show}
          modal
          nested
        >
          <div className="modal p-5">
            <div className="content space-y-2">
              <div><strong>Name:</strong> {name}</div>
              <div><strong>Phone:</strong> {phone}</div>
              <div><strong>Email:</strong> {email}</div>
              <div><strong>Password:</strong> {password}</div>
            </div>
            <button
              className="mt-5 p-2 bg-red-500 text-white rounded"
              onClick={() => setShow(false)}
            >
              Close modal
            </button>
          </div>
        </Popup>
      </div>
    </div>
  );
}
