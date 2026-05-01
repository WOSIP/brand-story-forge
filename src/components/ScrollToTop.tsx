// import { useEffect } from "react";
// import { useLocation } from "react-router-dom";

// const sectionPaths = ["/services", "/global-reach", "/pricing", "/results", "/registration"];

// export default function ScrollToTop() {
//   const { pathname, hash } = useLocation();

//   const location = useLocation();

//   useEffect(() => {
//     if (sectionPaths.includes(location.pathname)) return;
//     window.scrollTo({ top: 0, behavior: "instant" });
//   }, [location.pathname]);

//   useEffect(() => {
//     // If there's a hash and we're on the homepage, the smooth scroll logic in App.tsx handles it.
//     // Otherwise, scroll to top on page change.
//     if (!hash) {
//       window.scrollTo(0, 0);
//     } else if (pathname === "/") {
//       // If we just arrived at home with a hash, let's wait a bit for components to mount then scroll
//       setTimeout(() => {
//         const element = document.querySelector(hash);
//         if (element) {
//           const offset = 80;
//           const bodyRect = document.body.getBoundingClientRect().top;
//           const elementRect = element.getBoundingClientRect().top;
//           const elementPosition = elementRect - bodyRect;
//           const offsetPosition = elementPosition - offset;
//           window.scrollTo({
//             top: offsetPosition,
//             behavior: "smooth",
//           });
//         }
//       }, 100);
//     }
//   }, [pathname, hash]);

//   return null;
// }

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const sectionPaths = ["/services", "/global-reach", "/pricing", "/results", "/registration"];

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    if (sectionPaths.includes(pathname)) return;
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);

  return null;
}
