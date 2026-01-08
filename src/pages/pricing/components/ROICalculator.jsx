import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';

const ROICalculator = () => {
  const [employees, setEmployees] = useState(10);
  const [monthlyRevenue, setMonthlyRevenue] = useState(500000);
  const [hoursSpent, setHoursSpent] = useState(20);
  const [industry, setIndustry] = useState('trading');

  const industryOptions = [
    { value: 'trading', label: 'Trading' },
    { value: 'wholesale', label: 'Wholesale Distribution' },
    { value: 'retail', label: 'Retail' },
    { value: 'manufacturing', label: 'Manufacturing' }
  ];

  const calculateROI = () => {
    const hourlyRate = 500;
    const timeSavings = hoursSpent * 0.7;
    const monthlySavings = timeSavings * hourlyRate * 4;
    const errorReduction = monthlyRevenue * 0.02;
    const totalMonthlySavings = monthlySavings + errorReduction;
    const annualSavings = totalMonthlySavings * 12;
    
    const tierCost = employees <= 3 ? 2999 : employees <= 10 ? 7999 : 14999;
    const annualCost = tierCost * 12 * 0.8;
    
    const netAnnualBenefit = annualSavings - annualCost;
    const roi = ((netAnnualBenefit / annualCost) * 100)?.toFixed(0);
    const paybackMonths = (annualCost / totalMonthlySavings)?.toFixed(1);

    return {
      monthlySavings: Math.round(totalMonthlySavings),
      annualSavings: Math.round(annualSavings),
      annualCost: Math.round(annualCost),
      netBenefit: Math.round(netAnnualBenefit),
      roi: roi,
      paybackMonths: paybackMonths
    };
  };

  const results = calculateROI();

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    })?.format(amount);
  };

  return (
    <div className="bg-card rounded-xl border border-border p-6 md:p-8">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-primary/10 flex items-center justify-center">
          <Icon name="Calculator" size={24} color="var(--color-primary)" />
        </div>
        <div>
          <h3 className="text-xl md:text-2xl font-bold text-foreground">
            ROI Calculator
          </h3>
          <p className="text-sm md:text-base text-muted-foreground">
            See your potential savings with ERP-SMB
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-6">
        <Input
          label="Number of Employees"
          type="number"
          value={employees}
          onChange={(e) => setEmployees(Number(e?.target?.value))}
          min={1}
          max={100}
        />

        <Select
          label="Industry Type"
          options={industryOptions}
          value={industry}
          onChange={setIndustry}
        />

        <Input
          label="Monthly Revenue (₹)"
          type="number"
          value={monthlyRevenue}
          onChange={(e) => setMonthlyRevenue(Number(e?.target?.value))}
          min={0}
        />

        <Input
          label="Hours/Week on Manual Tasks"
          type="number"
          value={hoursSpent}
          onChange={(e) => setHoursSpent(Number(e?.target?.value))}
          min={0}
          max={168}
        />
      </div>
      <div className="bg-muted/50 rounded-lg p-4 md:p-6 space-y-4">
        <h4 className="text-base md:text-lg font-semibold text-foreground mb-4">
          Your Estimated Savings
        </h4>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="bg-card rounded-lg p-4 border border-border">
            <p className="text-xs md:text-sm text-muted-foreground mb-1">
              Monthly Savings
            </p>
            <p className="text-xl md:text-2xl font-bold text-success">
              {formatCurrency(results?.monthlySavings)}
            </p>
          </div>

          <div className="bg-card rounded-lg p-4 border border-border">
            <p className="text-xs md:text-sm text-muted-foreground mb-1">
              Annual Savings
            </p>
            <p className="text-xl md:text-2xl font-bold text-success">
              {formatCurrency(results?.annualSavings)}
            </p>
          </div>

          <div className="bg-card rounded-lg p-4 border border-border">
            <p className="text-xs md:text-sm text-muted-foreground mb-1">
              Return on Investment
            </p>
            <p className="text-xl md:text-2xl font-bold text-primary">
              {results?.roi}%
            </p>
          </div>

          <div className="bg-card rounded-lg p-4 border border-border">
            <p className="text-xs md:text-sm text-muted-foreground mb-1">
              Payback Period
            </p>
            <p className="text-xl md:text-2xl font-bold text-primary">
              {results?.paybackMonths} months
            </p>
          </div>
        </div>

        <div className="pt-4 border-t border-border">
          <div className="flex items-start gap-2 text-xs md:text-sm text-muted-foreground">
            <Icon name="Info" size={16} className="flex-shrink-0 mt-0.5" />
            <p>
              Calculations based on industry averages for time savings (70% reduction in manual tasks) 
              and error reduction (2% of revenue). Actual results may vary based on your specific business processes.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ROICalculator;