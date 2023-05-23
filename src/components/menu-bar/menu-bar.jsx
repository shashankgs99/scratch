import classNames from 'classnames';
import {connect} from 'react-redux';
import {compose} from 'redux';
import {injectIntl, intlShape} from 'react-intl';
import PropTypes from 'prop-types';
import bindAll from 'lodash.bindall';
import React from 'react';

import VM from 'scratch-vm';

import Box from '../box/box.jsx';
import Button from '../button/button.jsx';
import MenuBarHOC from '../../containers/menu-bar-hoc.jsx';

import styles from './menu-bar.css';

import aboutIcon from './icon--about.svg';

import scratchLogo from './scratch-logo.svg';

const AboutButton = props => (
    <Button
        className={classNames(styles.menuBarItem, styles.hoverable)}
        iconClassName={styles.aboutIcon}
        iconSrc={aboutIcon}
        onClick={props.onClick}
    />
);

AboutButton.propTypes = {
    onClick: PropTypes.func.isRequired
};

class MenuBar extends React.Component {
    constructor (props) {
        super(props);
        bindAll(this, []);
    }
    componentDidMount () {}
    render () {
        return (
            <Box
                className={classNames(
                    this.props.className,
                    styles.menuBar
                )}
            >
                <div className={styles.mainMenu}>
                    <div className={styles.fileGroup}>
                        <div className={classNames(styles.menuBarItem)}>
                            <img
                                id="logo_img"
                                alt="Scratch"
                                className={classNames(styles.scratchLogo, {
                                    [styles.clickable]: typeof this.props.onClickLogo !== 'undefined'
                                })}
                                draggable={false}
                                src={this.props.logo}
                                onClick={this.props.onClickLogo}
                            />
                        </div>
                    </div>
                </div>
            </Box>
        );
    }
}

MenuBar.propTypes = {
    className: PropTypes.string,
    intl: intlShape,
    logo: PropTypes.string,
    onClickLogo: PropTypes.func,
    vm: PropTypes.instanceOf(VM).isRequired
};

MenuBar.defaultProps = {
    logo: scratchLogo,
};

export default compose(
    injectIntl,
    MenuBarHOC,
    connect(null,null)
)(MenuBar);
