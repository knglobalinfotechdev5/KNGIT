import React, { useState, useEffect } from "react";

const SoftwareQuoteRequest = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    budget: "",
    timeline: "",
    message: "",
    countryCode: "+971", // Default to UAE
  });

  const [status, setStatus] = useState("");
  const [timer, setTimer] = useState(null);
  const [countdown, setCountdown] = useState(5);
  const [errors, setErrors] = useState({});

  const phoneValidationRules = {
    "+971": { regex: /^\d{9}$/, message: "Phone number must be 9 digits (UAE)." },
    "+91": { regex: /^\d{10}$/, message: "Phone number must be 10 digits (India)." },
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    let newErrors = {};

    if (!formData.name) newErrors.name = "Name is required.";
    if (!formData.email) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email address is invalid.";
    }

    const { regex, message } = phoneValidationRules[formData.countryCode] || {};
    if (!formData.phone) {
      newErrors.phone = "Phone number is required.";
    } else if (!regex.test(formData.phone)) {
      newErrors.phone = message;
    }

    if (!formData.projectType) newErrors.projectType = "Project type is required.";
    if (!formData.budget) newErrors.budget = "Budget is required.";
    if (!formData.timeline) newErrors.timeline = "Timeline is required.";
    if (!formData.message) newErrors.message = "Additional details are required.";

    return newErrors;
  };

  const sendQuoteRequest = async (e) => {
    e.preventDefault();
    setErrors({});

    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const formDataToSend = new FormData();
    formDataToSend.append("name", formData.name);
    formDataToSend.append("email", formData.email);
    formDataToSend.append("phone", `${formData.countryCode}${formData.phone}`);
    formDataToSend.append("projectType", formData.projectType);
    formDataToSend.append("budget", formData.budget);
    formDataToSend.append("timeline", formData.timeline);
    formDataToSend.append("message", formData.message);
    formDataToSend.append("access_key", "ef16f9f0-1251-4f61-9702-01969ec3d1ca"); // Replace with actual Web3forms key

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formDataToSend,
      });

      const result = await response.json();

      if (result.success) {
        setStatus("success");
        setFormData({
          name: "",
          email: "",
          phone: "",
          projectType: "",
          budget: "",
          timeline: "",
          message: "",
          countryCode: "+971",
        });

        const closeTimer = setTimeout(() => {
          onClose();
        }, 5000);

        setTimer(closeTimer);

        let countdownTimer = setInterval(() => {
          setCountdown((prev) => {
            if (prev === 1) {
              clearInterval(countdownTimer);
              return 0;
            }
            return prev - 1;
          });
        }, 1000);

        return () => clearInterval(countdownTimer);
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  useEffect(() => {
    return () => {
      if (timer) {
        clearTimeout(timer);
      }
    };
  }, [timer]);

  const getAlertBox = () => {
    if (status === "success") {
      return (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative my-4">
          <strong className="font-bold">Success!</strong>
          <span className="block sm:inline"> Your quote request was submitted successfully!</span>
        </div>
      );
    } else if (status === "error") {
      return (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative my-4">
          <strong className="font-bold">Error!</strong>
          <span className="block sm:inline"> Failed to submit the request. Please try again.</span>
        </div>
      );
    }
    return null;
  };

  return (
    <section className="flex justify-center items-center">
      <div className="w-full">
        <h1 className="text-2xl font-bold mb-6 text-center">Request a Quote</h1>

        <form onSubmit={sendQuoteRequest} className="flex flex-col gap-6">
          <div className="relative">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="peer mt-2 w-full border-b-2 border-gray-300 focus:outline-none focus:border-blue-600"
            />
            <label className="absolute left-0 -top-3.5 text-gray-500 transition-all duration-200 peer-focus:-top-3.5 peer-focus:text-blue-600">
              Name
            </label>
            {errors.name && <span className="text-red-500 text-sm">{errors.name}</span>}
          </div>

          <div className="relative">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="peer mt-2 w-full border-b-2 border-gray-300 focus:outline-none focus:border-blue-600"
            />
            <label className="absolute left-0 -top-3.5 text-gray-500 transition-all duration-200 peer-focus:-top-3.5 peer-focus:text-blue-600">
              Email
            </label>
            {errors.email && <span className="text-red-500 text-sm">{errors.email}</span>}
          </div>

          <div className="relative">
            <div className="flex">
              <select
                name="countryCode"
                value={formData.countryCode}
                onChange={handleChange}
                className="peer mt-2 w-[100px] border-b-2 border-gray-300 focus:outline-none focus:border-blue-600"
              >
                <option value="+971">UAE (+971)</option>
                <option value="+91">India (+91)</option>
              </select>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="peer mt-2 w-full border-b-2 border-gray-300 focus:outline-none focus:border-blue-600"
              />
            </div>
            {errors.phone && <span className="text-red-500 text-sm">{errors.phone}</span>}
          </div>

          <div className="relative">
            <input
              type="text"
              name="projectType"
              value={formData.projectType}
              onChange={handleChange}
              required
              className="peer mt-2 w-full border-b-2 border-gray-300 focus:outline-none focus:border-blue-600"
            />
            <label className="absolute left-0 -top-3.5 text-gray-500 transition-all duration-200 peer-focus:-top-3.5 peer-focus:text-blue-600">
              Project Type
            </label>
            {errors.projectType && <span className="text-red-500 text-sm">{errors.projectType}</span>}
          </div>

          <div className="relative">
            <input
              type="text"
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              required
              className="peer mt-2 w-full border-b-2 border-gray-300 focus:outline-none focus:border-blue-600"
            />
            <label className="absolute left-0 -top-3.5 text-gray-500 transition-all duration-200 peer-focus:-top-3.5 peer-focus:text-blue-600">
              Budget (USD)
            </label>
            {errors.budget && <span className="text-red-500 text-sm">{errors.budget}</span>}
          </div>

          <div className="relative">
            <input
              type="text"
              name="timeline"
              value={formData.timeline}
              onChange={handleChange}
              required
              className="peer mt-2 w-full border-b-2 border-gray-300 focus:outline-none focus:border-blue-600"
            />
            <label className="absolute left-0 -top-3.5 text-gray-500 transition-all duration-200 peer-focus:-top-3.5 peer-focus:text-blue-600">
              Project Timeline
            </label>
            {errors.timeline && <span className="text-red-500 text-sm">{errors.timeline}</span>}
          </div>

          <div className="relative">
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="4"
              className="peer mt-2 w-full border-b-2 border-gray-300 focus:outline-none focus:border-blue-600"
            />
            <label className="absolute left-0 -top-3.5 text-gray-500 transition-all duration-200 peer-focus:-top-3.5 peer-focus:text-blue-600">
              Additional Details
            </label>
            {errors.message && <span className="text-red-500 text-sm">{errors.message}</span>}
          </div>

          {getAlertBox()}

          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 focus:outline-none focus:ring"
          >
            Submit Quote Request
          </button>
        </form>

        {status === "success" && (
          <p className="text-center text-gray-500 mt-4">
            This form will close in {countdown} seconds.
          </p>
        )}
      </div>
    </section>
  );
};

export default SoftwareQuoteRequest;
