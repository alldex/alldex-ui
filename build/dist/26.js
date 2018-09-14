(window.webpackJsonp = window.webpackJsonp || []).push([
    [26],
    {
        350: function(e, t, a) {
            "use strict";
            var n = a(0),
                r = a.n(n),
                o = a(2),
                l = a.n(o),
                c = a(9),
                i = a.n(c),
                s = a(24),
                u = a(14),
                m = a(4),
                h = (a(1), a(3)),
                f = a.n(h),
                p = a(50),
                d = a.n(p),
                v =
                    Object.assign ||
                    function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var a = arguments[t];
                            for (var n in a)
                                Object.prototype.hasOwnProperty.call(a, n) &&
                                    (e[n] = a[n]);
                        }
                        return e;
                    },
                g = (function() {
                    function e(e, t) {
                        for (var a = 0; a < t.length; a++) {
                            var n = t[a];
                            (n.enumerable = n.enumerable || !1),
                                (n.configurable = !0),
                                "value" in n && (n.writable = !0),
                                Object.defineProperty(e, n.key, n);
                        }
                    }
                    return function(t, a, n) {
                        return a && e(t.prototype, a), n && e(t, n), t;
                    };
                })();
            function E(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function");
            }
            function b(e, t) {
                if (!e)
                    throw new ReferenceError(
                        "this hasn't been initialised - super() hasn't been called"
                    );
                return !t || ("object" != typeof t && "function" != typeof t)
                    ? e
                    : t;
            }
            function _(e, t) {
                if ("function" != typeof t && null !== t)
                    throw new TypeError(
                        "Super expression must either be null or a function, not " +
                            typeof t
                    );
                (e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                })),
                    t &&
                        (Object.setPrototypeOf
                            ? Object.setPrototypeOf(e, t)
                            : (e.__proto__ = t));
            }
            var y = (function(e) {
                function t() {
                    E(this, t);
                    var e = b(
                        this,
                        (t.__proto__ || Object.getPrototypeOf(t)).call(this)
                    );
                    return (
                        (e.state = {
                            value: null,
                            error: null,
                            existing_account: !1
                        }),
                        (e.handleChange = e.handleChange.bind(e)),
                        (e.onKeyDown = e.onKeyDown.bind(e)),
                        e
                    );
                }
                return (
                    _(t, r.a.Component),
                    g(t, [
                        {
                            key: "shouldComponentUpdate",
                            value: function(e, t) {
                                return (
                                    t.value !== this.state.value ||
                                    t.error !== this.state.error ||
                                    t.account_name !==
                                        this.state.account_name ||
                                    t.existing_account !==
                                        this.state.existing_account ||
                                    e.searchAccounts !==
                                        this.props.searchAccounts
                                );
                            }
                        },
                        {
                            key: "componentDidUpdate",
                            value: function() {
                                this.props.onChange &&
                                    this.props.onChange({
                                        valid: !this.getError()
                                    });
                            }
                        },
                        {
                            key: "getValue",
                            value: function() {
                                return this.state.value;
                            }
                        },
                        {
                            key: "setValue",
                            value: function(e) {
                                this.setState({value: e});
                            }
                        },
                        {
                            key: "clear",
                            value: function() {
                                this.setState({
                                    account_name: null,
                                    error: null,
                                    warning: null
                                });
                            }
                        },
                        {
                            key: "focus",
                            value: function() {
                                this.refs.input.focus();
                            }
                        },
                        {
                            key: "valid",
                            value: function() {
                                return !this.getError();
                            }
                        },
                        {
                            key: "getError",
                            value: function() {
                                var e = this;
                                if (null === this.state.value) return null;
                                var t = null;
                                if (this.state.error) t = this.state.error;
                                else if (
                                    this.props.accountShouldExist ||
                                    this.props.accountShouldNotExist
                                ) {
                                    var a = this.props.searchAccounts.find(
                                        function(t) {
                                            return t === e.state.value;
                                        }
                                    );
                                    this.props.accountShouldNotExist &&
                                        a &&
                                        (t = f.a.translate(
                                            "account.name_input.name_is_taken"
                                        )),
                                        this.props.accountShouldExist &&
                                            !a &&
                                            (t = f.a.translate(
                                                "account.name_input.not_found"
                                            ));
                                }
                                return t;
                            }
                        },
                        {
                            key: "validateAccountName",
                            value: function(e) {
                                (this.state.error =
                                    "" === e
                                        ? "Please enter valid account name"
                                        : m.d.is_account_name_error(e)),
                                    (this.state.warning = null),
                                    this.props.cheapNameOnly
                                        ? this.state.error ||
                                          m.d.is_cheap_name(e) ||
                                          (this.state.error = f.a.translate(
                                              "account.name_input.premium_name_faucet"
                                          ))
                                        : this.state.error ||
                                          m.d.is_cheap_name(e) ||
                                          (this.state.warning = f.a.translate(
                                              "account.name_input.premium_name_warning"
                                          )),
                                    this.setState({
                                        value: e,
                                        error: this.state.error,
                                        warning: this.state.warning
                                    }),
                                    this.props.onChange &&
                                        this.props.onChange({
                                            value: e,
                                            valid: !this.getError()
                                        }),
                                    (this.props.accountShouldExist ||
                                        this.props.accountShouldNotExist) &&
                                        s.a.accountSearch(e);
                            }
                        },
                        {
                            key: "handleChange",
                            value: function(e) {
                                e.preventDefault(), e.stopPropagation();
                                var t = e.target.value.toLowerCase();
                                (t = (t = t.match(/[a-z0-9\.-]+/))
                                    ? t[0]
                                    : null),
                                    this.setState({account_name: t}),
                                    this.validateAccountName(t);
                            }
                        },
                        {
                            key: "onKeyDown",
                            value: function(e) {
                                this.props.onEnter &&
                                    13 === event.keyCode &&
                                    this.props.onEnter(e);
                            }
                        },
                        {
                            key: "render",
                            value: function() {
                                var e = this.getError() || "",
                                    t = i()("form-group", "account-name", {
                                        "has-error": !1
                                    }),
                                    a = this.state.warning;
                                return r.a.createElement(
                                    "div",
                                    {className: t},
                                    r.a.createElement(
                                        "section",
                                        null,
                                        r.a.createElement(
                                            "label",
                                            {className: "left-label"},
                                            this.props.placeholder
                                        ),
                                        r.a.createElement("input", {
                                            name: "username",
                                            id: "username",
                                            type: "text",
                                            ref: "input",
                                            autoComplete: "off",
                                            placeholder: null,
                                            onChange: this.handleChange,
                                            onKeyDown: this.onKeyDown,
                                            value:
                                                this.state.account_name ||
                                                this.props.initial_value
                                        })
                                    ),
                                    r.a.createElement(
                                        "div",
                                        {
                                            style: {textAlign: "left"},
                                            className: "facolor-error"
                                        },
                                        e
                                    ),
                                    r.a.createElement(
                                        "div",
                                        {
                                            style: {textAlign: "left"},
                                            className: "facolor-warning"
                                        },
                                        e ? null : a
                                    )
                                );
                            }
                        }
                    ]),
                    t
                );
            })();
            (y.propTypes = {
                id: l.a.string,
                placeholder: l.a.string,
                initial_value: l.a.string,
                onChange: l.a.func,
                onEnter: l.a.func,
                accountShouldExist: l.a.bool,
                accountShouldNotExist: l.a.bool,
                cheapNameOnly: l.a.bool,
                noLabel: l.a.bool
            }),
                (y.defaultProps = {noLabel: !1});
            var w = (function(e) {
                function t() {
                    return (
                        E(this, t),
                        b(
                            this,
                            (t.__proto__ || Object.getPrototypeOf(t)).apply(
                                this,
                                arguments
                            )
                        )
                    );
                }
                return (
                    _(t, r.a.Component),
                    g(t, [
                        {
                            key: "render",
                            value: function() {
                                return r.a.createElement(
                                    d.a,
                                    {
                                        stores: [u.a],
                                        inject: {
                                            searchAccounts: function() {
                                                return u.a.getState()
                                                    .searchAccounts;
                                            }
                                        }
                                    },
                                    r.a.createElement(
                                        y,
                                        v({ref: "nameInput"}, this.props)
                                    )
                                );
                            }
                        }
                    ]),
                    t
                );
            })();
            t.a = w;
        },
        4967: function(e, t, a) {
            "use strict";
            a.r(t);
            var n = a(0),
                r = a.n(n),
                o = a(15),
                l = a(9),
                c = a.n(l),
                i = a(24),
                s = a(14),
                u = a(350),
                m = a(282),
                h = a(16),
                f = a(28),
                p = a(11),
                d = a(115),
                v = a(45),
                g = a(39),
                E = a(37),
                b = a(44),
                _ = a(1),
                y = a.n(_),
                w = a(4),
                k = a(557),
                C = a(52),
                N = a.n(C),
                S = a(5),
                A = a(10),
                x = a(3),
                O = a.n(x),
                j = (function() {
                    function e(e, t) {
                        for (var a = 0; a < t.length; a++) {
                            var n = t[a];
                            (n.enumerable = n.enumerable || !1),
                                (n.configurable = !0),
                                "value" in n && (n.writable = !0),
                                Object.defineProperty(e, n.key, n);
                        }
                    }
                    return function(t, a, n) {
                        return a && e(t.prototype, a), n && e(t, n), t;
                    };
                })();
            function P(e, t, a) {
                return (
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: a,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = a),
                    e
                );
            }
            var T = (function(e) {
                function t() {
                    !(function(e, t) {
                        if (!(e instanceof t))
                            throw new TypeError(
                                "Cannot call a class as a function"
                            );
                    })(this, t);
                    var e = (function(e, t) {
                        if (!e)
                            throw new ReferenceError(
                                "this hasn't been initialised - super() hasn't been called"
                            );
                        return !t ||
                            ("object" != typeof t && "function" != typeof t)
                            ? e
                            : t;
                    })(
                        this,
                        (t.__proto__ || Object.getPrototypeOf(t)).call(this)
                    );
                    return (
                        (e._onBackupDownload = function() {
                            e.setState({step: 3});
                        }),
                        (e.state = {
                            validAccountName: !1,
                            accountName: "",
                            validPassword: !1,
                            registrar_account: null,
                            loading: !1,
                            hide_refcode: !0,
                            show_identicon: !1,
                            step: 1
                        }),
                        (e.onFinishConfirm = e.onFinishConfirm.bind(e)),
                        (e.accountNameInput = null),
                        e
                    );
                }
                return (
                    (function(e, t) {
                        if ("function" != typeof t && null !== t)
                            throw new TypeError(
                                "Super expression must either be null or a function, not " +
                                    typeof t
                            );
                        (e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                enumerable: !1,
                                writable: !0,
                                configurable: !0
                            }
                        })),
                            t &&
                                (Object.setPrototypeOf
                                    ? Object.setPrototypeOf(e, t)
                                    : (e.__proto__ = t));
                    })(t, r.a.Component),
                    j(t, [
                        {
                            key: "componentWillMount",
                            value: function() {
                                A.a.changeSetting({
                                    setting: "passwordLogin",
                                    value: !1
                                });
                            }
                        },
                        {
                            key: "componentDidMount",
                            value: function() {
                                N.a.rebuild();
                            }
                        },
                        {
                            key: "shouldComponentUpdate",
                            value: function(e, t) {
                                return !S.a.are_equal_shallow(t, this.state);
                            }
                        },
                        {
                            key: "isValid",
                            value: function() {
                                var e = 0 === s.a.getMyAccounts().length,
                                    t = this.state.validAccountName;
                                return (
                                    h.a.getWallet() ||
                                        (t = t && this.state.validPassword),
                                    e ||
                                        (t = t && this.state.registrar_account),
                                    t
                                );
                            }
                        },
                        {
                            key: "onAccountNameChange",
                            value: function(e) {
                                var t = {};
                                void 0 !== e.valid &&
                                    (t.validAccountName = e.valid),
                                    void 0 !== e.value &&
                                        (t.accountName = e.value),
                                    this.state.show_identicon ||
                                        (t.show_identicon = !0),
                                    this.setState(t);
                            }
                        },
                        {
                            key: "onPasswordChange",
                            value: function(e) {
                                this.setState({validPassword: e.valid});
                            }
                        },
                        {
                            key: "onFinishConfirm",
                            value: function(e) {
                                var t = this;
                                e.included &&
                                    e.broadcasted_transaction &&
                                    (g.a.unlisten(this.onFinishConfirm),
                                    g.a.reset(),
                                    Object(w.f)(
                                        "getAccount",
                                        this.state.accountName,
                                        void 0,
                                        P({}, this.state.accountName, !0)
                                    ).then(function() {
                                        console.log("onFinishConfirm"),
                                            t.props.router.push(
                                                "/wallet/backup/create?newAccount=true"
                                            );
                                    }));
                            }
                        },
                        {
                            key: "createAccount",
                            value: function(e) {
                                var t = this,
                                    a = this.refs.refcode
                                        ? this.refs.refcode.value()
                                        : null,
                                    n = s.a.getState().referralAccount;
                                v.a
                                    .unlock()
                                    .then(function() {
                                        t.setState({loading: !0}),
                                            i.a
                                                .createAccount(
                                                    e,
                                                    t.state.registrar_account,
                                                    n ||
                                                        t.state
                                                            .registrar_account,
                                                    0,
                                                    a
                                                )
                                                .then(function() {
                                                    t.state.registrar_account
                                                        ? (Object(w.f)(
                                                              "getAccount",
                                                              e,
                                                              void 0,
                                                              P({}, e, !0)
                                                          ).then(function() {
                                                              t.setState({
                                                                  step: 2,
                                                                  loading: !1
                                                              });
                                                          }),
                                                          g.a.listen(
                                                              t.onFinishConfirm
                                                          ))
                                                        : Object(w.f)(
                                                              "getAccount",
                                                              e,
                                                              void 0,
                                                              P({}, e, !0)
                                                          ).then(function() {
                                                              t.setState({
                                                                  step: 2,
                                                                  loading: !1
                                                              });
                                                          });
                                                })
                                                .catch(function(a) {
                                                    console.log(
                                                        "ERROR AccountActions.createAccount",
                                                        a
                                                    );
                                                    var n =
                                                        a.base &&
                                                        a.base.length &&
                                                        a.base.length > 0
                                                            ? a.base[0]
                                                            : "unknown error";
                                                    a.remote_ip &&
                                                        (n = a.remote_ip[0]),
                                                        f.a.addNotification({
                                                            message:
                                                                "Failed to create account: " +
                                                                e +
                                                                " - " +
                                                                n,
                                                            level: "error",
                                                            autoDismiss: 10
                                                        }),
                                                        t.setState({
                                                            loading: !1
                                                        });
                                                });
                                    })
                                    .catch(function() {});
                            }
                        },
                        {
                            key: "createWallet",
                            value: function(e) {
                                return b.a
                                    .setWallet("default", e)
                                    .then(function() {
                                        console.log(
                                            "Congratulations, your wallet was successfully created."
                                        );
                                    })
                                    .catch(function(e) {
                                        console.log("CreateWallet failed:", e),
                                            f.a.addNotification({
                                                message:
                                                    "Failed to create wallet: " +
                                                    e,
                                                level: "error",
                                                autoDismiss: 10
                                            });
                                    });
                            }
                        },
                        {
                            key: "onSubmit",
                            value: function(e) {
                                var t = this;
                                if ((e.preventDefault(), this.isValid())) {
                                    var a = this.accountNameInput.getValue();
                                    if (h.a.getWallet()) this.createAccount(a);
                                    else {
                                        var n = this.refs.password.value();
                                        this.createWallet(n).then(function() {
                                            return t.createAccount(a);
                                        });
                                    }
                                }
                            }
                        },
                        {
                            key: "onRegistrarAccountChange",
                            value: function(e) {
                                this.setState({registrar_account: e});
                            }
                        },
                        {
                            key: "_renderAccountCreateForm",
                            value: function() {
                                var e = this,
                                    t = this.state.registrar_account,
                                    a = s.a.getMyAccounts(),
                                    n = 0 === a.length,
                                    o = h.a.getWallet(),
                                    l = this.isValid(),
                                    i = !1,
                                    f = t ? w.b.getAccount(t) : null;
                                f &&
                                    f.get("lifetime_referrer") == f.get("id") &&
                                    (i = !0);
                                var v = c()("submit-button button no-margin", {
                                    disabled: !l || (t && !i)
                                });
                                return r.a.createElement(
                                    "form",
                                    {
                                        style: {maxWidth: "40rem"},
                                        onSubmit: this.onSubmit.bind(this),
                                        noValidate: !0
                                    },
                                    r.a.createElement(
                                        "p",
                                        {
                                            style: {
                                                fontWeight: "normal",
                                                fontFamily:
                                                    "Roboto-Medium, arial, sans-serif",
                                                fontStyle: "normal"
                                            }
                                        },
                                        n
                                            ? r.a.createElement(y.a, {
                                                  content: "wallet.create_w_a"
                                              })
                                            : r.a.createElement(y.a, {
                                                  content: "wallet.create_a"
                                              })
                                    ),
                                    r.a.createElement(u.a, {
                                        ref: function(t) {
                                            t &&
                                                (e.accountNameInput =
                                                    t.refs.nameInput);
                                        },
                                        cheapNameOnly: !!n,
                                        onChange: this.onAccountNameChange.bind(
                                            this
                                        ),
                                        accountShouldNotExist: !0,
                                        placeholder: O.a.translate(
                                            "wallet.account_public"
                                        ),
                                        noLabel: !0
                                    }),
                                    o
                                        ? null
                                        : r.a.createElement(m.a, {
                                              ref: "password",
                                              confirmation: !0,
                                              onChange: this.onPasswordChange.bind(
                                                  this
                                              ),
                                              noLabel: !0,
                                              checkStrength: !0
                                          }),
                                    n
                                        ? null
                                        : r.a.createElement(
                                              "div",
                                              {
                                                  className:
                                                      "full-width-content form-group no-overflow"
                                              },
                                              r.a.createElement(
                                                  "label",
                                                  null,
                                                  r.a.createElement(y.a, {
                                                      content:
                                                          "account.pay_from"
                                                  })
                                              ),
                                              r.a.createElement(d.a, {
                                                  account_names: a,
                                                  onChange: this.onRegistrarAccountChange.bind(
                                                      this
                                                  )
                                              }),
                                              t && !i
                                                  ? r.a.createElement(
                                                        "div",
                                                        {
                                                            style: {
                                                                textAlign:
                                                                    "left"
                                                            },
                                                            className:
                                                                "facolor-error"
                                                        },
                                                        r.a.createElement(y.a, {
                                                            content:
                                                                "wallet.must_be_ltm"
                                                        })
                                                    )
                                                  : null
                                          ),
                                    r.a.createElement("div", {
                                        className: "divider"
                                    }),
                                    this.state.loading
                                        ? r.a.createElement(E.a, {
                                              type: "three-bounce"
                                          })
                                        : r.a.createElement(
                                              "button",
                                              {
                                                  style: {width: "100%"},
                                                  className: v
                                              },
                                              r.a.createElement(y.a, {
                                                  content:
                                                      "account.create_account"
                                              })
                                          ),
                                    r.a.createElement(
                                        "div",
                                        {style: {paddingTop: 40}},
                                        r.a.createElement(
                                            "label",
                                            null,
                                            r.a.createElement(
                                                p.b,
                                                {to: "/existing-account"},
                                                r.a.createElement(y.a, {
                                                    content: "wallet.restore"
                                                })
                                            )
                                        ),
                                        r.a.createElement(
                                            "label",
                                            null,
                                            r.a.createElement(
                                                p.b,
                                                {to: "/create-wallet-brainkey"},
                                                r.a.createElement(y.a, {
                                                    content:
                                                        "settings.backup_brainkey"
                                                })
                                            )
                                        )
                                    ),
                                    !o || n
                                        ? null
                                        : r.a.createElement(
                                              "div",
                                              {style: {paddingTop: 20}},
                                              r.a.createElement(
                                                  "label",
                                                  null,
                                                  r.a.createElement(
                                                      "a",
                                                      {
                                                          onClick: function() {
                                                              e.setState({
                                                                  step: 3
                                                              });
                                                          }
                                                      },
                                                      r.a.createElement(y.a, {
                                                          content:
                                                              "wallet.go_get_started"
                                                      })
                                                  )
                                              )
                                          )
                                );
                            }
                        },
                        {
                            key: "_renderAccountCreateText",
                            value: function() {
                                var e = h.a.getWallet(),
                                    t = 0 === s.a.getMyAccounts().length;
                                return r.a.createElement(
                                    "div",
                                    {className: "confirm-checks"},
                                    r.a.createElement(
                                        "h4",
                                        {
                                            style: {
                                                fontWeight: "normal",
                                                fontFamily:
                                                    "Roboto-Medium, arial, sans-serif",
                                                fontStyle: "normal",
                                                paddingBottom: 15,
                                                marginTop: 0
                                            }
                                        },
                                        r.a.createElement(y.a, {
                                            content: "wallet.wallet_browser"
                                        })
                                    ),
                                    r.a.createElement(
                                        "p",
                                        null,
                                        e
                                            ? null
                                            : r.a.createElement(y.a, {
                                                  content: "wallet.has_wallet"
                                              })
                                    ),
                                    r.a.createElement(y.a, {
                                        style: {textAlign: "left"},
                                        component: "p",
                                        content: "wallet.create_account_text"
                                    }),
                                    t
                                        ? r.a.createElement(y.a, {
                                              style: {textAlign: "left"},
                                              component: "p",
                                              content:
                                                  "wallet.first_account_paid"
                                          })
                                        : r.a.createElement(y.a, {
                                              style: {textAlign: "left"},
                                              component: "p",
                                              content:
                                                  "wallet.not_first_account"
                                          })
                                );
                            }
                        },
                        {
                            key: "_renderBackup",
                            value: function() {
                                return r.a.createElement(
                                    "div",
                                    {className: "backup-submit"},
                                    r.a.createElement(
                                        "p",
                                        null,
                                        r.a.createElement(y.a, {
                                            unsafe: !0,
                                            content: "wallet.wallet_crucial"
                                        })
                                    ),
                                    r.a.createElement("div", {
                                        className: "divider"
                                    }),
                                    r.a.createElement(k.BackupCreate, {
                                        noText: !0,
                                        downloadCb: this._onBackupDownload
                                    })
                                );
                            }
                        },
                        {
                            key: "_renderBackupText",
                            value: function() {
                                return r.a.createElement(
                                    "div",
                                    null,
                                    r.a.createElement(
                                        "p",
                                        {
                                            style: {
                                                fontWeight: "normal",
                                                fontFamily:
                                                    "Roboto-Medium, arial, sans-serif",
                                                fontStyle: "normal"
                                            }
                                        },
                                        r.a.createElement(y.a, {
                                            content: "footer.backup"
                                        })
                                    ),
                                    r.a.createElement(
                                        "p",
                                        null,
                                        r.a.createElement(y.a, {
                                            content: "wallet.wallet_move",
                                            unsafe: !0
                                        })
                                    ),
                                    r.a.createElement(
                                        "p",
                                        {className: "txtlabel warning"},
                                        r.a.createElement(y.a, {
                                            unsafe: !0,
                                            content:
                                                "wallet.wallet_lose_warning"
                                        })
                                    )
                                );
                            }
                        },
                        {
                            key: "_renderGetStarted",
                            value: function() {
                                return r.a.createElement(
                                    "div",
                                    null,
                                    r.a.createElement(
                                        "table",
                                        {className: "table"},
                                        r.a.createElement(
                                            "tbody",
                                            null,
                                            r.a.createElement(
                                                "tr",
                                                null,
                                                r.a.createElement(
                                                    "td",
                                                    null,
                                                    r.a.createElement(y.a, {
                                                        content:
                                                            "wallet.tips_dashboard"
                                                    }),
                                                    ":"
                                                ),
                                                r.a.createElement(
                                                    "td",
                                                    null,
                                                    r.a.createElement(
                                                        p.b,
                                                        {to: "/"},
                                                        r.a.createElement(y.a, {
                                                            content:
                                                                "header.dashboard"
                                                        })
                                                    )
                                                )
                                            ),
                                            r.a.createElement(
                                                "tr",
                                                null,
                                                r.a.createElement(
                                                    "td",
                                                    null,
                                                    r.a.createElement(y.a, {
                                                        content:
                                                            "wallet.tips_account"
                                                    }),
                                                    ":"
                                                ),
                                                r.a.createElement(
                                                    "td",
                                                    null,
                                                    r.a.createElement(
                                                        p.b,
                                                        {
                                                            to:
                                                                "/account/" +
                                                                this.state
                                                                    .accountName +
                                                                "/overview"
                                                        },
                                                        r.a.createElement(y.a, {
                                                            content:
                                                                "wallet.link_account"
                                                        })
                                                    )
                                                )
                                            ),
                                            r.a.createElement(
                                                "tr",
                                                null,
                                                r.a.createElement(
                                                    "td",
                                                    null,
                                                    r.a.createElement(y.a, {
                                                        content:
                                                            "wallet.tips_deposit"
                                                    }),
                                                    ":"
                                                ),
                                                r.a.createElement(
                                                    "td",
                                                    null,
                                                    r.a.createElement(
                                                        p.b,
                                                        {
                                                            to:
                                                                "/deposit-withdraw"
                                                        },
                                                        r.a.createElement(y.a, {
                                                            content:
                                                                "wallet.link_deposit"
                                                        })
                                                    )
                                                )
                                            ),
                                            r.a.createElement(
                                                "tr",
                                                null,
                                                r.a.createElement(
                                                    "td",
                                                    null,
                                                    r.a.createElement(y.a, {
                                                        content:
                                                            "wallet.tips_transfer"
                                                    }),
                                                    ":"
                                                ),
                                                r.a.createElement(
                                                    "td",
                                                    null,
                                                    r.a.createElement(
                                                        p.b,
                                                        {to: "/transfer"},
                                                        r.a.createElement(y.a, {
                                                            content:
                                                                "wallet.link_transfer"
                                                        })
                                                    )
                                                )
                                            ),
                                            r.a.createElement(
                                                "tr",
                                                null,
                                                r.a.createElement(
                                                    "td",
                                                    null,
                                                    r.a.createElement(y.a, {
                                                        content:
                                                            "wallet.tips_settings"
                                                    }),
                                                    ":"
                                                ),
                                                r.a.createElement(
                                                    "td",
                                                    null,
                                                    r.a.createElement(
                                                        p.b,
                                                        {to: "/settings"},
                                                        r.a.createElement(y.a, {
                                                            content:
                                                                "header.settings"
                                                        })
                                                    )
                                                )
                                            )
                                        )
                                    )
                                );
                            }
                        },
                        {
                            key: "_renderGetStartedText",
                            value: function() {
                                return r.a.createElement(
                                    "div",
                                    null,
                                    r.a.createElement(
                                        "p",
                                        {
                                            style: {
                                                fontWeight: "normal",
                                                fontFamily:
                                                    "Roboto-Medium, arial, sans-serif",
                                                fontStyle: "normal"
                                            }
                                        },
                                        r.a.createElement(y.a, {
                                            content: "wallet.congrat"
                                        })
                                    ),
                                    r.a.createElement(
                                        "p",
                                        null,
                                        r.a.createElement(y.a, {
                                            content: "wallet.tips_explore"
                                        })
                                    ),
                                    r.a.createElement(
                                        "p",
                                        null,
                                        r.a.createElement(y.a, {
                                            content: "wallet.tips_header"
                                        })
                                    ),
                                    r.a.createElement(
                                        "p",
                                        {className: "txtlabel warning"},
                                        r.a.createElement(y.a, {
                                            content: "wallet.tips_login"
                                        })
                                    )
                                );
                            }
                        },
                        {
                            key: "render",
                            value: function() {
                                var e = this.state.step;
                                return r.a.createElement(
                                    "div",
                                    {className: "sub-content"},
                                    r.a.createElement(
                                        "div",
                                        {style: {maxWidth: "95vw"}},
                                        1 !== e
                                            ? r.a.createElement(
                                                  "p",
                                                  {
                                                      style: {
                                                          fontWeight: "normal",
                                                          fontFamily:
                                                              "Roboto-Medium, arial, sans-serif",
                                                          fontStyle: "normal"
                                                      }
                                                  },
                                                  r.a.createElement(y.a, {
                                                      content:
                                                          "wallet.step_" + e
                                                  })
                                              )
                                            : null,
                                        1 === e
                                            ? this._renderAccountCreateForm()
                                            : 2 === e
                                                ? this._renderBackup()
                                                : this._renderGetStarted()
                                    ),
                                    r.a.createElement(
                                        "div",
                                        {
                                            style: {
                                                maxWidth: "95vw",
                                                paddingTop: "2rem"
                                            }
                                        },
                                        1 === e
                                            ? this._renderAccountCreateText()
                                            : 2 === e
                                                ? this._renderBackupText()
                                                : this._renderGetStartedText()
                                    ),
                                    r.a.createElement(
                                        p.b,
                                        {to: "/"},
                                        r.a.createElement(
                                            "button",
                                            {
                                                className:
                                                    "button primary hollow"
                                            },
                                            r.a.createElement(y.a, {
                                                content: "wallet.back"
                                            })
                                        )
                                    )
                                );
                            }
                        }
                    ]),
                    t
                );
            })();
            t.default = Object(o.connect)(T, {
                listenTo: function() {
                    return [s.a];
                },
                getProps: function() {
                    return {};
                }
            });
        }
    }
]);