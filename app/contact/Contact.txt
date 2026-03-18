const handleChange = (
  e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value,
  });
};

const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  // Handle form submission here
  console.log("Form submitted:", formData);
  alert("Thank you for your message! I will get back to you soon.");
  setFormData({ name: "", email: "", message: "" });
};

{
  /* Contact Form Section */
}
<div className="animate-slide-in-right">
  <div className="bg-linear-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-700 rounded-3xl shadow-2xl p-8 lg:p-12 border border-gray-100 dark:border-gray-700">
    <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
      Send a Message
    </h2>
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="animate-fade-in">
        <label
          htmlFor="name"
          className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2"
        >
          Full Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white transition-all duration-300 hover:shadow-md"
          placeholder="Your full name"
        />
      </div>

      <div className="animate-fade-in" style={{ animationDelay: "0.1s" }}>
        <label
          htmlFor="email"
          className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2"
        >
          Email Address
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white transition-all duration-300 hover:shadow-md"
          placeholder="your.email@example.com"
        />
      </div>

      <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
        <label
          htmlFor="message"
          className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={6}
          value={formData.message}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white transition-all duration-300 hover:shadow-md resize-none"
          placeholder="Tell me about your project or just say hello..."
        />
      </div>

      <button
        type="submit"
        className="w-full bg-linear-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-4 px-6 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 animate-bounce-in"
        style={{ animationDelay: "0.3s" }}
      >
        <span className="flex items-center justify-center">
          Send Message
          <svg
            className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
            />
          </svg>
        </span>
      </button>
    </form>
  </div>
</div>;
