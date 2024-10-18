import React, { useState, useEffect } from "react";

const QuoteRequest = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    serviceType: "",
    address: "",
    frequency: "",
    message: "",
    countryCode: "+971", // Default to UAE
  });

  const [status, setStatus] = useState("");
  const [timer, setTimer] = useState(null);
  const [countdown, setCountdown] = useState(5);
  const [errors, setErrors] = useState({}); // State to hold validation errors

  const phoneValidationRules = {
    "+971": { regex: /^\d{9}$/, message: "Phone number must be 9 digits (UAE)." }, // +971
    "+91": { regex: /^\d{10}$/, message: "Phone number must be 10 digits (India)." }, // +91
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    let newErrors = {};
    // Name validation
    if (!formData.name) {
      newErrors.name = "Name is required.";
    }

    // Email validation
    if (!formData.email) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email address is invalid.";
    }

    // Phone validation based on country code
    const { regex, message } = phoneValidationRules[formData.countryCode] || {};
    if (!formData.phone) {
      newErrors.phone = "Phone number is required.";
    } else if (!regex.test(formData.phone)) {
      newErrors.phone = message; // Specific error message for the country code
    }

    // Service Type validation
    if (!formData.serviceType) {
      newErrors.serviceType = "Service type is required.";
    }

    // Address validation
    if (!formData.address) {
      newErrors.address = "Address is required.";
    }

    // Frequency validation
    if (!formData.frequency) {
      newErrors.frequency = "Frequency is required.";
    }

    // Message validation
    if (!formData.message) {
      newErrors.message = "Additional message is required.";
    }

    return newErrors;
  };

  const sendQuoteRequest = async (e) => {
    e.preventDefault();

    // Reset errors
    setErrors({});

    // Validate the form
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return; // Prevent form submission
    }

    const formDataToSend = new FormData();
    formDataToSend.append("name", formData.name);
    formDataToSend.append("email", formData.email);
    formDataToSend.append("phone", `${formData.countryCode}${formData.phone}`); // Send full phone number
    formDataToSend.append("serviceType", formData.serviceType);
    formDataToSend.append("address", formData.address);
    formDataToSend.append("frequency", formData.frequency);
    formDataToSend.append("message", formData.message);
    formDataToSend.append("access_key", "ef16f9f0-1251-4f61-9702-01969ec3d1ca");

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
          serviceType: "",
          address: "",
          frequency: "",
          message: "",
          countryCode: "+971", // Reset country code to default
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
    <section className="flex  justify-center items-center">
      <div className="w-full">
        <h1 className="text-2xl font-bold mb-6 text-center">Request a Quote</h1>
      

        <form onSubmit={sendQuoteRequest} className="flex flex-col gap-[10px]">
          <div className="flex flex-col gap-[20px] md:flex-row">
            <div className="relative mb-4 w-full">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="peer mt-2 w-full h-[40px] border-b-2 border-gray-300 focus:outline-none focus:border-blue-600"
              />
              <label className={`absolute left-0 -top-3.5 text-gray-500 transition-all duration-200 transform ${formData.name ? "peer-focus:-top-3.5 peer-focus:text-blue-600" : ""}`}>
                Name
              </label>
              {errors.name && <span className="text-red-500 text-sm">{errors.name}</span>}
            </div>

            <div className="relative mb-4 w-full">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="peer mt-2 w-full h-[40px] border-b-2 border-gray-300 focus:outline-none focus:border-blue-600"
              />
              <label className={`absolute left-0 -top-3.5 text-gray-500 transition-all duration-200 transform ${formData.email ? "peer-focus:-top-3.5 peer-focus:text-blue-600" : ""}`}>
                Email
              </label>
              {errors.email && <span className="text-red-500 text-sm">{errors.email}</span>}
            </div>
          </div>

          <div className="flex flex-col gap-6 md:flex-row">
            <div className="relative mb-4 w-full">
              <div className="flex">
                <select
                  name="countryCode"
                  value={formData.countryCode}
                  onChange={handleChange}
                  className="peer mt-2 w-[120px] h-[40px] border-b-2 border-gray-300 focus:outline-none focus:border-blue-600"
                >
                  <option value="+971">UAE (+971)</option>
                  <option value="+91">India (+91)</option>
                </select>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  onKeyDown={(e) => {
                    if (!/[0-9]/.test(e.key) && e.key !== "Backspace") {
                      e.preventDefault();
                    }
                  }}
                  required
                  className="peer mt-2 w-3/4 h-[40px] border-b-2 border-gray-300 focus:outline-none focus:border-blue-600"
                />
              </div>
              {errors.phone && <span className="text-red-500 text-sm">{errors.phone}</span>}
            </div>
          </div>

          <div className="relative mb-4 w-full">
            <input
              type="text"
              name="serviceType"
              value={formData.serviceType}
              onChange={handleChange}
              required
              className="peer mt-2 w-full h-[40px] border-b-2 border-gray-300 focus:outline-none focus:border-blue-600"
            />
            <label className={`absolute left-0 -top-3.5 text-gray-500 transition-all duration-200 transform ${formData.serviceType ? "peer-focus:-top-3.5 peer-focus:text-blue-600" : ""}`}>
              Service Type
            </label>
            {errors.serviceType && <span className="text-red-500 text-sm">{errors.serviceType}</span>}
          </div>

          <div className="relative mb-4 w-full">
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
              className="peer mt-2 w-full h-[40px] border-b-2 border-gray-300 focus:outline-none focus:border-blue-600"
            />
            <label className={`absolute left-0 -top-3.5 text-gray-500 transition-all duration-200 transform ${formData.address ? "peer-focus:-top-3.5 peer-focus:text-blue-600" : ""}`}>
              Address
            </label>
            {errors.address && <span className="text-red-500 text-sm">{errors.address}</span>}
          </div>

          <div className="relative mb-4 w-full">
            <select
              name="frequency"
              value={formData.frequency}
              onChange={handleChange}
              required
              className="peer mt-2 w-full h-[40px] border-b-2 border-gray-300 focus:outline-none focus:border-blue-600"
            >
              <option value="">Select Frequency</option>
              <option value="one-time">One-Time</option>
              <option value="weekly">Weekly</option>
              <option value="monthly">Monthly</option>
            </select>
            {errors.frequency && <span className="text-red-500 text-sm">{errors.frequency}</span>}
          </div>

          <div className="relative mb-2 w-full">
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              className="peer mt-2 w-full h-[88px] border-b-2 border-gray-300 focus:outline-none focus:border-blue-600"
            />
            <label className={`absolute left-0 -top-3.5 text-gray-500 transition-all duration-200 transform ${formData.message ? "peer-focus:-top-3.5 peer-focus:text-blue-600" : ""}`}>
              Additional Message
            </label>
            {errors.message && <span className="text-red-500 text-sm">{errors.message}</span>}
          </div>

          {getAlertBox()}

          <div className="w-full flex justify-center">
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default QuoteRequest;
