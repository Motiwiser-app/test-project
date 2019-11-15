import {injectIntl} from 'react-intl';
import {IntlShape} from 'react-intl'; // Correct

const propTypes = {
  intl: IntlShape.isRequired,
};

const Locales = ({intl}) => (
  <div>{`Current locale: ${intl.locale}`}</div>
);

Locales.propTypes = propTypes

export default injectIntl(Locales);