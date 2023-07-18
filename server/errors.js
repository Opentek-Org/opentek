class TestimonialNotFoundError extends Error {
    constructor(message = "Testimonial not found") {
      super(message);
      this.name = "Testimonial you are looking for Doesnt Exist ";
      this.statusCode = 404;
    }
  }
  
  class DuplicateTestimonialError extends Error {
    constructor(message = "Testimonial already exists") {
      super(message);
      this.name = "You cannot add Duplicate testimonials";
      this.statusCode = 409;
    }
  }
  
  class InternalServerError extends Error {
    constructor(message = "Internal Server Error") {
      super(message);
      this.name = "Something may be wrong ,its bad luck";
      this.statusCode = 500;
    }
  }
  
  module.exports = { TestimonialNotFoundError, DuplicateTestimonialError, InternalServerError };
  