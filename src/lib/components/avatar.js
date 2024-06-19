import React from 'react';
import PropTypes from 'prop-types';
import AvatarBeam from './avatar-beam';
import AvatarSunset from './avatar-sunset';
import AvatarBauhaus from './avatar-bauhaus';
import AvatarPixel from './avatar-pixel';
import AvatarRing from './avatar-ring';

const variants = ['pixel', 'bauhaus', 'ring', 'beam', 'sunset', 'marble'];

const Avatar = ({
  variant = 'beam',
  colors = ['#92A1C6', '#146A7C', '#F0AB3D', '#C271B4', '#C20D90'],
  name = 'Clara Barton',
  square = false,
  size = 40,
  ...props
}) => {
  const avatarProps = { colors, name, size, square, ...props };
  const checkedVariant = () => {
    if (variants.includes(variant)) {
      return variant;
    }
    return 'beam';
  };
  const avatars = {
    beam: <AvatarBeam {...avatarProps} />,
    sunset: <AvatarSunset {...avatarProps} />,
    // marble: <AvatarBeam {...avatarProps} />,
    pixel: <AvatarPixel {...avatarProps} />,
    bauhaus: <AvatarBauhaus {...avatarProps} />,
    ring: <AvatarRing {...avatarProps} />,
  };
  return avatars[checkedVariant()];
};

Avatar.propTypes = {
  variant: PropTypes.oneOf(variants),
};

export default Avatar;
