import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import { useState } from "react";
import Button from "../components/Button";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "poornachaitanya4259@gmail.com",
    href: "https://mail.google.com/mail/?view=cm&fs=1&to=poornachaitanya4259@gmail.com",
  },
  {
    icon: Phone,
    label: "WhatsApp",
    value: "+91 70131 04777",
    href: "https://wa.me/917013104777",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Hyderabad, India",
    href: "https://maps.app.goo.gl/b99HCZYGnn5GDFxcA",
  },
];

const Contact = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({
    type: null,
    message: "",
  });

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    setSubmitStatus({ type: null, message: "" });

    const formData = new FormData(event.target);
    formData.append("access_key", import.meta.env.VITE_WEB3FORMS_ACCESS_KEY);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setSubmitStatus({
          type: "success",
          message: "Message sent successfully! I’ll get back to you soon.",
        });
        event.target.reset();
      } else {
        throw new Error("Submission failed");
      }
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message: "Something went wrong. Please try again.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-20 md:py-32 relative overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-72 md:w-96 h-72 md:h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-56 md:w-64 h-56 md:h-64 bg-highlight/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <span className="text-secondary-foreground text-xs md:text-sm font-medium tracking-wider uppercase">
            Get In Touch
          </span>

          <h2 className="text-3xl md:text-5xl font-bold mt-4 mb-6 text-secondary-foreground">
            Let's build{" "}
            <span className="font-serif italic font-normal text-white">
              something great.
            </span>
          </h2>

          <p className="text-sm md:text-base text-muted-foreground">
            Have an opportunity or project in mind? Feel free to reach out.
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 max-w-5xl mx-auto">
          {/* Contact Form */}
          <div className="glass p-6 md:p-8 rounded-3xl border border-primary/30">
            <form className="space-y-6" onSubmit={onSubmit}>
              <div>
                <label className="block text-sm font-medium mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Your name..."
                  className="w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  rows={5}
                  name="message"
                  required
                  placeholder="Your message..."
                  className="w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none"
                />
              </div>

              <Button
                className="w-full"
                type="submit"
                size="lg"
                disabled={isLoading}
              >
                {isLoading ? (
                  "Sending..."
                ) : (
                  <>
                    Send Message
                    <Send className="w-5 h-5" />
                  </>
                )}
              </Button>

              {submitStatus.type && (
                <div
                  className={`flex items-center gap-3 p-4 rounded-xl ${
                    submitStatus.type === "success"
                      ? "bg-green-500/10 border border-green-500/20 text-green-400"
                      : "bg-red-500/10 border border-red-500/20 text-red-400"
                  }`}
                >
                  {submitStatus.type === "success" ? (
                    <CheckCircle className="w-5 h-5 flex-shrink-0" />
                  ) : (
                    <AlertCircle className="w-5 h-5 flex-shrink-0" />
                  )}
                  <p className="text-sm">{submitStatus.message}</p>
                </div>
              )}
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <div className="glass rounded-3xl p-6 md:p-8">
              <h3 className="text-lg md:text-xl font-semibold mb-6">
                Contact Information
              </h3>

              <div className="space-y-4">
                {contactInfo.map((item, i) => (
                  <a
                    key={i}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start sm:items-center gap-4 p-4 rounded-xl hover:bg-surface transition-colors group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>

                    <div className="break-words">
                      <div className="text-sm text-muted-foreground">
                        {item.label}
                      </div>
                      <div className="font-medium text-sm md:text-base">
                        {item.value}
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Availability Card */}
            <div className="glass rounded-3xl p-6 md:p-8 border border-primary/30">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                <span className="font-medium text-sm md:text-base">
                  Currently Available
                </span>
              </div>

              <p className="text-muted-foreground text-sm">
                Open to frontend developer roles, internships, and freelance
                opportunities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
