import React from "react";
import Card from "./Card";

function App() {
  return (
    <div style={{ display: "flex" }}>
      <Card
        image="https://via.placeholder.com/200"
        title="Wireless Headphones"
        description="High-quality sound with 24hr battery backup."
      />

      <Card
        image="https://via.placeholder.com/200"
        title="Smartwatch"
        description="Track fitness, sleep, and heart rate easily."
      />

      <Card
        image="https://via.placeholder.com/200"
        title="Gaming Mouse"
        description="High DPI precision for pro-level gameplay."
      />
    </div>
  );
}

export default App;
