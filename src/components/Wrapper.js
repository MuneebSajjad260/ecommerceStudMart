import React from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { theme } from "../constants/theme";

const Wrapper = ({ style, children, hideShadow, isPressable, ...rest }) => {
  const wrapperStyles = [
    styles().wrapper,
    !hideShadow ? styles().shadow : styles().darkWrapper,
    style,
  ];

  // Conditionally hide shadow based on hideShadow prop
  if (hideShadow) {
    wrapperStyles.splice(1, 1);
  }

  if (isPressable) {
    return (
      <TouchableOpacity style={wrapperStyles} {...rest}>
        {children}
      </TouchableOpacity>
    );
  }

  return (
    <View style={wrapperStyles} {...rest}>
      {children}
    </View>
  );
};

Wrapper.propTypes = {
  children: PropTypes.node.isRequired,
  hideShadow: PropTypes.bool,
  isPressable: PropTypes.bool,
};

Wrapper.defaultProps = {
  hideShadow: false,
  isPressable: false,
};

export const styles = () => {
  let style = {
    shadow: {
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 3,
      },
      shadowOpacity: 0.27,
      shadowRadius: 4.65,
      elevation: 6,
    },
    wrapper: {
      padding: theme.MARGINS.hy10,
      borderRadius: 8,
      backgroundColor: theme.COLORS.whiteOnly,
    },
    darkWrapper: {
      shadowColor: 'transparent',
    },
  };

  return StyleSheet.create(style);
};

export default Wrapper;

//* Documentation
/**
Wrapper is a custom component that provides a container with a
shadow effect, padding, and a background color.
@param {object} props - The component props.
@param {object} [props.style] - The style object to apply to the wrapper.
@param {node} props.children - The content to render inside the wrapper.
@param {boolean} [props.hideShadow=false] - Whether to hide the shadow effect.
@param {boolean} [props.isPressable=false] - Whether the wrapper should be pressable.
@return {JSX.Element} - A View or TouchableOpacity component with
the appropriate styles and shadow effect.
*/
