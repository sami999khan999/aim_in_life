"use client";

import { User, MailIcon, ArrowRightIcon, MessageSquare } from "lucide-react";
import { useState, ChangeEvent, FormEvent, useContext } from "react";
import emailjs from "@emailjs/browser";
import { ToastContext } from "./ToastProvider";

interface FormData {
  name: string;
  email: string;
  message: string;
}

const ContactForm = () => {
  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });
  const toast = useContext(ToastContext);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const templateId = "template_wfvg3ze";
    const serviceId = "service_6b2l4ba";
    const publicKey = "B7ZbiG-5itYXTy4df";

    const templateParams = {
      from_name: form.name,
      from_email: form.email,
      message: form.message,
      to_name: "Sami Khan",
    };

    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then(() => {
        setForm({ name: "", email: "", message: "" });
        toast?.addToast({
          title: "Message Sent Successfully",
          varient: "success",
        });
      })
      .catch(() => {
        console.error("Error sending email");
      });
  };

  return (
    <div className="w-full">
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Name */}
        <div className="relative">
          <User
            size={20}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
          />
          <input
            type="text"
            id="name"
            name="name"
            value={form.name}
            placeholder="Name"
            onChange={handleChange}
            className="bg-bg-light w-full py-space-sm pl-space-base pr-16 rounded-md outline-none text-text-color-muted"
          />
        </div>

        {/* Email */}
        <div className="relative">
          <MailIcon
            size={20}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-text-color-muted"
          />
          <input
            type="email"
            id="email"
            name="email"
            value={form.email}
            placeholder="Email"
            onChange={handleChange}
            className="bg-bg-light w-full py-space-sm pl-space-base pr-16 rounded-md outline-none text-text-color-muted"
          />
        </div>

        {/* Message */}
        <div className="relative">
          <MessageSquare
            size={20}
            className="absolute right-3 top-3 text-gray-500"
          />
          <textarea
            placeholder="Type your message here..."
            name="message"
            onChange={handleChange}
            value={form.message}
            className="bg-bg-light w-full py-space-sm pl-space-base pr-16 rounded-md outline-none h-[10rem] text-text-color-muted"
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="flex items-center gap-2 bg-primary text-bg-light py-space-sm px-space-md rounded-md hover:bg-primary/80"
        >
          Send
          <ArrowRightIcon size={20} />
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
