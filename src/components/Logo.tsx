"use client";

export default function Logo({ className = "" }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 400 72"
      className={className}
      aria-label="Höhere Schule im Spital Salzburg"
    >
      <style>
        {`.logo-b{font-family:Calibri,'Segoe UI',Arial,sans-serif;font-size:56px;font-weight:bold;fill:#ffffff}
          .logo-s{font-family:Calibri,'Segoe UI',Arial,sans-serif;font-size:28px;fill:#cce6f4}
          .logo-sub{font-family:Calibri,'Segoe UI',Arial,sans-serif;font-size:9px;fill:#cce6f4;letter-spacing:0.8px}`}
      </style>
      <text x="3" y="52" className="logo-b">
        H
      </text>
      <text x="42" y="52" className="logo-s">
        ÖHERE
      </text>
      <text x="138" y="52" className="logo-s">
        SCHULE
      </text>
      <text x="246" y="52" className="logo-b">
        I
      </text>
      <text x="260" y="52" className="logo-s">
        M
      </text>
      <text x="295" y="52" className="logo-b">
        S
      </text>
      <text x="323" y="52" className="logo-s">
        PITAL
      </text>
      <line x1="3" y1="59" x2="395" y2="59" stroke="#cce6f4" strokeWidth="1" />
      <text x="3" y="70" className="logo-sub">
        SCHULE FÜR KRANKE KINDER UND JUGENDLICHE · SALZBURG
      </text>
    </svg>
  );
}
