parcelRequire = function(e, r, t, n) {
    var i, o = "function" == typeof parcelRequire && parcelRequire,
        u = "function" == typeof require && require;

    function f(t, n) {
        if (!r[t]) {
            if (!e[t]) {
                var i = "function" == typeof parcelRequire && parcelRequire;
                if (!n && i) return i(t, !0);
                if (o) return o(t, !0);
                if (u && "string" == typeof t) return u(t);
                var c = new Error("Cannot find module '" + t + "'");
                throw c.code = "MODULE_NOT_FOUND", c
            }
            p.resolve = function(r) {
                return e[t][1][r] || r
            }, p.cache = {};
            var l = r[t] = new f.Module(t);
            e[t][0].call(l.exports, p, l, l.exports, this)
        }
        return r[t].exports;

        function p(e) {
            return f(p.resolve(e))
        }
    }
    f.isParcelRequire = !0, f.Module = function(e) {
        this.id = e, this.bundle = f, this.exports = {}
    }, f.modules = e, f.cache = r, f.parent = o, f.register = function(r, t) {
        e[r] = [function(e, r) {
            r.exports = t
        }, {}]
    };
    for (var c = 0; c < t.length; c++) try {
        f(t[c])
    } catch (e) {
        i || (i = e)
    }
    if (t.length) {
        var l = f(t[t.length - 1]);
        "object" == typeof exports && "undefined" != typeof module ? module.exports = l : "function" == typeof define && define.amd ? define(function() {
            return l
        }) : n && (this[n] = l)
    }
    if (parcelRequire = f, i) throw i;
    return f
}({
    "vFFe": [function(require, module, exports) {
        TweetJs = {
            ListTweetsOnUserTimeline: function(e, t) {
                TweetJs._callApi({
                    Action: "ListTweetsOnUserTimeline",
                    ScreenName: e
                }, t)
            },
            Search: function(e, t) {
                TweetJs._callApi({
                    Action: "Search",
                    Query: e
                }, t)
            },
            _callApi: function(e, t) {
                var s = new XMLHttpRequest;
                URL = "https://www.tweetjs.com/API.aspx", s.open("POST", URL), s.onreadystatechange = function() {
                    this.readyState === XMLHttpRequest.DONE && 200 === this.status && t(JSON.parse(s.response))
                }, s.send(JSON.stringify(e))
            }
        };
    }, {}],
    "mahc": [function(require, module, exports) {
        "use strict";
        require("./lib/tweetjs"), TweetJs.ListTweetsOnUserTimeline("birdeat3", function(e) {
            var t = e.find(function(e) {
                    var t = Boolean(e.retweeted_status || e.retweeted),
                        r = Boolean(e.in_reply_to_screen_name);
                    return !t && !r
                }),
                r = document.querySelector("#latest-tweet a");
            r.innerHTML = t.text, r.href = "https://twitter.com/birdeat3/status/".concat(t.id_str);
        });
    }, {
        "./lib/tweetjs": "vFFe"
    }]
}, {}, ["mahc"], null)
