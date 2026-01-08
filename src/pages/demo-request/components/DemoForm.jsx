import React, { useState } from 'react';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';
import { useNavigate } from 'react-router-dom';

const DemoForm = ({ onSubmit, isSubmitting }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    companyName: '',
    businessType: '',
    employeeCount: '',
    currentTools: [],
    primaryChallenge: '',
    preferredDate: '',
    preferredTime: '',
    additionalNotes: ''
  });

  const [errors, setErrors] = useState({});
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const businessTypeOptions = [
    { value: 'trading', label: 'Trading' },
    { value: 'wholesale', label: 'Wholesale Distribution' },
    { value: 'retail', label: 'Retail' },
    { value: 'manufacturing', label: 'Manufacturing' },
    { value: 'services', label: 'Services' },
    { value: 'other', label: 'Other' }
  ];

  const employeeCountOptions = [
    { value: '1-5', label: '1-5 employees' },
    { value: '6-10', label: '6-10 employees' },
    { value: '11-25', label: '11-25 employees' },
    { value: '26-50', label: '26-50 employees' },
    { value: '51-100', label: '51-100 employees' },
    { value: '100+', label: '100+ employees' }
  ];

  const currentToolsOptions = [
    { value: 'excel', label: 'Microsoft Excel' },
    { value: 'tally', label: 'Tally' },
    { value: 'manual', label: 'Manual/Paper-based' },
    { value: 'other-erp', label: 'Other ERP Software' },
    { value: 'custom', label: 'Custom Solution' }
  ];

  const challengeOptions = [
    { value: 'inventory', label: 'Inventory Management & Control' },
    { value: 'cashflow', label: 'Cash Flow Visibility' },
    { value: 'reporting', label: 'Financial Reporting & Analytics' },
    { value: 'customer', label: 'Customer Payment Tracking' },
    { value: 'operations', label: 'Operations Efficiency' },
    { value: 'compliance', label: 'GST Compliance & Audit' },
    { value: 'growth', label: 'Scaling Business Operations' }
  ];

  const timeSlotOptions = [
    { value: '10:00', label: '10:00 AM - 11:00 AM' },
    { value: '11:00', label: '11:00 AM - 12:00 PM' },
    { value: '12:00', label: '12:00 PM - 1:00 PM' },
    { value: '14:00', label: '2:00 PM - 3:00 PM' },
    { value: '15:00', label: '3:00 PM - 4:00 PM' },
    { value: '16:00', label: '4:00 PM - 5:00 PM' },
    { value: '17:00', label: '5:00 PM - 6:00 PM' }
  ];

  const navigate = useNavigate();

  const validateForm = () => {
    const newErrors = {};

    if (!formData?.fullName?.trim()) {
      newErrors.fullName = 'Full name is required';
    }

    if (!formData?.email?.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/?.test(formData?.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData?.phone?.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^[6-9]\d{9}$/?.test(formData?.phone?.replace(/\s/g, ''))) {
      newErrors.phone = 'Please enter a valid 10-digit Indian mobile number';
    }

    if (!formData?.companyName?.trim()) {
      newErrors.companyName = 'Company name is required';
    }

    if (!formData?.businessType) {
      newErrors.businessType = 'Please select your business type';
    }

    if (!formData?.employeeCount) {
      newErrors.employeeCount = 'Please select employee count';
    }

    if (formData?.currentTools?.length === 0) {
      newErrors.currentTools = 'Please select at least one current tool';
    }

    if (!formData?.primaryChallenge) {
      newErrors.primaryChallenge = 'Please select your primary challenge';
    }

    if (!formData?.preferredDate) {
      newErrors.preferredDate = 'Please select a preferred date';
    }

    if (!formData?.preferredTime) {
      newErrors.preferredTime = 'Please select a preferred time';
    }

    setErrors(newErrors);
    return Object.keys(newErrors)?.length === 0;
  };

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors?.[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e?.preventDefault();
    
    if (validateForm()) {
      setShowSuccessMessage(true);
      onSubmit(formData);
      
      setTimeout(() => {
        setShowSuccessMessage(false);
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          companyName: '',
          businessType: '',
          employeeCount: '',
          currentTools: [],
          primaryChallenge: '',
          preferredDate: '',
          preferredTime: '',
          additionalNotes: ''
        });
      }, 3000);
    }
  };

  const getMinDate = () => {
    const today = new Date();
    today?.setDate(today?.getDate() + 1);
    return today?.toISOString()?.split('T')?.[0];
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {showSuccessMessage && (
        <div className="p-4 bg-success/10 border border-success rounded-lg flex items-start gap-3 animate-slide-down">
          <Icon name="CheckCircle2" size={20} color="var(--color-success)" className="flex-shrink-0 mt-0.5" />
          <div>
            <p className="font-medium text-success">Demo Request Submitted Successfully!</p>
            <p className="text-sm text-success/80 mt-1">
              Our team will contact you within 24 hours to confirm your demo schedule.
            </p>
          </div>
        </div>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        <Input
          label="Full Name"
          type="text"
          placeholder="Enter your full name"
          value={formData?.fullName}
          onChange={(e) => handleChange('fullName', e?.target?.value)}
          error={errors?.fullName}
          required
        />

        <Input
          label="Email Address"
          type="email"
          placeholder="your.email@company.com"
          value={formData?.email}
          onChange={(e) => handleChange('email', e?.target?.value)}
          error={errors?.email}
          description="We'll send demo details to this email"
          required
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        <Input
          label="Phone Number"
          type="tel"
          placeholder="9876543210"
          value={formData?.phone}
          onChange={(e) => handleChange('phone', e?.target?.value)}
          error={errors?.phone}
          description="10-digit Indian mobile number"
          required
        />

        <Input
          label="Company Name"
          type="text"
          placeholder="Your company name"
          value={formData?.companyName}
          onChange={(e) => handleChange('companyName', e?.target?.value)}
          error={errors?.companyName}
          required
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        <Select
          label="Business Type"
          placeholder="Select your business type"
          options={businessTypeOptions}
          value={formData?.businessType}
          onChange={(value) => handleChange('businessType', value)}
          error={errors?.businessType}
          required
        />

        <Select
          label="Number of Employees"
          placeholder="Select employee count"
          options={employeeCountOptions}
          value={formData?.employeeCount}
          onChange={(value) => handleChange('employeeCount', value)}
          error={errors?.employeeCount}
          required
        />
      </div>
      <Select
        label="Current Tools You Use"
        description="Select all tools you currently use for business management"
        placeholder="Select current tools"
        options={currentToolsOptions}
        value={formData?.currentTools}
        onChange={(value) => handleChange('currentTools', value)}
        error={errors?.currentTools}
        multiple
        searchable
        required
      />
      <Select
        label="Primary Business Challenge"
        description="What's your biggest challenge we can help solve?"
        placeholder="Select your main challenge"
        options={challengeOptions}
        value={formData?.primaryChallenge}
        onChange={(value) => handleChange('primaryChallenge', value)}
        error={errors?.primaryChallenge}
        searchable
        required
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        <Input
          label="Preferred Demo Date"
          type="date"
          value={formData?.preferredDate}
          onChange={(e) => handleChange('preferredDate', e?.target?.value)}
          error={errors?.preferredDate}
          min={getMinDate()}
          description="Choose a date for your personalized demo"
          required
        />

        <Select
          label="Preferred Time Slot"
          placeholder="Select time slot"
          options={timeSlotOptions}
          value={formData?.preferredTime}
          onChange={(value) => handleChange('preferredTime', value)}
          error={errors?.preferredTime}
          description="All times in IST"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-foreground mb-2">
          Additional Notes (Optional)
        </label>
        <textarea
          className="w-full px-4 py-3 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-ring bg-background text-foreground resize-none"
          rows="4"
          placeholder="Tell us more about your specific requirements or questions..."
          value={formData?.additionalNotes}
          onChange={(e) => handleChange('additionalNotes', e?.target?.value)}
        />
        <p className="text-xs text-muted-foreground mt-1">
          Share any specific features you'd like to see or questions you have
        </p>
      </div>
      <Button
        variant="default"
        size="lg"
        type="submit"
        disabled={isSubmitting}
        fullWidth
        className="mt-2 text-base py-6 shadow-lg hover:shadow-xl transition-all duration-300"
      >
        {isSubmitting ? 'Submitting...' : 'Get My Free ERP Demo'}
      </Button>
      <p className="text-xs text-center text-muted-foreground">
        By submitting this form, you agree to our Privacy Policy and Terms of Service
      </p>
    </form>
  );
};

export default DemoForm;