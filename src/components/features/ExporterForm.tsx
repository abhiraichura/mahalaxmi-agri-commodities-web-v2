import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Send } from 'lucide-react';

const schema = z.object({
  companyName: z.string().min(2, 'Company name required'),
  contactPerson: z.string().min(2, 'Contact person required'),
  mobile: z.string().regex(/^[0-9]{10}$/, 'Valid 10-digit mobile required'),
  email: z.string().email('Valid email required'),
  commodity: z.string().min(1, 'Commodity required'),
  quantity: z.string().min(1, 'Quantity required'),
  grade: z.string().optional(),
  requiredBy: z.string().optional(),
  destinationPort: z.string().min(2, 'Port required'),
  certifications: z.array(z.string()).optional(),
  message: z.string().optional(),
});

type FormData = z.infer<typeof schema>;

const certOptions = ['Organic', 'Kosher', 'Halal', 'APEDA', 'FSSAI'];

export default function ExporterForm() {
  const { register, handleSubmit, formState: { errors, isSubmitSuccessful } } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    console.log('Exporter inquiry:', data);
  };

  if (isSubmitSuccessful) {
    return (
      <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-8 text-center">
        <h3 className="heading-3 text-emerald-800 mb-2">Inquiry Submitted!</h3>
        <p className="text-emerald-700">We'll respond within 24 business hours.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="bg-white rounded-xl shadow-lg border border-border-light p-6 md:p-8 space-y-4">
      <h3 className="heading-3 mb-4">Submit Sourcing Requirement</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-text-secondary mb-1">Company Name *</label>
          <input {...register('companyName')} className="w-full px-4 py-2 border border-border-light rounded-md focus:ring-2 focus:ring-brand-primary outline-none" />
          {errors.companyName && <p className="text-red-500 text-xs mt-1">{errors.companyName.message}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium text-text-secondary mb-1">Contact Person *</label>
          <input {...register('contactPerson')} className="w-full px-4 py-2 border border-border-light rounded-md focus:ring-2 focus:ring-brand-primary outline-none" />
          {errors.contactPerson && <p className="text-red-500 text-xs mt-1">{errors.contactPerson.message}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-text-secondary mb-1">Mobile *</label>
          <input {...register('mobile')} placeholder="9876543210" className="w-full px-4 py-2 border border-border-light rounded-md focus:ring-2 focus:ring-brand-primary outline-none" />
          {errors.mobile && <p className="text-red-500 text-xs mt-1">{errors.mobile.message}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium text-text-secondary mb-1">Email *</label>
          <input {...register('email')} type="email" className="w-full px-4 py-2 border border-border-light rounded-md focus:ring-2 focus:ring-brand-primary outline-none" />
          {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label className="block text-sm font-medium text-text-secondary mb-1">Commodity *</label>
          <select {...register('commodity')} className="w-full px-4 py-2 border border-border-light rounded-md outline-none focus:ring-2 focus:ring-brand-primary">
            <option value="">Select...</option>
            <option value="cumin">Cumin</option>
            <option value="coriander">Coriander</option>
            <option value="turmeric">Turmeric</option>
            <option value="fenugreek">Fenugreek</option>
            <option value="chilli">Red Chilli</option>
            <option value="toor-dal">Toor Dal</option>
            <option value="chana">Chana</option>
            <option value="mung">Mung</option>
            <option value="sesame">Sesame</option>
            <option value="groundnut">Groundnut</option>
            <option value="castor">Castor</option>
            <option value="mustard">Mustard</option>
            <option value="fennel">Fennel</option>
            <option value="nigella">Nigella</option>
            <option value="cotton">Cotton</option>
          </select>
          {errors.commodity && <p className="text-red-500 text-xs mt-1">{errors.commodity.message}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium text-text-secondary mb-1">Quantity (MT) *</label>
          <input {...register('quantity')} type="number" className="w-full px-4 py-2 border border-border-light rounded-md outline-none focus:ring-2 focus:ring-brand-primary" />
          {errors.quantity && <p className="text-red-500 text-xs mt-1">{errors.quantity.message}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium text-text-secondary mb-1">Quality Grade</label>
          <input {...register('grade')} placeholder="e.g., Singapore Quality" className="w-full px-4 py-2 border border-border-light rounded-md outline-none focus:ring-2 focus:ring-brand-primary" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-text-secondary mb-1">Required By</label>
          <input {...register('requiredBy')} type="date" className="w-full px-4 py-2 border border-border-light rounded-md outline-none focus:ring-2 focus:ring-brand-primary" />
        </div>
        <div>
          <label className="block text-sm font-medium text-text-secondary mb-1">Destination Port *</label>
          <input {...register('destinationPort')} placeholder="e.g., Mundra, Kandla" className="w-full px-4 py-2 border border-border-light rounded-md outline-none focus:ring-2 focus:ring-brand-primary" />
          {errors.destinationPort && <p className="text-red-500 text-xs mt-1">{errors.destinationPort.message}</p>}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-text-secondary mb-2">Certifications Required</label>
        <div className="flex flex-wrap gap-2">
          {certOptions.map(cert => (
            <label key={cert} className="flex items-center gap-1.5 px-3 py-1.5 border border-border-light rounded-md cursor-pointer hover:bg-bg-warm transition-colors">
              <input type="checkbox" value={cert} {...register('certifications')} className="accent-brand-primary" />
              <span className="text-sm">{cert}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-text-secondary mb-1">Additional Requirements</label>
        <textarea {...register('message')} rows={3} className="w-full px-4 py-2 border border-border-light rounded-md focus:ring-2 focus:ring-brand-primary outline-none resize-none" />
      </div>

      <button type="submit" className="w-full py-3 bg-brand-primary text-white font-semibold rounded-md hover:bg-brand-primary-dark transition-colors flex items-center justify-center gap-2">
        <Send size={18} /> Submit Requirement
      </button>
    </form>
  );
}
