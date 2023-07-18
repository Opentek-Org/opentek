const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const rateLimit = require("express-rate-limit");
require("dotenv").config();

// Custom Error Classes (defined in errors.js)
const { TestimonialNotFoundError, DuplicateTestimonialError, InternalServerError } = require('./errors');

// Connect to MongoDB Atlas
mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB Atlas");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB Atlas:", error);
  });

// Define the testimonial schema
const testimonialSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  position: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
  quote: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
});

// Create the testimonial model
const Testimonial = mongoose.model("Testimonial", testimonialSchema);

// Create the Express app
const app = express();
app.set('view engine', 'ejs');

// Serve the HTML file with the environment variables
app.get('/', (req, res) => {
  res.render('index', { apiEndpoint: "/testimonials", adminKey: process.env.KEY });
});

// Configure body-parser middleware to parse JSON
app.use(bodyParser.json());
app.use(cors());

const limiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per windowMs
  message: "Too many requests from this IP, please try again later.",
});
app.use(limiter);

// Handle POST requests to /testimonials
app.post("/testimonials", async (req, res) => {
  try {
    const testimonialData = req.body;

    // Check if testimonial with the same name already exists
    const existingTestimonial = await Testimonial.findOne({
      name: testimonialData.name,
    });

    if (existingTestimonial) {
      throw new DuplicateTestimonialError();
    }

    const testimonial = await Testimonial.create(testimonialData);

    res.status(201).json({ testimonial });
  } catch (error) {
    if (error instanceof DuplicateTestimonialError) {
      return res.status(error.statusCode).json({ error: error.message });
    }

    console.error("Error saving testimonial:", error);
    res.status(500).json({ error: "Error saving testimonial" });
  }
});

app.post("/temptestimonials", async (req, res) => {
  try {
    const data = [
      {
        name: "John Smith",
        position: "Marketing Specialist in OPENAI",
        rating: 4,
        quote:
          "OpenTek empowers individuals and organizations to embrace Open Source and create impactful projects that benefit everyone.",
        image: "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(9).webp",
      },
      {
        name: "Dan Abrahmov",
        position: "Web Developer in FLAT",
        rating: 4.5,
        quote:
          "OpenTek is more than a platform; it is a movement that champions transparency, collaboration, and innovation through Open Source.",
        image: "https://bit.ly/dan-abramov",
      },
      {
        name: "Kent Dodds",
        position: "Android Developer in WAM",
        rating: 4,
        quote:
          "OpenTek brings together passionate individuals from all backgrounds to foster a culture of knowledge sharing and community building.",
        image: "https://bit.ly/kent-c-dodds",
      },
      {
        name: "Teresa May",
        position: "Founder at ET ",
        rating: 4.5,
        quote:
          "OpenTek brings everything related to Open Source under one Umbrella and provides an clear way to innovation..",
        image: "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(10).webp",
      },
      {
        name: "Maggie McLoan",
        position: "Backend Developer at LAML",
        rating: 4,
        quote:
          "OpenTek is a revolutionary platform that connects developers, designers, and enthusiasts in the world of Open Source.",
        image: "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(15).webp",
      },
      {
        name: "Alexa Horwitz",
        position: "Front-end Developer in NY",
        rating: 4.5,
        quote:
          "Join OpenTek and unlock a world of opportunities to learn, collaborate, and contribute to the Open Source community.",
        image: "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(17).webp",
      },
    ];
    const testimonials = await Testimonial.insertMany(data);

    res.status(201).json({ testimonials });
  } catch (error) {
    console.error("Error saving testimonials:", error);
    res.status(500).json({ error: "Error saving testimonials" });
  }
});

app.get("/testimonials", async (req, res) => {
  try {
    const testimonials = await Testimonial.find();
    res.status(200).json({ testimonials });
  } catch (error) {
    console.error("Error retrieving testimonials:", error);
    res.status(500).json({ error: "Error retrieving testimonials" });
  }
});

app.delete("/testimonials/:id", async (req, res) => {
  try {
    const testimonialId = req.params.id;

    // Check if the testimonial with the given ID exists
    const existingTestimonial = await Testimonial.findByIdAndDelete(testimonialId);
    if (!existingTestimonial) {
      throw new TestimonialNotFoundError();
    }

    res.status(200).json({ message: "Testimonial deleted successfully" });
  } catch (error) {
    if (error instanceof TestimonialNotFoundError) {
      return res.status(error.statusCode).json({ error: error.message });
    }

    console.error("Error deleting testimonial:", error);
    res.status(500).json({ error: "Error deleting testimonial" });
  }
});

// Error Handling Middleware
app.use((err, req, res, next) => {
  if (err instanceof InternalServerError) {
    return res.status(err.statusCode).json({ error: err.message });
  }

  console.error("Unhandled error:", err);
  res.status(500).json({ error: "Internal Server Error" });
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});


