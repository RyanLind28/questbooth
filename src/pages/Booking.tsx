import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ArrowRight, Phone, Mail, MapPin, Check } from 'lucide-react';
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
    packageType: preselectedPackage,
    duration: '3',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success'>('idle');

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
    { value: 'wedding', label: 'Wedding' },
    { value: 'corporate', label: 'Corporate Event' },
    { value: 'birthday', label: 'Birthday Party' },
    { value: 'engagement', label: 'Engagement Party' },
    { value: 'christmas', label: 'Christmas Party' },
    { value: 'prom', label: 'Prom / School Event' },
    { value: 'festival', label: 'Festival / Fair' },
    { value: 'other', label: 'Other' },
  ];

  const packageOptions = [
    { value: '', label: 'Not sure yet' },
    { value: 'drop-off', label: 'Drop-Off Digital — £199' },
    { value: 'manned-digital', label: 'Manned Digital — £349' },
    { value: 'manned-prints', label: 'Manned + Prints — £449' },
  ];

  return (
    <main className={styles.main}>
      {/* Hero */}
      <section className={styles.hero}>
        <div className="container">
          <p className="eyebrow">Contact</p>
          <h1>Let's make it<br /><span className="text-gold">happen</span></h1>
          <p className={styles.heroSub}>
            Fill out the form and we'll get back to you within 24 hours with a quote.
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
                  <div className={styles.successIcon}>
                    <Check size={32} />
                  </div>
                  <h2>Message received</h2>
                  <p>
                    Thank you for your enquiry. We'll review your details and
                    respond within 24 hours with a personalized quote.
                  </p>
                  <button
                    className="btn btn--secondary"
                    onClick={() => {
                      setSubmitStatus('idle');
                      setFormData({
                        name: '',
                        email: '',
                        phone: '',
                        eventDate: '',
                        eventType: '',
                        eventLocation: '',
                        packageType: '',
                        duration: '3',
                        message: '',
                      });
                    }}
                  >
                    Send another enquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className={styles.form}>
                  <div className={styles.formGroup}>
                    <div className={styles.field}>
                      <label htmlFor="name">Full name</label>
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
                        placeholder="you@email.com"
                      />
                    </div>
                  </div>

                  <div className={styles.formGroup}>
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
                      <label htmlFor="eventDate">Event date</label>
                      <input
                        type="date"
                        id="eventDate"
                        name="eventDate"
                        value={formData.eventDate}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className={styles.formGroup}>
                    <div className={styles.field}>
                      <label htmlFor="eventType">Event type</label>
                      <select
                        id="eventType"
                        name="eventType"
                        value={formData.eventType}
                        onChange={handleChange}
                        required
                      >
                        <option value="">Select type</option>
                        {eventTypes.map((type) => (
                          <option key={type.value} value={type.value}>
                            {type.label}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className={styles.field}>
                      <label htmlFor="eventLocation">Venue</label>
                      <input
                        type="text"
                        id="eventLocation"
                        name="eventLocation"
                        value={formData.eventLocation}
                        onChange={handleChange}
                        required
                        placeholder="Venue name & postcode"
                      />
                    </div>
                  </div>

                  <div className={styles.formGroup}>
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

                  <div className={styles.field}>
                    <label htmlFor="message">Additional details (optional)</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      placeholder="Tell us more about your event, any special requests, or questions you have"
                    />
                  </div>

                  <button
                    type="submit"
                    className={`btn btn--primary btn--large ${styles.submit}`}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Sending...' : 'Request Quote'}
                    {!isSubmitting && <ArrowRight size={20} />}
                  </button>
                </form>
              )}
            </div>

            {/* Sidebar */}
            <aside className={styles.sidebar}>
              <div className={styles.contactCard}>
                <h3>Prefer to talk?</h3>
                <p>We're happy to chat through your requirements.</p>
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

              <div className={styles.infoCard}>
                <h3>What happens next?</h3>
                <ol>
                  <li>
                    <span>1</span>
                    <p>We review your enquiry</p>
                  </li>
                  <li>
                    <span>2</span>
                    <p>You receive a tailored quote within 24 hours</p>
                  </li>
                  <li>
                    <span>3</span>
                    <p>Pay a 25% deposit to confirm your booking</p>
                  </li>
                </ol>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Booking;
