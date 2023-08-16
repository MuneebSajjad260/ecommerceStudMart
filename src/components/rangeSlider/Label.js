import React, { memo } from 'react';
import { View, Text, StyleSheet } from 'react-native';
// import { AppTheme } from '../../theme';
import { theme } from '../../constants';

import { useSelector, useDispatch } from 'react-redux';



const Label = ({ text, ...restProps }) => {


    return (
        <View style={styles.root} {...restProps}>
            <Text style={[styles.text, { color:  theme.COLORS.black }]}>{text}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    root: {
        // alignItems: 'center',
        padding: 4,
        //borderRadius: 4,
    },
    text: {

      ...theme.FONTS.H10,
        color: '#FFFFFF',

    },
});
export default memo(Label);