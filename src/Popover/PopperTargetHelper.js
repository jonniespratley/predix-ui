import propTypes from 'prop-types';
import { getTarget, DOMElement } from '../utils';

const PopperTargetHelper = ({ target }, { popperManager }) => {
  popperManager.setTargetNode(getTarget(target));
  return null;
};

PopperTargetHelper.contextTypes = {
  popperManager: propTypes.shape.isRequired
};

PopperTargetHelper.propTypes = {
  target: propTypes.oneOfType([propTypes.string, propTypes.func, DOMElement]).isRequired
};
export default PopperTargetHelper;
