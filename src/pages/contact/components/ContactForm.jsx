import React, { useState } from 'react';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    inquiryType: '',
    message: ''
  });
  
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const inquiryTypes = [
    { value: 'demo', label: 'Schedule a Demo' },
    { value: 'sales', label: 'Sales Inquiry' },
    { value: 'support', label: 'Technical Support' },
    { value: 'migration', label: 'Migration Assistance' },
    { value: 'partnership', label: 'Partnership Opportunity' },
    { value: 'other', label: 'Other' }
  ];

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData?.name?.trim()) {
      newErrors.name = 'Name is required';
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
    
    if (!formData?.inquiryType) {
      newErrors.inquiryType = 'Please select an inquiry type';
    }
    
    if (!formData?.message?.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData?.message?.trim()?.length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
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
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        inquiryType: '',
        message: ''
      });
      
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    }, 1500);
  };

  return (
    <div className="bg-card border border-border rounded-lg p-6 md:p-8">
      <div className="mb-6">
        <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-2">
          Send Us a Message
        </h3>
        <p className="text-sm md:text-base text-muted-foreground">
          Fill out the form below and we'll get back to you within 2 business hours
        </p>
      </div>
      {submitSuccess && (
        <div className="mb-6 p-4 bg-success/10 border border-success/20 rounded-lg flex items-start gap-3">
          <Icon name="CheckCircle2" size={20} color="var(--color-success)" />
          <div>
            <p className="text-sm font-medium text-success">Message sent successfully!</p>
            <p className="text-sm text-success/80 mt-1">
              Our team will contact you shortly at {formData?.email}
            </p>
          </div>
        </div>
      )}
      <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          <Input
            label="Full Name"
            type="text"
            placeholder="Rajesh Kumar"
            value={formData?.name}
            onChange={(e) => handleChange('name', e?.target?.value)}
            error={errors?.name}
            required
          />
          
          <Input
            label="Email Address"
            type="email"
            placeholder="rajesh@company.com"
            value={formData?.email}
            onChange={(e) => handleChange('email', e?.target?.value)}
            error={errors?.email}
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
            required
          />
          
          <Input
            label="Company Name"
            type="text"
            placeholder="ABC Trading Co."
            value={formData?.company}
            onChange={(e) => handleChange('company', e?.target?.value)}
          />
        </div>
        
        <Select
          label="Inquiry Type"
          placeholder="Select inquiry type"
          options={inquiryTypes}
          value={formData?.inquiryType}
          onChange={(value) => handleChange('inquiryType', value)}
          error={errors?.inquiryType}
          required
        />
        
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">
            Message <span className="text-destructive">*</span>
          </label>
          <textarea
            className="w-full min-h-[120px] px-3 py-2 text-sm border border-input rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-ring resize-none"
            placeholder="Tell us about your requirements or questions..."
            value={formData?.message}
            onChange={(e) => handleChange('message', e?.target?.value)}
          />
          {errors?.message && (
            <p className="text-sm text-destructive mt-1">{errors?.message}</p>
          )}
        </div>
        
        <Button
          type="submit"
          variant="default"
          fullWidth
          loading={isSubmitting}
          iconName="Send"
          iconPosition="right"
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </Button>
        
        <p className="text-xs text-muted-foreground text-center">
          By submitting this form, you agree to our privacy policy and terms of service
        </p>
      </form>
    </div>
  );
};

export default ContactForm;