import { useState } from "react"
import { motion } from "framer-motion"
import { Send, Mail, User, FileText } from "lucide-react"
import { toast } from 'react-toastify';

function ContactMe() {
    const [formState, setFormState] = useState({
        name: "",
        email: "",
        description: "",
    })

    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitted, setSubmitted] = useState(false)

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormState((prev) => ({ ...prev, [name]: value }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsSubmitting(true)

        try {
            const response = await fetch(`${import.meta.env.VITE_API_URL}/submit`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formState),
            });

            const data = await response.json();

            if (response.ok) {
                setSubmitted(true);
                setFormState({ name: "", email: "", description: "" });
            } else {
                alert(data.message || "Submission failed!");
                setIsSubmitting(false);
                return
            }
        } catch (error) {
            alert("Something went wrong!");
            setIsSubmitting(false);
            return
        }
        // Simulate form submission
        setTimeout(() => {
            setIsSubmitting(false)
            setSubmitted(true)

            // Reset form after showing success message
            setTimeout(() => {
                setSubmitted(false)
                setFormState({ name: "", email: "", description: "" })
            }, 3000)
        }, 1500)
    }

    return (
        <div className="relative flex flex-col items-center w-full py-4 px-4 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-950">
        <motion.h1
            className="my-name mb-12 sm:mb-16 text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold tracking-tight text-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <span className="text-blue-500"> Connect </span> With <span className="text-blue-500">Me</span>
        </motion.h1>
    
        <div className="gap-8 sm:gap-16 flex flex-col md:flex-row items-center justify-center w-full max-w-6xl">
            {/* Profile Section */}
            <motion.div
                className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 flex items-center justify-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
            >
                {/* Outer Ring */}
                <motion.div
                    className="absolute w-full h-full rounded-full border-4 border-blue-500/30 dark:border-blue-500/20"
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Number.POSITIVE_INFINITY, duration: 20, ease: "linear" }}
                />
    
                {/* Middle Ring */}
                <motion.div
                    className="absolute w-[90%] h-[90%] rounded-full border-4 border-blue-500/50 dark:border-blue-500/30"
                    animate={{ rotate: -360 }}
                    transition={{ repeat: Number.POSITIVE_INFINITY, duration: 15, ease: "linear" }}
                />
    
                {/* Inner Ring */}
                <motion.div
                    className="absolute w-[80%] h-[80%] rounded-full border-4 border-blue-500/70 dark:border-blue-500/40"
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Number.POSITIVE_INFINITY, duration: 10, ease: "linear" }}
                />
    
                {/* Profile Picture */}
                <motion.div
                    className="absolute bg-gradient-to-br from-blue-600 to-blue-800 dark:from-blue-700 dark:to-blue-900 w-44 h-44 sm:w-52 sm:h-52 md:w-56 md:h-56 rounded-full flex items-center justify-center overflow-hidden shadow-lg shadow-blue-500/20 dark:shadow-blue-500/10"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                >
                    <motion.img
                        src="assets/gifs/contactVideo.gif"
                        alt="Dancing Gif"
                        className="w-[50%] h-[80%] object-cover"
                        whileHover={{ scale: 1.1, rotate: 10 }}
                        transition={{ type: "spring", stiffness: 300 }}
                    />
                </motion.div>
            </motion.div>
    
            {/* Form Section */}
            <motion.div
                className="w-full max-w-md md:ml-10"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
            >
                {submitted ? (
                    <motion.div
                        className="bg-green-50 dark:bg-green-900/30 p-6 sm:p-8 rounded-2xl text-center shadow-md"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3 }}
                    >
                        <motion.div
                            className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 bg-green-100 dark:bg-green-800/50 rounded-full flex items-center justify-center text-green-600 dark:text-green-400"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1, rotate: 360 }}
                            transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6 sm:h-8 sm:w-8"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                        </motion.div>
                        <h3 className="text-lg sm:text-xl font-bold text-green-800 dark:text-green-300 mb-2">Message Sent!</h3>
                        <p className="text-sm sm:text-base text-green-700 dark:text-green-400">
                            Thank you for reaching out. I'll get back to you soon.
                        </p>
                    </motion.div>
                ) : (
                    <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                        <div className="space-y-1">
                            <label className="block text-sm sm:text-base md:text-lg font-medium mb-1 sm:mb-2 text-gray-700 dark:text-gray-200" htmlFor="name">
                                Name
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                                    <User className="h-4 w-4 sm:h-5 sm:w-5" />
                                </div>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formState.name}
                                    onChange={handleChange}
                                    required
                                    className="block w-full p-3 sm:p-4 pl-9 sm:pl-10 text-sm sm:text-base text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 rounded-xl border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                                    placeholder="Your name"
                                />
                            </div>
                        </div>
    
                        <div className="space-y-1">
                            <label className="block text-sm sm:text-base md:text-lg font-medium mb-1 sm:mb-2 text-gray-700 dark:text-gray-200" htmlFor="email">
                                Email
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                                    <Mail className="h-4 w-4 sm:h-5 sm:w-5" />
                                </div>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formState.email}
                                    onChange={handleChange}
                                    required
                                    className="block w-full p-3 sm:p-4 pl-9 sm:pl-10 text-sm sm:text-base text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 rounded-xl border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                                    placeholder="your.email@example.com"
                                />
                            </div>
                        </div>
    
                        <div className="space-y-1">
                            <label
                                className="block text-sm sm:text-base md:text-lg font-medium mb-1 sm:mb-2 text-gray-700 dark:text-gray-200"
                                htmlFor="description"
                            >
                                Message
                            </label>
                            <div className="relative">
                                <div className="absolute top-3 left-3 flex items-start pointer-events-none text-gray-400">
                                    <FileText className="h-4 w-4 sm:h-5 sm:w-5" />
                                </div>
                                <textarea
                                    id="description"
                                    name="description"
                                    value={formState.description}
                                    onChange={handleChange}
                                    required
                                    rows="4"
                                    className="block w-full p-3 sm:p-4 pl-9 sm:pl-10 text-sm sm:text-base text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 rounded-xl border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                                    placeholder="Your message..."
                                />
                            </div>
                        </div>
    
                        <motion.button
                            type="submit"
                            disabled={isSubmitting}
                            className={`w-full flex items-center justify-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white font-medium text-sm sm:text-base p-3 sm:p-4 rounded-xl shadow-lg shadow-blue-500/20 transition-all duration-200 ${isSubmitting ? "opacity-80" : ""}`}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            {isSubmitting ? (
                                <>
                                    <svg
                                        className="animate-spin -ml-1 mr-2 sm:mr-3 h-4 w-4 sm:h-5 sm:w-5 text-white"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                    >
                                        <circle
                                            className="opacity-25"
                                            cx="12"
                                            cy="12"
                                            r="10"
                                            stroke="currentColor"
                                            strokeWidth="4"
                                        ></circle>
                                        <path
                                            className="opacity-75"
                                            fill="currentColor"
                                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                        ></path>
                                    </svg>
                                    <span>Sending...</span>
                                </>
                            ) : (
                                <>
                                    <Send className="h-4 w-4 sm:h-5 sm:w-5" />
                                    <span>Send Message</span>
                                </>
                            )}
                        </motion.button>
                    </form>
                )}
            </motion.div>
        </div>
    </div>
    )
}

export default ContactMe