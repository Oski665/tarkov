import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import type {SvgProps} from 'react-native-svg';
const Equipment = (props: SvgProps) => (
  <Svg width={64} height={56} fill="none" {...props}>
    <Path
      fill="#048F46"
      d="M57.815 29.118C57.815 13.152 44.873.21 28.908.21S0 13.152 0 29.118V42.3h19.732l3.74-5.968H64z"
    />
    <Path
      fill="#3DDB86"
      d="M28.908.21C12.942.21 0 13.152 0 29.118V42.3h19.732l3.74-5.968h5.436z"
    />
    <Path fill="#424242" d="M25.842 29.118h-6.11V55.79h6.11z" />
    <Path fill="#707070" d="M22.787 29.118H19.73V55.79h3.056z" />
    <Path
      fill="#EE2712"
      d="M57.815 29.118H13.182C13.182 36.398 7.281 42.3 0 42.3h19.732l3.74-5.968H64z"
    />
    <Path
      fill="#FF7565"
      d="M28.908 29.118H13.182C13.182 36.398 7.281 42.3 0 42.3h19.732l3.74-5.968h5.436z"
    />
  </Svg>
);
export default Equipment;
