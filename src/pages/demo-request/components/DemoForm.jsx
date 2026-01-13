import React, { useState } from 'react';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const DemoForm = ({ onSubmit, isSubmitting }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    businessType: '',
    email: ''
  });

  const [errors, setErrors] = useState({});
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const businessTypeOptions = [
    { value: 'retail', label: 'Retail' },
    { value: 'wholesale', label: 'Wholesale' },
    { value: 'manufacturing', label: 'Manufacturing' },
    { value: 'services', label: 'Services' }
  ];

  const validateForm = () => {
    const newErrors = {};

    if (!formData?.fullName?.trim()) {
      newErrors.fullName = 'Full name is required';
    }

    if (!formData?.phone?.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^[6-9]\d{9}$/.test(formData?.phone?.replace(/\s/g, ''))) {
      newErrors.phone = 'Please enter a valid 10-digit Indian mobile number';
    }

    if (!formData?.businessType) {
      newErrors.businessType = 'Please select your business type';
    }

    // Email is optional, but validate if provided
    if (formData?.email?.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData?.email)) {
      newErrors.email = 'Please enter a valid email address';
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
          phone: '',
          businessType: '',
          email: ''
        });
      }, 5000);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {showSuccessMessage && (
        <div className="p-5 bg-success/10 border-2 border-success rounded-lg flex items-start gap-3 animate-slide-down">
          <Icon name="CheckCircle2" size={24} color="var(--color-success)" className="flex-shrink-0 mt-0.5" />
          <div>
            <p className="font-semibold text-success text-lg">Thanks! Our team will contact you within 2 hours.</p>
            <p className="text-sm text-success/80 mt-1">
              We'll reach out to schedule your personalized ERP demo at a convenient time.
            </p>
          </div>
        </div>
      )}

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
        label="Phone Number"
        type="tel"
        placeholder="9876543210"
        value={formData?.phone}
        onChange={(e) => handleChange('phone', e?.target?.value)}
        error={errors?.phone}
        description="10-digit Indian mobile number"
        required
      />

      <Select
        label="Business Type"
        placeholder="Select your business type"
        options={businessTypeOptions}
        value={formData?.businessType}
        onChange={(value) => handleChange('businessType', value)}
        error={errors?.businessType}
        required
      />

      <Input
        label="Email Address (Optional)"
        type="email"
        placeholder="your.email@company.com"
        value={formData?.email}
        onChange={(e) => handleChange('email', e?.target?.value)}
        error={errors?.email}
        description="We'll send demo details to this email"
      />

      <Button
        variant="default"
        size="lg"
        type="submit"
        disabled={isSubmitting}
        fullWidth
        className="mt-4 text-base py-6 shadow-lg hover:shadow-xl transition-all duration-300"
      >
        {isSubmitting ? 'Submitting...' : 'Book Free Demo'}
      </Button>

      <p className="text-xs text-center text-muted-foreground">
        By submitting this form, you agree to our Privacy Policy. No spam, ever.
      </p>
    </form>
  );
};

export default DemoForm;