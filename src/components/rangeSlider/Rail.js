import React, { memo } from 'react';
import { View, StyleSheet } from 'react-native';
import { theme } from '../../constants';

const Rail = () => {
    return (
        <View style={styles.root} />
    );
};

export default memo(Rail);

const styles = StyleSheet.create({
    root: {
        flex: 1,
        height:2,
        borderRadius: 2,
       //  backgroundColor: 'rgba(20, 0, 35, 0.1)',
         backgroundColor: theme.COLORS.appColor,
        
    },
});