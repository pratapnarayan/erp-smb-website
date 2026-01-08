import React from 'react';
import Icon from '../../../components/AppIcon';

const RecentDemoBookings = () => {
  const recentBookings = [
    {
      id: 1,
      companyName: 'Sharma Trading Co.',
      businessType: 'Wholesale Distribution',
      location: 'Delhi',
      timeAgo: '2 hours ago'
    },
    {
      id: 2,
      companyName: 'Patel Electronics',
      businessType: 'Retail',
      location: 'Mumbai',
      timeAgo: '5 hours ago'
    },
    {
      id: 3,
      companyName: 'Kumar Manufacturing',
      businessType: 'Manufacturing',
      location: 'Bangalore',
      timeAgo: '1 day ago'
    }
  ];

  return (
    <div className="bg-muted/50 border border-border rounded-lg p-4 md:p-6">
      <div className="flex items-center gap-2 mb-4">
        <Icon name="TrendingUp" size={20} color="var(--color-success)" />
        <h3 className="font-heading font-semibold text-foreground text-sm md:text-base">
          Recent Demo Bookings
        </h3>
      </div>
      <div className="space-y-3">
        {recentBookings?.map((booking) => (
          <div
            key={booking?.id}
            className="bg-card border border-border rounded-lg p-3 md:p-4 flex items-start gap-3"
          >
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
              <Icon name="Building2" size={18} color="var(--color-primary)" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-medium text-foreground text-sm md:text-base truncate">
                {booking?.companyName}
              </p>
              <p className="text-xs md:text-sm text-muted-foreground">
                {booking?.businessType} • {booking?.location}
              </p>
              <p className="text-xs text-muted-foreground mt-1">
                {booking?.timeAgo}
              </p>
            </div>
          </div>
        ))}
      </div>
      <p className="text-xs text-center text-muted-foreground mt-4">
        Join businesses like these in transforming their operations
      </p>
    </div>
  );
};

export default RecentDemoBookings;