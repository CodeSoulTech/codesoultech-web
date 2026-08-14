import React from "react";

const Intern = () => {
  const certificate = {
    id: "CST-INT-2026-001",
    name: "Aditya Shukla",
    role: "React Developer",
    startDate: "01 June 2026",
    endDate: "30 June 2026",
    company: "CodeSoulTech",
    website: "https://codesoultech.online",
  };

  return (
    <div className="min-h-screen bg-[#070b12] text-white flex items-center justify-center px-4 py-10 relative overflow-hidden">
      
      {/* Background Effects */}
      <div className="absolute top-[-150px] left-[-150px] w-[350px] h-[350px] bg-[#14BAA6]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-[-150px] right-[-150px] w-[350px] h-[350px] bg-blue-500/10 rounded-full blur-3xl" />

      {/* Main Card */}
      <div className="relative w-full max-w-3xl">

        <div className="bg-[#0d131d]/95 border border-white/10 rounded-3xl shadow-2xl overflow-hidden backdrop-blur-xl">

          {/* Top Section */}
          <div className="px-6 sm:px-10 pt-10 pb-8 text-center border-b border-white/10">

            {/* Logo */}
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center p-3">
                <img
                  src="/logo.jpeg"
                  alt="CodeSoulTech"
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            </div>

            {/* Company */}
            <p className="text-[#14BAA6] font-semibold tracking-[0.25em] uppercase text-sm">
              CodeSoulTech
            </p>

            <h1 className="text-3xl sm:text-4xl font-bold mt-3">
              Certificate Verification
            </h1>

            <p className="text-gray-400 mt-3 text-sm sm:text-base">
              Official internship certificate validation
            </p>
          </div>

          {/* Verification Status */}
          <div className="px-6 sm:px-10 pt-8">

            <div className="flex items-center gap-4 bg-[#14BAA6]/10 border border-[#14BAA6]/20 rounded-2xl p-5">

              <div className="w-12 h-12 shrink-0 rounded-full bg-[#14BAA6]/15 border border-[#14BAA6]/30 flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-[#14BAA6]"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>

              <div>
                <p className="text-[#14BAA6] font-bold">
                  VALID CERTIFICATE
                </p>

                <p className="text-gray-400 text-sm mt-1">
                  This certificate has been successfully verified by
                  CodeSoulTech.
                </p>
              </div>
            </div>
          </div>

          {/* Certificate Details */}
          <div className="px-6 sm:px-10 py-8">

            <div className="text-center mb-8">
              <p className="text-gray-500 text-sm uppercase tracking-widest">
                This certificate is awarded to
              </p>

              <h2 className="text-3xl sm:text-4xl font-bold mt-3 text-white">
                {certificate.name}
              </h2>

              <div className="w-20 h-1 bg-[#14BAA6] rounded-full mx-auto mt-4" />
            </div>

            {/* Details Grid */}
            <div className="grid sm:grid-cols-2 gap-4">

              <div className="bg-white/[0.03] border border-white/10 rounded-xl p-5">
                <p className="text-gray-500 text-xs uppercase tracking-wider">
                  Internship Role
                </p>

                <p className="text-lg font-semibold mt-2">
                  {certificate.role}
                </p>
              </div>

              <div className="bg-white/[0.03] border border-white/10 rounded-xl p-5">
                <p className="text-gray-500 text-xs uppercase tracking-wider">
                  Organization
                </p>

                <p className="text-lg font-semibold mt-2">
                  {certificate.company}
                </p>
              </div>

              <div className="bg-white/[0.03] border border-white/10 rounded-xl p-5">
                <p className="text-gray-500 text-xs uppercase tracking-wider">
                  Start Date
                </p>

                <p className="text-lg font-semibold mt-2">
                  {certificate.startDate}
                </p>
              </div>

              <div className="bg-white/[0.03] border border-white/10 rounded-xl p-5">
                <p className="text-gray-500 text-xs uppercase tracking-wider">
                  End Date
                </p>

                <p className="text-lg font-semibold mt-2">
                  {certificate.endDate}
                </p>
              </div>
            </div>

            {/* Description */}
            <div className="mt-6 bg-white/[0.03] border border-white/10 rounded-xl p-6">

              <p className="text-gray-300 leading-7 text-sm sm:text-base">
                This certificate confirms that{" "}
                <span className="text-white font-semibold">
                  {certificate.name}
                </span>{" "}
                has successfully completed an internship as a{" "}
                <span className="text-[#14BAA6] font-semibold">
                  {certificate.role}
                </span>{" "}
                at{" "}
                <span className="text-white font-semibold">
                  {certificate.company}
                </span>{" "}
                from{" "}
                <span className="text-white">
                  {certificate.startDate}
                </span>{" "}
                to{" "}
                <span className="text-white">
                  {certificate.endDate}
                </span>
                .
              </p>

              <p className="text-gray-400 leading-7 text-sm sm:text-base mt-4">
                The internship was focused on developing practical skills in
                React and completing mini-project-based evaluations.
              </p>
            </div>

            {/* Certificate ID */}
            <div className="mt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 bg-black/20 border border-white/10 rounded-xl px-5 py-4">

              <div>
                <p className="text-gray-500 text-xs uppercase tracking-wider">
                  Certificate ID
                </p>

                <p className="font-mono text-sm text-gray-200 mt-1">
                  {certificate.id}
                </p>
              </div>

              <div className="flex items-center gap-2 text-[#14BAA6] text-sm font-medium">
                <span className="w-2 h-2 rounded-full bg-[#14BAA6]" />
                Verified
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="px-6 sm:px-10 py-6 bg-black/20 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">

            <div className="text-center sm:text-left">
              <p className="text-gray-500 text-xs">
                Issued and verified by
              </p>

              <p className="font-semibold mt-1">
                CodeSoulTech
              </p>
            </div>

            <a
              href={certificate.website}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#14BAA6] hover:text-white transition text-sm font-medium"
            >
              codesoultech.online →
            </a>
          </div>

        </div>

        {/* Bottom Text */}
        <p className="text-center text-gray-600 text-xs mt-5">
          © {new Date().getFullYear()} CodeSoulTech. All rights reserved.
        </p>

      </div>
    </div>
  );
};

export default Intern;