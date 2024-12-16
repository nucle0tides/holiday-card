import "./Card.css";
import { useState, useRef } from "react";
import music from "./music.mp3";
import pawprint from "./pawprint.png";

export const Card = () => {
  const [opened, setOpened] = useState(false);
  const [open, setIsOpen] = useState(false);
  const cardRef = useRef(null);
  const audioRef = useRef(null);

  const handleOnClick = () => {
    setIsOpen(true);
    setOpened(true);
    if (audioRef.current) {
      audioRef.current.play().catch((error) => {
        console.error("Audio play failed:", error);
      });
    }
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
    if (audioRef.current) {
      audioRef.current.pause();
    }
  };

  return (
    <div
      className="card-container"
      ref={cardRef}
      onClick={handleOnClick}
      onMouseLeave={handleMouseLeave}
    >
      <div className="card-inside">
        <div className="card-inside-right">
          <div className="card-inside-message">
            <h2 className="message-header">Happy Holidays!!</h2>
            <span>with love, pius</span>
          </div>
          <div className="signature">
            <img src={pawprint} alt="pawprint" width="150" />
          </div>
        </div>
      </div>
      <div className={`card-front ${open ? "open" : opened ? "closed" : ""}`} />

      <audio
        ref={audioRef}
        src={music}
        type="audio/mp3"
        preload="auto"
        muted={!open}
      />
    </div>
  );
};
