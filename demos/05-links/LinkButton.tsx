import { Link, useLinkProps } from "@react-navigation/native";
import React from "react";
import { Text, TouchableOpacity } from "react-native";

const LinkButton: typeof Link = ({ to, action, children, ...rest }) => {
  const { onPress, ...props } = useLinkProps({ to, action });

  return (
    <TouchableOpacity onPress={onPress} {...props} {...rest}>
      <Text style={{ color: "red" }}>{children}</Text>
    </TouchableOpacity>
  );
};

export default LinkButton;
