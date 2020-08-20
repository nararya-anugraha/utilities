import React from "react";
import { bool, func, node } from "prop-types";

import globalStyle from "@styles/globalStyle";
import globalMobileStyle from "@styles/globalMobileStyle";
import globalDesktopStyle from "@styles/globalDesktopStyle";
import useAdaptiveSize from "@hooks/useAdaptiveSize";

const Adaptive = ({ Mobile, Desktop, ...props }) => {
  const { mobile } = useAdaptiveSize();
  const adaptiveStyle = mobile ? globalMobileStyle : globalDesktopStyle;
  const Component = mobile ? Mobile : Desktop;

  return (
    <div css={[globalStyle, adaptiveStyle]}>
      <Component {...props} />
    </div>
  );
};

Adaptive.propTypes = {
  children: node,
  Desktop: func,
  mobile: bool,
  Mobile: func,
};

export default Adaptive;
