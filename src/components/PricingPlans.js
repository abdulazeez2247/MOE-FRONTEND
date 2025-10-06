import React from "react";
import Button from "./ui/Button";
import { Card, CardInner } from "./ui/Card";

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "/mo",
    features: ["5 queries/day", "gpt-4o-mini responses", "Basic chat"],
    cta: "Start Free",
    highlighted: false,
  },
  {
    name: "Pro",
    price: "$39",
    period: "/mo",
    features: ["Unlimited chat", "Upload .cab/.cabx/.mzb/.xml", "Detailed breakdowns", "Export CSV/PDF"],
    cta: "Upgrade to Pro",
    highlighted: true,
  },
  {
    name: "Team",
    price: "$149",
    period: "/mo",
    features: ["All Pro features", "Multi-user seats", "Priority support", "Admin controls"],
    cta: "Contact Sales",
    highlighted: false,
  },
];

export default function PricingPlans() {
  return (
    <div className="container-page py-6 md:py-10">
      <div className="mb-6 text-center">
        <h1 className="heading-hero">Plans &amp; Pricing</h1>
        <p className="muted mt-2">Flexible tiers to fit every shop — from solo estimators to enterprise</p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {plans.map((p) => (
          <Card key={p.name} className={p.highlighted ? "ring-2 ring-brand-500" : ""}>
            <CardInner>
              <div className="flex items-baseline justify-between">
                <h3 className="text-xl font-semibold">{p.name}</h3>
                {p.highlighted && <span className="chip">Popular</span>}
              </div>
              <div className="mt-2 flex items-end gap-1">
                <span className="text-3xl font-bold">{p.price}</span>
                <span className="muted">{p.period}</span>
              </div>
              <ul className="mt-4 space-y-2">
                {p.features.map((f, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm">
                    <svg viewBox="0 0 20 20" className="w-5 h-5 shrink-0 text-brand-600" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-7.071 7.071a1 1 0 01-1.414 0L3.293 9.95a1 1 0 111.414-1.414l3.101 3.101 6.364-6.364a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <Button className="mt-6 w-full" variant={p.highlighted ? "primary" : "outline"}>
                {p.cta}
              </Button>
            </CardInner>
          </Card>
        ))}
      </div>
    </div>
  );
}