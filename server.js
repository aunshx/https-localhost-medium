// Import the modules
const express = require("express");
const expressSanitizer = require("express-sanitizer");

// Initialize instance of express
const app = express();

// Init Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Mount express-sanitizer middleware here
app.use(expressSanitizer());

app.use("/", express.static("public"));

const PORT = 8000;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});

