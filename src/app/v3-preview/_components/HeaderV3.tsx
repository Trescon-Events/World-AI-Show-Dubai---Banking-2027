"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { LogoV3, V3_BASE } from "./SharedV3";

const navItems = ["Home", "Attend", "Agenda", "Speakers", "Partner", "Networking"];

const subMenus: Record<string, string[]> = {
  Attend: ["Overview", "Delegate", "Sponsor", "Media Partner", "Association Partner"],
  Agenda: ["Overview", "The Vision", "Agenda", "Themes", "Call for Speakers"],
  Networking: ["Overview", "Attendee APP", "AI Matchmaking", "Photo Gallery"],
};

function stripPreviewPrefix(pathname: string): string {
  let clean = pathname;
  if (clean.startsWith("/banking")) {
    clean = clean.slice("/banking".length);
  }
  if (clean.startsWith("/v3-preview")) {
    clean = clean.slice("/v3-preview".length);
  }
  return clean;
}

function getNavHref(item: string) {
  if (item === "Home") return `${V3_BASE}/`;
  if (item === "Attend") return `${V3_BASE}/attend/`;
  if (item === "Agenda") return `${V3_BASE}/agenda/`;
  if (item === "Speakers") return `${V3_BASE}/speakers/`;
  if (item === "Partner") return `${V3_BASE}/partners/`;
  if (item === "Exhibition") return `${V3_BASE}/exhibition/`;
  if (item === "Networking") return `${V3_BASE}/networking/`;
  return `${V3_BASE}/#${item.toLowerCase()}`;
}

type HeaderProps = {
  activeItem?: string;
  subNavItems?: string[];
  activeSubNavItem?: string;
};

function getActiveFromPath(pathname: string): string {
  const cleanPath = stripPreviewPrefix(pathname);

  if (cleanPath === "" || cleanPath === "/" || cleanPath === "/home") return "Home";
  if (cleanPath.startsWith("/attend")) return "Attend";
  if (cleanPath.startsWith("/agenda")) return "Agenda";
  if (cleanPath.startsWith("/speakers") || cleanPath.startsWith("/speaker-enquiry")) return "Speakers";
  if (
    cleanPath.startsWith("/partners") ||
    cleanPath.startsWith("/sponsorship-enquiry") ||
    cleanPath.startsWith("/association-enquiry")
  ) return "Partner";
  if (cleanPath.startsWith("/exhibition")) return "Exhibition";
  if (cleanPath.startsWith("/networking")) return "Networking";
  return "Home";
}

function getSubNavItemFromPath(pathname: string): string {
  const cleanPath = stripPreviewPrefix(pathname);

  if (cleanPath.startsWith("/attend/delegate")) return "Delegate";
  if (cleanPath.startsWith("/attend/sponsor")) return "Sponsor";
  if (cleanPath.startsWith("/attend/media-partner")) return "Media Partner";
  if (cleanPath.startsWith("/attend/association-partner")) return "Association Partner";
  if (cleanPath === "/attend" || cleanPath === "/attend/") return "Overview";

  if (cleanPath.startsWith("/agenda/the-2030-vision")) return "The Vision";
  if (cleanPath.startsWith("/agenda/themes")) return "Themes";
  if (cleanPath.startsWith("/agenda/call-for-speakers")) return "Call for Speakers";
  if (cleanPath.startsWith("/agenda/agenda")) return "Agenda";
  if (cleanPath.startsWith("/agenda")) return "Overview";

  if (cleanPath.startsWith("/networking/attendee-app")) return "Attendee APP";
  if (cleanPath.startsWith("/networking/ai-matchmaking")) return "AI Matchmaking";
  if (cleanPath.startsWith("/networking/photo-gallery")) return "Photo Gallery";
  if (cleanPath.startsWith("/networking")) return "Overview";
  return "";
}

export function HeaderV3({ activeItem, subNavItems, activeSubNavItem }: HeaderProps) {
  const pathname = usePathname();
  const currentActiveItem = activeItem || getActiveFromPath(pathname);
  const currentSubNavItem = activeSubNavItem || getSubNavItemFromPath(pathname);

  const [isOpen, setIsOpen] = useState(false);
  const [expandedMobileItem, setExpandedMobileItem] = useState<string | null>(null);
  const [currentHash, setCurrentHash] = useState(() =>
    typeof window !== "undefined" ? window.location.hash : ""
  );

  useEffect(() => {
    if (subMenus[currentActiveItem]) {
      setExpandedMobileItem(currentActiveItem);
    } else {
      setExpandedMobileItem(null);
    }
  }, [currentActiveItem]);

  function getSubNavHref(parentItem: string, subItem: string) {
    if (parentItem === "Networking" || parentItem === "Attend" || parentItem === "Agenda") {
      const parentPath =
        parentItem === "Networking"
          ? `${V3_BASE}/networking`
          : `${V3_BASE}/${parentItem.toLowerCase()}`;
      if (subItem === "Overview") return `${parentPath}/`;
      if (parentItem === "Agenda" && subItem === "The Vision") {
        return `${V3_BASE}/agenda/the-2030-vision/`;
      }
      return `${parentPath}/${subItem.toLowerCase().replaceAll(" ", "-")}/`;
    }
    const parentPath =
      parentItem === "Home" ? `${V3_BASE}/` : `${V3_BASE}/${parentItem.toLowerCase()}/`;
    const hash = subItem.toLowerCase().replaceAll(" ", "-");
    if (parentItem === "Partner") {
      if (hash === "overview") return `${V3_BASE}/partners/`;
      return `${V3_BASE}/partners/#sponsors`;
    }
    return `${parentPath}#${hash}`;
  }

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleHashChange = () => setCurrentHash(window.location.hash);
      window.addEventListener("hashchange", handleHashChange);
      return () => window.removeEventListener("hashchange", handleHashChange);
    }
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const filteredSubNavItems = subNavItems ? subNavItems.filter((item) => item !== "Agenda") : [];
  const hasPersistentSubnav = filteredSubNavItems.length > 0;

  return (
    <>
      <div
        className={`fixed inset-0 bg-[#08121E]/60 backdrop-blur-sm z-20 transition-opacity duration-300 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsOpen(false)}
      />

      <header className="group fixed top-5 left-0 right-0 z-30 w-full px-6 max-sm:top-2.5 max-sm:px-3">
        <nav
          className="relative grid grid-cols-[176px_1fr_auto] items-center gap-[16px] max-w-[1172px] w-full h-[82px] mx-auto px-[22px] pl-[25px] border border-[#0069B8]/22 rounded-[34px] bg-[#F7F9FC]/96 shadow-[0_12px_32px_rgba(8,18,30,0.14)] backdrop-blur-[18px] max-[1200px]:grid-cols-[auto_1fr_auto] max-[1200px]:h-auto max-[1200px]:min-h-[82px] max-sm:grid-cols-[1fr_auto_auto] max-sm:py-2 max-sm:px-2.5 max-sm:pl-[18px] max-sm:rounded-[26px]"
          aria-label="Primary navigation"
        >
          <LogoV3 variant="dark" />

          {/* Desktop Navigation Links */}
          <div className="flex justify-end gap-[25px] text-[15px] font-semibold tracking-[0.8px] uppercase text-[#08121E] max-[1200px]:hidden h-full items-center">
            {navItems.map((item) => {
              const isActive = item === getActiveFromPath(pathname) || item === activeItem;
              return (
                <div
                  key={item}
                  className="relative py-4 flex items-center cursor-pointer h-full"
                >
                  <a
                    href={getNavHref(item)}
                    className={`transition-colors duration-200 hover:text-[#0069B8] ${
                      isActive ? "text-[#F15928] font-bold" : "text-[#08121E]"
                    }`}
                  >
                    {item}
                  </a>
                  {isActive && (
                    <span className="absolute bottom-[2px] left-0 right-0 h-[2px] bg-[#F15928] rounded-full" />
                  )}
                </div>
              );
            })}
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-[25px] whitespace-nowrap text-[14px] font-bold tracking-[0.8px] uppercase max-[1200px]:justify-end max-[1200px]:mr-2 ml-2">
            <a
              className="bb-btn-primary px-[23px] py-[14px] max-sm:px-3.5 max-sm:py-3 uppercase font-bold text-[13.5px] tracking-[0.8px]"
              href={`${V3_BASE}/sponsorship-enquiry/`}
            >
              Enquire Now
            </a>
          </div>

          {/* Mobile Hamburger Toggle Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="hidden max-[1200px]:flex flex-col justify-center items-center w-10 h-10 rounded-full border border-[#0069B8]/25 hover:border-[#0069B8] bg-white text-[#08121E] transition-all duration-200 outline-none cursor-pointer shadow-sm"
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
          >
            <div className="relative w-4 h-3.5 flex flex-col justify-between">
              <span
                className={`w-full h-0.5 bg-[#08121E] rounded-full transition-all duration-300 origin-left ${
                  isOpen ? "rotate-45 translate-x-[2px] translate-y-[-1px]" : ""
                }`}
              />
              <span
                className={`w-full h-0.5 bg-[#08121E] rounded-full transition-all duration-300 ${
                  isOpen ? "opacity-0 scale-0" : ""
                }`}
              />
              <span
                className={`w-full h-0.5 bg-[#08121E] rounded-full transition-all duration-300 origin-left ${
                  isOpen ? "-rotate-45 translate-x-[2px] translate-y-[1px]" : ""
                }`}
              />
            </div>
          </button>
        </nav>

        {/* Dropdown Sub-Nav */}
        <nav
          className={`absolute left-1/2 top-[82px] -translate-x-1/2 flex justify-around w-[calc(100%-48px)] max-w-[1008px] h-[41px] px-[34px] items-center rounded-b-[24px] border border-t-0 border-[#0069B8]/20 text-[#334155] bg-[#F7F9FC]/96 backdrop-blur-md shadow-[0_12px_28px_rgba(8,18,30,0.12)] text-[12px] font-semibold tracking-[1.2px] uppercase transition-all duration-300 ease-out max-[1200px]:hidden ${
            currentActiveItem && subMenus[currentActiveItem]
              ? "opacity-100 translate-y-0 pointer-events-auto visible"
              : "opacity-0 -translate-y-2 pointer-events-none invisible"
          }`}
        >
          {currentActiveItem &&
            subMenus[currentActiveItem]?.map((item) => {
              const isSubActive = item.toLowerCase() === currentSubNavItem.toLowerCase();
              return (
                <a
                  href={getSubNavHref(currentActiveItem, item)}
                  key={item}
                  className={`transition-all duration-200 pb-1 border-b-2 ${
                    isSubActive
                      ? "text-[#0069B8] font-bold border-[#0069B8]"
                      : "border-transparent text-[#52657A] hover:border-[#0069B8]/50 hover:text-[#0069B8]"
                  }`}
                >
                  {item}
                </a>
              );
            })}
        </nav>

        {/* Mobile Slide-Down Menu Overlay */}
        <div
          className={`absolute top-[75px] left-6 right-6 overflow-hidden border border-[#0069B8]/22 rounded-[24px] bg-[#F7F9FC]/98 shadow-[0_22px_62px_rgba(8,18,30,0.2)] backdrop-blur-[24px] transition-all duration-300 ease-out max-sm:left-3 max-sm:right-3 ${
            isOpen
              ? "opacity-100 max-h-[520px] translate-y-0 visible"
              : "opacity-0 max-h-0 -translate-y-4 invisible pointer-events-none"
          }`}
        >
          <div className="flex flex-col p-6 gap-6 overflow-y-auto max-h-[420px]">
            <div className="flex flex-col gap-4 text-base font-medium">
              {navItems.map((item) => {
                const hasSubMenu = Boolean(subMenus[item]);
                const isExpanded = expandedMobileItem === item;

                return (
                  <div
                    key={item}
                    className="flex flex-col border-b border-[#0069B8]/15 pb-2 last:border-0 last:pb-0"
                  >
                    <div className="flex items-center justify-between py-1">
                      <a
                        href={getNavHref(item)}
                        onClick={() => setIsOpen(false)}
                        className={`hover:text-[#0069B8] transition-all duration-200 uppercase tracking-[0.8px] font-bold ${
                          item === currentActiveItem ? "text-[#F15928]" : "text-[#08121E]"
                        }`}
                      >
                        {item}
                      </a>
                      {hasSubMenu && (
                        <button
                          onClick={() => setExpandedMobileItem(isExpanded ? null : item)}
                          className="flex items-center justify-center w-8 h-8 rounded-full border border-[#0069B8]/25 bg-white text-[#08121E] hover:text-[#0069B8] hover:border-[#0069B8] transition-all cursor-pointer outline-none"
                          aria-label={`Toggle ${item} sub-menu`}
                        >
                          <span className="transform transition-transform duration-300 font-bold text-[16px]">
                            {isExpanded ? "−" : "+"}
                          </span>
                        </button>
                      )}
                    </div>

                    {hasSubMenu && (
                      <div
                        className={`overflow-hidden transition-all duration-300 ease-in-out pl-4 flex flex-col gap-2.5 ${
                          isExpanded
                            ? "max-h-[320px] opacity-100 mt-2 pb-2"
                            : "max-h-0 opacity-0 pointer-events-none"
                        }`}
                      >
                        {subMenus[item].map((subItem) => {
                          const isSubActive =
                            item === currentActiveItem &&
                            subItem.toLowerCase() === currentSubNavItem.toLowerCase();
                          return (
                            <a
                              key={subItem}
                              href={getSubNavHref(item, subItem)}
                              onClick={() => setIsOpen(false)}
                              className={`text-[14px] py-1 border-l-2 pl-3 transition-colors ${
                                isSubActive
                                  ? "text-[#0069B8] font-bold border-[#0069B8]"
                                  : "text-[#52657A] border-[#0069B8]/20 hover:text-[#0069B8]"
                              }`}
                            >
                              {subItem}
                            </a>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {hasPersistentSubnav && (
              <div className="flex flex-col gap-2 border-t border-[#0069B8]/15 pt-4">
                <p className="text-[11px] text-[#52657A] font-bold uppercase tracking-[0.12em] mb-1">
                  Jump to
                </p>
                {filteredSubNavItems.map((item) => {
                  const isSubActive =
                    item.toLowerCase() === currentSubNavItem.toLowerCase() ||
                    (activeSubNavItem &&
                      item.toLowerCase() === activeSubNavItem.toLowerCase()) ||
                    (currentHash &&
                      currentHash.slice(1).toLowerCase() ===
                        item.toLowerCase().replaceAll(" ", "-"));
                  return (
                    <a
                      key={item}
                      href={getSubNavHref(currentActiveItem ?? "", item)}
                      onClick={() => setIsOpen(false)}
                      className={`text-[13px] font-semibold transition-colors hover:text-[#0069B8] ${
                        isSubActive ? "text-[#0069B8]" : "text-[#334155]"
                      }`}
                    >
                      {item}
                    </a>
                  );
                })}
              </div>
            )}

            <div className="flex flex-col gap-3 mt-2 sm:hidden">
              <a
                href={`${V3_BASE}/sponsorship-enquiry/`}
                onClick={() => setIsOpen(false)}
                className="bb-btn-primary text-[14px] font-bold py-3 text-center"
              >
                Enquire Now
              </a>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
