import express from "express";

const app = express();
const port = process.env.PORT || 3000;

app.get("/room", (req, res) => {
  const room = req.query.name || "boardroom";

  res.send(`
  <html>
  <body style="
    margin:0;
    font-family: Arial;
    background:#16a34a;
    color:white;
    display:flex;
    justify-content:center;
    align-items:center;
    height:100vh;
    text-align:center;
  ">
    <div>
      <h1 style="font-size:80px">${room.toUpperCase()}</h1>
      <h2>✅ ANDROID TEST WORKING</h2>
    </div>
  </body>
  </html>
  `);
});

app.listen(port, () => console.log("Running"));
