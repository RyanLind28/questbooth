import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ArrowRight, Phone, Mail, MapPin } from 'lucide-react';
import styles from './Booking.module.css';

const Booking = () => {
  const [searchParams] = useSearchParams();
  const preselectedPackage = searchParams.get('package') || '';

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventDate: '',
    eventType: '',
    eventLocation: '',
    guestCount: '',
    packageType: preselectedPackage,
    duration: '3',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  useEffect(() => {
    if (preselectedPackage) {
      setFormData((prev) => ({ ...prev, packageType: preselectedPackage }));
    }
  }, [preselectedPackage]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log('Form submitted:', formData);
    setSubmitStatus('success');
    setIsSubmitting(false);
  };

  const eventTypes = [
    'Wedding',
    'Corporate Event',
    'Birthday Party',
    'Engagement Party',
    'Christmas Party',
    'Prom / School Event',
    'Festival / Fair',
    'Other',
  ];

  const packageOptions = [
    { value: '', label: 'Not sure yet' },
    { value: 'drop-off', label: 'Drop-Off Digital' },
    { value: 'manned-digital', label: 'Manned Digital' },
    { value: 'manned-prints', label: 'Manned + Prints' },
  ];

  return (
    <main className={styles.booking}>
      {/* Hero */}
      <section className={styles.hero}>
        <div className="container">
          <span className={styles.label}>Contact</span>
          <h1>Get Your Quote</h1>
          <p className={styles.heroSub}>
            We'll respond within 24 hours with a personalised quote for your event
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className={styles.formSection}>
        <div className="container">
          <div className={styles.grid}>
            {/* Form */}
            <div className={styles.formWrapper}>
              {submitStatus === 'success' ? (
                <div className={styles.success}>
                  <span className={styles.successIcon}>
                    <ArrowRight size={32} />
                  </span>
                  <h2>Message Sent</h2>
                  <p>
                    Thank you for your enquiry. We'll be in touch within 24 hours
                    with your personalised quote.
                  </p>
                  <button
                    className="btn btn-secondary"
                    onClick={() => {
                      setSubmitStatus('idle');
                      setFormData({
                        name: '',
                        email: '',
                        phone: '',
                        eventDate: '',
                        eventType: '',
                        eventLocation: '',
                        guestCount: '',
                        packageType: '',
                        duration: '3',
                        message: '',
                      });
                    }}
                  >
                    Send Another
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className={styles.form}>
                  <div className={styles.formGrid}>
                    <div className={styles.field}>
                      <label htmlFor="name">Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Your name"
                      />
                    </div>

                    <div className={styles.field}>
                      <label htmlFor="email">Email</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="your@email.com"
                      />
                    </div>

                    <div className={styles.field}>
                      <label htmlFor="phone">Phone</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        placeholder="07123 456 789"
                      />
                    </div>

                    <div className={styles.field}>
                      <label htmlFor="eventDate">Event Date</label>
                      <input
                        type="date"
                        id="eventDate"
                        name="eventDate"
                        value={formData.eventDate}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className={styles.field}>
                      <label htmlFor="eventType">Event Type</label>
                      <select
                        id="eventType"
                        name="eventType"
                        value={formData.eventType}
                        onChange={handleChange}
                        required
                      >
                        <option value="">Select...</option>
                        {eventTypes.map((type) => (
                          <option key={type} value={type}>
                            {type}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className={styles.field}>
                      <label htmlFor="eventLocation">Location</label>
                      <input
                        type="text"
                        id="eventLocation"
                        name="eventLocation"
                        value={formData.eventLocation}
                        onChange={handleChange}
                        required
                        placeholder="Venue & postcode"
                      />
                    </div>

                    <div className={styles.field}>
                      <label htmlFor="packageType">Package</label>
                      <select
                        id="packageType"
                        name="packageType"
                        value={formData.packageType}
                        onChange={handleChange}
                      >
                        {packageOptions.map((option) => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className={styles.field}>
                      <label htmlFor="duration">Duration</label>
                      <select
                        id="duration"
                        name="duration"
                        value={formData.duration}
                        onChange={handleChange}
                      >
                        <option value="2">2 hours</option>
                        <option value="3">3 hours</option>
                        <option value="4">4 hours</option>
                        <option value="5">5 hours</option>
                        <option value="6">6+ hours</option>
                      </select>
                    </div>
                  </div>

                  <div className={styles.fieldFull}>
                    <label htmlFor="message">Message (optional)</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      placeholder="Tell us about your event..."
                    />
                  </div>

                  <button
                    type="submit"
                    className={`btn btn-primary ${styles.submitBtn}`}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Enquiry'}
                    {!isSubmitting && <ArrowRight size={18} />}
                  </button>
                </form>
              )}
            </div>

            {/* Sidebar */}
            <aside className={styles.sidebar}>
              <div className={styles.contactBlock}>
                <h3>Direct Contact</h3>
                <ul>
                  <li>
                    <Phone size={18} />
                    <a href="tel:+447123456789">07123 456 789</a>
                  </li>
                  <li>
                    <Mail size={18} />
                    <a href="mailto:hello@questbooth.co.uk">hello@questbooth.co.uk</a>
                  </li>
                  <li>
                    <MapPin size={18} />
                    <span>Serving all of UK</span>
                  </li>
                </ul>
              </div>

              <div className={styles.promiseBlock}>
                <h3>Our Promise</h3>
                <p>
                  As a family-run business, we bring personal care and attention
                  to every event. Premium equipment, extensive props, and memories
                  your guests will cherish.
                </p>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Booking;
