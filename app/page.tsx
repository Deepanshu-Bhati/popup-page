"use client";
import Image from "next/image";
import Popup from "reactjs-popup";
import 'reactjs-popup/dist/index.css';
import Input from "./components/input";
import React, {ReactNode, useState } from "react";


export default function Home() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Save form data to localStorage
  const handleSave = () => {
    localStorage.setItem("name", name);
    localStorage.setItem("phone", phone);
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);
  };

  return (
    <div className="flex justify-center items-center w-full h-[100vh]">
      <div className="border w-1/2 flex flex-col items-center p-5 space-y-4">
        <Input label="Name" placeholder="Enter your name" setitem={setName} />
        <Input label="Phone" placeholder="Enter your phone" setitem={setPhone} />
        <Input label="Email" placeholder="Enter your email" setitem={setEmail} />
        <Input label="Password" placeholder="Enter your password" setitem={setPassword} />

        <Popup
          trigger={<button className="mt-5 p-2 bg-blue-500 text-white rounded">Send data</button>}
          modal
          nested
        > 
        
        {(close:()=>void):ReactNode =>(
            <div className="modal p-5">
              <div className="content space-y-2">
                <div><strong>Name:</strong> {name}</div>
                <div><strong>Phone:</strong> {phone}</div>
                <div><strong>Email:</strong> {email}</div>
                <div><strong>Password:</strong> {password}</div>
              </div>
              <button
                className="mt-5 p-2 bg-red-500 text-white rounded"
                onClick={close}
              >
                Close modal
              </button>
            </div>
          )}
        </Popup>
      </div>
    </div>
  );
}
