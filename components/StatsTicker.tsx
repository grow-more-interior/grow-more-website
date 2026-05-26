"use client";

const items = [
  "Interior Design",
  "★",
  "Luxury Residential",
  "★",
  "Commercial Spaces",
  "★",
  "Custom Furniture",
  "★",
  "Space Planning",
  "★",
  "Award Winning",
  "★",
  "12+ Years",
  "★",
  "250+ Projects",
  "★",
  // duplicate for seamless loop
  "Interior Design",
  "★",
  "Luxury Residential",
  "★",
  "Commercial Spaces",
  "★",
  "Custom Furniture",
  "★",
  "Space Planning",
  "★",
  "Award Winning",
  "★",
  "12+ Years",
  "★",
  "250+ Projects",
  "★",
];

export default function StatsTicker() {
  return (
    <div className="ticker" aria-hidden="true">
      <div className="ticker-track font-inktrap font-bold">
        {items.map((item, i) => (
          <span
            key={i}
            className={item === "★" ? "text-primary" : ""}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
