(window.webpackJsonp = window.webpackJsonp || []).push([
    [36],
    {
        110: function(e, t, n) {
            "use strict";
            var a = n(0),
                r = n.n(a),
                o = n(501),
                s = n.n(o),
                i = (function() {
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
                    i(t, [
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
                                          s.a,
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
        441: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return F;
            });
            var a = n(0),
                r = n.n(a),
                o = n(1),
                s = n.n(o),
                i = n(119),
                c = n(147),
                l = n(6),
                u = n(12),
                h = n(5),
                m = n(4),
                p = n(110),
                d = n(58),
                v = n.n(d),
                _ = n(3),
                f = n.n(_),
                y = n(13),
                b = n(9),
                w = n.n(b),
                g = n(2),
                E = n.n(g),
                k = n(57),
                C = (function() {
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
            function x(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function");
            }
            function A(e, t) {
                if (!e)
                    throw new ReferenceError(
                        "this hasn't been initialised - super() hasn't been called"
                    );
                return !t || ("object" != typeof t && "function" != typeof t)
                    ? e
                    : t;
            }
            function I(e, t) {
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
            var N = m.c.operations,
                O = {textAlign: "left"},
                P = {textAlign: "right"};
            function S(e, t) {
                return t.block_num === e.block_num
                    ? t.virtual_op - e.virtual_op
                    : t.block_num - e.block_num;
            }
            function j(e) {
                return e
                    ? '"' + e.textContent.replace(/[\s\t\r\n]/gi, " ") + '"'
                    : "";
            }
            var F = (function(e) {
                function t(e) {
                    x(this, t);
                    var n = A(
                        this,
                        (t.__proto__ || Object.getPrototypeOf(t)).call(this)
                    );
                    return (
                        (n.state = {
                            limit: e.limit || 20,
                            csvExport: !1,
                            headerHeight: 85,
                            openFilter: !1,
                            filter: "all"
                        }),
                        (n._downloadCSV = n._downloadCSV.bind(n)),
                        (n._findActiveFilter = n._findActiveFilter.bind(n)),
                        (n._renderFilters = n._renderFilters.bind(n)),
                        n
                    );
                }
                return (
                    I(t, r.a.Component),
                    C(t, [
                        {
                            key: "componentDidMount",
                            value: function() {
                                if (!this.props.fullHeight) {
                                    var e = this.refs.transactions;
                                    v.a.initialize(e), this._setHeaderHeight();
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
                                    !h.a.are_equal_shallow(
                                        this.props.accountsList,
                                        e.accountsList
                                    )
                                )
                                    return !0;
                                if (this.props.maxHeight !== e.maxHeight)
                                    return !0;
                                if (this.state.headerHeight !== t.headerHeight)
                                    return !0;
                                if (this.state.openFilter !== t.openFilter)
                                    return !0;
                                if (this.state.filter !== t.filter) return !0;
                                if (
                                    this.props.customFilter &&
                                    (!h.a.are_equal_shallow(
                                        this.props.customFilter.fields,
                                        e.customFilter.fields
                                    ) ||
                                        !h.a.are_equal_shallow(
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
                                            var o, s = e[Symbol.iterator]();
                                            !(n = (o = s.next()).done);
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
                                            !n && s.return && s.return();
                                        } finally {
                                            if (a) throw r;
                                        }
                                    }
                                    var l = new Blob([t], {
                                            type: "text/csv;charset=utf-8"
                                        }),
                                        u = new Date();
                                    Object(i.saveAs)(
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
                                    var h = this.refs.transactions;
                                    v.a.update(h), this._setHeaderHeight();
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
                                    s = !1,
                                    i = void 0;
                                try {
                                    for (
                                        var c, l = e[Symbol.iterator]();
                                        !(o = (c = l.next()).done);
                                        o = !0
                                    ) {
                                        var u = c.value;
                                        if (u) {
                                            var h = u.get("history");
                                            h &&
                                                (a = a.concat(
                                                    h
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
                                    (s = !0), (i = e);
                                } finally {
                                    try {
                                        !o && l.return && l.return();
                                    } finally {
                                        if (s) throw i;
                                    }
                                }
                                return (
                                    t &&
                                        (a = a.filter(function(e) {
                                            return e.op[0] === N[t];
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
                            key: "_findActiveFilter",
                            value: function(e) {
                                var t = this;
                                return e.find(function(e) {
                                    return e === t.state.filter;
                                });
                            }
                        },
                        {
                            key: "_renderFilters",
                            value: function(e) {
                                var t = this,
                                    n = this._findActiveFilter(e);
                                return n
                                    ? r.a.createElement(
                                          "div",
                                          {
                                              className: w()("select", {
                                                  "is-open": this.state
                                                      .openFilter
                                              })
                                          },
                                          r.a.createElement(
                                              "span",
                                              {
                                                  className: "placeholder",
                                                  onClick: function(e) {
                                                      e.preventDefault(),
                                                          t.setState({
                                                              openFilter: !t
                                                                  .state
                                                                  .openFilter
                                                          });
                                                  }
                                              },
                                              f.a.translate(
                                                  "transaction.trxTypes." + n
                                              )
                                          ),
                                          r.a.createElement(
                                              "ul",
                                              null,
                                              e
                                                  .filter(function(e) {
                                                      return e !== n;
                                                  })
                                                  .map(function(e) {
                                                      return r.a.createElement(
                                                          "li",
                                                          {
                                                              key: "" + e,
                                                              onClick: function(
                                                                  n
                                                              ) {
                                                                  n.preventDefault(),
                                                                      t.setState(
                                                                          {
                                                                              filter: e
                                                                          }
                                                                      ),
                                                                      t.setState(
                                                                          {
                                                                              openFilter: !1
                                                                          }
                                                                      );
                                                              }
                                                          },
                                                          f.a.translate(
                                                              "transaction.trxTypes." +
                                                                  e
                                                          )
                                                      );
                                                  })
                                          )
                                      )
                                    : null;
                            }
                        },
                        {
                            key: "render",
                            value: function() {
                                var e = this,
                                    t = this.props,
                                    n = t.accountsList,
                                    a = t.compactView,
                                    o = t.filter,
                                    i = t.customFilter,
                                    l = t.style,
                                    u = (t.maxHeight, this.state),
                                    h = u.limit,
                                    m = (u.headerHeight,
                                    1 === n.length && n[0]
                                        ? n[0].get("id")
                                        : null),
                                    d = this._getHistory(
                                        n,
                                        this.props.showFilters &&
                                        "all" !== this.state.filter
                                            ? this.state.filter
                                            : o,
                                        i
                                    ).sort(S),
                                    v = d.length,
                                    _ = null;
                                _ = [
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
                                ];
                                var b = d.length
                                    ? d.slice(0, h).map(function(e) {
                                          return r.a.createElement(c.a, {
                                              includeOperationId: !0,
                                              operationId: e.id,
                                              style: O,
                                              key: e.id,
                                              op: e.op,
                                              result: e.result,
                                              block: e.block_num,
                                              current: m,
                                              hideFee: !0,
                                              inverted: !1,
                                              hideOpLabel: a,
                                              fullDate: !0
                                          });
                                      })
                                    : [
                                          r.a.createElement(
                                              "tr",
                                              {key: "no_recent"},
                                              r.a.createElement(
                                                  "td",
                                                  {colSpan: a ? "2" : "3"},
                                                  r.a.createElement(s.a, {
                                                      content:
                                                          "operation.no_recent"
                                                  })
                                              )
                                          )
                                      ];
                                return (
                                    ((this.props.showMore &&
                                        v > this.props.limit) ||
                                        h < v) &&
                                        b.push(
                                            r.a.createElement(
                                                "tr",
                                                {
                                                    className: "total-value",
                                                    key: "total_value"
                                                },
                                                r.a.createElement("td", {
                                                    className:
                                                        "column-hide-tiny"
                                                }),
                                                r.a.createElement("td", {
                                                    style: P
                                                }),
                                                r.a.createElement(
                                                    "td",
                                                    {
                                                        style: {
                                                            textAlign: "center"
                                                        }
                                                    },
                                                    " ",
                                                    r.a.createElement(
                                                        "a",
                                                        {
                                                            onClick: this._onIncreaseLimit.bind(
                                                                this
                                                            )
                                                        },
                                                        r.a.createElement(y.a, {
                                                            name:
                                                                "chevron-down",
                                                            title:
                                                                "icons.chevron_down.transactions",
                                                            className:
                                                                "icon-14px"
                                                        })
                                                    )
                                                )
                                            )
                                        ),
                                    r.a.createElement(
                                        "div",
                                        {
                                            className:
                                                "recent-transactions no-overflow",
                                            style: l
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
                                                                        s.a,
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
                                                {
                                                    className:
                                                        "dashboard__actions"
                                                },
                                                r.a.createElement(
                                                    "div",
                                                    {
                                                        className:
                                                            "container-fluid"
                                                    },
                                                    r.a.createElement(
                                                        "div",
                                                        {className: "row"},
                                                        r.a.createElement(
                                                            "div",
                                                            {
                                                                className:
                                                                    "col-lg-3"
                                                            },
                                                            this.props
                                                                .showFilters
                                                                ? this._renderFilters(
                                                                      _
                                                                  )
                                                                : null
                                                        )
                                                    )
                                                )
                                            ),
                                            r.a.createElement(
                                                "div",
                                                {
                                                    className:
                                                        "dashboard__adaptive"
                                                },
                                                r.a.createElement(
                                                    "table",
                                                    {
                                                        className:
                                                            "dashboard__table blue-bg with-borders" +
                                                            (a
                                                                ? "compact"
                                                                : "") +
                                                            (this.props
                                                                .dashboard
                                                                ? " dashboard-table"
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
                                                                    style: O
                                                                },
                                                                r.a.createElement(
                                                                    s.a,
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
                                                                    style: O
                                                                },
                                                                r.a.createElement(
                                                                    s.a,
                                                                    {
                                                                        content:
                                                                            "account.transactions.type"
                                                                    }
                                                                )
                                                            ),
                                                            r.a.createElement(
                                                                "th",
                                                                {style: O},
                                                                r.a.createElement(
                                                                    s.a,
                                                                    {
                                                                        content:
                                                                            "account.transactions.info"
                                                                    }
                                                                )
                                                            ),
                                                            r.a.createElement(
                                                                "th",
                                                                {style: O},
                                                                r.a.createElement(
                                                                    s.a,
                                                                    {
                                                                        content:
                                                                            "account.transactions.time"
                                                                    }
                                                                )
                                                            )
                                                        )
                                                    ),
                                                    r.a.createElement(
                                                        p.a,
                                                        {
                                                            component: "tbody",
                                                            transitionName:
                                                                "newrow"
                                                        },
                                                        b
                                                    )
                                                )
                                            ),
                                            v > 0
                                                ? r.a.createElement(
                                                      "div",
                                                      {
                                                          className:
                                                              "export-row",
                                                          style: {
                                                              marginTop: "20px"
                                                          }
                                                      },
                                                      r.a.createElement(
                                                          "a",
                                                          {
                                                              className:
                                                                  "csv-export",
                                                              href: "#",
                                                              onClick: function(
                                                                  t
                                                              ) {
                                                                  t.preventDefault(),
                                                                      e._downloadCSV();
                                                              }
                                                          },
                                                          r.a.createElement(
                                                              "img",
                                                              {
                                                                  src:
                                                                      k.csvIcon,
                                                                  alt: ""
                                                              }
                                                          ),
                                                          f.a.translate(
                                                              "transaction.csv_tip"
                                                          )
                                                      )
                                                  )
                                                : null,
                                            v > 0 &&
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
                                                    d.map(function(e) {
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
            (F.propTypes = {
                accountsList: l.a.ChainAccountsList.isRequired,
                compactView: E.a.bool,
                limit: E.a.number,
                maxHeight: E.a.number,
                fullHeight: E.a.bool,
                showFilters: E.a.bool
            }),
                (F.defaultProps = {
                    limit: 25,
                    maxHeight: 500,
                    fullHeight: !1,
                    showFilters: !1
                }),
                (F = Object(u.a)(F));
            var R = (function(e) {
                function t() {
                    return (
                        x(this, t),
                        A(
                            this,
                            (t.__proto__ || Object.getPrototypeOf(t)).apply(
                                this,
                                arguments
                            )
                        )
                    );
                }
                return (
                    I(t, r.a.Component),
                    C(t, [
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
            (R.propTypes = {
                asset: l.a.ChainAsset.isRequired,
                to: l.a.ChainAccount.isRequired,
                fromAccount: l.a.ChainAccount.isRequired
            }),
                (R.defaultProps = {asset: "1.3.0"}),
                (R = Object(u.a)(R));
        },
        4990: function(e, t, n) {
            "use strict";
            n.r(t);
            var a = n(0),
                r = n.n(a),
                o = n(7),
                s = n.n(o),
                i = n(1),
                c = n.n(i),
                l = n(3),
                u = n.n(l),
                h = n(5),
                m = n(62),
                p = n(116),
                d = n(4),
                v = n(11),
                _ = n(162),
                f = n(90),
                y = n(6),
                b = n(12),
                w = (n(13), n(285)),
                g = n(194),
                E = n(66),
                k = n(2),
                C = n.n(k),
                x = (function() {
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
            function I(e, t) {
                if (!e)
                    throw new ReferenceError(
                        "this hasn't been initialised - super() hasn't been called"
                    );
                return !t || ("object" != typeof t && "function" != typeof t)
                    ? e
                    : t;
            }
            function N(e, t) {
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
            var O = (function(e) {
                function t() {
                    return (
                        A(this, t),
                        I(
                            this,
                            (t.__proto__ || Object.getPrototypeOf(t)).apply(
                                this,
                                arguments
                            )
                        )
                    );
                }
                return (
                    N(t, r.a.Component),
                    x(t, [
                        {
                            key: "shouldComponentUpdate",
                            value: function(e) {
                                return !h.a.are_equal_shallow(e, this.props);
                            }
                        },
                        {
                            key: "_lookUpPubKeyForAddress",
                            value: function(e) {
                                return g.a.getState().addresses.get(e);
                            }
                        },
                        {
                            key: "render",
                            value: function() {
                                var e = void 0,
                                    t = void 0,
                                    n = void 0,
                                    a = "_accounts",
                                    o = this.props.pubkey,
                                    s = E.a.getState().keys,
                                    i = !1;
                                return (
                                    this.props.account
                                        ? ((e = this.props.account.get("name")),
                                          (t = this.props.account.get("id")),
                                          (n = r.a.createElement(
                                              v.b,
                                              {
                                                  to:
                                                      "/account/" +
                                                      e +
                                                      "/permissions"
                                              },
                                              e
                                          )))
                                        : o
                                            ? ((e = t = o),
                                              (n = r.a.createElement(
                                                  w.a,
                                                  {pubkey: o},
                                                  o
                                              )),
                                              (a = "_keys"),
                                              (i = s.has(o)))
                                            : this.props.address &&
                                              ((o = this._lookUpPubKeyForAddress(
                                                  this.props.address
                                              )),
                                              (t = this.props.address),
                                              (n = o
                                                  ? r.a.createElement(
                                                        w.a,
                                                        {pubkey: o},
                                                        o
                                                    )
                                                  : this.props.address),
                                              (a = "_addresses"),
                                              (i = s.has(o))),
                                    r.a.createElement(
                                        "tr",
                                        {key: e},
                                        r.a.createElement(
                                            "td",
                                            null,
                                            this.props.account
                                                ? r.a.createElement(f.a, {
                                                      size: {
                                                          height: 30,
                                                          width: 30
                                                      },
                                                      account: e
                                                  })
                                                : o
                                                    ? r.a.createElement(
                                                          "div",
                                                          {
                                                              className:
                                                                  "account-image"
                                                          },
                                                          r.a.createElement(
                                                              w.a,
                                                              {pubkey: o},
                                                              r.a.createElement(
                                                                  "span",
                                                                  {
                                                                      className:
                                                                          "key-icon"
                                                                  }
                                                              )
                                                          )
                                                      )
                                                    : null
                                        ),
                                        r.a.createElement(
                                            "td",
                                            {
                                                className:
                                                    (i ? "my-key" : "") +
                                                    " pub-key"
                                            },
                                            n
                                        ),
                                        r.a.createElement(
                                            "td",
                                            null,
                                            this.props.weights[t]
                                        ),
                                        r.a.createElement(
                                            "td",
                                            null,
                                            r.a.createElement(
                                                "button",
                                                {
                                                    className:
                                                        "btn large outline",
                                                    onClick: this.props.onRemoveItem.bind(
                                                        this,
                                                        t,
                                                        a
                                                    )
                                                },
                                                u.a.translate(
                                                    "account.votes.remove_witness"
                                                )
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
            O.propTypes = {
                account: C.a.object,
                pubkey: C.a.string,
                address: C.a.string,
                onRemoveItem: C.a.func.isRequired,
                weights: C.a.object
            };
            var P = (function(e) {
                function t(e) {
                    A(this, t);
                    var n = I(
                        this,
                        (t.__proto__ || Object.getPrototypeOf(t)).call(this, e)
                    );
                    return (
                        (n.state = {
                            selected_item: null,
                            item_name_input: "",
                            weight_input: "",
                            error: null
                        }),
                        (n.onItemChange = n.onItemChange.bind(n)),
                        (n.onItemAccountChange = n.onItemAccountChange.bind(n)),
                        (n.onAddItem = n.onAddItem.bind(n)),
                        n
                    );
                }
                return (
                    N(t, r.a.Component),
                    x(t, [
                        {
                            key: "onItemChange",
                            value: function(e) {
                                this.setState({item_name_input: e});
                            }
                        },
                        {
                            key: "onItemAccountChange",
                            value: function(e) {
                                var t = this;
                                if (
                                    (this.setState({
                                        selected_item: e,
                                        error: null
                                    }),
                                    e && this.props.validateAccount)
                                ) {
                                    var n = this.props.validateAccount(e);
                                    if (null === n) return;
                                    "string" == typeof n
                                        ? this.setState({error: n})
                                        : n.then(function(e) {
                                              return t.setState({error: e});
                                          });
                                }
                            }
                        },
                        {
                            key: "onWeightChanged",
                            value: function(e) {
                                var t = e.target.value.trim();
                                this.setState({weight_input: parseInt(t)});
                            }
                        },
                        {
                            key: "onAddItem",
                            value: function(e) {
                                if (e) {
                                    this.setState({
                                        selected_item: null,
                                        item_name_input: "",
                                        weight_input: "",
                                        error: null
                                    });
                                    var t =
                                        "string" == typeof e ? e : e.get("id");
                                    this.props.onAddItem(
                                        t,
                                        this.state.weight_input
                                    );
                                }
                            }
                        },
                        {
                            key: "onWeightKeyDown",
                            value: function(e) {
                                13 === e.keyCode &&
                                    this.state.weight_input &&
                                    this.state.selected_item &&
                                    this.onAddItem(this.state.selected_item);
                            }
                        },
                        {
                            key: "render",
                            value: function() {
                                var e = this,
                                    t = 0,
                                    n = this.props.accounts
                                        .filter(function(e) {
                                            return !!e;
                                        })
                                        .sort(function(e, t) {
                                            return e.get("name") > t.get("name")
                                                ? 1
                                                : e.get("name") < t.get("name")
                                                    ? -1
                                                    : 0;
                                        })
                                        .map(function(n) {
                                            return r.a.createElement(O, {
                                                key: t++,
                                                account: n,
                                                weights: e.props.weights,
                                                onRemoveItem:
                                                    e.props.onRemoveItem
                                            });
                                        }),
                                    a = this.props.keys.map(function(n) {
                                        return r.a.createElement(O, {
                                            key: t++,
                                            pubkey: n,
                                            weights: e.props.weights,
                                            onRemoveItem: e.props.onRemoveItem
                                        });
                                    }),
                                    o = this.props.addresses.map(function(n) {
                                        return r.a.createElement(O, {
                                            key: t++,
                                            address: n,
                                            weights: e.props.weights,
                                            onRemoveItem: e.props.onRemoveItem
                                        });
                                    }),
                                    s = this.state.error;
                                !s &&
                                    this.state.selected_item &&
                                    -1 !==
                                        this.props.accounts.indexOf(
                                            this.state.selected_item
                                        ) &&
                                    (s = u.a.translate(
                                        "account.perm.warning3"
                                    )),
                                    !s &&
                                        this.state.item_name_input &&
                                        -1 !==
                                            this.props.keys.indexOf(
                                                this.state.item_name_input
                                            ) &&
                                        (s = u.a.translate(
                                            "account.perm.warning4"
                                        ));
                                var i = ["10%", "70%", "30%", "10%"];
                                return r.a.createElement(
                                    "div",
                                    null,
                                    r.a.createElement(
                                        _.a,
                                        {
                                            label: this.props.label,
                                            error: s,
                                            placeholder: this.props.placeholder,
                                            account: this.state.item_name_input,
                                            accountName: this.state
                                                .item_name_input,
                                            onChange: this.onItemChange,
                                            onAccountChanged: this
                                                .onItemAccountChange,
                                            onAction: this.onAddItem,
                                            action_label:
                                                "account.votes.add_witness",
                                            tabIndex: this.props.tabIndex,
                                            allowPubKey: !0,
                                            disableActionButton: !this.state
                                                .weight_input,
                                            allowUppercase: !0
                                        },
                                        r.a.createElement("input", {
                                            value: this.state.weight_input,
                                            onChange: this.onWeightChanged.bind(
                                                this
                                            ),
                                            className: "weight-input",
                                            type: "number",
                                            autoComplete: "off",
                                            placeholder: u.a.translate(
                                                "account.perm.weight"
                                            ),
                                            onKeyDown: this.onWeightKeyDown.bind(
                                                this
                                            ),
                                            tabIndex: this.props.tabIndex + 1
                                        })
                                    ),
                                    r.a.createElement(
                                        "div",
                                        {
                                            className:
                                                "accounts-table-wrap accounts-table-wrap__keys",
                                            style: {paddingTop: "2rem"}
                                        },
                                        r.a.createElement(
                                            "table",
                                            {className: "accounts-table"},
                                            r.a.createElement(
                                                "thead",
                                                null,
                                                r.a.createElement(
                                                    "tr",
                                                    null,
                                                    r.a.createElement("th", {
                                                        style: {width: i[0]}
                                                    }),
                                                    r.a.createElement(
                                                        "th",
                                                        {style: {width: i[1]}},
                                                        r.a.createElement(c.a, {
                                                            content:
                                                                "account.perm.acct_or_key"
                                                        })
                                                    ),
                                                    r.a.createElement(
                                                        "th",
                                                        {style: {width: i[2]}},
                                                        r.a.createElement(c.a, {
                                                            content:
                                                                "account.perm.weight"
                                                        })
                                                    ),
                                                    r.a.createElement(
                                                        "th",
                                                        {style: {width: i[3]}},
                                                        r.a.createElement(c.a, {
                                                            content:
                                                                "account.perm.action"
                                                        })
                                                    )
                                                )
                                            ),
                                            r.a.createElement(
                                                "tbody",
                                                null,
                                                n,
                                                a,
                                                o
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
            P.propTypes = {
                accounts: y.a.ChainObjectsList,
                onAddItem: C.a.func.isRequired,
                onRemoveItem: C.a.func.isRequired,
                validateAccount: C.a.func,
                label: C.a.string.isRequired,
                placeholder: C.a.string,
                tabIndex: C.a.number,
                weights: C.a.object
            };
            var S = Object(b.a)(P, {autosubscribe: !1}),
                j = n(282),
                F = n(16),
                R = (function() {
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
            var K = (function(e) {
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
                            (e.state = {
                                validPassword: !1,
                                pass: null,
                                generatedPassword:
                                    "P" +
                                    d.o
                                        .get_random_key()
                                        .toWif()
                                        .toString()
                            }),
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
                        R(t, [
                            {key: "onSubmit", value: function() {}},
                            {
                                key: "onPasswordChange",
                                value: function(e) {
                                    var t = e.valid,
                                        n = this.props.account.get("name"),
                                        a = t
                                            ? F.a.generateKeyFromPassword(
                                                  n,
                                                  "active",
                                                  e.value
                                              ).pubKey
                                            : null,
                                        r = t
                                            ? F.a.generateKeyFromPassword(
                                                  n,
                                                  "owner",
                                                  e.value
                                              ).pubKey
                                            : null,
                                        o = t
                                            ? F.a.generateKeyFromPassword(
                                                  n,
                                                  "active",
                                                  e.value
                                              ).pubKey
                                            : null;
                                    this.setState({
                                        validPassword: e.valid,
                                        pass: e.value
                                    }),
                                        this.props.onSetPasswordKeys({
                                            active: a,
                                            owner: r,
                                            memo: o
                                        });
                                }
                            },
                            {
                                key: "checkKeyUse",
                                value: function(e, t) {
                                    return (
                                        !!e &&
                                        ("memo" === t
                                            ? e === this.props.memoKey
                                            : this.props[t + "Keys"].reduce(
                                                  function(t, n) {
                                                      return n === e || t;
                                                  },
                                                  !1
                                              ))
                                    );
                                }
                            },
                            {
                                key: "_onUseKey",
                                value: function(e) {
                                    if (
                                        arguments.length > 1 &&
                                        void 0 !== arguments[1] &&
                                        arguments[1]
                                    )
                                        this.props[
                                            "active" === e
                                                ? "onRemoveActive"
                                                : "onRemoveOwner"
                                        ](this.props[e], "_keys");
                                    else if (this.props[e]) {
                                        var t = {
                                            active: this.props.account.getIn([
                                                "active",
                                                "weight_threshold"
                                            ]),
                                            owner: this.props.account.getIn([
                                                "owner",
                                                "weight_threshold"
                                            ])
                                        };
                                        console.log(
                                            "key",
                                            this.props[e],
                                            "weights",
                                            t,
                                            "weight of role:",
                                            t[e]
                                        ),
                                            this.props[
                                                "active" === e
                                                    ? "onAddActive"
                                                    : "owner" === e
                                                        ? "onAddOwner"
                                                        : "onSetMemo"
                                            ](this.props[e], t[e]);
                                    }
                                }
                            },
                            {
                                key: "render",
                                value: function() {
                                    var e = this.checkKeyUse(
                                            this.props.active &&
                                                this.props.active,
                                            "active"
                                        ),
                                        t = this.checkKeyUse(
                                            this.props.owner &&
                                                this.props.owner,
                                            "owner"
                                        ),
                                        n = this.checkKeyUse(
                                            this.props.memo && this.props.memo,
                                            "memo"
                                        ),
                                        a = u.a.translate(
                                            "account.perm.use_text"
                                        ),
                                        o = u.a.translate(
                                            "account.perm.remove_text"
                                        );
                                    return r.a.createElement(
                                        "div",
                                        null,
                                        r.a.createElement(
                                            "div",
                                            {className: "row"},
                                            r.a.createElement(
                                                "div",
                                                {className: "col-xl-7"},
                                                r.a.createElement(
                                                    "p",
                                                    {
                                                        style: {
                                                            maxWidth: "800px"
                                                        }
                                                    },
                                                    r.a.createElement(c.a, {
                                                        content:
                                                            "account.perm.password_model_1"
                                                    })
                                                ),
                                                r.a.createElement(
                                                    "p",
                                                    {
                                                        style: {
                                                            maxWidth: "800px"
                                                        }
                                                    },
                                                    r.a.createElement(c.a, {
                                                        content:
                                                            "wallet.password_model_1"
                                                    })
                                                ),
                                                r.a.createElement(
                                                    "p",
                                                    {
                                                        style: {
                                                            maxWidth: "800px"
                                                        }
                                                    },
                                                    r.a.createElement(c.a, {
                                                        unsafe: !0,
                                                        content:
                                                            "wallet.password_model_2"
                                                    })
                                                )
                                            )
                                        ),
                                        r.a.createElement("div", {
                                            className: "divider"
                                        }),
                                        r.a.createElement(
                                            "form",
                                            {
                                                style: {maxWidth: "40rem"},
                                                onSubmit: this.onSubmit.bind(
                                                    this
                                                ),
                                                noValidate: !0
                                            },
                                            r.a.createElement(
                                                "label",
                                                {className: "left-label"},
                                                r.a.createElement(c.a, {
                                                    content: "wallet.generated"
                                                })
                                            ),
                                            r.a.createElement(
                                                "p",
                                                null,
                                                this.state.generatedPassword
                                            ),
                                            r.a.createElement(
                                                "p",
                                                {style: {fontWeight: "bold"}},
                                                r.a.createElement(c.a, {
                                                    content:
                                                        "account.perm.password_model_2"
                                                })
                                            ),
                                            r.a.createElement(j.a, {
                                                ref: "password",
                                                confirmation: !0,
                                                onChange: this.onPasswordChange.bind(
                                                    this
                                                ),
                                                noLabel: !0,
                                                passwordLength: 12,
                                                checkStrength: !0
                                            })
                                        ),
                                        r.a.createElement(
                                            "table",
                                            {className: "blue-bg borders"},
                                            r.a.createElement(
                                                "tbody",
                                                null,
                                                r.a.createElement(
                                                    "tr",
                                                    {
                                                        className: e
                                                            ? "in-use"
                                                            : ""
                                                    },
                                                    r.a.createElement(
                                                        "td",
                                                        null,
                                                        r.a.createElement(c.a, {
                                                            content:
                                                                "account.perm.new_active"
                                                        }),
                                                        ":"
                                                    ),
                                                    r.a.createElement(
                                                        "td",
                                                        null,
                                                        this.props.active
                                                    ),
                                                    r.a.createElement(
                                                        "td",
                                                        {
                                                            className:
                                                                "text-right"
                                                        },
                                                        r.a.createElement(
                                                            "button",
                                                            {
                                                                className:
                                                                    "btn large outline",
                                                                onClick: this._onUseKey.bind(
                                                                    this,
                                                                    "active",
                                                                    e
                                                                )
                                                            },
                                                            e ? o : a
                                                        )
                                                    )
                                                ),
                                                r.a.createElement(
                                                    "tr",
                                                    {
                                                        className: t
                                                            ? "in-use"
                                                            : ""
                                                    },
                                                    r.a.createElement(
                                                        "td",
                                                        null,
                                                        r.a.createElement(c.a, {
                                                            content:
                                                                "account.perm.new_owner"
                                                        }),
                                                        ":"
                                                    ),
                                                    r.a.createElement(
                                                        "td",
                                                        null,
                                                        this.props.owner
                                                    ),
                                                    r.a.createElement(
                                                        "td",
                                                        {
                                                            className:
                                                                "text-right"
                                                        },
                                                        r.a.createElement(
                                                            "button",
                                                            {
                                                                className:
                                                                    "btn large outline",
                                                                onClick: this._onUseKey.bind(
                                                                    this,
                                                                    "owner",
                                                                    t
                                                                )
                                                            },
                                                            t ? o : a
                                                        )
                                                    )
                                                ),
                                                r.a.createElement(
                                                    "tr",
                                                    {
                                                        className: n
                                                            ? "in-use"
                                                            : ""
                                                    },
                                                    r.a.createElement(
                                                        "td",
                                                        null,
                                                        r.a.createElement(c.a, {
                                                            content:
                                                                "account.perm.new_memo"
                                                        }),
                                                        ":"
                                                    ),
                                                    r.a.createElement(
                                                        "td",
                                                        null,
                                                        this.props.memo
                                                    ),
                                                    r.a.createElement(
                                                        "td",
                                                        {
                                                            className:
                                                                "text-right"
                                                        },
                                                        r.a.createElement(
                                                            "button",
                                                            {
                                                                className:
                                                                    "btn large outline",
                                                                style: {
                                                                    visibility: n
                                                                        ? "hidden"
                                                                        : ""
                                                                },
                                                                onClick: this._onUseKey.bind(
                                                                    this,
                                                                    "memo",
                                                                    n
                                                                )
                                                            },
                                                            a
                                                        )
                                                    )
                                                )
                                            )
                                        ),
                                        n
                                            ? r.a.createElement(
                                                  "p",
                                                  {
                                                      style: {
                                                          maxWidth: "800px",
                                                          paddingTop: 10
                                                      },
                                                      className: "has-error"
                                                  },
                                                  r.a.createElement(c.a, {
                                                      content:
                                                          "account.perm.memo_warning"
                                                  })
                                              )
                                            : null
                                    );
                                }
                            }
                        ]),
                        t
                    );
                })(),
                T = n(356),
                H = n(104),
                D = n(69),
                U = (n(441), n(28)),
                W = (function() {
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
            var M = (function(e) {
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
                        (t.__proto__ || Object.getPrototypeOf(t)).call(this, e)
                    );
                    return (
                        (n.state = {}),
                        (n.onPublish = n.onPublish.bind(n)),
                        (n.onReset = n.onReset.bind(n)),
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
                    W(t, [
                        {
                            key: "componentWillMount",
                            value: function() {
                                this.updateAccountData(this.props.account),
                                    m.a.getFinalFeeAsset(
                                        this.props.account,
                                        "account_update"
                                    );
                            }
                        },
                        {
                            key: "componentWillReceiveProps",
                            value: function(e) {
                                e.account !== this.props.account &&
                                    this.updateAccountData(e.account);
                            }
                        },
                        {
                            key: "permissionsFromImmutableObj",
                            value: function(e) {
                                var t = e.get("weight_threshold"),
                                    n = e.get("account_auths"),
                                    a = e.get("key_auths"),
                                    r = e.get("address_auths"),
                                    o = n.map(function(e) {
                                        return e.get(0);
                                    }),
                                    s = a.map(function(e) {
                                        return e.get(0);
                                    }),
                                    i = r.map(function(e) {
                                        return e.get(0);
                                    }),
                                    c = n.reduce(function(e, t) {
                                        return (e[t.get(0)] = t.get(1)), e;
                                    }, {});
                                return (
                                    (c = a.reduce(function(e, t) {
                                        return (e[t.get(0)] = t.get(1)), e;
                                    }, c)),
                                    {
                                        threshold: t,
                                        accounts: o,
                                        keys: s,
                                        addresses: i,
                                        weights: (c = r.reduce(function(e, t) {
                                            return (e[t.get(0)] = t.get(1)), e;
                                        }, c))
                                    }
                                );
                            }
                        },
                        {
                            key: "permissionsToJson",
                            value: function(e, t, n, a, r) {
                                var o = {weight_threshold: e};
                                return (
                                    (o.account_auths = t
                                        .sort(h.a.sortID)
                                        .map(function(e) {
                                            return [e, r[e]];
                                        })
                                        .toJS()),
                                    (o.key_auths = n
                                        .sort(h.a.sortID)
                                        .map(function(e) {
                                            return [e, r[e]];
                                        })
                                        .toJS()),
                                    (o.address_auths = a
                                        .sort(h.a.sortID)
                                        .map(function(e) {
                                            return [e, r[e]];
                                        })
                                        .toJS()),
                                    o
                                );
                            }
                        },
                        {
                            key: "updateAccountData",
                            value: function(e) {
                                var t = this.permissionsFromImmutableObj(
                                        e.get("active")
                                    ),
                                    n = this.permissionsFromImmutableObj(
                                        e.get("owner")
                                    ),
                                    a = e.get("options").get("memo_key"),
                                    r = {
                                        active_accounts: t.accounts,
                                        active_keys: t.keys,
                                        active_addresses: t.addresses,
                                        owner_accounts: n.accounts,
                                        owner_keys: n.keys,
                                        owner_addresses: n.addresses,
                                        active_weights: t.weights,
                                        owner_weights: n.weights,
                                        active_threshold: t.threshold,
                                        owner_threshold: n.threshold,
                                        memo_key: a,
                                        prev_active_accounts: t.accounts,
                                        prev_active_keys: t.keys,
                                        prev_active_addresses: t.addresses,
                                        prev_owner_accounts: n.accounts,
                                        prev_owner_keys: n.keys,
                                        prev_owner_addresses: n.addresses,
                                        prev_active_weights: t.weights,
                                        prev_owner_weights: n.weights,
                                        prev_active_threshold: t.threshold,
                                        prev_owner_threshold: n.threshold,
                                        prev_memo_key: a
                                    };
                                this.setState(r);
                            }
                        },
                        {
                            key: "isChanged",
                            value: function() {
                                var e = this.state;
                                return (
                                    e.active_accounts !==
                                        e.prev_active_accounts ||
                                    e.active_keys !== e.prev_active_keys ||
                                    e.active_addresses !==
                                        e.prev_active_addresses ||
                                    e.owner_accounts !==
                                        e.prev_owner_accounts ||
                                    e.owner_keys !== e.prev_owner_keys ||
                                    e.owner_addresses !==
                                        e.prev_owner_addresses ||
                                    e.active_threshold !==
                                        e.prev_active_threshold ||
                                    e.owner_threshold !==
                                        e.prev_owner_threshold ||
                                    e.memo_key !== e.prev_memo_key
                                );
                            }
                        },
                        {
                            key: "didChange",
                            value: function(e) {
                                var t =
                                    arguments.length > 1 &&
                                    void 0 !== arguments[1]
                                        ? arguments[1]
                                        : this.state;
                                if ("memo" === e)
                                    return t.memo_key !== t.prev_memo_key;
                                var n = !1;
                                return (
                                    [
                                        "_keys",
                                        "_active_addresses",
                                        "_accounts",
                                        "_threshold"
                                    ].forEach(function(a) {
                                        var r = e + a;
                                        t[r] !== t["prev_" + r] && (n = !0);
                                    }),
                                    n
                                );
                            }
                        },
                        {
                            key: "onPublish",
                            value: function() {
                                var e = this.state,
                                    t = this.props.account.toJS();
                                t.fee = {
                                    amount: 0,
                                    asset_id: m.a.getFinalFeeAsset(
                                        t.id,
                                        "account_update"
                                    )
                                };
                                var n = {account: t.id};
                                if (
                                    (this.didChange("active") &&
                                        (n.active = this.permissionsToJson(
                                            e.active_threshold,
                                            e.active_accounts,
                                            e.active_keys,
                                            e.active_addresses,
                                            e.active_weights
                                        )),
                                    this.didChange("owner") &&
                                        (n.owner = this.permissionsToJson(
                                            e.owner_threshold,
                                            e.owner_accounts,
                                            e.owner_keys,
                                            e.owner_addresses,
                                            e.owner_weights
                                        )),
                                    this.didChange("owner") &&
                                        0 === e.owner_keys.size &&
                                        0 === e.owner_addresses.size &&
                                        1 === e.owner_accounts.size &&
                                        e.owner_accounts.first() === t.id)
                                )
                                    return U.a.addNotification({
                                        message:
                                            "Setting your owner permissions like this will render your account permanently unusable. Please make sure you know what you're doing before modifying account authorities!",
                                        level: "error",
                                        autoDismiss: 10
                                    });
                                e.memo_key &&
                                    this.didChange("memo") &&
                                    this.isValidPubKey(e.memo_key) &&
                                    ((n.new_options = this.props.account
                                        .get("options")
                                        .toJS()),
                                    (n.new_options.memo_key = e.memo_key)),
                                    p.a.updateAccount(n);
                            }
                        },
                        {
                            key: "isValidPubKey",
                            value: function(e) {
                                return !!d.i.fromPublicKeyString(e);
                            }
                        },
                        {
                            key: "onReset",
                            value: function() {
                                var e = this.state;
                                this.setState({
                                    active_accounts: e.prev_active_accounts,
                                    active_keys: e.prev_active_keys,
                                    active_addresses: e.prev_active_addresses,
                                    owner_accounts: e.prev_owner_accounts,
                                    owner_keys: e.prev_owner_keys,
                                    owner_addresses: e.prev_owner_addresses,
                                    active_weights: e.prev_active_weights,
                                    owner_weights: e.prev_owner_weights,
                                    active_threshold: e.prev_active_threshold,
                                    owner_threshold: e.prev_owner_threshold,
                                    memo_key: e.prev_memo_key
                                });
                            }
                        },
                        {
                            key: "onAddItem",
                            value: function(e, t, n) {
                                var a = {},
                                    r =
                                        e +
                                        (h.a.is_object_id(t)
                                            ? "_accounts"
                                            : "_keys");
                                (a[r] = this.state[r].push(t)),
                                    (this.state[e + "_weights"][t] = n),
                                    this.setState(a);
                            }
                        },
                        {
                            key: "onRemoveItem",
                            value: function(e, t, n) {
                                console.log("onRemoveItem", e, t, n);
                                var a = {},
                                    r = e + n;
                                (a[r] = this.state[r].filter(function(e) {
                                    return e !== t;
                                })),
                                    this.setState(a);
                            }
                        },
                        {
                            key: "onThresholdChanged",
                            value: function(e, t) {
                                var n = parseInt(t.target.value.trim()),
                                    a = {};
                                (a[e] = n), this.setState(a);
                            }
                        },
                        {
                            key: "validateAccount",
                            value: function(e, t) {
                                return null;
                            }
                        },
                        {
                            key: "sumUpWeights",
                            value: function(e, t, n, a) {
                                var r = e.reduce(function(e, t) {
                                    return e + a[t];
                                }, 0);
                                return (
                                    (r = t.reduce(function(e, t) {
                                        return e + a[t];
                                    }, r)),
                                    n.reduce(function(e, t) {
                                        return e + a[t];
                                    }, r)
                                );
                            }
                        },
                        {
                            key: "onMemoKeyChanged",
                            value: function(e) {
                                this.setState({memo_key: e});
                            }
                        },
                        {
                            key: "onSetPasswordKeys",
                            value: function(e) {
                                var t = {};
                                (arguments.length > 1 && void 0 !== arguments[1]
                                    ? arguments[1]
                                    : ["active", "owner", "memo"]
                                ).forEach(function(n) {
                                    t["password_" + n] = e[n];
                                }),
                                    this.setState(t);
                            }
                        },
                        {
                            key: "render",
                            value: function() {
                                var e = void 0,
                                    t = void 0,
                                    n = this.state,
                                    a = n.active_accounts,
                                    o = n.active_keys,
                                    i = n.active_addresses,
                                    l = n.active_weights,
                                    h = this.state,
                                    m = h.owner_accounts,
                                    p = h.owner_keys,
                                    d = h.owner_addresses,
                                    v = h.owner_weights,
                                    _ =
                                        this.state.active_threshold > 0
                                            ? this.state.active_threshold
                                            : 0,
                                    f = this.sumUpWeights(a, o, i, l);
                                this.didChange("active") &&
                                    f < _ &&
                                    (e = u.a.translate(
                                        "account.perm.warning1",
                                        {weights_total: f, threshold: _}
                                    )),
                                    (_ =
                                        this.state.owner_threshold > 0
                                            ? this.state.owner_threshold
                                            : 0),
                                    (f = this.sumUpWeights(m, p, d, v)),
                                    this.didChange("owner") &&
                                        f < _ &&
                                        (t = u.a.translate(
                                            "account.perm.warning2",
                                            {weights_total: f, threshold: _}
                                        ));
                                var y =
                                        "btn large inverted" +
                                        (!e &&
                                        !t &&
                                        this.isChanged() &&
                                        this.isValidPubKey(this.state.memo_key)
                                            ? ""
                                            : " disabled"),
                                    b =
                                        "btn large outline" +
                                        (this.isChanged() ? "" : " disabled"),
                                    w = s.a.Set();
                                w = w.add(this.props.account.get("id"));
                                var g = r.a.createElement(
                                        "div",
                                        {
                                            className: "account-actions",
                                            style: {marginTop: "10px"}
                                        },
                                        r.a.createElement(
                                            "button",
                                            {
                                                className: y,
                                                onClick: this.onPublish,
                                                tabIndex: 9,
                                                disabled: !(
                                                    !e &&
                                                    !t &&
                                                    this.isChanged() &&
                                                    this.isValidPubKey(
                                                        this.state.memo_key
                                                    )
                                                )
                                            },
                                            r.a.createElement(c.a, {
                                                content: "account.perm.publish"
                                            })
                                        ),
                                        r.a.createElement(
                                            "button",
                                            {
                                                className: b,
                                                onClick: this.onReset,
                                                tabIndex: 8,
                                                disabled: !this.isChanged()
                                            },
                                            r.a.createElement(c.a, {
                                                content: "account.perm.reset"
                                            })
                                        )
                                    ),
                                    E = [
                                        {
                                            title: "account.perm.active",
                                            content: r.a.createElement(
                                                "div",
                                                null,
                                                r.a.createElement(
                                                    "div",
                                                    {className: "row"},
                                                    r.a.createElement(
                                                        "div",
                                                        {className: "col-xl-7"},
                                                        r.a.createElement(D.a, {
                                                            path:
                                                                "components/AccountPermActive"
                                                        })
                                                    )
                                                ),
                                                r.a.createElement(
                                                    "div",
                                                    {
                                                        className:
                                                            "threshold-block"
                                                    },
                                                    r.a.createElement(c.a, {
                                                        content:
                                                            "account.perm.threshold"
                                                    }),
                                                    r.a.createElement("input", {
                                                        type: "number",
                                                        placeholder: "0",
                                                        size: "5",
                                                        value: this.state
                                                            .active_threshold,
                                                        onChange: this.onThresholdChanged.bind(
                                                            this,
                                                            "active_threshold"
                                                        ),
                                                        autoComplete: "off",
                                                        tabIndex: 1
                                                    })
                                                ),
                                                r.a.createElement(S, {
                                                    label:
                                                        "account.perm.add_permission_label",
                                                    accounts: a,
                                                    keys: o,
                                                    weights: l,
                                                    addresses: i,
                                                    validateAccount: this.validateAccount.bind(
                                                        this,
                                                        "active"
                                                    ),
                                                    onAddItem: this.onAddItem.bind(
                                                        this,
                                                        "active"
                                                    ),
                                                    onRemoveItem: this.onRemoveItem.bind(
                                                        this,
                                                        "active"
                                                    ),
                                                    placeholder: u.a.translate(
                                                        "account.perm.account_name_or_key"
                                                    ),
                                                    tabIndex: 2
                                                }),
                                                e
                                                    ? r.a.createElement(
                                                          "div",
                                                          {
                                                              className:
                                                                  "content-block has-error"
                                                          },
                                                          e
                                                      )
                                                    : null,
                                                g,
                                                null
                                            )
                                        },
                                        {
                                            title: "account.perm.owner",
                                            content: r.a.createElement(
                                                "div",
                                                null,
                                                r.a.createElement(
                                                    "div",
                                                    {className: "row"},
                                                    r.a.createElement(
                                                        "div",
                                                        {className: "col-xl-7"},
                                                        r.a.createElement(D.a, {
                                                            path:
                                                                "components/AccountPermOwner"
                                                        })
                                                    )
                                                ),
                                                r.a.createElement(
                                                    "div",
                                                    {
                                                        className:
                                                            "threshold-block"
                                                    },
                                                    r.a.createElement(c.a, {
                                                        content:
                                                            "account.perm.threshold"
                                                    }),
                                                    r.a.createElement("input", {
                                                        type: "number",
                                                        placeholder: "0",
                                                        size: "5",
                                                        value: this.state
                                                            .owner_threshold,
                                                        onChange: this.onThresholdChanged.bind(
                                                            this,
                                                            "owner_threshold"
                                                        ),
                                                        autoComplete: "off",
                                                        tabIndex: 4
                                                    })
                                                ),
                                                r.a.createElement(S, {
                                                    label:
                                                        "account.perm.add_permission_label",
                                                    accounts: m,
                                                    keys: p,
                                                    weights: v,
                                                    addresses: d,
                                                    validateAccount: this.validateAccount.bind(
                                                        this,
                                                        "owner"
                                                    ),
                                                    onAddItem: this.onAddItem.bind(
                                                        this,
                                                        "owner"
                                                    ),
                                                    onRemoveItem: this.onRemoveItem.bind(
                                                        this,
                                                        "owner"
                                                    ),
                                                    placeholder: u.a.translate(
                                                        "account.perm.account_name_or_key"
                                                    ),
                                                    tabIndex: 5
                                                }),
                                                t
                                                    ? r.a.createElement(
                                                          "div",
                                                          {
                                                              className:
                                                                  "content-block has-error"
                                                          },
                                                          t
                                                      )
                                                    : null,
                                                g,
                                                null
                                            )
                                        },
                                        {
                                            title: "account.perm.memo_key",
                                            content: r.a.createElement(
                                                "div",
                                                null,
                                                r.a.createElement(
                                                    "div",
                                                    {className: "row"},
                                                    r.a.createElement(
                                                        "div",
                                                        {className: "col-xl-7"},
                                                        r.a.createElement(D.a, {
                                                            style: {
                                                                maxWidth:
                                                                    "800px"
                                                            },
                                                            path:
                                                                "components/AccountPermMemo"
                                                        })
                                                    )
                                                ),
                                                r.a.createElement(T.a, {
                                                    ref: "memo_key",
                                                    value: this.state.memo_key,
                                                    label:
                                                        "account.perm.memo_public_key",
                                                    placeholder: "Public Key",
                                                    onChange: this.onMemoKeyChanged.bind(
                                                        this
                                                    ),
                                                    tabIndex: 7
                                                }),
                                                g,
                                                null
                                            )
                                        },
                                        {
                                            title:
                                                "account.perm.password_model",
                                            content: r.a.createElement(
                                                "div",
                                                null,
                                                r.a.createElement(K, {
                                                    active: this.state
                                                        .password_active,
                                                    owner: this.state
                                                        .password_owner,
                                                    memo: this.state
                                                        .password_memo,
                                                    onSetPasswordKeys: this.onSetPasswordKeys.bind(
                                                        this
                                                    ),
                                                    account: this.props.account,
                                                    activeKeys: this.state
                                                        .active_keys,
                                                    ownerKeys: this.state
                                                        .owner_keys,
                                                    memoKey: this.state
                                                        .memo_key,
                                                    onAddActive: this.onAddItem.bind(
                                                        this,
                                                        "active"
                                                    ),
                                                    onRemoveActive: this.onRemoveItem.bind(
                                                        this,
                                                        "active"
                                                    ),
                                                    onAddOwner: this.onAddItem.bind(
                                                        this,
                                                        "owner"
                                                    ),
                                                    onRemoveOwner: this.onRemoveItem.bind(
                                                        this,
                                                        "owner"
                                                    ),
                                                    onSetMemo: this.onMemoKeyChanged.bind(
                                                        this
                                                    )
                                                }),
                                                g,
                                                null
                                            )
                                        }
                                    ];
                                return r.a.createElement(H.a, {
                                    items: E,
                                    dashboardTabsClass:
                                        "dashboard__tabs permissions small"
                                });
                            }
                        }
                    ]),
                    t
                );
            })();
            t.default = M;
        }
    }
]);