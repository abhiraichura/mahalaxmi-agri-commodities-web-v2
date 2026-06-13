import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { ChevronRight, ChevronLeft, Check } from 'lucide-react';

const step1Schema = z.object({
  fullName: z.string().min(2, 'Name required'),
  mobile: z.string().regex(/^[0-9]{10}$/, 'Valid 10-digit mobile required'),
  email: z.string().email('Valid email required'),
  district: z.string().min(2, 'District required'),
  state: z.string().min(2, 'State required'),
});

const step2Schema = z.object({
  commodities: z.array(z.string()).min(1, 'Select at least one commodity'),
  monthlyCapacity: z.string().min(1, 'Capacity required'),
  storage: z.enum(['covered', 'cold', 'silo', 'none']),
  nearestMandi: z.string().min(2, 'Mandi required'),
});

const step3Schema = z.object({
  apeda: z.boolean(),
  fssai: z.boolean(),
  organic: z.boolean(),
  organicBody: z.string().optional(),
  labTesting: z.enum(['inhouse', 'thirdparty', 'none']),
});

type Step1 = z.infer<typeof step1Schema>;
type Step2 = z.infer<typeof step2Schema>;
type Step3 = z.infer<typeof step3Schema>;

const commodityOptions = ['Cumin', 'Coriander', 'Turmeric', 'Fenugreek', 'Chilli', 'Toor Dal', 'Chana', 'Mung', 'Sesame', 'Groundnut', 'Castor', 'Mustard', 'Fennel', 'Nigella', 'Cotton'];

export default function SupplierForm() {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState<Partial<Step1 & Step2 & Step3>>({});

  const step1Form = useForm<Step1>({ resolver: zodResolver(step1Schema) });
  const step2Form = useForm<Step2>({ resolver: zodResolver(step2Schema) });
  const step3Form = useForm<Step3>({ resolver: zodResolver(step3Schema), defaultValues: { apeda: false, fssai: false, organic: false, labTesting: 'none' }});

  const onStep1Submit = (data: Step1) => {
    setFormData(prev => ({ ...prev, ...data }));
    setStep(2);
  };

  const onStep2Submit = (data: Step2) => {
    setFormData(prev => ({ ...prev, ...data }));
    setStep(3);
  };

  const onStep3Submit = (data: Step3) => {
    setFormData(prev => ({ ...prev, ...data }));
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-8 text-center">
        <div className="w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
          <Check className="text-white" size={32} />
        </div>
        <h3 className="heading-3 text-emerald-800 mb-2">Registration Submitted!</h3>
        <p className="text-emerald-700">We will contact you within 24 business hours.</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow-lg border border-border-light p-6 md:p-8">
      <div className="flex items-center gap-2 mb-8">
        {[1,2,3].map(s => (
          <div key={s} className="flex-1 flex items-center gap-2">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-colors ${
              s <= step ? 'bg-brand-primary text-white' : 'bg-bg-warm text-text-muted'
            }`}>{s}</div>
            {s < 3 && <div className={`flex-1 h-1 rounded ${s < step ? 'bg-brand-primary' : 'bg-bg-warm'}`} />}
          </div>
        ))}
      </div>

      {step === 1 && (
        <form onSubmit={step1Form.handleSubmit(onStep1Submit)} className="space-y-4">
          <h3 className="heading-3 mb-4">Basic Information</h3>
          <div>
            <label className="block text-sm font-medium text-text-secondary mb-1">Full Name / Firm Name *</label>
            <input {...step1Form.register('fullName')} className="w-full px-4 py-2 border border-border-light rounded-md focus:ring-2 focus:ring-brand-primary focus:border-transparent outline-none" />
            {step1Form.formState.errors.fullName && <p className="text-red-500 text-xs mt-1">{step1Form.formState.errors.fullName.message}</p>}
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-text-secondary mb-1">Mobile Number *</label>
              <input {...step1Form.register('mobile')} placeholder="9876543210" className="w-full px-4 py-2 border border-border-light rounded-md focus:ring-2 focus:ring-brand-primary outline-none" />
              {step1Form.formState.errors.mobile && <p className="text-red-500 text-xs mt-1">{step1Form.formState.errors.mobile.message}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium text-text-secondary mb-1">Email *</label>
              <input {...step1Form.register('email')} type="email" className="w-full px-4 py-2 border border-border-light rounded-md focus:ring-2 focus:ring-brand-primary outline-none" />
              {step1Form.formState.errors.email && <p className="text-red-500 text-xs mt-1">{step1Form.formState.errors.email.message}</p>}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-text-secondary mb-1">District *</label>
              <input {...step1Form.register('district')} className="w-full px-4 py-2 border border-border-light rounded-md focus:ring-2 focus:ring-brand-primary outline-none" />
              {step1Form.formState.errors.district && <p className="text-red-500 text-xs mt-1">{step1Form.formState.errors.district.message}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium text-text-secondary mb-1">State *</label>
              <input {...step1Form.register('state')} className="w-full px-4 py-2 border border-border-light rounded-md focus:ring-2 focus:ring-brand-primary outline-none" />
              {step1Form.formState.errors.state && <p className="text-red-500 text-xs mt-1">{step1Form.formState.errors.state.message}</p>}
            </div>
          </div>
          <button type="submit" className="w-full py-3 bg-brand-primary text-white font-semibold rounded-md hover:bg-brand-primary-dark transition-colors flex items-center justify-center gap-2">
            Next <ChevronRight size={18} />
          </button>
        </form>
      )}

      {step === 2 && (
        <form onSubmit={step2Form.handleSubmit(onStep2Submit)} className="space-y-4">
          <h3 className="heading-3 mb-4">Commodity Details</h3>
          <div>
            <label className="block text-sm font-medium text-text-secondary mb-2">Commodities you supply *</label>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
              {commodityOptions.map(c => (
                <label key={c} className="flex items-center gap-2 p-2 border border-border-light rounded-md cursor-pointer hover:bg-bg-warm transition-colors">
                  <input type="checkbox" value={c} {...step2Form.register('commodities')} className="accent-brand-primary" />
                  <span className="text-sm">{c}</span>
                </label>
              ))}
            </div>
            {step2Form.formState.errors.commodities && <p className="text-red-500 text-xs mt-1">{step2Form.formState.errors.commodities.message}</p>}
          </div>
          <div>
            <label className="block text-sm font-medium text-text-secondary mb-1">Avg. Monthly Capacity (MT) *</label>
            <input {...step2Form.register('monthlyCapacity')} type="number" className="w-full px-4 py-2 border border-border-light rounded-md outline-none focus:ring-2 focus:ring-brand-primary" />
            {step2Form.formState.errors.monthlyCapacity && <p className="text-red-500 text-xs mt-1">{step2Form.formState.errors.monthlyCapacity.message}</p>}
          </div>
          <div>
            <label className="block text-sm font-medium text-text-secondary mb-1">Storage Facility *</label>
            <select {...step2Form.register('storage')} className="w-full px-4 py-2 border border-border-light rounded-md outline-none focus:ring-2 focus:ring-brand-primary">
              <option value="covered">Covered Godown</option>
              <option value="cold">Cold Storage</option>
              <option value="silo">Silo</option>
              <option value="none">None</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-text-secondary mb-1">Nearest APMC Mandi *</label>
            <input {...step2Form.register('nearestMandi')} className="w-full px-4 py-2 border border-border-light rounded-md outline-none focus:ring-2 focus:ring-brand-primary" />
            {step2Form.formState.errors.nearestMandi && <p className="text-red-500 text-xs mt-1">{step2Form.formState.errors.nearestMandi.message}</p>}
          </div>
          <div className="flex gap-3">
            <button type="button" onClick={() => setStep(1)} className="flex-1 py-3 border border-text-primary text-text-primary font-semibold rounded-md hover:bg-text-primary hover:text-white transition-colors flex items-center justify-center gap-2">
              <ChevronLeft size={18} /> Back
            </button>
            <button type="submit" className="flex-1 py-3 bg-brand-primary text-white font-semibold rounded-md hover:bg-brand-primary-dark transition-colors flex items-center justify-center gap-2">
              Next <ChevronRight size={18} />
            </button>
          </div>
        </form>
      )}

      {step === 3 && (
        <form onSubmit={step3Form.handleSubmit(onStep3Submit)} className="space-y-4">
          <h3 className="heading-3 mb-4">Certifications</h3>
          <div className="space-y-3">
            <label className="flex items-center gap-3 p-3 border border-border-light rounded-md cursor-pointer hover:bg-bg-warm transition-colors">
              <input type="checkbox" {...step3Form.register('apeda')} className="accent-brand-primary w-5 h-5" />
              <div>
                <p className="font-medium text-sm">APEDA Registration</p>
                <p className="text-xs text-text-muted">Agricultural and Processed Food Products Export Development Authority</p>
              </div>
            </label>
            <label className="flex items-center gap-3 p-3 border border-border-light rounded-md cursor-pointer hover:bg-bg-warm transition-colors">
              <input type="checkbox" {...step3Form.register('fssai')} className="accent-brand-primary w-5 h-5" />
              <div>
                <p className="font-medium text-sm">FSSAI Registration</p>
                <p className="text-xs text-text-muted">Food Safety and Standards Authority of India</p>
              </div>
            </label>
            <label className="flex items-center gap-3 p-3 border border-border-light rounded-md cursor-pointer hover:bg-bg-warm transition-colors">
              <input type="checkbox" {...step3Form.register('organic')} className="accent-brand-primary w-5 h-5" />
              <div>
                <p className="font-medium text-sm">Organic Certification</p>
                {step3Form.watch('organic') && (
                  <input {...step3Form.register('organicBody')} placeholder="Certifying body name" className="mt-2 w-full px-3 py-1.5 text-sm border border-border-light rounded outline-none focus:ring-2 focus:ring-brand-primary" />
                )}
              </div>
            </label>
          </div>
          <div>
            <label className="block text-sm font-medium text-text-secondary mb-1">Lab Testing Capacity</label>
            <select {...step3Form.register('labTesting')} className="w-full px-4 py-2 border border-border-light rounded-md outline-none focus:ring-2 focus:ring-brand-primary">
              <option value="none">None</option>
              <option value="inhouse">In-house Laboratory</option>
              <option value="thirdparty">Third Party (NABL Accredited)</option>
            </select>
          </div>
          <div className="flex gap-3">
            <button type="button" onClick={() => setStep(2)} className="flex-1 py-3 border border-text-primary text-text-primary font-semibold rounded-md hover:bg-text-primary hover:text-white transition-colors flex items-center justify-center gap-2">
              <ChevronLeft size={18} /> Back
            </button>
            <button type="submit" className="flex-1 py-3 bg-brand-primary text-white font-semibold rounded-md hover:bg-brand-primary-dark transition-colors flex items-center justify-center gap-2">
              Submit Registration <Check size={18} />
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
