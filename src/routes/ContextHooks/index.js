import { lazy } from "react";
import { ROUTE_PATH } from "@constants/url";

export default {
  path: ROUTE_PATH.CONTEXT_HOOKS,
  Component: lazy(() => import("./ContextHooks")),
};
