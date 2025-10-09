import { useForm } from "react-hook-form";

export default function ContactForm() {
  // Handle form input errors
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div className="bg-white py-12 px-6 md:px-12 lg:px-24">
      {/* Grid layout for form + map */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-stretch">
        
        {/* Contact Form */}
        <div className="bg-gray-40 p-6 rounded-2xl shadow-md">
          <h2 className="text-black text-xl font-semibold mb-4">Contact Form</h2>
          <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>

            {/* Name input field */}
            <input
              type="text"
              placeholder="Name"
              className="w-full p-3 rounded border bg-white border-red-600 focus:outline-[#7c8c7d]"
              {...register("name", { required: true })}
            />
            {errors.name && <span className="text-red-500">Name is required</span>}

            {/* Email input field */}
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 rounded border bg-white border-red-600 focus:outline-[#7c8c7d]"
              {...register("email", {
                required: true,
                pattern: {
                  value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                  message: "Invalid email address",
                },
              })}
            />
            {errors.email && <span className="text-red-500">Email is required</span>}

            {/* Number input field */}
            <input
              type="number"
              placeholder="Number"
              className="w-full p-3 rounded border bg-white border-red-600 focus:outline-[#7c8c7d]"
              {...register("number", {
                required: true,
                pattern: {
                  value: /^[0-9]+$/,
                  message: "Invalid number",
                },
              })}
            />
            {errors.number && <span className="text-red-500">Number is required</span>}

            {/* Message input field */}
            <textarea
              rows="4"
              placeholder="Message"
              className="w-full p-3 rounded bg-white border border-red-600 focus:outline-red-800"
              {...register("message", { required: true })}
            ></textarea>
            {errors.message && (
              <span className="text-red-500 text-center">Message is required</span>
            )}

            {/* Submit button */}
            <button
              type="submit"
              className="bg-red-600 text-white px-5 py-2 rounded hover:bg-white hover:text-red-600 transition duration-300 border border-red-600 hover:border-red-600 font-semibold"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Map Section */}
        <div className="rounded-2xl overflow-hidden shadow-md">
          <iframe
            title="PestXperts Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3585.211088802871!2d28.04730587507175!3d-26.204102377101878!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e950dceb5db2c5f%3A0xf3c5e53d4b2b4b02!2sJohannesburg!5e0!3m2!1sen!2sza!4v1697373916724!5m2!1sen!2sza"
            width="100%"
            height="100%"
            style={{ border: 0, minHeight: "400px" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
