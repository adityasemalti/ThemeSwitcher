const Contact = () => {
  return (
    <div className="p-6 max-w-3xl mx-auto space-y-6">
      <h1 className="text-4xl font-bold">📞 Contact Us</h1>
      <p className="text-lg">
        Have questions, feedback, or want to collaborate? Reach out to us using the details below.
      </p>

      <div className="space-y-3">
        <p>
          <span className="font-semibold">Email:</span>{" "}
          <a
            href="mailto:contact@multithemeapp.com"
            className="text-blue-600 dark:text-blue-400 theme3:text-pink-600 underline"
          >
            contact@multithemeapp.com
          </a>
        </p>
        <p>
          <span className="font-semibold">Phone:</span>{" "}
          <a
            href="tel:+919876543210"
            className="text-blue-600 dark:text-blue-400 theme3:text-pink-600 underline"
          >
            +91 98765 43210
          </a>
        </p>
        <p>
          <span className="font-semibold">Address:</span> Remote • Available Worldwide 🌍
        </p>
      </div>

      <p className="text-sm text-gray-500 dark:text-gray-400">
        We'll try to get back to you within 24–48 hours.
      </p>
    </div>
  );
};

export default Contact;
