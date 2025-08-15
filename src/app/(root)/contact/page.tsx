import ContactForm from "@/components/ui/ContactForm";
import FaqSection from "@/components/ui/Faq";
import PageHeader from "@/components/ui/PageHeader";

const Page = () => {
  return (
    <section className="min-h-screen">
      <div className="container mx-auto space-y-[5rem]">
        <PageHeader />

        <div className="space-y-[2rem] flex gap-space-lg flex-col lg:flex-row px-space-md ">
          <div className="lg:w-[50%] space-y-space-lg shrink-0">
            <h2 className="lg:text-size-28 text-size-24 font-medium text-text-color lg:w-[70%]">
              Love great reads? So do we discover something new today.
            </h2>
            <p className="text-text-color-muted lg:w-[70%]">
              Join our weekly newsletter for practical guides, honest reviews,
              and the best stories from the blog. One short email each week — no
              spam, just value.
            </p>
          </div>
          <ContactForm />
        </div>

        <FaqSection />
      </div>
    </section>
  );
};

export default Page;
