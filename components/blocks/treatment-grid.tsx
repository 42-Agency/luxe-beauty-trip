"use client";

import { cn } from "@/lib/utils";
import { Section } from "../layout/section";
import { Heading, Text, Label } from "../ui/typography";
import { TreatmentCard } from "../ui/card";

interface Treatment {
  id: string;
  image: string;
  title: string;
  subtitle?: string;
  price?: string;
}

interface TreatmentGridProps {
  label?: string;
  title: string;
  subtitle?: string;
  treatments: Treatment[];
  columns?: 2 | 3 | 4;
  className?: string;
}

const columnStyles = {
  2: "grid-cols-1 md:grid-cols-2",
  3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
  4: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4",
};

export function TreatmentGrid({
  label,
  title,
  subtitle,
  treatments,
  columns = 3,
  className,
}: TreatmentGridProps) {
  return (
    <Section bg="blank" className={className}>
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-16">
        {label && <Label className="mb-4 block">{label}</Label>}
        <Heading level={2} className="mb-4">
          {title}
        </Heading>
        {subtitle && (
          <Text muted className="text-lg">
            {subtitle}
          </Text>
        )}
      </div>

      {/* Grid */}
      <div className={cn("grid gap-8", columnStyles[columns])}>
        {treatments.map((treatment) => (
          <TreatmentCard
            key={treatment.id}
            image={treatment.image}
            title={treatment.title}
            subtitle={treatment.subtitle}
            price={treatment.price}
          />
        ))}
      </div>
    </Section>
  );
}
