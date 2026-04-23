import React from "react";

export default function App() {
  const versions = window.myElectronInfo?.versions || {};
  const fs = window.require("fs");

  function testNodeIntegration() {
    const files = fs.readdirSync(".");
    alert("NodeIntegration funktioniert!\n\nDateien:\n" + files.join("\n"));
  }

  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "24px" }}>
      <h1>Electron + React Template</h1>
      <p>React läuft.</p>
      <p>Electron läuft.</p>
      <p>NodeIntegration ist aktiv.</p>

      <button onClick={testNodeIntegration}>
        Node.js im Renderer testen
      </button>

      <h2 style={{ marginTop: "24px" }}>Versionen</h2>
      <pre>{JSON.stringify(versions, null, 2)}</pre>
    </div>
  );
}
