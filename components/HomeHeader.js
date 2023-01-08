import { View, Text, StyleSheet, Image, TextInput } from 'react-native'
import { COLORS, FONTS, SIZES, assets } from '../constans'

const HomeHeader = ({ onSearch }) => {
    return (
        <View style={styles.container}>
            <View style={styles.headerWrapper}>
                <Image
                    source={assets.logo}
                    resizeMode='contain'
                    style={styles.image}
                />
                <View style={styles.avatarWrapper}>
                    <Image
                        source={assets.person01}
                        resizeMode='contain'
                        style={styles.avatar}
                    />
                    <Image
                        source={assets.badge}
                        resizeMode='contain'
                        style={styles.badge}
                    />
                </View>
            </View>
            <View style={styles.greetingWrapper}>
                <Text style={styles.greeting}>
                    Hello, Gusna 👋
                </Text>
                <Text style={styles.label}>
                    Let's find a maseterpiece
                </Text>
            </View>
            <View style={styles.searchWrapper}>
                <View style={styles.inputWrapper}>
                    <Image
                        source={assets.search}
                        resizeMode='contain'
                        style={styles.searchImage}
                    />
                    <TextInput
                        placeholder='Search NFTs'
                        style={styles.input}
                        onChangeText={onSearch}
                    />
                </View>
            </View>
        </View>
    )
}

export default HomeHeader

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.primary,
        padding: SIZES.font
    },
    headerWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    image: {
        width: 90,
        height: 25
    },
    avatarWrapper: {
        width: 45,
        height: 45
    },
    avatar: {
        width: '100%',
        height: '100%'
    },
    badge: {
        position: 'absolute',
        width: 15,
        height: 15,
        bottom: 0,
        right: 0
    },
    greetingWrapper: {
        marginVertical: SIZES.font
    },
    greeting: {
        fontFamily: FONTS.regular,
        fontSize: SIZES.small,
        color: COLORS.white
    },
    label: {
        fontFamily: FONTS.bold,
        fontSize: SIZES.large,
        color: COLORS.white,
        marginTop: SIZES.base / 2
    },
    searchWrapper: {
        marginTop: SIZES.font
    },
    searchImage: {
        width: 20,
        height: 20,
        marginRight: SIZES.base
    },
    input: {
        flex: 1
    },
    inputWrapper: {
        width: '100%',
        borderRadius: SIZES.font,
        backgroundColor: COLORS.gray,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: SIZES.font,
        paddingVertical: SIZES.small - 2
    }
})