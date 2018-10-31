(window.webpackJsonp = window.webpackJsonp || []).push([
    [17],
    {
        4997: function(e, t, a) {
            "use strict";
            a.r(t);
            var n = a(0),
                r = a.n(n),
                l = a(106),
                s = a(8),
                i = a(51),
                o = a.n(i),
                c = a(2),
                u = a.n(c),
                m = a(77),
                p = a(10),
                d = a(11),
                f = a(7),
                y = a.n(f),
                h = a(1),
                E = a.n(h),
                b = a(40),
                k = a(48),
                v = a(3),
                g = a.n(v),
                _ = a(17),
                w = a(22),
                x = a(4),
                A = a(9),
                P = a.n(A),
                C = a(5),
                O = a(37),
                F = a(85),
                L = a(107),
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
            function M(e, t, a) {
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
            var S = new F.a("__graphene__"),
                N = (function(e) {
                    function t(e) {
                        !(function(e, t) {
                            if (!(e instanceof t))
                                throw new TypeError(
                                    "Cannot call a class as a function"
                                );
                        })(this, t);
                        var a = (function(e, t) {
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
                            (a.state = {
                                foundLast: !1,
                                lastAsset: "",
                                isLoading: !1,
                                assetsFetched: 0,
                                activeFilter: "market",
                                filterUIA: e.filterUIA || "",
                                filterMPA: e.filterMPA || "",
                                filterPM: e.filterPM || ""
                            }),
                            a
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
                                value: function(e, t) {
                                    return (
                                        !y.a.is(e.assets, this.props.assets) ||
                                        !C.a.are_equal_shallow(t, this.state)
                                    );
                                }
                            },
                            {
                                key: "componentWillMount",
                                value: function() {
                                    this._checkAssets(this.props.assets, !0);
                                }
                            },
                            {
                                key: "_checkAssets",
                                value: function(e, t) {
                                    this.setState({isLoading: !0}),
                                        t && (e = y.a.Map());
                                    var a = e
                                        .sort(function(e, t) {
                                            return e.symbol > t.symbol
                                                ? 1
                                                : e.symbol < t.symbol
                                                    ? -1
                                                    : 0;
                                        })
                                        .last();
                                    0 === e.size
                                        ? (m.a.getAssetList.defer("A", 101),
                                          this.setState({assetsFetched: 101}))
                                        : e.size >= this.state.assetsFetched
                                            ? (m.a.getAssetList.defer(
                                                  a.symbol,
                                                  101
                                              ),
                                              this.setState({
                                                  assetsFetched:
                                                      this.state.assetsFetched +
                                                      101 -
                                                      1
                                              }))
                                            : e.size <
                                                  this.state.assetsFetched &&
                                              (S.set("totalAssets", e.size),
                                              this.setState({isLoading: !1}));
                                }
                            },
                            {
                                key: "componentWillReceiveProps",
                                value: function(e) {
                                    e.assets !== this.props.assets &&
                                        this._checkAssets(e.assets);
                                }
                            },
                            {
                                key: "linkToAccount",
                                value: function(e) {
                                    return e
                                        ? r.a.createElement(b.a, {account: e})
                                        : r.a.createElement("span", null, "-");
                                }
                            },
                            {
                                key: "_toggleFilter",
                                value: function(e) {
                                    this.setState({activeFilter: e});
                                }
                            },
                            {
                                key: "_onFilter",
                                value: function(e, t) {
                                    this.setState(
                                        M({}, e, t.target.value.toUpperCase())
                                    ),
                                        p.a.changeViewSetting(
                                            M(
                                                {},
                                                e,
                                                t.target.value.toUpperCase()
                                            )
                                        );
                                }
                            },
                            {
                                key: "render",
                                value: function() {
                                    var e = this,
                                        t = this.props.assets,
                                        a = this.state.activeFilter,
                                        n = g.a
                                            .translate("markets.filter")
                                            .toUpperCase(),
                                        l = x.b.getAsset("1.3.0"),
                                        s = void 0,
                                        i = void 0,
                                        o = void 0;
                                    return (
                                        "user" == a &&
                                            (s = t
                                                .filter(function(t) {
                                                    return (
                                                        !t.market_asset &&
                                                        -1 !==
                                                            t.symbol.indexOf(
                                                                e.state
                                                                    .filterUIA
                                                            )
                                                    );
                                                })
                                                .map(function(t) {
                                                    var a = k.a.parseDescription(
                                                            t.options
                                                                .description
                                                        ),
                                                        n =
                                                            t.symbol +
                                                            "_" +
                                                            (a.market
                                                                ? a.market
                                                                : l
                                                                    ? l.get(
                                                                          "symbol"
                                                                      )
                                                                    : "LLC");
                                                    return r.a.createElement(
                                                        "tr",
                                                        {key: t.symbol},
                                                        r.a.createElement(
                                                            "td",
                                                            null,
                                                            r.a.createElement(
                                                                d.b,
                                                                {
                                                                    to:
                                                                        "/asset/" +
                                                                        t.symbol
                                                                },
                                                                r.a.createElement(
                                                                    L.a,
                                                                    {
                                                                        showIcon: !0,
                                                                        asset:
                                                                            t.id
                                                                    }
                                                                )
                                                            )
                                                        ),
                                                        r.a.createElement(
                                                            "td",
                                                            null,
                                                            e.linkToAccount(
                                                                t.issuer
                                                            )
                                                        ),
                                                        r.a.createElement(
                                                            "td",
                                                            null,
                                                            r.a.createElement(
                                                                _.a,
                                                                {
                                                                    amount:
                                                                        t
                                                                            .dynamic
                                                                            .current_supply,
                                                                    asset: t.id,
                                                                    hide_asset: !0
                                                                }
                                                            )
                                                        ),
                                                        r.a.createElement(
                                                            "td",
                                                            null,
                                                            r.a.createElement(
                                                                d.b,
                                                                {
                                                                    className:
                                                                        "btn outline",
                                                                    to:
                                                                        "/market/" +
                                                                        n
                                                                },
                                                                r.a.createElement(
                                                                    E.a,
                                                                    {
                                                                        content:
                                                                            "header.exchange"
                                                                    }
                                                                )
                                                            )
                                                        )
                                                    );
                                                })
                                                .sort(function(e, t) {
                                                    return e.key > t.key
                                                        ? 1
                                                        : e.key < t.key
                                                            ? -1
                                                            : 0;
                                                })
                                                .toArray()),
                                        "market" == a &&
                                            (i = t
                                                .filter(function(t) {
                                                    return (
                                                        t.bitasset_data &&
                                                        !t.bitasset_data
                                                            .is_prediction_market &&
                                                        -1 !==
                                                            t.symbol.indexOf(
                                                                e.state
                                                                    .filterMPA
                                                            )
                                                    );
                                                })
                                                .map(function(t) {
                                                    var a = k.a.parseDescription(
                                                            t.options
                                                                .description
                                                        ),
                                                        n =
                                                            t.symbol +
                                                            "_" +
                                                            (a.market
                                                                ? a.market
                                                                : l
                                                                    ? l.get(
                                                                          "symbol"
                                                                      )
                                                                    : "LLC");
                                                    return r.a.createElement(
                                                        "tr",
                                                        {key: t.symbol},
                                                        r.a.createElement(
                                                            "td",
                                                            null,
                                                            r.a.createElement(
                                                                d.b,
                                                                {
                                                                    to:
                                                                        "/asset/" +
                                                                        t.symbol
                                                                },
                                                                r.a.createElement(
                                                                    L.a,
                                                                    {
                                                                        showIcon: !0,
                                                                        asset:
                                                                            t.id
                                                                    }
                                                                )
                                                            )
                                                        ),
                                                        r.a.createElement(
                                                            "td",
                                                            null,
                                                            e.linkToAccount(
                                                                t.issuer
                                                            )
                                                        ),
                                                        r.a.createElement(
                                                            "td",
                                                            null,
                                                            r.a.createElement(
                                                                _.a,
                                                                {
                                                                    amount:
                                                                        t
                                                                            .dynamic
                                                                            .current_supply,
                                                                    asset: t.id,
                                                                    hide_asset: !0
                                                                }
                                                            )
                                                        ),
                                                        r.a.createElement(
                                                            "td",
                                                            null,
                                                            r.a.createElement(
                                                                d.b,
                                                                {
                                                                    className:
                                                                        "btn outline",
                                                                    to:
                                                                        "/market/" +
                                                                        n
                                                                },
                                                                r.a.createElement(
                                                                    E.a,
                                                                    {
                                                                        content:
                                                                            "header.exchange"
                                                                    }
                                                                )
                                                            )
                                                        )
                                                    );
                                                })
                                                .sort(function(e, t) {
                                                    return e.key > t.key
                                                        ? 1
                                                        : e.key < t.key
                                                            ? -1
                                                            : 0;
                                                })
                                                .toArray()),
                                        "prediction" == a &&
                                            (o = t
                                                .filter(function(t) {
                                                    var a = k.a.parseDescription(
                                                        t.options.description
                                                    );
                                                    return (
                                                        t.bitasset_data &&
                                                        t.bitasset_data
                                                            .is_prediction_market &&
                                                        (-1 !==
                                                            t.symbol
                                                                .toLowerCase()
                                                                .indexOf(
                                                                    e.state.filterPM.toLowerCase()
                                                                ) ||
                                                            -1 !==
                                                                a.main
                                                                    .toLowerCase()
                                                                    .indexOf(
                                                                        e.state.filterPM.toLowerCase()
                                                                    ))
                                                    );
                                                })
                                                .map(function(e) {
                                                    var t = k.a.parseDescription(
                                                            e.options
                                                                .description
                                                        ),
                                                        a =
                                                            e.symbol +
                                                            "_" +
                                                            (t.market
                                                                ? t.market
                                                                : l
                                                                    ? l.get(
                                                                          "symbol"
                                                                      )
                                                                    : "LLC");
                                                    return r.a.createElement(
                                                        "tr",
                                                        {
                                                            key: e.id.split(
                                                                "."
                                                            )[2]
                                                        },
                                                        r.a.createElement(
                                                            "td",
                                                            {
                                                                style: {
                                                                    width: "80%"
                                                                }
                                                            },
                                                            r.a.createElement(
                                                                "div",
                                                                {
                                                                    style: {
                                                                        paddingTop: 10,
                                                                        fontWeight:
                                                                            "bold"
                                                                    }
                                                                },
                                                                r.a.createElement(
                                                                    d.b,
                                                                    {
                                                                        to:
                                                                            "/asset/" +
                                                                            e.symbol
                                                                    },
                                                                    r.a.createElement(
                                                                        w.a,
                                                                        {
                                                                            name:
                                                                                e.symbol
                                                                        }
                                                                    )
                                                                ),
                                                                t.condition
                                                                    ? r.a.createElement(
                                                                          "span",
                                                                          null,
                                                                          " (",
                                                                          t.condition,
                                                                          ")"
                                                                      )
                                                                    : null
                                                            ),
                                                            t
                                                                ? r.a.createElement(
                                                                      "div",
                                                                      {
                                                                          style: {
                                                                              padding:
                                                                                  "10px 20px 5px 0",
                                                                              lineHeight:
                                                                                  "18px"
                                                                          }
                                                                      },
                                                                      t.main
                                                                  )
                                                                : null,
                                                            r.a.createElement(
                                                                "div",
                                                                {
                                                                    style: {
                                                                        padding:
                                                                            "0 20px 5px 0",
                                                                        lineHeight:
                                                                            "18px"
                                                                    }
                                                                },
                                                                r.a.createElement(
                                                                    b.a,
                                                                    {
                                                                        account:
                                                                            e.issuer
                                                                    }
                                                                ),
                                                                r.a.createElement(
                                                                    "span",
                                                                    null,
                                                                    " ",
                                                                    "-",
                                                                    " ",
                                                                    r.a.createElement(
                                                                        _.a,
                                                                        {
                                                                            amount:
                                                                                e
                                                                                    .dynamic
                                                                                    .current_supply,
                                                                            asset:
                                                                                e.id
                                                                        }
                                                                    )
                                                                ),
                                                                t.expiry
                                                                    ? r.a.createElement(
                                                                          "span",
                                                                          null,
                                                                          " - ",
                                                                          t.expiry
                                                                      )
                                                                    : null
                                                            )
                                                        ),
                                                        r.a.createElement(
                                                            "td",
                                                            {
                                                                style: {
                                                                    width: "20%"
                                                                }
                                                            },
                                                            r.a.createElement(
                                                                d.b,
                                                                {
                                                                    className:
                                                                        "btn outline",
                                                                    to:
                                                                        "/market/" +
                                                                        a
                                                                },
                                                                r.a.createElement(
                                                                    E.a,
                                                                    {
                                                                        content:
                                                                            "header.exchange"
                                                                    }
                                                                )
                                                            )
                                                        )
                                                    );
                                                })
                                                .sort(function(e, t) {
                                                    return e.key > t.key
                                                        ? -1
                                                        : e.key < t.key
                                                            ? 1
                                                            : 0;
                                                })
                                                .toArray()),
                                        r.a.createElement(
                                            "div",
                                            null,
                                            r.a.createElement(
                                                "div",
                                                {className: "header-selector"},
                                                r.a.createElement(
                                                    "div",
                                                    {className: "selector"},
                                                    r.a.createElement(
                                                        "ul",
                                                        {
                                                            className:
                                                                "markets-list"
                                                        },
                                                        r.a.createElement(
                                                            "li",
                                                            {
                                                                className: P()(
                                                                    "markets-list__item",
                                                                    {
                                                                        active:
                                                                            "market" ==
                                                                            a
                                                                    }
                                                                ),
                                                                onClick: this._toggleFilter.bind(
                                                                    this,
                                                                    "market"
                                                                )
                                                            },
                                                            g.a.translate(
                                                                "explorer.assets.market"
                                                            )
                                                        ),
                                                        r.a.createElement(
                                                            "li",
                                                            {
                                                                className: P()(
                                                                    "markets-list__item",
                                                                    {
                                                                        active:
                                                                            "user" ==
                                                                            a
                                                                    }
                                                                ),
                                                                onClick: this._toggleFilter.bind(
                                                                    this,
                                                                    "user"
                                                                )
                                                            },
                                                            g.a.translate(
                                                                "explorer.assets.user"
                                                            )
                                                        ),
                                                        r.a.createElement(
                                                            "li",
                                                            {
                                                                className: P()(
                                                                    "markets-list__item",
                                                                    {
                                                                        active:
                                                                            "prediction" ==
                                                                            a
                                                                    }
                                                                ),
                                                                onClick: this._toggleFilter.bind(
                                                                    this,
                                                                    "prediction"
                                                                )
                                                            },
                                                            g.a.translate(
                                                                "explorer.assets.prediction"
                                                            )
                                                        )
                                                    )
                                                )
                                            ),
                                            this.state.isLoading
                                                ? r.a.createElement(O.a, null)
                                                : null,
                                            "market" == a
                                                ? r.a.createElement(
                                                      "div",
                                                      {
                                                          style: {
                                                              marginTop: "20px"
                                                          }
                                                      },
                                                      r.a.createElement(
                                                          "div",
                                                          null,
                                                          r.a.createElement(
                                                              "input",
                                                              {
                                                                  style: {
                                                                      maxWidth:
                                                                          "500px"
                                                                  },
                                                                  placeholder: n,
                                                                  type: "text",
                                                                  value: this
                                                                      .state
                                                                      .filterMPA,
                                                                  onChange: this._onFilter.bind(
                                                                      this,
                                                                      "filterMPA"
                                                                  )
                                                              }
                                                          )
                                                      )
                                                  )
                                                : null,
                                            "market" == a
                                                ? r.a.createElement(
                                                      "div",
                                                      {
                                                          style: {
                                                              paddingBottom: 20
                                                          }
                                                      },
                                                      r.a.createElement(
                                                          "div",
                                                          {
                                                              className:
                                                                  "market-list-wrap"
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
                                                                              E.a,
                                                                              {
                                                                                  component:
                                                                                      "span",
                                                                                  content:
                                                                                      "explorer.assets.symbol"
                                                                              }
                                                                          )
                                                                      ),
                                                                      r.a.createElement(
                                                                          "th",
                                                                          null,
                                                                          r.a.createElement(
                                                                              E.a,
                                                                              {
                                                                                  component:
                                                                                      "span",
                                                                                  content:
                                                                                      "explorer.assets.issuer"
                                                                              }
                                                                          )
                                                                      ),
                                                                      r.a.createElement(
                                                                          "th",
                                                                          null,
                                                                          r.a.createElement(
                                                                              E.a,
                                                                              {
                                                                                  component:
                                                                                      "span",
                                                                                  content:
                                                                                      "markets.supply"
                                                                              }
                                                                          )
                                                                      ),
                                                                      r.a.createElement(
                                                                          "th",
                                                                          null
                                                                      )
                                                                  )
                                                              ),
                                                              r.a.createElement(
                                                                  "tbody",
                                                                  null,
                                                                  i
                                                              )
                                                          )
                                                      )
                                                  )
                                                : null,
                                            "user" == a
                                                ? r.a.createElement(
                                                      "div",
                                                      {
                                                          style: {
                                                              marginTop: "20px"
                                                          }
                                                      },
                                                      r.a.createElement(
                                                          "div",
                                                          null,
                                                          r.a.createElement(
                                                              "input",
                                                              {
                                                                  style: {
                                                                      maxWidth:
                                                                          "500px"
                                                                  },
                                                                  placeholder: n,
                                                                  type: "text",
                                                                  value: this
                                                                      .state
                                                                      .filterUIA,
                                                                  onChange: this._onFilter.bind(
                                                                      this,
                                                                      "filterUIA"
                                                                  )
                                                              }
                                                          )
                                                      )
                                                  )
                                                : null,
                                            "user" == a
                                                ? r.a.createElement(
                                                      "div",
                                                      {
                                                          style: {
                                                              paddingBottom: 20
                                                          }
                                                      },
                                                      r.a.createElement(
                                                          "div",
                                                          {
                                                              className:
                                                                  "market-list-wrap"
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
                                                                              E.a,
                                                                              {
                                                                                  component:
                                                                                      "span",
                                                                                  content:
                                                                                      "explorer.assets.symbol"
                                                                              }
                                                                          )
                                                                      ),
                                                                      r.a.createElement(
                                                                          "th",
                                                                          null,
                                                                          r.a.createElement(
                                                                              E.a,
                                                                              {
                                                                                  component:
                                                                                      "span",
                                                                                  content:
                                                                                      "explorer.assets.issuer"
                                                                              }
                                                                          )
                                                                      ),
                                                                      r.a.createElement(
                                                                          "th",
                                                                          null,
                                                                          r.a.createElement(
                                                                              E.a,
                                                                              {
                                                                                  component:
                                                                                      "span",
                                                                                  content:
                                                                                      "markets.supply"
                                                                              }
                                                                          )
                                                                      ),
                                                                      r.a.createElement(
                                                                          "th",
                                                                          null
                                                                      )
                                                                  )
                                                              ),
                                                              r.a.createElement(
                                                                  "tbody",
                                                                  null,
                                                                  s
                                                              )
                                                          )
                                                      )
                                                  )
                                                : null,
                                            "prediction" == a
                                                ? r.a.createElement(
                                                      "div",
                                                      {
                                                          style: {
                                                              marginTop: "20px"
                                                          }
                                                      },
                                                      r.a.createElement(
                                                          "div",
                                                          null,
                                                          r.a.createElement(
                                                              "input",
                                                              {
                                                                  style: {
                                                                      maxWidth:
                                                                          "500px"
                                                                  },
                                                                  placeholder: g.a
                                                                      .translate(
                                                                          "markets.search"
                                                                      )
                                                                      .toUpperCase(),
                                                                  type: "text",
                                                                  value: this
                                                                      .state
                                                                      .filterPM,
                                                                  onChange: this._onFilter.bind(
                                                                      this,
                                                                      "filterPM"
                                                                  )
                                                              }
                                                          )
                                                      )
                                                  )
                                                : null,
                                            "prediction" == a
                                                ? r.a.createElement(
                                                      "div",
                                                      {
                                                          style: {
                                                              paddingBottom: 20
                                                          }
                                                      },
                                                      r.a.createElement(
                                                          "div",
                                                          {
                                                              className:
                                                                  "market-list-wrap"
                                                          },
                                                          r.a.createElement(
                                                              "table",
                                                              null,
                                                              r.a.createElement(
                                                                  "tbody",
                                                                  null,
                                                                  o
                                                              )
                                                          )
                                                      )
                                                  )
                                                : null
                                        )
                                    );
                                }
                            }
                        ]),
                        t
                    );
                })();
            (N.defaultProps = {assets: {}}),
                (N.propTypes = {assets: u.a.object.isRequired});
            var T = N,
                U = a(123),
                I = (function() {
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
            var W = (function(e) {
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
                    I(t, [
                        {
                            key: "render",
                            value: function() {
                                var e = r.a.createElement(
                                    o.a,
                                    {
                                        stores: [l.a, s.a],
                                        inject: {
                                            assets: function() {
                                                return l.a.getState().assets;
                                            },
                                            filterMPA: function() {
                                                return s.a
                                                    .getState()
                                                    .viewSettings.get(
                                                        "filterMPA"
                                                    );
                                            },
                                            filterUIA: function() {
                                                return s.a
                                                    .getState()
                                                    .viewSettings.get(
                                                        "filterUIA"
                                                    );
                                            }
                                        }
                                    },
                                    r.a.createElement(T, null)
                                );
                                return r.a.createElement(
                                    "div",
                                    {className: "content"},
                                    r.a.createElement(U.a, {
                                        defaultActiveTab:
                                            "explorer.assets.title",
                                        defaultContent: e
                                    })
                                );
                            }
                        }
                    ]),
                    t
                );
            })();
            t.default = W;
        }
    }
]);
