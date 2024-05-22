export const handleScroll = (href: string) => {
  const element = document.querySelector(href);
  const elementPosition =
    element && element.getBoundingClientRect().top + window.scrollY;
  const offsetPosition = elementPosition && elementPosition - 70;
  href === "#home"
    ? window.scrollTo({ top: 0, behavior: "smooth" })
    : window.scrollTo({ top: offsetPosition ?? 0, behavior: "smooth" });
};
