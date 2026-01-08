import React from 'react';
import Icon from '../../../components/AppIcon';

const WorkflowSection = ({ workflow }) => {
  return (
    <div className="bg-card rounded-lg border border-border p-4 md:p-6 lg:p-8">
      <div className="flex items-center gap-3 mb-4 md:mb-6">
        <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-secondary/10 flex items-center justify-center">
          <Icon name={workflow?.icon} size={20} color="var(--color-secondary)" />
        </div>
        <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold text-foreground">
          {workflow?.title}
        </h3>
      </div>
      <p className="text-sm md:text-base text-muted-foreground mb-6">
        {workflow?.description}
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {workflow?.steps?.map((step, index) => (
          <div key={index} className="relative">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <span className="text-sm font-semibold text-primary">{index + 1}</span>
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="text-sm md:text-base font-semibold text-foreground mb-1">
                  {step?.title}
                </h4>
                <p className="text-xs md:text-sm text-muted-foreground">
                  {step?.description}
                </p>
              </div>
            </div>
            {index < workflow?.steps?.length - 1 && (
              <div className="hidden lg:block absolute top-4 left-full w-full h-0.5 bg-border -translate-x-1/2" />
            )}
          </div>
        ))}
      </div>
      <div className="mt-6 pt-6 border-t border-border">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {workflow?.metrics?.map((metric, index) => (
            <div key={index} className="text-center">
              <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-1">
                {metric?.value}
              </div>
              <div className="text-xs md:text-sm text-muted-foreground">
                {metric?.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkflowSection;