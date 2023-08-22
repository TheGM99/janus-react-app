import { MainWindow, LoginWindow } from "./components";
import { useState } from "react";
import { svg_title_icon } from "./constants";
const App = () => {
  const [isMain, setIsMain] = useState(false);
  const [createRoom, setCreateRoom] = useState(false);
  const [room, setRoom] = useState();
  const [username, setUsername] = useState("");

  function handleClick(createRoom) {
    setIsMain(true);
    setCreateRoom(createRoom);
  }
  function handleLeave() {
    setIsMain(false);
  }
  return (
    <div className="flex items-center justify-center min-h-screen overflow-hidden">
      {isMain ? (
        <MainWindow
          room={room}
          username={username}
          onLeave={handleLeave}
          createRoom={createRoom}
        />
      ) : (
        <div className="w-full flex flex-col justify-center items-center">
          <div className="flex space-x-3 my-4 justify-center items-center">
            <svg
              fill="white"
              className="w-12 h-12"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path d={svg_title_icon} />
            </svg>
            <h1 className="text-white font-bold text-2xl text-center">
              Video Conference App
            </h1>
          </div>
          <LoginWindow
            handleClick={handleClick}
            setRoomId={setRoom}
            setUsername={setUsername}
          />
        </div>
      )}
    </div>
  );
};

export default App;
