const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors =require('cors');
// Connect to MongoDB Atlas
mongoose.connect('mongodb+srv://Jazzy49:MyNodeApp@nodeprojects.tsxlcqi.mongodb.net/OpentekDone?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to MongoDB Atlas');
}).catch((error) => {
  console.error('Error connecting to MongoDB Atlas:', error);
});


// Define the testimonial schema
const testimonialSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  position: {
    type: String,
    required: true
  },
  rating: {
    type: Number,
    required: true
  },
  quote: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  }
  });
  

// Create the testimonial model
const Testimonial = mongoose.model('Testimonial', testimonialSchema);

// Create the Express app
const app = express();

// Configure body-parser middleware to parse JSON
app.use(bodyParser.json());
app.use(cors());

// Handle POST requests to /testimonials
app.post('/testimonials', async (req, res) => {
  try {
    const testimonialData = req.body;
    const testimonial =  await Testimonial.create(req.body);
    
    res.status(201).json({ testimonial });
  } catch (error) {
    console.error('Error saving testimonial:', error);
    res.status(500).json({ error: 'Error saving testimonial' });
  }
});
app.post('/temptestimonials', async (req, res) => {
  try {
    const data = [
      {
        name: 'John Smith',
        position: 'Marketing Specialist in OPENAI',
        rating: 4,
        quote: 'OpenTek empowers individuals and organizations to embrace Open Source and create impactful projects that benefit everyone.',
        image: 'https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(9).webp'
      },
      {
        name: 'Dan Abrahmov',
        position: 'Web Developer in FLAT',
        rating: 4.5,
        quote: 'OpenTek is more than a platform; it is a movement that champions transparency, collaboration, and innovation through Open Source.',
        image: 'https://bit.ly/dan-abramov'
      },
      {
        name: 'Kent Dodds',
        position: 'Android Developer in WAM',
        rating: 4,
        quote: 'OpenTek brings together passionate individuals from all backgrounds to foster a culture of knowledge sharing and community building.',
        image: 'https://bit.ly/kent-c-dodds'
      },
      {
        name: 'Teresa May',
        position: 'Founder at ET ',
        rating: 4.5,
        quote: 'OpenTek brings everything related to Open Source under one Umbrella and provides an clear way to innovation..',
        image: 'https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(10).webp'
      },
      {
        name: 'Maggie McLoan',
        position: 'Backend Developer at LAML',
        rating: 4,
        quote: 'OpenTek is a revolutionary platform that connects developers, designers, and enthusiasts in the world of Open Source.',
        image: 'https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(15).webp'
      },
      {
        name: 'Alexa Horwitz',
        position: 'Front-end Developer in NY',
        rating: 4.5,
        quote: 'Join OpenTek and unlock a world of opportunities to learn, collaborate, and contribute to the Open Source community.',
        image: 'https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(17).webp'
      }
     
    ];
    const testimonials =  await Testimonial.insertMany(data);
    
    res.status(201).json({ testimonials });
  } catch (error) {
    console.error('Error saving testimonials:', error);
    res.status(500).json({ error: 'Error saving testimonials' });
  }
});

app.get('/testimonials', async (req, res) => {
    try {
      const testimonials = await Testimonial.find();
      res.status(201).json({ testimonials });
    } catch (error) {
      console.error('Error retrieving testimonials:', error);
      res.status(500).json({ error: 'Error retrieving testimonials' });
    }
  });
// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
