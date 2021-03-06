import React from "react";
import SettingsStore from "stores/SettingsStore";
import counterpart from "counterpart";
import ChooseCurrency from "./ChooseCurrency";
import Summary from "./Summary";
import Instructions from "./Instructions";
import Recent from "./Recent";
import LLCGatewayData from "./LLCGatewayData";
import accountUtils from "common/account_utils";

class LLCGateway extends React.Component {
    static label = "LLCGateway";
    static WITHDRAW = "withdraw";
    static DEPOSIT = "deposit";

    constructor(props) {
        super(props);

        this.switchToDeposit = this.switchToDeposit.bind(this);
        this.switchToWithdraw = this.switchToWithdraw.bind(this);

        this.state = {
            type: LLCGateway.WITHDRAW,
            currency: {
                asset: null,
                currency: null
            },
            depositAddress: ""
        };
    }

    switchToDeposit() {
        this.setState({type: LLCGateway.DEPOSIT});
    }

    switchToWithdraw() {
        this.setState({type: LLCGateway.WITHDRAW});
    }

    setCurrency(model) {
        this.setState({
            currency: model
        });

        this.createDepositAddress(this.props.account.get("name"), model.asset);
    }

    createDepositAddress(account, asset) {
        if (!account || !asset) return;

        new LLCGatewayData().сreatePaymentAddress(account, asset, address => {
            this.setState({
                depositAddress: address
            });
        });
    }

    render() {
        return (
            <div className="grid-content no-padding">
                <div className="content-block">
                    <div
                        className="service-selector"
                        style={{marginBottom: "2rem"}}
                    >
                        <ul className="button-group segmented no-margin">
                            <li className="is-active">
                                <a>
                                    <span>
                                        {counterpart.translate(
                                            "gateway.gateway"
                                        )}
                                    </span>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <div className="grid-block no-margin vertical medium-horizontal no-padding">
                            <div className="medium-4">
                                <ChooseCurrency
                                    account={this.props.account}
                                    type={this.state.type}
                                    bullet={this}
                                />
                            </div>
                            <div className="medium-6 medium-offset-1">
                                <label className="left-label">
                                    <span>
                                        {counterpart.translate(
                                            "gateway.gateway_text"
                                        )}
                                    </span>:
                                </label>
                                <div>
                                    <ul className="button-group segmented no-margin">
                                        <li
                                            onClick={this.switchToDeposit}
                                            className={
                                                this.state.type ==
                                                LLCGateway.DEPOSIT
                                                    ? "is-active"
                                                    : ""
                                            }
                                        >
                                            <a>
                                                <span>
                                                    {counterpart.translate(
                                                        "gateway.deposit"
                                                    )}
                                                </span>
                                            </a>
                                        </li>
                                        <li
                                            onClick={this.switchToWithdraw}
                                            className={
                                                this.state.type ==
                                                LLCGateway.WITHDRAW
                                                    ? "is-active"
                                                    : ""
                                            }
                                        >
                                            <a>
                                                <span>
                                                    {counterpart.translate(
                                                        "gateway.withdraw"
                                                    )}
                                                </span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="rudex__gateway grid-block no-padding no-margin">
                        <Summary
                            account={this.props.account}
                            type={this.state.type}
                            currency={this.state.currency}
                        />
                        <Instructions
                            depositAddress={this.state.depositAddress}
                            account={this.props.account}
                            type={this.state.type}
                            currency={this.state.currency}
                        />
                    </div>
                    <Recent
                        account={this.props.account}
                        type={this.state.type}
                    />
                </div>
            </div>
        );
    }
}

export default LLCGateway;
