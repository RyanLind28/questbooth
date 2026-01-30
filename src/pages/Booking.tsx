import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Send, Phone, Mail, MapPin, PartyPopper, Heart } from 'lucide-react';
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
    { value: 'wedding', label: '💒 Wedding' },
    { value: 'corporate', label: '🏢 Corporate Event' },
    { value: 'birthday', label: '🎂 Birthday Party' },
    { value: 'engagement', label: '💍 Engagement Party' },
    { value: 'christmas', label: '🎄 Christmas Party' },
    { value: 'prom', label: '🎓 Prom / School Event' },
    { value: 'festival', label: '🎪 Festival / Fair' },
    { value: 'other', label: '🎉 Other Fun Event' },
  ];

  const packageOptions = [
    { value: '', label: '🤔 Not sure yet!' },
    { value: 'drop-off', label: '📱 Drop-Off Digital' },
    { value: 'manned-digital', label: '🎪 Manned Digital' },
    { value: 'manned-prints', label: '🖨️ Manned + Prints' },
  ];

  return (
    <main className={styles.booking}>
      {/* Hero */}
      <section className={styles.hero}>
        <div className="container">
          <span className={styles.heroEmoji}>📬</span>
          <h1>Let's <span className="text-gold">Chat!</span></h1>
          <p>Fill this out and we'll hit you back within 24 hours with your quote!</p>
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
                  <span className={styles.successEmoji}>🎉</span>
                  <h2>Woohoo!</h2>
                  <p>
                    Your message is on its way! We'll get back to you super soon
                    with your personalized quote.
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
                    Send Another!
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className={styles.form}>
                  <div className={styles.formHeader}>
                    <PartyPopper size={32} className={styles.formIcon} />
                    <h2>Tell Us About Your Event!</h2>
                  </div>

                  <div className={styles.formGrid}>
                    <div className={styles.field}>
                      <label htmlFor="name">Your Name ✨</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="What should we call you?"
                      />
                    </div>

                    <div className={styles.field}>
                      <label htmlFor="email">Email 📧</label>
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
                      <label htmlFor="phone">Phone 📱</label>
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
                      <label htmlFor="eventDate">Party Date 📅</label>
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
                      <label htmlFor="eventType">What's the Occasion?</label>
                      <select
                        id="eventType"
                        name="eventType"
                        value={formData.eventType}
                        onChange={handleChange}
                        required
                      >
                        <option value="">Pick one...</option>
                        {eventTypes.map((type) => (
                          <option key={type.value} value={type.value}>
                            {type.label}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className={styles.field}>
                      <label htmlFor="eventLocation">Where's the Party? 📍</label>
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

                    <div className={styles.field}>
                      <label htmlFor="packageType">Interested In...</label>
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
                      <label htmlFor="duration">How Long? ⏰</label>
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
                        <option value="6">6+ hours (Party animal!)</option>
                      </select>
                    </div>
                  </div>

                  <div className={styles.fieldFull}>
                    <label htmlFor="message">Anything Else? 💬</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      placeholder="Tell us more about your event, special requests, or just say hi!"
                    />
                  </div>

                  <button
                    type="submit"
                    className={`btn btn-primary btn-large ${styles.submitBtn}`}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Sending...' : 'Send It!'}
                    {!isSubmitting && <Send size={20} />}
                  </button>
                </form>
              )}
            </div>

            {/* Sidebar */}
            <aside className={styles.sidebar}>
              <div className={styles.contactCard}>
                <span className={styles.cardEmoji}>📞</span>
                <h3>Prefer to Chat?</h3>
                <p>We love hearing from you!</p>
                <ul>
                  <li>
                    <Phone size={20} />
                    <a href="tel:+447123456789">07123 456 789</a>
                  </li>
                  <li>
                    <Mail size={20} />
                    <a href="mailto:hello@questbooth.co.uk">hello@questbooth.co.uk</a>
                  </li>
                  <li>
                    <MapPin size={20} />
                    <span>Serving all of UK!</span>
                  </li>
                </ul>
              </div>

              <div className={styles.promiseCard}>
                <span className={styles.cardEmoji}>💛</span>
                <h3>Our Promise</h3>
                <p>
                  We're a family business that genuinely cares about making your
                  event AMAZING. Premium gear, endless props, and memories your
                  guests will cherish forever!
                </p>
                <Heart className={styles.heartIcon} size={24} />
              </div>
            </aside>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Booking;
