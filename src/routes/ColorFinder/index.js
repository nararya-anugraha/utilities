import { lazy } from "react";
import { ROUTE_PATH } from "@constants/url";

export default {
  path: ROUTE_PATH.COLOR_FINDER,
  Component: lazy(() => import("./ColorFinder")),
};
