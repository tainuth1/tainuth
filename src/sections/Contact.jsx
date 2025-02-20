import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    id: crypto.randomUUID(),
    email: "",
    subject: "",
    message: "",
    created_at: Date.now().toString(),
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormData({
      id: crypto.randomUUID(),
      email: "",
      subject: "",
      message: "",
      created_at: Date.now().toString(),
    });
  };
  return (
    <section className="relative" id="contact">
      <div className="max-w-[1300px] m-auto mt-28 overflow-hidden">
        <section className="dark:bg-gray-900">
          <div className="py-8 lg:py-10 px-4 mx-auto max-w-screen-md">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
              Contact Me
            </h2>
            <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-white/80 sm:text-xl">
              Feel free to reach out to me at{" "}
              <a className="underline" href="tainuth1@gmail.com">
                tainuth1@gmail.com
              </a>{" "}
              or through the form below.
            </p>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  defaultValue={formData.email}
                  onChange={handleChange}
                  className="shadow-sm py-3 text-md bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                  placeholder="example@gmail.com"
                  required
                  autoComplete="off"
                />
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  defaultValue={formData.subject}
                  onChange={handleChange}
                  className="block p-3 py-3 text-md w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                  placeholder="Let me know how we can help you"
                  required
                  autoComplete="off"
                />
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="message"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
                >
                  Your message
                </label>
                <textarea
                  id="message"
                  name="message"
                  defaultValue={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="block p-2.5 py-3 text-md w-full text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Leave a comment..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-blue-600 py-3 px-5 text-md font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Send message
              </button>
            </form>
          </div>
        </section>
      </div>
    </section>
  );
};

export default Contact;
