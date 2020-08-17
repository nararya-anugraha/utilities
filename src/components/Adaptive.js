import React from "react";
import { bool, func, node } from "prop-types";

import globalMobileStyle from "@styles/globalMobile";
import globalDesktopStyle from "@styles/globalDesktopStyle";
import globalStyle from "@styles/globaStyle";
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
