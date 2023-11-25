const express = require("express");
const cors = require("cors");
const { exec } = require("child_process");

const app = express();

app.use(cors());

app.get("/nmap/scan", (req, res) => {
  // Replace 'target' with the IP or hostname you want to scan
  const target = req.query.target || "example.com";

  // Run Nmap command
  const nmapCommand = `
        nmap -sV -sC -A -T4 ${target}
    `;

  exec(nmapCommand, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error running Nmap: ${error.message}`);
      return res.status(500).send("Internal Server Error");
    }
    if (stderr) {
      console.error(`Nmap error: ${stderr}`);
    }

    res.set("Content-Type", "text/plain");

    // Send the Nmap scan results to the client
    res.send(stdout);
  });
});

app.get("/", (req, res) => {
  res.redirect("/nmap/scan");
});

const port = process.env.PORT || 3001;

app.listen(port, () => {
  console.log("Server started on port 3000");
});
