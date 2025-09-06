import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import About from "@/components/About";
import Programs from "@/components/Programs";
import Roadmap from "@/components/Roadmap";
import Gallery from "@/components/Gallery";
import Team from "@/components/Team";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <>
      <Navbar />
      <Hero />
      <Stats />
      <About />
      <Programs />
      <Roadmap />
      <Gallery />
      <Team />
      <CTA />
      <section id="contact" className="section" aria-labelledby="contact-heading">
        <div className="container">
          <h2 id="contact-heading" className="text-3xl font-bold">Contact</h2>
          <div className="mt-6 grid md:grid-cols-2 gap-6">
            <div className="rounded-2xl ring-1 ring-gray-200 p-6">
              <h3 className="font-semibold">Get in touch</h3>
              <p className="mt-2 text-gray-700">Email: cmia4africa@gmail.com</p>
              <p className="mt-1 text-gray-700">Phone/WhatsApp: +234 703 391 2175 | +234 703 921 9871</p>
              <p className="mt-1 text-gray-700">Address: 7, Onibipe Close, Zulu Close, Wera Housing Estate by Benson Lagos Road, Ikorodu, Lagos State, Nigeria</p>
            </div>
            <form className="rounded-2xl ring-1 ring-gray-200 p-6 grid gap-4" action="https://formspree.io/f/maylbdqq" method="POST">
              <input className="rounded-xl border border-gray-300 px-4 py-3" placeholder="Your name" name="name" required />
              <input className="rounded-xl border border-gray-300 px-4 py-3" placeholder="Your email" name="email" type="email" required />
              <textarea className="rounded-xl border border-gray-300 px-4 py-3 min-h-[140px]" placeholder="Message" name="message" required />
              <button className="rounded-2xl bg-brand-600 px-5 py-3 text-white font-semibold hover:bg-brand-700 transition">Send</button>
            </form>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}
