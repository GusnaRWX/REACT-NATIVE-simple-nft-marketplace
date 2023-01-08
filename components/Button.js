import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native'
import { COLORS, SIZES, FONTS, SHADOWS } from '../constans'

export const CircleButton = ({ imgUrl, handlePress, ...props }) => {
    return (
        <TouchableOpacity style={styles(props).circleRoot} onPress={handlePress}>
            <Image source={imgUrl} resizeMode='contain' style={styles(props).circleImage} />
        </TouchableOpacity>
    )
}

export const RectButton = ({ ...props }) => {
    return (
        <TouchableOpacity style={styles(props).rectRoot} onPress={props.handlePress}>
            <Text style={styles(props).rectLabel}>Place a Bid</Text>
        </TouchableOpacity>
    )
}

const styles = (props) => StyleSheet.create({
    circleRoot: {
        width: 40,
        height: 40,
        backgroundColor: COLORS.white,
        position: 'absolute',
        borderRadius: SIZES.extraLarge,
        alignItems: 'center',
        justifyContent: 'center',
        ...SHADOWS.light,
        top: props.top,
        right: props.right,
        left: props.left
    },
    circleImage: {
        width: 24,
        height: 24
    },
    rectRoot: {
        backgroundColor: COLORS.primary,
        borderRadius: SIZES.extraLarge,
        minWidth: props.minWidth,
        padding: SIZES.small,
        ...SHADOWS.light
    },
    rectLabel: {
        fontFamily: FONTS.semiBold,
        fontSize: props.fontSize,
        color: COLORS.white,
        textAlign: 'center'
    }
})