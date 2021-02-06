import {Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

export const COLORS = {
    //base colors
    primary: "#5390ff",
    secondary: "#cacfd9",

    //colors
    balck: "#1E1F20",
    white: '#FFFFFF',
    lightGray: '#eff2f5',
    gray: '#8b9097'
}

export const SIZES = {
    //global sizes
    base: 8,
    font: 14,
    radius: 12,
    padding: 24,

    // font sizes
    largeTitle:50,
    h1: 30,
    h2: 22,
    h3: 16,
    h4: 14,
    body1: 30,
    body2: 22,
    body3:16,
    body4: 14,

    //app dimensions
    width,
    height
}

export const FONTS = {
    largeTitle: {fontFamily:"Roboto-Balck", fontSize: SIZES.largeTitle, lineHeight:3},
    h1: {fontFamily:"Roboto-Balck", fontSize: SIZES.h1 ,lineHeight:36 },
    h2: {fontFamily:"Roboto-Bold", fontSize: SIZES.h2, lineHeight:30},
    h3: {fontFamily:"Roboto-Bold", fontSize: SIZES.h3, lineHeight:22},
    h4: {fontFamily:"Roboto-Bold", fontSize: SIZES.h4, lineHeight:22},
    body1: {fontFamily:"Roboto-Bold", fontSize: SIZES.body1, lineHeight:36},
    bofy2: {fontFamily:"Roboto-Bold", fontSize: SIZES.bofy2, lineHeight:30},
    bofy3: {fontFamily:"Roboto-Bold", fontSize: SIZES.bofy3, lineHeight:22},
    bofy4: {fontFamily:"Roboto-Bold", fontSize: SIZES.bofy4, lineHeight:22},
}


const appTheme = {COLORS, SIZES, FONTS}

export default appTheme;