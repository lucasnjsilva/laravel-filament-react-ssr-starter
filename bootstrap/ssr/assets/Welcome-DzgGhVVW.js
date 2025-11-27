import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { Head } from "@inertiajs/react";
function Welcome() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Welcome" }),
    /* @__PURE__ */ jsx("div", { className: "flex items-center justify-center min-h-screen bg-gray-100", children: /* @__PURE__ */ jsx("h1", { className: "text-4xl font-bold text-gray-900", children: "Welcome to Gravity" }) })
  ] });
}
export {
  Welcome as default
};
