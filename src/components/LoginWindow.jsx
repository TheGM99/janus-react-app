import { useState } from "react";

function LoginWindow({ handleClick, setRoomId, setUsername }) {
  return (
    <div className="bg-primary text-white text-poppins mx-2 w-[90%]  sm:w-4/6 md:w-1/2 lg:w-2/5 flex flex-col px-6 ss:px-[5%] rounded-xl">
      <label className="text-2xl mt-6 ml-2">Username</label>
      <input
        id="usernameInput"
        type="text"
        className="bg-secondary border-highlight border-2 p-2 rounded-xl text-lg"
        onChange={(e) => setUsername(e.target.value)}
      ></input>
      <label className="text-2xl mt-6 ml-2">Room ID</label>
      <input
        id="roomInput"
        type="text"
        className="bg-secondary border-highlight border-2 p-2 rounded-xl text-lg"
        placeholder="(Join Only)"
        onChange={(e) => setRoomId(e.target.value)}
      ></input>
      <div className="my-6 flex flex-col space-y-3 ss:flex-row ss:space-y-0 ss:justify-between">
        <button
          id="createButton"
          className="bg-green px-5 py-2 rounded-xl font-bold hover:bg-hover active:translate-y-1 ss:text-xl"
          onClick={() => handleClick(true)}
        >
          {" "}
          CREATE
        </button>
        <button
          id="joinButton"
          className="bg-green px-8 py-2 rounded-xl font-bold hover:bg-hover active:translate-y-1 ss:text-xl"
          onClick={() => handleClick(false)}
        >
          {" "}
          JOIN
        </button>
      </div>
    </div>
  );
}

export default LoginWindow;
