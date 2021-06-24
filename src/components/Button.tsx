import React, {useMemo} from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';
import colors from '../styles/colors';

interface ButtonProps extends TouchableOpacityProps {
  label?: string;
}

export const Button = ({
  style,
  onPress,
  label,
  disabled,
  ...rest
}: ButtonProps) => {
  const customStyles = useMemo(() => {
    const innerStyles = [styles.button] as any;
    if (disabled) {
      innerStyles.push(styles.buttonDisabled);
    }
    if (style) {
      innerStyles.push(style);
    }
    return innerStyles;
  }, [style, disabled]);

  return (
    <TouchableOpacity
      style={customStyles}
      activeOpacity={disabled ? 1 : 0.7}
      onPress={onPress}
      {...rest}>
      <Text style={styles.buttonLabel}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.green,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16,
    marginBottom: 10,
    height: 56,
    paddingHorizontal: 20,
  },
  buttonLabel: {
    color: colors.heading,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  buttonDisabled: {
    backgroundColor: colors.gray,
  },
});
