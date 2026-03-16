"use client";

import { useState, useMemo } from "react";

const WEIGHTED_MONTHLY_MEMBERSHIP = 145; // avg of $89, $149, $199
const WEIGHTED_BOOKING_RATE = 90; // avg of $60–$120 per 90-min slot
const DAYS_PER_YEAR = 365;

function formatCurrency(value: number): string {
  return "$" + Math.round(value).toLocaleString("en-US");
}

export default function RevenueCalculator() {
  const [memberships, setMemberships] = useState(200);
  const [dailyBookings, setDailyBookings] = useState(18);

  const { membershipRevenue, courtRevenue, totalRevenue } = useMemo(() => {
    const membershipRevenue =
      memberships * WEIGHTED_MONTHLY_MEMBERSHIP * 12;
    const courtRevenue =
      dailyBookings * WEIGHTED_BOOKING_RATE * DAYS_PER_YEAR;
    return {
      membershipRevenue,
      courtRevenue,
      totalRevenue: membershipRevenue + courtRevenue,
    };
  }, [memberships, dailyBookings]);

  return (
    <div className="p-8 md:p-10 rounded-2xl border border-charcoal/5 bg-cream/30">
      <h3 className="font-display text-2xl md:text-3xl font-bold text-charcoal text-center mb-2">
        Revenue Calculator
      </h3>
      <p className="text-charcoal/50 text-sm text-center mb-10">
        Adjust the sliders to explore projected annual revenue
      </p>

      {/* Sliders */}
      <div className="grid md:grid-cols-2 gap-8 md:gap-12">
        {/* Memberships Slider */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <label className="text-xs font-medium text-charcoal/50 tracking-wider uppercase">
              Average Memberships
            </label>
            <span className="font-display text-xl font-bold text-charcoal">
              {memberships}
            </span>
          </div>
          <input
            type="range"
            min={50}
            max={500}
            step={10}
            value={memberships}
            onChange={(e) => setMemberships(Number(e.target.value))}
            className="revenue-slider w-full"
          />
          <div className="flex justify-between mt-1.5">
            <span className="text-xs text-charcoal/30">50</span>
            <span className="text-xs text-charcoal/30">500</span>
          </div>
        </div>

        {/* Daily Court Bookings Slider */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <label className="text-xs font-medium text-charcoal/50 tracking-wider uppercase">
              Avg Daily Court Bookings
            </label>
            <span className="font-display text-xl font-bold text-charcoal">
              {dailyBookings}
            </span>
          </div>
          <input
            type="range"
            min={5}
            max={40}
            step={1}
            value={dailyBookings}
            onChange={(e) => setDailyBookings(Number(e.target.value))}
            className="revenue-slider w-full"
          />
          <div className="flex justify-between mt-1.5">
            <span className="text-xs text-charcoal/30">5</span>
            <span className="text-xs text-charcoal/30">40</span>
          </div>
        </div>
      </div>

      {/* Results */}
      <div className="mt-10 pt-8 border-t border-charcoal/10">
        {/* Breakdown */}
        <div className="grid grid-cols-2 gap-4 mb-6 max-w-md mx-auto">
          <div className="text-center">
            <p className="text-xs font-medium text-charcoal/40 tracking-wider uppercase mb-1">
              Membership Revenue
            </p>
            <p className="font-display text-lg md:text-xl font-bold text-charcoal">
              {formatCurrency(membershipRevenue)}
            </p>
          </div>
          <div className="text-center">
            <p className="text-xs font-medium text-charcoal/40 tracking-wider uppercase mb-1">
              Court Revenue
            </p>
            <p className="font-display text-lg md:text-xl font-bold text-charcoal">
              {formatCurrency(courtRevenue)}
            </p>
          </div>
        </div>

        {/* Total */}
        <div className="text-center">
          <p className="text-xs font-medium text-charcoal/40 tracking-wider uppercase mb-2">
            Estimated Annual Revenue
          </p>
          <p className="font-display text-4xl md:text-5xl font-bold text-forest">
            {formatCurrency(totalRevenue)}
          </p>
        </div>
      </div>
    </div>
  );
}
