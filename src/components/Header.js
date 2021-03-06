import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import PropTypes from 'prop-types';
import { colors, device, fonts, images } from '../api/constants';

const Header = props => {
  const { bg, close, navigation, showLogoFull, title } = props;

  return (
    <View style={[styles.container, { backgroundColor: bg }]}>
      {title && (
        <View style={styles.containerTitle}>
          <Text style={styles.title}>{title}</Text>
        </View>
      )}

      {showLogoFull && (
        <React.Fragment>
          <View style={{ flex: 1 }} />
          <View style={styles.containerLogoFull}>
            <Image source={images.netflixFull} style={styles.logoFull} />
          </View>
        </React.Fragment>
      )}

      {close && (
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => navigation.goBack(null)}
          style={styles.close}
        >
          <Text style={styles.closeText}>Cancel</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

Header.defaultProps = {
  bg: colors.black,
  close: false,
  showLogoFull: false,
  title: null
};

Header.propTypes = {
  // required
  navigation: PropTypes.object.isRequired,

  // optional
  bg: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  close: PropTypes.bool,
  showLogoFull: PropTypes.bool,
  title: PropTypes.string
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-start',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 4,
    paddingHorizontal: 16,
    paddingTop: device.iPhoneX ? 54 : 30
  },
  containerLogoFull: {
    alignItems: 'center',
    flex: 2,
    height: 35,
    justifyContent: 'center'
  },
  logoFull: {
    height: 26,
    width: 95
  },
  containerTitle: {
    flex: 1,
    height: 35,
    justifyContent: 'flex-end'
  },
  title: {
    color: colors.heading,
    fontSize: 18,
    paddingBottom: 4,
    textAlign: 'center'
  },
  close: {
    alignItems: 'flex-end',
    flex: 1,
    justifyContent: 'center',
    height: 35
  },
  closeText: {
    color: colors.white,
    fontFamily: fonts.light,
    fontSize: 16
  }
});

export default Header;
