
const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.json({
    message: "Hello from Jenkins",
    status: "success",
  });
});

app.get("/health", (req, res) => {
  res.json({
    status: "healthy",
  });
});

if (require.main === module) {
  const PORT = process.env.PORT || 3000;

  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

module.exports = app;
