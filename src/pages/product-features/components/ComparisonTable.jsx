import React from 'react';
import Icon from '../../../components/AppIcon';

const ComparisonTable = ({ comparison }) => {
  return (
    <div className="bg-card rounded-lg border border-border overflow-hidden">
      <div className="p-4 md:p-6 lg:p-8 bg-primary/5 border-b border-border">
        <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold text-foreground mb-2">
          {comparison?.title}
        </h3>
        <p className="text-sm md:text-base text-muted-foreground">
          {comparison?.description}
        </p>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[640px]">
          <thead>
            <tr className="border-b border-border">
              <th className="text-left p-4 md:p-6 text-sm md:text-base font-semibold text-foreground">
                Feature
              </th>
              {comparison?.columns?.map((column, index) => (
                <th
                  key={index}
                  className="text-center p-4 md:p-6 text-sm md:text-base font-semibold text-foreground"
                >
                  {column}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {comparison?.rows?.map((row, rowIndex) => (
              <tr key={rowIndex} className="border-b border-border hover:bg-muted/30 transition-colors duration-250">
                <td className="p-4 md:p-6 text-sm md:text-base text-foreground font-medium">
                  {row?.feature}
                </td>
                {row?.values?.map((value, colIndex) => (
                  <td key={colIndex} className="p-4 md:p-6 text-center">
                    {typeof value === 'boolean' ? (
                      value ? (
                        <Icon name="Check" size={20} color="var(--color-success)" />
                      ) : (
                        <Icon name="X" size={20} color="var(--color-muted-foreground)" />
                      )
                    ) : (
                      <span className="text-sm md:text-base text-muted-foreground">{value}</span>
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ComparisonTable;