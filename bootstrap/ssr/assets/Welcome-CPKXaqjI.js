import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { Head } from "@inertiajs/react";
function Welcome() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Welcome" }),
    /* @__PURE__ */ jsxs("div", { className: "relative min-h-screen bg-gray-50 text-gray-900 selection:bg-[#FF2D20] selection:text-white dark:bg-gray-950 dark:text-white", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 -z-10 h-full w-full bg-white dark:bg-gray-950 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] dark:bg-[radial-gradient(#1f2937_1px,transparent_1px)]" }),
      /* @__PURE__ */ jsxs("div", { className: "relative flex min-h-screen flex-col items-center justify-center p-6 lg:p-8", children: [
        /* @__PURE__ */ jsxs("div", { className: "mb-8 flex items-center gap-2 rounded-full bg-orange-100 px-4 py-1.5 text-sm font-medium text-orange-600 dark:bg-orange-900/30 dark:text-orange-400 border border-orange-200 dark:border-orange-800", children: [
          /* @__PURE__ */ jsxs("span", { className: "relative flex h-2 w-2", children: [
            /* @__PURE__ */ jsx("span", { className: "animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75" }),
            /* @__PURE__ */ jsx("span", { className: "relative inline-flex rounded-full h-2 w-2 bg-orange-500" })
          ] }),
          "SSR Enabled & Ready"
        ] }),
        /* @__PURE__ */ jsxs("main", { className: "text-center max-w-4xl mx-auto", children: [
          /* @__PURE__ */ jsx("h1", { className: "text-5xl font-extrabold tracking-tight sm:text-7xl mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 dark:from-white dark:via-gray-200 dark:to-gray-400", children: "Starter Kit" }),
          /* @__PURE__ */ jsxs("p", { className: "mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed", children: [
            "A production-ready ",
            /* @__PURE__ */ jsx("strong", { className: "text-gray-900 dark:text-white", children: "Laravel 12" }),
            " boilerplate featuring a ",
            /* @__PURE__ */ jsx("strong", { className: "text-orange-600 dark:text-orange-500", children: "Filament" }),
            " admin panel and a SEO-friendly ",
            /* @__PURE__ */ jsx("strong", { className: "text-[#61DAFB]", children: "React" }),
            " frontend via Inertia.js with ",
            /* @__PURE__ */ jsx("span", { className: "underline decoration-dotted decoration-gray-400 underline-offset-4", children: "SSR pre-configured" }),
            "."
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "mt-10 flex flex-col sm:flex-row items-center justify-center gap-4", children: [
            /* @__PURE__ */ jsx(
              "a",
              {
                href: "/admin",
                className: "w-full sm:w-auto rounded-lg bg-[#FF2D20] px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-[#e0261a] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FF2D20] transition-all",
                children: "Access Admin Panel"
              }
            ),
            /* @__PURE__ */ jsx(
              "a",
              {
                href: "https://github.com/lucasnjsilva/laravel-filament-react-ssr-starter",
                target: "_blank",
                rel: "noopener noreferrer",
                className: "w-full sm:w-auto rounded-lg bg-white dark:bg-gray-800 px-6 py-3 text-sm font-semibold text-gray-900 dark:text-white shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-all",
                children: "View Documentation"
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "mt-16 grid grid-cols-2 gap-8 text-center md:grid-cols-4 lg:gap-12 opacity-70", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center gap-2", children: [
            /* @__PURE__ */ jsx("span", { className: "text-sm font-semibold text-gray-500 dark:text-gray-400", children: "Backend" }),
            /* @__PURE__ */ jsx("span", { className: "text-lg font-bold", children: "Laravel 12" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center gap-2", children: [
            /* @__PURE__ */ jsx("span", { className: "text-sm font-semibold text-gray-500 dark:text-gray-400", children: "Admin" }),
            /* @__PURE__ */ jsx("span", { className: "text-lg font-bold text-orange-600 dark:text-orange-500", children: "Filament" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center gap-2", children: [
            /* @__PURE__ */ jsx("span", { className: "text-sm font-semibold text-gray-500 dark:text-gray-400", children: "Frontend" }),
            /* @__PURE__ */ jsx("span", { className: "text-lg font-bold text-[#61DAFB]", children: "React + Inertia" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center gap-2", children: [
            /* @__PURE__ */ jsx("span", { className: "text-sm font-semibold text-gray-500 dark:text-gray-400", children: "Rendering" }),
            /* @__PURE__ */ jsx("span", { className: "text-lg font-bold text-green-600 dark:text-green-500", children: "SSR Mode" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("footer", { className: "absolute bottom-4 text-xs text-gray-400", children: [
          "Laravel v",
          12,
          " (Beta) • PHP v",
          8.4
        ] })
      ] })
    ] })
  ] });
}
export {
  Welcome as default
};
