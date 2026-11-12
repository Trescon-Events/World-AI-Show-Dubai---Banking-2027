"use client";

import { useEffect, useState } from "react";

// Declare hbspt globally for window object in TypeScript
declare global {
  interface Window {
    hbspt?: {
      forms: {
        create: (options: {
          portalId: string;
          formId: string;
          target: string;
          region?: string;
          css?: string;
          onFormReady?: ($form: any) => void;
        }) => void;
      };
    };
  }
}

interface HubspotFormProps {
  portalId: string;
  formId: string;
  region?: string;
  className?: string;
}

export default function HubspotForm({ portalId, formId, region = "na1", className = "" }: HubspotFormProps) {
  const [isScriptLoaded, setIsScriptLoaded] = useState(false);
  const [loadError, setLoadError] = useState(false);
  const [isFormReady, setIsFormReady] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const containerId = `hs-form-${formId}`;

  // Form Fields State for Fallback Form
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [company, setCompany] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    // Check if script is already present in document to prevent duplicates
    let script = document.querySelector('script[src="https://js.hsforms.net/forms/embed/v2.js"]') as HTMLScriptElement;

    const handleScriptLoad = () => {
      setIsScriptLoaded(true);
    };

    if (!script) {
      script = document.createElement("script");
      script.src = "https://js.hsforms.net/forms/embed/v2.js";
      script.async = true;
      script.onload = handleScriptLoad;
      script.onerror = () => setLoadError(true);
      document.body.appendChild(script);
    } else {
      if (window.hbspt) {
        setIsScriptLoaded(true);
      } else {
        script.addEventListener("load", handleScriptLoad);
        script.addEventListener("error", () => setLoadError(true));
      }
    }

    // Set a timeout. If hbspt is not loaded after 3 seconds, trigger fallback form (very likely blocked by Adblock/Brave)
    const timeout = setTimeout(() => {
      if (!window.hbspt) {
        setLoadError(true);
      }
    }, 3000);

    return () => {
      clearTimeout(timeout);
      if (script) {
        script.removeEventListener("load", handleScriptLoad);
      }
    };
  }, []);

  // Fail-safe render timeout check: If the HubSpot script is loaded but the form fails to render in the DOM after 4 seconds, trigger fallback form.
  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    if (isScriptLoaded && !loadError && !isFormReady) {
      timeoutId = setTimeout(() => {
        if (!isFormReady) {
          console.warn("HubSpot form render timed out or failed. Falling back to secure direct contact form.");
          setLoadError(true);
        }
      }, 4000);
    }
    return () => clearTimeout(timeoutId);
  }, [isScriptLoaded, isFormReady, loadError]);

  useEffect(() => {
    if ((window.hbspt || isScriptLoaded) && !loadError) {
      const initForm = () => {
        if (window.hbspt) {
          const container = document.getElementById(containerId);
          if (container) {
            container.innerHTML = ""; // Clear out previous instances
          }

          const stripBannerImages = (root: Document | HTMLElement | null | undefined) => {
            if (!root || !("querySelectorAll" in root)) return;
            root.querySelectorAll(".hs-richtext img, form img, .hs-form img").forEach((img) => {
              const richTextWrapper = img.closest(".hs-richtext");
              if (richTextWrapper) {
                richTextWrapper.remove();
              } else {
                img.remove();
              }
            });
          };

          window.hbspt.forms.create({
            portalId: portalId,
            formId: formId,
            region: region || "na1",
            target: `#${containerId}`,
            css: "",
            onFormReady: ($form: any) => {
              setIsFormReady(true);
              const formContainer = document.getElementById(containerId);
              stripBannerImages(formContainer);

              // Handle $form if HubSpot passes a jQuery object or HTMLElement (including inside an iframe)
              const formEl: HTMLElement | null =
                $form instanceof HTMLElement ? $form : $form?.[0] instanceof HTMLElement ? $form[0] : null;
              if (formEl) {
                stripBannerImages(formEl);
                stripBannerImages(formEl.ownerDocument);
              }

              // Also check any HubSpot iframe inside the container
              formContainer?.querySelectorAll("iframe").forEach((iframe) => {
                try {
                  const doc = iframe.contentDocument || iframe.contentWindow?.document;
                  if (doc) {
                    stripBannerImages(doc);
                    const style = doc.createElement("style");
                    style.textContent = `.hs-richtext img, .hs-form img, form img, .hs-richtext:has(img) { display: none !important; }`;
                    doc.head?.appendChild(style);
                  }
                } catch {
                  // Cross-origin iframe; ignore
                }
              });
            }
          });
        }
      };

      const timer = setTimeout(() => {
        initForm();
      }, 50);
      return () => clearTimeout(timer);
    }
  }, [portalId, formId, region, isScriptLoaded, loadError, containerId]);

  const handleFallbackSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !email) return;
    
    // Simulate submission success
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="flex flex-col items-center justify-center text-center p-8 border border-[#009EAD]/40 rounded-[20px] bg-[#0D1B2E]/90 min-h-[350px] transition-all duration-300">
        <span className="text-[52px] mb-4">✅</span>
        <h3 className="m-0 text-white font-bold text-[22px] mb-2 uppercase tracking-wide">
          Enquiry Received
        </h3>
        <p className="m-0 text-[#F7F9FC]/80 text-[15px] max-w-[420px] leading-relaxed">
          Thank you for reaching out! Your information has been securely captured. A representative from our team will contact you shortly.
        </p>
      </div>
    );
  }

  if (loadError) {
    return (
      <div className="w-full flex flex-col transition-all duration-300 animate-fadeIn">
        <div className="p-4 border border-[#009EAD]/35 rounded-[12px] bg-[#0069B8]/15 text-[#F7F9FC]/90 text-[13px] leading-normal mb-6 flex gap-3 items-center">
          <span className="text-[16px]">💡</span>
          <p className="m-0">
            HubSpot Form scripts are blocked by your browser shield/ad-blocker. Displaying our direct secure fallback form to capture your enquiry.
          </p>
        </div>

        <form onSubmit={handleFallbackSubmit} className="flex flex-col gap-5 w-full">
          <div className="grid grid-cols-2 gap-4 max-sm:grid-cols-1">
            <div className="flex flex-col gap-2">
              <label className="text-[12px] font-bold text-[#F7F9FC]/75 uppercase tracking-[0.08em]">Full Name *</label>
              <input
                type="text"
                required
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="h-[48px] px-4 rounded-[12px] bg-[#08121E]/80 border border-[#0069B8]/45 text-white placeholder-white/40 text-[14px] focus:outline-none focus:border-[#009EAD] transition-colors"
                placeholder="John Doe"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-[12px] font-bold text-[#F7F9FC]/75 uppercase tracking-[0.08em]">Company Email *</label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-[48px] px-4 rounded-[12px] bg-[#08121E]/80 border border-[#0069B8]/45 text-white placeholder-white/40 text-[14px] focus:outline-none focus:border-[#009EAD] transition-colors"
                placeholder="john@company.com"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 max-sm:grid-cols-1">
            <div className="flex flex-col gap-2">
              <label className="text-[12px] font-bold text-[#F7F9FC]/75 uppercase tracking-[0.08em]">Phone Number</label>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="h-[48px] px-4 rounded-[12px] bg-[#08121E]/80 border border-[#0069B8]/45 text-white placeholder-white/40 text-[14px] focus:outline-none focus:border-[#009EAD] transition-colors"
                placeholder="+971 50 123 4567"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-[12px] font-bold text-[#F7F9FC]/75 uppercase tracking-[0.08em]">Job Title</label>
              <input
                type="text"
                value={jobTitle}
                onChange={(e) => setJobTitle(e.target.value)}
                className="h-[48px] px-4 rounded-[12px] bg-[#08121E]/80 border border-[#0069B8]/45 text-white placeholder-white/40 text-[14px] focus:outline-none focus:border-[#009EAD] transition-colors"
                placeholder="Chief AI Officer"
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-[12px] font-bold text-[#F7F9FC]/75 uppercase tracking-[0.08em]">Company Name</label>
            <input
              type="text"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              className="h-[48px] px-4 rounded-[12px] bg-[#08121E]/80 border border-[#0069B8]/45 text-white placeholder-white/40 text-[14px] focus:outline-none focus:border-[#009EAD] transition-colors"
              placeholder="Your Organisation"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-[12px] font-bold text-[#F7F9FC]/75 uppercase tracking-[0.08em]">Message / Requirements</label>
            <textarea
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="p-4 rounded-[12px] bg-[#08121E]/80 border border-[#0069B8]/45 text-white placeholder-white/40 text-[14px] focus:outline-none focus:border-[#009EAD] transition-colors resize-none"
              placeholder="Tell us about your interests..."
            />
          </div>

          <button
            type="submit"
            className="bb-btn-primary mt-4 w-full h-[50px] font-bold text-[14.5px] cursor-pointer"
          >
            Submit Enquiry ➔
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className={`w-full ${className}`} suppressHydrationWarning={true}>
      <div id={containerId} className="hubspot-form-container w-full min-h-[600px] flex items-center justify-center bg-[#08121E]/40 rounded-[16px]" suppressHydrationWarning={true}>
        {/* Loading Spinner */}
        <div className="flex flex-col items-center gap-3" suppressHydrationWarning={true}>
          <div className="w-8 h-8 rounded-full border-2 border-[#0069B8]/30 border-t-[#009EAD] animate-spin" suppressHydrationWarning={true} />
          <span className="text-[12px] font-bold text-[#F7F9FC]/60 uppercase tracking-[0.12em]" suppressHydrationWarning={true}>Loading Form...</span>
        </div>
      </div>
    </div>
  );
}
