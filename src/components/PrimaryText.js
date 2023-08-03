// https://stackoverflow.com/questions/35255645/how-to-set-default-font-family-in-react-native
import { StyleSheet, Text, View, useColorScheme, useWindowDimensions, Dimensions } from 'react-native'
import React from 'react'
import RenderHtml from 'react-native-render-html';

// import { theme } from '../constants'
// import {decode} from 'html-entities';
//---------Dark text on light background------
const PrimaryText = ({ value, style, bold, regular, semiBold, color, size, children }) => {
    const { width } = useWindowDimensions();

    const tval = (typeof children === 'string' || children instanceof String) ? children : ''+children;
    
    return (
        <View 
        // style={{flex:1, padding:20}}
        >
            <RenderHtml 
             source={{ html: `<p style="color: #000000"><span style="color: ${color}">${tval} </span> </p>` }}
            //  source={{ html:tval }}
             contentWidth={width}
             enableExperimentalMarginCollapsing={true}
            />

        </View>
        // <Text style={[style,bold && {fontWeight: theme.FONTS.Mulish_700Bold},semiBold && {fontWeight:theme.FONTS.Mulish_600SemiBold},regular && {fontWeight: theme.FONTS.Mulish_400Regular}, color && { color: color }, size && { fontSize: size, lineHeight: size*1.3 }]}>{handleHtml(tval)}</Text>
        // <Text style={[style,bold && {fontWeight: theme.FONTS.Mulish_700Bold},semiBold && {fontWeight:theme.FONTS.Mulish_600SemiBold},regular && {fontWeight: theme.FONTS.Mulish_400Regular}, color && { color: color }, size && { fontSize: size, lineHeight: size*1.3 }]}>{decode(tval, {level: 'all'})}</Text>
    )
}

export default PrimaryText



	// return <Text {...props} style={[{fontFamily: boldFontFamily,color: colors.heavyText}, props.style]}>{decode(tval, {level: 'all'})}</Text>

