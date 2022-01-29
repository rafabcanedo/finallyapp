import { Dimensions } from "react-native";

const { width, height } = Dimensions.get('window');

export const COLORS = {
    // home color
    accent: '#79c2d0',
    // navigation color
    purple: '#272343',

    black: '#181818',
    white: '#FFFFFF',
    //background:, 1:16
};

export const SIZES = {
    base: 10,
    width,
    height,
};