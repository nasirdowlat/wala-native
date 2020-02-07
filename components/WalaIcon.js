// Once your custom font has been loaded...
import { createIconSetFromIcoMoon } from '@expo/vector-icons';
import icoMoonConfig from '../assets/fonts/wala/selection.json';
const expoAssetId = require('../assets/fonts/wala/icomoon.ttf');
const WalaIcon = createIconSetFromIcoMoon(
  icoMoonConfig,
  'icomoon',
  expoAssetId
);

export default WalaIcon;
