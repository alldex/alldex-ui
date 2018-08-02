import React from "react";
import PropTypes from "prop-types";
import cnames from "classnames";
import counterpart from "counterpart";

class Tabs extends React.Component {
    static defaultProps = {
        defaultActiveTab: null,
        defaultContent: null,
        inner: false,
        dashboardTabsClass: ""
    };

    static contextTypes = {
        router: PropTypes.object.isRequired
    };

    constructor(props) {
        super(props);
        const {items, defaultActiveTab} = props;
        let activeTab = !!defaultActiveTab
            ? defaultActiveTab
            : items.length > 0
                ? [...items].shift().title
                : null;
        this.state = {
            openMobileSelect: false,
            activeTab
        };
        this._findActiveTab = this._findActiveTab.bind(this);
        this._renderDesktopTabs = this._renderDesktopTabs.bind(this);
        this._renderMobileTabs = this._renderMobileTabs.bind(this);
    }

    _findActiveTab(items) {
        return items.find(({title}) => title === this.state.activeTab);
    }

    _renderDesktopTabs(items) {
        const renderDesktopTab = ({title, subTitle, link}) => {
            return (
                <div
                    key={`desktop-${title}`}
                    className={cnames("dashboard__tabs__item", {
                        active: title === this.state.activeTab
                    })}
                    onClick={e => {
                        e.preventDefault();
                        this._changeTab({title, link});
                    }}
                >
                    <h4>{counterpart.translate(title)}</h4>
                    {!!subTitle ? <span>{subTitle}</span> : null}
                </div>
            );
        };

        return items.map(renderDesktopTab);
    }

    _renderMobileTabs(items) {
        const activeTab = this._findActiveTab(items);
        return activeTab ? (
            <div
                className={cnames("select dashboard__mobileselect", {
                    "is-open": this.state.openMobileSelect
                })}
            >
                <span
                    className="placeholder"
                    onClick={e => {
                        e.preventDefault();
                        this.setState({
                            openMobileSelect: !this.state.openMobileSelect
                        });
                    }}
                >
                    {counterpart.translate(activeTab.title)}
                </span>
                <ul>
                    {items
                        .filter(({title}) => title !== activeTab.title)
                        .map(({title, link}) => {
                            return (
                                <li
                                    key={`mobile-${title}`}
                                    onClick={e => {
                                        e.preventDefault();
                                        this._changeTab({title, link});
                                        this.setState({
                                            openMobileSelect: false
                                        });
                                    }}
                                >
                                    {counterpart.translate(title)}
                                </li>
                            );
                        })}
                </ul>
            </div>
        ) : null;
    }

    _renderTabs(items) {
        const {dashboardTabsClass} = this.props;
        return (
            <div
                className={
                    !!dashboardTabsClass
                        ? `dashboard__tabs ${dashboardTabsClass}`
                        : "dashboard__tabs"
                }
            >
                {this._renderMobileTabs(items)}
                {this._renderDesktopTabs(items)}
            </div>
        );
    }

    _changeTab({title, link}) {
        if (title === this.state.activeTab) {
            return;
        }

        if (link) {
            this.context.router.push(link);
            return;
        }

        this.setState({activeTab: title});
    }

    render() {
        const {items, inner, defaultContent} = this.props;
        const activeTab = this._findActiveTab(items);
        const content = !!defaultContent
            ? defaultContent
            : activeTab
                ? activeTab.content
                : null;

        return items.length > 0 && activeTab ? (
            inner ? (
                <div className="dashboard">
                    {this._renderTabs(items)}
                    {content}
                </div>
            ) : (
                <div>
                    <div className="dashboard">{this._renderTabs(items)}</div>
                    <div className="negative-margins">
                        <div className="container-fluid">{content}</div>
                    </div>
                </div>
            )
        ) : null;
    }
}

export default Tabs;