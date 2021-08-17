import { lazy } from "react";
import { ROUTE_PATH } from "@constants/url";

export default {
  exact: true,
  path: ROUTE_PATH.CANVAS_DEMO,
  Component: lazy(() => import("./CanvasDemo")),
};
