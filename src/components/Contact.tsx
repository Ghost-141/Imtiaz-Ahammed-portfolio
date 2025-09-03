import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Send, MessageCircle } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "mdimtiazahammed@gmail.com",
      href: "mailto:mdimtiazahammed@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+88 01723397253",
      href: "tel:+8801723397253",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Dhaka, Bangladesh",
      href: "#",
    },
  ];

  const contactSchema = z.object({
    name: z.string().min(2, "Name is too short"),
    email: z.string().email("Enter a valid email"),
    subject: z.string().min(3, "Subject is too short"),
    message: z.string().min(10, "Message should be at least 10 characters"),
  });

  type ContactForm = z.infer<typeof contactSchema>;

  const [status, setStatus] = useState<
    { type: "idle" } | { type: "loading" } | { type: "success" } | { type: "error"; message: string }
  >({ type: "idle" });

  const { register, handleSubmit, formState: { errors }, reset } = useForm<ContactForm>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: "", email: "", subject: "", message: "" },
  });

  const onSubmit = async (data: ContactForm) => {
    try {
      setStatus({ type: "loading" });
      const res = await fetch("https://formspree.io/f/xyzdddod", {
        method: "POST",
        headers: { "Content-Type": "application/json", "Accept": "application/json" },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          subject: data.subject,
          message: data.message,
          _replyto: data.email,
          _subject: data.subject,
        }),
      });
      if (!res.ok) {
        const err = await res.json().catch(() => ({}));
        throw new Error(err?.message || "Failed to submit form");
      }
      setStatus({ type: "success" });
      reset();
    } catch (err: any) {
      setStatus({ type: "error", message: err?.message || "Something went wrong" });
    }
  };

  return (
    <section className="py-16">
      <div className="section-container">
        <div className="animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-foreground">
            Let's Work Together
          </h2>
          <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            I'm always excited to discuss new opportunities, innovative projects, or collaborations in AI/ML. 
            Feel free to reach out!
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Information */}
            <div className="animate-fade-in-up-delay">
              <div className="card-portfolio h-full">
                <h3 className="text-xl font-semibold mb-6 text-foreground flex items-center gap-2">
                  <MessageCircle className="w-5 h-5 text-primary" />
                  Get In Touch
                </h3>
                
                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <a
                      key={info.label}
                      href={info.href}
                      className={`flex items-center gap-4 p-4 rounded-lg border border-border hover:border-primary/20 hover:bg-accent/50 transition-all duration-300 ${
                        info.label === "Location" ? "cursor-default" : "hover:scale-105"
                      }`}
                    >
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <info.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">{info.label}</p>
                        <p className="font-semibold text-foreground">{info.value}</p>
                      </div>
                    </a>
                  ))}
                </div>
                
                <div className="mt-6 pt-6 border-t border-border">
                  <p className="text-sm text-muted-foreground text-center">
                    Available for freelance opportunities and full-time positions
                  </p>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="animate-fade-in-up-delay" style={{ animationDelay: "0.1s" }}>
              <form onSubmit={handleSubmit(onSubmit)} className="card-portfolio h-full">
                <h3 className="text-xl font-semibold mb-6 text-foreground flex items-center gap-2">
                  <Send className="w-5 h-5 text-primary" />
                  Send a Message
                </h3>

                <div className="grid gap-4">
                  <div>
                    <label className="block text-sm text-gray-200 mb-1">Name</label>
                    <input
                      type="text"
                      {...register("name")}
                      className="w-full rounded-md bg-white/5 border border-white/10 text-white placeholder-gray-400 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary/40"
                      placeholder="Your name"
                    />
                    {errors.name && <p className="text-rose-300 text-xs mt-1">{errors.name.message}</p>}
                  </div>

                  <div>
                    <label className="block text-sm text-gray-200 mb-1">Email</label>
                    <input
                      type="email"
                      {...register("email")}
                      className="w-full rounded-md bg-white/5 border border-white/10 text-white placeholder-gray-400 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary/40"
                      placeholder="you@example.com"
                    />
                    {errors.email && <p className="text-rose-300 text-xs mt-1">{errors.email.message}</p>}
                  </div>

                  <div>
                    <label className="block text-sm text-gray-200 mb-1">Subject</label>
                    <input
                      type="text"
                      {...register("subject")}
                      className="w-full rounded-md bg-white/5 border border-white/10 text-white placeholder-gray-400 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary/40"
                      placeholder="How can I help?"
                    />
                    {errors.subject && <p className="text-rose-300 text-xs mt-1">{errors.subject.message}</p>}
                  </div>

                  <div>
                    <label className="block text-sm text-gray-200 mb-1">Message</label>
                    <textarea
                      rows={6}
                      {...register("message")}
                      className="w-full rounded-md bg-white/5 border border-white/10 text-white placeholder-gray-400 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary/40"
                      placeholder="Tell me about your project..."
                    />
                    {errors.message && <p className="text-rose-300 text-xs mt-1">{errors.message.message}</p>}
                  </div>
                </div>

                <div className="mt-6 flex items-center gap-3">
                  <Button type="submit" disabled={status.type === 'loading'} className="flex items-center gap-2">
                    <Send className="w-4 h-4" />
                    {status.type === 'loading' ? 'Sending...' : 'Submit'}
                  </Button>
                  {status.type === 'success' && (
                    <span className="text-emerald-300 text-sm">Message sent successfully!</span>
                  )}
                  {status.type === 'error' && (
                    <span className="text-rose-300 text-sm">{status.message}</span>
                  )}
                </div>

                <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" />
                <p className="text-xs text-gray-400 mt-4">This form is powered by Formspree.</p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
