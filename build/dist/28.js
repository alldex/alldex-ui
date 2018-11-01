(window.webpackJsonp = window.webpackJsonp || []).push([
    [28],
    {
        111: function(e, t, n) {
            "use strict";
            var a = n(0),
                r = n.n(a),
                o = n(510),
                i = n.n(o),
                s = (function() {
                    function e(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var a = t[n];
                            (a.enumerable = a.enumerable || !1),
                                (a.configurable = !0),
                                "value" in a && (a.writable = !0),
                                Object.defineProperty(e, a.key, a);
                        }
                    }
                    return function(t, n, a) {
                        return n && e(t.prototype, n), a && e(t, a), t;
                    };
                })();
            var c = (function(e) {
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
                    return (e.state = {animateEnter: !1}), (e.timer = null), e;
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
                    s(t, [
                        {
                            key: "componentDidMount",
                            value: function() {
                                this.enableAnimation();
                            }
                        },
                        {
                            key: "resetAnimation",
                            value: function() {
                                this.setState({animateEnter: !1}),
                                    this.enableAnimation();
                            }
                        },
                        {
                            key: "enableAnimation",
                            value: function() {
                                var e = this;
                                this.timer = setTimeout(function() {
                                    e.timer && e.setState({animateEnter: !0});
                                }, 2e3);
                            }
                        },
                        {
                            key: "componentWillUnmount",
                            value: function() {
                                clearTimeout(this.timer), (this.timer = null);
                            }
                        },
                        {
                            key: "render",
                            value: function() {
                                return this.props.children
                                    ? r.a.createElement(
                                          i.a,
                                          {
                                              className: this.props.className,
                                              component: this.props.component,
                                              transitionName: this.props
                                                  .transitionName,
                                              transitionEnterTimeout: this.props
                                                  .enterTimeout,
                                              transitionEnter: this.state
                                                  .animateEnter,
                                              transitionLeave: !1
                                          },
                                          this.props.children
                                      )
                                    : r.a.createElement(this.props.component);
                            }
                        }
                    ]),
                    t
                );
            })();
            (c.defaultProps = {component: "span", enterTimeout: 2e3}),
                (t.a = c);
        },
        129: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return L;
            }),
                n.d(t, "b", function() {
                    return P;
                });
            var a = n(0),
                r = n.n(a),
                o = n(1),
                i = n.n(o),
                s = n(122),
                c = n(149),
                l = n(6),
                u = n(13),
                p = n(5),
                h = n(4),
                d = n(111),
                m = n(54),
                f = n.n(m),
                g = n(3),
                b = n.n(g),
                v = n(12),
                y = n(9),
                E = n.n(y),
                _ = n(2),
                w = n.n(_),
                k = (function() {
                    function e(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var a = t[n];
                            (a.enumerable = a.enumerable || !1),
                                (a.configurable = !0),
                                "value" in a && (a.writable = !0),
                                Object.defineProperty(e, a.key, a);
                        }
                    }
                    return function(t, n, a) {
                        return n && e(t.prototype, n), a && e(t, a), t;
                    };
                })();
            function A(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function");
            }
            function x(e, t) {
                if (!e)
                    throw new ReferenceError(
                        "this hasn't been initialised - super() hasn't been called"
                    );
                return !t || ("object" != typeof t && "function" != typeof t)
                    ? e
                    : t;
            }
            function O(e, t) {
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
            var S = h.c.operations,
                C = {textAlign: "left"},
                T = {textAlign: "right"};
            function N(e, t) {
                return t.block_num === e.block_num
                    ? t.virtual_op - e.virtual_op
                    : t.block_num - e.block_num;
            }
            function j(e) {
                return e
                    ? '"' + e.textContent.replace(/[\s\t\r\n]/gi, " ") + '"'
                    : "";
            }
            var L = (function(e) {
                function t(e) {
                    A(this, t);
                    var n = x(
                        this,
                        (t.__proto__ || Object.getPrototypeOf(t)).call(this)
                    );
                    return (
                        (n.state = {
                            limit: e.limit || 20,
                            csvExport: !1,
                            headerHeight: 85,
                            filter: "all"
                        }),
                        n
                    );
                }
                return (
                    O(t, r.a.Component),
                    k(t, [
                        {
                            key: "componentDidMount",
                            value: function() {
                                if (!this.props.fullHeight) {
                                    var e = this.refs.transactions;
                                    f.a.initialize(e), this._setHeaderHeight();
                                }
                            }
                        },
                        {
                            key: "_setHeaderHeight",
                            value: function() {
                                var e = this.refs.header.offsetHeight;
                                e !== this.state.headerHeight &&
                                    this.setState({headerHeight: e});
                            }
                        },
                        {
                            key: "shouldComponentUpdate",
                            value: function(e, t) {
                                if (
                                    !p.a.are_equal_shallow(
                                        this.props.accountsList,
                                        e.accountsList
                                    )
                                )
                                    return !0;
                                if (this.props.maxHeight !== e.maxHeight)
                                    return !0;
                                if (this.state.headerHeight !== t.headerHeight)
                                    return !0;
                                if (this.state.filter !== t.filter) return !0;
                                if (
                                    this.props.customFilter &&
                                    (!p.a.are_equal_shallow(
                                        this.props.customFilter.fields,
                                        e.customFilter.fields
                                    ) ||
                                        !p.a.are_equal_shallow(
                                            this.props.customFilter.values,
                                            e.customFilter.values
                                        ))
                                )
                                    return !0;
                                if (this.props.maxHeight !== e.maxHeight)
                                    return !0;
                                if (
                                    t.limit !== this.state.limit ||
                                    t.csvExport !== this.state.csvExport
                                )
                                    return !0;
                                for (
                                    var n = 0;
                                    n < e.accountsList.length;
                                    ++n
                                ) {
                                    var a = e.accountsList[n],
                                        r = this.props.accountsList[n];
                                    if (
                                        a &&
                                        r &&
                                        a.get("history") !== r.get("history")
                                    )
                                        return !0;
                                }
                                return !1;
                            }
                        },
                        {
                            key: "componentDidUpdate",
                            value: function() {
                                if (this.state.csvExport) {
                                    this.state.csvExport = !1;
                                    var e = document.getElementById(
                                            "csv_export_container"
                                        ).childNodes,
                                        t = "",
                                        n = !0,
                                        a = !1,
                                        r = void 0;
                                    try {
                                        for (
                                            var o, i = e[Symbol.iterator]();
                                            !(n = (o = i.next()).done);
                                            n = !0
                                        ) {
                                            var c = o.value.childNodes;
                                            "" !== t && (t += "\n"),
                                                (t += [
                                                    j(c[0]),
                                                    j(c[1]),
                                                    j(c[2]),
                                                    j(c[3])
                                                ].join(","));
                                        }
                                    } catch (e) {
                                        (a = !0), (r = e);
                                    } finally {
                                        try {
                                            !n && i.return && i.return();
                                        } finally {
                                            if (a) throw r;
                                        }
                                    }
                                    var l = new Blob([t], {
                                            type: "text/csv;charset=utf-8"
                                        }),
                                        u = new Date();
                                    Object(s.saveAs)(
                                        l,
                                        "btshist-" +
                                            u.getFullYear() +
                                            "-" +
                                            ("0" + (u.getMonth() + 1)).slice(
                                                -2
                                            ) +
                                            "-" +
                                            ("0" + u.getDate()).slice(-2) +
                                            "-" +
                                            ("0" + u.getHours()).slice(-2) +
                                            ("0" + u.getMinutes()).slice(-2) +
                                            ".csv"
                                    );
                                }
                                if (!this.props.fullHeight) {
                                    var p = this.refs.transactions;
                                    f.a.update(p), this._setHeaderHeight();
                                }
                            }
                        },
                        {
                            key: "_onIncreaseLimit",
                            value: function() {
                                this.setState({limit: this.state.limit + 30});
                            }
                        },
                        {
                            key: "_getHistory",
                            value: function(e, t, n) {
                                var a = [],
                                    r = new Set(),
                                    o = !0,
                                    i = !1,
                                    s = void 0;
                                try {
                                    for (
                                        var c, l = e[Symbol.iterator]();
                                        !(o = (c = l.next()).done);
                                        o = !0
                                    ) {
                                        var u = c.value;
                                        if (u) {
                                            var p = u.get("history");
                                            p &&
                                                (a = a.concat(
                                                    p
                                                        .toJS()
                                                        .filter(function(e) {
                                                            return (
                                                                !r.has(e.id) &&
                                                                r.add(e.id)
                                                            );
                                                        })
                                                ));
                                        }
                                    }
                                } catch (e) {
                                    (i = !0), (s = e);
                                } finally {
                                    try {
                                        !o && l.return && l.return();
                                    } finally {
                                        if (i) throw s;
                                    }
                                }
                                return (
                                    t &&
                                        (a = a.filter(function(e) {
                                            return e.op[0] === S[t];
                                        })),
                                    n &&
                                        (a = a.filter(function(e) {
                                            return n.fields.reduce(function(
                                                t,
                                                a
                                            ) {
                                                switch (a) {
                                                    case "asset_id":
                                                        return (
                                                            t &&
                                                            e.op[1].amount[
                                                                a
                                                            ] === n.values[a]
                                                        );
                                                    default:
                                                        return (
                                                            t &&
                                                            e.op[1][a] ===
                                                                n.values[a]
                                                        );
                                                }
                                            },
                                            !0);
                                        })),
                                    a
                                );
                            }
                        },
                        {
                            key: "_downloadCSV",
                            value: function() {
                                this.setState({csvExport: !0});
                            }
                        },
                        {
                            key: "_onChangeFilter",
                            value: function(e) {
                                this.setState({filter: e.target.value});
                            }
                        },
                        {
                            key: "render",
                            value: function() {
                                var e = this.props,
                                    t = e.accountsList,
                                    n = e.compactView,
                                    a = e.filter,
                                    o = e.customFilter,
                                    s = e.style,
                                    l = e.maxHeight,
                                    u = this.state,
                                    p = u.limit,
                                    h = u.headerHeight,
                                    m =
                                        1 === t.length && t[0]
                                            ? t[0].get("id")
                                            : null,
                                    f = this._getHistory(
                                        t,
                                        this.props.showFilters &&
                                        "all" !== this.state.filter
                                            ? this.state.filter
                                            : a,
                                        o
                                    ).sort(N),
                                    g = f.length,
                                    y = null;
                                y = [
                                    "all",
                                    "transfer",
                                    "limit_order_create",
                                    "limit_order_cancel",
                                    "fill_order",
                                    "account_create",
                                    "account_update",
                                    "asset_create",
                                    "witness_withdraw_pay",
                                    "vesting_balance_withdraw"
                                ].map(function(e) {
                                    return r.a.createElement(
                                        "option",
                                        {value: e, key: e},
                                        b.a.translate(
                                            "transaction.trxTypes." + e
                                        )
                                    );
                                });
                                var _ = f.length
                                    ? f.slice(0, p).map(function(e) {
                                          return r.a.createElement(c.a, {
                                              includeOperationId: !0,
                                              operationId: e.id,
                                              style: C,
                                              key: e.id,
                                              op: e.op,
                                              result: e.result,
                                              block: e.block_num,
                                              current: m,
                                              hideFee: !0,
                                              inverted: !1,
                                              hideOpLabel: n,
                                              fullDate: !0
                                          });
                                      })
                                    : [
                                          r.a.createElement(
                                              "tr",
                                              {key: "no_recent"},
                                              r.a.createElement(
                                                  "td",
                                                  {colSpan: n ? "2" : "3"},
                                                  r.a.createElement(i.a, {
                                                      content:
                                                          "operation.no_recent"
                                                  })
                                              )
                                          )
                                      ];
                                return (
                                    _.push(
                                        r.a.createElement(
                                            "tr",
                                            {
                                                className: "total-value",
                                                key: "total_value"
                                            },
                                            r.a.createElement("td", {
                                                className: "column-hide-tiny"
                                            }),
                                            r.a.createElement(
                                                "td",
                                                {style: T},
                                                g > 0
                                                    ? r.a.createElement(
                                                          "span",
                                                          null,
                                                          r.a.createElement(
                                                              "a",
                                                              {
                                                                  className:
                                                                      "inline-block",
                                                                  onClick: this._downloadCSV.bind(
                                                                      this
                                                                  ),
                                                                  "data-tip": b.a.translate(
                                                                      "transaction.csv_tip"
                                                                  ),
                                                                  "data-place":
                                                                      "bottom"
                                                              },
                                                              r.a.createElement(
                                                                  v.a,
                                                                  {
                                                                      name:
                                                                          "excel",
                                                                      title:
                                                                          "icons.excel",
                                                                      className:
                                                                          "icon-14px"
                                                                  }
                                                              )
                                                          )
                                                      )
                                                    : null
                                            ),
                                            r.a.createElement(
                                                "td",
                                                {style: {textAlign: "center"}},
                                                " ",
                                                (this.props.showMore &&
                                                    g > this.props.limit) ||
                                                p < g
                                                    ? r.a.createElement(
                                                          "a",
                                                          {
                                                              onClick: this._onIncreaseLimit.bind(
                                                                  this
                                                              )
                                                          },
                                                          r.a.createElement(
                                                              v.a,
                                                              {
                                                                  name:
                                                                      "chevron-down",
                                                                  title:
                                                                      "icons.chevron_down.transactions",
                                                                  className:
                                                                      "icon-14px"
                                                              }
                                                          )
                                                      )
                                                    : null
                                            )
                                        )
                                    ),
                                    r.a.createElement(
                                        "div",
                                        {
                                            className:
                                                "recent-transactions no-overflow",
                                            style: s
                                        },
                                        r.a.createElement(
                                            "div",
                                            {className: "generic-bordered-box"},
                                            this.props.dashboard
                                                ? null
                                                : r.a.createElement(
                                                      "div",
                                                      {ref: "header"},
                                                      r.a.createElement(
                                                          "div",
                                                          {
                                                              className:
                                                                  "block-content-header"
                                                          },
                                                          r.a.createElement(
                                                              "span",
                                                              null,
                                                              this.props.title
                                                                  ? this.props
                                                                        .title
                                                                  : r.a.createElement(
                                                                        i.a,
                                                                        {
                                                                            content:
                                                                                "account.recent"
                                                                        }
                                                                    )
                                                          )
                                                      )
                                                  ),
                                            r.a.createElement(
                                                "div",
                                                {className: "header-selector"},
                                                r.a.createElement(
                                                    "div",
                                                    {className: "selector"},
                                                    r.a.createElement(
                                                        "div",
                                                        {
                                                            className: E()(
                                                                "inline-block"
                                                            )
                                                        },
                                                        this.props.showFilters
                                                            ? r.a.createElement(
                                                                  "select",
                                                                  {
                                                                      "data-place":
                                                                          "left",
                                                                      "data-tip": b.a.translate(
                                                                          "tooltip.filter_ops"
                                                                      ),
                                                                      style: {
                                                                          paddingTop: 5,
                                                                          width:
                                                                              "auto"
                                                                      },
                                                                      className:
                                                                          "bts-select no-margin",
                                                                      value: this
                                                                          .state
                                                                          .filter,
                                                                      onChange: this._onChangeFilter.bind(
                                                                          this
                                                                      )
                                                                  },
                                                                  y
                                                              )
                                                            : null
                                                    )
                                                )
                                            ),
                                            r.a.createElement(
                                                "div",
                                                {
                                                    className:
                                                        "box-content grid-block no-margin",
                                                    style: this.props.fullHeight
                                                        ? null
                                                        : {maxHeight: l - h},
                                                    ref: "transactions"
                                                },
                                                r.a.createElement(
                                                    "table",
                                                    {
                                                        className:
                                                            "table table-striped " +
                                                            (n
                                                                ? "compact"
                                                                : "") +
                                                            (this.props
                                                                .dashboard
                                                                ? " dashboard-table table-hover"
                                                                : "")
                                                    },
                                                    r.a.createElement(
                                                        "thead",
                                                        null,
                                                        r.a.createElement(
                                                            "tr",
                                                            null,
                                                            r.a.createElement(
                                                                "th",
                                                                {
                                                                    className:
                                                                        "column-hide-tiny",
                                                                    style: C
                                                                },
                                                                r.a.createElement(
                                                                    i.a,
                                                                    {
                                                                        content:
                                                                            "account.transactions.id"
                                                                    }
                                                                )
                                                            ),
                                                            r.a.createElement(
                                                                "th",
                                                                {
                                                                    className:
                                                                        "column-hide-tiny",
                                                                    style: C
                                                                },
                                                                r.a.createElement(
                                                                    i.a,
                                                                    {
                                                                        content:
                                                                            "account.transactions.type"
                                                                    }
                                                                )
                                                            ),
                                                            r.a.createElement(
                                                                "th",
                                                                {style: C},
                                                                r.a.createElement(
                                                                    i.a,
                                                                    {
                                                                        content:
                                                                            "account.transactions.info"
                                                                    }
                                                                )
                                                            ),
                                                            r.a.createElement(
                                                                "th",
                                                                {style: C},
                                                                r.a.createElement(
                                                                    i.a,
                                                                    {
                                                                        content:
                                                                            "account.transactions.time"
                                                                    }
                                                                )
                                                            )
                                                        )
                                                    ),
                                                    r.a.createElement(
                                                        d.a,
                                                        {
                                                            component: "tbody",
                                                            transitionName:
                                                                "newrow"
                                                        },
                                                        _
                                                    )
                                                )
                                            ),
                                            g > 0 &&
                                                this.state.csvExport &&
                                                r.a.createElement(
                                                    "div",
                                                    {
                                                        id:
                                                            "csv_export_container",
                                                        style: {display: "none"}
                                                    },
                                                    r.a.createElement(
                                                        "div",
                                                        null,
                                                        r.a.createElement(
                                                            "div",
                                                            null,
                                                            "DATE"
                                                        ),
                                                        r.a.createElement(
                                                            "div",
                                                            null,
                                                            "OPERATION"
                                                        ),
                                                        r.a.createElement(
                                                            "div",
                                                            null,
                                                            "MEMO"
                                                        ),
                                                        r.a.createElement(
                                                            "div",
                                                            null,
                                                            "AMOUNT"
                                                        )
                                                    ),
                                                    f.map(function(e) {
                                                        return r.a.createElement(
                                                            c.a,
                                                            {
                                                                key: e.id,
                                                                op: e.op,
                                                                result:
                                                                    e.result,
                                                                block:
                                                                    e.block_num,
                                                                inverted: !1,
                                                                csvExportMode: !0
                                                            }
                                                        );
                                                    })
                                                )
                                        )
                                    )
                                );
                            }
                        }
                    ]),
                    t
                );
            })();
            (L.propTypes = {
                accountsList: l.a.ChainAccountsList.isRequired,
                compactView: w.a.bool,
                limit: w.a.number,
                maxHeight: w.a.number,
                fullHeight: w.a.bool,
                showFilters: w.a.bool
            }),
                (L.defaultProps = {
                    limit: 25,
                    maxHeight: 500,
                    fullHeight: !1,
                    showFilters: !1
                }),
                (L = Object(u.a)(L));
            var P = (function(e) {
                function t() {
                    return (
                        A(this, t),
                        x(
                            this,
                            (t.__proto__ || Object.getPrototypeOf(t)).apply(
                                this,
                                arguments
                            )
                        )
                    );
                }
                return (
                    O(t, r.a.Component),
                    k(t, [
                        {
                            key: "render",
                            value: function() {
                                return r.a.createElement(
                                    "span",
                                    {className: "wrapper"},
                                    this.props.children(this.props)
                                );
                            }
                        }
                    ]),
                    t
                );
            })();
            (P.propTypes = {
                asset: l.a.ChainAsset.isRequired,
                to: l.a.ChainAccount.isRequired,
                fromAccount: l.a.ChainAccount.isRequired
            }),
                (P.defaultProps = {asset: "1.3.0"}),
                (P = Object(u.a)(P));
        },
        4994: function(e, t, n) {
            "use strict";
            n.r(t);
            var a = n(0),
                r = n.n(a),
                o = n(7),
                i = n.n(o),
                s = n(5),
                c = n(1),
                l = n.n(c),
                u = n(15),
                p = n(8),
                h = n(74),
                d = n(6),
                m = n(13),
                f = n(10),
                g = n(24),
                b = n(12),
                v = n(4),
                y = n(108),
                E = n(14),
                _ = n(3),
                w = n.n(_),
                k = n(16),
                A = n(2),
                x = n.n(A),
                O = (function() {
                    function e(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var a = t[n];
                            (a.enumerable = a.enumerable || !1),
                                (a.configurable = !0),
                                "value" in a && (a.writable = !0),
                                Object.defineProperty(e, a.key, a);
                        }
                    }
                    return function(t, n, a) {
                        return n && e(t.prototype, n), a && e(t, a), t;
                    };
                })();
            function S(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function");
            }
            function C(e, t) {
                if (!e)
                    throw new ReferenceError(
                        "this hasn't been initialised - super() hasn't been called"
                    );
                return !t || ("object" != typeof t && "function" != typeof t)
                    ? e
                    : t;
            }
            function T(e, t) {
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
            var N = (function(e) {
                function t(e) {
                    S(this, t);
                    var n = C(
                            this,
                            (t.__proto__ || Object.getPrototypeOf(t)).call(this)
                        ),
                        a = e.viewSettings.get("marketLookupInput"),
                        r = a ? a.split(":") : [null];
                    r[0], 2 === r.length && r[1];
                    return (
                        (n.state = {
                            inverseSort: e.viewSettings.get(
                                "dashboardSortInverse",
                                !0
                            ),
                            sortBy: e.viewSettings.get("dashboardSort", "star"),
                            dashboardFilter: e.viewSettings.get(
                                "dashboardFilter",
                                ""
                            )
                        }),
                        n
                    );
                }
                return (
                    T(t, r.a.Component),
                    O(t, [
                        {
                            key: "shouldComponentUpdate",
                            value: function(e, t) {
                                return (
                                    !s.a.are_equal_shallow(
                                        e.accounts,
                                        this.props.accounts
                                    ) ||
                                    e.isContactsList !==
                                        this.props.isContactsList ||
                                    e.showMyAccounts !==
                                        this.props.showMyAccounts ||
                                    e.width !== this.props.width ||
                                    e.showIgnored !== this.props.showIgnored ||
                                    e.locked !== this.props.locked ||
                                    e.passwordAccount !==
                                        this.props.passwordAccount ||
                                    !s.a.are_equal_shallow(
                                        e.starredAccounts,
                                        this.props.starredAccounts
                                    ) ||
                                    !s.a.are_equal_shallow(t, this.state)
                                );
                            }
                        },
                        {
                            key: "_onStar",
                            value: function(e, t, n) {
                                n.preventDefault(),
                                    t
                                        ? g.a.removeStarAccount(e)
                                        : g.a.addStarAccount(e);
                            }
                        },
                        {
                            key: "_goAccount",
                            value: function(e, t) {
                                this.context.router.push("/account/" + e),
                                    f.a.changeViewSetting({overviewTab: t});
                            }
                        },
                        {
                            key: "_createAccount",
                            value: function() {
                                this.context.router.push(
                                    "/create-account/wallet"
                                );
                            }
                        },
                        {
                            key: "_onFilter",
                            value: function(e) {
                                this.setState({
                                    dashboardFilter: e.target.value.toLowerCase()
                                }),
                                    f.a.changeViewSetting({
                                        dashboardFilter: e.target.value.toLowerCase()
                                    });
                            }
                        },
                        {
                            key: "_setSort",
                            value: function(e) {
                                var t =
                                    e === this.state.sortBy
                                        ? !this.state.inverseSort
                                        : this.state.inverseSort;
                                this.setState({sortBy: e, inverseSort: t}),
                                    f.a.changeViewSetting({
                                        dashboardSort: e,
                                        dashboardSortInverse: t
                                    });
                            }
                        },
                        {
                            key: "_onAddContact",
                            value: function(e) {
                                g.a.addAccountContact(e);
                            }
                        },
                        {
                            key: "_onRemoveContact",
                            value: function(e) {
                                g.a.removeAccountContact(e);
                            }
                        },
                        {
                            key: "_renderList",
                            value: function(e, t) {
                                var n = this,
                                    a = this.props,
                                    o = a.width,
                                    c = a.starredAccounts,
                                    l = a.isContactsList,
                                    u = a.passwordAccount,
                                    p = this.state,
                                    h = p.dashboardFilter,
                                    d = p.sortBy,
                                    m = p.inverseSort,
                                    f = i.a.List();
                                return e
                                    .filter(function(e) {
                                        if (!e) return !1;
                                        var t = e.get("name"),
                                            a = E.a.isMyAccount(e) || t === u;
                                        return (
                                            !!l || a === n.props.showMyAccounts
                                        );
                                    })
                                    .filter(function(e) {
                                        return (
                                            !!e &&
                                            -1 !==
                                                e
                                                    .get("name")
                                                    .toLowerCase()
                                                    .indexOf(h)
                                        );
                                    })
                                    .sort(function(e, t) {
                                        switch (d) {
                                            case "star":
                                                return (function(e, t, n, a) {
                                                    var r = e.get("name"),
                                                        o = t.get("name"),
                                                        i = a.has(r),
                                                        c = a.has(o);
                                                    return i && !c
                                                        ? n
                                                            ? -1
                                                            : 1
                                                        : c && !i
                                                            ? n
                                                                ? 1
                                                                : -1
                                                            : r > o
                                                                ? n
                                                                    ? 1
                                                                    : -1
                                                                : r < o
                                                                    ? n
                                                                        ? -1
                                                                        : 1
                                                                    : s.a.sortText(
                                                                          r,
                                                                          o,
                                                                          !n
                                                                      );
                                                })(e, t, m, c);
                                            case "name":
                                                return s.a.sortText(
                                                    e.get("name"),
                                                    t.get("name"),
                                                    m
                                                );
                                        }
                                    })
                                    .map(function(e) {
                                        if (e) {
                                            var a = {},
                                                i = {},
                                                s = {};
                                            f = f.clear();
                                            var p = e.get("name"),
                                                h =
                                                    e.get(
                                                        "lifetime_referrer_name"
                                                    ) === p;
                                            e.get("orders") &&
                                                e
                                                    .get("orders")
                                                    .forEach(function(e, t) {
                                                        var n = v.b.getObject(
                                                            e
                                                        );
                                                        if (n) {
                                                            var a = n.getIn([
                                                                "sell_price",
                                                                "base",
                                                                "asset_id"
                                                            ]);
                                                            s[a]
                                                                ? (s[
                                                                      a
                                                                  ] += parseInt(
                                                                      n.get(
                                                                          "for_sale"
                                                                      ),
                                                                      10
                                                                  ))
                                                                : (s[
                                                                      a
                                                                  ] = parseInt(
                                                                      n.get(
                                                                          "for_sale"
                                                                      ),
                                                                      10
                                                                  ));
                                                        }
                                                    }),
                                                e.get("call_orders") &&
                                                    e
                                                        .get("call_orders")
                                                        .forEach(function(
                                                            e,
                                                            t
                                                        ) {
                                                            var n = v.b.getObject(
                                                                e
                                                            );
                                                            if (n) {
                                                                var r = n.getIn(
                                                                    [
                                                                        "call_price",
                                                                        "base",
                                                                        "asset_id"
                                                                    ]
                                                                );
                                                                a[r]
                                                                    ? (a[
                                                                          r
                                                                      ] += parseInt(
                                                                          n.get(
                                                                              "collateral"
                                                                          ),
                                                                          10
                                                                      ))
                                                                    : (a[
                                                                          r
                                                                      ] = parseInt(
                                                                          n.get(
                                                                              "collateral"
                                                                          ),
                                                                          10
                                                                      ));
                                                                var o = n.getIn(
                                                                    [
                                                                        "call_price",
                                                                        "quote",
                                                                        "asset_id"
                                                                    ]
                                                                );
                                                                i[o]
                                                                    ? (i[
                                                                          o
                                                                      ] += parseInt(
                                                                          n.get(
                                                                              "debt"
                                                                          ),
                                                                          10
                                                                      ))
                                                                    : (i[
                                                                          o
                                                                      ] = parseInt(
                                                                          n.get(
                                                                              "debt"
                                                                          ),
                                                                          10
                                                                      ));
                                                            }
                                                        });
                                            var d = e.get("balances");
                                            e.get("balances") &&
                                                d.forEach(function(e) {
                                                    var t = v.b.getObject(e);
                                                    if (!t || !t.get("balance"))
                                                        return null;
                                                    f = f.push(e);
                                                });
                                            var m =
                                                    E.a.isMyAccount(e) ||
                                                    p === u,
                                                g = c.has(p),
                                                _ = g
                                                    ? "gold-star"
                                                    : "grey-star";
                                            return r.a.createElement(
                                                "tr",
                                                {key: p},
                                                r.a.createElement(
                                                    "td",
                                                    {
                                                        className: "clickable",
                                                        onClick: n._onStar.bind(
                                                            n,
                                                            p,
                                                            g
                                                        )
                                                    },
                                                    r.a.createElement(b.a, {
                                                        className: _,
                                                        name: "fi-star",
                                                        title:
                                                            "icons.fi_star.account"
                                                    })
                                                ),
                                                l
                                                    ? (t &&
                                                          r.a.createElement(
                                                              "td",
                                                              {
                                                                  onClick: n._onAddContact.bind(
                                                                      n,
                                                                      p
                                                                  )
                                                              },
                                                              r.a.createElement(
                                                                  b.a,
                                                                  {
                                                                      name:
                                                                          "plus-circle",
                                                                      title:
                                                                          "icons.plus_circle.add_contact"
                                                                  }
                                                              )
                                                          )) ||
                                                      r.a.createElement(
                                                          "td",
                                                          {
                                                              onClick: n._onRemoveContact.bind(
                                                                  n,
                                                                  p
                                                              )
                                                          },
                                                          r.a.createElement(
                                                              b.a,
                                                              {
                                                                  name:
                                                                      "minus-circle",
                                                                  title:
                                                                      "icons.minus_circle.remove_contact"
                                                              }
                                                          )
                                                      )
                                                    : null,
                                                r.a.createElement(
                                                    "td",
                                                    {
                                                        style: {
                                                            textAlign: "left"
                                                        }
                                                    },
                                                    e.get("id")
                                                ),
                                                r.a.createElement(
                                                    "td",
                                                    {
                                                        style: {
                                                            textAlign: "left",
                                                            paddingLeft: 10
                                                        },
                                                        onClick: n._goAccount.bind(
                                                            n,
                                                            p,
                                                            0
                                                        ),
                                                        className:
                                                            "clickable" +
                                                            (m
                                                                ? " my-account"
                                                                : "")
                                                    },
                                                    r.a.createElement(
                                                        "span",
                                                        {
                                                            className: h
                                                                ? "lifetime"
                                                                : ""
                                                        },
                                                        p
                                                    )
                                                ),
                                                r.a.createElement(
                                                    "td",
                                                    {
                                                        className: "clickable",
                                                        onClick: n._goAccount.bind(
                                                            n,
                                                            p,
                                                            1
                                                        ),
                                                        style: {
                                                            textAlign: "right"
                                                        }
                                                    },
                                                    r.a.createElement(y.a, {
                                                        noTip: !0,
                                                        balances: [],
                                                        openOrders: s
                                                    })
                                                ),
                                                o >= 750
                                                    ? r.a.createElement(
                                                          "td",
                                                          {
                                                              className:
                                                                  "clickable",
                                                              onClick: n._goAccount.bind(
                                                                  n,
                                                                  p,
                                                                  2
                                                              ),
                                                              style: {
                                                                  textAlign:
                                                                      "right"
                                                              }
                                                          },
                                                          r.a.createElement(
                                                              y.a,
                                                              {
                                                                  noTip: !0,
                                                                  balances: [],
                                                                  collateral: a
                                                              }
                                                          )
                                                      )
                                                    : null,
                                                o >= 1200
                                                    ? r.a.createElement(
                                                          "td",
                                                          {
                                                              className:
                                                                  "clickable",
                                                              onClick: n._goAccount.bind(
                                                                  n,
                                                                  p,
                                                                  2
                                                              ),
                                                              style: {
                                                                  textAlign:
                                                                      "right"
                                                              }
                                                          },
                                                          r.a.createElement(
                                                              y.a,
                                                              {
                                                                  noTip: !0,
                                                                  balances: [],
                                                                  debt: i
                                                              }
                                                          )
                                                      )
                                                    : null,
                                                r.a.createElement(
                                                    "td",
                                                    {
                                                        className: "clickable",
                                                        onClick: n._goAccount.bind(
                                                            n,
                                                            p,
                                                            0
                                                        ),
                                                        style: {
                                                            textAlign: "right"
                                                        }
                                                    },
                                                    r.a.createElement(y.a, {
                                                        noTip: !0,
                                                        balances: f,
                                                        collateral: a,
                                                        debt: i,
                                                        openOrders: s
                                                    })
                                                )
                                            );
                                        }
                                    });
                            }
                        },
                        {
                            key: "render",
                            value: function() {
                                var e = this.props,
                                    t = e.width,
                                    n = e.showIgnored,
                                    a = e.isContactsList,
                                    o = this.state.dashboardFilter,
                                    i = this._renderList(this.props.accounts),
                                    s = this._renderList(
                                        this.props.ignoredAccounts,
                                        !0
                                    ),
                                    c = a
                                        ? w.a.translate(
                                              "explorer.accounts.filter_contacts"
                                          )
                                        : w.a.translate(
                                              "explorer.accounts.filter"
                                          );
                                c += "...";
                                var u = !!k.a.getWallet();
                                return r.a.createElement(
                                    "div",
                                    {style: this.props.style},
                                    this.props.compact
                                        ? null
                                        : r.a.createElement(
                                              "section",
                                              {
                                                  style: {
                                                      paddingTop: "1rem",
                                                      paddingLeft: "2rem"
                                                  }
                                              },
                                              r.a.createElement("input", {
                                                  placeholder: c,
                                                  style: {
                                                      maxWidth: "20rem",
                                                      display: "inline-block"
                                                  },
                                                  type: "text",
                                                  value: o,
                                                  onChange: this._onFilter.bind(
                                                      this
                                                  )
                                              }),
                                              u && !a
                                                  ? r.a.createElement(
                                                        "div",
                                                        {
                                                            onClick: this._createAccount.bind(
                                                                this
                                                            ),
                                                            style: {
                                                                display:
                                                                    "inline-block",
                                                                marginLeft: 5,
                                                                marginBottom:
                                                                    "1rem"
                                                            },
                                                            className:
                                                                "button small"
                                                        },
                                                        r.a.createElement(l.a, {
                                                            content:
                                                                "header.create_account"
                                                        })
                                                    )
                                                  : null,
                                              s && s.length
                                                  ? r.a.createElement(
                                                        "div",
                                                        {
                                                            onClick: this.props
                                                                .onToggleIgnored,
                                                            style: {
                                                                display:
                                                                    "inline-block",
                                                                float: "right",
                                                                marginRight:
                                                                    "20px"
                                                            },
                                                            className:
                                                                "button small"
                                                        },
                                                        r.a.createElement(l.a, {
                                                            content:
                                                                "account." +
                                                                (this.props
                                                                    .showIgnored
                                                                    ? "hide_ignored"
                                                                    : "show_ignored")
                                                        })
                                                    )
                                                  : null
                                          ),
                                    r.a.createElement(
                                        "table",
                                        {
                                            className:
                                                "table table-hover dashboard-table",
                                            style: {fontSize: "0.85rem"}
                                        },
                                        this.props.compact
                                            ? null
                                            : r.a.createElement(
                                                  "thead",
                                                  null,
                                                  r.a.createElement(
                                                      "tr",
                                                      null,
                                                      r.a.createElement(
                                                          "th",
                                                          {
                                                              onClick: this._setSort.bind(
                                                                  this,
                                                                  "star"
                                                              ),
                                                              className:
                                                                  "clickable"
                                                          },
                                                          r.a.createElement(
                                                              b.a,
                                                              {
                                                                  className:
                                                                      "grey-star",
                                                                  name:
                                                                      "fi-star",
                                                                  title:
                                                                      "icons.fi_star.sort_accounts"
                                                              }
                                                          )
                                                      ),
                                                      a
                                                          ? r.a.createElement(
                                                                "th",
                                                                null,
                                                                r.a.createElement(
                                                                    b.a,
                                                                    {
                                                                        name:
                                                                            "user",
                                                                        title:
                                                                            "icons.user.account"
                                                                    }
                                                                )
                                                            )
                                                          : null,
                                                      r.a.createElement(
                                                          "th",
                                                          {
                                                              style: {
                                                                  textAlign:
                                                                      "left"
                                                              }
                                                          },
                                                          "ID"
                                                      ),
                                                      r.a.createElement(
                                                          "th",
                                                          {
                                                              style: {
                                                                  textAlign:
                                                                      "left",
                                                                  paddingLeft: 10
                                                              },
                                                              onClick: this._setSort.bind(
                                                                  this,
                                                                  "name"
                                                              ),
                                                              className:
                                                                  "clickable"
                                                          },
                                                          r.a.createElement(
                                                              l.a,
                                                              {
                                                                  content:
                                                                      "header.account"
                                                              }
                                                          )
                                                      ),
                                                      r.a.createElement(
                                                          "th",
                                                          {
                                                              style: {
                                                                  textAlign:
                                                                      "right"
                                                              }
                                                          },
                                                          r.a.createElement(
                                                              l.a,
                                                              {
                                                                  content:
                                                                      "account.open_orders"
                                                              }
                                                          )
                                                      ),
                                                      t >= 750
                                                          ? r.a.createElement(
                                                                "th",
                                                                {
                                                                    style: {
                                                                        textAlign:
                                                                            "right"
                                                                    }
                                                                },
                                                                r.a.createElement(
                                                                    l.a,
                                                                    {
                                                                        content:
                                                                            "account.as_collateral"
                                                                    }
                                                                )
                                                            )
                                                          : null,
                                                      t >= 1200
                                                          ? r.a.createElement(
                                                                "th",
                                                                {
                                                                    style: {
                                                                        textAlign:
                                                                            "right"
                                                                    }
                                                                },
                                                                r.a.createElement(
                                                                    l.a,
                                                                    {
                                                                        content:
                                                                            "transaction.borrow_amount"
                                                                    }
                                                                )
                                                            )
                                                          : null,
                                                      r.a.createElement(
                                                          "th",
                                                          {
                                                              style: {
                                                                  textAlign:
                                                                      "right",
                                                                  marginRight: 20
                                                              }
                                                          },
                                                          r.a.createElement(
                                                              l.a,
                                                              {
                                                                  content:
                                                                      "account.total_value"
                                                              }
                                                          )
                                                      )
                                                  )
                                              ),
                                        r.a.createElement(
                                            "tbody",
                                            null,
                                            i,
                                            n && s.length
                                                ? r.a.createElement(
                                                      "tr",
                                                      {
                                                          className:
                                                              "dashboard-table--hiddenAccounts",
                                                          style: {
                                                              backgroundColor:
                                                                  "transparent"
                                                          },
                                                          key: "hidden"
                                                      },
                                                      r.a.createElement(
                                                          "td",
                                                          {colSpan: "8"},
                                                          w.a.translate(
                                                              "account.hidden_accounts_row"
                                                          ),
                                                          ":"
                                                      )
                                                  )
                                                : null,
                                            n && s
                                        )
                                    )
                                );
                            }
                        }
                    ]),
                    t
                );
            })();
            (N.contextTypes = {router: x.a.object.isRequired}),
                (N.propTypes = {
                    accounts: d.a.ChainAccountsList.isRequired,
                    ignoredAccounts: d.a.ChainAccountsList
                }),
                (N.defaultProps = {width: 2e3, compact: !1}),
                (N = Object(m.a)(N));
            var j = (function(e) {
                    function t() {
                        return (
                            S(this, t),
                            C(
                                this,
                                (t.__proto__ || Object.getPrototypeOf(t)).apply(
                                    this,
                                    arguments
                                )
                            )
                        );
                    }
                    return (
                        T(t, r.a.Component),
                        O(t, [
                            {
                                key: "render",
                                value: function() {
                                    return r.a.createElement(N, this.props);
                                }
                            }
                        ]),
                        t
                    );
                })(),
                L = Object(u.connect)(j, {
                    listenTo: function() {
                        return [p.a, h.a, E.a];
                    },
                    getProps: function() {
                        return {
                            locked: h.a.getState().locked,
                            starredAccounts: E.a.getState().starredAccounts,
                            viewSettings: p.a.getState().viewSettings
                        };
                    }
                }),
                P = n(129),
                I = n(37),
                H = n(11),
                R = n(33),
                D = n(287),
                F = n(45),
                M = n(131),
                q = n.n(M),
                B = n(117),
                V = (function() {
                    function e(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var a = t[n];
                            (a.enumerable = a.enumerable || !1),
                                (a.configurable = !0),
                                "value" in a && (a.writable = !0),
                                Object.defineProperty(e, a.key, a);
                        }
                    }
                    return function(t, n, a) {
                        return n && e(t.prototype, n), a && e(t, a), t;
                    };
                })();
            var W = n(457),
                U = function(e) {
                    var t = e.flag,
                        n = e.width,
                        a = void 0 === n ? 50 : n,
                        o = e.height,
                        i = void 0 === o ? 50 : o;
                    return r.a.createElement("img", {
                        height: i,
                        width: a,
                        src: "/language-dropdown/" + t.toUpperCase() + ".png"
                    });
                },
                z = (function(e) {
                    function t(e) {
                        !(function(e, t) {
                            if (!(e instanceof t))
                                throw new TypeError(
                                    "Cannot call a class as a function"
                                );
                        })(this, t);
                        var n = (function(e, t) {
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
                            (t.__proto__ || Object.getPrototypeOf(t)).call(
                                this,
                                e
                            )
                        );
                        return (
                            (n.state = {
                                step: 1,
                                locales: p.a.getState().defaults.locale,
                                currentLocale: p.a
                                    .getState()
                                    .settings.get("locale")
                            }),
                            n
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
                        V(t, [
                            {
                                key: "componentDidUpdate",
                                value: function() {
                                    var e = E.a.getMyAccounts(),
                                        t = r.a.Children.count(
                                            this.props.children
                                        );
                                    this.props.router &&
                                        Array.isArray(e) &&
                                        0 !== e.length &&
                                        0 === t &&
                                        this.props.router.push(
                                            "/account/" +
                                                this.props.currentAccount
                                        );
                                }
                            },
                            {
                                key: "componentWillMount",
                                value: function() {
                                    var e = this;
                                    Object(D.a)(function(t) {
                                        e.setState({incognito: t});
                                    });
                                }
                            },
                            {
                                key: "onSelect",
                                value: function(e) {
                                    this.props.router.push(
                                        "/create-account/" + e
                                    );
                                }
                            },
                            {
                                key: "render",
                                value: function() {
                                    var e = this,
                                        t = n(3),
                                        a = r.a.Children.count(
                                            this.props.children
                                        ),
                                        o = r.a.createElement(
                                            q.a,
                                            null,
                                            r.a.createElement(
                                                q.a.Button,
                                                {
                                                    title: "",
                                                    style: {width: "64px"}
                                                },
                                                r.a.createElement(
                                                    "a",
                                                    {
                                                        style: {
                                                            padding: "1rem",
                                                            border: "none"
                                                        },
                                                        className:
                                                            "button arrow-down"
                                                    },
                                                    r.a.createElement(U, {
                                                        flag: this.state
                                                            .currentLocale
                                                    })
                                                )
                                            ),
                                            r.a.createElement(
                                                q.a.Content,
                                                null,
                                                r.a.createElement(
                                                    "ul",
                                                    {
                                                        className:
                                                            "no-first-element-top-border"
                                                    },
                                                    this.state.locales.map(
                                                        function(t) {
                                                            return r.a.createElement(
                                                                "li",
                                                                {key: t},
                                                                r.a.createElement(
                                                                    "a",
                                                                    {
                                                                        onClick: function(
                                                                            n
                                                                        ) {
                                                                            n.preventDefault(),
                                                                                B.a.switchLocale(
                                                                                    t
                                                                                ),
                                                                                e.setState(
                                                                                    {
                                                                                        currentLocale: t
                                                                                    }
                                                                                );
                                                                        }
                                                                    },
                                                                    r.a.createElement(
                                                                        "div",
                                                                        {
                                                                            className:
                                                                                "table-cell"
                                                                        },
                                                                        r.a.createElement(
                                                                            U,
                                                                            {
                                                                                width:
                                                                                    "20",
                                                                                height:
                                                                                    "20",
                                                                                flag: t
                                                                            }
                                                                        )
                                                                    ),
                                                                    r.a.createElement(
                                                                        "div",
                                                                        {
                                                                            className:
                                                                                "table-cell",
                                                                            style: {
                                                                                paddingLeft: 10
                                                                            }
                                                                        },
                                                                        r.a.createElement(
                                                                            l.a,
                                                                            {
                                                                                content:
                                                                                    "languages." +
                                                                                    t
                                                                            }
                                                                        )
                                                                    )
                                                                )
                                                            );
                                                        }
                                                    )
                                                )
                                            )
                                        );
                                    return r.a.createElement(
                                        "div",
                                        {className: "grid-block align-center"},
                                        r.a.createElement(
                                            "div",
                                            {
                                                className:
                                                    "grid-block shrink vertical"
                                            },
                                            r.a.createElement(
                                                "div",
                                                {
                                                    className:
                                                        "grid-content shrink text-center account-creation"
                                                },
                                                r.a.createElement(
                                                    "div",
                                                    null,
                                                    r.a.createElement("img", {
                                                        src: W
                                                    })
                                                ),
                                                0 == a
                                                    ? null
                                                    : r.a.createElement(
                                                          "div",
                                                          null,
                                                          r.a.createElement(
                                                              l.a,
                                                              {
                                                                  content:
                                                                      "header.create_account",
                                                                  component:
                                                                      "h4"
                                                              }
                                                          )
                                                      ),
                                                1 == a
                                                    ? null
                                                    : r.a.createElement(
                                                          "div",
                                                          null,
                                                          r.a.createElement(
                                                              l.a,
                                                              {
                                                                  content:
                                                                      "account.intro_text_title",
                                                                  component:
                                                                      "h4"
                                                              }
                                                          ),
                                                          r.a.createElement(
                                                              l.a,
                                                              {
                                                                  unsafe: !0,
                                                                  content:
                                                                      "account.intro_text_1",
                                                                  component: "p"
                                                              }
                                                          ),
                                                          r.a.createElement(
                                                              "div",
                                                              {
                                                                  className:
                                                                      "shrink text-center"
                                                              },
                                                              r.a.createElement(
                                                                  "div",
                                                                  {
                                                                      className:
                                                                          "grp-menu-item overflow-visible account-drop-down"
                                                                  },
                                                                  r.a.createElement(
                                                                      "div",
                                                                      {
                                                                          className:
                                                                              "grp-menu-item overflow-visible",
                                                                          style: {
                                                                              margin:
                                                                                  "0 auto"
                                                                          },
                                                                          "data-intro": t.translate(
                                                                              "walkthrough.language_flag"
                                                                          )
                                                                      },
                                                                      o
                                                                  )
                                                              )
                                                          )
                                                      ),
                                                a
                                                    ? null
                                                    : r.a.createElement(
                                                          "div",
                                                          {
                                                              className:
                                                                  "grid-block account-login-options"
                                                          },
                                                          r.a.createElement(
                                                              H.b,
                                                              {
                                                                  id:
                                                                      "account_login_button",
                                                                  to:
                                                                      "/create-account/password",
                                                                  className:
                                                                      "button primary",
                                                                  "data-intro": t.translate(
                                                                      "walkthrough.create_cloud_wallet"
                                                                  )
                                                              },
                                                              r.a.createElement(
                                                                  l.a,
                                                                  {
                                                                      content:
                                                                          "header.create_account"
                                                                  }
                                                              )
                                                          ),
                                                          r.a.createElement(
                                                              "span",
                                                              {
                                                                  className:
                                                                      "button hollow primary",
                                                                  onClick: function() {
                                                                      f.a.changeSetting(
                                                                          {
                                                                              setting:
                                                                                  "passwordLogin",
                                                                              value: !0
                                                                          }
                                                                      ),
                                                                          F.a.unlock.defer();
                                                                  }
                                                              },
                                                              r.a.createElement(
                                                                  l.a,
                                                                  {
                                                                      content:
                                                                          "header.unlock_short"
                                                                  }
                                                              )
                                                          )
                                                      ),
                                                a
                                                    ? null
                                                    : r.a.createElement(
                                                          "div",
                                                          {
                                                              className:
                                                                  "additional-account-options"
                                                          },
                                                          r.a.createElement(
                                                              "h5",
                                                              {
                                                                  style: {
                                                                      textAlign:
                                                                          "center"
                                                                  }
                                                              },
                                                              r.a.createElement(
                                                                  R.a,
                                                                  {
                                                                      string:
                                                                          "account.optional.formatter",
                                                                      keys: [
                                                                          {
                                                                              type:
                                                                                  "link",
                                                                              value:
                                                                                  "/wallet/backup/restore",
                                                                              translation:
                                                                                  "account.optional.restore_link",
                                                                              dataIntro: t.translate(
                                                                                  "walkthrough.restore_account"
                                                                              ),
                                                                              arg:
                                                                                  "restore_link"
                                                                          },
                                                                          {
                                                                              type:
                                                                                  "link",
                                                                              value:
                                                                                  "/create-account/wallet",
                                                                              translation:
                                                                                  "account.optional.restore_form",
                                                                              dataIntro: t.translate(
                                                                                  "walkthrough.create_local_wallet"
                                                                              ),
                                                                              arg:
                                                                                  "restore_form"
                                                                          }
                                                                      ]
                                                                  }
                                                              )
                                                          )
                                                      ),
                                                this.props.children
                                            )
                                        )
                                    );
                                }
                            }
                        ]),
                        t
                    );
                })(),
                J = Object(u.connect)(z, {
                    listenTo: function() {
                        return [E.a];
                    },
                    getProps: function() {
                        return {
                            currentAccount:
                                E.a.getState().currentAccount ||
                                E.a.getState().passwordAccount
                        };
                    }
                }),
                Y = n(31),
                G = n(72),
                K = n(51),
                Q = n.n(K),
                X =
                    Object.assign ||
                    function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = arguments[t];
                            for (var a in n)
                                Object.prototype.hasOwnProperty.call(n, a) &&
                                    (e[a] = n[a]);
                        }
                        return e;
                    },
                Z = (function() {
                    function e(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var a = t[n];
                            (a.enumerable = a.enumerable || !1),
                                (a.configurable = !0),
                                "value" in a && (a.writable = !0),
                                Object.defineProperty(e, a.key, a);
                        }
                    }
                    return function(t, n, a) {
                        return n && e(t.prototype, n), a && e(t, a), t;
                    };
                })();
            function $(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function");
            }
            function ee(e, t) {
                if (!e)
                    throw new ReferenceError(
                        "this hasn't been initialised - super() hasn't been called"
                    );
                return !t || ("object" != typeof t && "function" != typeof t)
                    ? e
                    : t;
            }
            function te(e, t) {
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
            var ne = (function(e) {
                    function t() {
                        return (
                            $(this, t),
                            ee(
                                this,
                                (t.__proto__ || Object.getPrototypeOf(t)).apply(
                                    this,
                                    arguments
                                )
                            )
                        );
                    }
                    return (
                        te(t, r.a.Component),
                        Z(t, [
                            {
                                key: "render",
                                value: function() {
                                    return r.a.createElement(
                                        Q.a,
                                        {
                                            stores: [E.a, p.a, Y.a],
                                            inject: {
                                                contacts: function() {
                                                    return E.a.getState()
                                                        .accountContacts;
                                                },
                                                myActiveAccounts: function() {
                                                    return E.a.getState()
                                                        .myActiveAccounts;
                                                },
                                                myHiddenAccounts: function() {
                                                    return E.a.getState()
                                                        .myHiddenAccounts;
                                                },
                                                accountsReady: function() {
                                                    return (
                                                        E.a.getState()
                                                            .accountsLoaded &&
                                                        E.a.getState()
                                                            .refsLoaded
                                                    );
                                                },
                                                passwordAccount: function() {
                                                    return E.a.getState()
                                                        .passwordAccount;
                                                },
                                                lowVolumeMarkets: function() {
                                                    return Y.a.getState()
                                                        .lowVolumeMarkets;
                                                },
                                                currentEntry: p.a
                                                    .getState()
                                                    .viewSettings.get(
                                                        "dashboardEntry",
                                                        "accounts"
                                                    )
                                            }
                                        },
                                        r.a.createElement(ae, this.props)
                                    );
                                }
                            }
                        ]),
                        t
                    );
                })(),
                ae = (function(e) {
                    function t(e) {
                        $(this, t);
                        var n = ee(
                            this,
                            (t.__proto__ || Object.getPrototypeOf(t)).call(this)
                        );
                        return (
                            (n.state = {
                                width: null,
                                showIgnored: !1,
                                currentEntry: e.currentEntry
                            }),
                            (n._setDimensions = n._setDimensions.bind(n)),
                            n
                        );
                    }
                    return (
                        te(t, r.a.Component),
                        Z(t, [
                            {
                                key: "componentDidMount",
                                value: function() {
                                    this._setDimensions(),
                                        window.addEventListener(
                                            "resize",
                                            this._setDimensions,
                                            {capture: !1, passive: !0}
                                        );
                                }
                            },
                            {
                                key: "shouldComponentUpdate",
                                value: function(e, t) {
                                    return (
                                        e.myActiveAccounts !==
                                            this.props.myActiveAccounts ||
                                        e.contacts !== this.props.contacts ||
                                        e.ignoredAccounts !==
                                            this.props.ignoredAccounts ||
                                        e.passwordAccount !==
                                            this.props.passwordAccount ||
                                        t.width !== this.state.width ||
                                        e.accountsReady !==
                                            this.props.accountsReady ||
                                        t.showIgnored !==
                                            this.state.showIgnored ||
                                        t.currentEntry !==
                                            this.state.currentEntry
                                    );
                                }
                            },
                            {
                                key: "componentWillUnmount",
                                value: function() {
                                    window.removeEventListener(
                                        "resize",
                                        this._setDimensions
                                    );
                                }
                            },
                            {
                                key: "_setDimensions",
                                value: function() {
                                    var e = window.innerWidth;
                                    e !== this.state.width &&
                                        this.setState({width: e});
                                }
                            },
                            {
                                key: "_onToggleIgnored",
                                value: function() {
                                    this.setState({
                                        showIgnored: !this.state.showIgnored
                                    });
                                }
                            },
                            {
                                key: "_onSwitchType",
                                value: function(e) {
                                    this.setState({currentEntry: e}),
                                        f.a.changeViewSetting({
                                            dashboardEntry: e
                                        });
                                }
                            },
                            {
                                key: "render",
                                value: function() {
                                    var e = this.props,
                                        t = e.myActiveAccounts,
                                        n = e.myHiddenAccounts,
                                        a = e.accountsReady,
                                        o = e.passwordAccount,
                                        s = this.state,
                                        c = s.width,
                                        l = s.showIgnored;
                                    o && !t.has(o) && (t = t.add(o));
                                    var u = t.toArray().sort();
                                    o && -1 === u.indexOf(o) && u.push(o);
                                    var p = n.toArray().sort(),
                                        h = t.size + n.size + (o ? 1 : 0);
                                    if (!a) return r.a.createElement(I.a, null);
                                    if (!h) return r.a.createElement(J, null);
                                    var d = this.props.contacts.toArray();
                                    return r.a.createElement(
                                        "div",
                                        {
                                            ref: "wrapper",
                                            className:
                                                "grid-block page-layout vertical"
                                        },
                                        r.a.createElement(
                                            "div",
                                            {
                                                ref: "container",
                                                className:
                                                    "tabs-container generic-bordered-box"
                                            },
                                            r.a.createElement(
                                                G.b,
                                                {
                                                    setting: "accountTab",
                                                    className: "account-tabs",
                                                    defaultActiveTab: 1,
                                                    segmented: !1,
                                                    tabsClass:
                                                        "account-overview no-padding bordered-header content-block"
                                                },
                                                r.a.createElement(
                                                    G.a,
                                                    {title: "account.accounts"},
                                                    r.a.createElement(
                                                        "div",
                                                        {
                                                            className:
                                                                "generic-bordered-box"
                                                        },
                                                        r.a.createElement(
                                                            "div",
                                                            {
                                                                className:
                                                                    "box-content"
                                                            },
                                                            r.a.createElement(
                                                                L,
                                                                {
                                                                    accounts: i.a.List(
                                                                        u
                                                                    ),
                                                                    ignoredAccounts: i.a.List(
                                                                        p
                                                                    ),
                                                                    width: c,
                                                                    onToggleIgnored: this._onToggleIgnored.bind(
                                                                        this
                                                                    ),
                                                                    showIgnored: l,
                                                                    showMyAccounts: !0
                                                                }
                                                            )
                                                        )
                                                    )
                                                ),
                                                r.a.createElement(
                                                    G.a,
                                                    {title: "account.contacts"},
                                                    r.a.createElement(
                                                        "div",
                                                        {
                                                            className:
                                                                "generic-bordered-box"
                                                        },
                                                        r.a.createElement(
                                                            "div",
                                                            {
                                                                className:
                                                                    "box-content"
                                                            },
                                                            r.a.createElement(
                                                                L,
                                                                {
                                                                    accounts: d,
                                                                    passwordAccount: o,
                                                                    ignoredAccounts: i.a.List(
                                                                        p
                                                                    ),
                                                                    width: c,
                                                                    onToggleIgnored: this._onToggleIgnored.bind(
                                                                        this
                                                                    ),
                                                                    showIgnored: l,
                                                                    isContactsList: !0
                                                                }
                                                            )
                                                        )
                                                    )
                                                ),
                                                r.a.createElement(
                                                    G.a,
                                                    {title: "account.recent"},
                                                    r.a.createElement(P.a, {
                                                        accountsList: t,
                                                        limit: 10,
                                                        compactView: !1,
                                                        fullHeight: !0,
                                                        showFilters: !0,
                                                        dashboard: !0
                                                    })
                                                )
                                            )
                                        )
                                    );
                                }
                            }
                        ]),
                        t
                    );
                })();
            t.default = function(e) {
                return r.a.createElement(ne, X({}, e, {onlyAccounts: !0}));
            };
        },
        72: function(e, t, n) {
            "use strict";
            n.d(t, "b", function() {
                return y;
            }),
                n.d(t, "a", function() {
                    return v;
                });
            var a = n(0),
                r = n.n(a),
                o = n(2),
                i = n.n(o),
                s = (n(1), n(9)),
                c = n.n(s),
                l = n(15),
                u = n(10),
                p = n(8),
                h = n(3),
                d = n.n(h),
                m = (function() {
                    function e(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var a = t[n];
                            (a.enumerable = a.enumerable || !1),
                                (a.configurable = !0),
                                "value" in a && (a.writable = !0),
                                Object.defineProperty(e, a.key, a);
                        }
                    }
                    return function(t, n, a) {
                        return n && e(t.prototype, n), a && e(t, a), t;
                    };
                })();
            function f(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function");
            }
            function g(e, t) {
                if (!e)
                    throw new ReferenceError(
                        "this hasn't been initialised - super() hasn't been called"
                    );
                return !t || ("object" != typeof t && "function" != typeof t)
                    ? e
                    : t;
            }
            function b(e, t) {
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
            var v = (function(e) {
                function t() {
                    return (
                        f(this, t),
                        g(
                            this,
                            (t.__proto__ || Object.getPrototypeOf(t)).apply(
                                this,
                                arguments
                            )
                        )
                    );
                }
                return (
                    b(t, r.a.Component),
                    m(t, [
                        {
                            key: "render",
                            value: function() {
                                var e = this.props,
                                    t = e.isActive,
                                    n = e.index,
                                    a = e.changeTab,
                                    o = e.title,
                                    i = e.className,
                                    s = e.updatedTab,
                                    l = e.disabled,
                                    u = e.subText,
                                    p = c()({"is-active": t}, i);
                                return (
                                    "string" == typeof o &&
                                        o.indexOf(".") > 0 &&
                                        (o = d.a.translate(o)),
                                    this.props.collapsed
                                        ? ("string" == typeof u &&
                                              (u = u.trim()),
                                          r.a.createElement(
                                              "option",
                                              {
                                                  value: n,
                                                  "data-is-link-to": this.props
                                                      .isLinkTo
                                              },
                                              r.a.createElement(
                                                  "span",
                                                  {className: "tab-title"},
                                                  o,
                                                  s ? "*" : "",
                                                  u && " (",
                                                  u && u,
                                                  u && ")"
                                              )
                                          ))
                                        : r.a.createElement(
                                              "li",
                                              {
                                                  className: p,
                                                  onClick: l
                                                      ? null
                                                      : a.bind(
                                                            this,
                                                            n,
                                                            this.props.isLinkTo
                                                        )
                                              },
                                              r.a.createElement(
                                                  "a",
                                                  null,
                                                  r.a.createElement(
                                                      "span",
                                                      {className: "tab-title"},
                                                      o,
                                                      s ? "*" : ""
                                                  ),
                                                  u &&
                                                      r.a.createElement(
                                                          "div",
                                                          {
                                                              className:
                                                                  "tab-subtext"
                                                          },
                                                          u
                                                      )
                                              )
                                          )
                                );
                            }
                        }
                    ]),
                    t
                );
            })();
            (v.propTypes = {
                changeTab: i.a.func,
                isActive: i.a.bool.isRequired,
                index: i.a.number.isRequired,
                className: i.a.string,
                isLinkTo: i.a.string,
                subText: i.a.oneOfType([i.a.object, i.a.string])
            }),
                (v.defaultProps = {
                    isActive: !1,
                    index: 0,
                    className: "",
                    isLinkTo: "",
                    subText: null
                });
            var y = (function(e) {
                function t(e) {
                    f(this, t);
                    var n = g(
                        this,
                        (t.__proto__ || Object.getPrototypeOf(t)).call(this)
                    );
                    return (
                        (n.state = {
                            activeTab: e.setting
                                ? e.viewSettings.get(
                                      e.setting,
                                      e.defaultActiveTab
                                  )
                                : e.defaultActiveTab,
                            width: window.innerWidth
                        }),
                        (n._setDimensions = n._setDimensions.bind(n)),
                        n
                    );
                }
                return (
                    b(t, r.a.Component),
                    m(t, [
                        {
                            key: "componentDidMount",
                            value: function() {
                                this._setDimensions(),
                                    window.addEventListener(
                                        "resize",
                                        this._setDimensions,
                                        {capture: !1, passive: !0}
                                    );
                            }
                        },
                        {
                            key: "componentWillReceiveProps",
                            value: function(e) {
                                var t = e.viewSettings.get(e.setting);
                                t !==
                                    this.props.viewSettings.get(
                                        this.props.setting
                                    ) && this.setState({activeTab: t});
                            }
                        },
                        {
                            key: "componentWillUnmount",
                            value: function() {
                                window.removeEventListener(
                                    "resize",
                                    this._setDimensions
                                );
                            }
                        },
                        {
                            key: "_setDimensions",
                            value: function() {
                                var e = window.innerWidth;
                                e !== this.state.width &&
                                    this.setState({width: e});
                            }
                        },
                        {
                            key: "_changeTab",
                            value: function(e, t) {
                                e !== this.state.activeTab &&
                                    ("" === t
                                        ? (this.props.setting &&
                                              u.a.changeViewSetting(
                                                  (function(e, t, n) {
                                                      return (
                                                          t in e
                                                              ? Object.defineProperty(
                                                                    e,
                                                                    t,
                                                                    {
                                                                        value: n,
                                                                        enumerable: !0,
                                                                        configurable: !0,
                                                                        writable: !0
                                                                    }
                                                                )
                                                              : (e[t] = n),
                                                          e
                                                      );
                                                  })({}, this.props.setting, e)
                                              ),
                                          this.setState({activeTab: e}),
                                          this.props.onChangeTab &&
                                              this.props.onChangeTab(e))
                                        : this.context.router.push(t));
                            }
                        },
                        {
                            key: "render",
                            value: function() {
                                var e = this,
                                    t = this.props,
                                    n = t.children,
                                    a = t.contentClass,
                                    o = t.tabsClass,
                                    i = t.style,
                                    s = t.segmented,
                                    l =
                                        this.state.width < 900 &&
                                        r.a.Children.count(n) > 2,
                                    u = null,
                                    p = r.a.Children.map(n, function(t, n) {
                                        if (!t) return null;
                                        if (l && t.props.disabled) return null;
                                        var a = n === e.state.activeTab;
                                        return (
                                            a && (u = t.props.children),
                                            r.a.cloneElement(t, {
                                                collapsed: l,
                                                isActive: a,
                                                changeTab: e._changeTab.bind(e),
                                                index: n
                                            })
                                        );
                                    }).filter(function(e) {
                                        return null !== e;
                                    });
                                return (
                                    u || (u = p[0].props.children),
                                    r.a.createElement(
                                        "div",
                                        {
                                            className: c()(
                                                this.props.actionButtons
                                                    ? "with-buttons"
                                                    : "",
                                                this.props.className
                                            )
                                        },
                                        r.a.createElement(
                                            "div",
                                            {className: "service-selector"},
                                            r.a.createElement(
                                                "ul",
                                                {
                                                    style: i,
                                                    className: c()(
                                                        "button-group no-margin",
                                                        o,
                                                        {segmented: s}
                                                    )
                                                },
                                                l
                                                    ? r.a.createElement(
                                                          "li",
                                                          {
                                                              style: {
                                                                  paddingLeft: 10,
                                                                  paddingRight: 10,
                                                                  minWidth:
                                                                      "15rem"
                                                              }
                                                          },
                                                          r.a.createElement(
                                                              "select",
                                                              {
                                                                  value: this
                                                                      .state
                                                                      .activeTab,
                                                                  style: {
                                                                      marginTop: 10,
                                                                      marginBottom: 10
                                                                  },
                                                                  className:
                                                                      "bts-select",
                                                                  onChange: function(
                                                                      t
                                                                  ) {
                                                                      var n = parseInt(
                                                                          t
                                                                              .target
                                                                              .value,
                                                                          10
                                                                      );
                                                                      e._changeTab(
                                                                          n,
                                                                          t
                                                                              .target[
                                                                              n
                                                                          ]
                                                                              .attributes[
                                                                              "data-is-link-to"
                                                                          ]
                                                                              .value
                                                                      );
                                                                  }
                                                              },
                                                              p
                                                          )
                                                      )
                                                    : p,
                                                this.props.actionButtons
                                                    ? r.a.createElement(
                                                          "li",
                                                          {
                                                              className:
                                                                  "tabs-action-buttons"
                                                          },
                                                          this.props
                                                              .actionButtons
                                                      )
                                                    : null
                                            )
                                        ),
                                        r.a.createElement(
                                            "div",
                                            {className: c()("tab-content", a)},
                                            u
                                        )
                                    )
                                );
                            }
                        }
                    ]),
                    t
                );
            })();
            (y.propTypes = {
                setting: i.a.string,
                defaultActiveTab: i.a.number,
                segmented: i.a.bool
            }),
                (y.defaultProps = {
                    active: 0,
                    defaultActiveTab: 0,
                    segmented: !0,
                    contentClass: "",
                    style: {}
                }),
                (y.contextTypes = {router: i.a.object.isRequired}),
                (y = Object(l.connect)(y, {
                    listenTo: function() {
                        return [p.a];
                    },
                    getProps: function() {
                        return {viewSettings: p.a.getState().viewSettings};
                    }
                }));
        }
    }
]);
