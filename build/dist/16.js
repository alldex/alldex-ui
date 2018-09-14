(window.webpackJsonp = window.webpackJsonp || []).push([
    [16],
    {
        110: function(e, t, n) {
            "use strict";
            var a = n(0),
                r = n.n(a),
                o = n(501),
                l = n.n(o),
                c = (function() {
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
            var i = (function(e) {
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
                    c(t, [
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
                                          l.a,
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
            (i.defaultProps = {component: "span", enterTimeout: 2e3}),
                (t.a = i);
        },
        348: function(e, t, n) {
            "use strict";
            var a = n(0),
                r = n.n(a),
                o = n(6),
                l = n(12),
                c = n(40),
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
            var s = (function(e) {
                function t() {
                    return (
                        (function(e, t) {
                            if (!(e instanceof t))
                                throw new TypeError(
                                    "Cannot call a class as a function"
                                );
                        })(this, t),
                        (function(e, t) {
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
                            (t.__proto__ || Object.getPrototypeOf(t)).apply(
                                this,
                                arguments
                            )
                        )
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
                    i(t, [
                        {
                            key: "render",
                            value: function() {
                                var e = this.props.witness.get(
                                    "witness_account"
                                );
                                return r.a.createElement(c.a, {account: e});
                            }
                        }
                    ]),
                    t
                );
            })();
            (s.propTypes = {witness: o.a.ChainObject.isRequired}),
                (s = Object(l.a)(s)),
                (t.a = s);
        },
        4984: function(e, t, n) {
            "use strict";
            n.r(t);
            var a = n(0),
                r = n.n(a),
                o = n(93),
                l = n(50),
                c = n.n(l),
                i = n(11),
                s = n(181),
                u = n(1),
                m = n.n(u),
                p = n(79),
                f = n(147),
                b = n(348),
                d = n(6),
                h = n(12),
                v = n(49),
                g = n(130),
                k = n.n(g),
                y = n(3),
                E = n.n(y),
                _ = (function() {
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
            var x = (function(e) {
                    function t() {
                        return (
                            (function(e, t) {
                                if (!(e instanceof t))
                                    throw new TypeError(
                                        "Cannot call a class as a function"
                                    );
                            })(this, t),
                            (function(e, t) {
                                if (!e)
                                    throw new ReferenceError(
                                        "this hasn't been initialised - super() hasn't been called"
                                    );
                                return !t ||
                                    ("object" != typeof t &&
                                        "function" != typeof t)
                                    ? e
                                    : t;
                            })(
                                this,
                                (t.__proto__ || Object.getPrototypeOf(t)).apply(
                                    this,
                                    arguments
                                )
                            )
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
                        _(t, [
                            {
                                key: "shouldComponentUpdate",
                                value: function(e) {
                                    if (e.blocks.size < 20) return !1;
                                    var t = this.refs.trx_chart
                                        ? this.refs.trx_chart.chart
                                        : null;
                                    if (t && e.blocks !== this.props.blocks) {
                                        var n = this._getData(e),
                                            a = n.trxData,
                                            r = n.colors,
                                            o = t.series[0],
                                            l = o.xData[o.xData.length - 1];
                                        if (o.xData.length)
                                            return (
                                                a.forEach(function(e) {
                                                    e[0] > l &&
                                                        o.addPoint(
                                                            e,
                                                            !1,
                                                            o.xData.length >= 30
                                                        );
                                                }),
                                                (t.options.plotOptions.column.colors = r),
                                                t.redraw(),
                                                !1
                                            );
                                    }
                                    return (
                                        e.blocks !== this.props.blocks ||
                                        e.head_block !== this.props.head_block
                                    );
                                }
                            },
                            {
                                key: "_getData",
                                value: function(e) {
                                    var t = e.blocks,
                                        n = e.head_block,
                                        a = [],
                                        r = 0;
                                    return {
                                        colors: (a = t
                                            .filter(function(e) {
                                                return e.id >= n - 30;
                                            })
                                            .sort(function(e, t) {
                                                return e.id - t.id;
                                            })
                                            .takeLast(30)
                                            .map(function(e) {
                                                return (
                                                    (r = Math.max(
                                                        e.transactions.length,
                                                        r
                                                    )),
                                                    [
                                                        e.id,
                                                        e.transactions.length
                                                    ]
                                                );
                                            })
                                            .toArray()).map(function(e) {
                                            return e[1] <= 5
                                                ? "#50D2C2"
                                                : e[1] <= 10
                                                    ? "#A0D3E8"
                                                    : e[1] <= 20
                                                        ? "#FCAB53"
                                                        : "#deb869";
                                        }),
                                        trxData: a,
                                        max: r
                                    };
                                }
                            },
                            {
                                key: "render",
                                value: function() {
                                    var e = this._getData(this.props),
                                        t = e.trxData,
                                        n = e.colors,
                                        a = e.max,
                                        o = E.a.translate(
                                            "explorer.blocks.transactions"
                                        ),
                                        l = {
                                            chart: {
                                                type: "column",
                                                backgroundColor:
                                                    "rgba(255, 0, 0, 0)",
                                                spacing: [0, 0, 5, 0],
                                                height: 100
                                            },
                                            title: {text: null},
                                            credits: {enabled: !1},
                                            legend: {enabled: !1},
                                            rangeSelector: {enabled: !1},
                                            navigator: {enabled: !1},
                                            scrollbar: {enabled: !1},
                                            tooltip: {
                                                shared: !1,
                                                formatter: function() {
                                                    return o + ": " + this.y;
                                                }
                                            },
                                            series: [
                                                {
                                                    name: "Transactions",
                                                    data: t,
                                                    color: "#50D2C2"
                                                }
                                            ],
                                            xAxis: {
                                                labels: {enabled: !1},
                                                title: {text: null}
                                            },
                                            yAxis: {
                                                min: 0,
                                                max: Math.max(1.5, a + 0.5),
                                                title: {text: null},
                                                labels: {enabled: !1},
                                                gridLineWidth: 0,
                                                currentPriceIndicator: {
                                                    enabled: !1
                                                }
                                            },
                                            plotOptions: {
                                                column: {
                                                    animation: !0,
                                                    minPointLength: 5,
                                                    colorByPoint: !0,
                                                    colors: n,
                                                    borderWidth: 0
                                                }
                                            }
                                        };
                                    return t.length
                                        ? r.a.createElement(k.a, {
                                              ref: "trx_chart",
                                              config: l
                                          })
                                        : null;
                                }
                            }
                        ]),
                        t
                    );
                })(),
                w = n(382),
                O = n(331);
            var N = function(e, t, n) {
                    var a = null == e ? 0 : e.length;
                    return a
                        ? ((t =
                              a - (t = n || void 0 === t ? 1 : Object(O.a)(t))),
                          Object(w.a)(e, t < 0 ? 0 : t, a))
                        : [];
                },
                j = (function() {
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
            var T = (function(e) {
                    function t() {
                        return (
                            (function(e, t) {
                                if (!(e instanceof t))
                                    throw new TypeError(
                                        "Cannot call a class as a function"
                                    );
                            })(this, t),
                            (function(e, t) {
                                if (!e)
                                    throw new ReferenceError(
                                        "this hasn't been initialised - super() hasn't been called"
                                    );
                                return !t ||
                                    ("object" != typeof t &&
                                        "function" != typeof t)
                                    ? e
                                    : t;
                            })(
                                this,
                                (t.__proto__ || Object.getPrototypeOf(t)).apply(
                                    this,
                                    arguments
                                )
                            )
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
                                key: "shouldComponentUpdate",
                                value: function(e) {
                                    if (e.blockTimes.length < 19) return !1;
                                    if (0 === this.props.blockTimes.length)
                                        return !0;
                                    var t = this.refs.chart
                                        ? this.refs.chart.chart
                                        : null;
                                    if (t) {
                                        var n = this._getData(e),
                                            a = n.blockTimes,
                                            r = n.colors,
                                            o = t.series[0],
                                            l = o.xData[o.xData.length - 1];
                                        if (o.xData.length)
                                            return (
                                                a.forEach(function(e) {
                                                    e[0] > l &&
                                                        o.addPoint(
                                                            e,
                                                            !1,
                                                            o.xData.length >= 30
                                                        );
                                                }),
                                                (t.options.plotOptions.column.colors = r),
                                                t.redraw(),
                                                !1
                                            );
                                    }
                                    return (
                                        e.blockTimes[
                                            e.blockTimes.length - 1
                                        ][0] !==
                                            this.props.blockTimes[
                                                this.props.blockTimes.length - 1
                                            ][0] ||
                                        e.blockTimes.length !==
                                            this.props.blockTimes.length
                                    );
                                }
                            },
                            {
                                key: "_getData",
                                value: function() {
                                    var e = this.props,
                                        t = e.blockTimes,
                                        n = e.head_block;
                                    return (
                                        t.filter(function(e) {
                                            return e[0] >= n - 30;
                                        }),
                                        t && t.length && (t = N(t, 30)),
                                        {
                                            blockTimes: t,
                                            colors: t.map(function(e) {
                                                return e[1] <= 5
                                                    ? "#50D2C2"
                                                    : e[1] <= 10
                                                        ? "#A0D3E8"
                                                        : e[1] <= 20
                                                            ? "#FCAB53"
                                                            : "#deb869";
                                            })
                                        }
                                    );
                                }
                            },
                            {
                                key: "render",
                                value: function() {
                                    var e = this._getData(this.props),
                                        t = e.blockTimes,
                                        n = e.colors,
                                        a = E.a.translate(
                                            "explorer.blocks.block_time"
                                        ),
                                        o = {
                                            chart: {
                                                type: "column",
                                                backgroundColor:
                                                    "rgba(255, 0, 0, 0)",
                                                spacing: [0, 0, 5, 0],
                                                height: 100
                                            },
                                            title: {text: null},
                                            credits: {enabled: !1},
                                            legend: {enabled: !1},
                                            rangeSelector: {enabled: !1},
                                            navigator: {enabled: !1},
                                            scrollbar: {enabled: !1},
                                            tooltip: {
                                                shared: !1,
                                                formatter: function() {
                                                    return (
                                                        a + ": " + this.y + "s"
                                                    );
                                                }
                                            },
                                            series: [
                                                {
                                                    name: "Block time",
                                                    data: t,
                                                    color: "#50D2C2"
                                                }
                                            ],
                                            xAxis: {
                                                labels: {enabled: !1},
                                                title: {text: null}
                                            },
                                            yAxis: {
                                                min: 0,
                                                title: {text: null},
                                                labels: {enabled: !1},
                                                gridLineWidth: 0,
                                                currentPriceIndicator: {
                                                    enabled: !1
                                                }
                                            },
                                            plotOptions: {
                                                column: {
                                                    animation: !0,
                                                    minPointLength: 3,
                                                    colorByPoint: !0,
                                                    colors: n,
                                                    borderWidth: 0
                                                }
                                            }
                                        };
                                    return t.length
                                        ? r.a.createElement(k.a, {
                                              ref: "chart",
                                              config: o
                                          })
                                        : null;
                                }
                            }
                        ]),
                        t
                    );
                })(),
                P = n(9),
                D = n.n(P),
                C = n(5),
                B = n(7),
                A = n.n(B),
                H = n(150),
                z = n(17),
                S = n(58),
                L = n.n(S),
                W = n(110),
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
            function U(e, t) {
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
            function G(e, t) {
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
            n(5084);
            var M = (function(e) {
                    function t() {
                        return (
                            U(this, t),
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
                        G(t, r.a.Component),
                        R(t, [
                            {
                                key: "shouldComponentUpdate",
                                value: function(e) {
                                    return e.blockTime !== this.props.blockTime;
                                }
                            },
                            {
                                key: "render",
                                value: function() {
                                    var e = this.props.blockTime,
                                        t =
                                            new Date().getTime() -
                                            new Date(e).getTime(),
                                        n = D()(
                                            "txtlabel",
                                            {success: t <= 6e3},
                                            {info: t > 6e3 && t <= 15e3},
                                            {warning: t > 15e3 && t <= 25e3},
                                            {error: t > 25e3}
                                        );
                                    return e
                                        ? r.a.createElement(
                                              "h3",
                                              {className: n},
                                              r.a.createElement(H.a, {time: e})
                                          )
                                        : null;
                                }
                            }
                        ]),
                        t
                    );
                })(),
                q = (function(e) {
                    function t(e) {
                        U(this, t);
                        var n = I(
                            this,
                            (t.__proto__ || Object.getPrototypeOf(t)).call(
                                this,
                                e
                            )
                        );
                        return (
                            (n.state = {
                                animateEnter: !1,
                                operationsHeight: null,
                                blocksHeight: null
                            }),
                            (n._updateHeight = n._updateHeight.bind(n)),
                            n
                        );
                    }
                    return (
                        G(t, r.a.Component),
                        R(t, [
                            {
                                key: "_getBlock",
                                value: function(e, t) {
                                    e &&
                                        ((e = parseInt(e, 10)),
                                        s.a.getLatest(e, t));
                                }
                            },
                            {
                                key: "componentWillMount",
                                value: function() {
                                    window.addEventListener(
                                        "resize",
                                        this._updateHeight,
                                        {capture: !1, passive: !0}
                                    );
                                }
                            },
                            {
                                key: "componentWillUnmount",
                                value: function() {
                                    window.removeEventListener(
                                        "resize",
                                        this._updateHeight
                                    );
                                }
                            },
                            {
                                key: "componentWillReceiveProps",
                                value: function(e) {
                                    if (0 === e.latestBlocks.size)
                                        return this._getInitialBlocks();
                                    this.state.animateEnter ||
                                        this.setState({animateEnter: !0});
                                    var t = e.dynGlobalObject.get(
                                        "head_block_number"
                                    );
                                    return e.latestBlocks.size >= 20 &&
                                        e.dynGlobalObject.get(
                                            "head_block_number"
                                        ) !== e.latestBlocks.get(0).id
                                        ? this._getBlock(t, t)
                                        : void 0;
                                }
                            },
                            {
                                key: "componentDidMount",
                                value: function() {
                                    this._getInitialBlocks();
                                    var e = this.refs.operations;
                                    L.a.initialize(e);
                                    var t = this.refs.blocks;
                                    L.a.initialize(t), this._updateHeight();
                                }
                            },
                            {
                                key: "shouldComponentUpdate",
                                value: function(e, t) {
                                    return (
                                        !A.a.is(
                                            e.latestBlocks,
                                            this.props.latestBlocks
                                        ) ||
                                        !C.a.are_equal_shallow(t, this.state)
                                    );
                                }
                            },
                            {
                                key: "componentDidUpdate",
                                value: function() {
                                    this._updateHeight();
                                }
                            },
                            {
                                key: "_getInitialBlocks",
                                value: function() {
                                    var e = parseInt(
                                        this.props.dynGlobalObject.get(
                                            "head_block_number"
                                        ),
                                        10
                                    );
                                    if (e)
                                        for (var t = 19; t >= 0; t--) {
                                            var n = !1;
                                            if (
                                                this.props.latestBlocks.size > 0
                                            )
                                                for (
                                                    var a = 0;
                                                    a <
                                                    this.props.latestBlocks
                                                        .size;
                                                    a++
                                                )
                                                    if (
                                                        this.props.latestBlocks.get(
                                                            a
                                                        ).id ===
                                                        e - t
                                                    ) {
                                                        n = !0;
                                                        break;
                                                    }
                                            n || this._getBlock(e - t, e);
                                        }
                                }
                            },
                            {
                                key: "_updateHeight",
                                value: function() {
                                    var e = this.refs.outerWrapper.offsetHeight,
                                        t = this.refs.operationsText
                                            .offsetHeight,
                                        n = this.refs.blocksText.offsetHeight;
                                    this.setState(
                                        {
                                            operationsHeight: e - t,
                                            blocksHeight: e - n
                                        },
                                        this.psUpdate
                                    );
                                }
                            },
                            {
                                key: "psUpdate",
                                value: function() {
                                    var e = this.refs.operations;
                                    L.a.update(e);
                                    var t = this.refs.blocks;
                                    L.a.update(t);
                                }
                            },
                            {
                                key: "render",
                                value: function() {
                                    var e = this.props,
                                        t = e.latestBlocks,
                                        n = e.latestTransactions,
                                        a = e.globalObject,
                                        o = e.dynGlobalObject,
                                        l = e.coreAsset,
                                        c = this.state,
                                        s = c.blocksHeight,
                                        u = c.operationsHeight,
                                        d = this.props.getDynamicObject(
                                            l.get("dynamic_asset_data_id")
                                        ),
                                        h = null,
                                        v = null,
                                        g = null,
                                        k = 0,
                                        y = t.size,
                                        E = 0,
                                        _ = [],
                                        w = 0;
                                    if (t && t.size >= 20) {
                                        var O = void 0,
                                            N = void 0,
                                            j = void 0;
                                        t
                                            .filter(function(e, t) {
                                                return (
                                                    e.id ===
                                                    o.get("head_block_number") -
                                                        t
                                                );
                                            })
                                            .sort(function(e, t) {
                                                return e.id - t.id;
                                            })
                                            .forEach(function(e, t) {
                                                (k += e.transactions.length),
                                                    t > 0
                                                        ? (_.push([
                                                              e.id,
                                                              (e.timestamp -
                                                                  O) /
                                                                  1e3
                                                          ]),
                                                          (N = e.timestamp))
                                                        : (j = e.timestamp),
                                                    (O = e.timestamp);
                                            }),
                                            (h = t
                                                .sort(function(e, t) {
                                                    return t.id - e.id;
                                                })
                                                .take(20)
                                                .map(function(e) {
                                                    return r.a.createElement(
                                                        "tr",
                                                        {key: e.id},
                                                        r.a.createElement(
                                                            "td",
                                                            null,
                                                            r.a.createElement(
                                                                i.b,
                                                                {
                                                                    to:
                                                                        "/block/" +
                                                                        e.id
                                                                },
                                                                "#",
                                                                C.a.format_number(
                                                                    e.id,
                                                                    0
                                                                )
                                                            )
                                                        ),
                                                        r.a.createElement(
                                                            "td",
                                                            null,
                                                            r.a.createElement(
                                                                p.a,
                                                                {
                                                                    value:
                                                                        e.timestamp,
                                                                    format:
                                                                        "time"
                                                                }
                                                            )
                                                        ),
                                                        r.a.createElement(
                                                            "td",
                                                            null,
                                                            r.a.createElement(
                                                                b.a,
                                                                {
                                                                    witness:
                                                                        e.witness
                                                                }
                                                            )
                                                        ),
                                                        r.a.createElement(
                                                            "td",
                                                            null,
                                                            C.a.format_number(
                                                                e.transactions
                                                                    .length,
                                                                0
                                                            )
                                                        )
                                                    );
                                                })
                                                .toArray());
                                        var P = 0;
                                        (v = n
                                            .sort(function(e, t) {
                                                return (
                                                    t.block_num - e.block_num
                                                );
                                            })
                                            .take(20)
                                            .map(function(e) {
                                                var t = 0;
                                                return e.operations
                                                    .map(function(n) {
                                                        return P > 15
                                                            ? null
                                                            : r.a.createElement(
                                                                  f.a,
                                                                  {
                                                                      key: P++,
                                                                      op: n,
                                                                      result:
                                                                          e
                                                                              .operation_results[
                                                                              t++
                                                                          ],
                                                                      block:
                                                                          e.block_num,
                                                                      hideFee: !0,
                                                                      hideOpLabel: !1,
                                                                      current:
                                                                          "1.2.0",
                                                                      hideDate: !0,
                                                                      hidePending: !0
                                                                  }
                                                              );
                                                    })
                                                    .filter(function(e) {
                                                        return !!e;
                                                    });
                                            })
                                            .toArray()),
                                            (g = t.first().timestamp),
                                            (w = _.reduce(function(e, t, n, a) {
                                                return e + t[1] / a.length;
                                            }, 0)),
                                            (E = k / ((N - j) / 1e3));
                                    }
                                    return r.a.createElement(
                                        "div",
                                        {
                                            ref: "outerWrapper",
                                            className: "grid-block vertical"
                                        },
                                        r.a.createElement(
                                            "div",
                                            {
                                                className:
                                                    "align-center grid-block shrink small-horizontal blocks-row"
                                            },
                                            r.a.createElement(
                                                "div",
                                                {
                                                    className:
                                                        "grid-block text-center small-6 medium-3"
                                                },
                                                r.a.createElement(
                                                    "div",
                                                    {
                                                        className:
                                                            "grid-content no-overflow"
                                                    },
                                                    r.a.createElement(
                                                        "span",
                                                        {className: "txtlabel"},
                                                        r.a.createElement(m.a, {
                                                            component: "span",
                                                            content:
                                                                "explorer.blocks.current_block"
                                                        })
                                                    ),
                                                    r.a.createElement(
                                                        "h2",
                                                        null,
                                                        "#",
                                                        C.a.format_number(
                                                            o.get(
                                                                "head_block_number"
                                                            ),
                                                            0
                                                        )
                                                    )
                                                )
                                            ),
                                            r.a.createElement(
                                                "div",
                                                {
                                                    className:
                                                        "grid-block text-center small-6 medium-3"
                                                },
                                                r.a.createElement(
                                                    "div",
                                                    {
                                                        className:
                                                            "grid-content no-overflow"
                                                    },
                                                    r.a.createElement(
                                                        "span",
                                                        {className: "txtlabel"},
                                                        r.a.createElement(m.a, {
                                                            component: "span",
                                                            content:
                                                                "explorer.blocks.last_block"
                                                        })
                                                    ),
                                                    r.a.createElement(M, {
                                                        blockTime: g
                                                    })
                                                )
                                            ),
                                            r.a.createElement(
                                                "div",
                                                {
                                                    className:
                                                        "grid-block text-center small-6 medium-3"
                                                },
                                                r.a.createElement(
                                                    "div",
                                                    {
                                                        className:
                                                            "grid-content no-overflow"
                                                    },
                                                    r.a.createElement(
                                                        "span",
                                                        {className: "txtlabel"},
                                                        r.a.createElement(m.a, {
                                                            component: "span",
                                                            content:
                                                                "explorer.blocks.trx_per_sec"
                                                        })
                                                    ),
                                                    r.a.createElement(
                                                        "h2",
                                                        null,
                                                        C.a.format_number(E, 2)
                                                    )
                                                )
                                            ),
                                            r.a.createElement(
                                                "div",
                                                {
                                                    className:
                                                        "grid-block text-center small-6 medium-3"
                                                },
                                                r.a.createElement(
                                                    "div",
                                                    {
                                                        className:
                                                            "grid-content no-overflow"
                                                    },
                                                    r.a.createElement(
                                                        "span",
                                                        {className: "txtlabel"},
                                                        r.a.createElement(m.a, {
                                                            component: "span",
                                                            content:
                                                                "explorer.blocks.avg_conf_time"
                                                        })
                                                    ),
                                                    r.a.createElement(
                                                        "h2",
                                                        null,
                                                        C.a.format_number(
                                                            w / 2,
                                                            2
                                                        ),
                                                        "s"
                                                    )
                                                )
                                            )
                                        ),
                                        r.a.createElement(
                                            "div",
                                            {
                                                className:
                                                    "align-center grid-block shrink small-horizontal  blocks-row"
                                            },
                                            r.a.createElement(
                                                "div",
                                                {
                                                    className:
                                                        "grid-block text-center small-6 medium-3"
                                                },
                                                r.a.createElement(
                                                    "div",
                                                    {
                                                        className:
                                                            "grid-content no-overflow clear-fix"
                                                    },
                                                    r.a.createElement(
                                                        "span",
                                                        {className: "txtlabel"},
                                                        r.a.createElement(m.a, {
                                                            component: "span",
                                                            content:
                                                                "explorer.blocks.active_witnesses"
                                                        })
                                                    ),
                                                    r.a.createElement(
                                                        "h2",
                                                        {
                                                            className:
                                                                "txtlabel success"
                                                        },
                                                        a.get(
                                                            "active_witnesses"
                                                        ).size
                                                    )
                                                )
                                            ),
                                            r.a.createElement(
                                                "div",
                                                {
                                                    className:
                                                        "grid-block text-center small-6 medium-3"
                                                },
                                                r.a.createElement(
                                                    "div",
                                                    {
                                                        className:
                                                            "grid-content no-overflow clear-fix"
                                                    },
                                                    r.a.createElement(
                                                        "span",
                                                        {className: "txtlabel"},
                                                        r.a.createElement(m.a, {
                                                            component: "span",
                                                            content:
                                                                "explorer.blocks.active_committee_members"
                                                        })
                                                    ),
                                                    r.a.createElement(
                                                        "h2",
                                                        {
                                                            className:
                                                                "txtlabel success"
                                                        },
                                                        a.get(
                                                            "active_committee_members"
                                                        ).size
                                                    )
                                                )
                                            ),
                                            r.a.createElement(
                                                "div",
                                                {
                                                    className:
                                                        "grid-block text-center small-6 medium-3"
                                                },
                                                r.a.createElement(
                                                    "div",
                                                    {
                                                        className:
                                                            "grid-content no-overflow clear-fix"
                                                    },
                                                    r.a.createElement(
                                                        "span",
                                                        {className: "txtlabel"},
                                                        r.a.createElement(m.a, {
                                                            component: "span",
                                                            content:
                                                                "explorer.blocks.trx_per_block"
                                                        })
                                                    ),
                                                    r.a.createElement(
                                                        "h2",
                                                        null,
                                                        C.a.format_number(
                                                            k / y || 0,
                                                            2
                                                        )
                                                    )
                                                )
                                            ),
                                            r.a.createElement(
                                                "div",
                                                {
                                                    className:
                                                        "grid-block text-center small-6 medium-3"
                                                },
                                                r.a.createElement(
                                                    "div",
                                                    {
                                                        className:
                                                            "grid-content no-overflow clear-fix"
                                                    },
                                                    r.a.createElement(
                                                        "span",
                                                        {className: "txtlabel"},
                                                        r.a.createElement(m.a, {
                                                            component: "span",
                                                            content:
                                                                "explorer.blocks.recently_missed_blocks"
                                                        })
                                                    ),
                                                    r.a.createElement(
                                                        "h2",
                                                        {
                                                            className:
                                                                "txtlabel warning",
                                                            style: {
                                                                fontWeight:
                                                                    "100"
                                                            }
                                                        },
                                                        o.get(
                                                            "recently_missed_count"
                                                        )
                                                    )
                                                )
                                            )
                                        ),
                                        r.a.createElement(
                                            "div",
                                            {
                                                className:
                                                    "align-center grid-block shrink small-vertical medium-horizontal blocks-row"
                                            },
                                            r.a.createElement(
                                                "div",
                                                {
                                                    className:
                                                        "grid-block text-center small-12 medium-3"
                                                },
                                                r.a.createElement(
                                                    "div",
                                                    {
                                                        className:
                                                            "grid-content no-overflow clear-fix"
                                                    },
                                                    r.a.createElement(
                                                        "span",
                                                        {className: "txtlabel"},
                                                        r.a.createElement(m.a, {
                                                            component: "span",
                                                            content:
                                                                "explorer.asset.summary.current_supply"
                                                        })
                                                    ),
                                                    r.a.createElement(
                                                        "h3",
                                                        {className: "txtlabel"},
                                                        d
                                                            ? r.a.createElement(
                                                                  z.a,
                                                                  {
                                                                      amount: d.get(
                                                                          "current_supply"
                                                                      ),
                                                                      asset: l.get(
                                                                          "id"
                                                                      ),
                                                                      decimalOffset: 5
                                                                  }
                                                              )
                                                            : null
                                                    )
                                                )
                                            ),
                                            r.a.createElement(
                                                "div",
                                                {
                                                    className:
                                                        "grid-block text-center small-12 medium-3"
                                                },
                                                r.a.createElement(
                                                    "div",
                                                    {
                                                        className:
                                                            "grid-content no-overflow"
                                                    },
                                                    r.a.createElement(
                                                        "div",
                                                        {className: "txtlabel"},
                                                        r.a.createElement(m.a, {
                                                            component: "span",
                                                            content:
                                                                "explorer.blocks.block_times"
                                                        })
                                                    ),
                                                    r.a.createElement(T, {
                                                        blockTimes: _,
                                                        head_block_number: o.get(
                                                            "head_block_number"
                                                        )
                                                    })
                                                )
                                            ),
                                            r.a.createElement(
                                                "div",
                                                {
                                                    className:
                                                        "grid-block text-center small-12 medium-3"
                                                },
                                                r.a.createElement(
                                                    "div",
                                                    {
                                                        className:
                                                            "grid-content no-overflow"
                                                    },
                                                    r.a.createElement(
                                                        "div",
                                                        {className: "txtlabel"},
                                                        r.a.createElement(m.a, {
                                                            component: "span",
                                                            content:
                                                                "explorer.blocks.trx_per_block"
                                                        })
                                                    ),
                                                    r.a.createElement(x, {
                                                        blocks: t,
                                                        head_block: o.get(
                                                            "head_block_number"
                                                        )
                                                    })
                                                )
                                            ),
                                            r.a.createElement(
                                                "div",
                                                {
                                                    className:
                                                        "grid-block text-center small-12 medium-3"
                                                },
                                                r.a.createElement(
                                                    "div",
                                                    {
                                                        className:
                                                            "grid-content no-overflow clear-fix"
                                                    },
                                                    r.a.createElement(
                                                        "span",
                                                        {className: "txtlabel"},
                                                        r.a.createElement(m.a, {
                                                            component: "span",
                                                            content:
                                                                "explorer.asset.summary.stealth_supply"
                                                        })
                                                    ),
                                                    r.a.createElement(
                                                        "h3",
                                                        {className: "txtlabel"},
                                                        d
                                                            ? r.a.createElement(
                                                                  z.a,
                                                                  {
                                                                      amount: d.get(
                                                                          "confidential_supply"
                                                                      ),
                                                                      asset: l.get(
                                                                          "id"
                                                                      ),
                                                                      decimalOffset: 5
                                                                  }
                                                              )
                                                            : null
                                                    )
                                                )
                                            )
                                        ),
                                        r.a.createElement(
                                            "div",
                                            {
                                                ref: "transactionsBlock",
                                                className:
                                                    "grid-block no-overflow"
                                            },
                                            r.a.createElement(
                                                "div",
                                                {
                                                    className:
                                                        "grid-block small-12 medium-6 vertical no-overflow",
                                                    style: {paddingBottom: 0}
                                                },
                                                r.a.createElement(
                                                    "div",
                                                    {
                                                        className:
                                                            "grid-block vertical no-overflow generic-bordered-box"
                                                    },
                                                    r.a.createElement(
                                                        "div",
                                                        {ref: "operationsText"},
                                                        r.a.createElement(
                                                            "div",
                                                            {
                                                                className:
                                                                    "block-content-header"
                                                            },
                                                            r.a.createElement(
                                                                m.a,
                                                                {
                                                                    content:
                                                                        "account.recent"
                                                                }
                                                            )
                                                        ),
                                                        r.a.createElement(
                                                            "table",
                                                            null,
                                                            r.a.createElement(
                                                                "thead",
                                                                null,
                                                                r.a.createElement(
                                                                    "tr",
                                                                    null,
                                                                    r.a.createElement(
                                                                        "th",
                                                                        null,
                                                                        r.a.createElement(
                                                                            m.a,
                                                                            {
                                                                                content:
                                                                                    "account.votes.info"
                                                                            }
                                                                        )
                                                                    )
                                                                )
                                                            )
                                                        )
                                                    ),
                                                    r.a.createElement(
                                                        "div",
                                                        {
                                                            className:
                                                                "grid-block",
                                                            style: {
                                                                maxHeight:
                                                                    u ||
                                                                    "400px",
                                                                overflow:
                                                                    "hidden"
                                                            },
                                                            ref: "operations"
                                                        },
                                                        r.a.createElement(
                                                            "table",
                                                            null,
                                                            r.a.createElement(
                                                                "tbody",
                                                                null,
                                                                v
                                                            )
                                                        )
                                                    )
                                                )
                                            ),
                                            r.a.createElement(
                                                "div",
                                                {
                                                    className:
                                                        "grid-block medium-6 show-for-medium vertical no-overflow",
                                                    style: {
                                                        paddingBottom: 0,
                                                        paddingLeft: 5
                                                    }
                                                },
                                                r.a.createElement(
                                                    "div",
                                                    {
                                                        className:
                                                            "grid-block vertical no-overflow generic-bordered-box"
                                                    },
                                                    r.a.createElement(
                                                        "div",
                                                        {ref: "blocksText"},
                                                        r.a.createElement(
                                                            "div",
                                                            {
                                                                className:
                                                                    "block-content-header"
                                                            },
                                                            r.a.createElement(
                                                                m.a,
                                                                {
                                                                    component:
                                                                        "span",
                                                                    content:
                                                                        "explorer.blocks.recent"
                                                                }
                                                            )
                                                        )
                                                    ),
                                                    r.a.createElement(
                                                        "div",
                                                        {
                                                            className:
                                                                "grid-block vertical",
                                                            style: {
                                                                maxHeight:
                                                                    s ||
                                                                    "438px",
                                                                overflow:
                                                                    "hidden"
                                                            },
                                                            ref: "blocks"
                                                        },
                                                        r.a.createElement(
                                                            "table",
                                                            null,
                                                            r.a.createElement(
                                                                "thead",
                                                                null,
                                                                r.a.createElement(
                                                                    "tr",
                                                                    null,
                                                                    r.a.createElement(
                                                                        "th",
                                                                        null,
                                                                        r.a.createElement(
                                                                            m.a,
                                                                            {
                                                                                component:
                                                                                    "span",
                                                                                content:
                                                                                    "explorer.block.id"
                                                                            }
                                                                        )
                                                                    ),
                                                                    r.a.createElement(
                                                                        "th",
                                                                        null,
                                                                        r.a.createElement(
                                                                            m.a,
                                                                            {
                                                                                component:
                                                                                    "span",
                                                                                content:
                                                                                    "explorer.block.date"
                                                                            }
                                                                        )
                                                                    ),
                                                                    r.a.createElement(
                                                                        "th",
                                                                        null,
                                                                        r.a.createElement(
                                                                            m.a,
                                                                            {
                                                                                component:
                                                                                    "span",
                                                                                content:
                                                                                    "explorer.block.witness"
                                                                            }
                                                                        )
                                                                    ),
                                                                    r.a.createElement(
                                                                        "th",
                                                                        null,
                                                                        r.a.createElement(
                                                                            m.a,
                                                                            {
                                                                                component:
                                                                                    "span",
                                                                                content:
                                                                                    "explorer.block.count"
                                                                            }
                                                                        )
                                                                    )
                                                                )
                                                            ),
                                                            r.a.createElement(
                                                                W.a,
                                                                {
                                                                    component:
                                                                        "tbody",
                                                                    transitionName:
                                                                        "newrow"
                                                                },
                                                                h
                                                            )
                                                        )
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
            (q.propTypes = {
                globalObject: d.a.ChainObject.isRequired,
                dynGlobalObject: d.a.ChainObject.isRequired
            }),
                (q.defaultProps = {
                    globalObject: "2.0.0",
                    dynGlobalObject: "2.1.0",
                    latestBlocks: {},
                    assets: {},
                    accounts: {},
                    height: 1
                }),
                (q = Object(h.a)(q, {show_loader: !0}));
            var F = (q = Object(v.a)(q, {
                    propNames: ["coreAsset"],
                    withDynamic: !0
                })),
                J = n(121),
                K = (function() {
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
            var Q = (function(e) {
                function t() {
                    return (
                        (function(e, t) {
                            if (!(e instanceof t))
                                throw new TypeError(
                                    "Cannot call a class as a function"
                                );
                        })(this, t),
                        (function(e, t) {
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
                            (t.__proto__ || Object.getPrototypeOf(t)).apply(
                                this,
                                arguments
                            )
                        )
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
                    K(t, [
                        {
                            key: "render",
                            value: function() {
                                var e = r.a.createElement(
                                    c.a,
                                    {
                                        stores: [o.a],
                                        inject: {
                                            latestBlocks: function() {
                                                return o.a.getState()
                                                    .latestBlocks;
                                            },
                                            latestTransactions: function() {
                                                return o.a.getState()
                                                    .latestTransactions;
                                            }
                                        }
                                    },
                                    r.a.createElement(F, null)
                                );
                                return r.a.createElement(
                                    "div",
                                    {className: "content"},
                                    r.a.createElement(J.a, {
                                        defaultActiveTab:
                                            "explorer.blocks.title",
                                        defaultContent: e
                                    })
                                );
                            }
                        }
                    ]),
                    t
                );
            })();
            t.default = Q;
        }
    }
]);