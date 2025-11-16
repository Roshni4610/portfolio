import React from "react";

export default function Drawer({ isOpen, onClose }) {
  return (
    <div>
      {/* BACKDROP */}
      <div
        style={{
          ...styles.backdrop,
          display: isOpen ? "block" : "none",
        }}
        onClick={onClose}
      ></div>

      {/* RIGHT SIDE DRAWER */}
      <div
        style={{
          ...styles.drawer,
          right: isOpen ? "0" : "-250px",
        }}
      >
        <button style={styles.closeBtn} onClick={onClose}>×</button>

        <a style={styles.link} href="#home">Home</a>
        <a style={styles.link} href="#about">About</a>
        <a style={styles.link} href="#projects">Projects</a>
        <a style={styles.link} href="#contact">Contact</a>
      </div>
    </div>
  );
}

const styles = {
  backdrop: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: "rgba(0,0,0,0.5)",
    zIndex: 9,
  },

  drawer: {
    width: "250px",
    height: "100%",
    background: "#222",
    color: "#fff",
    position: "fixed",
    top: 0,
    right: "-250px",       // ← RIGHT SIDE DRAWER
    transition: "0.3s",
    paddingTop: "60px",
    zIndex: 11,
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  },

  closeBtn: {
    position: "absolute",
    top: "10px",
    left: "10px",
    fontSize: "28px",
    cursor: "pointer",
    background: "none",
    border: "none",
    color: "#fff",
  },

  link: {
    color: "#fff",
    textDecoration: "none",
    fontSize: "18px",
    padding: "10px 20px",
  },
};
