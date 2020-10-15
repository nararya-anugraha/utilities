import { css } from "@emotion/core";
import { N400, N700 } from "unify-token/build/v2/colors";

const utilities = {
  ".flex": {
    display: "flex",
    alignItems: "center",
    "&.items-": {
      "&start": {
        alignItems: "flex-start",
      },
    },
    "&.justify-": {
      "&between": {
        justifyContent: "space-between",
      },
      "&around": {
        justifyContent: "space-around",
      },
    },
  },
};

const globalStyle = css({
  fontFamily: "'Roboto Mono', monospace",
  color: N400,
  "p,h1,h2,h3,h4,h5": {
    margin: 0,
  },
  h1: {
    color: N700,
  },
  ...utilities,
});

export default globalStyle;
