import React from "react";
import TextFieldDesktop from "unify-react-desktop/build/TextField";
import TextFieldMobile from "unify-react-mobile/build/TextField";
import { bool, func, number, string } from "prop-types";

import { useField } from "formik";
import useAdaptiveSize from "@hooks/useAdaptiveSize";

const TextFieldComponent = ({ desktop, mobile: mobileFromProps, ...props }) => {
  const { mobile: mobileFromHooks } = useAdaptiveSize();
  let mobile = false;
  if (desktop) {
    mobile = false;
  } else if (mobileFromProps) {
    mobile = true;
  } else {
    mobile = mobileFromHooks;
  }

  const AdaptiveTextField = mobile ? TextFieldMobile : TextFieldDesktop;
  return <AdaptiveTextField {...props} />;
};

TextFieldComponent.propTypes = {
  desktop: bool,
  mobile: bool,
};

const TextFieldWithFormik = ({
  name,
  onBlur: onBlurFromProps,
  message: messageFromProps,
  ...props
}) => {
  const [
    { onBlur: onBlurFromFormik, ...input },
    { error, touched },
  ] = useField({ name });

  const onBlur = (event) => {
    onBlurFromFormik(event);
    onBlurFromProps(input.value);
  };

  const message = error && touched ? error : messageFromProps;

  <TextFieldComponent
    {...props}
    {...input}
    {...{ message, onBlur }}
    error={error && touched}
  />;
};

TextFieldWithFormik.propTypes = {
  className: string,
  message: string,
  name: string,
  onBlur: func,
};

TextFieldWithFormik.defaultProps = {
  message: "",
  onBlur: () => {},
};

const TextField = ({ name, ...props }) => {
  if (name) {
    return <TextFieldWithFormik {...{ name }} {...props} />;
  }
  return <TextFieldComponent {...props} />;
};

TextField.propTypes = {
  marginBottom: number,
  name: string,
};

export default TextField;
