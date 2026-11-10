export function ContactPage() {
  return (
    <section className="section">
      <div className="container detail-layout">
        <div className="prose contact-panel">
          <p className="eyebrow">Consultation Desk</p>
          <h1>Contact Maple Enterprises</h1>
          <p>
            Share your requirement and our advisory team will connect with property options, documentation guidance, and site visit support.
          </p>
          <p><strong>Office:</strong> Sector 57, Gurgaon</p>
          <p><strong>Phone:</strong> +91 99999 99999</p>
          <p><strong>Email:</strong> hello@mapleenterprises.in</p>
          <div className="trust-points contact-trust">
            <span>30-Minute Response Target</span>
            <span>Verified Listing Guidance</span>
            <span>Legal Checklist Support</span>
          </div>
        </div>

        <form className="contact-form">
          <h3>Start Your Requirement</h3>
          <label>
            Full Name
            <input type="text" placeholder="Enter your name" />
          </label>
          <label>
            Phone Number
            <input type="tel" placeholder="Enter your phone number" />
          </label>
          <label>
            Requirement
            <select>
              <option>Buy Residential</option>
              <option>Commercial Investment</option>
              <option>Industrial</option>
              <option>Plot/Land</option>
            </select>
          </label>
          <label>
            Message
            <textarea rows={4} placeholder="Tell us your preferred location, budget, and timeline" />
          </label>
          <button type="submit" className="button accent">Submit Enquiry</button>
        </form>
      </div>
    </section>
  )
}
