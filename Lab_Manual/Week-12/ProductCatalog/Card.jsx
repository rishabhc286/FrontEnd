import React from "react";

function Card({ image, title, description }) {
  return (
    <div style={styles.card}>
      <img src={image} alt={title} style={styles.img} />
      <h2 style={styles.title}>{title}</h2>
      <p style={styles.desc}>{description}</p>
    </div>
  );
}

const styles = {
  card: {
    width: "260px",
    border: "1px solid #ddd",
    borderRadius: "10px",
    padding: "15px",
    margin: "10px",
    boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
    textAlign: "center"
  },
  img: {
    width: "100%",
    borderRadius: "8px"
  },
  title: {
    fontSize: "1.2rem",
    margin: "10px 0 5px"
  },
  desc: {
    color: "#555"
  }
};

export default Card;
