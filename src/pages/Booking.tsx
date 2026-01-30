import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ArrowRight, Phone, Mail, MapPin, CheckCircle } from 'lucide-react';
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
    { value: 'drop-off', label: 'Drop-Off Digital' },
    { value: 'manned-digital', label: 'Manned Digital' },
    { value: 'manned-prints', label: 'Manned + Prints' },
  ];

  return (
    <main className={styles.booking}>
      {/* Hero */}
      <section className={styles.hero}>
        <div className="container">
          <span className={styles.heroTag}>Contact</span>
          <h1>Get Your <span className="text-gold">Free Quote</span></h1>
          <p>Fill out the form below and we will respond within 24 hours</p>
        </div>
      </section>

      {/* Form Section */}
      <section className={styles.formSection}>
        <div className="container">
          <div className={styles.grid}>
            {/* Form */}
            <div className={styles.formCard}>
              {submitStatus === 'success' ? (
                <div className={styles.success}>
                  <div className={styles.successIcon}>
                    <CheckCircle size={48} />
                  </div>
                  <h2>Thank You</h2>
                  <p>
                    Your enquiry has been received. We will review your details and
                    get back to you with a personalized quote within 24 hours.
                  </p>
                  <button
                    className="btn btn-primary"
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
                    Submit Another Enquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className={styles.form}>
                  <div className={styles.formHeader}>
                    <h2>Event Details</h2>
                    <p>Tell us about your upcoming celebration</p>
                  </div>

                  <div className={styles.formGrid}>
                    <div className={styles.field}>
                      <label htmlFor="name">Full Name</label>
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
                      <label htmlFor="email">Email Address</label>
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
                      <label htmlFor="phone">Phone Number</label>
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
                        <option value="">Select event type</option>
                        {eventTypes.map((type) => (
                          <option key={type.value} value={type.value}>
                            {type.label}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className={styles.field}>
                      <label htmlFor="eventLocation">Venue Location</label>
                      <input
                        type="text"
                        id="eventLocation"
                        name="eventLocation"
                        value={formData.eventLocation}
                        onChange={handleChange}
                        required
                        placeholder="Venue name and postcode"
                      />
                    </div>

                    <div className={styles.field}>
                      <label htmlFor="packageType">Preferred Package</label>
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
                      <label htmlFor="duration">Duration Required</label>
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
                    <label htmlFor="message">Additional Information</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      placeholder="Tell us more about your event or any special requirements"
                    />
                  </div>

                  <button
                    type="submit"
                    className={`btn btn-primary btn-large ${styles.submitBtn}`}
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
                <h3>Contact Information</h3>
                <p>Prefer to speak with us directly?</p>
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

              <div className={styles.promiseCard}>
                <h3>Why QuestBooth</h3>
                <ul className={styles.promiseList}>
                  <li>
                    <CheckCircle size={16} />
                    <span>Professional equipment and service</span>
                  </li>
                  <li>
                    <CheckCircle size={16} />
                    <span>Family-run business with personal touch</span>
                  </li>
                  <li>
                    <CheckCircle size={16} />
                    <span>500+ successful events</span>
                  </li>
                  <li>
                    <CheckCircle size={16} />
                    <span>Instant digital delivery to guests</span>
                  </li>
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Booking;
