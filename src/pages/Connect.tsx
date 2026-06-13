import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Phone, Mail, MapPin, Clock, MessageCircle, Send, Check } from 'lucide-react';

const schema = z.object({
  fullName: z.string().min(2, 'Name required'),
  companyName: z.string().min(2, 'Company required'),
  email: z.string().email('Valid email required'),
  mobile: z.string().regex(/^[0-9]{10}$/, 'Valid 10-digit mobile required'),
  userType: z.enum(['supplier', 'exporter', 'other']),
  commodities: z.array(z.string()).optional(),
  location: z.string().optional(),
  volume: z.string().optional(),
  targetPort: z.string().optional(),
  urgency: z.enum(['immediate', 'planned', 'exploratory']).optional(),
  message: z.string().optional(),
  consent: z.boolean().refine(v => v === true, 'Consent required'),
});

type FormData = z.infer<typeof schema>;

const commodityOptions = ['Cumin', 'Coriander', 'Turmeric', 'Fenugreek', 'Chilli', 'Toor Dal', 'Chana', 'Mung', 'Sesame', 'Groundnut', 'Castor', 'Mustard', 'Fennel', 'Nigella', 'Cotton'];

export default function Connect() {
  const [searchParams] = useSearchParams();
  const [submitted, setSubmitted] = useState(false);

  const { register, handleSubmit, watch, setValue, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: { userType: 'supplier', consent: false },
  });

  const userType = watch('userType');

  useEffect(() => {
    const commodity = searchParams.get('commodity');
    if (commodity) {
      setValue('commodities', [commodity]);
    }
  }, [searchParams, setValue]);

  const onSubmit = (data: FormData) => {
    console.log('Form submitted:', data);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen pt-32 pb-20 bg-bg-warm flex items-center justify-center">
        <div className="bg-white rounded-xl shadow-lg p-12 text-center max-w-md mx-4">
          <div className="w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <Check className="text-white" size={32} />
          </div>
          <h2 className="heading-2 text-emerald-800 mb-3">Thank You!</h2>
          <p className="text-text-secondary mb-2">Your inquiry has been received.</p>
          <p className="text-text-muted text-sm">We respond to all inquiries within 24 business hours.</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>Connect With Us | Mahalaxmi Agri Commodities — Rajkot</title>
        <meta name="description" content="Contact Mahalaxmi Agri Commodities in Rajkot, Gujarat. Submit your commodity inquiry. We respond within 24 business hours." />
        <link rel="canonical" href="https://mahalaxmiagri.com/connect" />
      </Helmet>

      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-bg-warm to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="caption text-brand-primary mb-4">Let's Talk</p>
          <h1 className="display-l text-text-primary mb-6">
            Every great deal<br />
            starts with one call.
          </h1>
          <p className="body-large text-text-secondary">
            Tell us who you are and what you're looking for. 
            We respond within 24 business hours. Always.
          </p>
        </div>
      </section>

      {/* Form + Contact */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Form */}
            <div className="lg:col-span-3">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-text-secondary mb-1">Full Name *</label>
                    <input {...register('fullName')} className="w-full px-4 py-2.5 border border-border-light rounded-md focus:ring-2 focus:ring-brand-primary outline-none" />
                    {errors.fullName && <p className="text-red-500 text-xs mt-1">{errors.fullName.message}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-text-secondary mb-1">Company / Firm Name *</label>
                    <input {...register('companyName')} className="w-full px-4 py-2.5 border border-border-light rounded-md focus:ring-2 focus:ring-brand-primary outline-none" />
                    {errors.companyName && <p className="text-red-500 text-xs mt-1">{errors.companyName.message}</p>}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-text-secondary mb-1">Email Address *</label>
                    <input {...register('email')} type="email" className="w-full px-4 py-2.5 border border-border-light rounded-md focus:ring-2 focus:ring-brand-primary outline-none" />
                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-text-secondary mb-1">Mobile Number *</label>
                    <div className="flex">
                      <span className="px-3 py-2.5 bg-bg-warm border border-r-0 border-border-light rounded-l-md text-sm text-text-muted">+91</span>
                      <input {...register('mobile')} placeholder="9876543210" className="flex-1 px-4 py-2.5 border border-border-light rounded-r-md focus:ring-2 focus:ring-brand-primary outline-none" />
                    </div>
                    {errors.mobile && <p className="text-red-500 text-xs mt-1">{errors.mobile.message}</p>}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-text-secondary mb-2">I am a: *</label>
                  <div className="flex gap-4">
                    {['supplier', 'exporter', 'other'].map(type => (
                      <label key={type} className="flex items-center gap-2 cursor-pointer">
                        <input type="radio" value={type} {...register('userType')} className="accent-brand-primary" />
                        <span className="text-sm capitalize">{type}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {userType === 'supplier' && (
                  <>
                    <div>
                      <label className="block text-sm font-medium text-text-secondary mb-2">Which commodities do you supply?</label>
                      <div className="flex flex-wrap gap-2">
                        {commodityOptions.map(c => (
                          <label key={c} className="flex items-center gap-1.5 px-3 py-1.5 border border-border-light rounded-md cursor-pointer hover:bg-bg-warm">
                            <input type="checkbox" value={c} {...register('commodities')} className="accent-brand-primary" />
                            <span className="text-sm">{c}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-text-secondary mb-1">Your Location (District, State) *</label>
                        <input {...register('location')} className="w-full px-4 py-2.5 border border-border-light rounded-md focus:ring-2 focus:ring-brand-primary outline-none" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-text-secondary mb-1">Approximate Monthly Volume (MT) *</label>
                        <input {...register('volume')} type="number" className="w-full px-4 py-2.5 border border-border-light rounded-md focus:ring-2 focus:ring-brand-primary outline-none" />
                      </div>
                    </div>
                  </>
                )}

                {userType === 'exporter' && (
                  <>
                    <div>
                      <label className="block text-sm font-medium text-text-secondary mb-2">Which commodities are you looking to source?</label>
                      <div className="flex flex-wrap gap-2">
                        {commodityOptions.map(c => (
                          <label key={c} className="flex items-center gap-1.5 px-3 py-1.5 border border-border-light rounded-md cursor-pointer hover:bg-bg-warm">
                            <input type="checkbox" value={c} {...register('commodities')} className="accent-brand-primary" />
                            <span className="text-sm">{c}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-text-secondary mb-1">Target Delivery Port *</label>
                        <input {...register('targetPort')} placeholder="e.g., Mundra, Kandla" className="w-full px-4 py-2.5 border border-border-light rounded-md focus:ring-2 focus:ring-brand-primary outline-none" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-text-secondary mb-1">Urgency</label>
                        <select {...register('urgency')} className="w-full px-4 py-2.5 border border-border-light rounded-md outline-none focus:ring-2 focus:ring-brand-primary">
                          <option value="immediate">Immediate (within 30 days)</option>
                          <option value="planned">Planned (1-3 months)</option>
                          <option value="exploratory">Exploratory</option>
                        </select>
                      </div>
                    </div>
                  </>
                )}

                <div>
                  <label className="block text-sm font-medium text-text-secondary mb-1">Your Message / Requirement Details</label>
                  <textarea {...register('message')} rows={4} className="w-full px-4 py-2.5 border border-border-light rounded-md focus:ring-2 focus:ring-brand-primary outline-none resize-none" />
                </div>

                <label className="flex items-start gap-3 cursor-pointer">
                  <input type="checkbox" {...register('consent')} className="accent-brand-primary mt-0.5" />
                  <span className="text-sm text-text-secondary">
                    I confirm I am a legitimate business entity and consent to being contacted by Mahalaxmi Agri Commodities regarding my inquiry.
                  </span>
                </label>
                {errors.consent && <p className="text-red-500 text-xs">{errors.consent.message}</p>}

                <button type="submit" className="w-full py-3.5 bg-brand-primary text-white font-semibold rounded-md hover:bg-brand-primary-dark transition-colors flex items-center justify-center gap-2">
                  <Send size={18} /> SEND INQUIRY
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-bg-warm rounded-xl p-6">
                <h3 className="heading-3 text-text-primary mb-6">Contact Directly</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Phone className="text-brand-primary" size={18} />
                    <span className="text-text-secondary">+91 98765 43210</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="text-brand-primary" size={18} />
                    <span className="text-text-secondary">info@mahalaxmiagri.com</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="text-brand-primary flex-shrink-0" size={18} />
                    <span className="text-text-secondary">Rajkot, Gujarat, India</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="text-brand-primary flex-shrink-0" size={18} />
                    <div className="text-text-secondary text-sm">
                      <p>Monday – Saturday: 9:30 AM – 7:00 PM IST</p>
                      <p>Sunday: Closed (urgent trade inquiries handled)</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-emerald-50 rounded-xl p-6 border border-emerald-100">
                <div className="flex items-center gap-2 mb-3">
                  <MessageCircle className="text-emerald-600" size={20} />
                  <h4 className="font-semibold text-emerald-800">Response Commitment</h4>
                </div>
                <p className="text-sm text-emerald-700">
                  We respond to all inquiries within 24 business hours.
                  Urgent sourcing requirements: within 4 hours during business hours.
                </p>
              </div>

              <div className="bg-white rounded-xl border border-border-light overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d118106.71772276573!2d70.771483!3d22.2736309!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3959c98ac71c4e47%3A0x4a0f7c5c8e3d2e1!2sRajkot%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  width="100%"
                  height="250"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Office Location"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
