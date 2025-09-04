export default function CTA() {
  return (
    <section id="donate" className="section" aria-labelledby="cta-heading">
      <div className="container">
        <div className="rounded-3xl bg-gradient-to-br from-brand-600 to-brand-700 p-8 sm:p-12 text-white shadow-lg">
          <h2 id="cta-heading" className="text-3xl font-bold">Help Us Empower the Next Generation</h2>
          <p className="mt-2 text-brand-100 max-w-3xl">
            Your support funds devices, internet access, and training in underserved schools across Africa.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#contact" className="rounded-2xl bg-white text-brand-700 px-5 py-3 font-semibold">Become a Partner</a>
            <a href="mailto:hello@cmia.africa" className="rounded-2xl border border-white/40 px-5 py-3 font-semibold">Email Us</a>
          </div>
        </div>
      </div>
    </section>
  )
}
