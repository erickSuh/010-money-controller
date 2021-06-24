import React from 'react';
import {StyleSheet, Text, View, Animated, Image} from 'react-native';
import {RectButton, RectButtonProps} from 'react-native-gesture-handler';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import wasteBinImage from '../assets/waste-bin.png';
import {formatCurrency} from '../utils/number';

import colors from '../styles/colors';

export interface ItemBillingProps extends RectButtonProps {
  data: {
    id: number;
    description: string;
    value: number;
  };
  handleRemove: () => void;
}

export const ItemBilling = ({
  data,
  handleRemove,
  ...rest
}: ItemBillingProps) => {
  return (
    <Swipeable
      overshootRight={false}
      renderRightActions={() => (
        <Animated.View>
          <View>
            <RectButton style={styles.buttonRemove} onPress={handleRemove}>
              <Image
                style={styles.bin}
                source={wasteBinImage}
                resizeMode="contain"
              />
            </RectButton>
          </View>
        </Animated.View>
      )}>
      <RectButton style={styles.container} {...rest}>
        <Text style={styles.title}>{data.description}</Text>
        <View style={styles.details}>
          <Text style={styles.valueLabel}>Valor</Text>
          <Text style={styles.value}>{formatCurrency(data.value)}</Text>
        </View>
      </RectButton>
    </Swipeable>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: 10,
    paddingVertical: 25,
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.shape,
    marginVertical: 5,
  },
  title: {
    flex: 1,
    marginLeft: 10,
    fontSize: 17,
    color: colors.heading,
  },
  details: {
    alignItems: 'flex-end',
  },
  valueLabel: {
    marginTop: 5,
    fontSize: 16,
    color: colors.body_light,
  },
  value: {
    marginTop: 5,
    fontSize: 16,
    color: colors.body_dark,
  },
  buttonRemove: {
    width: 100,
    height: 85,
    marginTop: 15,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    right: 20,
    paddingLeft: 15,
    backgroundColor: colors.red,
  },
  bin: {
    width: 30,
    height: 30,
  },
});
