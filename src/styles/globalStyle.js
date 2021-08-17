import { css } from "@emotion/core";
import { N400, N700 } from "unify-token/build/v2/colors";

const sizes = [1, 2, 3, 4, 6, 8, 12, 16, 24, 32, 46, 64];

const spaces = sizes.reduce((accumulator, size) => {
  const marginBottom = size;
  const marginLeft = size;
  const marginRight = size;
  const marginTop = size;

  const paddingBottom = size;
  const paddingLeft = size;
  const paddingRight = size;
  const paddingTop = size;

  return {
    ...accumulator,
    [`.m${size}`]: { marginTop, marginRight, marginBottom, marginLeft },
    [`.mx${size}`]: { marginRight, marginLeft },
    [`.my${size}`]: { marginTop, marginBottom },

    [`.mr${size}`]: { marginRight },
    [`.ml${size}`]: { marginLeft },
    [`.mt${size}`]: { marginTop, marginBottom },
    [`.mb${size}`]: { marginTop, marginBottom },

    [`.p${size}`]: { paddingTop, paddingRight, paddingBottom, paddingLeft },
    [`.px${size}`]: { paddingRight, paddingLeft },
    [`.py${size}`]: { paddingTop, paddingBottom },

    [`.pr${size}`]: { paddingRight },
    [`.pl${size}`]: { paddingLeft },
    [`.pt${size}`]: { paddingTop, paddingBottom },
    [`.pb${size}`]: { paddingTop, paddingBottom },
  };
}, {});

const utilities = {
  ...spaces,
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
