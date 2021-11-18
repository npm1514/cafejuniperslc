window.templates = window.templates || {}, window.templates.checkin_video = function(e) {
    var n = "";
    return n += '<div class="video-wrapper checkin-video-wrapper">\n  <video\n    class="checkin-video"\n    playsinline\n    loop\n    muted\n    disableremoteplayback\n    disablepictureinpicture\n    src="' + (0, _.escape)(e.videoUrl) + '"\n  >\n  </video>\n\n  <div class="video-mute-button"></div>\n</div>\n'
};
window.templates = window.templates || {}, window.templates.cta = function(n) {
    var e = "",
        t = _.escape;
    return e += '<div class="checkin-buttons">\n  <div class="connector"></div>\n  <a class="checkin-cta" href="' + t(n.url) + '" rel="nofollow noopener" target="_blank">' + t(helpers.translation.__(n.text)) + "</a>\n</div>\n"
};
window.templates = window.templates || {}, window.templates.highlight_icon = function(i) {
    return '<div class="checkin-highlight-icon"></div>\n'
};
window.templates = window.templates || {}, window.templates.message = function(e) {
    var s, n = "";
    return n += '<div class="checkin-message-wrapper">\n  <div class="checkin-message" dir="auto">\n    ' + (null == (s = e.message) ? "" : s) + "\n  </div>\n</div>\n"
};
window.templates = window.templates || {}, window.templates.user = function(n) {
    var e, a = "",
        t = _.escape;
    return Array.prototype.join, a += '<div class="checkin-user clearfix">\n  ', n.userLink ? (a += "\n\n    ", n.image && (a += '\n      <a\n        href="' + t(n.userLink) + '"\n        class="checkin-user-image"\n        target="_blank"\n        rel="nofollow noopener"\n        style="background-image: url(' + t(n.image) + ')"\n      >\n      </a>\n    '), a += '\n\n    <div class="checkin-user-name" title="' + t(n.combinedName) + '">\n      <a href="' + t(n.userLink) + '" target="_blank" rel="nofollow noopener">\n        ' + (null == (e = n.nameParts) ? "" : e) + "\n      </a>\n    </div>\n\n  ") : (a += "\n\n    ", n.image && (a += '\n      <div class="checkin-user-image" style="background-image: url(' + t(n.image) + ')">\n      </div>\n    '), a += '\n\n    <div class="checkin-user-name" title="' + t(n.combinedName) + '">\n      ' + (null == (e = n.nameParts) ? "" : e) + "\n    </div>\n\n  "), a += "\n\n  ", n.externalCreatedTimestamp && (a += "\n    ", n.postLink ? a += '\n      <a href="' + t(n.postLink) + '" class="checkin-timestamp" data-timestamp="' + t(n.externalCreatedTimestamp) + '" target="_blank" rel="nofollow noopener">&nbsp;</a>\n    ' : a += '\n      <span class="checkin-timestamp" data-timestamp="' + t(n.externalCreatedTimestamp) + '">&nbsp;</span>\n    ', a += "\n  "), a += '\n\n  <div class="checkin-type checkin-type-' + t(n.type) + '" title="' + t(helpers.getChannelName(n.type)) + '" data-action="show-detail" >\n  </div>\n</div>\n'
};
window.templates = window.templates || {}, window.templates.user_name_parts = function(e) {
    var a = "",
        n = _.escape;
    return Array.prototype.join, e.hasSeparateNames ? a += '\n  <span class="checkin-user-name-part checkin-user-name-full">' + n(e.fullName) + '</span>\n  <span class="checkin-user-name-part checkin-user-name-short">' + n(e.shortName) + "</span>\n" : a += "\n  " + n(e.combinedName) + "\n", a += "\n"
};
window.templates = window.templates || {}, window.templates["embeds/facebook_video_embed"] = function(e) {
    var o = "";
    return o += '<iframe class="checkin-video-embed" src="https://www.facebook.com/plugins/video.php?href=' + (0, _.escape)(e.token) + '&autoplay=1" frameborder="0" allowfullscreen></iframe>\n'
};
window.templates = window.templates || {}, window.templates["embeds/vimeo_video_embed"] = function(e) {
    var o, t = "";
    return t += '<iframe class="checkin-video-embed" src="https://player.vimeo.com/video/' + (0, _.escape)(e.token) + "?autoplay=1&muted=1&loop=1&title=0&byline=0&portrait=0&amp;controls=" + (null == (o = +e.showControls) ? "" : o) + '" frameborder="0" allowfullscreen></iframe>\n'
};
window.templates = window.templates || {}, window.templates["embeds/youtube_video_embed"] = function(e) {
    var o, a = "";
    return a += '<iframe class="checkin-video-embed" src="https://www.youtube-nocookie.com/embed/' + (0, _.escape)(e.token) + "?rel=0&amp;modestbranding=1&amp;showinfo=0&amp;autoplay=1&amp;loop=1&amp;enablejsapi=1&amp;mute=1&amp;controls=" + (null == (o = +e.showControls) ? "" : o) + '" frameborder="0" allowfullscreen></iframe>\n'
};
window.templates = window.templates || {}, window.templates["detail/container"] = function(n) {
    var i, a = "";
    return a += '<div class="detail-container" data-action="hide-detail">\n  <div class="detail-inner">\n    ' + (null == (i = n.detailContent) ? "" : i) + '\n  </div>\n\n  <div class="detail-loading-indicator-wrapper">\n    <svg class="loading-indicator detail-loading-indicator">\n      <use xlink:href="#app-logo-svg"></use>\n    </svg>\n  </div>\n</div>\n\n<div class="detail-menu" data-action="hide-detail">\n  ' + (null == (i = n.ctaMenu) ? "" : i) + "\n  " + (null == (i = n.detailMenuSharing) ? "" : i) + '\n\n  <div class="detail-close" data-action="hide-detail"></div>\n</div>\n'
};
window.templates = window.templates || {}, window.templates["detail/content"] = function(e) {
    var n, t = "",
        a = _.escape;
    return t += '<div class="detail-content detail-content-' + a(e.hasImage ? "withimage" : "withoutimage") + '">\n  ' + (null == (n = e.postImageElement) ? "" : n) + '\n\n  <div class="detail-text-wrapper detail-text-wrapper-' + a(e.network) + '">\n    <div class="detail-network-background detail-network-background-' + a(e.network) + '"></div>\n\n    <div class="detail-text-inner">\n      <div class="detail-text-content">\n        ' + (null == (n = e.detailUserElement) ? "" : n) + '\n\n        <div class="detail-message">\n          <div class="detail-message-inner">' + (null == (n = e.message) ? "" : n) + "</div>\n        </div>\n      </div>\n\n      " + (null == (n = e.ctaElement) ? "" : n) + '\n\n      <div class="detail-text-extra">\n        ' + (null == (n = e.detailSharingElement) ? "" : n) + "\n      </div>\n    </div>\n  </div>\n</div>\n"
};
window.templates = window.templates || {}, window.templates["detail/menu_cta"] = function(e) {
    var t = "",
        n = _.escape;
    return t += '<div class="detail-menu-buttons">\n  <a class="detail-menu-cta" href="' + n(e.url) + '" rel="nofollow noopener" target="_blank">' + n(helpers.translation.__(e.text)) + "</a>\n</div>\n"
};
window.templates = window.templates || {}, window.templates["detail/menu_sharing"] = function(n) {
    var a, t = "",
        e = _.escape;
    return Array.prototype.join, t += '<div class="detail-menu-sharing">\n  <button type="button" class="detail-menu-sharing-expander" data-action="show-detail-menu-sharing">' + e(helpers.translation.__("SHARE_POST")) + '</button>\n\n  <div class="detail-menu-sharing-content">\n    <a href="https://www.facebook.com/sharer/sharer.php?u=' + (null == (a = encodeURIComponent(n.link)) ? "" : a) + '" class="detail-menu-sharing-button" data-action="share" data-network="facebook">\n      <i class="fa fa-facebook"></i>\n    </a>\n\n    <a href="https://twitter.com/intent/tweet?url=' + (null == (a = encodeURIComponent(n.link)) ? "" : a) + "&text=", encodeURIComponent(n.twitterText), t += "&via=" + (null == (a = n.twitterVia) ? "" : a) + '" class="detail-menu-sharing-button" data-action="share" data-network="twitter">\n      <i class="fa fa-twitter"></i>\n    </a>\n\n    <a href="https://www.linkedin.com/sharing/share-offsite/?url=' + (null == (a = encodeURIComponent(n.link)) ? "" : a) + '" class="detail-menu-sharing-button" data-action="share" data-network="linkedin">\n      <i class="fa fa-linkedin"></i>\n    </a>\n\n    <a href="#" class="detail-menu-sharing-button link-button" data-clipboard-text="' + e(n.link) + '" title="' + e(helpers.translation.__("SHARE_POST_LINK")) + '" data-action="detail-copy-link">\n      <i class="fa fa-link"></i>\n    </a>\n\n    <div class="detail-link-copied detail-link-copied-success">\n      <span>' + e(helpers.translation.__("COPIED_TO_CLIPBOARD")) + '<span>\n    </div>\n\n    <div class="detail-link-copied detail-link-copied-error">\n      <span>' + e(helpers.translation.__("COPIED_TO_CLIPBOARD_ERROR")) + "<span>\n    </div>\n  </div>\n</div>\n"
};
window.templates = window.templates || {}, window.templates["detail/post_image"] = function(e) {
    var n, a = "",
        t = _.escape;
    return Array.prototype.join, e.postImage && (a += '\n  <div\n    class="detail-image ' + t(e.postVideoElement ? "detail-image-with-video" : "") + '"\n    data-image="' + t(e.postImage) + '"\n    data-aspect-ratio="' + t(e.imageAspectRatio) + '"\n  >\n    ', e.postVideoElement ? a += "\n      " + (null == (n = e.postVideoElement) ? "" : n) + "\n    " : a += '\n      <div class="detail-image-inner" style="background-image: url(' + t(e.postImage) + ')">\n      </div>\n    ', a += "\n\n    ", e.postLink && !e.hasEmbeddedVideo && (a += '\n      <a href="' + t(e.postLink) + '" target="_blank" rel="nofollow noopener" class="detail-image-link"></a>\n    '), a += "\n  </div>\n"), a += "\n"
};
window.templates = window.templates || {}, window.templates["detail/sharing"] = function(n) {
    var a = "",
        t = _.escape;
    return a += '<span class="detail-sharing-intro">\n  ' + t(helpers.translation.__("SHARE_POST")) + '\n</span>\n\n<div class="detail-sharing-buttons">\n  <a href="https://www.facebook.com/sharer/sharer.php?u=' + t(encodeURIComponent(n.link)) + '" class="detail-sharing-button" data-action="share" data-network="facebook">\n    <i class="fa fa-facebook"></i>\n  </a>\n\n  <a href="https://twitter.com/intent/tweet?url=' + t(encodeURIComponent(n.link)) + "&text=" + t(encodeURIComponent(n.twitterText)) + "&via=" + t(n.twitterVia) + '" class="detail-sharing-button" data-action="share" data-network="twitter">\n    <i class="fa fa-twitter"></i>\n  </a>\n\n  <a href="https://www.linkedin.com/sharing/share-offsite/?url=' + t(encodeURIComponent(n.link)) + '" class="detail-sharing-button" data-action="share" data-network="linkedin">\n    <i class="fa fa-linkedin"></i>\n  </a>\n\n  <a href="' + t(n.link) + '" class="detail-sharing-button link-button" data-clipboard-text="' + t(n.link) + '" title="' + t(helpers.translation.__("SHARE_POST_LINK")) + '" data-action="detail-copy-link">\n    <i class="fa fa-link"></i>\n  </a>\n\n  <div class="detail-link-copied detail-link-copied-success">\n    <span>' + t(helpers.translation.__("COPIED_TO_CLIPBOARD")) + '<span>\n  </div>\n\n  <div class="detail-link-copied detail-link-copied-error">\n    <span>' + t(helpers.translation.__("COPIED_TO_CLIPBOARD_ERROR")) + "<span>\n  </div>\n</div>\n"
};
window.templates = window.templates || {}, window.templates["detail/user"] = function(n) {
    var e = "",
        a = _.escape;
    return Array.prototype.join, e += '<div class="detail-user">\n  ', n.userImage && (e += '\n    <div\n      class="detail-user-image"\n      style="background-image: url(' + a(n.userImage) + ')"\n    >\n      ', n.userLink && (e += '\n        <a\n          class="detail-user-image-link"\n          href="' + a(n.userLink) + '"\n          target="_blank"\n          rel="nofollow noopener"\n        >\n        </a>\n      '), e += "\n    </div>\n  "), e += '\n\n  <div class="detail-user-info">\n    <div class="detail-user-name" title="' + a(n.combinedName) + '">\n      <i class="detail-network-icon detail-network-icon-' + a(n.network) + '"></i>\n\n      ', n.userLink ? e += '\n        <a href="' + a(n.userLink) + '" target="_blank" rel="nofollow noopener">' + a(n.userName) + "</a>\n      " : e += "\n        " + a(n.userName) + "\n      ", e += '\n    </div>\n\n    <a\n      href="' + a(n.postLink) + '"\n      class="detail-timestamp"\n      target="_blank"\n      rel="nofollow noopener"\n    >' + a(n.humanTimeDiff) + "</a>\n  </div>\n</div>\n"
};
window.templates = window.templates || {}, window.templates["detail/video"] = function(e) {
    var i = "",
        o = _.escape;
    return Array.prototype.join, e.postVideo && (i += '\n  <div class="video-wrapper detail-video-wrapper video-muted">\n    <video class="detail-video" playsinline loop muted poster="' + o(e.postImage) + '">\n      <source src="' + o(e.postVideo) + '" type="video/mp4" />\n    </video>\n\n    <div class="video-play-button"></div>\n    <div class="video-mute-button"></div>\n  </div>\n'), i += "\n"
};
window.templates = window.templates || {}, window.templates.container = function(a) {
    var i = "",
        d = _.escape;
    return i += '<div class="checkin-wrapper checkin-wrapper-' + d(a.id) + '" data-id="' + d(a.id) + '" data-original-id="' + d(a.originalId) + '">\n  <div class="checkin checkin-' + d(a.id) + '" data-id="' + d(a.id) + '" data-original-id="' + d(a.originalId) + '" data-weight="' + d(a.weight) + '" data-timestamp="' + d(a.externalCreatedTimestamp) + '" data-bonus="' + d(a.bonus) + '" data-is-looped="' + d(a.isLooped) + '" data-tags="' + d(a.tags) + '" data-type="' + d(a.type) + '" data-user-id="' + d(a.userId) + '">\n  </div>\n</div>\n'
};
window.templates = window.templates || {}, window.templates.image = function(n) {
    var e, a = "",
        i = _.escape;
    return Array.prototype.join, a += '<div class="checkin-image-wrapper checkin-image-preview-holder">\n  <svg class="placeholder-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="currentColor" d="M159 336l-39.5-39.5c-4.7-4.7-12.3-4.7-17 0l-39 39L63 448h256V304l-55.5-55.5c-4.7-4.7-12.3-4.7-17 0L159 336zm96-50.7l32 32V416H95.1l.3-67.2 15.6-15.6 48 48c20.3-20.3 77.7-77.6 96-95.9zM127 256c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm0-96c17.6 0 32 14.4 32 32s-14.4 32-32 32-32-14.4-32-32 14.4-32 32-32zm242.9-62.1L286 14C277 5 264.8-.1 252.1-.1H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V131.9c0-12.7-5.1-25-14.1-34zM256 32.5c2.8.7 5.3 2.1 7.4 4.2l83.9 83.9c2.1 2.1 3.5 4.6 4.2 7.4H256V32.5zM352 464c0 8.8-7.2 16-16 16H48c-8.8 0-16-7.2-16-16V48c0-8.8 7.2-16 16-16h176v104c0 13.3 10.7 24 24 24h104v304z"></path></svg>\n  <div\n    class="checkin-image"\n    data-action="show-detail"\n    style="background-image:url(' + i(n.image) + "); padding-bottom: " + i(n.imagePaddingBottom) + '"\n  >\n    ', n.postLink && (a += '\n      <a\n        href="' + i(n.postLink) + '"\n        target="_blank"\n        rel="nofollow noopener"\n        class="checkin-image-link"\n      ></a>\n    '), a += "\n\n    ", n.showPlayButton && (a += '\n      <div class="video-play-button"></div>\n    '), a += "\n  </div>\n</div>\n\n", n.message && (a += '\n  <div class="checkin-message" dir="auto">\n    ' + (null == (e = n.message) ? "" : e) + "\n  </div>\n"), a += "\n"
};
window.templates = window.templates || {}, window.templates.message = function(e) {
    var n, s = "";
    return s += '<div class="checkin-message" dir="auto">\n  ' + (null == (n = e.message) ? "" : n) + "\n</div>\n"
};
"use strict";
var _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(A) {
    return typeof A
} : function(A) {
    return A && "function" == typeof Symbol && A.constructor === Symbol && A !== Symbol.prototype ? "symbol" : typeof A
};
window.Modernizr && !1 === window.Modernizr.videoautoplay ? window.Modernizr = {
    isForcedModernizr: !0,
    on: function() {},
    videoautoplay: !1
} : (function(A, e, o) {
    function t(A, e) {
        return (void 0 === A ? "undefined" : _typeof(A)) === e
    }

    function n() {
        return "function" != typeof e.createElement ? e.createElement(arguments[0]) : w ? e.createElementNS.call(e, "http://www.w3.org/2000/svg", arguments[0]) : e.createElement.apply(e, arguments)
    }

    function a(A, e) {
        if ("object" == (void 0 === A ? "undefined" : _typeof(A)))
            for (var t in A) r(A, t) && a(t, A[t]);
        else {
            var n = (A = A.toLowerCase()).split("."),
                l = c[n[0]];
            if (2 == n.length && (l = l[n[1]]), o !== l) return c;
            e = "function" == typeof e ? e() : e, 1 == n.length ? c[n[0]] = e : (!c[n[0]] || c[n[0]] instanceof Boolean || (c[n[0]] = new Boolean(c[n[0]])), c[n[0]][n[1]] = e), c._trigger(A, e)
        }
        return c
    }
    var l = [],
        i = {
            _version: "3.5.0",
            _config: {
                classPrefix: "",
                enableClasses: !0,
                enableJSClass: !0,
                usePrefixes: !0
            },
            _q: [],
            on: function(A, e) {
                var o = this;
                setTimeout((function() {
                    e(o[A])
                }), 0)
            },
            addTest: function(A, e, o) {
                l.push({
                    name: A,
                    fn: e,
                    options: o
                })
            },
            addAsyncTest: function(A) {
                l.push({
                    name: null,
                    fn: A
                })
            }
        },
        c = function() {};
    c.prototype = i, c = new c;
    var r, d = [],
        h = e.documentElement;
    !(function() {
        var A = {}.hasOwnProperty;
        r = t(A, "undefined") || t(A.call, "undefined") ? function(A, e) {
            return e in A && t(A.constructor.prototype[e], "undefined")
        } : function(e, o) {
            return A.call(e, o)
        }
    })();
    var w = "svg" === h.nodeName.toLowerCase();
    c.addTest("video", (function() {
        var A = n("video"),
            e = !1;
        try {
            (e = !!A.canPlayType) && ((e = new Boolean(e)).ogg = A.canPlayType('video/ogg; codecs="theora"').replace(/^no$/, ""), e.h264 = A.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/, ""), e.webm = A.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/, ""), e.vp9 = A.canPlayType('video/webm; codecs="vp9"').replace(/^no$/, ""), e.hls = A.canPlayType('application/x-mpegURL; codecs="avc1.42E01E"').replace(/^no$/, ""))
        } catch (A) {}
        return e
    })), i._l = {}, i.on = function(A, e) {
        this._l[A] || (this._l[A] = []), this._l[A].push(e), c.hasOwnProperty(A) && setTimeout((function() {
            c._trigger(A, c[A])
        }), 0)
    }, i._trigger = function(A, e) {
        if (this._l[A]) {
            var o = this._l[A];
            setTimeout((function() {
                var A;
                for (A = 0; A < o.length; A++)(0, o[A])(e)
            }), 0), delete this._l[A]
        }
    }, c._q.push((function() {
        i.addTest = a
    })), c.addAsyncTest((function() {
        function A(n) {
            i++, clearTimeout(e);
            var c = n && "playing" === n.type || 0 !== r.currentTime;
            return !c && l > i ? (e = setTimeout(A, t), o) : (r.removeEventListener("playing", A, !1), a("videoautoplay", c), r.parentNode && r.parentNode.removeChild(r), o)
        }
        var e, t = 200,
            l = 5,
            i = 0,
            r = n("video"),
            d = r.style;
        if (!(c.video && "autoplay" in r)) return a("videoautoplay", !1), o;
        d.position = "absolute", d.height = 0, d.width = 0;
        try {
            if (c.video.ogg) r.src = "data:video/ogg;base64,T2dnUwACAAAAAAAAAABmnCATAAAAAHDEixYBKoB0aGVvcmEDAgEAAQABAAAQAAAQAAAAAAAFAAAAAQAAAAAAAAAAAGIAYE9nZ1MAAAAAAAAAAAAAZpwgEwEAAAACrA7TDlj///////////////+QgXRoZW9yYSsAAABYaXBoLk9yZyBsaWJ0aGVvcmEgMS4xIDIwMDkwODIyIChUaHVzbmVsZGEpAQAAABoAAABFTkNPREVSPWZmbXBlZzJ0aGVvcmEtMC4yOYJ0aGVvcmG+zSj3uc1rGLWpSUoQc5zmMYxSlKQhCDGMYhCEIQhAAAAAAAAAAAAAEW2uU2eSyPxWEvx4OVts5ir1aKtUKBMpJFoQ/nk5m41mUwl4slUpk4kkghkIfDwdjgajQYC8VioUCQRiIQh8PBwMhgLBQIg4FRba5TZ5LI/FYS/Hg5W2zmKvVoq1QoEykkWhD+eTmbjWZTCXiyVSmTiSSCGQh8PB2OBqNBgLxWKhQJBGIhCHw8HAyGAsFAiDgUCw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDAwPEhQUFQ0NDhESFRUUDg4PEhQVFRUOEBETFBUVFRARFBUVFRUVEhMUFRUVFRUUFRUVFRUVFRUVFRUVFRUVEAwLEBQZGxwNDQ4SFRwcGw4NEBQZHBwcDhATFhsdHRwRExkcHB4eHRQYGxwdHh4dGxwdHR4eHh4dHR0dHh4eHRALChAYKDM9DAwOExo6PDcODRAYKDlFOA4RFh0zV1A+EhYlOkRtZ00YIzdAUWhxXDFATldneXhlSFxfYnBkZ2MTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTEhIVGRoaGhoSFBYaGhoaGhUWGRoaGhoaGRoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhESFh8kJCQkEhQYIiQkJCQWGCEkJCQkJB8iJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQREhgvY2NjYxIVGkJjY2NjGBo4Y2NjY2MvQmNjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRISEhUXGBkbEhIVFxgZGxwSFRcYGRscHRUXGBkbHB0dFxgZGxwdHR0YGRscHR0dHhkbHB0dHR4eGxwdHR0eHh4REREUFxocIBERFBcaHCAiERQXGhwgIiUUFxocICIlJRcaHCAiJSUlGhwgIiUlJSkcICIlJSUpKiAiJSUlKSoqEBAQFBgcICgQEBQYHCAoMBAUGBwgKDBAFBgcICgwQEAYHCAoMEBAQBwgKDBAQEBgICgwQEBAYIAoMEBAQGCAgAfF5cdH1e3Ow/L66wGmYnfIUbwdUTe3LMRbqON8B+5RJEvcGxkvrVUjTMrsXYhAnIwe0dTJfOYbWrDYyqUrz7dw/JO4hpmV2LsQQvkUeGq1BsZLx+cu5iV0e0eScJ91VIQYrmqfdVSK7GgjOU0oPaPOu5IcDK1mNvnD+K8LwS87f8Jx2mHtHnUkTGAurWZlNQa74ZLSFH9oF6FPGxzLsjQO5Qe0edcpttd7BXBSqMCL4k/4tFrHIPuEQ7m1/uIWkbDMWVoDdOSuRQ9286kvVUlQjzOE6VrNguN4oRXYGkgcnih7t13/9kxvLYKQezwLTrO44sVmMPgMqORo1E0sm1/9SludkcWHwfJwTSybR4LeAz6ugWVgRaY8mV/9SluQmtHrzsBtRF/wPY+X0JuYTs+ltgrXAmlk10xQHmTu9VSIAk1+vcvU4ml2oNzrNhEtQ3CysNP8UeR35wqpKUBdGdZMSjX4WVi8nJpdpHnbhzEIdx7mwf6W1FKAiucMXrWUWVjyRf23chNtR9mIzDoT/6ZLYailAjhFlZuvPtSeZ+2oREubDoWmT3TguY+JHPdRVSLKxfKH3vgNqJ/9emeEYikGXDFNzaLjvTeGAL61mogOoeG3y6oU4rW55ydoj0lUTSR/mmRhPmF86uwIfzp3FtiufQCmppaHDlGE0r2iTzXIw3zBq5hvaTldjG4CPb9wdxAme0SyedVKczJ9AtYbgPOzYKJvZZImsN7ecrxWZg5dR6ZLj/j4qpWsIA+vYwE+Tca9ounMIsrXMB4Stiib2SPQtZv+FVIpfEbzv8ncZoLBXc3YBqTG1HsskTTotZOYTG+oVUjLk6zhP8bg4RhMUNtfZdO7FdpBuXzhJ5Fh8IKlJG7wtD9ik8rWOJxy6iQ3NwzBpQ219mlyv+FLicYs2iJGSE0u2txzed++D61ZWCiHD/cZdQVCqkO2gJpdpNaObhnDfAPrT89RxdWFZ5hO3MseBSIlANppdZNIV/Rwe5eLTDvkfWKzFnH+QJ7m9QWV1KdwnuIwTNtZdJMoXBf74OhRnh2t+OTGL+AVUnIkyYY+QG7g9itHXyF3OIygG2s2kud679ZWKqSFa9n3IHD6MeLv1lZ0XyduRhiDRtrNnKoyiFVLcBm0ba5Yy3fQkDh4XsFE34isVpOzpa9nR8iCpS4HoxG2rJpnRhf3YboVa1PcRouh5LIJv/uQcPNd095ickTaiGBnWLKVWRc0OnYTSyex/n2FofEPnDG8y3PztHrzOLK1xo6RAml2k9owKajOC0Wr4D5x+3nA0UEhK2m198wuBHF3zlWWVKWLN1CHzLClUfuoYBcx4b1llpeBKmbayaR58njtE9onD66lUcsg0Spm2snsb+8HaJRn4dYcLbCuBuYwziB8/5U1C1DOOz2gZjSZtrLJk6vrLF3hwY4Io9xuT/ruUFRSBkNtUzTOWhjh26irLEPx4jPZL3Fo3QrReoGTTM21xYTT9oFdhTUIvjqTkfkvt0bzgVUjq/hOYY8j60IaO/0AzRBtqkTS6R5ellZd5uKdzzhb8BFlDdAcrwkE0rbXTOPB+7Y0FlZO96qFL4Ykg21StJs8qIW7h16H5hGiv8V2Cflau7QVDepTAHa6Lgt6feiEvJDM21StJsmOH/hynURrKxvUpQ8BH0JF7BiyG2qZpnL/7AOU66gt+reLEXY8pVOCQvSsBtqZTNM8bk9ohRcwD18o/WVkbvrceVKRb9I59IEKysjBeTMmmbA21xu/6iHadLRxuIzkLpi8wZYmmbbWi32RVAUjruxWlJ//iFxE38FI9hNKOoCdhwf5fDe4xZ81lgREhK2m1j78vW1CqkuMu/AjBNK210kzRUX/B+69cMMUG5bYrIeZxVSEZISmkzbXOi9yxwIfPgdsov7R71xuJ7rFcACjG/9PzApqFq7wEgzNJm2suWESPuwrQvejj7cbnQxMkxpm21lUYJL0fKmogPPqywn7e3FvB/FCNxPJ85iVUkCE9/tLKx31G4CgNtWTTPFhMvlu8G4/TrgaZttTChljfNJGgOT2X6EqpETy2tYd9cCBI4lIXJ1/3uVUllZEJz4baqGF64yxaZ+zPLYwde8Uqn1oKANtUrSaTOPHkhvuQP3bBlEJ/LFe4pqQOHUI8T8q7AXx3fLVBgSCVpMba55YxN3rv8U1Dv51bAPSOLlZWebkL8vSMGI21lJmmeVxPRwFlZF1CpqCN8uLwymaZyjbXHCRytogPN3o/n74CNykfT+qqRv5AQlHcRxYrC5KvGmbbUwmZY/29BvF6C1/93x4WVglXDLFpmbapmF89HKTogRwqqSlGbu+oiAkcWFbklC6Zhf+NtTLFpn8oWz+HsNRVSgIxZWON+yVyJlE5tq/+GWLTMutYX9ekTySEQPLVNQQ3OfycwJBM0zNtZcse7CvcKI0V/zh16Dr9OSA21MpmmcrHC+6pTAPHPwoit3LHHqs7jhFNRD6W8+EBGoSEoaZttTCZljfduH/fFisn+dRBGAZYtMzbVMwvul/T/crK1NQh8gN0SRRa9cOux6clC0/mDLFpmbarmF8/e6CopeOLCNW6S/IUUg3jJIYiAcDoMcGeRbOvuTPjXR/tyo79LK3kqqkbxkkMRAOB0GODPItnX3Jnxro/25Ud+llbyVVSN4ySGIgHA6DHBnkWzr7kz410f7cqO/Syt5KqpFVJwn6gBEvBM0zNtZcpGOEPiysW8vvRd2R0f7gtjhqUvXL+gWVwHm4XJDBiMpmmZtrLfPwd/IugP5+fKVSysH1EXreFAcEhelGmbbUmZY4Xdo1vQWVnK19P4RuEnbf0gQnR+lDCZlivNM22t1ESmopPIgfT0duOfQrsjgG4tPxli0zJmF5trdL1JDUIUT1ZXSqQDeR4B8mX3TrRro/2McGeUvLtwo6jIEKMkCUXWsLyZROd9P/rFYNtXPBli0z398iVUlVKAjFlY437JXImUTm2r/4ZYtMy61hf16RPJIU9nZ1MABAwAAAAAAAAAZpwgEwIAAABhp658BScAAAAAAADnUFBQXIDGXLhwtttNHDhw5OcpQRMETBEwRPduylKVB0HRdF0A";
            else {
                if (!c.video.h264) return a("videoautoplay", !1), o;
                r.src = "data:video/mp4;base64,AAAAIGZ0eXBpc29tAAACAGlzb21pc28yYXZjMW1wNDEAAAAIZnJlZQAAAs1tZGF0AAACrgYF//+q3EXpvebZSLeWLNgg2SPu73gyNjQgLSBjb3JlIDE0OCByMjYwMSBhMGNkN2QzIC0gSC4yNjQvTVBFRy00IEFWQyBjb2RlYyAtIENvcHlsZWZ0IDIwMDMtMjAxNSAtIGh0dHA6Ly93d3cudmlkZW9sYW4ub3JnL3gyNjQuaHRtbCAtIG9wdGlvbnM6IGNhYmFjPTEgcmVmPTMgZGVibG9jaz0xOjA6MCBhbmFseXNlPTB4MzoweDExMyBtZT1oZXggc3VibWU9NyBwc3k9MSBwc3lfcmQ9MS4wMDowLjAwIG1peGVkX3JlZj0xIG1lX3JhbmdlPTE2IGNocm9tYV9tZT0xIHRyZWxsaXM9MSA4eDhkY3Q9MSBjcW09MCBkZWFkem9uZT0yMSwxMSBmYXN0X3Bza2lwPTEgY2hyb21hX3FwX29mZnNldD0tMiB0aHJlYWRzPTEgbG9va2FoZWFkX3RocmVhZHM9MSBzbGljZWRfdGhyZWFkcz0wIG5yPTAgZGVjaW1hdGU9MSBpbnRlcmxhY2VkPTAgYmx1cmF5X2NvbXBhdD0wIGNvbnN0cmFpbmVkX2ludHJhPTAgYmZyYW1lcz0zIGJfcHlyYW1pZD0yIGJfYWRhcHQ9MSBiX2JpYXM9MCBkaXJlY3Q9MSB3ZWlnaHRiPTEgb3Blbl9nb3A9MCB3ZWlnaHRwPTIga2V5aW50PTI1MCBrZXlpbnRfbWluPTEwIHNjZW5lY3V0PTQwIGludHJhX3JlZnJlc2g9MCByY19sb29rYWhlYWQ9NDAgcmM9Y3JmIG1idHJlZT0xIGNyZj0yMy4wIHFjb21wPTAuNjAgcXBtaW49MCBxcG1heD02OSBxcHN0ZXA9NCBpcF9yYXRpbz0xLjQwIGFxPTE6MS4wMACAAAAAD2WIhAA3//728P4FNjuZQQAAAu5tb292AAAAbG12aGQAAAAAAAAAAAAAAAAAAAPoAAAAZAABAAABAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAACGHRyYWsAAABcdGtoZAAAAAMAAAAAAAAAAAAAAAEAAAAAAAAAZAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAEAAAAAAAgAAAAIAAAAAACRlZHRzAAAAHGVsc3QAAAAAAAAAAQAAAGQAAAAAAAEAAAAAAZBtZGlhAAAAIG1kaGQAAAAAAAAAAAAAAAAAACgAAAAEAFXEAAAAAAAtaGRscgAAAAAAAAAAdmlkZQAAAAAAAAAAAAAAAFZpZGVvSGFuZGxlcgAAAAE7bWluZgAAABR2bWhkAAAAAQAAAAAAAAAAAAAAJGRpbmYAAAAcZHJlZgAAAAAAAAABAAAADHVybCAAAAABAAAA+3N0YmwAAACXc3RzZAAAAAAAAAABAAAAh2F2YzEAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAgACAEgAAABIAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAY//8AAAAxYXZjQwFkAAr/4QAYZ2QACqzZX4iIhAAAAwAEAAADAFA8SJZYAQAGaOvjyyLAAAAAGHN0dHMAAAAAAAAAAQAAAAEAAAQAAAAAHHN0c2MAAAAAAAAAAQAAAAEAAAABAAAAAQAAABRzdHN6AAAAAAAAAsUAAAABAAAAFHN0Y28AAAAAAAAAAQAAADAAAABidWR0YQAAAFptZXRhAAAAAAAAACFoZGxyAAAAAAAAAABtZGlyYXBwbAAAAAAAAAAAAAAAAC1pbHN0AAAAJal0b28AAAAdZGF0YQAAAAEAAAAATGF2ZjU2LjQwLjEwMQ=="
            }
        } catch (A) {
            return a("videoautoplay", !1), o
        }
        r.setAttribute("autoplay", ""), r.style.cssText = "display:none", h.appendChild(r), setTimeout((function() {
            r.addEventListener("playing", A, !1), e = setTimeout(A, t)
        }), 0)
    })), (function() {
        var A, e, o, n, a, i;
        for (var r in l)
            if (l.hasOwnProperty(r)) {
                if (A = [], (e = l[r]).name && (A.push(e.name.toLowerCase()), e.options && e.options.aliases && e.options.aliases.length))
                    for (o = 0; o < e.options.aliases.length; o++) A.push(e.options.aliases[o].toLowerCase());
                for (n = t(e.fn, "function") ? e.fn() : e.fn, a = 0; a < A.length; a++) 1 === (i = A[a].split(".")).length ? c[i[0]] = n : (!c[i[0]] || c[i[0]] instanceof Boolean || (c[i[0]] = new Boolean(c[i[0]])), c[i[0]][i[1]] = n), d.push((n ? "" : "no-") + i.join("-"))
            }
    })(), delete i.addTest, delete i.addAsyncTest;
    for (var R = 0; R < c._q.length; R++) c._q[R]();
    A.Modernizr = c
})(window, document);
"use strict";
window.helpers = (function() {
    var e = function(e) {
            return "[data-action~='" + e + "']"
        },
        n = function(e) {
            if (!e) return 0;
            var n = 0,
                r = (e = e.toString()).length;
            if (0 === r) return n;
            for (var t = 0; t < r; t++) {
                n = (n << 5) - n + e.charCodeAt(t), n &= n
            }
            return Math.abs(n)
        },
        r = function(e, n, r) {
            if (r <= n) return e;
            var t = (e.length / r + 1) / 2,
                a = Math.round(n * t);
            return htmlTruncate(e, a, {
                ellipsis: "…",
                keepImageTag: !0
            })
        },
        t = function(e) {
            var n;
            switch (e) {
                case "youtube":
                    return "YouTube";
                case "rss":
                    return "RSS";
                case "ads":
                    return "Advertising";
                case "vkontakte":
                    return "VKontakte";
                default:
                    return (n = e).charAt(0).toUpperCase() + n.slice(1)
            }
        },
        a = function(e) {
            return "@" + e.username
        },
        u = function(e) {
            var n = e.external_name;
            return {
                username: n,
                name: e.external_fullname || n
            }
        },
        i = function(e) {
            var n, r = u(e);
            return "twitter" === e.type ? a(r) : "instagram" === e.type ? (n = r).username ? "@" + n.username : helpers.translation.__("UNKNOWN_NETWORK_USER", t("instagram")) : r.username
        },
        o = function(e) {
            var n, r = u(e);
            switch (e.type) {
                case "twitter":
                    return (n = r).name || a(n);
                case "instagram":
                    return (function(e) {
                        return e.name ? e.name : helpers.translation.__("UNKNOWN_NETWORK_USER", t("instagram"))
                    })(r);
                case "facebook":
                    return (function(e) {
                        var n = void 0;
                        return e && (_.isPlainObject(e) ? n = e.name || e.title || e.username || e.id : "number" == typeof e ? n = "" + e : "string" == typeof e && (n = e)), n || helpers.translation.__("UNKNOWN_NETWORK_USER", t("facebook"))
                    })(r);
                case "youtube":
                    return (function(e) {
                        return e.name
                    })(r);
                case "pinterest":
                    return (function(e) {
                        return e.name ? e.name : helpers.translation.__("UNKNOWN_NETWORK_USER", t("pinterest"))
                    })(r)
            }
            return r.name
        },
        c = function(e) {
            return !!e.external_name && (!!e.external_fullname && e.external_name !== e.external_fullname)
        };
    return {
        $actionElement: function(n) {
            return $(e(n))
        },
        actionSelector: e,
        autoBind: function(e) {
            var n = !0,
                r = !1,
                t = void 0;
            try {
                for (var a, u = Object.getOwnPropertyNames(e.constructor.prototype)[Symbol.iterator](); !(n = (a = u.next()).done); n = !0) {
                    var i = a.value,
                        o = e[i];
                    "constructor" !== i && "function" == typeof o && (e[i] = o.bind(e))
                }
            } catch (e) {
                r = !0, t = e
            } finally {
                try {
                    !n && u.return && u.return()
                } finally {
                    if (r) throw t
                }
            }
            return e
        },
        getChannelName: t,
        getSourceName: function(e, n) {
            return t(e) + " " + (function(e, n) {
                return n || ("facebook" === e ? "page" : "profile")
            })(e, n)
        },
        getUnixTimestamp: function() {
            return Math.floor(Date.now() / 1e3)
        },
        checkins: {
            getShortName: i,
            getFullName: o,
            getCombinedName: function(e) {
                var n = i(e),
                    r = o(e);
                return r ? n ? c(e) ? n + " (" + r + ")" : n : r : n
            },
            hasSeparateNames: c
        },
        jQuery: {
            stringify: function(e) {
                return $("<div>").append(e.clone()).html()
            }
        },
        string: {
            hash: n
        },
        integer: {
            ceilTo: function(e) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
                return Math.ceil(e / n) * n
            },
            getRandomSeededInt: function(e, r, t) {
                t += 1, e = n(e);
                var a = (e = 1e4 * Math.sin(e)) - Math.floor(e);
                return Math.floor(a * (t - r)) + r
            }
        },
        slug: {
            fromId: function(e) {
                return (function(e, n) {
                    var r = "",
                        t = e;
                    do {
                        var a = t % n;
                        t = Math.floor(t / n), r = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz+/".charAt(a) + r
                    } while (0 !== t);
                    return r
                })(e, 62)
            },
            toId: function(e) {
                return n = 62, e.split("").reduce((function(e, r) {
                    return e * n + "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz+/".indexOf(r)
                }), 0);
                var n
            }
        },
        truncateTransformedTextPrecise: function(e, n, t) {
            for (var a = n, u = 0;;) {
                var i = r(e, a, t);
                if ($("<div>").html(i).text().length <= n) return i;
                if (a = Math.ceil(.9 * a), ++u >= 50) return i
            }
        },
        addLineBreaks: function(e) {
            if (!e) return "";
            var n = e.replace(/(\n[\n]|\r[\r]|\n[\r]|\r[\n])+/g, "\n\n");
            return n = (n = n.replace(/\n[\n]+/g, "\n\n")).replace(/\n/g, "<br>")
        }
    }
})();
"use strict";
var _createClass = (function() {
    function a(a, t) {
        for (var e = 0; e < t.length; e++) {
            var n = t[e];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(a, n.key, n)
        }
    }
    return function(t, e, n) {
        return e && a(t.prototype, e), n && a(t, n), t
    }
})();

function _classCallCheck(a, t) {
    if (!(a instanceof t)) throw new TypeError("Cannot call a class as a function")
}!(function() {
    var a = $(document.documentElement),
        t = (function() {
            function t() {
                _classCallCheck(this, t)
            }
            return _createClass(t, null, [{
                key: "addRule",
                value: function(a, t) {
                    var e = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1,
                        n = $("#dynamic-css");
                    0 === n.length && (n = $("<style>").attr("id", "dynamic-css").appendTo("body"));
                    var s = n[0].sheet;
                    e < 0 && (e = _.get(s, "cssRules.length", 0)), "addRule" in s ? s.addRule(a, t, e) : "insertRule" in s && s.insertRule(a + "{" + t + "}", e)
                }
            }, {
                key: "getTransformAngle",
                value: function(a, t, e) {
                    return e < a / 2 ? (function(a, t, e) {
                        var n = a,
                            s = e,
                            o = t,
                            l = n / 2 - s,
                            r = Math.atan(o / l),
                            u = Math.asin(s * Math.sin(r) / n);
                        return (Math.PI - r - u) * (180 / Math.PI)
                    })(a, t, e) : (function(a, t, e) {
                        var n = t / a * 2,
                            s = Math.atan(n),
                            o = Math.sin(s),
                            l = t / o,
                            r = e,
                            u = r * r + l * l - 2 * r * l * Math.cos(s),
                            i = l * o / Math.sqrt(u),
                            c = Math.asin(i),
                            h = Math.PI - c,
                            d = r * Math.sin(h) / a,
                            f = Math.asin(d),
                            v = (Math.PI - h - f) * (180 / Math.PI);
                        return v < 0 ? 0 : v
                    })(a, t, e)
                }
            }, {
                key: "setCustomCss",
                value: function(a) {
                    var t = $("#custom-css");
                    0 === t.length && (t = $("<style>").attr("id", "custom-css").appendTo("body")), t.text(a)
                }
            }, {
                key: "addRootClass",
                value: function(t) {
                    return a.addClass(t)
                }
            }, {
                key: "removeRootClass",
                value: function(t) {
                    return a.removeClass(t)
                }
            }, {
                key: "hasRootClass",
                value: function(t) {
                    return a.hasClass(t)
                }
            }, {
                key: "changeRootClass",
                value: function(a, e) {
                    e ? t.addRootClass(a) : t.removeRootClass(a)
                }
            }, {
                key: "toggleRootClass",
                value: function(a) {
                    var e = t.hasRootClass(a);
                    t.changeRootClass(a, !e)
                }
            }, {
                key: "setWallInitializedClasses",
                value: function() {
                    t.removeRootClass("wall-loading"), t.addRootClass("wall-initialized")
                }
            }]), t
        })();
    window.helpers.Css = t
})();
"use strict";
helpers.Event = {
    triggerEvent: function(t) {
        var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : window,
            e = (function(t) {
                if ("function" == typeof CustomEvent) return new CustomEvent(t);
                var n = document.createEvent("Event");
                return n.initEvent(t, !0, !0), n
            })(t);
        return n.dispatchEvent(e)
    }
};
"use strict";
var _createClass = (function() {
    function t(t, i) {
        for (var a = 0; a < i.length; a++) {
            var n = i[a];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
        }
    }
    return function(i, a, n) {
        return a && t(i.prototype, a), n && t(i, n), i
    }
})();

function _classCallCheck(t, i) {
    if (!(t instanceof i)) throw new TypeError("Cannot call a class as a function")
}!(function() {
    var t = {
            appear: {
                hiddenStyle: {
                    opacity: 0
                },
                visibleStyle: {
                    opacity: 1
                }
            },
            slide: {
                hiddenStyle: {
                    opacity: 0,
                    transform: "translateX(-100%)"
                },
                visibleStyle: {
                    opacity: 1,
                    transform: "translateX(0)"
                }
            },
            slideUp: {
                hiddenStyle: {
                    opacity: 0,
                    transform: "translateY(100vh)"
                },
                visibleStyle: {
                    opacity: 1,
                    transform: "translateY(0)"
                }
            },
            zoomIn: {
                hiddenStyle: {
                    opacity: 0,
                    transform: "scale(0.2)"
                },
                visibleStyle: {
                    opacity: 1,
                    transform: "scale(1)"
                }
            },
            zoomOut: {
                hiddenStyle: {
                    opacity: 0,
                    transform: "scale(1.5)"
                },
                visibleStyle: {
                    opacity: 1,
                    transform: "scale(1)"
                }
            },
            turn: {
                hiddenStyle: {
                    opacity: 0,
                    transform: "perspective(100vw) rotateY(-90deg)"
                },
                visibleStyle: {
                    opacity: 1,
                    transform: "perspective(100vw) rotateY(0)"
                }
            }
        },
        i = (function() {
            function i(t) {
                _classCallCheck(this, i), this.checkinTransition = t, this.defaultCheckinTransition = "appear", this.initialStagger = "0.08s", this.normalStagger = null, this.initialTransitionDuration = "0.8s", this.normalTransitionDuration = "0.4s", helpers.autoBind(this)
            }
            return _createClass(i, [{
                key: "getCheckinTransition",
                value: function() {
                    var i = this.checkinTransition;
                    return t[i] || (i = this.defaultCheckinTransition), t[i]
                }
            }, {
                key: "setTransitionMode",
                value: function(t, i) {
                    var a = void 0,
                        n = void 0;
                    "initial" === i ? (a = this.initialStagger, n = this.initialTransitionDuration) : (a = this.normalStagger, n = this.normalTransitionDuration), t.isotope({
                        stagger: a,
                        transitionDuration: n
                    })
                }
            }]), i
        })();
    window.helpers.Isotope = i
})();
"use strict";
var _createClass = (function() {
    function e(e, n) {
        for (var t = 0; t < n.length; t++) {
            var i = n[t];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
        }
    }
    return function(n, t, i) {
        return t && e(n.prototype, t), i && e(n, i), n
    }
})();

function _classCallCheck(e, n) {
    if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function")
}!(function() {
    var e = (function() {
        function e() {
            _classCallCheck(this, e), this.isCancelled = !1, this.scheduledActions = new Immutable.List, helpers.autoBind(this)
        }
        return _createClass(e, [{
            key: "do",
            value: function(e) {
                return this.scheduledActions = this.scheduledActions.push(e), this
            }
        }, {
            key: "wait",
            value: function(n) {
                return this.do((function() {
                    return new Promise(function(t) {
                        var i = e.now();
                        requestAnimationFrame((function r() {
                            if (e.now() > i + n) return t();
                            requestAnimationFrame(r)
                        }))
                    })
                })), this
            }
        }, {
            key: "run",
            value: function() {
                var e = this,
                    n = Promise.resolve();
                return this.scheduledActions.forEach((function(t) {
                    n = n.then((function() {
                        if (!e.isCancelled) return t()
                    }))
                })), this.scheduledActions = this.scheduledActions.clear(), n
            }
        }, {
            key: "cancel",
            value: function() {
                this.scheduledActions = this.scheduledActions.clear(), this.isCancelled = !0
            }
        }], [{
            key: "now",
            value: function() {
                return window.performance && window.performance.now ? window.performance.now() : Date.now()
            }
        }, {
            key: "callAfter",
            value: function(n, t) {
                return (new e).wait(t).do((function() {
                    return n()
                })).run()
            }
        }]), e
    })();
    window.helpers.Animation = e
})();
"use strict";
var _createClass = (function() {
    function e(e, n) {
        for (var r = 0; r < n.length; r++) {
            var a = n[r];
            a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
        }
    }
    return function(n, r, a) {
        return r && e(n.prototype, r), a && e(n, a), n
    }
})();

function _classCallCheck(e, n) {
    if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function")
}!(function() {
    var e = (function() {
        function e(n) {
            _classCallCheck(this, e), this.wallOptions = n
        }
        return _createClass(e, [{
            key: "getReferer",
            value: function() {
                try {
                    var e = document.referrer;
                    return e || null
                } catch (e) {
                    return console.error(e), null
                }
            }
        }, {
            key: "getPartnerId",
            value: function() {
                if (!URLSearchParams) return null;
                var e = window.location.search;
                return new URLSearchParams(e).get("partner_id")
            }
        }, {
            key: "isEmbedConfiguratorEmbed",
            value: function() {
                var e = this.wallOptions.urls.backendEmbed,
                    n = this.getReferer(),
                    r = n && e.startsWith(n),
                    a = helpers.Wall.isIframe();
                return r && a
            }
        }, {
            key: "recordPageview",
            value: function() {
                if (!this.isEmbedConfiguratorEmbed()) {
                    var n = helpers.Wall.isIframe() ? 1 : 0,
                        r = this.wallOptions.wallId,
                        a = this.wallOptions.urls.recordView,
                        t = {
                            wallId: r,
                            embed: n,
                            partnerId: this.getPartnerId()
                        },
                        i = this.getReferer();
                    n && i && (t.embedder = i);
                    var l = a + "?" + $.param(t);
                    e.sendBeacon(l)
                }
            }
        }], [{
            key: "trackGaTiming",
            value: function(e, n, r) {
                if (window.gtag && Date.now && window.gaTokenWallsio) {
                    WallTimings[e] = Date.now();
                    var a = WallTimings[e] - WallTimings.pageload;
                    a > 6e4 || gtag("event", "timing_complete", {
                        send_to: window.gaTokenWallsio,
                        name: r,
                        value: a,
                        event_category: n
                    })
                }
            }
        }, {
            key: "sendBeacon",
            value: function(e) {
                if (navigator.sendBeacon) try {
                    navigator.sendBeacon(e)
                } catch (e) {
                    console.error(e)
                } else betterFetch.text(e, null, {
                    method: "POST"
                })
            }
        }]), e
    })();
    window.helpers.Tracking = e
})();
"use strict";
var _createClass = (function() {
    function e(e, n) {
        for (var t = 0; t < n.length; t++) {
            var a = n[t];
            a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
        }
    }
    return function(n, t, a) {
        return t && e(n.prototype, t), a && e(n, a), n
    }
})();

function _classCallCheck(e, n) {
    if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function")
}!(function() {
    var e = (function() {
        function e(n) {
            _classCallCheck(this, e), this.wallOptions = n
        }
        return _createClass(e, null, [{
            key: "build",
            value: function(e, n) {
                var t = _.get(templates, e);
                return t ? t(n) : ""
            }
        }]), e
    })();
    window.helpers.Templates = e
})();
"use strict";
window.helpers.translation = (function() {
    var t = function(t) {
        for (var a, r = arguments.length, n = Array(r > 1 ? r - 1 : 0), e = 1; e < r; e++) n[e - 1] = arguments[e];
        return (a = i18n).__.apply(a, ["frontend", t].concat(n))
    };
    return {
        __: t,
        __n: function(t, a, r) {
            for (var n = arguments.length, e = Array(n > 3 ? n - 3 : 0), i = 3; i < n; i++) e[i - 3] = arguments[i];
            var l;
            return (l = i18n).__n.apply(l, ["frontend", t, a, r].concat(e))
        },
        translateText: function() {
            var a = function(a, r) {
                var n = r.split("=");
                if (!(n.length < 2)) {
                    var e = n[0],
                        i = n[1];
                    e && i && a.attr(e, t(i))
                }
            };
            $("[data-translate]").each((function() {
                var a = $(this),
                    r = a.data("translate");
                a.html(t(r))
            })), $("[data-translate-attribute]").each((function() {
                var t = $(this),
                    r = t.data("translate-attribute").split("|"),
                    n = !0,
                    e = !1,
                    i = void 0;
                try {
                    for (var l, o = r[Symbol.iterator](); !(n = (l = o.next()).done); n = !0) {
                        var c = l.value;
                        a(t, c)
                    }
                } catch (t) {
                    e = !0, i = t
                } finally {
                    try {
                        !n && o.return && o.return()
                    } finally {
                        if (e) throw i
                    }
                }
            }))
        }
    }
})();
"use strict";
var _createClass = (function() {
    function e(e, t) {
        for (var n = 0; n < t.length; n++) {
            var i = t[n];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
        }
    }
    return function(t, n, i) {
        return n && e(t.prototype, n), i && e(t, i), t
    }
})();

function _classCallCheck(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
}!(function() {
    var e = $(window),
        t = helpers.translation.__,
        n = helpers.translation.__n,
        i = helpers.Animation,
        o = helpers.Css,
        a = o.addRootClass,
        r = o.hasRootClass,
        l = o.removeRootClass,
        s = (function() {
            function o(e) {
                _classCallCheck(this, o), this.wallOptions = e, this.disconnectTimeout = null, this.reconnectTimeout = null, this.serverStartedAt = null, helpers.autoBind(this)
            }
            return _createClass(o, [{
                key: "prepareEntities",
                value: function(e) {
                    if (!e.entities) return e;
                    var t = void 0;
                    try {
                        t = JSON.parse(e.entities)
                    } catch (e) {}
                    return t || (t = {}), e.entities = t, e
                }
            }, {
                key: "prepareVideo",
                value: function(e) {
                    var t = e.post_video;
                    if (!t) return e;
                    var n = e.post_video_key;
                    return this.wallOptions.mediaProxyHost ? (e.post_video = this.wallOptions.mediaProxyHost + "?src=" + encodeURIComponent(t) + "&key=" + n, e) : (e.post_video = helpers.Wall.forceSSL(e.post_video), e)
                }
            }, {
                key: "getRandomCheckinColorClass",
                value: function(e) {
                    var t = this.wallOptions.colorCount;
                    return "checkin-color-" + helpers.integer.getRandomSeededInt(e, 1, t)
                }
            }, {
                key: "initNotificationBar",
                value: function() {
                    this.wallOptions.overlayBar && o.showNotificationBar(this.wallOptions.overlayBar)
                }
            }, {
                key: "generateInstructions",
                value: function() {
                    var e = $(".post_instructions"),
                        n = this.wallOptions.postInstructions,
                        i = $("<ul>"),
                        o = n.basic || [],
                        a = n.networks || [],
                        r = !0,
                        l = !1,
                        s = void 0;
                    try {
                        for (var c, u = o[Symbol.iterator](); !(r = (c = u.next()).done); r = !0) {
                            var d = c.value;
                            if (d) {
                                var f = $("<li>").text(d);
                                i.append(f)
                            }
                        }
                    } catch (e) {
                        l = !0, s = e
                    } finally {
                        try {
                            !r && u.return && u.return()
                        } finally {
                            if (l) throw s
                        }
                    }
                    var h = !0,
                        v = !1,
                        p = void 0;
                    try {
                        for (var w, m = a[Symbol.iterator](); !(h = (w = m.next()).done); h = !0) {
                            var g = w.value;
                            f = $("<li>").html(t(g.message, g.tags));
                            i.append(f)
                        }
                    } catch (e) {
                        v = !0, p = e
                    } finally {
                        try {
                            !h && m.return && m.return()
                        } finally {
                            if (v) throw p
                        }
                    }
                    e.addClass("post-instructions-hidden"), e.html(i.contents())
                }
            }, {
                key: "loopInstructions",
                value: function() {
                    var e = $(".post_instructions"),
                        t = e.find("li"),
                        n = e.find("li.is-visible"),
                        o = this.wallOptions.postInstructionDisplayDuration;
                    if (t.length) {
                        var a = n.next();
                        a.length || (a = e.find("li").first());
                        var r = (new i).do((function() {
                            e.addClass("post-instructions-hidden")
                        })).wait(450).do((function() {
                            n.removeClass("is-visible"), a.addClass("is-visible")
                        })).wait(500).do((function() {
                            e.removeClass("post-instructions-hidden")
                        }));
                        t.length > 1 && (r = r.wait(o).do(this.loopInstructions)), r.run()
                    }
                }
            }, {
                key: "getWallSocket",
                value: function() {
                    var e = this,
                        t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        n = {
                            wallId: this.wallOptions.wallId,
                            client: "wallsio-frontend",
                            initialCheckins: this.wallOptions.initialCheckins,
                            network: this.wallOptions.network
                        },
                        i = Object.assign(n, t);
                    _.each(i, (function(e, t) {
                        !0 === e && (i[t] = 1), !1 === e && (i[t] = 0)
                    }));
                    var a = $.param(i),
                        r = this.wallOptions.nodeUrl + "?" + a,
                        l = io(r, {
                            autoConnect: !this.wallOptions.startInStaticMode,
                            forceNew: !0,
                            reconnectionDelay: 100,
                            reconnectionDelayMax: 3e4,
                            timeout: 1e3,
                            transports: ["websocket"],
                            withCredentials: !0
                        });
                    return l.on("reload wall", (function() {
                        o.reloadWall(l)
                    })), l.on("wallping", (function(t) {
                        e.serverStartedAt || (e.serverStartedAt = t.serverStartedAt)
                    })), $(document).on("Wallsio.disconnectSocket", (function() {
                        var e = _.get(l, "_callbacks[$stop][0]");
                        "function" == typeof e && e()
                    })), l.isPollingEnabled = function() {
                        return "polling" === l.io.opts.transports[0]
                    }, l.on("connect_error", (function() {
                        return setTimeout((function() {
                            l.io.opts.transports = ["polling", "websocket"], l.io.opts.timeout = 2e4
                        }), 0)
                    })), l
                }
            }, {
                key: "initDynamicDisconnect",
                value: function(e) {
                    var t = this;
                    if (!this.wallOptions.startInStaticMode) {
                        $(document).on("visibilitychange", (function() {
                            "visible" === document.visibilityState ? (clearTimeout(t.disconnectTimeout), e.connected || (t.reconnectTimeout = setTimeout((function() {
                                e.connect(), l("socket-disconnected")
                            }), 1500))) : (clearTimeout(t.reconnectTimeout), e.connected && (t.disconnectTimeout = setTimeout((function() {
                                e.disconnect(), a("socket-disconnected")
                            }), 48e4)))
                        }))
                    }
                }
            }, {
                key: "loadCachedCheckins",
                value: function() {
                    return betterFetch.json(this.wallOptions.urls.cachedCheckins, {
                        count: this.wallOptions.initialCheckins,
                        wallId: this.wallOptions.wallId
                    }).then((function(e) {
                        return e.cachedCheckins
                    })).catch((function(e) {
                        return console.error(e), []
                    }))
                }
            }], [{
                key: "reloadWall",
                value: function(e) {
                    e.disconnect(), $(document).off("visibilitychange");
                    var t = Math.floor(500 + 6e4 * Math.random());
                    setTimeout((function() {
                        location.reload()
                    }), t)
                }
            }, {
                key: "humanTimeDiff",
                value: function(e) {
                    if ((e = Math.floor(e / 1e3)) < 5) return t("THIS_MOMENT");
                    if (e < 60) {
                        var i = Math.floor(e);
                        return n("A_SECOND_AGO", "%s_SECONDS_AGO", i, i)
                    }
                    if (e < 3600) {
                        var o = Math.floor(e / 60);
                        return n("A_MINUTE_AGO", "%s_MINUTES_AGO", o, o)
                    }
                    if (e < 86400) {
                        var a = Math.floor(e / 3600);
                        return n("AN_HOUR_AGO", "%s_HOURS_AGO", a, a)
                    }
                    if (e < 2592e3) {
                        var r = Math.floor(e / 86400);
                        return n("A_DAY_AGO", "%s_DAYS_AGO", r, r)
                    }
                    var l = Math.floor(e / 604800);
                    return n("A_WEEK_AGO", "%s_WEEKS_AGO", l, l)
                }
            }, {
                key: "forceSSL",
                value: function(e) {
                    return _.isString(e) ? e.replace(/^http:/i, "https:") : e
                }
            }, {
                key: "showNotificationBar",
                value: function(e) {
                    var t = e.markup,
                        n = e.autoshowhideInterval,
                        i = e.displayTimeout,
                        a = void 0 === i ? 4e3 : i,
                        r = $("<div>").append(t),
                        l = $(".wall-notifications"),
                        s = r.find(".wall-notification"),
                        c = r.find("link"),
                        u = !!r.find(".wall-notification-trial");
                    c.on("load", (function() {
                        if (l.append(s), setTimeout((function() {
                                s.addClass("wall-notification-visible"), n && setInterval((function() {
                                    s.toggleClass("wall-notification-visible")
                                }), n)
                            }), a), u) {
                            var e = document.getElementById("trial-banner-upgrade-btn");
                            e && o.trackMixpanelEvent(e, "click", "Upgrade Prompt Selected", {
                                upgradeLocation: "wall"
                            })
                        }
                    })), $("head").append(c)
                }
            }, {
                key: "trackMixpanelEvent",
                value: function(e, t, n) {
                    var i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
                    e && window.mixpanel && e.addEventListener(t, (function() {
                        window.mixpanel.track(n, i)
                    }))
                }
            }, {
                key: "getElementTypeClassPrefix",
                value: function(e) {
                    return "wrapper" === e ? "checkin-wrapper-" : "checkin" === e ? "checkin-" : (console.error('elementType should be "wrapper" or "checkin", "' + e + '" found'), "blah-")
                }
            }, {
                key: "getImageAndMessageClasses",
                value: function(e, t, n) {
                    var i = o.getElementTypeClassPrefix(e);
                    return t && n ? [i + "with-image", i + "with-message", i + "with-image-and-message"] : t ? [i + "with-image", i + "without-message"] : n ? [i + "with-message", i + "without-image"] : [i + "without-image-and-message", i + "without-message", i + "without-image"]
                }
            }, {
                key: "addImageAndMessageClasses",
                value: function(e, t, n, i) {
                    var a = o.getImageAndMessageClasses(t, n, i);
                    return e.addClass(a), e
                }
            }, {
                key: "isAppScrollable",
                value: function() {
                    return r("scrollable")
                }
            }, {
                key: "isPreviewIframe",
                value: function() {
                    return r("preview-iframe")
                }
            }, {
                key: "hasPreviewIframe",
                value: function() {
                    return window === parent && $(".wall-preview-iframe").length > 0
                }
            }, {
                key: "isIframe",
                value: function() {
                    try {
                        return window.self !== window.top && !o.isPreviewIframe()
                    } catch (e) {
                        return !0
                    }
                }
            }, {
                key: "isMobile",
                value: function() {
                    return r("mobile")
                }
            }, {
                key: "isAutoheight",
                value: function() {
                    return o.isIframe() && r("autoheight")
                }
            }, {
                key: "isWidget",
                value: function() {
                    return o.isIframe() && r("is-widget")
                }
            }, {
                key: "isInViewport",
                value: function(t) {
                    var n = t.getBoundingClientRect();
                    return n.bottom >= 0 && n.right >= 0 && n.top <= e.height() && n.left <= e.width()
                }
            }, {
                key: "getWallHeight",
                value: function() {
                    var e = document.body.scrollHeight;
                    return e - document.body.clientHeight > 1 ? Math.min(document.body.scrollHeight, document.body.clientHeight) : e
                }
            }, {
                key: "hideWallInfo",
                value: function() {
                    a("hide-wall-info")
                }
            }, {
                key: "showWallInfo",
                value: function(e) {
                    l("hide-wall-info"), $(".wall-info").removeClass("wall-info-loading").text(e)
                }
            }, {
                key: "updateTimestamps",
                value: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                    (t ? $(".checkin-" + t).find(".checkin-timestamp") : $(".checkin-timestamp")).each((function() {
                        var t = $(this).attr("data-timestamp");
                        if (t) {
                            var n = e || Date.now();
                            $(this).text(o.getRelativeTimeString(n, t))
                        }
                    }))
                }
            }, {
                key: "getRelativeTimeString",
                value: function(e, t) {
                    var n = e - t;
                    return o.humanTimeDiff(n)
                }
            }, {
                key: "getWindowMode",
                value: function() {
                    return e.width() > e.height() ? "landscape" : "portrait"
                }
            }, {
                key: "isLandscape",
                value: function() {
                    return "landscape" === o.getWindowMode()
                }
            }, {
                key: "isPortrait",
                value: function() {
                    return "portrait" === o.getWindowMode()
                }
            }]), o
        })();
    window.helpers.Wall = s
})();
"use strict";
var _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
    } : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    },
    _slicedToArray = (function() {
        return function(e, t) {
            if (Array.isArray(e)) return e;
            if (Symbol.iterator in Object(e)) return (function(e, t) {
                var r = [],
                    i = !0,
                    n = !1,
                    a = void 0;
                try {
                    for (var o, l = e[Symbol.iterator](); !(i = (o = l.next()).done) && (r.push(o.value), !t || r.length !== t); i = !0);
                } catch (e) {
                    n = !0, a = e
                } finally {
                    try {
                        !i && l.return && l.return()
                    } finally {
                        if (n) throw a
                    }
                }
                return r
            })(e, t);
            throw new TypeError("Invalid attempt to destructure non-iterable instance")
        }
    })(),
    _createClass = (function() {
        function e(e, t) {
            for (var r = 0; r < t.length; r++) {
                var i = t[r];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
            }
        }
        return function(t, r, i) {
            return r && e(t.prototype, r), i && e(t, i), t
        }
    })();

function _classCallCheck(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
}!(function() {
    var e = ["post_image", "external_image"],
        t = ["post_image", "external_image"],
        r = (function() {
            function r(e) {
                _classCallCheck(this, r), this.wallOptions = e, helpers.autoBind(this)
            }
            return _createClass(r, [{
                key: "makeUrlAbsolute",
                value: function(e) {
                    return r.isAbsoluteUrl(e) ? e : "https://dev.walls.io" + e
                }
            }, {
                key: "getSlimProxyUrl",
                value: function(e, t, i) {
                    var n = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
                        a = this.wallOptions.imageSlimproxyHost;
                    if (!a || !r.isAbsoluteUrl(e)) return e;
                    var o = {
                        src: e,
                        w: this.wallOptions.proxyImageWidth,
                        h: this.wallOptions.proxyImageHeight,
                        q: this.wallOptions.proxyImageQuality,
                        nu: 1,
                        salt: this.wallOptions.proxySalt
                    };
                    t && (o.key = t), this.wallOptions.proxyNoCache && (o.nc = 1), _.isPlainObject(i) && (o = Object.assign(o, i));
                    var l = n ? r.getDevicePixelRatio() : 1;
                    return o.w && (o.w = o.w * l), o.h && (o.h = o.h * l), e = a + "?" + $.param(o)
                }
            }, {
                key: "getImageProxyUrl",
                value: function(e, t, i) {
                    var n = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
                        a = this.wallOptions.imageProxyHost;
                    if (!a) return "";
                    var o = {
                        w: this.wallOptions.proxyImageWidth,
                        h: this.wallOptions.proxyImageHeight,
                        q: this.wallOptions.proxyImageQuality,
                        nu: 1
                    };
                    t && (o.key = t), this.wallOptions.proxyNoCache && (o.nc = 1), _.isPlainObject(i) && (o = Object.assign(o, i));
                    var l = n ? r.getDevicePixelRatio() : 1;
                    return o.w && (o.w = o.w * l), o.h && (o.h = o.h * l), a + e + "?" + $.param(o)
                }
            }, {
                key: "slimProxyImage",
                value: function(e, t, r) {
                    var i = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
                    return e = this.makeUrlAbsolute(e), e = this.getSlimProxyUrl(e, t, r, i), e = helpers.Wall.forceSSL(e)
                }
            }, {
                key: "prepareImages",
                value: function(t, r) {
                    var i = this,
                        n = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
                    return _.each(e, (function(e) {
                        if (t[e])
                            if (t[e + "_uuid"]) t[e] = i.getImageProxyUrl(t[e + "_uuid"]);
                            else {
                                var a = void 0,
                                    o = e + "_key",
                                    l = e + "_original";
                                t[l] ? t[e] = t[l] : t[l] = t[e], a = "external_image" === e ? Object.assign({}, r, {
                                    w: i.wallOptions.proxyProfileImageWidth,
                                    h: i.wallOptions.proxyProfileImageHeight
                                }) : r, t[e] = i.slimProxyImage(t[e], t[o], a, n)
                            }
                    })), t
                }
            }, {
                key: "getAspectRatio",
                value: function(e, t) {
                    var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                        i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
                        n = e[t + "_width"],
                        a = e[t + "_height"];
                    if (!1 === r.enableAspectRatioImages || !n || !a) return r.defaultPostImageAspectRatio;
                    var o = n / a;
                    return i ? o : o < r.minPostImageAspectRatio ? r.minPostImageAspectRatio : o > r.maxPostImageAspectRatio ? r.maxPostImageAspectRatio : o
                }
            }], [{
                key: "buildBase64Image",
                value: function(e) {
                    var t = "data:image/jpg;base64,";
                    if (e.indexOf("~") > -1) {
                        var r = e.split("~"),
                            i = _slicedToArray(r, 2);
                        return t + "/9j/4AAQSkZJRgABAQEAYABgAAD//gA7Q1JFQVRPUjogZ2QtanBlZyB2MS4wICh1c2luZyBJSkcgSlBFRyB2ODApLCBxdWFsaXR5ID0gNjAK/9sAQwANCQoLCggNCwoLDg4NDxMgFRMSEhMnHB4XIC4pMTAuKS0sMzpKPjM2RjcsLUBXQUZMTlJTUjI+WmFaUGBKUVJP/9sAQwEODg4TERMmFRUmTzUtNU9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09P/8AAEQgA" + i[0] + "AwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/aAAwDAQACEQMRAD8A" + i[1]
                    }
                    return t + e
                }
            }, {
                key: "preloadImage",
                value: function(e) {
                    return new Promise(function(t, r) {
                        if (e) {
                            var i = new Image;
                            try {
                                i.src = e, i.onerror = function() {
                                    return r()
                                }, i.onload = function() {
                                    return t()
                                }
                            } catch (e) {
                                r("invalid url")
                            }
                        } else r()
                    })
                }
            }, {
                key: "isAbsoluteUrl",
                value: function(e) {
                    return /^\w+:\/\//.test(e)
                }
            }, {
                key: "getDevicePixelRatio",
                value: function() {
                    return _.get(window, "devicePixelRatio", 1) >= 1.5 ? 2 : 1
                }
            }, {
                key: "preloadImages",
                value: function(e) {
                    var i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function() {},
                        n = function(t) {
                            var n = e[t];
                            if (!n) return i(e, t, !1), {
                                v: void 0
                            };
                            r.preloadImage(n).then((function() {
                                return i(t, !0)
                            })).catch((function() {
                                return i(t, !1)
                            }))
                        },
                        a = !0,
                        o = !1,
                        l = void 0;
                    try {
                        for (var s, u = t[Symbol.iterator](); !(a = (s = u.next()).done); a = !0) {
                            var A = n(s.value);
                            if ("object" === (void 0 === A ? "undefined" : _typeof(A))) return A.v
                        }
                    } catch (e) {
                        o = !0, l = e
                    } finally {
                        try {
                            !a && u.return && u.return()
                        } finally {
                            if (o) throw l
                        }
                    }
                }
            }, {
                key: "getTwoDominantColors",
                value: function(e) {
                    var t = e.post_image_dominant_colors;
                    if (!t) return null;
                    var r = t.split(",");
                    return r.length < 2 ? null : r.slice(0, 2)
                }
            }]), r
        })();
    helpers.Image = r
})();
"use strict";
helpers.sharing = (function() {
    var n = function(n) {
        var t = 400;
        return "twitter" === (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null) && (t = 260), window.open(n, "", "menubar=no,toolbar=no,resizable=yes,scrollbars=yes,width=555,height=" + t), !1
    };
    return {
        initSharingLinks: function() {
            $(document).on("click", helpers.actionSelector("share"), (function(t) {
                t.preventDefault();
                var e = $(this);
                n(e.attr("href"), e.attr("data-network"))
            }))
        },
        openSharingWindow: n
    }
})();
"use strict";
var _createClass = (function() {
    function e(e, i) {
        for (var t = 0; t < i.length; t++) {
            var o = i[t];
            o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
        }
    }
    return function(i, t, o) {
        return t && e(i.prototype, t), o && e(i, o), i
    }
})();

function _classCallCheck(e, i) {
    if (!(e instanceof i)) throw new TypeError("Cannot call a class as a function")
}!(function() {
    var e = 3,
        i = (function() {
            function i(t, o, n) {
                _classCallCheck(this, i);
                var a = !1 === Modernizr.videoautoplay,
                    s = Modernizr.isForcedModernizr;
                this.wasAutoplayDisabledManually = a && s, this.isVideoAutochangeActive = !this.wasAutoplayDisabledManually, this.changeVideoTimeout = null, this.wasAutoplayDisabledManually ? this.supportsAutomaticVideoPlayTriggering = !1 : this.supportsAutomaticVideoPlayTriggering = null, this.networksWithVideoEmbeds = t.networksWithVideoEmbeds, this.maxPlayingVideos = t.maxPlayingVideos || e, this.WallHelper = o, this.TemplatesHelper = n, helpers.autoBind(this)
            }
            return _createClass(i, [{
                key: "isAutoplaySupported",
                value: function() {
                    return !this.wasAutoplayDisabledManually && (!0 === Modernizr.videoautoplay || !0 === this.supportsAutomaticVideoPlayTriggering)
                }
            }, {
                key: "hasRealVideo",
                value: function(e) {
                    return !!e.post_video
                }
            }, {
                key: "checkinElementHasRealVideo",
                value: function(e) {
                    return !!e.data("video-url")
                }
            }, {
                key: "getVideoEmbedToken",
                value: function(e) {
                    return "facebook" === e.type ? encodeURIComponent(e.post_link) : e.post_id
                }
            }, {
                key: "getVideoEmbedElement",
                value: function(e) {
                    var i = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                        t = "embeds/" + e.type + "_video_embed";
                    return helpers.Templates.build(t, {
                        token: this.getVideoEmbedToken(e),
                        showControls: i
                    })
                }
            }, {
                key: "hasEmbeddedVideoSupport",
                value: function(e) {
                    var i = e.type,
                        t = this.networksWithVideoEmbeds[i];
                    if (!t) return !1;
                    var o = t.field,
                        n = new RegExp(t.regex),
                        a = e[o];
                    return !!a && n.test(a)
                }
            }, {
                key: "hasAnyVideo",
                value: function(e) {
                    return !!this.hasRealVideo(e) || this.hasEmbeddedVideoSupport(e)
                }
            }, {
                key: "setPlayClasses",
                value: function(e) {
                    e.closest(".video-wrapper").addClass("video-playing video-has-played"), e.closest(".checkin").addClass("checkin-with-video-playing")
                }
            }, {
                key: "setPauseClasses",
                value: function(e) {
                    e.closest(".video-wrapper").removeClass("video-playing"), e.closest(".checkin").removeClass("checkin-with-video-playing")
                }
            }, {
                key: "play",
                value: function(e) {
                    var i = this,
                        t = $(e).eq(0),
                        o = (e = t.get(0)).play();
                    o && o.then ? o.then((function() {
                        i.setPlayClasses(t), null === i.supportsAutomaticVideoPlayTriggering && (i.supportsAutomaticVideoPlayTriggering = !0)
                    })).catch((function(e) {
                        "NotSupportedError" === e.name && t.closest(".checkin").addClass("video-has-error"), "NotAllowedError" === e.name && (i.supportsAutomaticVideoPlayTriggering = !1)
                    })) : this.setPlayClasses(t)
                }
            }, {
                key: "pause",
                value: function(e) {
                    0 !== e.length && (e.get(0).pause(), this.setPauseClasses(e))
                }
            }, {
                key: "mute",
                value: function(e) {
                    var i = $(e).eq(0);
                    (e = i.get(0)).muted = !0, i.closest(".video-wrapper").addClass("video-muted")
                }
            }, {
                key: "unmute",
                value: function(e) {
                    var i = $(e).eq(0);
                    (e = i.get(0)).muted = !1, i.closest(".video-wrapper").removeClass("video-muted")
                }
            }, {
                key: "removeVideoClasses",
                value: function(e) {
                    var i = $(e).eq(0).closest(".video-wrapper");
                    i.removeClass("video-muted video-playing video-has-played"), i.closest(".checkin").removeClass("checkin-with-video checkin-with-video-playing video-has-error")
                }
            }, {
                key: "getVisibleVideoCheckins",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1 / 0,
                        i = $(".socialwall_container .checkin[data-video-url]:not(.video-has-error)").get();
                    return i = i.filter(this.WallHelper.isInViewport), i = _.shuffle(i), i = _.slice(i, 0, e), $(i)
                }
            }, {
                key: "muteAllOtherVideos",
                value: function(e) {
                    var i = this,
                        t = e.get(0);
                    $(".checkin-video").each((function(e, o) {
                        o !== t && i.mute(o)
                    }))
                }
            }, {
                key: "createVideo",
                value: function(e) {
                    if (e.hasClass("checkin-with-video")) return e.find(".video-wrapper");
                    if (!this.checkinElementHasRealVideo(e)) return null;
                    e.addClass("checkin-with-video");
                    var i = e.find(".checkin-image"),
                        t = e.find(".checkin-image-inner"),
                        o = e.data("video-url"),
                        n = $(this.TemplatesHelper.build("checkin_video", {
                            videoUrl: o
                        }));
                    return t.length > 0 ? n.prependTo(t) : n.prependTo(i), n
                }
            }, {
                key: "displayVideo",
                value: function(e) {
                    var i = this,
                        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        o = t.startMuted,
                        n = void 0 === o || o,
                        a = t.forcePlay,
                        s = void 0 !== a && a,
                        l = this.createVideo(e);
                    if (l) {
                        var r = l.find("video");
                        n ? this.mute(r) : this.unmute(r), s ? this.play(r) : Modernizr.on("videoautoplay", (function() {
                            (i.isAutoplaySupported() || null === i.supportsAutomaticVideoPlayTriggering) && i.play(r)
                        }))
                    }
                }
            }, {
                key: "destroyVideo",
                value: function(e) {
                    var i = this;
                    0 !== e.length && (this.pause(e), setTimeout((function() {
                        var t = e.get(0);
                        i.removeVideoClasses(t), e.closest(".video-wrapper").remove()
                    }), 0))
                }
            }, {
                key: "pauseAllOtherVideos",
                value: function(e) {
                    var i = this,
                        t = $(".socialwall_container").find(".checkin-with-video:not(.video-has-error)");
                    e && e.length && (t = t.filter((function(i, t) {
                        return !e.toArray().includes(t)
                    }))), t.each((function(e, t) {
                        var o = $(t).find(".checkin-video");
                        i.pause(o)
                    }))
                }
            }, {
                key: "removeAllVideos",
                value: function() {
                    var e = this;
                    $(".socialwall_container").find(".checkin-with-video .checkin-video").each((function(i, t) {
                        e.destroyVideo($(t))
                    }))
                }
            }, {
                key: "updateRunningVideos",
                value: function(e) {
                    var i = this;
                    this.pauseAllOtherVideos(e), e.each((function(e, t) {
                        i.displayVideo($(t))
                    }))
                }
            }, {
                key: "changeVideos",
                value: function() {
                    var e = this,
                        i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                    clearTimeout(this.changeVideoTimeout), this.changeVideoTimeout = setTimeout((function() {
                        if (e.isVideoAutochangeActive) {
                            var i = e.getVisibleVideoCheckins(e.maxPlayingVideos);
                            e.updateRunningVideos(i), 0 === i.length ? e.changeVideos(1e3) : e.changeVideos(15e3)
                        }
                    }), i)
                }
            }, {
                key: "setVideoAutochangeActive",
                value: function(e) {
                    this.isVideoAutochangeActive = e, !1 === e ? this.removeAllVideos() : this.changeVideos(0)
                }
            }, {
                key: "initVideo",
                value: function(e, i) {
                    this.hasRealVideo(e) && i.attr("data-video-url", e.post_video)
                }
            }, {
                key: "initChangeVideoOnScrollListener",
                value: function() {
                    var e = this,
                        i = $(window),
                        t = i.scrollTop();
                    i.on("scroll", _.throttle((function() {
                        var o = i.scrollTop();
                        Math.abs(o - t) < 150 || (e.changeVideos(), t = i.scrollTop())
                    }), 300))
                }
            }, {
                key: "isVideoSupportedByBrowser",
                value: function() {
                    return "play" in document.createElement("video")
                }
            }, {
                key: "initEventListeners",
                value: function() {
                    if (this.isVideoSupportedByBrowser()) {
                        var e = $(".socialwall_container, .detail-mount-point");
                        this.initMuteButton(e), this.initPlayButton(e), this.initChangeVideoOnScrollListener()
                    }
                }
            }, {
                key: "initPlayButton",
                value: function(e) {
                    var i = this;
                    e.on("click", ".video-play-button", (function() {
                        var e = $(this).closest(".checkin");
                        return !i.checkinElementHasRealVideo(e) || (i.displayVideo(e, {
                            forcePlay: !0
                        }), !1)
                    }))
                }
            }, {
                key: "initMuteButton",
                value: function(e) {
                    var i = this;
                    e.on("click", ".video-mute-button", (function() {
                        var e = $(this).closest(".video-wrapper"),
                            t = e.find("video");
                        return e.hasClass("video-muted") ? (i.unmute(t), i.muteAllOtherVideos(t)) : i.mute(t), !1
                    }))
                }
            }, {
                key: "init",
                value: function() {
                    this.initEventListeners(), this.changeVideos(2e3)
                }
            }]), i
        })();
    window.helpers.Video = i
})();
"use strict";
var _createClass = (function() {
    function e(e, t) {
        for (var n = 0; n < t.length; n++) {
            var a = t[n];
            a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
        }
    }
    return function(t, n, a) {
        return n && e(t.prototype, n), a && e(t, a), t
    }
})();

function _classCallCheck(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
}!(function() {
    var e = (function() {
        function e(t, n) {
            _classCallCheck(this, e), this.wallOptions = t, this.wallState = n, this.bottomAddedCheckinsCounter = 1, this.topAddedCheckinsCounter = 1, helpers.autoBind(this)
        }
        return _createClass(e, [{
            key: "isNewAdNeeded",
            value: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "top",
                    t = this.wallState.getSortedCheckinsData(),
                    n = this.wallOptions.adsFrequency,
                    a = Math.ceil(.15 * n);
                if ((n += _.random(-a, a), this.wallState.checkinsDataSize < n) && (!t.some((function(e) {
                        return "sponsored" === e.type
                    })) && "top" === e)) return !0;
                return !("top" === e ? t.take(n) : t.takeLast(n)).some((function(e) {
                    return "sponsored" === e.type
                }))
            }
        }, {
            key: "createCheckinDataFromAd",
            value: function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "top",
                    n = {};
                return n.id = e.id + "-" + Date.now(), n.originalId = e.id, n.latitude = e.latitude, n.longitude = e.longitude, n.post_id = e.id, n.post_image = e.image, n.post_image_height = e.image_height, n.post_image_width = e.image_width, n.post_image_key = e.image_key, n.post_image_dominant_colors = e.image_dominant_colors, n.post_link = e.link, n.post_video = e.video, n.comment = e.text, n.html_comment = e.text, n.external_fullname = e.user_name, n.external_image = e.user_image, n.external_image_key = e.user_image_key, n.type = "sponsored", n = new helpers.Image(this.wallOptions).prepareImages(n, {
                    q: 95
                }), helpers.Image.preloadImages(n), this.wallState && (n = this.prepareRankingData(n, t), n = "top" === t ? this.makeCheckinTopRanked(n) : this.makeCheckinTopRanked(n, !0)), n
            }
        }, {
            key: "getSortField",
            value: function() {
                return {
                    weight: "weight",
                    time: "external_created_timestamp",
                    addOrder: "addOrder"
                }[this.wallOptions.clientRankingMode]
            }
        }, {
            key: "addSortScoreToCheckin",
            value: function(e) {
                var t = this.getSortField(),
                    n = this.wallOptions.clientRankingMode;
                if (!t) return e.sortScore = 0, e;
                var a = e[t],
                    i = e.bonus || 0;
                return ["weight", "time"].includes(n) && (a += i), e.sortScore = a, e
            }
        }, {
            key: "makeCheckinTopRanked",
            value: function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    n = this.wallState.getSortedCheckinsData(),
                    a = void 0,
                    i = void 0,
                    r = void 0,
                    o = void 0;
                return (a = t ? n.last() : n.first()) && ("weight" === this.wallOptions.clientRankingMode ? (r = a.weight + a.bonus, o = e.weight) : "time" === this.wallOptions.clientRankingMode ? (r = a.external_created_timestamp + a.bonus, o = e.external_created_timestamp) : "addOrder" === this.wallOptions.clientRankingMode && (r = a.addOrder + a.bonus, o = e.addOrder), t ? i = r - o - 1 : (i = r - o + 1, i = Math.max(i, 0)), e.bonus = i), e = this.addSortScoreToCheckin(e)
            }
        }, {
            key: "prepareRankingData",
            value: function(e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                return e.bonus = e.bonus || 0, e.weight = e.weight || 0, e.external_created_timestamp = e.external_created_timestamp || 0, "top" === t ? (e.addOrder = this.topAddedCheckinsCounter, this.topAddedCheckinsCounter++) : "bottom" === t ? (e.addOrder = -1 * this.bottomAddedCheckinsCounter, this.bottomAddedCheckinsCounter++) : n && n.addOrder && (e.addOrder = n.addOrder), e = this.addSortScoreToCheckin(e)
            }
        }], [{
            key: "compare",
            value: function(e, t) {
                var n = [],
                    a = _.intersection(Object.keys(e), Object.keys(t));
                return _.each(a, (function(a) {
                    _.isEqual(e[a], t[a]) || n.push(a)
                })), n
            }
        }, {
            key: "hasUserData",
            value: function(e) {
                return !!["facebook", "instagram", "pinterest"].includes(e.type) || !!(e.external_name || e.external_fullname || e.external_image)
            }
        }, {
            key: "prepareComment",
            value: function(e, t) {
                if (!e.html_comment) return e;
                var n = e.comment,
                    a = e.html_comment,
                    i = t,
                    r = n.length;
                return a = helpers.truncateTransformedTextPrecise(a, i, r), e.truncated_html_comment = a, e
            }
        }]), e
    })();
    window.helpers.Checkins = e
})();
"use strict";
var _slicedToArray = (function() {
        return function(r, a) {
            if (Array.isArray(r)) return r;
            if (Symbol.iterator in Object(r)) return (function(r, a) {
                var t = [],
                    n = !0,
                    e = !1,
                    o = void 0;
                try {
                    for (var i, l = r[Symbol.iterator](); !(n = (i = l.next()).done) && (t.push(i.value), !a || t.length !== a); n = !0);
                } catch (r) {
                    e = !0, o = r
                } finally {
                    try {
                        !n && l.return && l.return()
                    } finally {
                        if (e) throw o
                    }
                }
                return t
            })(r, a);
            throw new TypeError("Invalid attempt to destructure non-iterable instance")
        }
    })(),
    _createClass = (function() {
        function r(r, a) {
            for (var t = 0; t < a.length; t++) {
                var n = a[t];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(r, n.key, n)
            }
        }
        return function(a, t, n) {
            return t && r(a.prototype, t), n && r(a, n), a
        }
    })();

function _classCallCheck(r, a) {
    if (!(r instanceof a)) throw new TypeError("Cannot call a class as a function")
}!(function() {
    var r = (function() {
        function r(a) {
            _classCallCheck(this, r), this.wallOptions = a, this.originalLocation = {
                hash: location.hash,
                host: location.host,
                hostname: location.hostname,
                href: location.href,
                origin: location.origin,
                pathname: location.pathname,
                port: location.port,
                protocol: location.protocol,
                search: location.search
            }
        }
        return _createClass(r, [{
            key: "getWallUrl",
            value: function() {
                var r = this.wallOptions.wallUrl;
                return this.originalLocation.search && (r += this.originalLocation.search), this.originalLocation.hash && (r += this.originalLocation.hash), r
            }
        }, {
            key: "getDetailUrl",
            value: function(r) {
                var a = this.wallOptions.wallUrl + "/p/" + r;
                return this.originalLocation.search && (a += this.originalLocation.search), this.originalLocation.hash && (a += this.originalLocation.hash), a
            }
        }, {
            key: "getCompactDetailUrl",
            value: function(r) {
                return this.wallOptions.urls.basePath + "s/" + r
            }
        }], [{
            key: "getQueryParamForUrl",
            value: function(r, a) {
                a = a.replace(/[\[\]]/g, "\\$&");
                var t = new RegExp("[?&]" + a + "(=([^&#]*)|&|#|$)").exec(r);
                return t ? t[2] ? decodeURIComponent(t[2].replace(/\+/g, " ")) : "" : null
            }
        }, {
            key: "getQueryParamForCurrentUrl",
            value: function(a) {
                return r.getQueryParamForUrl(window.location.href, a)
            }
        }, {
            key: "updateUrlQueryParam",
            value: function(a, t, n) {
                var e = t + "=" + n,
                    o = r.getQueryParamForUrl(a, t);
                if (null === o) {
                    var i = void 0,
                        l = a.split("?"),
                        c = _slicedToArray(l, 2),
                        u = c[0],
                        s = c[1];
                    return i = u + "?" + e, s && (i = i + "&" + s), i
                }
                var h = t + "=" + o;
                return a.replace(h, e)
            }
        }, {
            key: "updateQueryParamForCurrentUrl",
            value: function(a, t) {
                var n = window.location.href;
                window.location.href = r.updateUrlQueryParam(n, a, t)
            }
        }]), r
    })();
    window.helpers.Url = r
})();
"use strict";
var _createClass = (function() {
    function e(e, t) {
        for (var r = 0; r < t.length; r++) {
            var l = t[r];
            l.enumerable = l.enumerable || !1, l.configurable = !0, "value" in l && (l.writable = !0), Object.defineProperty(e, l.key, l)
        }
    }
    return function(t, r, l) {
        return r && e(t.prototype, r), l && e(t, l), t
    }
})();

function _classCallCheck(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
}!(function() {
    var e = (function() {
        function e(t) {
            _classCallCheck(this, e), this.urlHelper = new helpers.Url(t)
        }
        return _createClass(e, [{
            key: "setUrl",
            value: function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                // if (window.history.pushState) try {
                //     var r = this.urlHelper.getCompactDetailUrl(e);
                //     t ? window.history.replaceState({
                //         detail: e
                //     }, null, r) : window.history.pushState({
                //         detail: e
                //     }, null, r)
                // } catch (e) {
                //     console.error(e)
                // }
            }
        }, {
            key: "clearUrl",
            value: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                // if (window.history.pushState) try {
                //     var t = this.urlHelper.getWallUrl();
                //     e ? window.history.replaceState({
                //         detail: null
                //     }, null, t) : window.history.state && window.history.state.detail && window.history.pushState({
                //         detail: null
                //     }, null, t)
                // } catch (e) {
                //     console.error(e)
                // }
            }
        }]), e
    })();
    window.helpers.Route = e
})();
"use strict";
helpers.time = {
    cssDurationToMs: function(s) {
        var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
            t = s.match(/^\s*([0-9.]+)\s*(ms|s)\s*$/);
        if (!t) return r;
        var e = parseFloat(t[1]);
        return "s" === t[2] ? 1e3 * e : e
    }
};
"use strict";
!(function() {
    var e = helpers.Css,
        l = e.addRootClass,
        n = e.removeRootClass,
        s = $("body"),
        r = (screenfull.enabled && document.addEventListener(screenfull.raw.fullscreenchange, (function() {
            screenfull.isFullscreen ? (l("fullscreen"), scrollTo(0, 0)) : n("fullscreen")
        })), {
            enter: function() {
                screenfull.enabled && screenfull.request()
            },
            leave: function() {
                screenfull.enabled && screenfull.isFullscreen && screenfull.exit()
            },
            isSupported: function() {
                return screenfull.enabled
            },
            isFullscreen: function() {
                return screenfull.isFullscreen
            },
            getFullscreenChangeEventName: function() {
                return _.get(screenfull, "raw.fullscreenchange")
            }
        });
    screenfull.enabled && (l("fullscreen-support"), s.on("click", ".fullscreen-toggle", (function() {
        screenfull.isFullscreen ? r.leave() : r.enter()
    }))), window.WallsioFullscreen = r
})();
"use strict";
var _createClass = (function() {
    function t(t, e) {
        for (var a = 0; a < e.length; a++) {
            var i = e[a];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
        }
    }
    return function(e, a, i) {
        return a && t(e.prototype, a), i && t(e, i), e
    }
})();

function _classCallCheck(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
}!(function() {
    var t = (function() {
        function t(e, a, i) {
            _classCallCheck(this, t), this._stack = Immutable.List(), this._checkinsData = Immutable.Map(), this._sortedCheckinsData = Immutable.List(), this._newCheckinSortScoreThreshold = -1 / 0, this.wallOptions = e, this.isAppScrollable = a, this.getTilesLimit = i, this.initAdsData(), helpers.autoBind(this)
        }
        return _createClass(t, [{
            key: "initAdsData",
            value: function() {
                this.wallOptions && this.wallOptions.ads || (this._adsData = Immutable.List()), this._adsData = Immutable.List(this.wallOptions.ads)
            }
        }, {
            key: "getRandomAd",
            value: function() {
                if (0 === this.adCount) return null;
                var t = _.random(this.adCount - 1);
                return this._adsData.get(t)
            }
        }, {
            key: "updateAdData",
            value: function(t) {
                var e = parseInt(t.id, 10),
                    a = !1;
                this._adsData = this._adsData.map((function(i) {
                    return parseInt(i.id, 10) !== e ? i : (a = !0, t)
                })), a || (this._adsData = this._adsData.push(t))
            }
        }, {
            key: "removeAdData",
            value: function(t) {
                t = parseInt(t, 10), this._adsData = this._adsData.filter((function(e) {
                    return parseInt(e.id, 10) !== t
                }))
            }
        }, {
            key: "addToStack",
            value: function(t) {
                this._stack.find((function(e) {
                    return e.id === t.id
                })) || (this._stack = this._stack.push(t))
            }
        }, {
            key: "shiftStack",
            value: function() {
                var t = this._stack.first();
                return this._stack = this._stack.shift(), t
            }
        }, {
            key: "filterStack",
            value: function(t) {
                this._stack = this._stack.filter(t)
            }
        }, {
            key: "truncateStack",
            value: function(t) {
                this._stack = this._stack.takeLast(t)
            }
        }, {
            key: "truncateCheckinData",
            value: function(t) {
                var e = this.getSortedCheckinsData().slice(t);
                if (0 !== e.size) {
                    var a = e.map((function(t) {
                        return t.id
                    }));
                    this.removeCheckinData(a.toArray())
                }
            }
        }, {
            key: "isStackEmpty",
            value: function() {
                return 0 === this.stackSize
            }
        }, {
            key: "isCheckinsDataEmpty",
            value: function() {
                return 0 === this.checkinsDataSize
            }
        }, {
            key: "getCheckinData",
            value: function(e) {
                e = t.normalizeCheckinId(e);
                return this._checkinsData.get(e, null)
            }
        }, {
            key: "hasCheckin",
            value: function(e) {
                return e = t.normalizeCheckinId(e), this._checkinsData.has(e)
            }
        }, {
            key: "setCheckinData",
            value: function(e, a) {
                e = t.normalizeCheckinId(e), this._checkinsData = this._checkinsData.set(e, a), this.updateSortedCheckinsData()
            }
        }, {
            key: "setCheckinField",
            value: function(t, e, a) {
                var i = this.getCheckinData(t);
                if (i) {
                    var n = Object.assign({}, i);
                    n[e] = a, this.setCheckinData(t, n)
                }
            }
        }, {
            key: "removeCheckinData",
            value: function(e) {
                _.isArray(e) || (e = [e]), e = _.map(e, t.normalizeCheckinId), this._checkinsData = this._checkinsData.deleteAll(e), this.updateSortedCheckinsData()
            }
        }, {
            key: "getAllCheckinsData",
            value: function() {
                return this._checkinsData
            }
        }, {
            key: "getSortedCheckinsData",
            value: function() {
                return this._sortedCheckinsData
            }
        }, {
            key: "getCheckinIds",
            value: function() {
                return this._checkinsData.keySeq().toList()
            }
        }, {
            key: "updateSortedCheckinsData",
            value: function() {
                var t = this._checkinsData.toList(),
                    e = !0,
                    a = !1,
                    i = void 0;
                try {
                    for (var n, s = this.checkinsDataSortFunctions[Symbol.iterator](); !(e = (n = s.next()).done); e = !0) {
                        var r = n.value;
                        t = t.sortBy(r)
                    }
                } catch (t) {
                    a = !0, i = t
                } finally {
                    try {
                        !e && s.return && s.return()
                    } finally {
                        if (a) throw i
                    }
                }
                this._sortedCheckinsData = t, this.updateNewCheckinSortScoreThreshold()
            }
        }, {
            key: "updateNewCheckinSortScoreThreshold",
            value: function() {
                if (!this.isAppScrollable) return !1;
                var t = this.getTilesLimit(this.wallOptions, !0),
                    e = Math.round(t / 2);
                if (this._sortedCheckinsData.size < e) return !1;
                var a = e - 1,
                    i = this._sortedCheckinsData.get(a);
                if (!i || !i.sortScore) return !1;
                this._newCheckinSortScoreThreshold = i.sortScore
            }
        }, {
            key: "getSponsoredPostInstances",
            value: function(t) {
                return t = parseInt(t, 10), this.getAllCheckinsData().filter((function(e) {
                    return "sponsored" === e.type && parseInt(e.originalId, 10) === t
                }))
            }
        }, {
            key: "adCount",
            get: function() {
                return this._adsData.size
            }
        }, {
            key: "stackSize",
            get: function() {
                return this._stack.size
            }
        }, {
            key: "checkinsDataSize",
            get: function() {
                return this._sortedCheckinsData.size
            }
        }, {
            key: "newCheckinSortScoreThreshold",
            get: function() {
                return this._newCheckinSortScoreThreshold
            }
        }, {
            key: "checkinsDataSortFunctions",
            get: function() {
                var t = [];
                return t.push((function(t) {
                    return -1 * t.sortScore
                })), t
            }
        }], [{
            key: "normalizeCheckinId",
            value: function(t) {
                return t.toString()
            }
        }]), t
    })();
    window.WallState = t
})();
"use strict";
var _createClass = (function() {
    function t(t, e) {
        for (var n = 0; n < e.length; n++) {
            var i = e[n];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
        }
    }
    return function(e, n, i) {
        return n && t(e.prototype, n), i && t(e, i), e
    }
})();

function _classCallCheck(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
}!(function() {
    var t = (function() {
        function t(e) {
            _classCallCheck(this, t), this.helpers = e, this.history = new Immutable.Map, e.autoBind(this), setInterval(this.cleanup, 6e4)
        }
        return _createClass(t, [{
            key: "getCountInLastMinute",
            value: function() {
                var t = this.helpers.getUnixTimestamp();
                return this.history.reduce((function(e, n, i) {
                    return i >= t - 60 ? e + n : e
                }), 0)
            }
        }, {
            key: "track",
            value: function() {
                var t = this.helpers.getUnixTimestamp(),
                    e = this.history.get(t, 0);
                e++, this.history = this.history.set(t, e)
            }
        }, {
            key: "cleanup",
            value: function() {
                var t = this.helpers.getUnixTimestamp() - 120;
                this.history = this.history.filter((function(e, n) {
                    return n > t
                }))
            }
        }]), t
    })();
    window.WallCheckinsPerSecondHistory = t
})();
"use strict";
var _createClass = (function() {
    function t(t, o) {
        for (var i = 0; i < o.length; i++) {
            var n = o[i];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
        }
    }
    return function(o, i, n) {
        return i && t(o.prototype, i), n && t(o, n), o
    }
})();

function _classCallCheck(t, o) {
    if (!(t instanceof o)) throw new TypeError("Cannot call a class as a function")
}!(function() {
    var t = $(window),
        o = $(document),
        i = $("body"),
        n = function() {
            return window.performance && window.performance.now ? window.performance.now() : Date.now()
        },
        e = (function() {
            function e() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    o = t.bottomRegionHeight,
                    i = t.topRegionHeight;
                _classCallCheck(this, e), this.bottomRegionHeight = o, this.topRegionHeight = i, this.lastScrollPosition = 0, helpers.autoBind(this)
            }
            return _createClass(e, [{
                key: "isIosIframeAntigrowHackActive",
                value: function() {
                    return $("html.iOs.iframe:not(.autoheight),html.iOs.preview-iframe:not(.autoheight)").length > 0
                }
            }, {
                key: "scrollToPosition",
                value: function(t) {
                    this.$scrollContainer.scrollTop(t)
                }
            }, {
                key: "getScrollPosition",
                value: function() {
                    var t = this.$scrollContainer.scrollTop();
                    return 0 === t && this.isIosIframeAntigrowHackActive() ? -1 * $(".socialwall_container").position().top : t
                }
            }, {
                key: "getDocumentHeight",
                value: function() {
                    return this.isIosIframeAntigrowHackActive() ? Math.round($(".socialwall_container").outerHeight(!0)) : o.height()
                }
            }, {
                key: "smoothScroll",
                value: function() {
                    var t = this,
                        o = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                        i = void 0,
                        e = new Promise(function(t) {
                            i = t
                        }),
                        r = this.getScrollPosition(),
                        l = o - r,
                        s = (function(t) {
                            if (!t) return 0;
                            var o = Math.abs(t / 3);
                            return _.clamp(o, 200, 1e3)
                        })(l),
                        c = n();
                    return requestAnimationFrame((function i() {
                        var e = (n() - c) / s,
                            a = (function(t) {
                                return (1 - Math.cos(Math.PI * t)) / 2
                            })(e),
                            u = r + a * l;
                        e < 1 ? (t.scrollToPosition(u), requestAnimationFrame(i)) : t.scrollToPosition(o)
                    })), setTimeout((function() {
                        t.scrollToPosition(o), i()
                    }), s), e
                }
            }, {
                key: "isCurrentScrollPositionInTopRegion",
                value: function() {
                    return this.getScrollPosition() <= this.topRegionHeight
                }
            }, {
                key: "wasLastScrollPositionInTopRegion",
                value: function() {
                    return this.lastScrollPosition <= this.topRegionHeight
                }
            }, {
                key: "isCurrentScrollPositionInBottomRegion",
                value: function() {
                    return this.getScrollPosition() + t.height() >= this.getDocumentHeight() - this.bottomRegionHeight
                }
            }, {
                key: "isCurrentScrollPositionAbsoluteBottom",
                value: function() {
                    return this.getScrollPosition() + t.height() >= this.getDocumentHeight() - 1
                }
            }, {
                key: "wasLastScrollPositionInBottomRegion",
                value: function() {
                    var o = t.height(),
                        i = this.getDocumentHeight() - this.bottomRegionHeight;
                    return this.lastScrollPosition + o >= i
                }
            }, {
                key: "hasScrolledIntoBottom",
                value: function() {
                    return !!this.isCurrentScrollPositionInBottomRegion() && (!!this.isCurrentScrollPositionAbsoluteBottom() || !this.wasLastScrollPositionInBottomRegion())
                }
            }, {
                key: "hasScrolledIntoTop",
                value: function() {
                    return !!this.isCurrentScrollPositionInTopRegion() && !this.wasLastScrollPositionInTopRegion()
                }
            }, {
                key: "fireCustomScrollEvents",
                value: function() {
                    var t = this.getScrollPosition();
                    t > this.lastScrollPosition ? (o.trigger("wall.scrollDown"), this.hasScrolledIntoBottom() && o.trigger("wall.scrollIntoBottom")) : (o.trigger("wall.scrollUp"), this.hasScrolledIntoTop() && o.trigger("wall.scrollIntoTop")), this.lastScrollPosition = t
                }
            }, {
                key: "initScrollEvents",
                value: function() {
                    var t = this;
                    this.$scrollContainer.on("scroll", _.throttle((function() {
                        t.fireCustomScrollEvents()
                    }), 150))
                }
            }, {
                key: "$scrollContainer",
                get: function() {
                    return this.isIosIframeAntigrowHackActive() ? i : t
                }
            }]), e
        })();
    window.WallScrolling = e
})();
"use strict";
!(function(e) {
    var n = helpers.Css,
        t = n.addRootClass,
        i = n.changeRootClass,
        o = n.removeRootClass,
        r = n.setWallInitializedClasses,
        a = void 0,
        l = void 0,
        s = void 0,
        c = void 0,
        d = void 0,
        h = void 0,
        u = helpers.translation,
        p = helpers.sharing,
        f = new WallCheckinsPerSecondHistory(helpers),
        m = {},
        g = e(window),
        v = e(document),
        k = void 0,
        C = !0,
        w = function() {
            var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
            C = !!e
        },
        I = function() {
            return C
        },
        S = function(e) {
            return function() {
                console.error("The method " + e + " must be overridden!")
            }
        };
    Object.assign(m, {
        messages: {},
        defaults: {
            additionalCheckins: null,
            ads: [],
            adsFrequency: null,
            animation: !0,
            container: "",
            displayNextCheckInterval: 100,
            network: null,
            postInstructionDisplayDuration: 7500,
            imageSlimproxyHost: null,
            proxyImageHeight: 250,
            proxyImageQuality: 85,
            proxyImageWidth: 300,
            proxyNoCache: !1,
            proxyProfileImageHeight: 100,
            proxyProfileImageWidth: 100,
            proxySalt: "",
            rankingMode: "time",
            revealInterval: 3e3,
            shareOriginalUrl: !0,
            wallId: 0
        },
        themeParams: {
            domUpdateTriggers: ["comment", "cta", "entities", "external_created_timestamp", "external_fullname", "external_image", "external_name", "external_user_id", "is_highlighted", "post_image", "post_image_height", "post_image_width", "post_link", "tags"],
            ignoreProxyImageHeight: !1,
            initVideoEvents: !0,
            maxCommentLength: 160
        },
        methods: {
            countTilesAboveTheFold: function() {
                var n = 0,
                    t = g.height(),
                    i = m.getSortedCheckinsData(),
                    o = !0,
                    r = !1,
                    a = void 0;
                try {
                    for (var l, s = i[Symbol.iterator](); !(o = (l = s.next()).done); o = !0) {
                        var c = l.value,
                            d = e(".checkin-wrapper-" + c.id);
                        if (0 !== d.length) {
                            if (d.offset().top > t) break;
                            n += 1
                        }
                    }
                } catch (e) {
                    r = !0, a = e
                } finally {
                    try {
                        !o && s.return && s.return()
                    } finally {
                        if (r) throw a
                    }
                }
                return n
            },
            domPrependCheckins: function(e, n) {
                e.prepend(n)
            },
            domAppendCheckins: function(e, n) {
                e.append(n)
            },
            domRemoveCheckins: function(e, n) {
                n.remove()
            },
            domCreateCheckin: S("domCreateCheckin"),
            domReplaceCheckin: function(e, n, t, i) {
                var o = m.methods.domCreateCheckin(t, i);
                if (!o) return !1;
                n.replaceWith(o.find(".checkin"))
            },
            getTilesLimit: function() {
                return S("getTilesLimit")
            },
            getSupportedRankingMode: function(e) {
                return e
            },
            isDetailViewSupported: function() {
                return !0
            },
            getNumberOfInitialCheckins: function() {
                return 30
            },
            getNumberOfCheckinsToFillScreen: function() {
                return 30
            },
            getBottomRegionHeight: function() {
                return 600
            },
            initTheme: S("initTheme"),
            setCheckinTransitionMode: function() {}
        }
    }), m.create = function(n) {
        m.defaults.initialCheckins = m.methods.getNumberOfInitialCheckins(), n.initialCheckins && !isNaN(n.initialCheckins) || delete n.initialCheckins;
        var C = e.extend({}, m.defaults, n);
        C.$container = e(".socialwall_container"), C.serverRankingMode = C.rankingMode, C.clientRankingMode = m.methods.getSupportedRankingMode(C.rankingMode);
        var S = null;
        C.network && (S = C.network), h = new helpers.Wall(C);
        var y = new WallState(C, helpers.Wall.isAppScrollable(), m.methods.getTilesLimit);
        a = new helpers.Checkins(C, y), l = new helpers.Image(C), s = new helpers.Route(C), c = new helpers.Url(C), d = new helpers.Video(C, helpers.Wall, helpers.Templates), new helpers.Tracking(C).recordPageview();
        var T = new WallScrolling({
                bottomRegionHeight: 600,
                topRegionHeight: 300
            }),
            W = null,
            D = void 0,
            b = !1,
            x = null,
            P = null,
            A = !0,
            F = !1,
            O = function() {};
        if (window.WallsioDetailView) {
            var R = e(".detail-mount-point");
            O = new window.WallsioDetailView(R, C, d, l)
        }
        var E, M = function(e) {
                return C[e] || null
            },
            N = function(e, n) {
                return void 0 !== C[e] && (C[e] = n, !0)
            },
            U = helpers.actionSelector,
            H = function() {
                return m.methods.isDetailViewSupported()
            },
            L = function(e) {
                D = e, i("load-more-disabled", !e)
            },
            z = function() {
                x = Date.now()
            },
            V = function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                return m.methods.getTilesLimit(C, e)
            },
            $ = function() {
                return b ? (e = 6e4 / C.revealInterval, f.getCountInLastMinute() > e ? 10 : V(!0)) : 1 / 0;
                var e
            },
            q = function(e, n) {
                y.isCheckinsDataEmpty() && helpers.Wall.hideWallInfo(), y.setCheckinData(e, n)
            },
            Q = function() {
                var n = helpers.integer.ceilTo,
                    t = m.defaults.proxyImageWidth,
                    i = m.defaults.proxyImageHeight,
                    o = e(".checkin").eq(0),
                    r = Math.max(o.outerWidth(), t);
                r = n(r, 50);
                var a = void 0;
                a = m.themeParams.ignoreProxyImageHeight ? null : n(a = Math.max(o.outerHeight(), i), 50), N("proxyImageWidth", r), N("proxyImageHeight", a)
            },
            j = function(e) {
                var n = C.maxCommentLength || m.themeParams.maxCommentLength;
                return helpers.Checkins.prepareComment(e, n)
            },
            B = function(e, n, t) {
                return e.isPrepared ? e : (e = a.prepareRankingData(e, n, t), e = l.prepareImages(e), e = h.prepareVideo(e), e = (function(e) {
                    return e.detailUrl = c.getDetailUrl(helpers.slug.fromId(e.id)), e.compactDetailUrl = c.getCompactDetailUrl(helpers.slug.fromId(e.id)), e
                })(e = h.prepareEntities(e)), (e = j(e)).isPrepared = !0, helpers.Image.preloadImages(e), e)
            },
            G = function(e) {
                S && S !== e.type || (q(e.id, e), y.addToStack(e), b && f.track(), y.truncateStack($()))
            },
            J = function(e) {
                return _.intersection(e, m.themeParams.domUpdateTriggers).length > 0
            },
            K = function(e) {
                var n, t;
                return _.intersection(e, (n = ["sortScore"], (t = a.getSortField()) && n.push(t), n)).length > 0
            },
            X = function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "top";
                return C.adsFrequency && 0 !== y.adCount ? a.isNewAdNeeded(e) ? (function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "top",
                        n = y.getRandomAd();
                    if (!n) return null;
                    var t = a.createCheckinDataFromAd(n, e);
                    return t = j(t), "top" === e ? G(t) : q(t.id, t), t
                })(e) : void 0 : null
            },
            Y = function(n) {
                _.isArray(n) || (n = [n]);
                var t = e();
                e(".checkin-wrapper").filter(".is-protected").each((function(t, i) {
                    n = _.without(n, e(i).attr("data-id"))
                })), _.each(n, (function(n) {
                    t = t.add(e(".socialwall_container").find(".checkin-wrapper-" + n))
                })), y.removeCheckinData(n), m.methods.domRemoveCheckins(C.$container, t)
            },
            Z = function() {
                var n = e(".checkin").length,
                    t = y.checkinsDataSize;
                return Math.min(n, t)
            },
            ee = function(e) {
                var n, t, i = Z();
                return !(i <= e) && (n = i - e, t = y.getSortedCheckinsData().takeLast(n).map((function(e) {
                    return e.id
                })).toArray(), Y(t), !0)
            },
            ne = function() {
                var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
                y.isStackEmpty() || (A ? (function(n) {
                    for (var t = e("<div>"), i = [], o = function(e) {
                            var n = y.shiftStack();
                            if (!n) return "break";
                            var o = m.methods.domCreateCheckin(n, C);
                            if (!o) return "break";
                            t.prepend(o), i.push(n.id), C.animation ? setTimeout((function() {
                                return o.addClass("is-visible")
                            }), 50) : o.css("display", "block")
                        }, r = 0; r < n && "break" !== o(); r++);
                    m.methods.domPrependCheckins(C.$container, t.contents()), _.each(i, (function(e) {
                        helpers.Wall.updateTimestamps(W, e)
                    })), T.isCurrentScrollPositionInTopRegion() && ee(V()), i.length > 0 && z()
                })(n) : n > 0 && t("new-checkins-notification-visible"))
            },
            te = function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
                if (k.connected && D) {
                    e || (e = m.methods.getNumberOfCheckinsToFillScreen(), helpers.Wall.isAutoheight() && (e = Math.min(e, 30)));
                    var n = {
                            count: e,
                            network: S
                        },
                        t = y.getSortedCheckinsData(),
                        i = (t = t.filter((function(e) {
                            return "sponsored" !== e.type
                        }))).last();
                    if (i) {
                        var o = void 0;
                        o = "weight" === C.serverRankingMode ? "weight" : "external_created_timestamp", n.olderThan = i[o], n.ignoreId = i.id
                    }
                    k.emit("request older checkins", n)
                }
            },
            ie = function(e) {
                var n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                H() && (!(function(e, n) {
                    var t = y.getCheckinData(e);
                    t ? n(t) : k.emit("get single checkin", e, n)
                })(helpers.slug.toId(e), (function(e) {
                    if (!_.get(e, "id")) return !1;
                    e = B(e), e = l.prepareImages(e, {
                        w: null,
                        h: null
                    }), O.mount(e, n)
                })), g.on("resize", O.resizeQuickThrottled))
            },
            oe = function() {
                o("show-detail"), o("show-detail-loading"), helpers.Event.triggerEvent("wallsio-detail-view-closed"), g.off("resize", O.resizeQuickThrottled);
                var n = e(".detail-inner").children();
                d.setVideoAutochangeActive(!0), setTimeout((function() {
                    n.remove()
                }), 300)
            },
            re = function(e) {
                var n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                if (H()) {
                    if (helpers.Wall.isWidget()) {
                        t("show-iframe-detail-overlay");
                        var i = {
                                lang: m.getOption("locale")
                            },
                            o = m.getOption("token");
                        return o && (i.token = o), void PostmessageApi.sendPostMessage("Wallsio.showWidgetDetail", e, m.getOption("wallUrl"), i)
                    }(function(e) {
                        return !(!e || !WallsioFullscreen.isSupported() || !helpers.Wall.isIframe() || WallsioFullscreen.isFullscreen())
                    })(n) && (WallsioFullscreen.enter(), F = !0), ie(e, n);
                    var r = !n;
                    s.setUrl(e, r)
                }
            },
            ae = function() {
                H() && (F && (WallsioFullscreen.leave(), F = !1), oe(), s.clearUrl(!1))
            },
            le = function() {
                b = !0, helpers.Tracking.trackGaTiming("wallinit", "Wall", "init"), v.trigger("wall.init"), r(), helpers.Event.triggerEvent("wallsio-wall-initialized")
            },
            se = function() {
                if (!F) {
                    var e = Z(),
                        n = m.methods.getNumberOfCheckinsToFillScreen();
                    if (n > e) te(n - e)
                }
            },
            ce = function(e) {
                return !(y.checkinsDataSize >= C.initialCheckins) || !(e.sortScore < y.newCheckinSortScoreThreshold) && ("addOrder" !== C.clientRankingMode || !(function(e) {
                    var n = y.getSortedCheckinsData().first();
                    return !!n && n.external_created_timestamp - e.external_created_timestamp > 6048e5
                })(e))
            },
            de = function(e) {
                return S ? e.filter((function(e) {
                    return e.type === S
                })) : e
            },
            he = function(n) {
                if (b || P || (P = setInterval((function() {
                        Date.now() - x > C.revealInterval && ne(1)
                    }), C.displayNextCheckInterval)), (n = de(n)) && n.length > 0 || b) n.reverse(), _.each(n, (function(e) {
                    y.hasCheckin(e.id) || (e = B(e, "top"), ce(e) && (G(e), X()))
                })), b || (ne(y.stackSize), setTimeout((function() {
                    le(), setTimeout((function() {
                        e(".wall-info").removeClass("wall-info-loading"), e(".loading-indicator").remove()
                    }), 500)
                }), 0), C.detailCheckinHash && re(C.detailCheckinHash, !1));
                else {
                    le();
                    var t = u.__("NO_POSTS_FOUND");
                    setTimeout((function() {
                        return helpers.Wall.showWallInfo(t)
                    }), 300)
                }
            },
            ue = function(n) {
                m.methods.setCheckinTransitionMode("initial");
                var t = e("<div>");
                n = de(n), _.each(n, (function(e) {
                    if (!y.hasCheckin(e.id)) {
                        e = B(e, "bottom"), q(e.id, e);
                        var n = m.methods.domCreateCheckin(e, C);
                        if (n) {
                            t.append(n.addClass("is-visible"));
                            var i = X("bottom");
                            if (i) {
                                var o = m.methods.domCreateCheckin(i, C);
                                t.append(o.addClass("is-visible"))
                            }
                        }
                    }
                })), m.methods.domAppendCheckins(C.$container, t.contents()), z(), m.methods.setCheckinTransitionMode("normal"), helpers.Wall.updateTimestamps(W)
            },
            pe = function() {
                h.loadCachedCheckins().then((function(e) {
                    e && (C.initialCheckins && (e = e.slice(0, C.initialCheckins)), he(e))
                }))
            },
            fe = function() {
                y.isCheckinsDataEmpty() && pe()
            },
            me = function() {
                clearInterval(P), k.disconnect()
            },
            ge = function() {
                (A = T.isCurrentScrollPositionInTopRegion()) && o("new-checkins-notification-visible")
            },
            ve = function(e) {
                if (e !== S) {
                    window.scrollTo(0, 0), S = e;
                    var n = y.getAllCheckinsData().filter((function(n) {
                        return n.type !== e
                    })).map((function(e) {
                        return e.id
                    })).toArray();
                    L(!0), Y(n), y.filterStack((function(e) {
                        return e.type === S
                    })), se()
                }
            },
            ke = function() {
                S && (window.scrollTo(0, 0), S = null, helpers.Wall.hasPreviewIframe() ? PostmessageApi.triggerEventInPreview("wall.removeFilter") : (ee(0), L(!0), se()))
            },
            Ce = function() {
                (k = h.getWallSocket()).on("wallping", (function(e) {
                    W = e.serverTime
                })), k.on("new checkins", he), k.on("old checkins", ue), k.on("no more old checkins", (function() {
                    if (helpers.Wall.isIframe() && PostmessageApi.sendPostMessage("Wallsio.triggerDomEvent", "WallsioNoMorePosts"), L(!1), y.isCheckinsDataEmpty() && S) {
                        var e = u.__("NO_POSTS_FOUND");
                        helpers.Wall.showWallInfo(e)
                    }
                })), k.on("looped post", (function(e) {
                    e && (Y(e.id), (e = a.makeCheckinTopRanked(e)).isLooped = !0, e = B(e, "top"), G(e), X())
                })), k.on("removed checkins", (function(e) {
                    e = _.map(e, WallState.normalizeCheckinId);
                    var n = y.getCheckinIds().toArray(),
                        t = _.intersection(n, e);
                    _.each(t, (function(e) {
                        Y(e)
                    }))
                })), k.on("update checkin data", (function(n) {
                    return !!n.id && (y.hasCheckin(n.id) ? (function(n) {
                        var t = n.id,
                            i = e(".socialwall_container").find(".checkin-" + t);
                        if (0 === i.length) return !1;
                        var o = y.getCheckinData(t);
                        if (!o) return !1;
                        n = B(n, "replace", o);
                        var r = helpers.Checkins.compare(o, n);
                        0 !== r.length && (q(t, n), J(r) ? (m.methods.domReplaceCheckin(C.$container, i, n, C), helpers.Wall.updateTimestamps(W, n.id)) : K(r) && v.trigger("wall.sortUpdateNeeded", [C]))
                    }(n), !0) : "weight" === C.clientRankingMode && ((n = a.addSortScoreToCheckin(n)).sortScore > y.newCheckinSortScoreThreshold && (he([n]), !0)))
                })), k.on("update sponsored post", (function(n) {
                    y.updateAdData(n);
                    var t = parseInt(n.id, 10);
                    y.getSponsoredPostInstances(t).toArray().forEach((function(t) {
                        var i = a.createCheckinDataFromAd(n);
                        (i = j(i)).id = t.id, i.addOrder = t.addOrder, i.bonus = t.bonus, i.sortScore = t.sortScore, (function(n) {
                            var t = n.id,
                                i = e(".socialwall_container").find(".checkin-" + t);
                            if (0 === i.length) return !1;
                            var o = y.getCheckinData(t);
                            if (!o) return !1;
                            var r = helpers.Checkins.compare(o, n);
                            0 !== r.length && (q(t, n), J(r) && m.methods.domReplaceCheckin(C.$container, i, n, C))
                        })(i)
                    }))
                })), k.on("remove sponsored post", (function(e) {
                    e = parseInt(e, 10), y.removeAdData(e);
                    var n = y.getSponsoredPostInstances(e).map((function(e) {
                        return e.id
                    })).toArray();
                    Y(n)
                })), k.on("stop", me), k.on("connect_error", (function() {
                    return k.isPollingEnabled() && fe()
                })), k.on("subscribe error", fe), h.initDynamicDisconnect(k)
            };
        E = e("<div>").addClass("checkin-wrapper is-visible is-visible-solo"), e("<div>").addClass("checkin").appendTo(E), E.appendTo(".socialwall_container"), Q(), E.remove(), (function() {
            if (Object.assign(m, {
                    isAutofillEnabled: I,
                    setAutofillEnabled: w,
                    getOption: M,
                    setOption: N,
                    getSortedCheckinsData: y.getSortedCheckinsData,
                    getCheckinData: y.getCheckinData,
                    requestOlderCheckins: te,
                    applyFilter: ve,
                    removeFilter: ke,
                    options: C
                }), !helpers.Wall.isIframe()) {
                var n = new URL(m.getOption("wallUrl"));
                if (location.origin !== n.origin) return console.clear(), console.log("%c                _ _       _\n               | | |     (_)\n __      ____ _| | |___   _  ___\n \\ \\ /\\ / / _` | | / __| | |/ _ \\\n  \\ V  V / (_| | | \\__ \\_| | (_) |\n   \\_/\\_/ \\__,_|_|_|___(_)_|\\___/", "color: red"), void(window.location.href = n.origin + location.pathname + location.search + location.hash)
            }
            helpers.Wall.isIframe() && t("iframe"), L(!0), Ce(), g.on("scroll", _.throttle((function() {
                ge()
            }), 150));
            var i = WallsioFullscreen.getFullscreenChangeEventName();
            i && v.on(i, (function() {
                !WallsioFullscreen.isFullscreen() && helpers.Wall.isIframe() && ae()
            })), setInterval((function() {
                helpers.Wall.updateTimestamps(W)
            }), 3e4), new PostmessageApi(m, helpers.Wall).initDomEvents(), T.initScrollEvents(), C.$container.on("click", U("show-detail"), (function() {
                if (!H()) return !0;
                var n = e(this);
                if ("sponsored" === n.closest(".checkin").data("type")) return !0;
                var t = n.closest(".checkin").data("id"),
                    i = helpers.slug.fromId(t);
                return re(i, !0), !1
            })), v.on("click", U("hide-detail"), (function(e) {
                if (e.target === this) return ae(), !1
            })), v.on("click", U("close-wall-notification"), (function() {
                var n = e(this).closest(".wall-notification");
                return n.removeClass("wall-notification-visible"), setTimeout((function() {
                    n.remove()
                }), 500), !1
            })), e(U("release-checkins")).on("click", (function() {
                return T.smoothScroll(0), A = !0, !1
            })), e(U("scroll-to-top")).on("click", (function() {
                return T.smoothScroll(0), !1
            })), v.on("wall.scrollIntoTop", (function() {
                ee(V()) && L(!0)
            })), v.on("wall.scrollIntoBottom", (function() {
                te(C.additionalCheckins)
            })), v.on("wall.applyFilter", (function(e, n) {
                n && ve(n.network)
            })), v.on("wall.removeFilter", (function() {
                ke()
            })), v.on("wall.hideIframeDetailOverlay", (function() {
                o("show-iframe-detail-overlay")
            })), v.on("keydown", (function(e) {
                !e.key || "Escape" !== e.key && "Esc" !== e.key || ae()
            })), g.on("resize", _.debounce((function() {
                Q(), I() && se()
            }), 500)), e(".detail-container").on("click", "a[href='']", (function(e) {
                e.preventDefault()
            })), H() && window.history.pushState && (window.onpopstate = function(e) {
                e.state && (e.state.detail ? ie(e.state.detail) : oe())
            }), H() && s.clearUrl(!0)
        })(), m.methods.initTheme(C), h.initNotificationBar(), h.generateInstructions(), h.loopInstructions(), u.translateText(), p.initSharingLinks(), m.themeParams.initVideoEvents && d.init(), C.startInStaticMode && pe(), helpers.Tracking.trackGaTiming("domready", "Wall", "domready")
    }, window.Wall = m
})(jQuery);
"use strict";
var _createClass = (function() {
    function e(e, t) {
        for (var i = 0; i < t.length; i++) {
            var a = t[i];
            a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
        }
    }
    return function(t, i, a) {
        return i && e(t.prototype, i), a && e(t, a), t
    }
})();

function _classCallCheck(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
}!(function() {
    var e = helpers.Css,
        t = e.addRootClass,
        i = e.removeRootClass,
        a = $("html"),
        n = function(e) {
            return new Promise(function(t, i) {
                var a = document.createElement("textarea");
                a.value = e, a.setAttribute("readonly", ""), a.style.position = "fixed", a.style.left = "-9999px", document.body.appendChild(a), a.select(), a.setSelectionRange(0, a.value.length);
                var n = void 0;
                try {
                    n = document.execCommand("copy")
                } catch (e) {
                    i(e), n = !1
                }
                document.body.removeChild(a), n ? t() : i()
            })
        },
        o = (function() {
            function e(t, i, a, n) {
                _classCallCheck(this, e), this.$mountPoint = t, this.wallOptions = i, this.videoHelper = a, this.imageHelper = n, helpers.autoBind(this), this.resizeQuickThrottled = _.throttle(this.resizeQuick, 100)
            }
            return _createClass(e, [{
                key: "createDom",
                value: function(e) {
                    var t = helpers.Templates.build,
                        i = helpers.checkins.getFullName(e),
                        a = helpers.checkins.getShortName(e),
                        n = helpers.checkins.getCombinedName(e),
                        o = this.imageHelper.getAspectRatio(e, "post_image", {}, !0),
                        l = Date.now() - e.external_created_timestamp,
                        s = e.post_image,
                        r = e.post_link,
                        d = e.type,
                        h = e.compactDetailUrl,
                        c = helpers.addLineBreaks(e.html_comment) || "",
                        m = this.wallOptions.twitterVia,
                        u = this.wallOptions.wallTitle,
                        p = void 0,
                        v = void 0,
                        g = void 0,
                        f = void 0;
                    v = this.wallOptions.shareOriginalUrl && r ? r : h, p = "twitter" === d ? helpers.translation.__("DETAIL_SHARING_TEXT_FOR_TWITTER_CHECKINS", a, u) : helpers.translation.__("DETAIL_SHARING_TEXT", u);
                    var w = void 0,
                        k = !1;
                    if (this.videoHelper.hasRealVideo(e) ? w = t("detail/video", {
                            postImage: s,
                            postVideo: e.post_video
                        }) : this.videoHelper.hasEmbeddedVideoSupport(e) && (w = this.videoHelper.getVideoEmbedElement(e), k = !0), e.cta) try {
                        var y = JSON.parse(e.cta);
                        g = t("cta", y = {
                            url: y.url,
                            text: y.text
                        }), f = t("detail/menu_cta", y)
                    } catch (e) {
                        console.log(e)
                    }
                    var C = t("detail/post_image", {
                            hasEmbeddedVideo: k,
                            imageAspectRatio: o,
                            postImage: s,
                            postLink: r,
                            postVideoElement: w
                        }),
                        _ = t("detail/user", {
                            combinedName: n,
                            humanTimeDiff: helpers.Wall.humanTimeDiff(l),
                            network: d,
                            postLink: r,
                            userImage: e.external_image,
                            userName: i,
                            userLink: e.external_user_link
                        }),
                        b = t("detail/sharing", {
                            link: v,
                            twitterText: p,
                            twitterVia: m
                        }),
                        T = t("detail/content", {
                            ctaElement: g,
                            detailSharingElement: b,
                            detailUserElement: _,
                            hasImage: !!s,
                            hasVideo: this.videoHelper.hasRealVideo(e),
                            id: e.id,
                            message: c,
                            network: d,
                            postImageElement: C
                        }),
                        E = t("detail/menu_sharing", {
                            link: v,
                            twitterText: p,
                            twitterVia: m
                        }),
                        x = $(t("detail/container", {
                            ctaMenu: f,
                            detailContent: T,
                            detailMenuSharing: E
                        }));
                    return this.initDomEvents(x), x
                }
            }, {
                key: "display",
                value: function(e) {
                    var n = this,
                        o = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    a.addClass("show-detail-loading"), setTimeout((function() {
                        t("show-detail"), helpers.Event.triggerEvent("wallsio-detail-view-opened")
                    }), 0);
                    var l = $(".detail-container");
                    if (e.comment && this.resizeText(e.comment.length), l.find(".detail-image").length > 0 ? (this.resizeQuick(), imagesLoaded(l.get(0), {
                            background: ".detail-image"
                        }, (function() {
                            n.resize(), i("show-detail-loading")
                        }))) : i("show-detail-loading"), this.videoHelper.setVideoAutochangeActive(!1), this.videoHelper.hasRealVideo(e)) {
                        var s = l.find(".detail-video-wrapper video");
                        this.videoHelper.play(s), o && this.videoHelper.unmute(s)
                    }
                }
            }, {
                key: "mount",
                value: function(e, t) {
                    var i = this.createDom(e);
                    this.$mountPoint.html(i), this.display(e, t)
                }
            }, {
                key: "showClipboardCopyNotification",
                value: function(e) {
                    var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                        i = void 0;
                    i = t ? ".detail-link-copied-success" : ".detail-link-copied-error";
                    var a = e.find(i);
                    a.addClass("copied-visible"), setTimeout((function() {
                        return a.removeClass("copied-visible")
                    }), 3e3)
                }
            }, {
                key: "initDomEvents",
                value: function(e) {
                    var t = helpers.actionSelector;
                    e.on("click", t("show-detail-menu-sharing"), (function() {
                        return $(".detail-menu-sharing").addClass("detail-menu-sharing-expanded"), !1
                    })), e.on("click", t("prevent-default"), (function(e) {
                        e.preventDefault()
                    }));
                    var i = this;
                    e.on("click", t("detail-copy-link"), (function(t) {
                        t.preventDefault(), (function(e) {
                            return navigator.clipboard && navigator.clipboard.writeText ? navigator.clipboard.writeText(e).catch((function(t) {
                                return console.error("clipboard.writeText failed:", t), n(e)
                            })) : n(e)
                        })($(this).attr("data-clipboard-text")).then((function() {
                            i.showClipboardCopyNotification(e, !0)
                        })).catch((function(t) {
                            console.error("Couldn't copy to clipboard:", t), i.showClipboardCopyNotification(e, !1)
                        }))
                    }))
                }
            }, {
                key: "setDimensions",
                value: function(e, t) {
                    if (e.css({
                            height: "",
                            width: ""
                        }), $(window).width() >= 840) {
                        var i = e.height() * t;
                        e.css({
                            width: i
                        })
                    } else {
                        var a = e.width() / t;
                        e.css({
                            height: a
                        })
                    }
                }
            }, {
                key: "resizeQuick",
                value: function() {
                    var e = $(".detail-image");
                    if (0 !== e.length) {
                        var t = e.data("aspect-ratio") || 1,
                            i = e.data("raw-width"),
                            a = e.data("raw-height");
                        this.setDimensions(e, t), this.handleSmallImage(e, i, a)
                    }
                }
            }, {
                key: "resetSmallImage",
                value: function(e) {
                    e.removeClass("detail-image-too-small"), e.find(".detail-image-inner").css({
                        width: "",
                        height: ""
                    })
                }
            }, {
                key: "handleSmallImage",
                value: function(e, t, i) {
                    if ($(window).width() < 840) this.resetSmallImage(e);
                    else if (t && i) {
                        var a = e.width(),
                            n = e.height();
                        1.1 * t < a && 1.1 * i < n ? (e.addClass("detail-image-too-small"), e.find(".detail-image-inner").css({
                            width: t,
                            height: i
                        })) : this.resetSmallImage(e)
                    }
                }
            }, {
                key: "resize",
                value: function() {
                    var e = this,
                        t = $(".detail-image");
                    if (0 !== t.length) {
                        var i = new Image;
                        i.src = t.data("image"), i.onload = function() {
                            var a = i.width / i.height;
                            a && (e.setDimensions(t, a), e.handleSmallImage(t, i.width, i.height), t.data("aspect-ratio", a), t.data("raw-width", i.width), t.data("raw-height", i.height))
                        }
                    }
                }
            }, {
                key: "resizeText",
                value: function(e) {
                    var t = 1.6 - .0025 * e,
                        i = _.clamp(t, .6, 1.6);
                    $(".detail-message-inner").css("font-size", i + "em")
                }
            }]), e
        })();
    window.WallsioDetailView = o
})();
"use strict";
!(function() {
    var e = helpers.Css,
        o = e.addRootClass,
        t = e.removeRootClass,
        s = !1,
        i = null,
        n = function() {
            s = !1, t("mousemoving"), helpers.Event.triggerEvent("wallsio-mousemoving-deactivated")
        };
    $(document).on("mousemove wheel touchstart touchend touchmove click mousedown", _.throttle((function() {
        s || (s = !0, o("mousemoving"), helpers.Event.triggerEvent("wallsio-mousemoving-activated")), clearTimeout(i), i = setTimeout(n, 2e3), helpers.Wall.isPreviewIframe() && PostmessageApi.sendPostMessage("Wallsio.triggerDocumentEvent", "mousemove")
    }), 100))
})();
"use strict";
var _slicedToArray = (function() {
        return function(e, r) {
            if (Array.isArray(e)) return e;
            if (Symbol.iterator in Object(e)) return (function(e, r) {
                var t = [],
                    a = !0,
                    n = !1,
                    s = void 0;
                try {
                    for (var l, o = e[Symbol.iterator](); !(a = (l = o.next()).done) && (t.push(l.value), !r || t.length !== r); a = !0);
                } catch (e) {
                    n = !0, s = e
                } finally {
                    try {
                        !a && o.return && o.return()
                    } finally {
                        if (n) throw s
                    }
                }
                return t
            })(e, r);
            throw new TypeError("Invalid attempt to destructure non-iterable instance")
        }
    })(),
    _createClass = (function() {
        function e(e, r) {
            for (var t = 0; t < r.length; t++) {
                var a = r[t];
                a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
            }
        }
        return function(r, t, a) {
            return t && e(r.prototype, t), a && e(r, a), r
        }
    })();

function _toConsumableArray(e) {
    if (Array.isArray(e)) {
        for (var r = 0, t = Array(e.length); r < e.length; r++) t[r] = e[r];
        return t
    }
    return Array.from(e)
}

function _classCallCheck(e, r) {
    if (!(e instanceof r)) throw new TypeError("Cannot call a class as a function")
}!(function() {
    var e = (function() {
        function e(r, t) {
            _classCallCheck(this, e), this.Wall = r, this.WallHelper = t, helpers.autoBind(this), this.requestOlderCheckinsThrottled = _.throttle((function(e) {
                return r.requestOlderCheckins(e)
            }), 1e3)
        }
        return _createClass(e, [{
            key: "sendDocumentHeight",
            value: function() {
                e.sendPostMessage("Wallsio.height", this.WallHelper.getWallHeight())
            }
        }, {
            key: "setNetworkFilter",
            value: function(e) {
                e ? $(document).trigger("wall.applyFilter", {
                    network: e
                }) : $(document).trigger("wall.removeFilter")
            }
        }, {
            key: "initDomEvents",
            value: function() {
                var r = this;
                $(window).on("message", (function(t) {
                    var a = t.originalEvent.data;
                    if (a) {
                        var n = a.args;
                        switch (a.method) {
                            case "Wallsio.requestOlderCheckins":
                                var s = _.get(n, 0);
                                r.requestOlderCheckinsThrottled(s);
                                break;
                            case "Wallsio.getHeight":
                                r.sendDocumentHeight.apply(r, n);
                                break;
                            case "Wallsio.setAutoFillEnabled":
                                if (!r.Wall.setAutofillEnabled) break;
                                var l = _.get(n, 0);
                                r.Wall.setAutofillEnabled(l);
                                break;
                            case "Wallsio.setCustomCss":
                                if (r.WallHelper.hasPreviewIframe()) {
                                    var o = $(".wall-preview-iframe").get(0);
                                    e.sendPostMessageToIframe.apply(e, [o, "Wallsio.setCustomCss"].concat(_toConsumableArray(n)));
                                    break
                                }
                                helpers.Css.setCustomCss.call(null, n);
                                break;
                            case "Wallsio.triggerDocumentEvent":
                                var i = _slicedToArray(n, 2),
                                    u = i[0],
                                    c = i[1];
                                $(document).trigger(u, c);
                                break;
                            case "Wallsio.setNetworkFilter":
                                r.setNetworkFilter(_.get(n, 0))
                        }
                    }
                }))
            }
        }], [{
            key: "sendPostMessage",
            value: function(e) {
                for (var r = arguments.length, t = Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++) t[a - 1] = arguments[a];
                window !== parent && parent.postMessage && parent.postMessage({
                    args: t,
                    method: e,
                    widgetId: helpers.Url.getQueryParamForCurrentUrl("widget_id")
                }, "*")
            }
        }, {
            key: "sendPostMessageToIframe",
            value: function(e, r) {
                for (var t = arguments.length, a = Array(t > 2 ? t - 2 : 0), n = 2; n < t; n++) a[n - 2] = arguments[n];
                var s = e.contentWindow;
                s && s.postMessage && s.postMessage({
                    args: a,
                    method: r
                }, "*")
            }
        }, {
            key: "triggerEventInPreview",
            value: function(r, t) {
                var a = $(".wall-preview-iframe").get(0);
                e.sendPostMessageToIframe(a, "Wallsio.triggerDocumentEvent", r, t)
            }
        }]), e
    })();
    window.PostmessageApi = e
})();
"use strict";
Wall.themeParams.enableAspectRatioImages = !0, Wall.themeParams.defaultPostImageAspectRatio = 1, Wall.themeParams.minPostImageAspectRatio = .75, Wall.themeParams.maxPostImageAspectRatio = 2.76, Wall.methods.$createUser = function(e) {
    var a = helpers.checkins.getShortName(e),
        t = helpers.checkins.getFullName(e),
        s = helpers.checkins.getCombinedName(e),
        m = helpers.checkins.hasSeparateNames(e),
        r = templates.user_name_parts({
            shortName: a,
            fullName: t,
            combinedName: s,
            hasSeparateNames: m
        });
    return $(templates.user({
        type: e.type,
        shortName: a,
        fullName: t,
        combinedName: s,
        nameParts: r,
        userId: e.external_user_id,
        userLink: e.external_user_link,
        image: e.external_image,
        externalCreatedTimestamp: e.external_created_timestamp,
        postId: e.post_id,
        postLink: e.post_link
    }))
};
"use strict";
!(function() {
    var e = void 0,
        t = function() {
            return e || (e = new helpers.Isotope(Wall.themeParams.checkinTransition)), e
        },
        a = function(e) {
            e.isotope("updateSortData").isotope()
        };
    Wall.themeParams.maxCommentLength = 220, Wall.themeParams.ignoreProxyImageHeight = !0, Wall.methods.getTilesLimit = function(e) {
        var t;
        return arguments.length > 1 && void 0 !== arguments[1] && arguments[1] || helpers.Wall.isAppScrollable() || helpers.Wall.isAutoheight() ? (t = 100, helpers.Wall.isIframe() && (t = Math.ceil(.8 * t)), helpers.Wall.isMobile() && (t = Math.ceil(.5 * t)), t) : Math.max(Wall.methods.countTilesAboveTheFold(), 20)
    }, Wall.methods.domPrependCheckins = function(e, t) {
        e.prepend(t).isotope("insert", t).isotope()
    }, Wall.methods.domAppendCheckins = function(e, t) {
        e.append(t).isotope("insert", t).isotope()
    }, Wall.methods.domRemoveCheckins = function(e, t) {
        var a = $(".socialwall_container").data("isotope").options.transitionDuration,
            i = _.isString(a) ? helpers.time.cssDurationToMs(a, 0) : 0;
        e.isotope("remove", t).isotope("layout"), setTimeout((function() {
            return t.remove()
        }), i)
    }, Wall.methods.domReplaceCheckin = function(e, t, i, n) {
        var o = Wall.methods.domCreateCheckin(i, n);
        if (!o) return !1;
        var s = t.closest(".checkin-wrapper");
        t.replaceWith(o.find(".checkin"));
        var l = s.find(".checkin-buttons"),
            r = o.find(".checkin-buttons");
        0 === l.length && r.length > 0 ? s.append(r) : l.replaceWith(r), a(n.$container)
    }, Wall.methods.domCreateCheckin = function(e, t) {
        var a, i, n, o, s, l = new helpers.Image(t),
            r = new helpers.Video(t),
            c = new helpers.Wall(t),
            d = e.post_image;
        s = helpers.addLineBreaks(e.truncated_html_comment);
        var h = null;
        if (!d && !s) return null;
        if (e.tags && (h = e.tags.replace(/#/g, "")), (i = (a = $(templates.container({
                bonus: e.bonus || 0,
                externalCreatedTimestamp: e.external_created_timestamp,
                id: e.id,
                isLooped: e.isLooped,
                originalId: e.originalId || e.id,
                tags: h,
                type: e.type,
                userId: e.external_user_id,
                weight: e.weight
            }))).find(".checkin")).addClass(c.getRandomCheckinColorClass(e.id)), e.cta) try {
            var p = JSON.parse(e.cta);
            a.append(templates.cta({
                text: p.text,
                url: p.url
            }))
        } catch (e) {
            console.log(e)
        }
        if (e.is_highlighted && (i.append(templates.highlight_icon()), i.addClass("checkin-highlighted")), a = helpers.Wall.addImageAndMessageClasses(a, "wrapper", d, s), i = helpers.Wall.addImageAndMessageClasses(i, "checkin", d, s), d) {
            var m = 100 / l.getAspectRatio(e, "post_image", Wall.themeParams) + "%",
                u = r.hasRealVideo(e),
                g = r.hasEmbeddedVideoSupport(e);
            !u && g && i.addClass("checkin-with-embedded-video"), n = $(templates.image({
                id: e.id,
                image: d,
                imagePaddingBottom: m,
                postLink: e.post_link,
                message: s,
                showPlayButton: u || g
            }))
        } else n = $(templates.message({
            message: s
        }));
        return i.append(n), helpers.Checkins.hasUserData(e) ? (o = Wall.methods.$createUser(e), i.append(o)) : i.addClass("checkin-without-user"), r.initVideo(e, i), a
    }, Wall.methods.initTheme = function(e) {
        var a = t(),
            i = a.getCheckinTransition(),
            n = i.hiddenStyle,
            o = i.visibleStyle;
        $(".socialwall_container").isotope({
            percentPosition: !1,
            columnWidth: ".checkin-wrapper",
            itemSelector: ".checkin-wrapper",
            hiddenStyle: n,
            visibleStyle: o,
            getSortData: {
                sortScore: function(e) {
                    var t = $(e).data("id"),
                        a = Wall.getCheckinData(t);
                    return a && a.sortScore ? a.sortScore : 0
                }
            },
            sortBy: ["sortScore"],
            sortAscending: {
                sortScore: !1
            },
            stagger: a.initialStagger,
            transitionDuration: a.initialTransitionDuration
        })
    }, Wall.methods.getNumberOfCheckinsToFillScreen = function() {
        var e = $(".socialwall_container"),
            t = $("<div>", {
                class: "checkin-wrapper"
            });
        e.append(t);
        var a = e.width(),
            i = t.outerWidth();
        if (i <= 0) return 5;
        var n = i / a,
            o = Math.round(1 / n);
        t.remove();
        var s = i / Wall.themeParams.maxPostImageAspectRatio,
            l = Math.min(130, s) + 83,
            r = $(window).height() - parseInt(e.css("margin-top"), 10),
            c = o * Math.ceil(r / l) + 1;
        return c < 5 ? 5 : c > 200 ? 200 : c
    }, Wall.methods.getNumberOfInitialCheckins = function() {
        return Wall.methods.getNumberOfCheckinsToFillScreen()
    }, Wall.methods.setCheckinTransitionMode = function(e) {
        var a = $(".socialwall_container");
        t().setTransitionMode(a, e)
    }, $(document).on("wall.init", (function() {
        $(".socialwall_container").isotope("updateSortData").isotope("layout").isotope(), Wall.methods.setCheckinTransitionMode("normal")
    })), $(document).on("wall.sortUpdateNeeded", (function(e, t) {
        a(t.$container)
    }))
})();
"use strict";
var _createClass = (function() {
    function e(e, t) {
        for (var a = 0; a < t.length; a++) {
            var i = t[a];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
        }
    }
    return function(t, a, i) {
        return a && e(t.prototype, a), i && e(t, i), t
    }
})();

function _toConsumableArray(e) {
    if (Array.isArray(e)) {
        for (var t = 0, a = Array(e.length); t < e.length; t++) a[t] = e[t];
        return a
    }
    return Array.from(e)
}

function _classCallCheck(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
}!(function() {
    var e = helpers.Css,
        t = e.addRootClass,
        a = e.changeRootClass,
        i = e.hasRootClass,
        r = e.removeRootClass,
        l = e.toggleRootClass,
        n = $(document),
        s = helpers.actionSelector,
        u = helpers.Url,
        o = helpers.Wall,
        c = {
            billboard: ["pause", "filter"],
            bricks: [],
            fluid: ["pause"],
            grid: ["pause"],
            kiosk: ["filter"],
            map: ["pause", "filter"]
        },
        f = ["settings", "sharing"],
        v = (function() {
            function e() {
                _classCallCheck(this, e), this.state = new Immutable.Map, helpers.autoBind(this)
            }
            return _createClass(e, [{
                key: "init",
                value: function() {
                    this.initialNetworkFilter = Wall.getOption("network"), this.initState(), this.initDomEvents(), this.initFilterMenu()
                }
            }, {
                key: "setStateField",
                value: function(e, t) {
                    if (this.state = this.state.set(e, t), "currentTheme" === e) this.updateWallActionIcons();
                    else if ("isAutoAdvancePaused" === e) {
                        a("autoadvance-paused", t);
                        var i = {
                            value: t
                        };
                        if (helpers.Wall.hasPreviewIframe()) return void PostmessageApi.triggerEventInPreview("wall.setAutoAdvancePaused", i);
                        n.trigger("wall.setAutoAdvancePaused", {
                            value: t
                        })
                    } else "currentNetworkFilter" === e && this.updateNetworkFilterMenu()
                }
            }, {
                key: "setStateFieldInParent",
                value: function(e, t) {
                    PostmessageApi.sendPostMessage("Wallsio.setWallmenuStateField", e, t)
                }
            }, {
                key: "initState",
                value: function() {
                    var e = Wall.getOption("theme"),
                        t = this.initialNetworkFilter;
                    this.setStateField("isAutoAdvancePaused", !1), this.setStateField("isFullMenuExpanded", i("full-menu-expanded")), this.setStateField("isWallPreviewActive", !1), this.setStateField("currentTheme", e), this.setStateField("currentNetworkFilter", t), o.isPreviewIframe() && (this.setStateFieldInParent("isAutoAdvancePaused", !1), this.setStateFieldInParent("currentTheme", e), this.setStateFieldInParent("currentNetworkFilter", t))
                }
            }, {
                key: "initWallSettingsIframe",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                        t = $(".wall-settings-mount-point");
                    if (0 !== t.length) {
                        var a = t.data("content-url");
                        e && (a = u.updateUrlQueryParam(a, "sharing", "1"));
                        var i = $("<iframe>").attr("src", a).addClass("wall-settings-iframe");
                        t.replaceWith(i)
                    } else e && this.activateSharingInWallSettings()
                }
            }, {
                key: "initWallPreviewIframe",
                value: function() {
                    var e = $(".wall-preview-mount-point");
                    if (0 === e.length) return !1;
                    var a = $("<iframe>").attr("src", this.getDefaultPreviewIframeUrl()).addClass("wall-preview-iframe");
                    return e.replaceWith(a), this.setStateField("isWallPreviewActive", !0), t("wall-preview-active"), n.trigger("Wallsio.disconnectSocket"), !0
                }
            }, {
                key: "triggerApplyFilter",
                value: function(e) {
                    this.setStateField("currentNetworkFilter", e), helpers.Wall.hasPreviewIframe() ? PostmessageApi.triggerEventInPreview("wall.applyFilter", {
                        network: e
                    }) : n.trigger("wall.applyFilter", {
                        network: e
                    })
                }
            }, {
                key: "triggerRemoveFilter",
                value: function() {
                    this.setStateField("currentNetworkFilter", null), helpers.Wall.hasPreviewIframe() ? PostmessageApi.triggerEventInPreview("wall.removeFilter") : n.trigger("wall.removeFilter")
                }
            }, {
                key: "initFilterMenu",
                value: function() {
                    var e = this,
                        t = $(".filter-menu-reset");
                    $(".filter-menu-network").each((function(t, a) {
                        var i = $(a),
                            r = i.data("network");
                        i.on("click", (function(t) {
                            t.stopPropagation(), r === e.currentNetworkFilter ? setTimeout((function() {
                                e.triggerRemoveFilter()
                            }), 250) : setTimeout((function() {
                                e.triggerApplyFilter(r)
                            }), 250)
                        }))
                    })), t.on("click", (function(t) {
                        t.stopPropagation(), e.triggerRemoveFilter()
                    }))
                }
            }, {
                key: "initDomEvents",
                value: function() {
                    var e = this;
                    n.on("click", s("toggle-mini-menu"), (function(e) {
                        e.preventDefault(), l("wall-action-icons-expanded")
                    })), n.on("click", s("toggle-full-menu"), (function(t) {
                        t.preventDefault(), e.toggleFullMenu()
                    })), n.on("click", s("hide-full-menu"), (function(t) {
                        t.preventDefault(), e.hideFullMenu()
                    })), n.on("click", s("show-sharing"), (function(t) {
                        t.preventDefault(), e.showSharingMenu()
                    })), n.on("click", s("toggle-filter-menu"), (function(t) {
                        t.preventDefault(), t.stopImmediatePropagation(), e.toggleFilterMenu()
                    })), n.on("mousedown", s("preload-settings-iframe"), (function(t) {
                        t.preventDefault(), e.initWallSettingsIframe()
                    })), n.on("click", s("pause-autoadvance"), (function(t) {
                        t.preventDefault(), e.setStateField("isAutoAdvancePaused", !0)
                    })), n.on("click", s("unpause-autoadvance"), (function(t) {
                        t.preventDefault(), e.setStateField("isAutoAdvancePaused", !1)
                    })), $(window).on("message", (function(t) {
                        var a = t.originalEvent.data;
                        if (a) {
                            var i = a.args || [];
                            switch (a.method) {
                                case "Wallsio.reloadWallPreviewIframe":
                                    e.reloadWallPreviewIframe();
                                    break;
                                case "Wallsio.setWallPreviewIframeUrlParam":
                                    e.setWallPreviewIframeUrlParam.apply(e, _toConsumableArray(i));
                                    break;
                                case "Wallsio.setWallUrlParam":
                                    e.setBrowserUrlParam.apply(e, _toConsumableArray(i));
                                    break;
                                case "Wallsio.hideFullMenu":
                                    e.hideFullMenu();
                                    break;
                                case "Wallsio.setWallmenuStateField":
                                    e.setStateField.apply(e, _toConsumableArray(i))
                            }
                        }
                    }))
                }
            }, {
                key: "updateWallActionIcons",
                value: function() {
                    var e = c[this.currentTheme] || [];
                    o.isIframe() && e.push.apply(e, f), WallsioFullscreen.isSupported() || e.push("fullscreen"), $(".wall-action-icons").find("[data-action-name]").each((function(t, a) {
                        var i = $(a),
                            r = i.data("action-name"),
                            l = i.parent().is("span[hidden]");
                        e.includes(r) ? l || i.wrap("<span hidden>") : l && i.unwrap()
                    }))
                }
            }, {
                key: "updateNetworkFilterMenu",
                value: function() {
                    var e = $(".filter-menu-network");
                    (e.removeClass("filter-menu-network-selected"), this.currentNetworkFilter) && e.filter('[data-network="' + this.currentNetworkFilter + '"]').addClass("filter-menu-network-selected")
                }
            }, {
                key: "getDefaultPreviewIframeUrl",
                value: function() {
                    var e = window.location.href;
                    return e = u.updateUrlQueryParam(e, "preview", "1")
                }
            }, {
                key: "activateSharingInWallSettings",
                value: function() {
                    var e = $(".wall-settings-iframe");
                    if (0 !== e.length) {
                        var t = e.get(0).contentWindow;
                        if (t.postMessage) {
                            var a = 0;
                            this.isFullMenuExpanded || (a = 300), setTimeout((function() {
                                t.postMessage({
                                    method: "Wallsio.activateSharing"
                                }, "*")
                            }), a)
                        }
                    }
                }
            }, {
                key: "reloadWallPreviewIframe",
                value: function() {
                    if (!this.initWallPreviewIframe()) {
                        var e = $(".wall-preview-iframe"),
                            t = this.getDefaultPreviewIframeUrl();
                        e.attr("src", t)
                    }
                }
            }, {
                key: "transformUrlParamValue",
                value: function(e) {
                    return !0 === e ? "1" : !1 === e ? "0" : e + ""
                }
            }, {
                key: "setWallPreviewIframeUrlParam",
                value: function(e, t) {
                    this.initWallPreviewIframe(), t = this.transformUrlParamValue(t);
                    var a = $(".wall-preview-iframe"),
                        i = a.attr("src"),
                        r = u.updateUrlQueryParam(i, e, t);
                    a.attr("src", r)
                }
            }, {
                key: "setBrowserUrlParam",
                value: function(e, t) {
                    t = this.transformUrlParamValue(t), u.updateQueryParamForCurrentUrl(e, t)
                }
            }, {
                key: "hideFullMenu",
                value: function() {
                    this.setStateField("isFullMenuExpanded", !1), r("full-menu-expanded")
                }
            }, {
                key: "showFullMenu",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                    this.initWallSettingsIframe(e), this.setStateField("isFullMenuExpanded", !0), t("full-menu-expanded")
                }
            }, {
                key: "toggleFullMenu",
                value: function() {
                    this.isFullMenuExpanded ? this.hideFullMenu() : this.showFullMenu()
                }
            }, {
                key: "showSharingMenu",
                value: function() {
                    this.showFullMenu(!0), t("show-sharing")
                }
            }, {
                key: "toggleFilterMenu",
                value: function() {
                    l("show-filter-menu")
                }
            }, {
                key: "isFullMenuExpanded",
                get: function() {
                    return this.state.get("isFullMenuExpanded")
                }
            }, {
                key: "isWallPreviewActive",
                get: function() {
                    return this.state.get("isWallPreviewActive")
                }
            }, {
                key: "currentTheme",
                get: function() {
                    return this.state.get("currentTheme")
                }
            }, {
                key: "currentNetworkFilter",
                get: function() {
                    return this.state.get("currentNetworkFilter")
                }
            }]), e
        })();
    setTimeout((function() {
        (new v).init()
    }), 0)
})();
window.templates = window.templates || {}, window.templates.checkin_video = function(e) {
    var n = "";
    return n += '<div class="video-wrapper checkin-video-wrapper">\n  <video\n    class="checkin-video"\n    playsinline\n    loop\n    muted\n    disableremoteplayback\n    disablepictureinpicture\n    src="' + (0, _.escape)(e.videoUrl) + '"\n  >\n  </video>\n\n  <div class="video-mute-button"></div>\n</div>\n'
};
window.templates = window.templates || {}, window.templates.cta = function(n) {
    var e = "",
        t = _.escape;
    return e += '<div class="checkin-buttons">\n  <div class="connector"></div>\n  <a class="checkin-cta" href="' + t(n.url) + '" rel="nofollow noopener" target="_blank">' + t(helpers.translation.__(n.text)) + "</a>\n</div>\n"
};
window.templates = window.templates || {}, window.templates.highlight_icon = function(i) {
    return '<div class="checkin-highlight-icon"></div>\n'
};
window.templates = window.templates || {}, window.templates.message = function(e) {
    var s, n = "";
    return n += '<div class="checkin-message-wrapper">\n  <div class="checkin-message" dir="auto">\n    ' + (null == (s = e.message) ? "" : s) + "\n  </div>\n</div>\n"
};
window.templates = window.templates || {}, window.templates.user = function(n) {
    var e, a = "",
        t = _.escape;
    return Array.prototype.join, a += '<div class="checkin-user clearfix">\n  ', n.userLink ? (a += "\n\n    ", n.image && (a += '\n      <a\n        href="' + t(n.userLink) + '"\n        class="checkin-user-image"\n        target="_blank"\n        rel="nofollow noopener"\n        style="background-image: url(' + t(n.image) + ')"\n      >\n      </a>\n    '), a += '\n\n    <div class="checkin-user-name" title="' + t(n.combinedName) + '">\n      <a href="' + t(n.userLink) + '" target="_blank" rel="nofollow noopener">\n        ' + (null == (e = n.nameParts) ? "" : e) + "\n      </a>\n    </div>\n\n  ") : (a += "\n\n    ", n.image && (a += '\n      <div class="checkin-user-image" style="background-image: url(' + t(n.image) + ')">\n      </div>\n    '), a += '\n\n    <div class="checkin-user-name" title="' + t(n.combinedName) + '">\n      ' + (null == (e = n.nameParts) ? "" : e) + "\n    </div>\n\n  "), a += "\n\n  ", n.externalCreatedTimestamp && (a += "\n    ", n.postLink ? a += '\n      <a href="' + t(n.postLink) + '" class="checkin-timestamp" data-timestamp="' + t(n.externalCreatedTimestamp) + '" target="_blank" rel="nofollow noopener">&nbsp;</a>\n    ' : a += '\n      <span class="checkin-timestamp" data-timestamp="' + t(n.externalCreatedTimestamp) + '">&nbsp;</span>\n    ', a += "\n  "), a += '\n\n  <div class="checkin-type checkin-type-' + t(n.type) + '" title="' + t(helpers.getChannelName(n.type)) + '" data-action="show-detail" >\n  </div>\n</div>\n'
};
window.templates = window.templates || {}, window.templates.user_name_parts = function(e) {
    var a = "",
        n = _.escape;
    return Array.prototype.join, e.hasSeparateNames ? a += '\n  <span class="checkin-user-name-part checkin-user-name-full">' + n(e.fullName) + '</span>\n  <span class="checkin-user-name-part checkin-user-name-short">' + n(e.shortName) + "</span>\n" : a += "\n  " + n(e.combinedName) + "\n", a += "\n"
};
window.templates = window.templates || {}, window.templates["embeds/facebook_video_embed"] = function(e) {
    var o = "";
    return o += '<iframe class="checkin-video-embed" src="https://www.facebook.com/plugins/video.php?href=' + (0, _.escape)(e.token) + '&autoplay=1" frameborder="0" allowfullscreen></iframe>\n'
};
window.templates = window.templates || {}, window.templates["embeds/vimeo_video_embed"] = function(e) {
    var o, t = "";
    return t += '<iframe class="checkin-video-embed" src="https://player.vimeo.com/video/' + (0, _.escape)(e.token) + "?autoplay=1&muted=1&loop=1&title=0&byline=0&portrait=0&amp;controls=" + (null == (o = +e.showControls) ? "" : o) + '" frameborder="0" allowfullscreen></iframe>\n'
};
window.templates = window.templates || {}, window.templates["embeds/youtube_video_embed"] = function(e) {
    var o, a = "";
    return a += '<iframe class="checkin-video-embed" src="https://www.youtube-nocookie.com/embed/' + (0, _.escape)(e.token) + "?rel=0&amp;modestbranding=1&amp;showinfo=0&amp;autoplay=1&amp;loop=1&amp;enablejsapi=1&amp;mute=1&amp;controls=" + (null == (o = +e.showControls) ? "" : o) + '" frameborder="0" allowfullscreen></iframe>\n'
};
window.templates = window.templates || {}, window.templates["detail/container"] = function(n) {
    var i, a = "";
    return a += '<div class="detail-container" data-action="hide-detail">\n  <div class="detail-inner">\n    ' + (null == (i = n.detailContent) ? "" : i) + '\n  </div>\n\n  <div class="detail-loading-indicator-wrapper">\n    <svg class="loading-indicator detail-loading-indicator">\n      <use xlink:href="#app-logo-svg"></use>\n    </svg>\n  </div>\n</div>\n\n<div class="detail-menu" data-action="hide-detail">\n  ' + (null == (i = n.ctaMenu) ? "" : i) + "\n  " + (null == (i = n.detailMenuSharing) ? "" : i) + '\n\n  <div class="detail-close" data-action="hide-detail"></div>\n</div>\n'
};
window.templates = window.templates || {}, window.templates["detail/content"] = function(e) {
    var n, t = "",
        a = _.escape;
    return t += '<div class="detail-content detail-content-' + a(e.hasImage ? "withimage" : "withoutimage") + '">\n  ' + (null == (n = e.postImageElement) ? "" : n) + '\n\n  <div class="detail-text-wrapper detail-text-wrapper-' + a(e.network) + '">\n    <div class="detail-network-background detail-network-background-' + a(e.network) + '"></div>\n\n    <div class="detail-text-inner">\n      <div class="detail-text-content">\n        ' + (null == (n = e.detailUserElement) ? "" : n) + '\n\n        <div class="detail-message">\n          <div class="detail-message-inner">' + (null == (n = e.message) ? "" : n) + "</div>\n        </div>\n      </div>\n\n      " + (null == (n = e.ctaElement) ? "" : n) + '\n\n      <div class="detail-text-extra">\n        ' + (null == (n = e.detailSharingElement) ? "" : n) + "\n      </div>\n    </div>\n  </div>\n</div>\n"
};
window.templates = window.templates || {}, window.templates["detail/menu_cta"] = function(e) {
    var t = "",
        n = _.escape;
    return t += '<div class="detail-menu-buttons">\n  <a class="detail-menu-cta" href="' + n(e.url) + '" rel="nofollow noopener" target="_blank">' + n(helpers.translation.__(e.text)) + "</a>\n</div>\n"
};
window.templates = window.templates || {}, window.templates["detail/menu_sharing"] = function(n) {
    var a, t = "",
        e = _.escape;
    return Array.prototype.join, t += '<div class="detail-menu-sharing">\n  <button type="button" class="detail-menu-sharing-expander" data-action="show-detail-menu-sharing">' + e(helpers.translation.__("SHARE_POST")) + '</button>\n\n  <div class="detail-menu-sharing-content">\n    <a href="https://www.facebook.com/sharer/sharer.php?u=' + (null == (a = encodeURIComponent(n.link)) ? "" : a) + '" class="detail-menu-sharing-button" data-action="share" data-network="facebook">\n      <i class="fa fa-facebook"></i>\n    </a>\n\n    <a href="https://twitter.com/intent/tweet?url=' + (null == (a = encodeURIComponent(n.link)) ? "" : a) + "&text=", encodeURIComponent(n.twitterText), t += "&via=" + (null == (a = n.twitterVia) ? "" : a) + '" class="detail-menu-sharing-button" data-action="share" data-network="twitter">\n      <i class="fa fa-twitter"></i>\n    </a>\n\n    <a href="https://www.linkedin.com/sharing/share-offsite/?url=' + (null == (a = encodeURIComponent(n.link)) ? "" : a) + '" class="detail-menu-sharing-button" data-action="share" data-network="linkedin">\n      <i class="fa fa-linkedin"></i>\n    </a>\n\n    <a href="#" class="detail-menu-sharing-button link-button" data-clipboard-text="' + e(n.link) + '" title="' + e(helpers.translation.__("SHARE_POST_LINK")) + '" data-action="detail-copy-link">\n      <i class="fa fa-link"></i>\n    </a>\n\n    <div class="detail-link-copied detail-link-copied-success">\n      <span>' + e(helpers.translation.__("COPIED_TO_CLIPBOARD")) + '<span>\n    </div>\n\n    <div class="detail-link-copied detail-link-copied-error">\n      <span>' + e(helpers.translation.__("COPIED_TO_CLIPBOARD_ERROR")) + "<span>\n    </div>\n  </div>\n</div>\n"
};
window.templates = window.templates || {}, window.templates["detail/post_image"] = function(e) {
    var n, a = "",
        t = _.escape;
    return Array.prototype.join, e.postImage && (a += '\n  <div\n    class="detail-image ' + t(e.postVideoElement ? "detail-image-with-video" : "") + '"\n    data-image="' + t(e.postImage) + '"\n    data-aspect-ratio="' + t(e.imageAspectRatio) + '"\n  >\n    ', e.postVideoElement ? a += "\n      " + (null == (n = e.postVideoElement) ? "" : n) + "\n    " : a += '\n      <div class="detail-image-inner" style="background-image: url(' + t(e.postImage) + ')">\n      </div>\n    ', a += "\n\n    ", e.postLink && !e.hasEmbeddedVideo && (a += '\n      <a href="' + t(e.postLink) + '" target="_blank" rel="nofollow noopener" class="detail-image-link"></a>\n    '), a += "\n  </div>\n"), a += "\n"
};
window.templates = window.templates || {}, window.templates["detail/sharing"] = function(n) {
    var a = "",
        t = _.escape;
    return a += '<span class="detail-sharing-intro">\n  ' + t(helpers.translation.__("SHARE_POST")) + '\n</span>\n\n<div class="detail-sharing-buttons">\n  <a href="https://www.facebook.com/sharer/sharer.php?u=' + t(encodeURIComponent(n.link)) + '" class="detail-sharing-button" data-action="share" data-network="facebook">\n    <i class="fa fa-facebook"></i>\n  </a>\n\n  <a href="https://twitter.com/intent/tweet?url=' + t(encodeURIComponent(n.link)) + "&text=" + t(encodeURIComponent(n.twitterText)) + "&via=" + t(n.twitterVia) + '" class="detail-sharing-button" data-action="share" data-network="twitter">\n    <i class="fa fa-twitter"></i>\n  </a>\n\n  <a href="https://www.linkedin.com/sharing/share-offsite/?url=' + t(encodeURIComponent(n.link)) + '" class="detail-sharing-button" data-action="share" data-network="linkedin">\n    <i class="fa fa-linkedin"></i>\n  </a>\n\n  <a href="' + t(n.link) + '" class="detail-sharing-button link-button" data-clipboard-text="' + t(n.link) + '" title="' + t(helpers.translation.__("SHARE_POST_LINK")) + '" data-action="detail-copy-link">\n    <i class="fa fa-link"></i>\n  </a>\n\n  <div class="detail-link-copied detail-link-copied-success">\n    <span>' + t(helpers.translation.__("COPIED_TO_CLIPBOARD")) + '<span>\n  </div>\n\n  <div class="detail-link-copied detail-link-copied-error">\n    <span>' + t(helpers.translation.__("COPIED_TO_CLIPBOARD_ERROR")) + "<span>\n  </div>\n</div>\n"
};
window.templates = window.templates || {}, window.templates["detail/user"] = function(n) {
    var e = "",
        a = _.escape;
    return Array.prototype.join, e += '<div class="detail-user">\n  ', n.userImage && (e += '\n    <div\n      class="detail-user-image"\n      style="background-image: url(' + a(n.userImage) + ')"\n    >\n      ', n.userLink && (e += '\n        <a\n          class="detail-user-image-link"\n          href="' + a(n.userLink) + '"\n          target="_blank"\n          rel="nofollow noopener"\n        >\n        </a>\n      '), e += "\n    </div>\n  "), e += '\n\n  <div class="detail-user-info">\n    <div class="detail-user-name" title="' + a(n.combinedName) + '">\n      <i class="detail-network-icon detail-network-icon-' + a(n.network) + '"></i>\n\n      ', n.userLink ? e += '\n        <a href="' + a(n.userLink) + '" target="_blank" rel="nofollow noopener">' + a(n.userName) + "</a>\n      " : e += "\n        " + a(n.userName) + "\n      ", e += '\n    </div>\n\n    <a\n      href="' + a(n.postLink) + '"\n      class="detail-timestamp"\n      target="_blank"\n      rel="nofollow noopener"\n    >' + a(n.humanTimeDiff) + "</a>\n  </div>\n</div>\n"
};
window.templates = window.templates || {}, window.templates["detail/video"] = function(e) {
    var i = "",
        o = _.escape;
    return Array.prototype.join, e.postVideo && (i += '\n  <div class="video-wrapper detail-video-wrapper video-muted">\n    <video class="detail-video" playsinline loop muted poster="' + o(e.postImage) + '">\n      <source src="' + o(e.postVideo) + '" type="video/mp4" />\n    </video>\n\n    <div class="video-play-button"></div>\n    <div class="video-mute-button"></div>\n  </div>\n'), i += "\n"
};
window.templates = window.templates || {}, window.templates.container = function(a) {
    var i = "",
        d = _.escape;
    return i += '<div class="checkin-wrapper checkin-wrapper-' + d(a.id) + '" data-id="' + d(a.id) + '" data-original-id="' + d(a.originalId) + '">\n  <div class="checkin checkin-' + d(a.id) + '" data-id="' + d(a.id) + '" data-original-id="' + d(a.originalId) + '" data-weight="' + d(a.weight) + '" data-timestamp="' + d(a.externalCreatedTimestamp) + '" data-bonus="' + d(a.bonus) + '" data-is-looped="' + d(a.isLooped) + '" data-tags="' + d(a.tags) + '" data-type="' + d(a.type) + '" data-user-id="' + d(a.userId) + '">\n  </div>\n</div>\n'
};
window.templates = window.templates || {}, window.templates.image = function(n) {
    var e, a = "",
        i = _.escape;
    return Array.prototype.join, a += '<div class="checkin-image-wrapper checkin-image-preview-holder">\n  <svg class="placeholder-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="currentColor" d="M159 336l-39.5-39.5c-4.7-4.7-12.3-4.7-17 0l-39 39L63 448h256V304l-55.5-55.5c-4.7-4.7-12.3-4.7-17 0L159 336zm96-50.7l32 32V416H95.1l.3-67.2 15.6-15.6 48 48c20.3-20.3 77.7-77.6 96-95.9zM127 256c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm0-96c17.6 0 32 14.4 32 32s-14.4 32-32 32-32-14.4-32-32 14.4-32 32-32zm242.9-62.1L286 14C277 5 264.8-.1 252.1-.1H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V131.9c0-12.7-5.1-25-14.1-34zM256 32.5c2.8.7 5.3 2.1 7.4 4.2l83.9 83.9c2.1 2.1 3.5 4.6 4.2 7.4H256V32.5zM352 464c0 8.8-7.2 16-16 16H48c-8.8 0-16-7.2-16-16V48c0-8.8 7.2-16 16-16h176v104c0 13.3 10.7 24 24 24h104v304z"></path></svg>\n  <div\n    class="checkin-image"\n    data-action="show-detail"\n    style="background-image:url(' + i(n.image) + "); padding-bottom: " + i(n.imagePaddingBottom) + '"\n  >\n    ', n.postLink && (a += '\n      <a\n        href="' + i(n.postLink) + '"\n        target="_blank"\n        rel="nofollow noopener"\n        class="checkin-image-link"\n      ></a>\n    '), a += "\n\n    ", n.showPlayButton && (a += '\n      <div class="video-play-button"></div>\n    '), a += "\n  </div>\n</div>\n\n", n.message && (a += '\n  <div class="checkin-message" dir="auto">\n    ' + (null == (e = n.message) ? "" : e) + "\n  </div>\n"), a += "\n"
};
window.templates = window.templates || {}, window.templates.message = function(e) {
    var n, s = "";
    return s += '<div class="checkin-message" dir="auto">\n  ' + (null == (n = e.message) ? "" : n) + "\n</div>\n"
};
"use strict";
var _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(A) {
    return typeof A
} : function(A) {
    return A && "function" == typeof Symbol && A.constructor === Symbol && A !== Symbol.prototype ? "symbol" : typeof A
};
window.Modernizr && !1 === window.Modernizr.videoautoplay ? window.Modernizr = {
    isForcedModernizr: !0,
    on: function() {},
    videoautoplay: !1
} : (function(A, e, o) {
    function t(A, e) {
        return (void 0 === A ? "undefined" : _typeof(A)) === e
    }

    function n() {
        return "function" != typeof e.createElement ? e.createElement(arguments[0]) : w ? e.createElementNS.call(e, "http://www.w3.org/2000/svg", arguments[0]) : e.createElement.apply(e, arguments)
    }

    function a(A, e) {
        if ("object" == (void 0 === A ? "undefined" : _typeof(A)))
            for (var t in A) r(A, t) && a(t, A[t]);
        else {
            var n = (A = A.toLowerCase()).split("."),
                l = c[n[0]];
            if (2 == n.length && (l = l[n[1]]), o !== l) return c;
            e = "function" == typeof e ? e() : e, 1 == n.length ? c[n[0]] = e : (!c[n[0]] || c[n[0]] instanceof Boolean || (c[n[0]] = new Boolean(c[n[0]])), c[n[0]][n[1]] = e), c._trigger(A, e)
        }
        return c
    }
    var l = [],
        i = {
            _version: "3.5.0",
            _config: {
                classPrefix: "",
                enableClasses: !0,
                enableJSClass: !0,
                usePrefixes: !0
            },
            _q: [],
            on: function(A, e) {
                var o = this;
                setTimeout((function() {
                    e(o[A])
                }), 0)
            },
            addTest: function(A, e, o) {
                l.push({
                    name: A,
                    fn: e,
                    options: o
                })
            },
            addAsyncTest: function(A) {
                l.push({
                    name: null,
                    fn: A
                })
            }
        },
        c = function() {};
    c.prototype = i, c = new c;
    var r, d = [],
        h = e.documentElement;
    !(function() {
        var A = {}.hasOwnProperty;
        r = t(A, "undefined") || t(A.call, "undefined") ? function(A, e) {
            return e in A && t(A.constructor.prototype[e], "undefined")
        } : function(e, o) {
            return A.call(e, o)
        }
    })();
    var w = "svg" === h.nodeName.toLowerCase();
    c.addTest("video", (function() {
        var A = n("video"),
            e = !1;
        try {
            (e = !!A.canPlayType) && ((e = new Boolean(e)).ogg = A.canPlayType('video/ogg; codecs="theora"').replace(/^no$/, ""), e.h264 = A.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/, ""), e.webm = A.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/, ""), e.vp9 = A.canPlayType('video/webm; codecs="vp9"').replace(/^no$/, ""), e.hls = A.canPlayType('application/x-mpegURL; codecs="avc1.42E01E"').replace(/^no$/, ""))
        } catch (A) {}
        return e
    })), i._l = {}, i.on = function(A, e) {
        this._l[A] || (this._l[A] = []), this._l[A].push(e), c.hasOwnProperty(A) && setTimeout((function() {
            c._trigger(A, c[A])
        }), 0)
    }, i._trigger = function(A, e) {
        if (this._l[A]) {
            var o = this._l[A];
            setTimeout((function() {
                var A;
                for (A = 0; A < o.length; A++)(0, o[A])(e)
            }), 0), delete this._l[A]
        }
    }, c._q.push((function() {
        i.addTest = a
    })), c.addAsyncTest((function() {
        function A(n) {
            i++, clearTimeout(e);
            var c = n && "playing" === n.type || 0 !== r.currentTime;
            return !c && l > i ? (e = setTimeout(A, t), o) : (r.removeEventListener("playing", A, !1), a("videoautoplay", c), r.parentNode && r.parentNode.removeChild(r), o)
        }
        var e, t = 200,
            l = 5,
            i = 0,
            r = n("video"),
            d = r.style;
        if (!(c.video && "autoplay" in r)) return a("videoautoplay", !1), o;
        d.position = "absolute", d.height = 0, d.width = 0;
        try {
            if (c.video.ogg) r.src = "data:video/ogg;base64,T2dnUwACAAAAAAAAAABmnCATAAAAAHDEixYBKoB0aGVvcmEDAgEAAQABAAAQAAAQAAAAAAAFAAAAAQAAAAAAAAAAAGIAYE9nZ1MAAAAAAAAAAAAAZpwgEwEAAAACrA7TDlj///////////////+QgXRoZW9yYSsAAABYaXBoLk9yZyBsaWJ0aGVvcmEgMS4xIDIwMDkwODIyIChUaHVzbmVsZGEpAQAAABoAAABFTkNPREVSPWZmbXBlZzJ0aGVvcmEtMC4yOYJ0aGVvcmG+zSj3uc1rGLWpSUoQc5zmMYxSlKQhCDGMYhCEIQhAAAAAAAAAAAAAEW2uU2eSyPxWEvx4OVts5ir1aKtUKBMpJFoQ/nk5m41mUwl4slUpk4kkghkIfDwdjgajQYC8VioUCQRiIQh8PBwMhgLBQIg4FRba5TZ5LI/FYS/Hg5W2zmKvVoq1QoEykkWhD+eTmbjWZTCXiyVSmTiSSCGQh8PB2OBqNBgLxWKhQJBGIhCHw8HAyGAsFAiDgUCw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDAwPEhQUFQ0NDhESFRUUDg4PEhQVFRUOEBETFBUVFRARFBUVFRUVEhMUFRUVFRUUFRUVFRUVFRUVFRUVFRUVEAwLEBQZGxwNDQ4SFRwcGw4NEBQZHBwcDhATFhsdHRwRExkcHB4eHRQYGxwdHh4dGxwdHR4eHh4dHR0dHh4eHRALChAYKDM9DAwOExo6PDcODRAYKDlFOA4RFh0zV1A+EhYlOkRtZ00YIzdAUWhxXDFATldneXhlSFxfYnBkZ2MTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTEhIVGRoaGhoSFBYaGhoaGhUWGRoaGhoaGRoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhESFh8kJCQkEhQYIiQkJCQWGCEkJCQkJB8iJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQREhgvY2NjYxIVGkJjY2NjGBo4Y2NjY2MvQmNjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRISEhUXGBkbEhIVFxgZGxwSFRcYGRscHRUXGBkbHB0dFxgZGxwdHR0YGRscHR0dHhkbHB0dHR4eGxwdHR0eHh4REREUFxocIBERFBcaHCAiERQXGhwgIiUUFxocICIlJRcaHCAiJSUlGhwgIiUlJSkcICIlJSUpKiAiJSUlKSoqEBAQFBgcICgQEBQYHCAoMBAUGBwgKDBAFBgcICgwQEAYHCAoMEBAQBwgKDBAQEBgICgwQEBAYIAoMEBAQGCAgAfF5cdH1e3Ow/L66wGmYnfIUbwdUTe3LMRbqON8B+5RJEvcGxkvrVUjTMrsXYhAnIwe0dTJfOYbWrDYyqUrz7dw/JO4hpmV2LsQQvkUeGq1BsZLx+cu5iV0e0eScJ91VIQYrmqfdVSK7GgjOU0oPaPOu5IcDK1mNvnD+K8LwS87f8Jx2mHtHnUkTGAurWZlNQa74ZLSFH9oF6FPGxzLsjQO5Qe0edcpttd7BXBSqMCL4k/4tFrHIPuEQ7m1/uIWkbDMWVoDdOSuRQ9286kvVUlQjzOE6VrNguN4oRXYGkgcnih7t13/9kxvLYKQezwLTrO44sVmMPgMqORo1E0sm1/9SludkcWHwfJwTSybR4LeAz6ugWVgRaY8mV/9SluQmtHrzsBtRF/wPY+X0JuYTs+ltgrXAmlk10xQHmTu9VSIAk1+vcvU4ml2oNzrNhEtQ3CysNP8UeR35wqpKUBdGdZMSjX4WVi8nJpdpHnbhzEIdx7mwf6W1FKAiucMXrWUWVjyRf23chNtR9mIzDoT/6ZLYailAjhFlZuvPtSeZ+2oREubDoWmT3TguY+JHPdRVSLKxfKH3vgNqJ/9emeEYikGXDFNzaLjvTeGAL61mogOoeG3y6oU4rW55ydoj0lUTSR/mmRhPmF86uwIfzp3FtiufQCmppaHDlGE0r2iTzXIw3zBq5hvaTldjG4CPb9wdxAme0SyedVKczJ9AtYbgPOzYKJvZZImsN7ecrxWZg5dR6ZLj/j4qpWsIA+vYwE+Tca9ounMIsrXMB4Stiib2SPQtZv+FVIpfEbzv8ncZoLBXc3YBqTG1HsskTTotZOYTG+oVUjLk6zhP8bg4RhMUNtfZdO7FdpBuXzhJ5Fh8IKlJG7wtD9ik8rWOJxy6iQ3NwzBpQ219mlyv+FLicYs2iJGSE0u2txzed++D61ZWCiHD/cZdQVCqkO2gJpdpNaObhnDfAPrT89RxdWFZ5hO3MseBSIlANppdZNIV/Rwe5eLTDvkfWKzFnH+QJ7m9QWV1KdwnuIwTNtZdJMoXBf74OhRnh2t+OTGL+AVUnIkyYY+QG7g9itHXyF3OIygG2s2kud679ZWKqSFa9n3IHD6MeLv1lZ0XyduRhiDRtrNnKoyiFVLcBm0ba5Yy3fQkDh4XsFE34isVpOzpa9nR8iCpS4HoxG2rJpnRhf3YboVa1PcRouh5LIJv/uQcPNd095ickTaiGBnWLKVWRc0OnYTSyex/n2FofEPnDG8y3PztHrzOLK1xo6RAml2k9owKajOC0Wr4D5x+3nA0UEhK2m198wuBHF3zlWWVKWLN1CHzLClUfuoYBcx4b1llpeBKmbayaR58njtE9onD66lUcsg0Spm2snsb+8HaJRn4dYcLbCuBuYwziB8/5U1C1DOOz2gZjSZtrLJk6vrLF3hwY4Io9xuT/ruUFRSBkNtUzTOWhjh26irLEPx4jPZL3Fo3QrReoGTTM21xYTT9oFdhTUIvjqTkfkvt0bzgVUjq/hOYY8j60IaO/0AzRBtqkTS6R5ellZd5uKdzzhb8BFlDdAcrwkE0rbXTOPB+7Y0FlZO96qFL4Ykg21StJs8qIW7h16H5hGiv8V2Cflau7QVDepTAHa6Lgt6feiEvJDM21StJsmOH/hynURrKxvUpQ8BH0JF7BiyG2qZpnL/7AOU66gt+reLEXY8pVOCQvSsBtqZTNM8bk9ohRcwD18o/WVkbvrceVKRb9I59IEKysjBeTMmmbA21xu/6iHadLRxuIzkLpi8wZYmmbbWi32RVAUjruxWlJ//iFxE38FI9hNKOoCdhwf5fDe4xZ81lgREhK2m1j78vW1CqkuMu/AjBNK210kzRUX/B+69cMMUG5bYrIeZxVSEZISmkzbXOi9yxwIfPgdsov7R71xuJ7rFcACjG/9PzApqFq7wEgzNJm2suWESPuwrQvejj7cbnQxMkxpm21lUYJL0fKmogPPqywn7e3FvB/FCNxPJ85iVUkCE9/tLKx31G4CgNtWTTPFhMvlu8G4/TrgaZttTChljfNJGgOT2X6EqpETy2tYd9cCBI4lIXJ1/3uVUllZEJz4baqGF64yxaZ+zPLYwde8Uqn1oKANtUrSaTOPHkhvuQP3bBlEJ/LFe4pqQOHUI8T8q7AXx3fLVBgSCVpMba55YxN3rv8U1Dv51bAPSOLlZWebkL8vSMGI21lJmmeVxPRwFlZF1CpqCN8uLwymaZyjbXHCRytogPN3o/n74CNykfT+qqRv5AQlHcRxYrC5KvGmbbUwmZY/29BvF6C1/93x4WVglXDLFpmbapmF89HKTogRwqqSlGbu+oiAkcWFbklC6Zhf+NtTLFpn8oWz+HsNRVSgIxZWON+yVyJlE5tq/+GWLTMutYX9ekTySEQPLVNQQ3OfycwJBM0zNtZcse7CvcKI0V/zh16Dr9OSA21MpmmcrHC+6pTAPHPwoit3LHHqs7jhFNRD6W8+EBGoSEoaZttTCZljfduH/fFisn+dRBGAZYtMzbVMwvul/T/crK1NQh8gN0SRRa9cOux6clC0/mDLFpmbarmF8/e6CopeOLCNW6S/IUUg3jJIYiAcDoMcGeRbOvuTPjXR/tyo79LK3kqqkbxkkMRAOB0GODPItnX3Jnxro/25Ud+llbyVVSN4ySGIgHA6DHBnkWzr7kz410f7cqO/Syt5KqpFVJwn6gBEvBM0zNtZcpGOEPiysW8vvRd2R0f7gtjhqUvXL+gWVwHm4XJDBiMpmmZtrLfPwd/IugP5+fKVSysH1EXreFAcEhelGmbbUmZY4Xdo1vQWVnK19P4RuEnbf0gQnR+lDCZlivNM22t1ESmopPIgfT0duOfQrsjgG4tPxli0zJmF5trdL1JDUIUT1ZXSqQDeR4B8mX3TrRro/2McGeUvLtwo6jIEKMkCUXWsLyZROd9P/rFYNtXPBli0z398iVUlVKAjFlY437JXImUTm2r/4ZYtMy61hf16RPJIU9nZ1MABAwAAAAAAAAAZpwgEwIAAABhp658BScAAAAAAADnUFBQXIDGXLhwtttNHDhw5OcpQRMETBEwRPduylKVB0HRdF0A";
            else {
                if (!c.video.h264) return a("videoautoplay", !1), o;
                r.src = "data:video/mp4;base64,AAAAIGZ0eXBpc29tAAACAGlzb21pc28yYXZjMW1wNDEAAAAIZnJlZQAAAs1tZGF0AAACrgYF//+q3EXpvebZSLeWLNgg2SPu73gyNjQgLSBjb3JlIDE0OCByMjYwMSBhMGNkN2QzIC0gSC4yNjQvTVBFRy00IEFWQyBjb2RlYyAtIENvcHlsZWZ0IDIwMDMtMjAxNSAtIGh0dHA6Ly93d3cudmlkZW9sYW4ub3JnL3gyNjQuaHRtbCAtIG9wdGlvbnM6IGNhYmFjPTEgcmVmPTMgZGVibG9jaz0xOjA6MCBhbmFseXNlPTB4MzoweDExMyBtZT1oZXggc3VibWU9NyBwc3k9MSBwc3lfcmQ9MS4wMDowLjAwIG1peGVkX3JlZj0xIG1lX3JhbmdlPTE2IGNocm9tYV9tZT0xIHRyZWxsaXM9MSA4eDhkY3Q9MSBjcW09MCBkZWFkem9uZT0yMSwxMSBmYXN0X3Bza2lwPTEgY2hyb21hX3FwX29mZnNldD0tMiB0aHJlYWRzPTEgbG9va2FoZWFkX3RocmVhZHM9MSBzbGljZWRfdGhyZWFkcz0wIG5yPTAgZGVjaW1hdGU9MSBpbnRlcmxhY2VkPTAgYmx1cmF5X2NvbXBhdD0wIGNvbnN0cmFpbmVkX2ludHJhPTAgYmZyYW1lcz0zIGJfcHlyYW1pZD0yIGJfYWRhcHQ9MSBiX2JpYXM9MCBkaXJlY3Q9MSB3ZWlnaHRiPTEgb3Blbl9nb3A9MCB3ZWlnaHRwPTIga2V5aW50PTI1MCBrZXlpbnRfbWluPTEwIHNjZW5lY3V0PTQwIGludHJhX3JlZnJlc2g9MCByY19sb29rYWhlYWQ9NDAgcmM9Y3JmIG1idHJlZT0xIGNyZj0yMy4wIHFjb21wPTAuNjAgcXBtaW49MCBxcG1heD02OSBxcHN0ZXA9NCBpcF9yYXRpbz0xLjQwIGFxPTE6MS4wMACAAAAAD2WIhAA3//728P4FNjuZQQAAAu5tb292AAAAbG12aGQAAAAAAAAAAAAAAAAAAAPoAAAAZAABAAABAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAACGHRyYWsAAABcdGtoZAAAAAMAAAAAAAAAAAAAAAEAAAAAAAAAZAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAEAAAAAAAgAAAAIAAAAAACRlZHRzAAAAHGVsc3QAAAAAAAAAAQAAAGQAAAAAAAEAAAAAAZBtZGlhAAAAIG1kaGQAAAAAAAAAAAAAAAAAACgAAAAEAFXEAAAAAAAtaGRscgAAAAAAAAAAdmlkZQAAAAAAAAAAAAAAAFZpZGVvSGFuZGxlcgAAAAE7bWluZgAAABR2bWhkAAAAAQAAAAAAAAAAAAAAJGRpbmYAAAAcZHJlZgAAAAAAAAABAAAADHVybCAAAAABAAAA+3N0YmwAAACXc3RzZAAAAAAAAAABAAAAh2F2YzEAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAgACAEgAAABIAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAY//8AAAAxYXZjQwFkAAr/4QAYZ2QACqzZX4iIhAAAAwAEAAADAFA8SJZYAQAGaOvjyyLAAAAAGHN0dHMAAAAAAAAAAQAAAAEAAAQAAAAAHHN0c2MAAAAAAAAAAQAAAAEAAAABAAAAAQAAABRzdHN6AAAAAAAAAsUAAAABAAAAFHN0Y28AAAAAAAAAAQAAADAAAABidWR0YQAAAFptZXRhAAAAAAAAACFoZGxyAAAAAAAAAABtZGlyYXBwbAAAAAAAAAAAAAAAAC1pbHN0AAAAJal0b28AAAAdZGF0YQAAAAEAAAAATGF2ZjU2LjQwLjEwMQ=="
            }
        } catch (A) {
            return a("videoautoplay", !1), o
        }
        r.setAttribute("autoplay", ""), r.style.cssText = "display:none", h.appendChild(r), setTimeout((function() {
            r.addEventListener("playing", A, !1), e = setTimeout(A, t)
        }), 0)
    })), (function() {
        var A, e, o, n, a, i;
        for (var r in l)
            if (l.hasOwnProperty(r)) {
                if (A = [], (e = l[r]).name && (A.push(e.name.toLowerCase()), e.options && e.options.aliases && e.options.aliases.length))
                    for (o = 0; o < e.options.aliases.length; o++) A.push(e.options.aliases[o].toLowerCase());
                for (n = t(e.fn, "function") ? e.fn() : e.fn, a = 0; a < A.length; a++) 1 === (i = A[a].split(".")).length ? c[i[0]] = n : (!c[i[0]] || c[i[0]] instanceof Boolean || (c[i[0]] = new Boolean(c[i[0]])), c[i[0]][i[1]] = n), d.push((n ? "" : "no-") + i.join("-"))
            }
    })(), delete i.addTest, delete i.addAsyncTest;
    for (var R = 0; R < c._q.length; R++) c._q[R]();
    A.Modernizr = c
})(window, document);
"use strict";
window.helpers = (function() {
    var e = function(e) {
            return "[data-action~='" + e + "']"
        },
        n = function(e) {
            if (!e) return 0;
            var n = 0,
                r = (e = e.toString()).length;
            if (0 === r) return n;
            for (var t = 0; t < r; t++) {
                n = (n << 5) - n + e.charCodeAt(t), n &= n
            }
            return Math.abs(n)
        },
        r = function(e, n, r) {
            if (r <= n) return e;
            var t = (e.length / r + 1) / 2,
                a = Math.round(n * t);
            return htmlTruncate(e, a, {
                ellipsis: "…",
                keepImageTag: !0
            })
        },
        t = function(e) {
            var n;
            switch (e) {
                case "youtube":
                    return "YouTube";
                case "rss":
                    return "RSS";
                case "ads":
                    return "Advertising";
                case "vkontakte":
                    return "VKontakte";
                default:
                    return (n = e).charAt(0).toUpperCase() + n.slice(1)
            }
        },
        a = function(e) {
            return "@" + e.username
        },
        u = function(e) {
            var n = e.external_name;
            return {
                username: n,
                name: e.external_fullname || n
            }
        },
        i = function(e) {
            var n, r = u(e);
            return "twitter" === e.type ? a(r) : "instagram" === e.type ? (n = r).username ? "@" + n.username : helpers.translation.__("UNKNOWN_NETWORK_USER", t("instagram")) : r.username
        },
        o = function(e) {
            var n, r = u(e);
            switch (e.type) {
                case "twitter":
                    return (n = r).name || a(n);
                case "instagram":
                    return (function(e) {
                        return e.name ? e.name : helpers.translation.__("UNKNOWN_NETWORK_USER", t("instagram"))
                    })(r);
                case "facebook":
                    return (function(e) {
                        var n = void 0;
                        return e && (_.isPlainObject(e) ? n = e.name || e.title || e.username || e.id : "number" == typeof e ? n = "" + e : "string" == typeof e && (n = e)), n || helpers.translation.__("UNKNOWN_NETWORK_USER", t("facebook"))
                    })(r);
                case "youtube":
                    return (function(e) {
                        return e.name
                    })(r);
                case "pinterest":
                    return (function(e) {
                        return e.name ? e.name : helpers.translation.__("UNKNOWN_NETWORK_USER", t("pinterest"))
                    })(r)
            }
            return r.name
        },
        c = function(e) {
            return !!e.external_name && (!!e.external_fullname && e.external_name !== e.external_fullname)
        };
    return {
        $actionElement: function(n) {
            return $(e(n))
        },
        actionSelector: e,
        autoBind: function(e) {
            var n = !0,
                r = !1,
                t = void 0;
            try {
                for (var a, u = Object.getOwnPropertyNames(e.constructor.prototype)[Symbol.iterator](); !(n = (a = u.next()).done); n = !0) {
                    var i = a.value,
                        o = e[i];
                    "constructor" !== i && "function" == typeof o && (e[i] = o.bind(e))
                }
            } catch (e) {
                r = !0, t = e
            } finally {
                try {
                    !n && u.return && u.return()
                } finally {
                    if (r) throw t
                }
            }
            return e
        },
        getChannelName: t,
        getSourceName: function(e, n) {
            return t(e) + " " + (function(e, n) {
                return n || ("facebook" === e ? "page" : "profile")
            })(e, n)
        },
        getUnixTimestamp: function() {
            return Math.floor(Date.now() / 1e3)
        },
        checkins: {
            getShortName: i,
            getFullName: o,
            getCombinedName: function(e) {
                var n = i(e),
                    r = o(e);
                return r ? n ? c(e) ? n + " (" + r + ")" : n : r : n
            },
            hasSeparateNames: c
        },
        jQuery: {
            stringify: function(e) {
                return $("<div>").append(e.clone()).html()
            }
        },
        string: {
            hash: n
        },
        integer: {
            ceilTo: function(e) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
                return Math.ceil(e / n) * n
            },
            getRandomSeededInt: function(e, r, t) {
                t += 1, e = n(e);
                var a = (e = 1e4 * Math.sin(e)) - Math.floor(e);
                return Math.floor(a * (t - r)) + r
            }
        },
        slug: {
            fromId: function(e) {
                return (function(e, n) {
                    var r = "",
                        t = e;
                    do {
                        var a = t % n;
                        t = Math.floor(t / n), r = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz+/".charAt(a) + r
                    } while (0 !== t);
                    return r
                })(e, 62)
            },
            toId: function(e) {
                return n = 62, e.split("").reduce((function(e, r) {
                    return e * n + "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz+/".indexOf(r)
                }), 0);
                var n
            }
        },
        truncateTransformedTextPrecise: function(e, n, t) {
            for (var a = n, u = 0;;) {
                var i = r(e, a, t);
                if ($("<div>").html(i).text().length <= n) return i;
                if (a = Math.ceil(.9 * a), ++u >= 50) return i
            }
        },
        addLineBreaks: function(e) {
            if (!e) return "";
            var n = e.replace(/(\n[\n]|\r[\r]|\n[\r]|\r[\n])+/g, "\n\n");
            return n = (n = n.replace(/\n[\n]+/g, "\n\n")).replace(/\n/g, "<br>")
        }
    }
})();
"use strict";
var _createClass = (function() {
    function a(a, t) {
        for (var e = 0; e < t.length; e++) {
            var n = t[e];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(a, n.key, n)
        }
    }
    return function(t, e, n) {
        return e && a(t.prototype, e), n && a(t, n), t
    }
})();

function _classCallCheck(a, t) {
    if (!(a instanceof t)) throw new TypeError("Cannot call a class as a function")
}!(function() {
    var a = $(document.documentElement),
        t = (function() {
            function t() {
                _classCallCheck(this, t)
            }
            return _createClass(t, null, [{
                key: "addRule",
                value: function(a, t) {
                    var e = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1,
                        n = $("#dynamic-css");
                    0 === n.length && (n = $("<style>").attr("id", "dynamic-css").appendTo("body"));
                    var s = n[0].sheet;
                    e < 0 && (e = _.get(s, "cssRules.length", 0)), "addRule" in s ? s.addRule(a, t, e) : "insertRule" in s && s.insertRule(a + "{" + t + "}", e)
                }
            }, {
                key: "getTransformAngle",
                value: function(a, t, e) {
                    return e < a / 2 ? (function(a, t, e) {
                        var n = a,
                            s = e,
                            o = t,
                            l = n / 2 - s,
                            r = Math.atan(o / l),
                            u = Math.asin(s * Math.sin(r) / n);
                        return (Math.PI - r - u) * (180 / Math.PI)
                    })(a, t, e) : (function(a, t, e) {
                        var n = t / a * 2,
                            s = Math.atan(n),
                            o = Math.sin(s),
                            l = t / o,
                            r = e,
                            u = r * r + l * l - 2 * r * l * Math.cos(s),
                            i = l * o / Math.sqrt(u),
                            c = Math.asin(i),
                            h = Math.PI - c,
                            d = r * Math.sin(h) / a,
                            f = Math.asin(d),
                            v = (Math.PI - h - f) * (180 / Math.PI);
                        return v < 0 ? 0 : v
                    })(a, t, e)
                }
            }, {
                key: "setCustomCss",
                value: function(a) {
                    var t = $("#custom-css");
                    0 === t.length && (t = $("<style>").attr("id", "custom-css").appendTo("body")), t.text(a)
                }
            }, {
                key: "addRootClass",
                value: function(t) {
                    return a.addClass(t)
                }
            }, {
                key: "removeRootClass",
                value: function(t) {
                    return a.removeClass(t)
                }
            }, {
                key: "hasRootClass",
                value: function(t) {
                    return a.hasClass(t)
                }
            }, {
                key: "changeRootClass",
                value: function(a, e) {
                    e ? t.addRootClass(a) : t.removeRootClass(a)
                }
            }, {
                key: "toggleRootClass",
                value: function(a) {
                    var e = t.hasRootClass(a);
                    t.changeRootClass(a, !e)
                }
            }, {
                key: "setWallInitializedClasses",
                value: function() {
                    t.removeRootClass("wall-loading"), t.addRootClass("wall-initialized")
                }
            }]), t
        })();
    window.helpers.Css = t
})();
"use strict";
helpers.Event = {
    triggerEvent: function(t) {
        var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : window,
            e = (function(t) {
                if ("function" == typeof CustomEvent) return new CustomEvent(t);
                var n = document.createEvent("Event");
                return n.initEvent(t, !0, !0), n
            })(t);
        return n.dispatchEvent(e)
    }
};
"use strict";
var _createClass = (function() {
    function t(t, i) {
        for (var a = 0; a < i.length; a++) {
            var n = i[a];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
        }
    }
    return function(i, a, n) {
        return a && t(i.prototype, a), n && t(i, n), i
    }
})();

function _classCallCheck(t, i) {
    if (!(t instanceof i)) throw new TypeError("Cannot call a class as a function")
}!(function() {
    var t = {
            appear: {
                hiddenStyle: {
                    opacity: 0
                },
                visibleStyle: {
                    opacity: 1
                }
            },
            slide: {
                hiddenStyle: {
                    opacity: 0,
                    transform: "translateX(-100%)"
                },
                visibleStyle: {
                    opacity: 1,
                    transform: "translateX(0)"
                }
            },
            slideUp: {
                hiddenStyle: {
                    opacity: 0,
                    transform: "translateY(100vh)"
                },
                visibleStyle: {
                    opacity: 1,
                    transform: "translateY(0)"
                }
            },
            zoomIn: {
                hiddenStyle: {
                    opacity: 0,
                    transform: "scale(0.2)"
                },
                visibleStyle: {
                    opacity: 1,
                    transform: "scale(1)"
                }
            },
            zoomOut: {
                hiddenStyle: {
                    opacity: 0,
                    transform: "scale(1.5)"
                },
                visibleStyle: {
                    opacity: 1,
                    transform: "scale(1)"
                }
            },
            turn: {
                hiddenStyle: {
                    opacity: 0,
                    transform: "perspective(100vw) rotateY(-90deg)"
                },
                visibleStyle: {
                    opacity: 1,
                    transform: "perspective(100vw) rotateY(0)"
                }
            }
        },
        i = (function() {
            function i(t) {
                _classCallCheck(this, i), this.checkinTransition = t, this.defaultCheckinTransition = "appear", this.initialStagger = "0.08s", this.normalStagger = null, this.initialTransitionDuration = "0.8s", this.normalTransitionDuration = "0.4s", helpers.autoBind(this)
            }
            return _createClass(i, [{
                key: "getCheckinTransition",
                value: function() {
                    var i = this.checkinTransition;
                    return t[i] || (i = this.defaultCheckinTransition), t[i]
                }
            }, {
                key: "setTransitionMode",
                value: function(t, i) {
                    var a = void 0,
                        n = void 0;
                    "initial" === i ? (a = this.initialStagger, n = this.initialTransitionDuration) : (a = this.normalStagger, n = this.normalTransitionDuration), t.isotope({
                        stagger: a,
                        transitionDuration: n
                    })
                }
            }]), i
        })();
    window.helpers.Isotope = i
})();
"use strict";
var _createClass = (function() {
    function e(e, n) {
        for (var t = 0; t < n.length; t++) {
            var i = n[t];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
        }
    }
    return function(n, t, i) {
        return t && e(n.prototype, t), i && e(n, i), n
    }
})();

function _classCallCheck(e, n) {
    if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function")
}!(function() {
    var e = (function() {
        function e() {
            _classCallCheck(this, e), this.isCancelled = !1, this.scheduledActions = new Immutable.List, helpers.autoBind(this)
        }
        return _createClass(e, [{
            key: "do",
            value: function(e) {
                return this.scheduledActions = this.scheduledActions.push(e), this
            }
        }, {
            key: "wait",
            value: function(n) {
                return this.do((function() {
                    return new Promise(function(t) {
                        var i = e.now();
                        requestAnimationFrame((function r() {
                            if (e.now() > i + n) return t();
                            requestAnimationFrame(r)
                        }))
                    })
                })), this
            }
        }, {
            key: "run",
            value: function() {
                var e = this,
                    n = Promise.resolve();
                return this.scheduledActions.forEach((function(t) {
                    n = n.then((function() {
                        if (!e.isCancelled) return t()
                    }))
                })), this.scheduledActions = this.scheduledActions.clear(), n
            }
        }, {
            key: "cancel",
            value: function() {
                this.scheduledActions = this.scheduledActions.clear(), this.isCancelled = !0
            }
        }], [{
            key: "now",
            value: function() {
                return window.performance && window.performance.now ? window.performance.now() : Date.now()
            }
        }, {
            key: "callAfter",
            value: function(n, t) {
                return (new e).wait(t).do((function() {
                    return n()
                })).run()
            }
        }]), e
    })();
    window.helpers.Animation = e
})();
"use strict";
var _createClass = (function() {
    function e(e, n) {
        for (var r = 0; r < n.length; r++) {
            var a = n[r];
            a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
        }
    }
    return function(n, r, a) {
        return r && e(n.prototype, r), a && e(n, a), n
    }
})();

function _classCallCheck(e, n) {
    if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function")
}!(function() {
    var e = (function() {
        function e(n) {
            _classCallCheck(this, e), this.wallOptions = n
        }
        return _createClass(e, [{
            key: "getReferer",
            value: function() {
                try {
                    var e = document.referrer;
                    return e || null
                } catch (e) {
                    return console.error(e), null
                }
            }
        }, {
            key: "getPartnerId",
            value: function() {
                if (!URLSearchParams) return null;
                var e = window.location.search;
                return new URLSearchParams(e).get("partner_id")
            }
        }, {
            key: "isEmbedConfiguratorEmbed",
            value: function() {
                var e = this.wallOptions.urls.backendEmbed,
                    n = this.getReferer(),
                    r = n && e.startsWith(n),
                    a = helpers.Wall.isIframe();
                return r && a
            }
        }, {
            key: "recordPageview",
            value: function() {
                if (!this.isEmbedConfiguratorEmbed()) {
                    var n = helpers.Wall.isIframe() ? 1 : 0,
                        r = this.wallOptions.wallId,
                        a = this.wallOptions.urls.recordView,
                        t = {
                            wallId: r,
                            embed: n,
                            partnerId: this.getPartnerId()
                        },
                        i = this.getReferer();
                    n && i && (t.embedder = i);
                    var l = a + "?" + $.param(t);
                    e.sendBeacon(l)
                }
            }
        }], [{
            key: "trackGaTiming",
            value: function(e, n, r) {
                if (window.gtag && Date.now && window.gaTokenWallsio) {
                    WallTimings[e] = Date.now();
                    var a = WallTimings[e] - WallTimings.pageload;
                    a > 6e4 || gtag("event", "timing_complete", {
                        send_to: window.gaTokenWallsio,
                        name: r,
                        value: a,
                        event_category: n
                    })
                }
            }
        }, {
            key: "sendBeacon",
            value: function(e) {
                if (navigator.sendBeacon) try {
                    navigator.sendBeacon(e)
                } catch (e) {
                    console.error(e)
                } else betterFetch.text(e, null, {
                    method: "POST"
                })
            }
        }]), e
    })();
    window.helpers.Tracking = e
})();
"use strict";
var _createClass = (function() {
    function e(e, n) {
        for (var t = 0; t < n.length; t++) {
            var a = n[t];
            a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
        }
    }
    return function(n, t, a) {
        return t && e(n.prototype, t), a && e(n, a), n
    }
})();

function _classCallCheck(e, n) {
    if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function")
}!(function() {
    var e = (function() {
        function e(n) {
            _classCallCheck(this, e), this.wallOptions = n
        }
        return _createClass(e, null, [{
            key: "build",
            value: function(e, n) {
                var t = _.get(templates, e);
                return t ? t(n) : ""
            }
        }]), e
    })();
    window.helpers.Templates = e
})();
"use strict";
window.helpers.translation = (function() {
    var t = function(t) {
        for (var a, r = arguments.length, n = Array(r > 1 ? r - 1 : 0), e = 1; e < r; e++) n[e - 1] = arguments[e];
        return (a = i18n).__.apply(a, ["frontend", t].concat(n))
    };
    return {
        __: t,
        __n: function(t, a, r) {
            for (var n = arguments.length, e = Array(n > 3 ? n - 3 : 0), i = 3; i < n; i++) e[i - 3] = arguments[i];
            var l;
            return (l = i18n).__n.apply(l, ["frontend", t, a, r].concat(e))
        },
        translateText: function() {
            var a = function(a, r) {
                var n = r.split("=");
                if (!(n.length < 2)) {
                    var e = n[0],
                        i = n[1];
                    e && i && a.attr(e, t(i))
                }
            };
            $("[data-translate]").each((function() {
                var a = $(this),
                    r = a.data("translate");
                a.html(t(r))
            })), $("[data-translate-attribute]").each((function() {
                var t = $(this),
                    r = t.data("translate-attribute").split("|"),
                    n = !0,
                    e = !1,
                    i = void 0;
                try {
                    for (var l, o = r[Symbol.iterator](); !(n = (l = o.next()).done); n = !0) {
                        var c = l.value;
                        a(t, c)
                    }
                } catch (t) {
                    e = !0, i = t
                } finally {
                    try {
                        !n && o.return && o.return()
                    } finally {
                        if (e) throw i
                    }
                }
            }))
        }
    }
})();
"use strict";
var _createClass = (function() {
    function e(e, t) {
        for (var n = 0; n < t.length; n++) {
            var i = t[n];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
        }
    }
    return function(t, n, i) {
        return n && e(t.prototype, n), i && e(t, i), t
    }
})();

function _classCallCheck(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
}!(function() {
    var e = $(window),
        t = helpers.translation.__,
        n = helpers.translation.__n,
        i = helpers.Animation,
        o = helpers.Css,
        a = o.addRootClass,
        r = o.hasRootClass,
        l = o.removeRootClass,
        s = (function() {
            function o(e) {
                _classCallCheck(this, o), this.wallOptions = e, this.disconnectTimeout = null, this.reconnectTimeout = null, this.serverStartedAt = null, helpers.autoBind(this)
            }
            return _createClass(o, [{
                key: "prepareEntities",
                value: function(e) {
                    if (!e.entities) return e;
                    var t = void 0;
                    try {
                        t = JSON.parse(e.entities)
                    } catch (e) {}
                    return t || (t = {}), e.entities = t, e
                }
            }, {
                key: "prepareVideo",
                value: function(e) {
                    var t = e.post_video;
                    if (!t) return e;
                    var n = e.post_video_key;
                    return this.wallOptions.mediaProxyHost ? (e.post_video = this.wallOptions.mediaProxyHost + "?src=" + encodeURIComponent(t) + "&key=" + n, e) : (e.post_video = helpers.Wall.forceSSL(e.post_video), e)
                }
            }, {
                key: "getRandomCheckinColorClass",
                value: function(e) {
                    var t = this.wallOptions.colorCount;
                    return "checkin-color-" + helpers.integer.getRandomSeededInt(e, 1, t)
                }
            }, {
                key: "initNotificationBar",
                value: function() {
                    this.wallOptions.overlayBar && o.showNotificationBar(this.wallOptions.overlayBar)
                }
            }, {
                key: "generateInstructions",
                value: function() {
                    var e = $(".post_instructions"),
                        n = this.wallOptions.postInstructions,
                        i = $("<ul>"),
                        o = n.basic || [],
                        a = n.networks || [],
                        r = !0,
                        l = !1,
                        s = void 0;
                    try {
                        for (var c, u = o[Symbol.iterator](); !(r = (c = u.next()).done); r = !0) {
                            var d = c.value;
                            if (d) {
                                var f = $("<li>").text(d);
                                i.append(f)
                            }
                        }
                    } catch (e) {
                        l = !0, s = e
                    } finally {
                        try {
                            !r && u.return && u.return()
                        } finally {
                            if (l) throw s
                        }
                    }
                    var h = !0,
                        v = !1,
                        p = void 0;
                    try {
                        for (var w, m = a[Symbol.iterator](); !(h = (w = m.next()).done); h = !0) {
                            var g = w.value;
                            f = $("<li>").html(t(g.message, g.tags));
                            i.append(f)
                        }
                    } catch (e) {
                        v = !0, p = e
                    } finally {
                        try {
                            !h && m.return && m.return()
                        } finally {
                            if (v) throw p
                        }
                    }
                    e.addClass("post-instructions-hidden"), e.html(i.contents())
                }
            }, {
                key: "loopInstructions",
                value: function() {
                    var e = $(".post_instructions"),
                        t = e.find("li"),
                        n = e.find("li.is-visible"),
                        o = this.wallOptions.postInstructionDisplayDuration;
                    if (t.length) {
                        var a = n.next();
                        a.length || (a = e.find("li").first());
                        var r = (new i).do((function() {
                            e.addClass("post-instructions-hidden")
                        })).wait(450).do((function() {
                            n.removeClass("is-visible"), a.addClass("is-visible")
                        })).wait(500).do((function() {
                            e.removeClass("post-instructions-hidden")
                        }));
                        t.length > 1 && (r = r.wait(o).do(this.loopInstructions)), r.run()
                    }
                }
            }, {
                key: "getWallSocket",
                value: function() {
                    var e = this,
                        t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        n = {
                            wallId: this.wallOptions.wallId,
                            client: "wallsio-frontend",
                            initialCheckins: this.wallOptions.initialCheckins,
                            network: this.wallOptions.network
                        },
                        i = Object.assign(n, t);
                    _.each(i, (function(e, t) {
                        !0 === e && (i[t] = 1), !1 === e && (i[t] = 0)
                    }));
                    var a = $.param(i),
                        r = this.wallOptions.nodeUrl + "?" + a,
                        l = io(r, {
                            autoConnect: !this.wallOptions.startInStaticMode,
                            forceNew: !0,
                            reconnectionDelay: 100,
                            reconnectionDelayMax: 3e4,
                            timeout: 1e3,
                            transports: ["websocket"],
                            withCredentials: !0
                        });
                    return l.on("reload wall", (function() {
                        o.reloadWall(l)
                    })), l.on("wallping", (function(t) {
                        e.serverStartedAt || (e.serverStartedAt = t.serverStartedAt)
                    })), $(document).on("Wallsio.disconnectSocket", (function() {
                        var e = _.get(l, "_callbacks[$stop][0]");
                        "function" == typeof e && e()
                    })), l.isPollingEnabled = function() {
                        return "polling" === l.io.opts.transports[0]
                    }, l.on("connect_error", (function() {
                        return setTimeout((function() {
                            l.io.opts.transports = ["polling", "websocket"], l.io.opts.timeout = 2e4
                        }), 0)
                    })), l
                }
            }, {
                key: "initDynamicDisconnect",
                value: function(e) {
                    var t = this;
                    if (!this.wallOptions.startInStaticMode) {
                        $(document).on("visibilitychange", (function() {
                            "visible" === document.visibilityState ? (clearTimeout(t.disconnectTimeout), e.connected || (t.reconnectTimeout = setTimeout((function() {
                                e.connect(), l("socket-disconnected")
                            }), 1500))) : (clearTimeout(t.reconnectTimeout), e.connected && (t.disconnectTimeout = setTimeout((function() {
                                e.disconnect(), a("socket-disconnected")
                            }), 48e4)))
                        }))
                    }
                }
            }, {
                key: "loadCachedCheckins",
                value: function() {
                    return betterFetch.json(this.wallOptions.urls.cachedCheckins, {
                        count: this.wallOptions.initialCheckins,
                        wallId: this.wallOptions.wallId
                    }).then((function(e) {
                        return e.cachedCheckins
                    })).catch((function(e) {
                        return console.error(e), []
                    }))
                }
            }], [{
                key: "reloadWall",
                value: function(e) {
                    e.disconnect(), $(document).off("visibilitychange");
                    var t = Math.floor(500 + 6e4 * Math.random());
                    setTimeout((function() {
                        location.reload()
                    }), t)
                }
            }, {
                key: "humanTimeDiff",
                value: function(e) {
                    if ((e = Math.floor(e / 1e3)) < 5) return t("THIS_MOMENT");
                    if (e < 60) {
                        var i = Math.floor(e);
                        return n("A_SECOND_AGO", "%s_SECONDS_AGO", i, i)
                    }
                    if (e < 3600) {
                        var o = Math.floor(e / 60);
                        return n("A_MINUTE_AGO", "%s_MINUTES_AGO", o, o)
                    }
                    if (e < 86400) {
                        var a = Math.floor(e / 3600);
                        return n("AN_HOUR_AGO", "%s_HOURS_AGO", a, a)
                    }
                    if (e < 2592e3) {
                        var r = Math.floor(e / 86400);
                        return n("A_DAY_AGO", "%s_DAYS_AGO", r, r)
                    }
                    var l = Math.floor(e / 604800);
                    return n("A_WEEK_AGO", "%s_WEEKS_AGO", l, l)
                }
            }, {
                key: "forceSSL",
                value: function(e) {
                    return _.isString(e) ? e.replace(/^http:/i, "https:") : e
                }
            }, {
                key: "showNotificationBar",
                value: function(e) {
                    var t = e.markup,
                        n = e.autoshowhideInterval,
                        i = e.displayTimeout,
                        a = void 0 === i ? 4e3 : i,
                        r = $("<div>").append(t),
                        l = $(".wall-notifications"),
                        s = r.find(".wall-notification"),
                        c = r.find("link"),
                        u = !!r.find(".wall-notification-trial");
                    c.on("load", (function() {
                        if (l.append(s), setTimeout((function() {
                                s.addClass("wall-notification-visible"), n && setInterval((function() {
                                    s.toggleClass("wall-notification-visible")
                                }), n)
                            }), a), u) {
                            var e = document.getElementById("trial-banner-upgrade-btn");
                            e && o.trackMixpanelEvent(e, "click", "Upgrade Prompt Selected", {
                                upgradeLocation: "wall"
                            })
                        }
                    })), $("head").append(c)
                }
            }, {
                key: "trackMixpanelEvent",
                value: function(e, t, n) {
                    var i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
                    e && window.mixpanel && e.addEventListener(t, (function() {
                        window.mixpanel.track(n, i)
                    }))
                }
            }, {
                key: "getElementTypeClassPrefix",
                value: function(e) {
                    return "wrapper" === e ? "checkin-wrapper-" : "checkin" === e ? "checkin-" : (console.error('elementType should be "wrapper" or "checkin", "' + e + '" found'), "blah-")
                }
            }, {
                key: "getImageAndMessageClasses",
                value: function(e, t, n) {
                    var i = o.getElementTypeClassPrefix(e);
                    return t && n ? [i + "with-image", i + "with-message", i + "with-image-and-message"] : t ? [i + "with-image", i + "without-message"] : n ? [i + "with-message", i + "without-image"] : [i + "without-image-and-message", i + "without-message", i + "without-image"]
                }
            }, {
                key: "addImageAndMessageClasses",
                value: function(e, t, n, i) {
                    var a = o.getImageAndMessageClasses(t, n, i);
                    return e.addClass(a), e
                }
            }, {
                key: "isAppScrollable",
                value: function() {
                    return r("scrollable")
                }
            }, {
                key: "isPreviewIframe",
                value: function() {
                    return r("preview-iframe")
                }
            }, {
                key: "hasPreviewIframe",
                value: function() {
                    return window === parent && $(".wall-preview-iframe").length > 0
                }
            }, {
                key: "isIframe",
                value: function() {
                    try {
                        return window.self !== window.top && !o.isPreviewIframe()
                    } catch (e) {
                        return !0
                    }
                }
            }, {
                key: "isMobile",
                value: function() {
                    return r("mobile")
                }
            }, {
                key: "isAutoheight",
                value: function() {
                    return o.isIframe() && r("autoheight")
                }
            }, {
                key: "isWidget",
                value: function() {
                    return o.isIframe() && r("is-widget")
                }
            }, {
                key: "isInViewport",
                value: function(t) {
                    var n = t.getBoundingClientRect();
                    return n.bottom >= 0 && n.right >= 0 && n.top <= e.height() && n.left <= e.width()
                }
            }, {
                key: "getWallHeight",
                value: function() {
                    var e = document.body.scrollHeight;
                    return e - document.body.clientHeight > 1 ? Math.min(document.body.scrollHeight, document.body.clientHeight) : e
                }
            }, {
                key: "hideWallInfo",
                value: function() {
                    a("hide-wall-info")
                }
            }, {
                key: "showWallInfo",
                value: function(e) {
                    l("hide-wall-info"), $(".wall-info").removeClass("wall-info-loading").text(e)
                }
            }, {
                key: "updateTimestamps",
                value: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                    (t ? $(".checkin-" + t).find(".checkin-timestamp") : $(".checkin-timestamp")).each((function() {
                        var t = $(this).attr("data-timestamp");
                        if (t) {
                            var n = e || Date.now();
                            $(this).text(o.getRelativeTimeString(n, t))
                        }
                    }))
                }
            }, {
                key: "getRelativeTimeString",
                value: function(e, t) {
                    var n = e - t;
                    return o.humanTimeDiff(n)
                }
            }, {
                key: "getWindowMode",
                value: function() {
                    return e.width() > e.height() ? "landscape" : "portrait"
                }
            }, {
                key: "isLandscape",
                value: function() {
                    return "landscape" === o.getWindowMode()
                }
            }, {
                key: "isPortrait",
                value: function() {
                    return "portrait" === o.getWindowMode()
                }
            }]), o
        })();
    window.helpers.Wall = s
})();
"use strict";
var _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
    } : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    },
    _slicedToArray = (function() {
        return function(e, t) {
            if (Array.isArray(e)) return e;
            if (Symbol.iterator in Object(e)) return (function(e, t) {
                var r = [],
                    i = !0,
                    n = !1,
                    a = void 0;
                try {
                    for (var o, l = e[Symbol.iterator](); !(i = (o = l.next()).done) && (r.push(o.value), !t || r.length !== t); i = !0);
                } catch (e) {
                    n = !0, a = e
                } finally {
                    try {
                        !i && l.return && l.return()
                    } finally {
                        if (n) throw a
                    }
                }
                return r
            })(e, t);
            throw new TypeError("Invalid attempt to destructure non-iterable instance")
        }
    })(),
    _createClass = (function() {
        function e(e, t) {
            for (var r = 0; r < t.length; r++) {
                var i = t[r];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
            }
        }
        return function(t, r, i) {
            return r && e(t.prototype, r), i && e(t, i), t
        }
    })();

function _classCallCheck(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
}!(function() {
    var e = ["post_image", "external_image"],
        t = ["post_image", "external_image"],
        r = (function() {
            function r(e) {
                _classCallCheck(this, r), this.wallOptions = e, helpers.autoBind(this)
            }
            return _createClass(r, [{
                key: "makeUrlAbsolute",
                value: function(e) {
                    return r.isAbsoluteUrl(e) ? e : "https://dev.walls.io" + e
                }
            }, {
                key: "getSlimProxyUrl",
                value: function(e, t, i) {
                    var n = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
                        a = this.wallOptions.imageSlimproxyHost;
                    if (!a || !r.isAbsoluteUrl(e)) return e;
                    var o = {
                        src: e,
                        w: this.wallOptions.proxyImageWidth,
                        h: this.wallOptions.proxyImageHeight,
                        q: this.wallOptions.proxyImageQuality,
                        nu: 1,
                        salt: this.wallOptions.proxySalt
                    };
                    t && (o.key = t), this.wallOptions.proxyNoCache && (o.nc = 1), _.isPlainObject(i) && (o = Object.assign(o, i));
                    var l = n ? r.getDevicePixelRatio() : 1;
                    return o.w && (o.w = o.w * l), o.h && (o.h = o.h * l), e = a + "?" + $.param(o)
                }
            }, {
                key: "getImageProxyUrl",
                value: function(e, t, i) {
                    var n = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
                        a = this.wallOptions.imageProxyHost;
                    if (!a) return "";
                    var o = {
                        w: this.wallOptions.proxyImageWidth,
                        h: this.wallOptions.proxyImageHeight,
                        q: this.wallOptions.proxyImageQuality,
                        nu: 1
                    };
                    t && (o.key = t), this.wallOptions.proxyNoCache && (o.nc = 1), _.isPlainObject(i) && (o = Object.assign(o, i));
                    var l = n ? r.getDevicePixelRatio() : 1;
                    return o.w && (o.w = o.w * l), o.h && (o.h = o.h * l), a + e + "?" + $.param(o)
                }
            }, {
                key: "slimProxyImage",
                value: function(e, t, r) {
                    var i = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
                    return e = this.makeUrlAbsolute(e), e = this.getSlimProxyUrl(e, t, r, i), e = helpers.Wall.forceSSL(e)
                }
            }, {
                key: "prepareImages",
                value: function(t, r) {
                    var i = this,
                        n = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
                    return _.each(e, (function(e) {
                        if (t[e])
                            if (t[e + "_uuid"]) t[e] = i.getImageProxyUrl(t[e + "_uuid"]);
                            else {
                                var a = void 0,
                                    o = e + "_key",
                                    l = e + "_original";
                                t[l] ? t[e] = t[l] : t[l] = t[e], a = "external_image" === e ? Object.assign({}, r, {
                                    w: i.wallOptions.proxyProfileImageWidth,
                                    h: i.wallOptions.proxyProfileImageHeight
                                }) : r, t[e] = i.slimProxyImage(t[e], t[o], a, n)
                            }
                    })), t
                }
            }, {
                key: "getAspectRatio",
                value: function(e, t) {
                    var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                        i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
                        n = e[t + "_width"],
                        a = e[t + "_height"];
                    if (!1 === r.enableAspectRatioImages || !n || !a) return r.defaultPostImageAspectRatio;
                    var o = n / a;
                    return i ? o : o < r.minPostImageAspectRatio ? r.minPostImageAspectRatio : o > r.maxPostImageAspectRatio ? r.maxPostImageAspectRatio : o
                }
            }], [{
                key: "buildBase64Image",
                value: function(e) {
                    var t = "data:image/jpg;base64,";
                    if (e.indexOf("~") > -1) {
                        var r = e.split("~"),
                            i = _slicedToArray(r, 2);
                        return t + "/9j/4AAQSkZJRgABAQEAYABgAAD//gA7Q1JFQVRPUjogZ2QtanBlZyB2MS4wICh1c2luZyBJSkcgSlBFRyB2ODApLCBxdWFsaXR5ID0gNjAK/9sAQwANCQoLCggNCwoLDg4NDxMgFRMSEhMnHB4XIC4pMTAuKS0sMzpKPjM2RjcsLUBXQUZMTlJTUjI+WmFaUGBKUVJP/9sAQwEODg4TERMmFRUmTzUtNU9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09P/8AAEQgA" + i[0] + "AwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/aAAwDAQACEQMRAD8A" + i[1]
                    }
                    return t + e
                }
            }, {
                key: "preloadImage",
                value: function(e) {
                    return new Promise(function(t, r) {
                        if (e) {
                            var i = new Image;
                            try {
                                i.src = e, i.onerror = function() {
                                    return r()
                                }, i.onload = function() {
                                    return t()
                                }
                            } catch (e) {
                                r("invalid url")
                            }
                        } else r()
                    })
                }
            }, {
                key: "isAbsoluteUrl",
                value: function(e) {
                    return /^\w+:\/\//.test(e)
                }
            }, {
                key: "getDevicePixelRatio",
                value: function() {
                    return _.get(window, "devicePixelRatio", 1) >= 1.5 ? 2 : 1
                }
            }, {
                key: "preloadImages",
                value: function(e) {
                    var i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function() {},
                        n = function(t) {
                            var n = e[t];
                            if (!n) return i(e, t, !1), {
                                v: void 0
                            };
                            r.preloadImage(n).then((function() {
                                return i(t, !0)
                            })).catch((function() {
                                return i(t, !1)
                            }))
                        },
                        a = !0,
                        o = !1,
                        l = void 0;
                    try {
                        for (var s, u = t[Symbol.iterator](); !(a = (s = u.next()).done); a = !0) {
                            var A = n(s.value);
                            if ("object" === (void 0 === A ? "undefined" : _typeof(A))) return A.v
                        }
                    } catch (e) {
                        o = !0, l = e
                    } finally {
                        try {
                            !a && u.return && u.return()
                        } finally {
                            if (o) throw l
                        }
                    }
                }
            }, {
                key: "getTwoDominantColors",
                value: function(e) {
                    var t = e.post_image_dominant_colors;
                    if (!t) return null;
                    var r = t.split(",");
                    return r.length < 2 ? null : r.slice(0, 2)
                }
            }]), r
        })();
    helpers.Image = r
})();
"use strict";
helpers.sharing = (function() {
    var n = function(n) {
        var t = 400;
        return "twitter" === (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null) && (t = 260), window.open(n, "", "menubar=no,toolbar=no,resizable=yes,scrollbars=yes,width=555,height=" + t), !1
    };
    return {
        initSharingLinks: function() {
            $(document).on("click", helpers.actionSelector("share"), (function(t) {
                t.preventDefault();
                var e = $(this);
                n(e.attr("href"), e.attr("data-network"))
            }))
        },
        openSharingWindow: n
    }
})();
"use strict";
var _createClass = (function() {
    function e(e, i) {
        for (var t = 0; t < i.length; t++) {
            var o = i[t];
            o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
        }
    }
    return function(i, t, o) {
        return t && e(i.prototype, t), o && e(i, o), i
    }
})();

function _classCallCheck(e, i) {
    if (!(e instanceof i)) throw new TypeError("Cannot call a class as a function")
}!(function() {
    var e = 3,
        i = (function() {
            function i(t, o, n) {
                _classCallCheck(this, i);
                var a = !1 === Modernizr.videoautoplay,
                    s = Modernizr.isForcedModernizr;
                this.wasAutoplayDisabledManually = a && s, this.isVideoAutochangeActive = !this.wasAutoplayDisabledManually, this.changeVideoTimeout = null, this.wasAutoplayDisabledManually ? this.supportsAutomaticVideoPlayTriggering = !1 : this.supportsAutomaticVideoPlayTriggering = null, this.networksWithVideoEmbeds = t.networksWithVideoEmbeds, this.maxPlayingVideos = t.maxPlayingVideos || e, this.WallHelper = o, this.TemplatesHelper = n, helpers.autoBind(this)
            }
            return _createClass(i, [{
                key: "isAutoplaySupported",
                value: function() {
                    return !this.wasAutoplayDisabledManually && (!0 === Modernizr.videoautoplay || !0 === this.supportsAutomaticVideoPlayTriggering)
                }
            }, {
                key: "hasRealVideo",
                value: function(e) {
                    return !!e.post_video
                }
            }, {
                key: "checkinElementHasRealVideo",
                value: function(e) {
                    return !!e.data("video-url")
                }
            }, {
                key: "getVideoEmbedToken",
                value: function(e) {
                    return "facebook" === e.type ? encodeURIComponent(e.post_link) : e.post_id
                }
            }, {
                key: "getVideoEmbedElement",
                value: function(e) {
                    var i = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                        t = "embeds/" + e.type + "_video_embed";
                    return helpers.Templates.build(t, {
                        token: this.getVideoEmbedToken(e),
                        showControls: i
                    })
                }
            }, {
                key: "hasEmbeddedVideoSupport",
                value: function(e) {
                    var i = e.type,
                        t = this.networksWithVideoEmbeds[i];
                    if (!t) return !1;
                    var o = t.field,
                        n = new RegExp(t.regex),
                        a = e[o];
                    return !!a && n.test(a)
                }
            }, {
                key: "hasAnyVideo",
                value: function(e) {
                    return !!this.hasRealVideo(e) || this.hasEmbeddedVideoSupport(e)
                }
            }, {
                key: "setPlayClasses",
                value: function(e) {
                    e.closest(".video-wrapper").addClass("video-playing video-has-played"), e.closest(".checkin").addClass("checkin-with-video-playing")
                }
            }, {
                key: "setPauseClasses",
                value: function(e) {
                    e.closest(".video-wrapper").removeClass("video-playing"), e.closest(".checkin").removeClass("checkin-with-video-playing")
                }
            }, {
                key: "play",
                value: function(e) {
                    var i = this,
                        t = $(e).eq(0),
                        o = (e = t.get(0)).play();
                    o && o.then ? o.then((function() {
                        i.setPlayClasses(t), null === i.supportsAutomaticVideoPlayTriggering && (i.supportsAutomaticVideoPlayTriggering = !0)
                    })).catch((function(e) {
                        "NotSupportedError" === e.name && t.closest(".checkin").addClass("video-has-error"), "NotAllowedError" === e.name && (i.supportsAutomaticVideoPlayTriggering = !1)
                    })) : this.setPlayClasses(t)
                }
            }, {
                key: "pause",
                value: function(e) {
                    0 !== e.length && (e.get(0).pause(), this.setPauseClasses(e))
                }
            }, {
                key: "mute",
                value: function(e) {
                    var i = $(e).eq(0);
                    (e = i.get(0)).muted = !0, i.closest(".video-wrapper").addClass("video-muted")
                }
            }, {
                key: "unmute",
                value: function(e) {
                    var i = $(e).eq(0);
                    (e = i.get(0)).muted = !1, i.closest(".video-wrapper").removeClass("video-muted")
                }
            }, {
                key: "removeVideoClasses",
                value: function(e) {
                    var i = $(e).eq(0).closest(".video-wrapper");
                    i.removeClass("video-muted video-playing video-has-played"), i.closest(".checkin").removeClass("checkin-with-video checkin-with-video-playing video-has-error")
                }
            }, {
                key: "getVisibleVideoCheckins",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1 / 0,
                        i = $(".socialwall_container .checkin[data-video-url]:not(.video-has-error)").get();
                    return i = i.filter(this.WallHelper.isInViewport), i = _.shuffle(i), i = _.slice(i, 0, e), $(i)
                }
            }, {
                key: "muteAllOtherVideos",
                value: function(e) {
                    var i = this,
                        t = e.get(0);
                    $(".checkin-video").each((function(e, o) {
                        o !== t && i.mute(o)
                    }))
                }
            }, {
                key: "createVideo",
                value: function(e) {
                    if (e.hasClass("checkin-with-video")) return e.find(".video-wrapper");
                    if (!this.checkinElementHasRealVideo(e)) return null;
                    e.addClass("checkin-with-video");
                    var i = e.find(".checkin-image"),
                        t = e.find(".checkin-image-inner"),
                        o = e.data("video-url"),
                        n = $(this.TemplatesHelper.build("checkin_video", {
                            videoUrl: o
                        }));
                    return t.length > 0 ? n.prependTo(t) : n.prependTo(i), n
                }
            }, {
                key: "displayVideo",
                value: function(e) {
                    var i = this,
                        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        o = t.startMuted,
                        n = void 0 === o || o,
                        a = t.forcePlay,
                        s = void 0 !== a && a,
                        l = this.createVideo(e);
                    if (l) {
                        var r = l.find("video");
                        n ? this.mute(r) : this.unmute(r), s ? this.play(r) : Modernizr.on("videoautoplay", (function() {
                            (i.isAutoplaySupported() || null === i.supportsAutomaticVideoPlayTriggering) && i.play(r)
                        }))
                    }
                }
            }, {
                key: "destroyVideo",
                value: function(e) {
                    var i = this;
                    0 !== e.length && (this.pause(e), setTimeout((function() {
                        var t = e.get(0);
                        i.removeVideoClasses(t), e.closest(".video-wrapper").remove()
                    }), 0))
                }
            }, {
                key: "pauseAllOtherVideos",
                value: function(e) {
                    var i = this,
                        t = $(".socialwall_container").find(".checkin-with-video:not(.video-has-error)");
                    e && e.length && (t = t.filter((function(i, t) {
                        return !e.toArray().includes(t)
                    }))), t.each((function(e, t) {
                        var o = $(t).find(".checkin-video");
                        i.pause(o)
                    }))
                }
            }, {
                key: "removeAllVideos",
                value: function() {
                    var e = this;
                    $(".socialwall_container").find(".checkin-with-video .checkin-video").each((function(i, t) {
                        e.destroyVideo($(t))
                    }))
                }
            }, {
                key: "updateRunningVideos",
                value: function(e) {
                    var i = this;
                    this.pauseAllOtherVideos(e), e.each((function(e, t) {
                        i.displayVideo($(t))
                    }))
                }
            }, {
                key: "changeVideos",
                value: function() {
                    var e = this,
                        i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                    clearTimeout(this.changeVideoTimeout), this.changeVideoTimeout = setTimeout((function() {
                        if (e.isVideoAutochangeActive) {
                            var i = e.getVisibleVideoCheckins(e.maxPlayingVideos);
                            e.updateRunningVideos(i), 0 === i.length ? e.changeVideos(1e3) : e.changeVideos(15e3)
                        }
                    }), i)
                }
            }, {
                key: "setVideoAutochangeActive",
                value: function(e) {
                    this.isVideoAutochangeActive = e, !1 === e ? this.removeAllVideos() : this.changeVideos(0)
                }
            }, {
                key: "initVideo",
                value: function(e, i) {
                    this.hasRealVideo(e) && i.attr("data-video-url", e.post_video)
                }
            }, {
                key: "initChangeVideoOnScrollListener",
                value: function() {
                    var e = this,
                        i = $(window),
                        t = i.scrollTop();
                    i.on("scroll", _.throttle((function() {
                        var o = i.scrollTop();
                        Math.abs(o - t) < 150 || (e.changeVideos(), t = i.scrollTop())
                    }), 300))
                }
            }, {
                key: "isVideoSupportedByBrowser",
                value: function() {
                    return "play" in document.createElement("video")
                }
            }, {
                key: "initEventListeners",
                value: function() {
                    if (this.isVideoSupportedByBrowser()) {
                        var e = $(".socialwall_container, .detail-mount-point");
                        this.initMuteButton(e), this.initPlayButton(e), this.initChangeVideoOnScrollListener()
                    }
                }
            }, {
                key: "initPlayButton",
                value: function(e) {
                    var i = this;
                    e.on("click", ".video-play-button", (function() {
                        var e = $(this).closest(".checkin");
                        return !i.checkinElementHasRealVideo(e) || (i.displayVideo(e, {
                            forcePlay: !0
                        }), !1)
                    }))
                }
            }, {
                key: "initMuteButton",
                value: function(e) {
                    var i = this;
                    e.on("click", ".video-mute-button", (function() {
                        var e = $(this).closest(".video-wrapper"),
                            t = e.find("video");
                        return e.hasClass("video-muted") ? (i.unmute(t), i.muteAllOtherVideos(t)) : i.mute(t), !1
                    }))
                }
            }, {
                key: "init",
                value: function() {
                    this.initEventListeners(), this.changeVideos(2e3)
                }
            }]), i
        })();
    window.helpers.Video = i
})();
"use strict";
var _createClass = (function() {
    function e(e, t) {
        for (var n = 0; n < t.length; n++) {
            var a = t[n];
            a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
        }
    }
    return function(t, n, a) {
        return n && e(t.prototype, n), a && e(t, a), t
    }
})();

function _classCallCheck(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
}!(function() {
    var e = (function() {
        function e(t, n) {
            _classCallCheck(this, e), this.wallOptions = t, this.wallState = n, this.bottomAddedCheckinsCounter = 1, this.topAddedCheckinsCounter = 1, helpers.autoBind(this)
        }
        return _createClass(e, [{
            key: "isNewAdNeeded",
            value: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "top",
                    t = this.wallState.getSortedCheckinsData(),
                    n = this.wallOptions.adsFrequency,
                    a = Math.ceil(.15 * n);
                if ((n += _.random(-a, a), this.wallState.checkinsDataSize < n) && (!t.some((function(e) {
                        return "sponsored" === e.type
                    })) && "top" === e)) return !0;
                return !("top" === e ? t.take(n) : t.takeLast(n)).some((function(e) {
                    return "sponsored" === e.type
                }))
            }
        }, {
            key: "createCheckinDataFromAd",
            value: function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "top",
                    n = {};
                return n.id = e.id + "-" + Date.now(), n.originalId = e.id, n.latitude = e.latitude, n.longitude = e.longitude, n.post_id = e.id, n.post_image = e.image, n.post_image_height = e.image_height, n.post_image_width = e.image_width, n.post_image_key = e.image_key, n.post_image_dominant_colors = e.image_dominant_colors, n.post_link = e.link, n.post_video = e.video, n.comment = e.text, n.html_comment = e.text, n.external_fullname = e.user_name, n.external_image = e.user_image, n.external_image_key = e.user_image_key, n.type = "sponsored", n = new helpers.Image(this.wallOptions).prepareImages(n, {
                    q: 95
                }), helpers.Image.preloadImages(n), this.wallState && (n = this.prepareRankingData(n, t), n = "top" === t ? this.makeCheckinTopRanked(n) : this.makeCheckinTopRanked(n, !0)), n
            }
        }, {
            key: "getSortField",
            value: function() {
                return {
                    weight: "weight",
                    time: "external_created_timestamp",
                    addOrder: "addOrder"
                }[this.wallOptions.clientRankingMode]
            }
        }, {
            key: "addSortScoreToCheckin",
            value: function(e) {
                var t = this.getSortField(),
                    n = this.wallOptions.clientRankingMode;
                if (!t) return e.sortScore = 0, e;
                var a = e[t],
                    i = e.bonus || 0;
                return ["weight", "time"].includes(n) && (a += i), e.sortScore = a, e
            }
        }, {
            key: "makeCheckinTopRanked",
            value: function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    n = this.wallState.getSortedCheckinsData(),
                    a = void 0,
                    i = void 0,
                    r = void 0,
                    o = void 0;
                return (a = t ? n.last() : n.first()) && ("weight" === this.wallOptions.clientRankingMode ? (r = a.weight + a.bonus, o = e.weight) : "time" === this.wallOptions.clientRankingMode ? (r = a.external_created_timestamp + a.bonus, o = e.external_created_timestamp) : "addOrder" === this.wallOptions.clientRankingMode && (r = a.addOrder + a.bonus, o = e.addOrder), t ? i = r - o - 1 : (i = r - o + 1, i = Math.max(i, 0)), e.bonus = i), e = this.addSortScoreToCheckin(e)
            }
        }, {
            key: "prepareRankingData",
            value: function(e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                return e.bonus = e.bonus || 0, e.weight = e.weight || 0, e.external_created_timestamp = e.external_created_timestamp || 0, "top" === t ? (e.addOrder = this.topAddedCheckinsCounter, this.topAddedCheckinsCounter++) : "bottom" === t ? (e.addOrder = -1 * this.bottomAddedCheckinsCounter, this.bottomAddedCheckinsCounter++) : n && n.addOrder && (e.addOrder = n.addOrder), e = this.addSortScoreToCheckin(e)
            }
        }], [{
            key: "compare",
            value: function(e, t) {
                var n = [],
                    a = _.intersection(Object.keys(e), Object.keys(t));
                return _.each(a, (function(a) {
                    _.isEqual(e[a], t[a]) || n.push(a)
                })), n
            }
        }, {
            key: "hasUserData",
            value: function(e) {
                return !!["facebook", "instagram", "pinterest"].includes(e.type) || !!(e.external_name || e.external_fullname || e.external_image)
            }
        }, {
            key: "prepareComment",
            value: function(e, t) {
                if (!e.html_comment) return e;
                var n = e.comment,
                    a = e.html_comment,
                    i = t,
                    r = n.length;
                return a = helpers.truncateTransformedTextPrecise(a, i, r), e.truncated_html_comment = a, e
            }
        }]), e
    })();
    window.helpers.Checkins = e
})();
"use strict";
var _slicedToArray = (function() {
        return function(r, a) {
            if (Array.isArray(r)) return r;
            if (Symbol.iterator in Object(r)) return (function(r, a) {
                var t = [],
                    n = !0,
                    e = !1,
                    o = void 0;
                try {
                    for (var i, l = r[Symbol.iterator](); !(n = (i = l.next()).done) && (t.push(i.value), !a || t.length !== a); n = !0);
                } catch (r) {
                    e = !0, o = r
                } finally {
                    try {
                        !n && l.return && l.return()
                    } finally {
                        if (e) throw o
                    }
                }
                return t
            })(r, a);
            throw new TypeError("Invalid attempt to destructure non-iterable instance")
        }
    })(),
    _createClass = (function() {
        function r(r, a) {
            for (var t = 0; t < a.length; t++) {
                var n = a[t];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(r, n.key, n)
            }
        }
        return function(a, t, n) {
            return t && r(a.prototype, t), n && r(a, n), a
        }
    })();

function _classCallCheck(r, a) {
    if (!(r instanceof a)) throw new TypeError("Cannot call a class as a function")
}!(function() {
    var r = (function() {
        function r(a) {
            _classCallCheck(this, r), this.wallOptions = a, this.originalLocation = {
                hash: location.hash,
                host: location.host,
                hostname: location.hostname,
                href: location.href,
                origin: location.origin,
                pathname: location.pathname,
                port: location.port,
                protocol: location.protocol,
                search: location.search
            }
        }
        return _createClass(r, [{
            key: "getWallUrl",
            value: function() {
                var r = this.wallOptions.wallUrl;
                return this.originalLocation.search && (r += this.originalLocation.search), this.originalLocation.hash && (r += this.originalLocation.hash), r
            }
        }, {
            key: "getDetailUrl",
            value: function(r) {
                var a = this.wallOptions.wallUrl + "/p/" + r;
                return this.originalLocation.search && (a += this.originalLocation.search), this.originalLocation.hash && (a += this.originalLocation.hash), a
            }
        }, {
            key: "getCompactDetailUrl",
            value: function(r) {
                return this.wallOptions.urls.basePath + "s/" + r
            }
        }], [{
            key: "getQueryParamForUrl",
            value: function(r, a) {
                a = a.replace(/[\[\]]/g, "\\$&");
                var t = new RegExp("[?&]" + a + "(=([^&#]*)|&|#|$)").exec(r);
                return t ? t[2] ? decodeURIComponent(t[2].replace(/\+/g, " ")) : "" : null
            }
        }, {
            key: "getQueryParamForCurrentUrl",
            value: function(a) {
                return r.getQueryParamForUrl(window.location.href, a)
            }
        }, {
            key: "updateUrlQueryParam",
            value: function(a, t, n) {
                var e = t + "=" + n,
                    o = r.getQueryParamForUrl(a, t);
                if (null === o) {
                    var i = void 0,
                        l = a.split("?"),
                        c = _slicedToArray(l, 2),
                        u = c[0],
                        s = c[1];
                    return i = u + "?" + e, s && (i = i + "&" + s), i
                }
                var h = t + "=" + o;
                return a.replace(h, e)
            }
        }, {
            key: "updateQueryParamForCurrentUrl",
            value: function(a, t) {
                var n = window.location.href;
                window.location.href = r.updateUrlQueryParam(n, a, t)
            }
        }]), r
    })();
    window.helpers.Url = r
})();
"use strict";
var _createClass = (function() {
    function e(e, t) {
        for (var r = 0; r < t.length; r++) {
            var l = t[r];
            l.enumerable = l.enumerable || !1, l.configurable = !0, "value" in l && (l.writable = !0), Object.defineProperty(e, l.key, l)
        }
    }
    return function(t, r, l) {
        return r && e(t.prototype, r), l && e(t, l), t
    }
})();

function _classCallCheck(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
}!(function() {
    var e = (function() {
        function e(t) {
            _classCallCheck(this, e), this.urlHelper = new helpers.Url(t)
        }
        return _createClass(e, [{
            key: "setUrl",
            value: function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                // if (window.history.pushState) try {
                //     var r = this.urlHelper.getCompactDetailUrl(e);
                //     t ? window.history.replaceState({
                //         detail: e
                //     }, null, r) : window.history.pushState({
                //         detail: e
                //     }, null, r)
                // } catch (e) {
                //     console.error(e)
                // }
            }
        }, {
            key: "clearUrl",
            value: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                // if (window.history.pushState) try {
                //     var t = this.urlHelper.getWallUrl();
                //     e ? window.history.replaceState({
                //         detail: null
                //     }, null, t) : window.history.state && window.history.state.detail && window.history.pushState({
                //         detail: null
                //     }, null, t)
                // } catch (e) {
                //     console.error(e)
                // }
            }
        }]), e
    })();
    window.helpers.Route = e
})();
"use strict";
helpers.time = {
    cssDurationToMs: function(s) {
        var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
            t = s.match(/^\s*([0-9.]+)\s*(ms|s)\s*$/);
        if (!t) return r;
        var e = parseFloat(t[1]);
        return "s" === t[2] ? 1e3 * e : e
    }
};
"use strict";
!(function() {
    var e = helpers.Css,
        l = e.addRootClass,
        n = e.removeRootClass,
        s = $("body"),
        r = (screenfull.enabled && document.addEventListener(screenfull.raw.fullscreenchange, (function() {
            screenfull.isFullscreen ? (l("fullscreen"), scrollTo(0, 0)) : n("fullscreen")
        })), {
            enter: function() {
                screenfull.enabled && screenfull.request()
            },
            leave: function() {
                screenfull.enabled && screenfull.isFullscreen && screenfull.exit()
            },
            isSupported: function() {
                return screenfull.enabled
            },
            isFullscreen: function() {
                return screenfull.isFullscreen
            },
            getFullscreenChangeEventName: function() {
                return _.get(screenfull, "raw.fullscreenchange")
            }
        });
    screenfull.enabled && (l("fullscreen-support"), s.on("click", ".fullscreen-toggle", (function() {
        screenfull.isFullscreen ? r.leave() : r.enter()
    }))), window.WallsioFullscreen = r
})();
"use strict";
var _createClass = (function() {
    function t(t, e) {
        for (var a = 0; a < e.length; a++) {
            var i = e[a];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
        }
    }
    return function(e, a, i) {
        return a && t(e.prototype, a), i && t(e, i), e
    }
})();

function _classCallCheck(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
}!(function() {
    var t = (function() {
        function t(e, a, i) {
            _classCallCheck(this, t), this._stack = Immutable.List(), this._checkinsData = Immutable.Map(), this._sortedCheckinsData = Immutable.List(), this._newCheckinSortScoreThreshold = -1 / 0, this.wallOptions = e, this.isAppScrollable = a, this.getTilesLimit = i, this.initAdsData(), helpers.autoBind(this)
        }
        return _createClass(t, [{
            key: "initAdsData",
            value: function() {
                this.wallOptions && this.wallOptions.ads || (this._adsData = Immutable.List()), this._adsData = Immutable.List(this.wallOptions.ads)
            }
        }, {
            key: "getRandomAd",
            value: function() {
                if (0 === this.adCount) return null;
                var t = _.random(this.adCount - 1);
                return this._adsData.get(t)
            }
        }, {
            key: "updateAdData",
            value: function(t) {
                var e = parseInt(t.id, 10),
                    a = !1;
                this._adsData = this._adsData.map((function(i) {
                    return parseInt(i.id, 10) !== e ? i : (a = !0, t)
                })), a || (this._adsData = this._adsData.push(t))
            }
        }, {
            key: "removeAdData",
            value: function(t) {
                t = parseInt(t, 10), this._adsData = this._adsData.filter((function(e) {
                    return parseInt(e.id, 10) !== t
                }))
            }
        }, {
            key: "addToStack",
            value: function(t) {
                this._stack.find((function(e) {
                    return e.id === t.id
                })) || (this._stack = this._stack.push(t))
            }
        }, {
            key: "shiftStack",
            value: function() {
                var t = this._stack.first();
                return this._stack = this._stack.shift(), t
            }
        }, {
            key: "filterStack",
            value: function(t) {
                this._stack = this._stack.filter(t)
            }
        }, {
            key: "truncateStack",
            value: function(t) {
                this._stack = this._stack.takeLast(t)
            }
        }, {
            key: "truncateCheckinData",
            value: function(t) {
                var e = this.getSortedCheckinsData().slice(t);
                if (0 !== e.size) {
                    var a = e.map((function(t) {
                        return t.id
                    }));
                    this.removeCheckinData(a.toArray())
                }
            }
        }, {
            key: "isStackEmpty",
            value: function() {
                return 0 === this.stackSize
            }
        }, {
            key: "isCheckinsDataEmpty",
            value: function() {
                return 0 === this.checkinsDataSize
            }
        }, {
            key: "getCheckinData",
            value: function(e) {
                e = t.normalizeCheckinId(e);
                return this._checkinsData.get(e, null)
            }
        }, {
            key: "hasCheckin",
            value: function(e) {
                return e = t.normalizeCheckinId(e), this._checkinsData.has(e)
            }
        }, {
            key: "setCheckinData",
            value: function(e, a) {
                e = t.normalizeCheckinId(e), this._checkinsData = this._checkinsData.set(e, a), this.updateSortedCheckinsData()
            }
        }, {
            key: "setCheckinField",
            value: function(t, e, a) {
                var i = this.getCheckinData(t);
                if (i) {
                    var n = Object.assign({}, i);
                    n[e] = a, this.setCheckinData(t, n)
                }
            }
        }, {
            key: "removeCheckinData",
            value: function(e) {
                _.isArray(e) || (e = [e]), e = _.map(e, t.normalizeCheckinId), this._checkinsData = this._checkinsData.deleteAll(e), this.updateSortedCheckinsData()
            }
        }, {
            key: "getAllCheckinsData",
            value: function() {
                return this._checkinsData
            }
        }, {
            key: "getSortedCheckinsData",
            value: function() {
                return this._sortedCheckinsData
            }
        }, {
            key: "getCheckinIds",
            value: function() {
                return this._checkinsData.keySeq().toList()
            }
        }, {
            key: "updateSortedCheckinsData",
            value: function() {
                var t = this._checkinsData.toList(),
                    e = !0,
                    a = !1,
                    i = void 0;
                try {
                    for (var n, s = this.checkinsDataSortFunctions[Symbol.iterator](); !(e = (n = s.next()).done); e = !0) {
                        var r = n.value;
                        t = t.sortBy(r)
                    }
                } catch (t) {
                    a = !0, i = t
                } finally {
                    try {
                        !e && s.return && s.return()
                    } finally {
                        if (a) throw i
                    }
                }
                this._sortedCheckinsData = t, this.updateNewCheckinSortScoreThreshold()
            }
        }, {
            key: "updateNewCheckinSortScoreThreshold",
            value: function() {
                if (!this.isAppScrollable) return !1;
                var t = this.getTilesLimit(this.wallOptions, !0),
                    e = Math.round(t / 2);
                if (this._sortedCheckinsData.size < e) return !1;
                var a = e - 1,
                    i = this._sortedCheckinsData.get(a);
                if (!i || !i.sortScore) return !1;
                this._newCheckinSortScoreThreshold = i.sortScore
            }
        }, {
            key: "getSponsoredPostInstances",
            value: function(t) {
                return t = parseInt(t, 10), this.getAllCheckinsData().filter((function(e) {
                    return "sponsored" === e.type && parseInt(e.originalId, 10) === t
                }))
            }
        }, {
            key: "adCount",
            get: function() {
                return this._adsData.size
            }
        }, {
            key: "stackSize",
            get: function() {
                return this._stack.size
            }
        }, {
            key: "checkinsDataSize",
            get: function() {
                return this._sortedCheckinsData.size
            }
        }, {
            key: "newCheckinSortScoreThreshold",
            get: function() {
                return this._newCheckinSortScoreThreshold
            }
        }, {
            key: "checkinsDataSortFunctions",
            get: function() {
                var t = [];
                return t.push((function(t) {
                    return -1 * t.sortScore
                })), t
            }
        }], [{
            key: "normalizeCheckinId",
            value: function(t) {
                return t.toString()
            }
        }]), t
    })();
    window.WallState = t
})();
"use strict";
var _createClass = (function() {
    function t(t, e) {
        for (var n = 0; n < e.length; n++) {
            var i = e[n];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
        }
    }
    return function(e, n, i) {
        return n && t(e.prototype, n), i && t(e, i), e
    }
})();

function _classCallCheck(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
}!(function() {
    var t = (function() {
        function t(e) {
            _classCallCheck(this, t), this.helpers = e, this.history = new Immutable.Map, e.autoBind(this), setInterval(this.cleanup, 6e4)
        }
        return _createClass(t, [{
            key: "getCountInLastMinute",
            value: function() {
                var t = this.helpers.getUnixTimestamp();
                return this.history.reduce((function(e, n, i) {
                    return i >= t - 60 ? e + n : e
                }), 0)
            }
        }, {
            key: "track",
            value: function() {
                var t = this.helpers.getUnixTimestamp(),
                    e = this.history.get(t, 0);
                e++, this.history = this.history.set(t, e)
            }
        }, {
            key: "cleanup",
            value: function() {
                var t = this.helpers.getUnixTimestamp() - 120;
                this.history = this.history.filter((function(e, n) {
                    return n > t
                }))
            }
        }]), t
    })();
    window.WallCheckinsPerSecondHistory = t
})();
"use strict";
var _createClass = (function() {
    function t(t, o) {
        for (var i = 0; i < o.length; i++) {
            var n = o[i];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
        }
    }
    return function(o, i, n) {
        return i && t(o.prototype, i), n && t(o, n), o
    }
})();

function _classCallCheck(t, o) {
    if (!(t instanceof o)) throw new TypeError("Cannot call a class as a function")
}!(function() {
    var t = $(window),
        o = $(document),
        i = $("body"),
        n = function() {
            return window.performance && window.performance.now ? window.performance.now() : Date.now()
        },
        e = (function() {
            function e() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    o = t.bottomRegionHeight,
                    i = t.topRegionHeight;
                _classCallCheck(this, e), this.bottomRegionHeight = o, this.topRegionHeight = i, this.lastScrollPosition = 0, helpers.autoBind(this)
            }
            return _createClass(e, [{
                key: "isIosIframeAntigrowHackActive",
                value: function() {
                    return $("html.iOs.iframe:not(.autoheight),html.iOs.preview-iframe:not(.autoheight)").length > 0
                }
            }, {
                key: "scrollToPosition",
                value: function(t) {
                    this.$scrollContainer.scrollTop(t)
                }
            }, {
                key: "getScrollPosition",
                value: function() {
                    var t = this.$scrollContainer.scrollTop();
                    return 0 === t && this.isIosIframeAntigrowHackActive() ? -1 * $(".socialwall_container").position().top : t
                }
            }, {
                key: "getDocumentHeight",
                value: function() {
                    return this.isIosIframeAntigrowHackActive() ? Math.round($(".socialwall_container").outerHeight(!0)) : o.height()
                }
            }, {
                key: "smoothScroll",
                value: function() {
                    var t = this,
                        o = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                        i = void 0,
                        e = new Promise(function(t) {
                            i = t
                        }),
                        r = this.getScrollPosition(),
                        l = o - r,
                        s = (function(t) {
                            if (!t) return 0;
                            var o = Math.abs(t / 3);
                            return _.clamp(o, 200, 1e3)
                        })(l),
                        c = n();
                    return requestAnimationFrame((function i() {
                        var e = (n() - c) / s,
                            a = (function(t) {
                                return (1 - Math.cos(Math.PI * t)) / 2
                            })(e),
                            u = r + a * l;
                        e < 1 ? (t.scrollToPosition(u), requestAnimationFrame(i)) : t.scrollToPosition(o)
                    })), setTimeout((function() {
                        t.scrollToPosition(o), i()
                    }), s), e
                }
            }, {
                key: "isCurrentScrollPositionInTopRegion",
                value: function() {
                    return this.getScrollPosition() <= this.topRegionHeight
                }
            }, {
                key: "wasLastScrollPositionInTopRegion",
                value: function() {
                    return this.lastScrollPosition <= this.topRegionHeight
                }
            }, {
                key: "isCurrentScrollPositionInBottomRegion",
                value: function() {
                    return this.getScrollPosition() + t.height() >= this.getDocumentHeight() - this.bottomRegionHeight
                }
            }, {
                key: "isCurrentScrollPositionAbsoluteBottom",
                value: function() {
                    return this.getScrollPosition() + t.height() >= this.getDocumentHeight() - 1
                }
            }, {
                key: "wasLastScrollPositionInBottomRegion",
                value: function() {
                    var o = t.height(),
                        i = this.getDocumentHeight() - this.bottomRegionHeight;
                    return this.lastScrollPosition + o >= i
                }
            }, {
                key: "hasScrolledIntoBottom",
                value: function() {
                    return !!this.isCurrentScrollPositionInBottomRegion() && (!!this.isCurrentScrollPositionAbsoluteBottom() || !this.wasLastScrollPositionInBottomRegion())
                }
            }, {
                key: "hasScrolledIntoTop",
                value: function() {
                    return !!this.isCurrentScrollPositionInTopRegion() && !this.wasLastScrollPositionInTopRegion()
                }
            }, {
                key: "fireCustomScrollEvents",
                value: function() {
                    var t = this.getScrollPosition();
                    t > this.lastScrollPosition ? (o.trigger("wall.scrollDown"), this.hasScrolledIntoBottom() && o.trigger("wall.scrollIntoBottom")) : (o.trigger("wall.scrollUp"), this.hasScrolledIntoTop() && o.trigger("wall.scrollIntoTop")), this.lastScrollPosition = t
                }
            }, {
                key: "initScrollEvents",
                value: function() {
                    var t = this;
                    this.$scrollContainer.on("scroll", _.throttle((function() {
                        t.fireCustomScrollEvents()
                    }), 150))
                }
            }, {
                key: "$scrollContainer",
                get: function() {
                    return this.isIosIframeAntigrowHackActive() ? i : t
                }
            }]), e
        })();
    window.WallScrolling = e
})();
"use strict";
!(function(e) {
    var n = helpers.Css,
        t = n.addRootClass,
        i = n.changeRootClass,
        o = n.removeRootClass,
        r = n.setWallInitializedClasses,
        a = void 0,
        l = void 0,
        s = void 0,
        c = void 0,
        d = void 0,
        h = void 0,
        u = helpers.translation,
        p = helpers.sharing,
        f = new WallCheckinsPerSecondHistory(helpers),
        m = {},
        g = e(window),
        v = e(document),
        k = void 0,
        C = !0,
        w = function() {
            var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
            C = !!e
        },
        I = function() {
            return C
        },
        S = function(e) {
            return function() {
                console.error("The method " + e + " must be overridden!")
            }
        };
    Object.assign(m, {
        messages: {},
        defaults: {
            additionalCheckins: null,
            ads: [],
            adsFrequency: null,
            animation: !0,
            container: "",
            displayNextCheckInterval: 100,
            network: null,
            postInstructionDisplayDuration: 7500,
            imageSlimproxyHost: null,
            proxyImageHeight: 250,
            proxyImageQuality: 85,
            proxyImageWidth: 300,
            proxyNoCache: !1,
            proxyProfileImageHeight: 100,
            proxyProfileImageWidth: 100,
            proxySalt: "",
            rankingMode: "time",
            revealInterval: 3e3,
            shareOriginalUrl: !0,
            wallId: 0
        },
        themeParams: {
            domUpdateTriggers: ["comment", "cta", "entities", "external_created_timestamp", "external_fullname", "external_image", "external_name", "external_user_id", "is_highlighted", "post_image", "post_image_height", "post_image_width", "post_link", "tags"],
            ignoreProxyImageHeight: !1,
            initVideoEvents: !0,
            maxCommentLength: 160
        },
        methods: {
            countTilesAboveTheFold: function() {
                var n = 0,
                    t = g.height(),
                    i = m.getSortedCheckinsData(),
                    o = !0,
                    r = !1,
                    a = void 0;
                try {
                    for (var l, s = i[Symbol.iterator](); !(o = (l = s.next()).done); o = !0) {
                        var c = l.value,
                            d = e(".checkin-wrapper-" + c.id);
                        if (0 !== d.length) {
                            if (d.offset().top > t) break;
                            n += 1
                        }
                    }
                } catch (e) {
                    r = !0, a = e
                } finally {
                    try {
                        !o && s.return && s.return()
                    } finally {
                        if (r) throw a
                    }
                }
                return n
            },
            domPrependCheckins: function(e, n) {
                e.prepend(n)
            },
            domAppendCheckins: function(e, n) {
                e.append(n)
            },
            domRemoveCheckins: function(e, n) {
                n.remove()
            },
            domCreateCheckin: S("domCreateCheckin"),
            domReplaceCheckin: function(e, n, t, i) {
                var o = m.methods.domCreateCheckin(t, i);
                if (!o) return !1;
                n.replaceWith(o.find(".checkin"))
            },
            getTilesLimit: function() {
                return S("getTilesLimit")
            },
            getSupportedRankingMode: function(e) {
                return e
            },
            isDetailViewSupported: function() {
                return !0
            },
            getNumberOfInitialCheckins: function() {
                return 30
            },
            getNumberOfCheckinsToFillScreen: function() {
                return 30
            },
            getBottomRegionHeight: function() {
                return 600
            },
            initTheme: S("initTheme"),
            setCheckinTransitionMode: function() {}
        }
    }), m.create = function(n) {
        m.defaults.initialCheckins = m.methods.getNumberOfInitialCheckins(), n.initialCheckins && !isNaN(n.initialCheckins) || delete n.initialCheckins;
        var C = e.extend({}, m.defaults, n);
        C.$container = e(".socialwall_container"), C.serverRankingMode = C.rankingMode, C.clientRankingMode = m.methods.getSupportedRankingMode(C.rankingMode);
        var S = null;
        C.network && (S = C.network), h = new helpers.Wall(C);
        var y = new WallState(C, helpers.Wall.isAppScrollable(), m.methods.getTilesLimit);
        a = new helpers.Checkins(C, y), l = new helpers.Image(C), s = new helpers.Route(C), c = new helpers.Url(C), d = new helpers.Video(C, helpers.Wall, helpers.Templates), new helpers.Tracking(C).recordPageview();
        var T = new WallScrolling({
                bottomRegionHeight: 600,
                topRegionHeight: 300
            }),
            W = null,
            D = void 0,
            b = !1,
            x = null,
            P = null,
            A = !0,
            F = !1,
            O = function() {};
        if (window.WallsioDetailView) {
            var R = e(".detail-mount-point");
            O = new window.WallsioDetailView(R, C, d, l)
        }
        var E, M = function(e) {
                return C[e] || null
            },
            N = function(e, n) {
                return void 0 !== C[e] && (C[e] = n, !0)
            },
            U = helpers.actionSelector,
            H = function() {
                return m.methods.isDetailViewSupported()
            },
            L = function(e) {
                D = e, i("load-more-disabled", !e)
            },
            z = function() {
                x = Date.now()
            },
            V = function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                return m.methods.getTilesLimit(C, e)
            },
            $ = function() {
                return b ? (e = 6e4 / C.revealInterval, f.getCountInLastMinute() > e ? 10 : V(!0)) : 1 / 0;
                var e
            },
            q = function(e, n) {
                y.isCheckinsDataEmpty() && helpers.Wall.hideWallInfo(), y.setCheckinData(e, n)
            },
            Q = function() {
                var n = helpers.integer.ceilTo,
                    t = m.defaults.proxyImageWidth,
                    i = m.defaults.proxyImageHeight,
                    o = e(".checkin").eq(0),
                    r = Math.max(o.outerWidth(), t);
                r = n(r, 50);
                var a = void 0;
                a = m.themeParams.ignoreProxyImageHeight ? null : n(a = Math.max(o.outerHeight(), i), 50), N("proxyImageWidth", r), N("proxyImageHeight", a)
            },
            j = function(e) {
                var n = C.maxCommentLength || m.themeParams.maxCommentLength;
                return helpers.Checkins.prepareComment(e, n)
            },
            B = function(e, n, t) {
                return e.isPrepared ? e : (e = a.prepareRankingData(e, n, t), e = l.prepareImages(e), e = h.prepareVideo(e), e = (function(e) {
                    return e.detailUrl = c.getDetailUrl(helpers.slug.fromId(e.id)), e.compactDetailUrl = c.getCompactDetailUrl(helpers.slug.fromId(e.id)), e
                })(e = h.prepareEntities(e)), (e = j(e)).isPrepared = !0, helpers.Image.preloadImages(e), e)
            },
            G = function(e) {
                S && S !== e.type || (q(e.id, e), y.addToStack(e), b && f.track(), y.truncateStack($()))
            },
            J = function(e) {
                return _.intersection(e, m.themeParams.domUpdateTriggers).length > 0
            },
            K = function(e) {
                var n, t;
                return _.intersection(e, (n = ["sortScore"], (t = a.getSortField()) && n.push(t), n)).length > 0
            },
            X = function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "top";
                return C.adsFrequency && 0 !== y.adCount ? a.isNewAdNeeded(e) ? (function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "top",
                        n = y.getRandomAd();
                    if (!n) return null;
                    var t = a.createCheckinDataFromAd(n, e);
                    return t = j(t), "top" === e ? G(t) : q(t.id, t), t
                })(e) : void 0 : null
            },
            Y = function(n) {
                _.isArray(n) || (n = [n]);
                var t = e();
                e(".checkin-wrapper").filter(".is-protected").each((function(t, i) {
                    n = _.without(n, e(i).attr("data-id"))
                })), _.each(n, (function(n) {
                    t = t.add(e(".socialwall_container").find(".checkin-wrapper-" + n))
                })), y.removeCheckinData(n), m.methods.domRemoveCheckins(C.$container, t)
            },
            Z = function() {
                var n = e(".checkin").length,
                    t = y.checkinsDataSize;
                return Math.min(n, t)
            },
            ee = function(e) {
                var n, t, i = Z();
                return !(i <= e) && (n = i - e, t = y.getSortedCheckinsData().takeLast(n).map((function(e) {
                    return e.id
                })).toArray(), Y(t), !0)
            },
            ne = function() {
                var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
                y.isStackEmpty() || (A ? (function(n) {
                    for (var t = e("<div>"), i = [], o = function(e) {
                            var n = y.shiftStack();
                            if (!n) return "break";
                            var o = m.methods.domCreateCheckin(n, C);
                            if (!o) return "break";
                            t.prepend(o), i.push(n.id), C.animation ? setTimeout((function() {
                                return o.addClass("is-visible")
                            }), 50) : o.css("display", "block")
                        }, r = 0; r < n && "break" !== o(); r++);
                    m.methods.domPrependCheckins(C.$container, t.contents()), _.each(i, (function(e) {
                        helpers.Wall.updateTimestamps(W, e)
                    })), T.isCurrentScrollPositionInTopRegion() && ee(V()), i.length > 0 && z()
                })(n) : n > 0 && t("new-checkins-notification-visible"))
            },
            te = function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
                if (k.connected && D) {
                    e || (e = m.methods.getNumberOfCheckinsToFillScreen(), helpers.Wall.isAutoheight() && (e = Math.min(e, 30)));
                    var n = {
                            count: e,
                            network: S
                        },
                        t = y.getSortedCheckinsData(),
                        i = (t = t.filter((function(e) {
                            return "sponsored" !== e.type
                        }))).last();
                    if (i) {
                        var o = void 0;
                        o = "weight" === C.serverRankingMode ? "weight" : "external_created_timestamp", n.olderThan = i[o], n.ignoreId = i.id
                    }
                    k.emit("request older checkins", n)
                }
            },
            ie = function(e) {
                var n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                H() && (!(function(e, n) {
                    var t = y.getCheckinData(e);
                    t ? n(t) : k.emit("get single checkin", e, n)
                })(helpers.slug.toId(e), (function(e) {
                    if (!_.get(e, "id")) return !1;
                    e = B(e), e = l.prepareImages(e, {
                        w: null,
                        h: null
                    }), O.mount(e, n)
                })), g.on("resize", O.resizeQuickThrottled))
            },
            oe = function() {
                o("show-detail"), o("show-detail-loading"), helpers.Event.triggerEvent("wallsio-detail-view-closed"), g.off("resize", O.resizeQuickThrottled);
                var n = e(".detail-inner").children();
                d.setVideoAutochangeActive(!0), setTimeout((function() {
                    n.remove()
                }), 300)
            },
            re = function(e) {
                var n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                if (H()) {
                    if (helpers.Wall.isWidget()) {
                        t("show-iframe-detail-overlay");
                        var i = {
                                lang: m.getOption("locale")
                            },
                            o = m.getOption("token");
                        return o && (i.token = o), void PostmessageApi.sendPostMessage("Wallsio.showWidgetDetail", e, m.getOption("wallUrl"), i)
                    }(function(e) {
                        return !(!e || !WallsioFullscreen.isSupported() || !helpers.Wall.isIframe() || WallsioFullscreen.isFullscreen())
                    })(n) && (WallsioFullscreen.enter(), F = !0), ie(e, n);
                    var r = !n;
                    s.setUrl(e, r)
                }
            },
            ae = function() {
                H() && (F && (WallsioFullscreen.leave(), F = !1), oe(), s.clearUrl(!1))
            },
            le = function() {
                b = !0, helpers.Tracking.trackGaTiming("wallinit", "Wall", "init"), v.trigger("wall.init"), r(), helpers.Event.triggerEvent("wallsio-wall-initialized")
            },
            se = function() {
                if (!F) {
                    var e = Z(),
                        n = m.methods.getNumberOfCheckinsToFillScreen();
                    if (n > e) te(n - e)
                }
            },
            ce = function(e) {
                return !(y.checkinsDataSize >= C.initialCheckins) || !(e.sortScore < y.newCheckinSortScoreThreshold) && ("addOrder" !== C.clientRankingMode || !(function(e) {
                    var n = y.getSortedCheckinsData().first();
                    return !!n && n.external_created_timestamp - e.external_created_timestamp > 6048e5
                })(e))
            },
            de = function(e) {
                return S ? e.filter((function(e) {
                    return e.type === S
                })) : e
            },
            he = function(n) {
                if (b || P || (P = setInterval((function() {
                        Date.now() - x > C.revealInterval && ne(1)
                    }), C.displayNextCheckInterval)), (n = de(n)) && n.length > 0 || b) n.reverse(), _.each(n, (function(e) {
                    y.hasCheckin(e.id) || (e = B(e, "top"), ce(e) && (G(e), X()))
                })), b || (ne(y.stackSize), setTimeout((function() {
                    le(), setTimeout((function() {
                        e(".wall-info").removeClass("wall-info-loading"), e(".loading-indicator").remove()
                    }), 500)
                }), 0), C.detailCheckinHash && re(C.detailCheckinHash, !1));
                else {
                    le();
                    var t = u.__("NO_POSTS_FOUND");
                    setTimeout((function() {
                        return helpers.Wall.showWallInfo(t)
                    }), 300)
                }
            },
            ue = function(n) {
                m.methods.setCheckinTransitionMode("initial");
                var t = e("<div>");
                n = de(n), _.each(n, (function(e) {
                    if (!y.hasCheckin(e.id)) {
                        e = B(e, "bottom"), q(e.id, e);
                        var n = m.methods.domCreateCheckin(e, C);
                        if (n) {
                            t.append(n.addClass("is-visible"));
                            var i = X("bottom");
                            if (i) {
                                var o = m.methods.domCreateCheckin(i, C);
                                t.append(o.addClass("is-visible"))
                            }
                        }
                    }
                })), m.methods.domAppendCheckins(C.$container, t.contents()), z(), m.methods.setCheckinTransitionMode("normal"), helpers.Wall.updateTimestamps(W)
            },
            pe = function() {
                h.loadCachedCheckins().then((function(e) {
                    e && (C.initialCheckins && (e = e.slice(0, C.initialCheckins)), he(e))
                }))
            },
            fe = function() {
                y.isCheckinsDataEmpty() && pe()
            },
            me = function() {
                clearInterval(P), k.disconnect()
            },
            ge = function() {
                (A = T.isCurrentScrollPositionInTopRegion()) && o("new-checkins-notification-visible")
            },
            ve = function(e) {
                if (e !== S) {
                    window.scrollTo(0, 0), S = e;
                    var n = y.getAllCheckinsData().filter((function(n) {
                        return n.type !== e
                    })).map((function(e) {
                        return e.id
                    })).toArray();
                    L(!0), Y(n), y.filterStack((function(e) {
                        return e.type === S
                    })), se()
                }
            },
            ke = function() {
                S && (window.scrollTo(0, 0), S = null, helpers.Wall.hasPreviewIframe() ? PostmessageApi.triggerEventInPreview("wall.removeFilter") : (ee(0), L(!0), se()))
            },
            Ce = function() {
                (k = h.getWallSocket()).on("wallping", (function(e) {
                    W = e.serverTime
                })), k.on("new checkins", he), k.on("old checkins", ue), k.on("no more old checkins", (function() {
                    if (helpers.Wall.isIframe() && PostmessageApi.sendPostMessage("Wallsio.triggerDomEvent", "WallsioNoMorePosts"), L(!1), y.isCheckinsDataEmpty() && S) {
                        var e = u.__("NO_POSTS_FOUND");
                        helpers.Wall.showWallInfo(e)
                    }
                })), k.on("looped post", (function(e) {
                    e && (Y(e.id), (e = a.makeCheckinTopRanked(e)).isLooped = !0, e = B(e, "top"), G(e), X())
                })), k.on("removed checkins", (function(e) {
                    e = _.map(e, WallState.normalizeCheckinId);
                    var n = y.getCheckinIds().toArray(),
                        t = _.intersection(n, e);
                    _.each(t, (function(e) {
                        Y(e)
                    }))
                })), k.on("update checkin data", (function(n) {
                    return !!n.id && (y.hasCheckin(n.id) ? (function(n) {
                        var t = n.id,
                            i = e(".socialwall_container").find(".checkin-" + t);
                        if (0 === i.length) return !1;
                        var o = y.getCheckinData(t);
                        if (!o) return !1;
                        n = B(n, "replace", o);
                        var r = helpers.Checkins.compare(o, n);
                        0 !== r.length && (q(t, n), J(r) ? (m.methods.domReplaceCheckin(C.$container, i, n, C), helpers.Wall.updateTimestamps(W, n.id)) : K(r) && v.trigger("wall.sortUpdateNeeded", [C]))
                    }(n), !0) : "weight" === C.clientRankingMode && ((n = a.addSortScoreToCheckin(n)).sortScore > y.newCheckinSortScoreThreshold && (he([n]), !0)))
                })), k.on("update sponsored post", (function(n) {
                    y.updateAdData(n);
                    var t = parseInt(n.id, 10);
                    y.getSponsoredPostInstances(t).toArray().forEach((function(t) {
                        var i = a.createCheckinDataFromAd(n);
                        (i = j(i)).id = t.id, i.addOrder = t.addOrder, i.bonus = t.bonus, i.sortScore = t.sortScore, (function(n) {
                            var t = n.id,
                                i = e(".socialwall_container").find(".checkin-" + t);
                            if (0 === i.length) return !1;
                            var o = y.getCheckinData(t);
                            if (!o) return !1;
                            var r = helpers.Checkins.compare(o, n);
                            0 !== r.length && (q(t, n), J(r) && m.methods.domReplaceCheckin(C.$container, i, n, C))
                        })(i)
                    }))
                })), k.on("remove sponsored post", (function(e) {
                    e = parseInt(e, 10), y.removeAdData(e);
                    var n = y.getSponsoredPostInstances(e).map((function(e) {
                        return e.id
                    })).toArray();
                    Y(n)
                })), k.on("stop", me), k.on("connect_error", (function() {
                    return k.isPollingEnabled() && fe()
                })), k.on("subscribe error", fe), h.initDynamicDisconnect(k)
            };
        E = e("<div>").addClass("checkin-wrapper is-visible is-visible-solo"), e("<div>").addClass("checkin").appendTo(E), E.appendTo(".socialwall_container"), Q(), E.remove(), (function() {
            if (Object.assign(m, {
                    isAutofillEnabled: I,
                    setAutofillEnabled: w,
                    getOption: M,
                    setOption: N,
                    getSortedCheckinsData: y.getSortedCheckinsData,
                    getCheckinData: y.getCheckinData,
                    requestOlderCheckins: te,
                    applyFilter: ve,
                    removeFilter: ke,
                    options: C
                }), !helpers.Wall.isIframe()) {
                var n = new URL(m.getOption("wallUrl"));
                if (location.origin !== n.origin) return console.clear(), console.log("%c                _ _       _\n               | | |     (_)\n __      ____ _| | |___   _  ___\n \\ \\ /\\ / / _` | | / __| | |/ _ \\\n  \\ V  V / (_| | | \\__ \\_| | (_) |\n   \\_/\\_/ \\__,_|_|_|___(_)_|\\___/", "color: red"), void(window.location.href = n.origin + location.pathname + location.search + location.hash)
            }
            helpers.Wall.isIframe() && t("iframe"), L(!0), Ce(), g.on("scroll", _.throttle((function() {
                ge()
            }), 150));
            var i = WallsioFullscreen.getFullscreenChangeEventName();
            i && v.on(i, (function() {
                !WallsioFullscreen.isFullscreen() && helpers.Wall.isIframe() && ae()
            })), setInterval((function() {
                helpers.Wall.updateTimestamps(W)
            }), 3e4), new PostmessageApi(m, helpers.Wall).initDomEvents(), T.initScrollEvents(), C.$container.on("click", U("show-detail"), (function() {
                if (!H()) return !0;
                var n = e(this);
                if ("sponsored" === n.closest(".checkin").data("type")) return !0;
                var t = n.closest(".checkin").data("id"),
                    i = helpers.slug.fromId(t);
                return re(i, !0), !1
            })), v.on("click", U("hide-detail"), (function(e) {
                if (e.target === this) return ae(), !1
            })), v.on("click", U("close-wall-notification"), (function() {
                var n = e(this).closest(".wall-notification");
                return n.removeClass("wall-notification-visible"), setTimeout((function() {
                    n.remove()
                }), 500), !1
            })), e(U("release-checkins")).on("click", (function() {
                return T.smoothScroll(0), A = !0, !1
            })), e(U("scroll-to-top")).on("click", (function() {
                return T.smoothScroll(0), !1
            })), v.on("wall.scrollIntoTop", (function() {
                ee(V()) && L(!0)
            })), v.on("wall.scrollIntoBottom", (function() {
                te(C.additionalCheckins)
            })), v.on("wall.applyFilter", (function(e, n) {
                n && ve(n.network)
            })), v.on("wall.removeFilter", (function() {
                ke()
            })), v.on("wall.hideIframeDetailOverlay", (function() {
                o("show-iframe-detail-overlay")
            })), v.on("keydown", (function(e) {
                !e.key || "Escape" !== e.key && "Esc" !== e.key || ae()
            })), g.on("resize", _.debounce((function() {
                Q(), I() && se()
            }), 500)), e(".detail-container").on("click", "a[href='']", (function(e) {
                e.preventDefault()
            })), H() && window.history.pushState && (window.onpopstate = function(e) {
                e.state && (e.state.detail ? ie(e.state.detail) : oe())
            }), H() && s.clearUrl(!0)
        })(), m.methods.initTheme(C), h.initNotificationBar(), h.generateInstructions(), h.loopInstructions(), u.translateText(), p.initSharingLinks(), m.themeParams.initVideoEvents && d.init(), C.startInStaticMode && pe(), helpers.Tracking.trackGaTiming("domready", "Wall", "domready")
    }, window.Wall = m
})(jQuery);
"use strict";
var _createClass = (function() {
    function e(e, t) {
        for (var i = 0; i < t.length; i++) {
            var a = t[i];
            a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
        }
    }
    return function(t, i, a) {
        return i && e(t.prototype, i), a && e(t, a), t
    }
})();

function _classCallCheck(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
}!(function() {
    var e = helpers.Css,
        t = e.addRootClass,
        i = e.removeRootClass,
        a = $("html"),
        n = function(e) {
            return new Promise(function(t, i) {
                var a = document.createElement("textarea");
                a.value = e, a.setAttribute("readonly", ""), a.style.position = "fixed", a.style.left = "-9999px", document.body.appendChild(a), a.select(), a.setSelectionRange(0, a.value.length);
                var n = void 0;
                try {
                    n = document.execCommand("copy")
                } catch (e) {
                    i(e), n = !1
                }
                document.body.removeChild(a), n ? t() : i()
            })
        },
        o = (function() {
            function e(t, i, a, n) {
                _classCallCheck(this, e), this.$mountPoint = t, this.wallOptions = i, this.videoHelper = a, this.imageHelper = n, helpers.autoBind(this), this.resizeQuickThrottled = _.throttle(this.resizeQuick, 100)
            }
            return _createClass(e, [{
                key: "createDom",
                value: function(e) {
                    var t = helpers.Templates.build,
                        i = helpers.checkins.getFullName(e),
                        a = helpers.checkins.getShortName(e),
                        n = helpers.checkins.getCombinedName(e),
                        o = this.imageHelper.getAspectRatio(e, "post_image", {}, !0),
                        l = Date.now() - e.external_created_timestamp,
                        s = e.post_image,
                        r = e.post_link,
                        d = e.type,
                        h = e.compactDetailUrl,
                        c = helpers.addLineBreaks(e.html_comment) || "",
                        m = this.wallOptions.twitterVia,
                        u = this.wallOptions.wallTitle,
                        p = void 0,
                        v = void 0,
                        g = void 0,
                        f = void 0;
                    v = this.wallOptions.shareOriginalUrl && r ? r : h, p = "twitter" === d ? helpers.translation.__("DETAIL_SHARING_TEXT_FOR_TWITTER_CHECKINS", a, u) : helpers.translation.__("DETAIL_SHARING_TEXT", u);
                    var w = void 0,
                        k = !1;
                    if (this.videoHelper.hasRealVideo(e) ? w = t("detail/video", {
                            postImage: s,
                            postVideo: e.post_video
                        }) : this.videoHelper.hasEmbeddedVideoSupport(e) && (w = this.videoHelper.getVideoEmbedElement(e), k = !0), e.cta) try {
                        var y = JSON.parse(e.cta);
                        g = t("cta", y = {
                            url: y.url,
                            text: y.text
                        }), f = t("detail/menu_cta", y)
                    } catch (e) {
                        console.log(e)
                    }
                    var C = t("detail/post_image", {
                            hasEmbeddedVideo: k,
                            imageAspectRatio: o,
                            postImage: s,
                            postLink: r,
                            postVideoElement: w
                        }),
                        _ = t("detail/user", {
                            combinedName: n,
                            humanTimeDiff: helpers.Wall.humanTimeDiff(l),
                            network: d,
                            postLink: r,
                            userImage: e.external_image,
                            userName: i,
                            userLink: e.external_user_link
                        }),
                        b = t("detail/sharing", {
                            link: v,
                            twitterText: p,
                            twitterVia: m
                        }),
                        T = t("detail/content", {
                            ctaElement: g,
                            detailSharingElement: b,
                            detailUserElement: _,
                            hasImage: !!s,
                            hasVideo: this.videoHelper.hasRealVideo(e),
                            id: e.id,
                            message: c,
                            network: d,
                            postImageElement: C
                        }),
                        E = t("detail/menu_sharing", {
                            link: v,
                            twitterText: p,
                            twitterVia: m
                        }),
                        x = $(t("detail/container", {
                            ctaMenu: f,
                            detailContent: T,
                            detailMenuSharing: E
                        }));
                    return this.initDomEvents(x), x
                }
            }, {
                key: "display",
                value: function(e) {
                    var n = this,
                        o = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    a.addClass("show-detail-loading"), setTimeout((function() {
                        t("show-detail"), helpers.Event.triggerEvent("wallsio-detail-view-opened")
                    }), 0);
                    var l = $(".detail-container");
                    if (e.comment && this.resizeText(e.comment.length), l.find(".detail-image").length > 0 ? (this.resizeQuick(), imagesLoaded(l.get(0), {
                            background: ".detail-image"
                        }, (function() {
                            n.resize(), i("show-detail-loading")
                        }))) : i("show-detail-loading"), this.videoHelper.setVideoAutochangeActive(!1), this.videoHelper.hasRealVideo(e)) {
                        var s = l.find(".detail-video-wrapper video");
                        this.videoHelper.play(s), o && this.videoHelper.unmute(s)
                    }
                }
            }, {
                key: "mount",
                value: function(e, t) {
                    var i = this.createDom(e);
                    this.$mountPoint.html(i), this.display(e, t)
                }
            }, {
                key: "showClipboardCopyNotification",
                value: function(e) {
                    var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                        i = void 0;
                    i = t ? ".detail-link-copied-success" : ".detail-link-copied-error";
                    var a = e.find(i);
                    a.addClass("copied-visible"), setTimeout((function() {
                        return a.removeClass("copied-visible")
                    }), 3e3)
                }
            }, {
                key: "initDomEvents",
                value: function(e) {
                    var t = helpers.actionSelector;
                    e.on("click", t("show-detail-menu-sharing"), (function() {
                        return $(".detail-menu-sharing").addClass("detail-menu-sharing-expanded"), !1
                    })), e.on("click", t("prevent-default"), (function(e) {
                        e.preventDefault()
                    }));
                    var i = this;
                    e.on("click", t("detail-copy-link"), (function(t) {
                        t.preventDefault(), (function(e) {
                            return navigator.clipboard && navigator.clipboard.writeText ? navigator.clipboard.writeText(e).catch((function(t) {
                                return console.error("clipboard.writeText failed:", t), n(e)
                            })) : n(e)
                        })($(this).attr("data-clipboard-text")).then((function() {
                            i.showClipboardCopyNotification(e, !0)
                        })).catch((function(t) {
                            console.error("Couldn't copy to clipboard:", t), i.showClipboardCopyNotification(e, !1)
                        }))
                    }))
                }
            }, {
                key: "setDimensions",
                value: function(e, t) {
                    if (e.css({
                            height: "",
                            width: ""
                        }), $(window).width() >= 840) {
                        var i = e.height() * t;
                        e.css({
                            width: i
                        })
                    } else {
                        var a = e.width() / t;
                        e.css({
                            height: a
                        })
                    }
                }
            }, {
                key: "resizeQuick",
                value: function() {
                    var e = $(".detail-image");
                    if (0 !== e.length) {
                        var t = e.data("aspect-ratio") || 1,
                            i = e.data("raw-width"),
                            a = e.data("raw-height");
                        this.setDimensions(e, t), this.handleSmallImage(e, i, a)
                    }
                }
            }, {
                key: "resetSmallImage",
                value: function(e) {
                    e.removeClass("detail-image-too-small"), e.find(".detail-image-inner").css({
                        width: "",
                        height: ""
                    })
                }
            }, {
                key: "handleSmallImage",
                value: function(e, t, i) {
                    if ($(window).width() < 840) this.resetSmallImage(e);
                    else if (t && i) {
                        var a = e.width(),
                            n = e.height();
                        1.1 * t < a && 1.1 * i < n ? (e.addClass("detail-image-too-small"), e.find(".detail-image-inner").css({
                            width: t,
                            height: i
                        })) : this.resetSmallImage(e)
                    }
                }
            }, {
                key: "resize",
                value: function() {
                    var e = this,
                        t = $(".detail-image");
                    if (0 !== t.length) {
                        var i = new Image;
                        i.src = t.data("image"), i.onload = function() {
                            var a = i.width / i.height;
                            a && (e.setDimensions(t, a), e.handleSmallImage(t, i.width, i.height), t.data("aspect-ratio", a), t.data("raw-width", i.width), t.data("raw-height", i.height))
                        }
                    }
                }
            }, {
                key: "resizeText",
                value: function(e) {
                    var t = 1.6 - .0025 * e,
                        i = _.clamp(t, .6, 1.6);
                    $(".detail-message-inner").css("font-size", i + "em")
                }
            }]), e
        })();
    window.WallsioDetailView = o
})();
"use strict";
!(function() {
    var e = helpers.Css,
        o = e.addRootClass,
        t = e.removeRootClass,
        s = !1,
        i = null,
        n = function() {
            s = !1, t("mousemoving"), helpers.Event.triggerEvent("wallsio-mousemoving-deactivated")
        };
    $(document).on("mousemove wheel touchstart touchend touchmove click mousedown", _.throttle((function() {
        s || (s = !0, o("mousemoving"), helpers.Event.triggerEvent("wallsio-mousemoving-activated")), clearTimeout(i), i = setTimeout(n, 2e3), helpers.Wall.isPreviewIframe() && PostmessageApi.sendPostMessage("Wallsio.triggerDocumentEvent", "mousemove")
    }), 100))
})();
"use strict";
var _slicedToArray = (function() {
        return function(e, r) {
            if (Array.isArray(e)) return e;
            if (Symbol.iterator in Object(e)) return (function(e, r) {
                var t = [],
                    a = !0,
                    n = !1,
                    s = void 0;
                try {
                    for (var l, o = e[Symbol.iterator](); !(a = (l = o.next()).done) && (t.push(l.value), !r || t.length !== r); a = !0);
                } catch (e) {
                    n = !0, s = e
                } finally {
                    try {
                        !a && o.return && o.return()
                    } finally {
                        if (n) throw s
                    }
                }
                return t
            })(e, r);
            throw new TypeError("Invalid attempt to destructure non-iterable instance")
        }
    })(),
    _createClass = (function() {
        function e(e, r) {
            for (var t = 0; t < r.length; t++) {
                var a = r[t];
                a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
            }
        }
        return function(r, t, a) {
            return t && e(r.prototype, t), a && e(r, a), r
        }
    })();

function _toConsumableArray(e) {
    if (Array.isArray(e)) {
        for (var r = 0, t = Array(e.length); r < e.length; r++) t[r] = e[r];
        return t
    }
    return Array.from(e)
}

function _classCallCheck(e, r) {
    if (!(e instanceof r)) throw new TypeError("Cannot call a class as a function")
}!(function() {
    var e = (function() {
        function e(r, t) {
            _classCallCheck(this, e), this.Wall = r, this.WallHelper = t, helpers.autoBind(this), this.requestOlderCheckinsThrottled = _.throttle((function(e) {
                return r.requestOlderCheckins(e)
            }), 1e3)
        }
        return _createClass(e, [{
            key: "sendDocumentHeight",
            value: function() {
                e.sendPostMessage("Wallsio.height", this.WallHelper.getWallHeight())
            }
        }, {
            key: "setNetworkFilter",
            value: function(e) {
                e ? $(document).trigger("wall.applyFilter", {
                    network: e
                }) : $(document).trigger("wall.removeFilter")
            }
        }, {
            key: "initDomEvents",
            value: function() {
                var r = this;
                $(window).on("message", (function(t) {
                    var a = t.originalEvent.data;
                    if (a) {
                        var n = a.args;
                        switch (a.method) {
                            case "Wallsio.requestOlderCheckins":
                                var s = _.get(n, 0);
                                r.requestOlderCheckinsThrottled(s);
                                break;
                            case "Wallsio.getHeight":
                                r.sendDocumentHeight.apply(r, n);
                                break;
                            case "Wallsio.setAutoFillEnabled":
                                if (!r.Wall.setAutofillEnabled) break;
                                var l = _.get(n, 0);
                                r.Wall.setAutofillEnabled(l);
                                break;
                            case "Wallsio.setCustomCss":
                                if (r.WallHelper.hasPreviewIframe()) {
                                    var o = $(".wall-preview-iframe").get(0);
                                    e.sendPostMessageToIframe.apply(e, [o, "Wallsio.setCustomCss"].concat(_toConsumableArray(n)));
                                    break
                                }
                                helpers.Css.setCustomCss.call(null, n);
                                break;
                            case "Wallsio.triggerDocumentEvent":
                                var i = _slicedToArray(n, 2),
                                    u = i[0],
                                    c = i[1];
                                $(document).trigger(u, c);
                                break;
                            case "Wallsio.setNetworkFilter":
                                r.setNetworkFilter(_.get(n, 0))
                        }
                    }
                }))
            }
        }], [{
            key: "sendPostMessage",
            value: function(e) {
                for (var r = arguments.length, t = Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++) t[a - 1] = arguments[a];
                window !== parent && parent.postMessage && parent.postMessage({
                    args: t,
                    method: e,
                    widgetId: helpers.Url.getQueryParamForCurrentUrl("widget_id")
                }, "*")
            }
        }, {
            key: "sendPostMessageToIframe",
            value: function(e, r) {
                for (var t = arguments.length, a = Array(t > 2 ? t - 2 : 0), n = 2; n < t; n++) a[n - 2] = arguments[n];
                var s = e.contentWindow;
                s && s.postMessage && s.postMessage({
                    args: a,
                    method: r
                }, "*")
            }
        }, {
            key: "triggerEventInPreview",
            value: function(r, t) {
                var a = $(".wall-preview-iframe").get(0);
                e.sendPostMessageToIframe(a, "Wallsio.triggerDocumentEvent", r, t)
            }
        }]), e
    })();
    window.PostmessageApi = e
})();
"use strict";
Wall.themeParams.enableAspectRatioImages = !0, Wall.themeParams.defaultPostImageAspectRatio = 1, Wall.themeParams.minPostImageAspectRatio = .75, Wall.themeParams.maxPostImageAspectRatio = 2.76, Wall.methods.$createUser = function(e) {
    var a = helpers.checkins.getShortName(e),
        t = helpers.checkins.getFullName(e),
        s = helpers.checkins.getCombinedName(e),
        m = helpers.checkins.hasSeparateNames(e),
        r = templates.user_name_parts({
            shortName: a,
            fullName: t,
            combinedName: s,
            hasSeparateNames: m
        });
    return $(templates.user({
        type: e.type,
        shortName: a,
        fullName: t,
        combinedName: s,
        nameParts: r,
        userId: e.external_user_id,
        userLink: e.external_user_link,
        image: e.external_image,
        externalCreatedTimestamp: e.external_created_timestamp,
        postId: e.post_id,
        postLink: e.post_link
    }))
};
"use strict";
!(function() {
    var e = void 0,
        t = function() {
            return e || (e = new helpers.Isotope(Wall.themeParams.checkinTransition)), e
        },
        a = function(e) {
            e.isotope("updateSortData").isotope()
        };
    Wall.themeParams.maxCommentLength = 220, Wall.themeParams.ignoreProxyImageHeight = !0, Wall.methods.getTilesLimit = function(e) {
        var t;
        return arguments.length > 1 && void 0 !== arguments[1] && arguments[1] || helpers.Wall.isAppScrollable() || helpers.Wall.isAutoheight() ? (t = 100, helpers.Wall.isIframe() && (t = Math.ceil(.8 * t)), helpers.Wall.isMobile() && (t = Math.ceil(.5 * t)), t) : Math.max(Wall.methods.countTilesAboveTheFold(), 20)
    }, Wall.methods.domPrependCheckins = function(e, t) {
        e.prepend(t).isotope("insert", t).isotope()
    }, Wall.methods.domAppendCheckins = function(e, t) {
        e.append(t).isotope("insert", t).isotope()
    }, Wall.methods.domRemoveCheckins = function(e, t) {
        var a = $(".socialwall_container").data("isotope").options.transitionDuration,
            i = _.isString(a) ? helpers.time.cssDurationToMs(a, 0) : 0;
        e.isotope("remove", t).isotope("layout"), setTimeout((function() {
            return t.remove()
        }), i)
    }, Wall.methods.domReplaceCheckin = function(e, t, i, n) {
        var o = Wall.methods.domCreateCheckin(i, n);
        if (!o) return !1;
        var s = t.closest(".checkin-wrapper");
        t.replaceWith(o.find(".checkin"));
        var l = s.find(".checkin-buttons"),
            r = o.find(".checkin-buttons");
        0 === l.length && r.length > 0 ? s.append(r) : l.replaceWith(r), a(n.$container)
    }, Wall.methods.domCreateCheckin = function(e, t) {
        var a, i, n, o, s, l = new helpers.Image(t),
            r = new helpers.Video(t),
            c = new helpers.Wall(t),
            d = e.post_image;
        s = helpers.addLineBreaks(e.truncated_html_comment);
        var h = null;
        if (!d && !s) return null;
        if (e.tags && (h = e.tags.replace(/#/g, "")), (i = (a = $(templates.container({
                bonus: e.bonus || 0,
                externalCreatedTimestamp: e.external_created_timestamp,
                id: e.id,
                isLooped: e.isLooped,
                originalId: e.originalId || e.id,
                tags: h,
                type: e.type,
                userId: e.external_user_id,
                weight: e.weight
            }))).find(".checkin")).addClass(c.getRandomCheckinColorClass(e.id)), e.cta) try {
            var p = JSON.parse(e.cta);
            a.append(templates.cta({
                text: p.text,
                url: p.url
            }))
        } catch (e) {
            console.log(e)
        }
        if (e.is_highlighted && (i.append(templates.highlight_icon()), i.addClass("checkin-highlighted")), a = helpers.Wall.addImageAndMessageClasses(a, "wrapper", d, s), i = helpers.Wall.addImageAndMessageClasses(i, "checkin", d, s), d) {
            var m = 100 / l.getAspectRatio(e, "post_image", Wall.themeParams) + "%",
                u = r.hasRealVideo(e),
                g = r.hasEmbeddedVideoSupport(e);
            !u && g && i.addClass("checkin-with-embedded-video"), n = $(templates.image({
                id: e.id,
                image: d,
                imagePaddingBottom: m,
                postLink: e.post_link,
                message: s,
                showPlayButton: u || g
            }))
        } else n = $(templates.message({
            message: s
        }));
        return i.append(n), helpers.Checkins.hasUserData(e) ? (o = Wall.methods.$createUser(e), i.append(o)) : i.addClass("checkin-without-user"), r.initVideo(e, i), a
    }, Wall.methods.initTheme = function(e) {
        var a = t(),
            i = a.getCheckinTransition(),
            n = i.hiddenStyle,
            o = i.visibleStyle;
        $(".socialwall_container").isotope({
            percentPosition: !1,
            columnWidth: ".checkin-wrapper",
            itemSelector: ".checkin-wrapper",
            hiddenStyle: n,
            visibleStyle: o,
            getSortData: {
                sortScore: function(e) {
                    var t = $(e).data("id"),
                        a = Wall.getCheckinData(t);
                    return a && a.sortScore ? a.sortScore : 0
                }
            },
            sortBy: ["sortScore"],
            sortAscending: {
                sortScore: !1
            },
            stagger: a.initialStagger,
            transitionDuration: a.initialTransitionDuration
        })
    }, Wall.methods.getNumberOfCheckinsToFillScreen = function() {
        var e = $(".socialwall_container"),
            t = $("<div>", {
                class: "checkin-wrapper"
            });
        e.append(t);
        var a = e.width(),
            i = t.outerWidth();
        if (i <= 0) return 5;
        var n = i / a,
            o = Math.round(1 / n);
        t.remove();
        var s = i / Wall.themeParams.maxPostImageAspectRatio,
            l = Math.min(130, s) + 83,
            r = $(window).height() - parseInt(e.css("margin-top"), 10),
            c = o * Math.ceil(r / l) + 1;
        return c < 5 ? 5 : c > 200 ? 200 : c
    }, Wall.methods.getNumberOfInitialCheckins = function() {
        return Wall.methods.getNumberOfCheckinsToFillScreen()
    }, Wall.methods.setCheckinTransitionMode = function(e) {
        var a = $(".socialwall_container");
        t().setTransitionMode(a, e)
    }, $(document).on("wall.init", (function() {
        $(".socialwall_container").isotope("updateSortData").isotope("layout").isotope(), Wall.methods.setCheckinTransitionMode("normal")
    })), $(document).on("wall.sortUpdateNeeded", (function(e, t) {
        a(t.$container)
    }))
})();
"use strict";
var _createClass = (function() {
    function e(e, t) {
        for (var a = 0; a < t.length; a++) {
            var i = t[a];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
        }
    }
    return function(t, a, i) {
        return a && e(t.prototype, a), i && e(t, i), t
    }
})();

function _toConsumableArray(e) {
    if (Array.isArray(e)) {
        for (var t = 0, a = Array(e.length); t < e.length; t++) a[t] = e[t];
        return a
    }
    return Array.from(e)
}

function _classCallCheck(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
}!(function() {
    var e = helpers.Css,
        t = e.addRootClass,
        a = e.changeRootClass,
        i = e.hasRootClass,
        r = e.removeRootClass,
        l = e.toggleRootClass,
        n = $(document),
        s = helpers.actionSelector,
        u = helpers.Url,
        o = helpers.Wall,
        c = {
            billboard: ["pause", "filter"],
            bricks: [],
            fluid: ["pause"],
            grid: ["pause"],
            kiosk: ["filter"],
            map: ["pause", "filter"]
        },
        f = ["settings", "sharing"],
        v = (function() {
            function e() {
                _classCallCheck(this, e), this.state = new Immutable.Map, helpers.autoBind(this)
            }
            return _createClass(e, [{
                key: "init",
                value: function() {
                    this.initialNetworkFilter = Wall.getOption("network"), this.initState(), this.initDomEvents(), this.initFilterMenu()
                }
            }, {
                key: "setStateField",
                value: function(e, t) {
                    if (this.state = this.state.set(e, t), "currentTheme" === e) this.updateWallActionIcons();
                    else if ("isAutoAdvancePaused" === e) {
                        a("autoadvance-paused", t);
                        var i = {
                            value: t
                        };
                        if (helpers.Wall.hasPreviewIframe()) return void PostmessageApi.triggerEventInPreview("wall.setAutoAdvancePaused", i);
                        n.trigger("wall.setAutoAdvancePaused", {
                            value: t
                        })
                    } else "currentNetworkFilter" === e && this.updateNetworkFilterMenu()
                }
            }, {
                key: "setStateFieldInParent",
                value: function(e, t) {
                    PostmessageApi.sendPostMessage("Wallsio.setWallmenuStateField", e, t)
                }
            }, {
                key: "initState",
                value: function() {
                    var e = Wall.getOption("theme"),
                        t = this.initialNetworkFilter;
                    this.setStateField("isAutoAdvancePaused", !1), this.setStateField("isFullMenuExpanded", i("full-menu-expanded")), this.setStateField("isWallPreviewActive", !1), this.setStateField("currentTheme", e), this.setStateField("currentNetworkFilter", t), o.isPreviewIframe() && (this.setStateFieldInParent("isAutoAdvancePaused", !1), this.setStateFieldInParent("currentTheme", e), this.setStateFieldInParent("currentNetworkFilter", t))
                }
            }, {
                key: "initWallSettingsIframe",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                        t = $(".wall-settings-mount-point");
                    if (0 !== t.length) {
                        var a = t.data("content-url");
                        e && (a = u.updateUrlQueryParam(a, "sharing", "1"));
                        var i = $("<iframe>").attr("src", a).addClass("wall-settings-iframe");
                        t.replaceWith(i)
                    } else e && this.activateSharingInWallSettings()
                }
            }, {
                key: "initWallPreviewIframe",
                value: function() {
                    var e = $(".wall-preview-mount-point");
                    if (0 === e.length) return !1;
                    var a = $("<iframe>").attr("src", this.getDefaultPreviewIframeUrl()).addClass("wall-preview-iframe");
                    return e.replaceWith(a), this.setStateField("isWallPreviewActive", !0), t("wall-preview-active"), n.trigger("Wallsio.disconnectSocket"), !0
                }
            }, {
                key: "triggerApplyFilter",
                value: function(e) {
                    this.setStateField("currentNetworkFilter", e), helpers.Wall.hasPreviewIframe() ? PostmessageApi.triggerEventInPreview("wall.applyFilter", {
                        network: e
                    }) : n.trigger("wall.applyFilter", {
                        network: e
                    })
                }
            }, {
                key: "triggerRemoveFilter",
                value: function() {
                    this.setStateField("currentNetworkFilter", null), helpers.Wall.hasPreviewIframe() ? PostmessageApi.triggerEventInPreview("wall.removeFilter") : n.trigger("wall.removeFilter")
                }
            }, {
                key: "initFilterMenu",
                value: function() {
                    var e = this,
                        t = $(".filter-menu-reset");
                    $(".filter-menu-network").each((function(t, a) {
                        var i = $(a),
                            r = i.data("network");
                        i.on("click", (function(t) {
                            t.stopPropagation(), r === e.currentNetworkFilter ? setTimeout((function() {
                                e.triggerRemoveFilter()
                            }), 250) : setTimeout((function() {
                                e.triggerApplyFilter(r)
                            }), 250)
                        }))
                    })), t.on("click", (function(t) {
                        t.stopPropagation(), e.triggerRemoveFilter()
                    }))
                }
            }, {
                key: "initDomEvents",
                value: function() {
                    var e = this;
                    n.on("click", s("toggle-mini-menu"), (function(e) {
                        e.preventDefault(), l("wall-action-icons-expanded")
                    })), n.on("click", s("toggle-full-menu"), (function(t) {
                        t.preventDefault(), e.toggleFullMenu()
                    })), n.on("click", s("hide-full-menu"), (function(t) {
                        t.preventDefault(), e.hideFullMenu()
                    })), n.on("click", s("show-sharing"), (function(t) {
                        t.preventDefault(), e.showSharingMenu()
                    })), n.on("click", s("toggle-filter-menu"), (function(t) {
                        t.preventDefault(), t.stopImmediatePropagation(), e.toggleFilterMenu()
                    })), n.on("mousedown", s("preload-settings-iframe"), (function(t) {
                        t.preventDefault(), e.initWallSettingsIframe()
                    })), n.on("click", s("pause-autoadvance"), (function(t) {
                        t.preventDefault(), e.setStateField("isAutoAdvancePaused", !0)
                    })), n.on("click", s("unpause-autoadvance"), (function(t) {
                        t.preventDefault(), e.setStateField("isAutoAdvancePaused", !1)
                    })), $(window).on("message", (function(t) {
                        var a = t.originalEvent.data;
                        if (a) {
                            var i = a.args || [];
                            switch (a.method) {
                                case "Wallsio.reloadWallPreviewIframe":
                                    e.reloadWallPreviewIframe();
                                    break;
                                case "Wallsio.setWallPreviewIframeUrlParam":
                                    e.setWallPreviewIframeUrlParam.apply(e, _toConsumableArray(i));
                                    break;
                                case "Wallsio.setWallUrlParam":
                                    e.setBrowserUrlParam.apply(e, _toConsumableArray(i));
                                    break;
                                case "Wallsio.hideFullMenu":
                                    e.hideFullMenu();
                                    break;
                                case "Wallsio.setWallmenuStateField":
                                    e.setStateField.apply(e, _toConsumableArray(i))
                            }
                        }
                    }))
                }
            }, {
                key: "updateWallActionIcons",
                value: function() {
                    var e = c[this.currentTheme] || [];
                    o.isIframe() && e.push.apply(e, f), WallsioFullscreen.isSupported() || e.push("fullscreen"), $(".wall-action-icons").find("[data-action-name]").each((function(t, a) {
                        var i = $(a),
                            r = i.data("action-name"),
                            l = i.parent().is("span[hidden]");
                        e.includes(r) ? l || i.wrap("<span hidden>") : l && i.unwrap()
                    }))
                }
            }, {
                key: "updateNetworkFilterMenu",
                value: function() {
                    var e = $(".filter-menu-network");
                    (e.removeClass("filter-menu-network-selected"), this.currentNetworkFilter) && e.filter('[data-network="' + this.currentNetworkFilter + '"]').addClass("filter-menu-network-selected")
                }
            }, {
                key: "getDefaultPreviewIframeUrl",
                value: function() {
                    var e = window.location.href;
                    return e = u.updateUrlQueryParam(e, "preview", "1")
                }
            }, {
                key: "activateSharingInWallSettings",
                value: function() {
                    var e = $(".wall-settings-iframe");
                    if (0 !== e.length) {
                        var t = e.get(0).contentWindow;
                        if (t.postMessage) {
                            var a = 0;
                            this.isFullMenuExpanded || (a = 300), setTimeout((function() {
                                t.postMessage({
                                    method: "Wallsio.activateSharing"
                                }, "*")
                            }), a)
                        }
                    }
                }
            }, {
                key: "reloadWallPreviewIframe",
                value: function() {
                    if (!this.initWallPreviewIframe()) {
                        var e = $(".wall-preview-iframe"),
                            t = this.getDefaultPreviewIframeUrl();
                        e.attr("src", t)
                    }
                }
            }, {
                key: "transformUrlParamValue",
                value: function(e) {
                    return !0 === e ? "1" : !1 === e ? "0" : e + ""
                }
            }, {
                key: "setWallPreviewIframeUrlParam",
                value: function(e, t) {
                    this.initWallPreviewIframe(), t = this.transformUrlParamValue(t);
                    var a = $(".wall-preview-iframe"),
                        i = a.attr("src"),
                        r = u.updateUrlQueryParam(i, e, t);
                    a.attr("src", r)
                }
            }, {
                key: "setBrowserUrlParam",
                value: function(e, t) {
                    t = this.transformUrlParamValue(t), u.updateQueryParamForCurrentUrl(e, t)
                }
            }, {
                key: "hideFullMenu",
                value: function() {
                    this.setStateField("isFullMenuExpanded", !1), r("full-menu-expanded")
                }
            }, {
                key: "showFullMenu",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                    this.initWallSettingsIframe(e), this.setStateField("isFullMenuExpanded", !0), t("full-menu-expanded")
                }
            }, {
                key: "toggleFullMenu",
                value: function() {
                    this.isFullMenuExpanded ? this.hideFullMenu() : this.showFullMenu()
                }
            }, {
                key: "showSharingMenu",
                value: function() {
                    this.showFullMenu(!0), t("show-sharing")
                }
            }, {
                key: "toggleFilterMenu",
                value: function() {
                    l("show-filter-menu")
                }
            }, {
                key: "isFullMenuExpanded",
                get: function() {
                    return this.state.get("isFullMenuExpanded")
                }
            }, {
                key: "isWallPreviewActive",
                get: function() {
                    return this.state.get("isWallPreviewActive")
                }
            }, {
                key: "currentTheme",
                get: function() {
                    return this.state.get("currentTheme")
                }
            }, {
                key: "currentNetworkFilter",
                get: function() {
                    return this.state.get("currentNetworkFilter")
                }
            }]), e
        })();
    setTimeout((function() {
        (new v).init()
    }), 0)
})();
window.templates = window.templates || {}, window.templates.checkin_video = function(e) {
    var n = "";
    return n += '<div class="video-wrapper checkin-video-wrapper">\n  <video\n    class="checkin-video"\n    playsinline\n    loop\n    muted\n    disableremoteplayback\n    disablepictureinpicture\n    src="' + (0, _.escape)(e.videoUrl) + '"\n  >\n  </video>\n\n  <div class="video-mute-button"></div>\n</div>\n'
};
window.templates = window.templates || {}, window.templates.cta = function(n) {
    var e = "",
        t = _.escape;
    return e += '<div class="checkin-buttons">\n  <div class="connector"></div>\n  <a class="checkin-cta" href="' + t(n.url) + '" rel="nofollow noopener" target="_blank">' + t(helpers.translation.__(n.text)) + "</a>\n</div>\n"
};
window.templates = window.templates || {}, window.templates.highlight_icon = function(i) {
    return '<div class="checkin-highlight-icon"></div>\n'
};
window.templates = window.templates || {}, window.templates.message = function(e) {
    var s, n = "";
    return n += '<div class="checkin-message-wrapper">\n  <div class="checkin-message" dir="auto">\n    ' + (null == (s = e.message) ? "" : s) + "\n  </div>\n</div>\n"
};
window.templates = window.templates || {}, window.templates.user = function(n) {
    var e, a = "",
        t = _.escape;
    return Array.prototype.join, a += '<div class="checkin-user clearfix">\n  ', n.userLink ? (a += "\n\n    ", n.image && (a += '\n      <a\n        href="' + t(n.userLink) + '"\n        class="checkin-user-image"\n        target="_blank"\n        rel="nofollow noopener"\n        style="background-image: url(' + t(n.image) + ')"\n      >\n      </a>\n    '), a += '\n\n    <div class="checkin-user-name" title="' + t(n.combinedName) + '">\n      <a href="' + t(n.userLink) + '" target="_blank" rel="nofollow noopener">\n        ' + (null == (e = n.nameParts) ? "" : e) + "\n      </a>\n    </div>\n\n  ") : (a += "\n\n    ", n.image && (a += '\n      <div class="checkin-user-image" style="background-image: url(' + t(n.image) + ')">\n      </div>\n    '), a += '\n\n    <div class="checkin-user-name" title="' + t(n.combinedName) + '">\n      ' + (null == (e = n.nameParts) ? "" : e) + "\n    </div>\n\n  "), a += "\n\n  ", n.externalCreatedTimestamp && (a += "\n    ", n.postLink ? a += '\n      <a href="' + t(n.postLink) + '" class="checkin-timestamp" data-timestamp="' + t(n.externalCreatedTimestamp) + '" target="_blank" rel="nofollow noopener">&nbsp;</a>\n    ' : a += '\n      <span class="checkin-timestamp" data-timestamp="' + t(n.externalCreatedTimestamp) + '">&nbsp;</span>\n    ', a += "\n  "), a += '\n\n  <div class="checkin-type checkin-type-' + t(n.type) + '" title="' + t(helpers.getChannelName(n.type)) + '" data-action="show-detail" >\n  </div>\n</div>\n'
};
window.templates = window.templates || {}, window.templates.user_name_parts = function(e) {
    var a = "",
        n = _.escape;
    return Array.prototype.join, e.hasSeparateNames ? a += '\n  <span class="checkin-user-name-part checkin-user-name-full">' + n(e.fullName) + '</span>\n  <span class="checkin-user-name-part checkin-user-name-short">' + n(e.shortName) + "</span>\n" : a += "\n  " + n(e.combinedName) + "\n", a += "\n"
};
window.templates = window.templates || {}, window.templates["embeds/facebook_video_embed"] = function(e) {
    var o = "";
    return o += '<iframe class="checkin-video-embed" src="https://www.facebook.com/plugins/video.php?href=' + (0, _.escape)(e.token) + '&autoplay=1" frameborder="0" allowfullscreen></iframe>\n'
};
window.templates = window.templates || {}, window.templates["embeds/vimeo_video_embed"] = function(e) {
    var o, t = "";
    return t += '<iframe class="checkin-video-embed" src="https://player.vimeo.com/video/' + (0, _.escape)(e.token) + "?autoplay=1&muted=1&loop=1&title=0&byline=0&portrait=0&amp;controls=" + (null == (o = +e.showControls) ? "" : o) + '" frameborder="0" allowfullscreen></iframe>\n'
};
window.templates = window.templates || {}, window.templates["embeds/youtube_video_embed"] = function(e) {
    var o, a = "";
    return a += '<iframe class="checkin-video-embed" src="https://www.youtube-nocookie.com/embed/' + (0, _.escape)(e.token) + "?rel=0&amp;modestbranding=1&amp;showinfo=0&amp;autoplay=1&amp;loop=1&amp;enablejsapi=1&amp;mute=1&amp;controls=" + (null == (o = +e.showControls) ? "" : o) + '" frameborder="0" allowfullscreen></iframe>\n'
};
window.templates = window.templates || {}, window.templates["detail/container"] = function(n) {
    var i, a = "";
    return a += '<div class="detail-container" data-action="hide-detail">\n  <div class="detail-inner">\n    ' + (null == (i = n.detailContent) ? "" : i) + '\n  </div>\n\n  <div class="detail-loading-indicator-wrapper">\n    <svg class="loading-indicator detail-loading-indicator">\n      <use xlink:href="#app-logo-svg"></use>\n    </svg>\n  </div>\n</div>\n\n<div class="detail-menu" data-action="hide-detail">\n  ' + (null == (i = n.ctaMenu) ? "" : i) + "\n  " + (null == (i = n.detailMenuSharing) ? "" : i) + '\n\n  <div class="detail-close" data-action="hide-detail"></div>\n</div>\n'
};
window.templates = window.templates || {}, window.templates["detail/content"] = function(e) {
    var n, t = "",
        a = _.escape;
    return t += '<div class="detail-content detail-content-' + a(e.hasImage ? "withimage" : "withoutimage") + '">\n  ' + (null == (n = e.postImageElement) ? "" : n) + '\n\n  <div class="detail-text-wrapper detail-text-wrapper-' + a(e.network) + '">\n    <div class="detail-network-background detail-network-background-' + a(e.network) + '"></div>\n\n    <div class="detail-text-inner">\n      <div class="detail-text-content">\n        ' + (null == (n = e.detailUserElement) ? "" : n) + '\n\n        <div class="detail-message">\n          <div class="detail-message-inner">' + (null == (n = e.message) ? "" : n) + "</div>\n        </div>\n      </div>\n\n      " + (null == (n = e.ctaElement) ? "" : n) + '\n\n      <div class="detail-text-extra">\n        ' + (null == (n = e.detailSharingElement) ? "" : n) + "\n      </div>\n    </div>\n  </div>\n</div>\n"
};
window.templates = window.templates || {}, window.templates["detail/menu_cta"] = function(e) {
    var t = "",
        n = _.escape;
    return t += '<div class="detail-menu-buttons">\n  <a class="detail-menu-cta" href="' + n(e.url) + '" rel="nofollow noopener" target="_blank">' + n(helpers.translation.__(e.text)) + "</a>\n</div>\n"
};
window.templates = window.templates || {}, window.templates["detail/menu_sharing"] = function(n) {
    var a, t = "",
        e = _.escape;
    return Array.prototype.join, t += '<div class="detail-menu-sharing">\n  <button type="button" class="detail-menu-sharing-expander" data-action="show-detail-menu-sharing">' + e(helpers.translation.__("SHARE_POST")) + '</button>\n\n  <div class="detail-menu-sharing-content">\n    <a href="https://www.facebook.com/sharer/sharer.php?u=' + (null == (a = encodeURIComponent(n.link)) ? "" : a) + '" class="detail-menu-sharing-button" data-action="share" data-network="facebook">\n      <i class="fa fa-facebook"></i>\n    </a>\n\n    <a href="https://twitter.com/intent/tweet?url=' + (null == (a = encodeURIComponent(n.link)) ? "" : a) + "&text=", encodeURIComponent(n.twitterText), t += "&via=" + (null == (a = n.twitterVia) ? "" : a) + '" class="detail-menu-sharing-button" data-action="share" data-network="twitter">\n      <i class="fa fa-twitter"></i>\n    </a>\n\n    <a href="https://www.linkedin.com/sharing/share-offsite/?url=' + (null == (a = encodeURIComponent(n.link)) ? "" : a) + '" class="detail-menu-sharing-button" data-action="share" data-network="linkedin">\n      <i class="fa fa-linkedin"></i>\n    </a>\n\n    <a href="#" class="detail-menu-sharing-button link-button" data-clipboard-text="' + e(n.link) + '" title="' + e(helpers.translation.__("SHARE_POST_LINK")) + '" data-action="detail-copy-link">\n      <i class="fa fa-link"></i>\n    </a>\n\n    <div class="detail-link-copied detail-link-copied-success">\n      <span>' + e(helpers.translation.__("COPIED_TO_CLIPBOARD")) + '<span>\n    </div>\n\n    <div class="detail-link-copied detail-link-copied-error">\n      <span>' + e(helpers.translation.__("COPIED_TO_CLIPBOARD_ERROR")) + "<span>\n    </div>\n  </div>\n</div>\n"
};
window.templates = window.templates || {}, window.templates["detail/post_image"] = function(e) {
    var n, a = "",
        t = _.escape;
    return Array.prototype.join, e.postImage && (a += '\n  <div\n    class="detail-image ' + t(e.postVideoElement ? "detail-image-with-video" : "") + '"\n    data-image="' + t(e.postImage) + '"\n    data-aspect-ratio="' + t(e.imageAspectRatio) + '"\n  >\n    ', e.postVideoElement ? a += "\n      " + (null == (n = e.postVideoElement) ? "" : n) + "\n    " : a += '\n      <div class="detail-image-inner" style="background-image: url(' + t(e.postImage) + ')">\n      </div>\n    ', a += "\n\n    ", e.postLink && !e.hasEmbeddedVideo && (a += '\n      <a href="' + t(e.postLink) + '" target="_blank" rel="nofollow noopener" class="detail-image-link"></a>\n    '), a += "\n  </div>\n"), a += "\n"
};
window.templates = window.templates || {}, window.templates["detail/sharing"] = function(n) {
    var a = "",
        t = _.escape;
    return a += '<span class="detail-sharing-intro">\n  ' + t(helpers.translation.__("SHARE_POST")) + '\n</span>\n\n<div class="detail-sharing-buttons">\n  <a href="https://www.facebook.com/sharer/sharer.php?u=' + t(encodeURIComponent(n.link)) + '" class="detail-sharing-button" data-action="share" data-network="facebook">\n    <i class="fa fa-facebook"></i>\n  </a>\n\n  <a href="https://twitter.com/intent/tweet?url=' + t(encodeURIComponent(n.link)) + "&text=" + t(encodeURIComponent(n.twitterText)) + "&via=" + t(n.twitterVia) + '" class="detail-sharing-button" data-action="share" data-network="twitter">\n    <i class="fa fa-twitter"></i>\n  </a>\n\n  <a href="https://www.linkedin.com/sharing/share-offsite/?url=' + t(encodeURIComponent(n.link)) + '" class="detail-sharing-button" data-action="share" data-network="linkedin">\n    <i class="fa fa-linkedin"></i>\n  </a>\n\n  <a href="' + t(n.link) + '" class="detail-sharing-button link-button" data-clipboard-text="' + t(n.link) + '" title="' + t(helpers.translation.__("SHARE_POST_LINK")) + '" data-action="detail-copy-link">\n    <i class="fa fa-link"></i>\n  </a>\n\n  <div class="detail-link-copied detail-link-copied-success">\n    <span>' + t(helpers.translation.__("COPIED_TO_CLIPBOARD")) + '<span>\n  </div>\n\n  <div class="detail-link-copied detail-link-copied-error">\n    <span>' + t(helpers.translation.__("COPIED_TO_CLIPBOARD_ERROR")) + "<span>\n  </div>\n</div>\n"
};
window.templates = window.templates || {}, window.templates["detail/user"] = function(n) {
    var e = "",
        a = _.escape;
    return Array.prototype.join, e += '<div class="detail-user">\n  ', n.userImage && (e += '\n    <div\n      class="detail-user-image"\n      style="background-image: url(' + a(n.userImage) + ')"\n    >\n      ', n.userLink && (e += '\n        <a\n          class="detail-user-image-link"\n          href="' + a(n.userLink) + '"\n          target="_blank"\n          rel="nofollow noopener"\n        >\n        </a>\n      '), e += "\n    </div>\n  "), e += '\n\n  <div class="detail-user-info">\n    <div class="detail-user-name" title="' + a(n.combinedName) + '">\n      <i class="detail-network-icon detail-network-icon-' + a(n.network) + '"></i>\n\n      ', n.userLink ? e += '\n        <a href="' + a(n.userLink) + '" target="_blank" rel="nofollow noopener">' + a(n.userName) + "</a>\n      " : e += "\n        " + a(n.userName) + "\n      ", e += '\n    </div>\n\n    <a\n      href="' + a(n.postLink) + '"\n      class="detail-timestamp"\n      target="_blank"\n      rel="nofollow noopener"\n    >' + a(n.humanTimeDiff) + "</a>\n  </div>\n</div>\n"
};
window.templates = window.templates || {}, window.templates["detail/video"] = function(e) {
    var i = "",
        o = _.escape;
    return Array.prototype.join, e.postVideo && (i += '\n  <div class="video-wrapper detail-video-wrapper video-muted">\n    <video class="detail-video" playsinline loop muted poster="' + o(e.postImage) + '">\n      <source src="' + o(e.postVideo) + '" type="video/mp4" />\n    </video>\n\n    <div class="video-play-button"></div>\n    <div class="video-mute-button"></div>\n  </div>\n'), i += "\n"
};
window.templates = window.templates || {}, window.templates.container = function(a) {
    var i = "",
        d = _.escape;
    return i += '<div class="checkin-wrapper checkin-wrapper-' + d(a.id) + '" data-id="' + d(a.id) + '" data-original-id="' + d(a.originalId) + '">\n  <div class="checkin checkin-' + d(a.id) + '" data-id="' + d(a.id) + '" data-original-id="' + d(a.originalId) + '" data-weight="' + d(a.weight) + '" data-timestamp="' + d(a.externalCreatedTimestamp) + '" data-bonus="' + d(a.bonus) + '" data-is-looped="' + d(a.isLooped) + '" data-tags="' + d(a.tags) + '" data-type="' + d(a.type) + '" data-user-id="' + d(a.userId) + '">\n  </div>\n</div>\n'
};
window.templates = window.templates || {}, window.templates.image = function(n) {
    var e, a = "",
        i = _.escape;
    return Array.prototype.join, a += '<div class="checkin-image-wrapper checkin-image-preview-holder">\n  <svg class="placeholder-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="currentColor" d="M159 336l-39.5-39.5c-4.7-4.7-12.3-4.7-17 0l-39 39L63 448h256V304l-55.5-55.5c-4.7-4.7-12.3-4.7-17 0L159 336zm96-50.7l32 32V416H95.1l.3-67.2 15.6-15.6 48 48c20.3-20.3 77.7-77.6 96-95.9zM127 256c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm0-96c17.6 0 32 14.4 32 32s-14.4 32-32 32-32-14.4-32-32 14.4-32 32-32zm242.9-62.1L286 14C277 5 264.8-.1 252.1-.1H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V131.9c0-12.7-5.1-25-14.1-34zM256 32.5c2.8.7 5.3 2.1 7.4 4.2l83.9 83.9c2.1 2.1 3.5 4.6 4.2 7.4H256V32.5zM352 464c0 8.8-7.2 16-16 16H48c-8.8 0-16-7.2-16-16V48c0-8.8 7.2-16 16-16h176v104c0 13.3 10.7 24 24 24h104v304z"></path></svg>\n  <div\n    class="checkin-image"\n    data-action="show-detail"\n    style="background-image:url(' + i(n.image) + "); padding-bottom: " + i(n.imagePaddingBottom) + '"\n  >\n    ', n.postLink && (a += '\n      <a\n        href="' + i(n.postLink) + '"\n        target="_blank"\n        rel="nofollow noopener"\n        class="checkin-image-link"\n      ></a>\n    '), a += "\n\n    ", n.showPlayButton && (a += '\n      <div class="video-play-button"></div>\n    '), a += "\n  </div>\n</div>\n\n", n.message && (a += '\n  <div class="checkin-message" dir="auto">\n    ' + (null == (e = n.message) ? "" : e) + "\n  </div>\n"), a += "\n"
};
window.templates = window.templates || {}, window.templates.message = function(e) {
    var n, s = "";
    return s += '<div class="checkin-message" dir="auto">\n  ' + (null == (n = e.message) ? "" : n) + "\n</div>\n"
};
"use strict";
var _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(A) {
    return typeof A
} : function(A) {
    return A && "function" == typeof Symbol && A.constructor === Symbol && A !== Symbol.prototype ? "symbol" : typeof A
};
window.Modernizr && !1 === window.Modernizr.videoautoplay ? window.Modernizr = {
    isForcedModernizr: !0,
    on: function() {},
    videoautoplay: !1
} : (function(A, e, o) {
    function t(A, e) {
        return (void 0 === A ? "undefined" : _typeof(A)) === e
    }

    function n() {
        return "function" != typeof e.createElement ? e.createElement(arguments[0]) : w ? e.createElementNS.call(e, "http://www.w3.org/2000/svg", arguments[0]) : e.createElement.apply(e, arguments)
    }

    function a(A, e) {
        if ("object" == (void 0 === A ? "undefined" : _typeof(A)))
            for (var t in A) r(A, t) && a(t, A[t]);
        else {
            var n = (A = A.toLowerCase()).split("."),
                l = c[n[0]];
            if (2 == n.length && (l = l[n[1]]), o !== l) return c;
            e = "function" == typeof e ? e() : e, 1 == n.length ? c[n[0]] = e : (!c[n[0]] || c[n[0]] instanceof Boolean || (c[n[0]] = new Boolean(c[n[0]])), c[n[0]][n[1]] = e), c._trigger(A, e)
        }
        return c
    }
    var l = [],
        i = {
            _version: "3.5.0",
            _config: {
                classPrefix: "",
                enableClasses: !0,
                enableJSClass: !0,
                usePrefixes: !0
            },
            _q: [],
            on: function(A, e) {
                var o = this;
                setTimeout((function() {
                    e(o[A])
                }), 0)
            },
            addTest: function(A, e, o) {
                l.push({
                    name: A,
                    fn: e,
                    options: o
                })
            },
            addAsyncTest: function(A) {
                l.push({
                    name: null,
                    fn: A
                })
            }
        },
        c = function() {};
    c.prototype = i, c = new c;
    var r, d = [],
        h = e.documentElement;
    !(function() {
        var A = {}.hasOwnProperty;
        r = t(A, "undefined") || t(A.call, "undefined") ? function(A, e) {
            return e in A && t(A.constructor.prototype[e], "undefined")
        } : function(e, o) {
            return A.call(e, o)
        }
    })();
    var w = "svg" === h.nodeName.toLowerCase();
    c.addTest("video", (function() {
        var A = n("video"),
            e = !1;
        try {
            (e = !!A.canPlayType) && ((e = new Boolean(e)).ogg = A.canPlayType('video/ogg; codecs="theora"').replace(/^no$/, ""), e.h264 = A.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/, ""), e.webm = A.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/, ""), e.vp9 = A.canPlayType('video/webm; codecs="vp9"').replace(/^no$/, ""), e.hls = A.canPlayType('application/x-mpegURL; codecs="avc1.42E01E"').replace(/^no$/, ""))
        } catch (A) {}
        return e
    })), i._l = {}, i.on = function(A, e) {
        this._l[A] || (this._l[A] = []), this._l[A].push(e), c.hasOwnProperty(A) && setTimeout((function() {
            c._trigger(A, c[A])
        }), 0)
    }, i._trigger = function(A, e) {
        if (this._l[A]) {
            var o = this._l[A];
            setTimeout((function() {
                var A;
                for (A = 0; A < o.length; A++)(0, o[A])(e)
            }), 0), delete this._l[A]
        }
    }, c._q.push((function() {
        i.addTest = a
    })), c.addAsyncTest((function() {
        function A(n) {
            i++, clearTimeout(e);
            var c = n && "playing" === n.type || 0 !== r.currentTime;
            return !c && l > i ? (e = setTimeout(A, t), o) : (r.removeEventListener("playing", A, !1), a("videoautoplay", c), r.parentNode && r.parentNode.removeChild(r), o)
        }
        var e, t = 200,
            l = 5,
            i = 0,
            r = n("video"),
            d = r.style;
        if (!(c.video && "autoplay" in r)) return a("videoautoplay", !1), o;
        d.position = "absolute", d.height = 0, d.width = 0;
        try {
            if (c.video.ogg) r.src = "data:video/ogg;base64,T2dnUwACAAAAAAAAAABmnCATAAAAAHDEixYBKoB0aGVvcmEDAgEAAQABAAAQAAAQAAAAAAAFAAAAAQAAAAAAAAAAAGIAYE9nZ1MAAAAAAAAAAAAAZpwgEwEAAAACrA7TDlj///////////////+QgXRoZW9yYSsAAABYaXBoLk9yZyBsaWJ0aGVvcmEgMS4xIDIwMDkwODIyIChUaHVzbmVsZGEpAQAAABoAAABFTkNPREVSPWZmbXBlZzJ0aGVvcmEtMC4yOYJ0aGVvcmG+zSj3uc1rGLWpSUoQc5zmMYxSlKQhCDGMYhCEIQhAAAAAAAAAAAAAEW2uU2eSyPxWEvx4OVts5ir1aKtUKBMpJFoQ/nk5m41mUwl4slUpk4kkghkIfDwdjgajQYC8VioUCQRiIQh8PBwMhgLBQIg4FRba5TZ5LI/FYS/Hg5W2zmKvVoq1QoEykkWhD+eTmbjWZTCXiyVSmTiSSCGQh8PB2OBqNBgLxWKhQJBGIhCHw8HAyGAsFAiDgUCw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDAwPEhQUFQ0NDhESFRUUDg4PEhQVFRUOEBETFBUVFRARFBUVFRUVEhMUFRUVFRUUFRUVFRUVFRUVFRUVFRUVEAwLEBQZGxwNDQ4SFRwcGw4NEBQZHBwcDhATFhsdHRwRExkcHB4eHRQYGxwdHh4dGxwdHR4eHh4dHR0dHh4eHRALChAYKDM9DAwOExo6PDcODRAYKDlFOA4RFh0zV1A+EhYlOkRtZ00YIzdAUWhxXDFATldneXhlSFxfYnBkZ2MTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTEhIVGRoaGhoSFBYaGhoaGhUWGRoaGhoaGRoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhESFh8kJCQkEhQYIiQkJCQWGCEkJCQkJB8iJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQREhgvY2NjYxIVGkJjY2NjGBo4Y2NjY2MvQmNjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRISEhUXGBkbEhIVFxgZGxwSFRcYGRscHRUXGBkbHB0dFxgZGxwdHR0YGRscHR0dHhkbHB0dHR4eGxwdHR0eHh4REREUFxocIBERFBcaHCAiERQXGhwgIiUUFxocICIlJRcaHCAiJSUlGhwgIiUlJSkcICIlJSUpKiAiJSUlKSoqEBAQFBgcICgQEBQYHCAoMBAUGBwgKDBAFBgcICgwQEAYHCAoMEBAQBwgKDBAQEBgICgwQEBAYIAoMEBAQGCAgAfF5cdH1e3Ow/L66wGmYnfIUbwdUTe3LMRbqON8B+5RJEvcGxkvrVUjTMrsXYhAnIwe0dTJfOYbWrDYyqUrz7dw/JO4hpmV2LsQQvkUeGq1BsZLx+cu5iV0e0eScJ91VIQYrmqfdVSK7GgjOU0oPaPOu5IcDK1mNvnD+K8LwS87f8Jx2mHtHnUkTGAurWZlNQa74ZLSFH9oF6FPGxzLsjQO5Qe0edcpttd7BXBSqMCL4k/4tFrHIPuEQ7m1/uIWkbDMWVoDdOSuRQ9286kvVUlQjzOE6VrNguN4oRXYGkgcnih7t13/9kxvLYKQezwLTrO44sVmMPgMqORo1E0sm1/9SludkcWHwfJwTSybR4LeAz6ugWVgRaY8mV/9SluQmtHrzsBtRF/wPY+X0JuYTs+ltgrXAmlk10xQHmTu9VSIAk1+vcvU4ml2oNzrNhEtQ3CysNP8UeR35wqpKUBdGdZMSjX4WVi8nJpdpHnbhzEIdx7mwf6W1FKAiucMXrWUWVjyRf23chNtR9mIzDoT/6ZLYailAjhFlZuvPtSeZ+2oREubDoWmT3TguY+JHPdRVSLKxfKH3vgNqJ/9emeEYikGXDFNzaLjvTeGAL61mogOoeG3y6oU4rW55ydoj0lUTSR/mmRhPmF86uwIfzp3FtiufQCmppaHDlGE0r2iTzXIw3zBq5hvaTldjG4CPb9wdxAme0SyedVKczJ9AtYbgPOzYKJvZZImsN7ecrxWZg5dR6ZLj/j4qpWsIA+vYwE+Tca9ounMIsrXMB4Stiib2SPQtZv+FVIpfEbzv8ncZoLBXc3YBqTG1HsskTTotZOYTG+oVUjLk6zhP8bg4RhMUNtfZdO7FdpBuXzhJ5Fh8IKlJG7wtD9ik8rWOJxy6iQ3NwzBpQ219mlyv+FLicYs2iJGSE0u2txzed++D61ZWCiHD/cZdQVCqkO2gJpdpNaObhnDfAPrT89RxdWFZ5hO3MseBSIlANppdZNIV/Rwe5eLTDvkfWKzFnH+QJ7m9QWV1KdwnuIwTNtZdJMoXBf74OhRnh2t+OTGL+AVUnIkyYY+QG7g9itHXyF3OIygG2s2kud679ZWKqSFa9n3IHD6MeLv1lZ0XyduRhiDRtrNnKoyiFVLcBm0ba5Yy3fQkDh4XsFE34isVpOzpa9nR8iCpS4HoxG2rJpnRhf3YboVa1PcRouh5LIJv/uQcPNd095ickTaiGBnWLKVWRc0OnYTSyex/n2FofEPnDG8y3PztHrzOLK1xo6RAml2k9owKajOC0Wr4D5x+3nA0UEhK2m198wuBHF3zlWWVKWLN1CHzLClUfuoYBcx4b1llpeBKmbayaR58njtE9onD66lUcsg0Spm2snsb+8HaJRn4dYcLbCuBuYwziB8/5U1C1DOOz2gZjSZtrLJk6vrLF3hwY4Io9xuT/ruUFRSBkNtUzTOWhjh26irLEPx4jPZL3Fo3QrReoGTTM21xYTT9oFdhTUIvjqTkfkvt0bzgVUjq/hOYY8j60IaO/0AzRBtqkTS6R5ellZd5uKdzzhb8BFlDdAcrwkE0rbXTOPB+7Y0FlZO96qFL4Ykg21StJs8qIW7h16H5hGiv8V2Cflau7QVDepTAHa6Lgt6feiEvJDM21StJsmOH/hynURrKxvUpQ8BH0JF7BiyG2qZpnL/7AOU66gt+reLEXY8pVOCQvSsBtqZTNM8bk9ohRcwD18o/WVkbvrceVKRb9I59IEKysjBeTMmmbA21xu/6iHadLRxuIzkLpi8wZYmmbbWi32RVAUjruxWlJ//iFxE38FI9hNKOoCdhwf5fDe4xZ81lgREhK2m1j78vW1CqkuMu/AjBNK210kzRUX/B+69cMMUG5bYrIeZxVSEZISmkzbXOi9yxwIfPgdsov7R71xuJ7rFcACjG/9PzApqFq7wEgzNJm2suWESPuwrQvejj7cbnQxMkxpm21lUYJL0fKmogPPqywn7e3FvB/FCNxPJ85iVUkCE9/tLKx31G4CgNtWTTPFhMvlu8G4/TrgaZttTChljfNJGgOT2X6EqpETy2tYd9cCBI4lIXJ1/3uVUllZEJz4baqGF64yxaZ+zPLYwde8Uqn1oKANtUrSaTOPHkhvuQP3bBlEJ/LFe4pqQOHUI8T8q7AXx3fLVBgSCVpMba55YxN3rv8U1Dv51bAPSOLlZWebkL8vSMGI21lJmmeVxPRwFlZF1CpqCN8uLwymaZyjbXHCRytogPN3o/n74CNykfT+qqRv5AQlHcRxYrC5KvGmbbUwmZY/29BvF6C1/93x4WVglXDLFpmbapmF89HKTogRwqqSlGbu+oiAkcWFbklC6Zhf+NtTLFpn8oWz+HsNRVSgIxZWON+yVyJlE5tq/+GWLTMutYX9ekTySEQPLVNQQ3OfycwJBM0zNtZcse7CvcKI0V/zh16Dr9OSA21MpmmcrHC+6pTAPHPwoit3LHHqs7jhFNRD6W8+EBGoSEoaZttTCZljfduH/fFisn+dRBGAZYtMzbVMwvul/T/crK1NQh8gN0SRRa9cOux6clC0/mDLFpmbarmF8/e6CopeOLCNW6S/IUUg3jJIYiAcDoMcGeRbOvuTPjXR/tyo79LK3kqqkbxkkMRAOB0GODPItnX3Jnxro/25Ud+llbyVVSN4ySGIgHA6DHBnkWzr7kz410f7cqO/Syt5KqpFVJwn6gBEvBM0zNtZcpGOEPiysW8vvRd2R0f7gtjhqUvXL+gWVwHm4XJDBiMpmmZtrLfPwd/IugP5+fKVSysH1EXreFAcEhelGmbbUmZY4Xdo1vQWVnK19P4RuEnbf0gQnR+lDCZlivNM22t1ESmopPIgfT0duOfQrsjgG4tPxli0zJmF5trdL1JDUIUT1ZXSqQDeR4B8mX3TrRro/2McGeUvLtwo6jIEKMkCUXWsLyZROd9P/rFYNtXPBli0z398iVUlVKAjFlY437JXImUTm2r/4ZYtMy61hf16RPJIU9nZ1MABAwAAAAAAAAAZpwgEwIAAABhp658BScAAAAAAADnUFBQXIDGXLhwtttNHDhw5OcpQRMETBEwRPduylKVB0HRdF0A";
            else {
                if (!c.video.h264) return a("videoautoplay", !1), o;
                r.src = "data:video/mp4;base64,AAAAIGZ0eXBpc29tAAACAGlzb21pc28yYXZjMW1wNDEAAAAIZnJlZQAAAs1tZGF0AAACrgYF//+q3EXpvebZSLeWLNgg2SPu73gyNjQgLSBjb3JlIDE0OCByMjYwMSBhMGNkN2QzIC0gSC4yNjQvTVBFRy00IEFWQyBjb2RlYyAtIENvcHlsZWZ0IDIwMDMtMjAxNSAtIGh0dHA6Ly93d3cudmlkZW9sYW4ub3JnL3gyNjQuaHRtbCAtIG9wdGlvbnM6IGNhYmFjPTEgcmVmPTMgZGVibG9jaz0xOjA6MCBhbmFseXNlPTB4MzoweDExMyBtZT1oZXggc3VibWU9NyBwc3k9MSBwc3lfcmQ9MS4wMDowLjAwIG1peGVkX3JlZj0xIG1lX3JhbmdlPTE2IGNocm9tYV9tZT0xIHRyZWxsaXM9MSA4eDhkY3Q9MSBjcW09MCBkZWFkem9uZT0yMSwxMSBmYXN0X3Bza2lwPTEgY2hyb21hX3FwX29mZnNldD0tMiB0aHJlYWRzPTEgbG9va2FoZWFkX3RocmVhZHM9MSBzbGljZWRfdGhyZWFkcz0wIG5yPTAgZGVjaW1hdGU9MSBpbnRlcmxhY2VkPTAgYmx1cmF5X2NvbXBhdD0wIGNvbnN0cmFpbmVkX2ludHJhPTAgYmZyYW1lcz0zIGJfcHlyYW1pZD0yIGJfYWRhcHQ9MSBiX2JpYXM9MCBkaXJlY3Q9MSB3ZWlnaHRiPTEgb3Blbl9nb3A9MCB3ZWlnaHRwPTIga2V5aW50PTI1MCBrZXlpbnRfbWluPTEwIHNjZW5lY3V0PTQwIGludHJhX3JlZnJlc2g9MCByY19sb29rYWhlYWQ9NDAgcmM9Y3JmIG1idHJlZT0xIGNyZj0yMy4wIHFjb21wPTAuNjAgcXBtaW49MCBxcG1heD02OSBxcHN0ZXA9NCBpcF9yYXRpbz0xLjQwIGFxPTE6MS4wMACAAAAAD2WIhAA3//728P4FNjuZQQAAAu5tb292AAAAbG12aGQAAAAAAAAAAAAAAAAAAAPoAAAAZAABAAABAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAACGHRyYWsAAABcdGtoZAAAAAMAAAAAAAAAAAAAAAEAAAAAAAAAZAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAEAAAAAAAgAAAAIAAAAAACRlZHRzAAAAHGVsc3QAAAAAAAAAAQAAAGQAAAAAAAEAAAAAAZBtZGlhAAAAIG1kaGQAAAAAAAAAAAAAAAAAACgAAAAEAFXEAAAAAAAtaGRscgAAAAAAAAAAdmlkZQAAAAAAAAAAAAAAAFZpZGVvSGFuZGxlcgAAAAE7bWluZgAAABR2bWhkAAAAAQAAAAAAAAAAAAAAJGRpbmYAAAAcZHJlZgAAAAAAAAABAAAADHVybCAAAAABAAAA+3N0YmwAAACXc3RzZAAAAAAAAAABAAAAh2F2YzEAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAgACAEgAAABIAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAY//8AAAAxYXZjQwFkAAr/4QAYZ2QACqzZX4iIhAAAAwAEAAADAFA8SJZYAQAGaOvjyyLAAAAAGHN0dHMAAAAAAAAAAQAAAAEAAAQAAAAAHHN0c2MAAAAAAAAAAQAAAAEAAAABAAAAAQAAABRzdHN6AAAAAAAAAsUAAAABAAAAFHN0Y28AAAAAAAAAAQAAADAAAABidWR0YQAAAFptZXRhAAAAAAAAACFoZGxyAAAAAAAAAABtZGlyYXBwbAAAAAAAAAAAAAAAAC1pbHN0AAAAJal0b28AAAAdZGF0YQAAAAEAAAAATGF2ZjU2LjQwLjEwMQ=="
            }
        } catch (A) {
            return a("videoautoplay", !1), o
        }
        r.setAttribute("autoplay", ""), r.style.cssText = "display:none", h.appendChild(r), setTimeout((function() {
            r.addEventListener("playing", A, !1), e = setTimeout(A, t)
        }), 0)
    })), (function() {
        var A, e, o, n, a, i;
        for (var r in l)
            if (l.hasOwnProperty(r)) {
                if (A = [], (e = l[r]).name && (A.push(e.name.toLowerCase()), e.options && e.options.aliases && e.options.aliases.length))
                    for (o = 0; o < e.options.aliases.length; o++) A.push(e.options.aliases[o].toLowerCase());
                for (n = t(e.fn, "function") ? e.fn() : e.fn, a = 0; a < A.length; a++) 1 === (i = A[a].split(".")).length ? c[i[0]] = n : (!c[i[0]] || c[i[0]] instanceof Boolean || (c[i[0]] = new Boolean(c[i[0]])), c[i[0]][i[1]] = n), d.push((n ? "" : "no-") + i.join("-"))
            }
    })(), delete i.addTest, delete i.addAsyncTest;
    for (var R = 0; R < c._q.length; R++) c._q[R]();
    A.Modernizr = c
})(window, document);
"use strict";
window.helpers = (function() {
    var e = function(e) {
            return "[data-action~='" + e + "']"
        },
        n = function(e) {
            if (!e) return 0;
            var n = 0,
                r = (e = e.toString()).length;
            if (0 === r) return n;
            for (var t = 0; t < r; t++) {
                n = (n << 5) - n + e.charCodeAt(t), n &= n
            }
            return Math.abs(n)
        },
        r = function(e, n, r) {
            if (r <= n) return e;
            var t = (e.length / r + 1) / 2,
                a = Math.round(n * t);
            return htmlTruncate(e, a, {
                ellipsis: "…",
                keepImageTag: !0
            })
        },
        t = function(e) {
            var n;
            switch (e) {
                case "youtube":
                    return "YouTube";
                case "rss":
                    return "RSS";
                case "ads":
                    return "Advertising";
                case "vkontakte":
                    return "VKontakte";
                default:
                    return (n = e).charAt(0).toUpperCase() + n.slice(1)
            }
        },
        a = function(e) {
            return "@" + e.username
        },
        u = function(e) {
            var n = e.external_name;
            return {
                username: n,
                name: e.external_fullname || n
            }
        },
        i = function(e) {
            var n, r = u(e);
            return "twitter" === e.type ? a(r) : "instagram" === e.type ? (n = r).username ? "@" + n.username : helpers.translation.__("UNKNOWN_NETWORK_USER", t("instagram")) : r.username
        },
        o = function(e) {
            var n, r = u(e);
            switch (e.type) {
                case "twitter":
                    return (n = r).name || a(n);
                case "instagram":
                    return (function(e) {
                        return e.name ? e.name : helpers.translation.__("UNKNOWN_NETWORK_USER", t("instagram"))
                    })(r);
                case "facebook":
                    return (function(e) {
                        var n = void 0;
                        return e && (_.isPlainObject(e) ? n = e.name || e.title || e.username || e.id : "number" == typeof e ? n = "" + e : "string" == typeof e && (n = e)), n || helpers.translation.__("UNKNOWN_NETWORK_USER", t("facebook"))
                    })(r);
                case "youtube":
                    return (function(e) {
                        return e.name
                    })(r);
                case "pinterest":
                    return (function(e) {
                        return e.name ? e.name : helpers.translation.__("UNKNOWN_NETWORK_USER", t("pinterest"))
                    })(r)
            }
            return r.name
        },
        c = function(e) {
            return !!e.external_name && (!!e.external_fullname && e.external_name !== e.external_fullname)
        };
    return {
        $actionElement: function(n) {
            return $(e(n))
        },
        actionSelector: e,
        autoBind: function(e) {
            var n = !0,
                r = !1,
                t = void 0;
            try {
                for (var a, u = Object.getOwnPropertyNames(e.constructor.prototype)[Symbol.iterator](); !(n = (a = u.next()).done); n = !0) {
                    var i = a.value,
                        o = e[i];
                    "constructor" !== i && "function" == typeof o && (e[i] = o.bind(e))
                }
            } catch (e) {
                r = !0, t = e
            } finally {
                try {
                    !n && u.return && u.return()
                } finally {
                    if (r) throw t
                }
            }
            return e
        },
        getChannelName: t,
        getSourceName: function(e, n) {
            return t(e) + " " + (function(e, n) {
                return n || ("facebook" === e ? "page" : "profile")
            })(e, n)
        },
        getUnixTimestamp: function() {
            return Math.floor(Date.now() / 1e3)
        },
        checkins: {
            getShortName: i,
            getFullName: o,
            getCombinedName: function(e) {
                var n = i(e),
                    r = o(e);
                return r ? n ? c(e) ? n + " (" + r + ")" : n : r : n
            },
            hasSeparateNames: c
        },
        jQuery: {
            stringify: function(e) {
                return $("<div>").append(e.clone()).html()
            }
        },
        string: {
            hash: n
        },
        integer: {
            ceilTo: function(e) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
                return Math.ceil(e / n) * n
            },
            getRandomSeededInt: function(e, r, t) {
                t += 1, e = n(e);
                var a = (e = 1e4 * Math.sin(e)) - Math.floor(e);
                return Math.floor(a * (t - r)) + r
            }
        },
        slug: {
            fromId: function(e) {
                return (function(e, n) {
                    var r = "",
                        t = e;
                    do {
                        var a = t % n;
                        t = Math.floor(t / n), r = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz+/".charAt(a) + r
                    } while (0 !== t);
                    return r
                })(e, 62)
            },
            toId: function(e) {
                return n = 62, e.split("").reduce((function(e, r) {
                    return e * n + "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz+/".indexOf(r)
                }), 0);
                var n
            }
        },
        truncateTransformedTextPrecise: function(e, n, t) {
            for (var a = n, u = 0;;) {
                var i = r(e, a, t);
                if ($("<div>").html(i).text().length <= n) return i;
                if (a = Math.ceil(.9 * a), ++u >= 50) return i
            }
        },
        addLineBreaks: function(e) {
            if (!e) return "";
            var n = e.replace(/(\n[\n]|\r[\r]|\n[\r]|\r[\n])+/g, "\n\n");
            return n = (n = n.replace(/\n[\n]+/g, "\n\n")).replace(/\n/g, "<br>")
        }
    }
})();
"use strict";
var _createClass = (function() {
    function a(a, t) {
        for (var e = 0; e < t.length; e++) {
            var n = t[e];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(a, n.key, n)
        }
    }
    return function(t, e, n) {
        return e && a(t.prototype, e), n && a(t, n), t
    }
})();

function _classCallCheck(a, t) {
    if (!(a instanceof t)) throw new TypeError("Cannot call a class as a function")
}!(function() {
    var a = $(document.documentElement),
        t = (function() {
            function t() {
                _classCallCheck(this, t)
            }
            return _createClass(t, null, [{
                key: "addRule",
                value: function(a, t) {
                    var e = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1,
                        n = $("#dynamic-css");
                    0 === n.length && (n = $("<style>").attr("id", "dynamic-css").appendTo("body"));
                    var s = n[0].sheet;
                    e < 0 && (e = _.get(s, "cssRules.length", 0)), "addRule" in s ? s.addRule(a, t, e) : "insertRule" in s && s.insertRule(a + "{" + t + "}", e)
                }
            }, {
                key: "getTransformAngle",
                value: function(a, t, e) {
                    return e < a / 2 ? (function(a, t, e) {
                        var n = a,
                            s = e,
                            o = t,
                            l = n / 2 - s,
                            r = Math.atan(o / l),
                            u = Math.asin(s * Math.sin(r) / n);
                        return (Math.PI - r - u) * (180 / Math.PI)
                    })(a, t, e) : (function(a, t, e) {
                        var n = t / a * 2,
                            s = Math.atan(n),
                            o = Math.sin(s),
                            l = t / o,
                            r = e,
                            u = r * r + l * l - 2 * r * l * Math.cos(s),
                            i = l * o / Math.sqrt(u),
                            c = Math.asin(i),
                            h = Math.PI - c,
                            d = r * Math.sin(h) / a,
                            f = Math.asin(d),
                            v = (Math.PI - h - f) * (180 / Math.PI);
                        return v < 0 ? 0 : v
                    })(a, t, e)
                }
            }, {
                key: "setCustomCss",
                value: function(a) {
                    var t = $("#custom-css");
                    0 === t.length && (t = $("<style>").attr("id", "custom-css").appendTo("body")), t.text(a)
                }
            }, {
                key: "addRootClass",
                value: function(t) {
                    return a.addClass(t)
                }
            }, {
                key: "removeRootClass",
                value: function(t) {
                    return a.removeClass(t)
                }
            }, {
                key: "hasRootClass",
                value: function(t) {
                    return a.hasClass(t)
                }
            }, {
                key: "changeRootClass",
                value: function(a, e) {
                    e ? t.addRootClass(a) : t.removeRootClass(a)
                }
            }, {
                key: "toggleRootClass",
                value: function(a) {
                    var e = t.hasRootClass(a);
                    t.changeRootClass(a, !e)
                }
            }, {
                key: "setWallInitializedClasses",
                value: function() {
                    t.removeRootClass("wall-loading"), t.addRootClass("wall-initialized")
                }
            }]), t
        })();
    window.helpers.Css = t
})();
"use strict";
helpers.Event = {
    triggerEvent: function(t) {
        var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : window,
            e = (function(t) {
                if ("function" == typeof CustomEvent) return new CustomEvent(t);
                var n = document.createEvent("Event");
                return n.initEvent(t, !0, !0), n
            })(t);
        return n.dispatchEvent(e)
    }
};
"use strict";
var _createClass = (function() {
    function t(t, i) {
        for (var a = 0; a < i.length; a++) {
            var n = i[a];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
        }
    }
    return function(i, a, n) {
        return a && t(i.prototype, a), n && t(i, n), i
    }
})();

function _classCallCheck(t, i) {
    if (!(t instanceof i)) throw new TypeError("Cannot call a class as a function")
}!(function() {
    var t = {
            appear: {
                hiddenStyle: {
                    opacity: 0
                },
                visibleStyle: {
                    opacity: 1
                }
            },
            slide: {
                hiddenStyle: {
                    opacity: 0,
                    transform: "translateX(-100%)"
                },
                visibleStyle: {
                    opacity: 1,
                    transform: "translateX(0)"
                }
            },
            slideUp: {
                hiddenStyle: {
                    opacity: 0,
                    transform: "translateY(100vh)"
                },
                visibleStyle: {
                    opacity: 1,
                    transform: "translateY(0)"
                }
            },
            zoomIn: {
                hiddenStyle: {
                    opacity: 0,
                    transform: "scale(0.2)"
                },
                visibleStyle: {
                    opacity: 1,
                    transform: "scale(1)"
                }
            },
            zoomOut: {
                hiddenStyle: {
                    opacity: 0,
                    transform: "scale(1.5)"
                },
                visibleStyle: {
                    opacity: 1,
                    transform: "scale(1)"
                }
            },
            turn: {
                hiddenStyle: {
                    opacity: 0,
                    transform: "perspective(100vw) rotateY(-90deg)"
                },
                visibleStyle: {
                    opacity: 1,
                    transform: "perspective(100vw) rotateY(0)"
                }
            }
        },
        i = (function() {
            function i(t) {
                _classCallCheck(this, i), this.checkinTransition = t, this.defaultCheckinTransition = "appear", this.initialStagger = "0.08s", this.normalStagger = null, this.initialTransitionDuration = "0.8s", this.normalTransitionDuration = "0.4s", helpers.autoBind(this)
            }
            return _createClass(i, [{
                key: "getCheckinTransition",
                value: function() {
                    var i = this.checkinTransition;
                    return t[i] || (i = this.defaultCheckinTransition), t[i]
                }
            }, {
                key: "setTransitionMode",
                value: function(t, i) {
                    var a = void 0,
                        n = void 0;
                    "initial" === i ? (a = this.initialStagger, n = this.initialTransitionDuration) : (a = this.normalStagger, n = this.normalTransitionDuration), t.isotope({
                        stagger: a,
                        transitionDuration: n
                    })
                }
            }]), i
        })();
    window.helpers.Isotope = i
})();
"use strict";
var _createClass = (function() {
    function e(e, n) {
        for (var t = 0; t < n.length; t++) {
            var i = n[t];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
        }
    }
    return function(n, t, i) {
        return t && e(n.prototype, t), i && e(n, i), n
    }
})();

function _classCallCheck(e, n) {
    if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function")
}!(function() {
    var e = (function() {
        function e() {
            _classCallCheck(this, e), this.isCancelled = !1, this.scheduledActions = new Immutable.List, helpers.autoBind(this)
        }
        return _createClass(e, [{
            key: "do",
            value: function(e) {
                return this.scheduledActions = this.scheduledActions.push(e), this
            }
        }, {
            key: "wait",
            value: function(n) {
                return this.do((function() {
                    return new Promise(function(t) {
                        var i = e.now();
                        requestAnimationFrame((function r() {
                            if (e.now() > i + n) return t();
                            requestAnimationFrame(r)
                        }))
                    })
                })), this
            }
        }, {
            key: "run",
            value: function() {
                var e = this,
                    n = Promise.resolve();
                return this.scheduledActions.forEach((function(t) {
                    n = n.then((function() {
                        if (!e.isCancelled) return t()
                    }))
                })), this.scheduledActions = this.scheduledActions.clear(), n
            }
        }, {
            key: "cancel",
            value: function() {
                this.scheduledActions = this.scheduledActions.clear(), this.isCancelled = !0
            }
        }], [{
            key: "now",
            value: function() {
                return window.performance && window.performance.now ? window.performance.now() : Date.now()
            }
        }, {
            key: "callAfter",
            value: function(n, t) {
                return (new e).wait(t).do((function() {
                    return n()
                })).run()
            }
        }]), e
    })();
    window.helpers.Animation = e
})();
"use strict";
var _createClass = (function() {
    function e(e, n) {
        for (var r = 0; r < n.length; r++) {
            var a = n[r];
            a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
        }
    }
    return function(n, r, a) {
        return r && e(n.prototype, r), a && e(n, a), n
    }
})();

function _classCallCheck(e, n) {
    if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function")
}!(function() {
    var e = (function() {
        function e(n) {
            _classCallCheck(this, e), this.wallOptions = n
        }
        return _createClass(e, [{
            key: "getReferer",
            value: function() {
                try {
                    var e = document.referrer;
                    return e || null
                } catch (e) {
                    return console.error(e), null
                }
            }
        }, {
            key: "getPartnerId",
            value: function() {
                if (!URLSearchParams) return null;
                var e = window.location.search;
                return new URLSearchParams(e).get("partner_id")
            }
        }, {
            key: "isEmbedConfiguratorEmbed",
            value: function() {
                var e = this.wallOptions.urls.backendEmbed,
                    n = this.getReferer(),
                    r = n && e.startsWith(n),
                    a = helpers.Wall.isIframe();
                return r && a
            }
        }, {
            key: "recordPageview",
            value: function() {
                if (!this.isEmbedConfiguratorEmbed()) {
                    var n = helpers.Wall.isIframe() ? 1 : 0,
                        r = this.wallOptions.wallId,
                        a = this.wallOptions.urls.recordView,
                        t = {
                            wallId: r,
                            embed: n,
                            partnerId: this.getPartnerId()
                        },
                        i = this.getReferer();
                    n && i && (t.embedder = i);
                    var l = a + "?" + $.param(t);
                    e.sendBeacon(l)
                }
            }
        }], [{
            key: "trackGaTiming",
            value: function(e, n, r) {
                if (window.gtag && Date.now && window.gaTokenWallsio) {
                    WallTimings[e] = Date.now();
                    var a = WallTimings[e] - WallTimings.pageload;
                    a > 6e4 || gtag("event", "timing_complete", {
                        send_to: window.gaTokenWallsio,
                        name: r,
                        value: a,
                        event_category: n
                    })
                }
            }
        }, {
            key: "sendBeacon",
            value: function(e) {
                if (navigator.sendBeacon) try {
                    navigator.sendBeacon(e)
                } catch (e) {
                    console.error(e)
                } else betterFetch.text(e, null, {
                    method: "POST"
                })
            }
        }]), e
    })();
    window.helpers.Tracking = e
})();
"use strict";
var _createClass = (function() {
    function e(e, n) {
        for (var t = 0; t < n.length; t++) {
            var a = n[t];
            a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
        }
    }
    return function(n, t, a) {
        return t && e(n.prototype, t), a && e(n, a), n
    }
})();

function _classCallCheck(e, n) {
    if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function")
}!(function() {
    var e = (function() {
        function e(n) {
            _classCallCheck(this, e), this.wallOptions = n
        }
        return _createClass(e, null, [{
            key: "build",
            value: function(e, n) {
                var t = _.get(templates, e);
                return t ? t(n) : ""
            }
        }]), e
    })();
    window.helpers.Templates = e
})();
"use strict";
window.helpers.translation = (function() {
    var t = function(t) {
        for (var a, r = arguments.length, n = Array(r > 1 ? r - 1 : 0), e = 1; e < r; e++) n[e - 1] = arguments[e];
        return (a = i18n).__.apply(a, ["frontend", t].concat(n))
    };
    return {
        __: t,
        __n: function(t, a, r) {
            for (var n = arguments.length, e = Array(n > 3 ? n - 3 : 0), i = 3; i < n; i++) e[i - 3] = arguments[i];
            var l;
            return (l = i18n).__n.apply(l, ["frontend", t, a, r].concat(e))
        },
        translateText: function() {
            var a = function(a, r) {
                var n = r.split("=");
                if (!(n.length < 2)) {
                    var e = n[0],
                        i = n[1];
                    e && i && a.attr(e, t(i))
                }
            };
            $("[data-translate]").each((function() {
                var a = $(this),
                    r = a.data("translate");
                a.html(t(r))
            })), $("[data-translate-attribute]").each((function() {
                var t = $(this),
                    r = t.data("translate-attribute").split("|"),
                    n = !0,
                    e = !1,
                    i = void 0;
                try {
                    for (var l, o = r[Symbol.iterator](); !(n = (l = o.next()).done); n = !0) {
                        var c = l.value;
                        a(t, c)
                    }
                } catch (t) {
                    e = !0, i = t
                } finally {
                    try {
                        !n && o.return && o.return()
                    } finally {
                        if (e) throw i
                    }
                }
            }))
        }
    }
})();
"use strict";
var _createClass = (function() {
    function e(e, t) {
        for (var n = 0; n < t.length; n++) {
            var i = t[n];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
        }
    }
    return function(t, n, i) {
        return n && e(t.prototype, n), i && e(t, i), t
    }
})();

function _classCallCheck(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
}!(function() {
    var e = $(window),
        t = helpers.translation.__,
        n = helpers.translation.__n,
        i = helpers.Animation,
        o = helpers.Css,
        a = o.addRootClass,
        r = o.hasRootClass,
        l = o.removeRootClass,
        s = (function() {
            function o(e) {
                _classCallCheck(this, o), this.wallOptions = e, this.disconnectTimeout = null, this.reconnectTimeout = null, this.serverStartedAt = null, helpers.autoBind(this)
            }
            return _createClass(o, [{
                key: "prepareEntities",
                value: function(e) {
                    if (!e.entities) return e;
                    var t = void 0;
                    try {
                        t = JSON.parse(e.entities)
                    } catch (e) {}
                    return t || (t = {}), e.entities = t, e
                }
            }, {
                key: "prepareVideo",
                value: function(e) {
                    var t = e.post_video;
                    if (!t) return e;
                    var n = e.post_video_key;
                    return this.wallOptions.mediaProxyHost ? (e.post_video = this.wallOptions.mediaProxyHost + "?src=" + encodeURIComponent(t) + "&key=" + n, e) : (e.post_video = helpers.Wall.forceSSL(e.post_video), e)
                }
            }, {
                key: "getRandomCheckinColorClass",
                value: function(e) {
                    var t = this.wallOptions.colorCount;
                    return "checkin-color-" + helpers.integer.getRandomSeededInt(e, 1, t)
                }
            }, {
                key: "initNotificationBar",
                value: function() {
                    this.wallOptions.overlayBar && o.showNotificationBar(this.wallOptions.overlayBar)
                }
            }, {
                key: "generateInstructions",
                value: function() {
                    var e = $(".post_instructions"),
                        n = this.wallOptions.postInstructions,
                        i = $("<ul>"),
                        o = n.basic || [],
                        a = n.networks || [],
                        r = !0,
                        l = !1,
                        s = void 0;
                    try {
                        for (var c, u = o[Symbol.iterator](); !(r = (c = u.next()).done); r = !0) {
                            var d = c.value;
                            if (d) {
                                var f = $("<li>").text(d);
                                i.append(f)
                            }
                        }
                    } catch (e) {
                        l = !0, s = e
                    } finally {
                        try {
                            !r && u.return && u.return()
                        } finally {
                            if (l) throw s
                        }
                    }
                    var h = !0,
                        v = !1,
                        p = void 0;
                    try {
                        for (var w, m = a[Symbol.iterator](); !(h = (w = m.next()).done); h = !0) {
                            var g = w.value;
                            f = $("<li>").html(t(g.message, g.tags));
                            i.append(f)
                        }
                    } catch (e) {
                        v = !0, p = e
                    } finally {
                        try {
                            !h && m.return && m.return()
                        } finally {
                            if (v) throw p
                        }
                    }
                    e.addClass("post-instructions-hidden"), e.html(i.contents())
                }
            }, {
                key: "loopInstructions",
                value: function() {
                    var e = $(".post_instructions"),
                        t = e.find("li"),
                        n = e.find("li.is-visible"),
                        o = this.wallOptions.postInstructionDisplayDuration;
                    if (t.length) {
                        var a = n.next();
                        a.length || (a = e.find("li").first());
                        var r = (new i).do((function() {
                            e.addClass("post-instructions-hidden")
                        })).wait(450).do((function() {
                            n.removeClass("is-visible"), a.addClass("is-visible")
                        })).wait(500).do((function() {
                            e.removeClass("post-instructions-hidden")
                        }));
                        t.length > 1 && (r = r.wait(o).do(this.loopInstructions)), r.run()
                    }
                }
            }, {
                key: "getWallSocket",
                value: function() {
                    var e = this,
                        t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        n = {
                            wallId: this.wallOptions.wallId,
                            client: "wallsio-frontend",
                            initialCheckins: this.wallOptions.initialCheckins,
                            network: this.wallOptions.network
                        },
                        i = Object.assign(n, t);
                    _.each(i, (function(e, t) {
                        !0 === e && (i[t] = 1), !1 === e && (i[t] = 0)
                    }));
                    var a = $.param(i),
                        r = this.wallOptions.nodeUrl + "?" + a,
                        l = io(r, {
                            autoConnect: !this.wallOptions.startInStaticMode,
                            forceNew: !0,
                            reconnectionDelay: 100,
                            reconnectionDelayMax: 3e4,
                            timeout: 1e3,
                            transports: ["websocket"],
                            withCredentials: !0
                        });
                    return l.on("reload wall", (function() {
                        o.reloadWall(l)
                    })), l.on("wallping", (function(t) {
                        e.serverStartedAt || (e.serverStartedAt = t.serverStartedAt)
                    })), $(document).on("Wallsio.disconnectSocket", (function() {
                        var e = _.get(l, "_callbacks[$stop][0]");
                        "function" == typeof e && e()
                    })), l.isPollingEnabled = function() {
                        return "polling" === l.io.opts.transports[0]
                    }, l.on("connect_error", (function() {
                        return setTimeout((function() {
                            l.io.opts.transports = ["polling", "websocket"], l.io.opts.timeout = 2e4
                        }), 0)
                    })), l
                }
            }, {
                key: "initDynamicDisconnect",
                value: function(e) {
                    var t = this;
                    if (!this.wallOptions.startInStaticMode) {
                        $(document).on("visibilitychange", (function() {
                            "visible" === document.visibilityState ? (clearTimeout(t.disconnectTimeout), e.connected || (t.reconnectTimeout = setTimeout((function() {
                                e.connect(), l("socket-disconnected")
                            }), 1500))) : (clearTimeout(t.reconnectTimeout), e.connected && (t.disconnectTimeout = setTimeout((function() {
                                e.disconnect(), a("socket-disconnected")
                            }), 48e4)))
                        }))
                    }
                }
            }, {
                key: "loadCachedCheckins",
                value: function() {
                    return betterFetch.json(this.wallOptions.urls.cachedCheckins, {
                        count: this.wallOptions.initialCheckins,
                        wallId: this.wallOptions.wallId
                    }).then((function(e) {
                        return e.cachedCheckins
                    })).catch((function(e) {
                        return console.error(e), []
                    }))
                }
            }], [{
                key: "reloadWall",
                value: function(e) {
                    e.disconnect(), $(document).off("visibilitychange");
                    var t = Math.floor(500 + 6e4 * Math.random());
                    setTimeout((function() {
                        location.reload()
                    }), t)
                }
            }, {
                key: "humanTimeDiff",
                value: function(e) {
                    if ((e = Math.floor(e / 1e3)) < 5) return t("THIS_MOMENT");
                    if (e < 60) {
                        var i = Math.floor(e);
                        return n("A_SECOND_AGO", "%s_SECONDS_AGO", i, i)
                    }
                    if (e < 3600) {
                        var o = Math.floor(e / 60);
                        return n("A_MINUTE_AGO", "%s_MINUTES_AGO", o, o)
                    }
                    if (e < 86400) {
                        var a = Math.floor(e / 3600);
                        return n("AN_HOUR_AGO", "%s_HOURS_AGO", a, a)
                    }
                    if (e < 2592e3) {
                        var r = Math.floor(e / 86400);
                        return n("A_DAY_AGO", "%s_DAYS_AGO", r, r)
                    }
                    var l = Math.floor(e / 604800);
                    return n("A_WEEK_AGO", "%s_WEEKS_AGO", l, l)
                }
            }, {
                key: "forceSSL",
                value: function(e) {
                    return _.isString(e) ? e.replace(/^http:/i, "https:") : e
                }
            }, {
                key: "showNotificationBar",
                value: function(e) {
                    var t = e.markup,
                        n = e.autoshowhideInterval,
                        i = e.displayTimeout,
                        a = void 0 === i ? 4e3 : i,
                        r = $("<div>").append(t),
                        l = $(".wall-notifications"),
                        s = r.find(".wall-notification"),
                        c = r.find("link"),
                        u = !!r.find(".wall-notification-trial");
                    c.on("load", (function() {
                        if (l.append(s), setTimeout((function() {
                                s.addClass("wall-notification-visible"), n && setInterval((function() {
                                    s.toggleClass("wall-notification-visible")
                                }), n)
                            }), a), u) {
                            var e = document.getElementById("trial-banner-upgrade-btn");
                            e && o.trackMixpanelEvent(e, "click", "Upgrade Prompt Selected", {
                                upgradeLocation: "wall"
                            })
                        }
                    })), $("head").append(c)
                }
            }, {
                key: "trackMixpanelEvent",
                value: function(e, t, n) {
                    var i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
                    e && window.mixpanel && e.addEventListener(t, (function() {
                        window.mixpanel.track(n, i)
                    }))
                }
            }, {
                key: "getElementTypeClassPrefix",
                value: function(e) {
                    return "wrapper" === e ? "checkin-wrapper-" : "checkin" === e ? "checkin-" : (console.error('elementType should be "wrapper" or "checkin", "' + e + '" found'), "blah-")
                }
            }, {
                key: "getImageAndMessageClasses",
                value: function(e, t, n) {
                    var i = o.getElementTypeClassPrefix(e);
                    return t && n ? [i + "with-image", i + "with-message", i + "with-image-and-message"] : t ? [i + "with-image", i + "without-message"] : n ? [i + "with-message", i + "without-image"] : [i + "without-image-and-message", i + "without-message", i + "without-image"]
                }
            }, {
                key: "addImageAndMessageClasses",
                value: function(e, t, n, i) {
                    var a = o.getImageAndMessageClasses(t, n, i);
                    return e.addClass(a), e
                }
            }, {
                key: "isAppScrollable",
                value: function() {
                    return r("scrollable")
                }
            }, {
                key: "isPreviewIframe",
                value: function() {
                    return r("preview-iframe")
                }
            }, {
                key: "hasPreviewIframe",
                value: function() {
                    return window === parent && $(".wall-preview-iframe").length > 0
                }
            }, {
                key: "isIframe",
                value: function() {
                    try {
                        return window.self !== window.top && !o.isPreviewIframe()
                    } catch (e) {
                        return !0
                    }
                }
            }, {
                key: "isMobile",
                value: function() {
                    return r("mobile")
                }
            }, {
                key: "isAutoheight",
                value: function() {
                    return o.isIframe() && r("autoheight")
                }
            }, {
                key: "isWidget",
                value: function() {
                    return o.isIframe() && r("is-widget")
                }
            }, {
                key: "isInViewport",
                value: function(t) {
                    var n = t.getBoundingClientRect();
                    return n.bottom >= 0 && n.right >= 0 && n.top <= e.height() && n.left <= e.width()
                }
            }, {
                key: "getWallHeight",
                value: function() {
                    var e = document.body.scrollHeight;
                    return e - document.body.clientHeight > 1 ? Math.min(document.body.scrollHeight, document.body.clientHeight) : e
                }
            }, {
                key: "hideWallInfo",
                value: function() {
                    a("hide-wall-info")
                }
            }, {
                key: "showWallInfo",
                value: function(e) {
                    l("hide-wall-info"), $(".wall-info").removeClass("wall-info-loading").text(e)
                }
            }, {
                key: "updateTimestamps",
                value: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                    (t ? $(".checkin-" + t).find(".checkin-timestamp") : $(".checkin-timestamp")).each((function() {
                        var t = $(this).attr("data-timestamp");
                        if (t) {
                            var n = e || Date.now();
                            $(this).text(o.getRelativeTimeString(n, t))
                        }
                    }))
                }
            }, {
                key: "getRelativeTimeString",
                value: function(e, t) {
                    var n = e - t;
                    return o.humanTimeDiff(n)
                }
            }, {
                key: "getWindowMode",
                value: function() {
                    return e.width() > e.height() ? "landscape" : "portrait"
                }
            }, {
                key: "isLandscape",
                value: function() {
                    return "landscape" === o.getWindowMode()
                }
            }, {
                key: "isPortrait",
                value: function() {
                    return "portrait" === o.getWindowMode()
                }
            }]), o
        })();
    window.helpers.Wall = s
})();
"use strict";
var _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
    } : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    },
    _slicedToArray = (function() {
        return function(e, t) {
            if (Array.isArray(e)) return e;
            if (Symbol.iterator in Object(e)) return (function(e, t) {
                var r = [],
                    i = !0,
                    n = !1,
                    a = void 0;
                try {
                    for (var o, l = e[Symbol.iterator](); !(i = (o = l.next()).done) && (r.push(o.value), !t || r.length !== t); i = !0);
                } catch (e) {
                    n = !0, a = e
                } finally {
                    try {
                        !i && l.return && l.return()
                    } finally {
                        if (n) throw a
                    }
                }
                return r
            })(e, t);
            throw new TypeError("Invalid attempt to destructure non-iterable instance")
        }
    })(),
    _createClass = (function() {
        function e(e, t) {
            for (var r = 0; r < t.length; r++) {
                var i = t[r];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
            }
        }
        return function(t, r, i) {
            return r && e(t.prototype, r), i && e(t, i), t
        }
    })();

function _classCallCheck(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
}!(function() {
    var e = ["post_image", "external_image"],
        t = ["post_image", "external_image"],
        r = (function() {
            function r(e) {
                _classCallCheck(this, r), this.wallOptions = e, helpers.autoBind(this)
            }
            return _createClass(r, [{
                key: "makeUrlAbsolute",
                value: function(e) {
                    return r.isAbsoluteUrl(e) ? e : "https://dev.walls.io" + e
                }
            }, {
                key: "getSlimProxyUrl",
                value: function(e, t, i) {
                    var n = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
                        a = this.wallOptions.imageSlimproxyHost;
                    if (!a || !r.isAbsoluteUrl(e)) return e;
                    var o = {
                        src: e,
                        w: this.wallOptions.proxyImageWidth,
                        h: this.wallOptions.proxyImageHeight,
                        q: this.wallOptions.proxyImageQuality,
                        nu: 1,
                        salt: this.wallOptions.proxySalt
                    };
                    t && (o.key = t), this.wallOptions.proxyNoCache && (o.nc = 1), _.isPlainObject(i) && (o = Object.assign(o, i));
                    var l = n ? r.getDevicePixelRatio() : 1;
                    return o.w && (o.w = o.w * l), o.h && (o.h = o.h * l), e = a + "?" + $.param(o)
                }
            }, {
                key: "getImageProxyUrl",
                value: function(e, t, i) {
                    var n = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
                        a = this.wallOptions.imageProxyHost;
                    if (!a) return "";
                    var o = {
                        w: this.wallOptions.proxyImageWidth,
                        h: this.wallOptions.proxyImageHeight,
                        q: this.wallOptions.proxyImageQuality,
                        nu: 1
                    };
                    t && (o.key = t), this.wallOptions.proxyNoCache && (o.nc = 1), _.isPlainObject(i) && (o = Object.assign(o, i));
                    var l = n ? r.getDevicePixelRatio() : 1;
                    return o.w && (o.w = o.w * l), o.h && (o.h = o.h * l), a + e + "?" + $.param(o)
                }
            }, {
                key: "slimProxyImage",
                value: function(e, t, r) {
                    var i = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
                    return e = this.makeUrlAbsolute(e), e = this.getSlimProxyUrl(e, t, r, i), e = helpers.Wall.forceSSL(e)
                }
            }, {
                key: "prepareImages",
                value: function(t, r) {
                    var i = this,
                        n = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
                    return _.each(e, (function(e) {
                        if (t[e])
                            if (t[e + "_uuid"]) t[e] = i.getImageProxyUrl(t[e + "_uuid"]);
                            else {
                                var a = void 0,
                                    o = e + "_key",
                                    l = e + "_original";
                                t[l] ? t[e] = t[l] : t[l] = t[e], a = "external_image" === e ? Object.assign({}, r, {
                                    w: i.wallOptions.proxyProfileImageWidth,
                                    h: i.wallOptions.proxyProfileImageHeight
                                }) : r, t[e] = i.slimProxyImage(t[e], t[o], a, n)
                            }
                    })), t
                }
            }, {
                key: "getAspectRatio",
                value: function(e, t) {
                    var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                        i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
                        n = e[t + "_width"],
                        a = e[t + "_height"];
                    if (!1 === r.enableAspectRatioImages || !n || !a) return r.defaultPostImageAspectRatio;
                    var o = n / a;
                    return i ? o : o < r.minPostImageAspectRatio ? r.minPostImageAspectRatio : o > r.maxPostImageAspectRatio ? r.maxPostImageAspectRatio : o
                }
            }], [{
                key: "buildBase64Image",
                value: function(e) {
                    var t = "data:image/jpg;base64,";
                    if (e.indexOf("~") > -1) {
                        var r = e.split("~"),
                            i = _slicedToArray(r, 2);
                        return t + "/9j/4AAQSkZJRgABAQEAYABgAAD//gA7Q1JFQVRPUjogZ2QtanBlZyB2MS4wICh1c2luZyBJSkcgSlBFRyB2ODApLCBxdWFsaXR5ID0gNjAK/9sAQwANCQoLCggNCwoLDg4NDxMgFRMSEhMnHB4XIC4pMTAuKS0sMzpKPjM2RjcsLUBXQUZMTlJTUjI+WmFaUGBKUVJP/9sAQwEODg4TERMmFRUmTzUtNU9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09P/8AAEQgA" + i[0] + "AwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/aAAwDAQACEQMRAD8A" + i[1]
                    }
                    return t + e
                }
            }, {
                key: "preloadImage",
                value: function(e) {
                    return new Promise(function(t, r) {
                        if (e) {
                            var i = new Image;
                            try {
                                i.src = e, i.onerror = function() {
                                    return r()
                                }, i.onload = function() {
                                    return t()
                                }
                            } catch (e) {
                                r("invalid url")
                            }
                        } else r()
                    })
                }
            }, {
                key: "isAbsoluteUrl",
                value: function(e) {
                    return /^\w+:\/\//.test(e)
                }
            }, {
                key: "getDevicePixelRatio",
                value: function() {
                    return _.get(window, "devicePixelRatio", 1) >= 1.5 ? 2 : 1
                }
            }, {
                key: "preloadImages",
                value: function(e) {
                    var i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function() {},
                        n = function(t) {
                            var n = e[t];
                            if (!n) return i(e, t, !1), {
                                v: void 0
                            };
                            r.preloadImage(n).then((function() {
                                return i(t, !0)
                            })).catch((function() {
                                return i(t, !1)
                            }))
                        },
                        a = !0,
                        o = !1,
                        l = void 0;
                    try {
                        for (var s, u = t[Symbol.iterator](); !(a = (s = u.next()).done); a = !0) {
                            var A = n(s.value);
                            if ("object" === (void 0 === A ? "undefined" : _typeof(A))) return A.v
                        }
                    } catch (e) {
                        o = !0, l = e
                    } finally {
                        try {
                            !a && u.return && u.return()
                        } finally {
                            if (o) throw l
                        }
                    }
                }
            }, {
                key: "getTwoDominantColors",
                value: function(e) {
                    var t = e.post_image_dominant_colors;
                    if (!t) return null;
                    var r = t.split(",");
                    return r.length < 2 ? null : r.slice(0, 2)
                }
            }]), r
        })();
    helpers.Image = r
})();
"use strict";
helpers.sharing = (function() {
    var n = function(n) {
        var t = 400;
        return "twitter" === (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null) && (t = 260), window.open(n, "", "menubar=no,toolbar=no,resizable=yes,scrollbars=yes,width=555,height=" + t), !1
    };
    return {
        initSharingLinks: function() {
            $(document).on("click", helpers.actionSelector("share"), (function(t) {
                t.preventDefault();
                var e = $(this);
                n(e.attr("href"), e.attr("data-network"))
            }))
        },
        openSharingWindow: n
    }
})();
"use strict";
var _createClass = (function() {
    function e(e, i) {
        for (var t = 0; t < i.length; t++) {
            var o = i[t];
            o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
        }
    }
    return function(i, t, o) {
        return t && e(i.prototype, t), o && e(i, o), i
    }
})();

function _classCallCheck(e, i) {
    if (!(e instanceof i)) throw new TypeError("Cannot call a class as a function")
}!(function() {
    var e = 3,
        i = (function() {
            function i(t, o, n) {
                _classCallCheck(this, i);
                var a = !1 === Modernizr.videoautoplay,
                    s = Modernizr.isForcedModernizr;
                this.wasAutoplayDisabledManually = a && s, this.isVideoAutochangeActive = !this.wasAutoplayDisabledManually, this.changeVideoTimeout = null, this.wasAutoplayDisabledManually ? this.supportsAutomaticVideoPlayTriggering = !1 : this.supportsAutomaticVideoPlayTriggering = null, this.networksWithVideoEmbeds = t.networksWithVideoEmbeds, this.maxPlayingVideos = t.maxPlayingVideos || e, this.WallHelper = o, this.TemplatesHelper = n, helpers.autoBind(this)
            }
            return _createClass(i, [{
                key: "isAutoplaySupported",
                value: function() {
                    return !this.wasAutoplayDisabledManually && (!0 === Modernizr.videoautoplay || !0 === this.supportsAutomaticVideoPlayTriggering)
                }
            }, {
                key: "hasRealVideo",
                value: function(e) {
                    return !!e.post_video
                }
            }, {
                key: "checkinElementHasRealVideo",
                value: function(e) {
                    return !!e.data("video-url")
                }
            }, {
                key: "getVideoEmbedToken",
                value: function(e) {
                    return "facebook" === e.type ? encodeURIComponent(e.post_link) : e.post_id
                }
            }, {
                key: "getVideoEmbedElement",
                value: function(e) {
                    var i = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                        t = "embeds/" + e.type + "_video_embed";
                    return helpers.Templates.build(t, {
                        token: this.getVideoEmbedToken(e),
                        showControls: i
                    })
                }
            }, {
                key: "hasEmbeddedVideoSupport",
                value: function(e) {
                    var i = e.type,
                        t = this.networksWithVideoEmbeds[i];
                    if (!t) return !1;
                    var o = t.field,
                        n = new RegExp(t.regex),
                        a = e[o];
                    return !!a && n.test(a)
                }
            }, {
                key: "hasAnyVideo",
                value: function(e) {
                    return !!this.hasRealVideo(e) || this.hasEmbeddedVideoSupport(e)
                }
            }, {
                key: "setPlayClasses",
                value: function(e) {
                    e.closest(".video-wrapper").addClass("video-playing video-has-played"), e.closest(".checkin").addClass("checkin-with-video-playing")
                }
            }, {
                key: "setPauseClasses",
                value: function(e) {
                    e.closest(".video-wrapper").removeClass("video-playing"), e.closest(".checkin").removeClass("checkin-with-video-playing")
                }
            }, {
                key: "play",
                value: function(e) {
                    var i = this,
                        t = $(e).eq(0),
                        o = (e = t.get(0)).play();
                    o && o.then ? o.then((function() {
                        i.setPlayClasses(t), null === i.supportsAutomaticVideoPlayTriggering && (i.supportsAutomaticVideoPlayTriggering = !0)
                    })).catch((function(e) {
                        "NotSupportedError" === e.name && t.closest(".checkin").addClass("video-has-error"), "NotAllowedError" === e.name && (i.supportsAutomaticVideoPlayTriggering = !1)
                    })) : this.setPlayClasses(t)
                }
            }, {
                key: "pause",
                value: function(e) {
                    0 !== e.length && (e.get(0).pause(), this.setPauseClasses(e))
                }
            }, {
                key: "mute",
                value: function(e) {
                    var i = $(e).eq(0);
                    (e = i.get(0)).muted = !0, i.closest(".video-wrapper").addClass("video-muted")
                }
            }, {
                key: "unmute",
                value: function(e) {
                    var i = $(e).eq(0);
                    (e = i.get(0)).muted = !1, i.closest(".video-wrapper").removeClass("video-muted")
                }
            }, {
                key: "removeVideoClasses",
                value: function(e) {
                    var i = $(e).eq(0).closest(".video-wrapper");
                    i.removeClass("video-muted video-playing video-has-played"), i.closest(".checkin").removeClass("checkin-with-video checkin-with-video-playing video-has-error")
                }
            }, {
                key: "getVisibleVideoCheckins",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1 / 0,
                        i = $(".socialwall_container .checkin[data-video-url]:not(.video-has-error)").get();
                    return i = i.filter(this.WallHelper.isInViewport), i = _.shuffle(i), i = _.slice(i, 0, e), $(i)
                }
            }, {
                key: "muteAllOtherVideos",
                value: function(e) {
                    var i = this,
                        t = e.get(0);
                    $(".checkin-video").each((function(e, o) {
                        o !== t && i.mute(o)
                    }))
                }
            }, {
                key: "createVideo",
                value: function(e) {
                    if (e.hasClass("checkin-with-video")) return e.find(".video-wrapper");
                    if (!this.checkinElementHasRealVideo(e)) return null;
                    e.addClass("checkin-with-video");
                    var i = e.find(".checkin-image"),
                        t = e.find(".checkin-image-inner"),
                        o = e.data("video-url"),
                        n = $(this.TemplatesHelper.build("checkin_video", {
                            videoUrl: o
                        }));
                    return t.length > 0 ? n.prependTo(t) : n.prependTo(i), n
                }
            }, {
                key: "displayVideo",
                value: function(e) {
                    var i = this,
                        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        o = t.startMuted,
                        n = void 0 === o || o,
                        a = t.forcePlay,
                        s = void 0 !== a && a,
                        l = this.createVideo(e);
                    if (l) {
                        var r = l.find("video");
                        n ? this.mute(r) : this.unmute(r), s ? this.play(r) : Modernizr.on("videoautoplay", (function() {
                            (i.isAutoplaySupported() || null === i.supportsAutomaticVideoPlayTriggering) && i.play(r)
                        }))
                    }
                }
            }, {
                key: "destroyVideo",
                value: function(e) {
                    var i = this;
                    0 !== e.length && (this.pause(e), setTimeout((function() {
                        var t = e.get(0);
                        i.removeVideoClasses(t), e.closest(".video-wrapper").remove()
                    }), 0))
                }
            }, {
                key: "pauseAllOtherVideos",
                value: function(e) {
                    var i = this,
                        t = $(".socialwall_container").find(".checkin-with-video:not(.video-has-error)");
                    e && e.length && (t = t.filter((function(i, t) {
                        return !e.toArray().includes(t)
                    }))), t.each((function(e, t) {
                        var o = $(t).find(".checkin-video");
                        i.pause(o)
                    }))
                }
            }, {
                key: "removeAllVideos",
                value: function() {
                    var e = this;
                    $(".socialwall_container").find(".checkin-with-video .checkin-video").each((function(i, t) {
                        e.destroyVideo($(t))
                    }))
                }
            }, {
                key: "updateRunningVideos",
                value: function(e) {
                    var i = this;
                    this.pauseAllOtherVideos(e), e.each((function(e, t) {
                        i.displayVideo($(t))
                    }))
                }
            }, {
                key: "changeVideos",
                value: function() {
                    var e = this,
                        i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                    clearTimeout(this.changeVideoTimeout), this.changeVideoTimeout = setTimeout((function() {
                        if (e.isVideoAutochangeActive) {
                            var i = e.getVisibleVideoCheckins(e.maxPlayingVideos);
                            e.updateRunningVideos(i), 0 === i.length ? e.changeVideos(1e3) : e.changeVideos(15e3)
                        }
                    }), i)
                }
            }, {
                key: "setVideoAutochangeActive",
                value: function(e) {
                    this.isVideoAutochangeActive = e, !1 === e ? this.removeAllVideos() : this.changeVideos(0)
                }
            }, {
                key: "initVideo",
                value: function(e, i) {
                    this.hasRealVideo(e) && i.attr("data-video-url", e.post_video)
                }
            }, {
                key: "initChangeVideoOnScrollListener",
                value: function() {
                    var e = this,
                        i = $(window),
                        t = i.scrollTop();
                    i.on("scroll", _.throttle((function() {
                        var o = i.scrollTop();
                        Math.abs(o - t) < 150 || (e.changeVideos(), t = i.scrollTop())
                    }), 300))
                }
            }, {
                key: "isVideoSupportedByBrowser",
                value: function() {
                    return "play" in document.createElement("video")
                }
            }, {
                key: "initEventListeners",
                value: function() {
                    if (this.isVideoSupportedByBrowser()) {
                        var e = $(".socialwall_container, .detail-mount-point");
                        this.initMuteButton(e), this.initPlayButton(e), this.initChangeVideoOnScrollListener()
                    }
                }
            }, {
                key: "initPlayButton",
                value: function(e) {
                    var i = this;
                    e.on("click", ".video-play-button", (function() {
                        var e = $(this).closest(".checkin");
                        return !i.checkinElementHasRealVideo(e) || (i.displayVideo(e, {
                            forcePlay: !0
                        }), !1)
                    }))
                }
            }, {
                key: "initMuteButton",
                value: function(e) {
                    var i = this;
                    e.on("click", ".video-mute-button", (function() {
                        var e = $(this).closest(".video-wrapper"),
                            t = e.find("video");
                        return e.hasClass("video-muted") ? (i.unmute(t), i.muteAllOtherVideos(t)) : i.mute(t), !1
                    }))
                }
            }, {
                key: "init",
                value: function() {
                    this.initEventListeners(), this.changeVideos(2e3)
                }
            }]), i
        })();
    window.helpers.Video = i
})();
"use strict";
var _createClass = (function() {
    function e(e, t) {
        for (var n = 0; n < t.length; n++) {
            var a = t[n];
            a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
        }
    }
    return function(t, n, a) {
        return n && e(t.prototype, n), a && e(t, a), t
    }
})();

function _classCallCheck(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
}!(function() {
    var e = (function() {
        function e(t, n) {
            _classCallCheck(this, e), this.wallOptions = t, this.wallState = n, this.bottomAddedCheckinsCounter = 1, this.topAddedCheckinsCounter = 1, helpers.autoBind(this)
        }
        return _createClass(e, [{
            key: "isNewAdNeeded",
            value: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "top",
                    t = this.wallState.getSortedCheckinsData(),
                    n = this.wallOptions.adsFrequency,
                    a = Math.ceil(.15 * n);
                if ((n += _.random(-a, a), this.wallState.checkinsDataSize < n) && (!t.some((function(e) {
                        return "sponsored" === e.type
                    })) && "top" === e)) return !0;
                return !("top" === e ? t.take(n) : t.takeLast(n)).some((function(e) {
                    return "sponsored" === e.type
                }))
            }
        }, {
            key: "createCheckinDataFromAd",
            value: function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "top",
                    n = {};
                return n.id = e.id + "-" + Date.now(), n.originalId = e.id, n.latitude = e.latitude, n.longitude = e.longitude, n.post_id = e.id, n.post_image = e.image, n.post_image_height = e.image_height, n.post_image_width = e.image_width, n.post_image_key = e.image_key, n.post_image_dominant_colors = e.image_dominant_colors, n.post_link = e.link, n.post_video = e.video, n.comment = e.text, n.html_comment = e.text, n.external_fullname = e.user_name, n.external_image = e.user_image, n.external_image_key = e.user_image_key, n.type = "sponsored", n = new helpers.Image(this.wallOptions).prepareImages(n, {
                    q: 95
                }), helpers.Image.preloadImages(n), this.wallState && (n = this.prepareRankingData(n, t), n = "top" === t ? this.makeCheckinTopRanked(n) : this.makeCheckinTopRanked(n, !0)), n
            }
        }, {
            key: "getSortField",
            value: function() {
                return {
                    weight: "weight",
                    time: "external_created_timestamp",
                    addOrder: "addOrder"
                }[this.wallOptions.clientRankingMode]
            }
        }, {
            key: "addSortScoreToCheckin",
            value: function(e) {
                var t = this.getSortField(),
                    n = this.wallOptions.clientRankingMode;
                if (!t) return e.sortScore = 0, e;
                var a = e[t],
                    i = e.bonus || 0;
                return ["weight", "time"].includes(n) && (a += i), e.sortScore = a, e
            }
        }, {
            key: "makeCheckinTopRanked",
            value: function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    n = this.wallState.getSortedCheckinsData(),
                    a = void 0,
                    i = void 0,
                    r = void 0,
                    o = void 0;
                return (a = t ? n.last() : n.first()) && ("weight" === this.wallOptions.clientRankingMode ? (r = a.weight + a.bonus, o = e.weight) : "time" === this.wallOptions.clientRankingMode ? (r = a.external_created_timestamp + a.bonus, o = e.external_created_timestamp) : "addOrder" === this.wallOptions.clientRankingMode && (r = a.addOrder + a.bonus, o = e.addOrder), t ? i = r - o - 1 : (i = r - o + 1, i = Math.max(i, 0)), e.bonus = i), e = this.addSortScoreToCheckin(e)
            }
        }, {
            key: "prepareRankingData",
            value: function(e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                return e.bonus = e.bonus || 0, e.weight = e.weight || 0, e.external_created_timestamp = e.external_created_timestamp || 0, "top" === t ? (e.addOrder = this.topAddedCheckinsCounter, this.topAddedCheckinsCounter++) : "bottom" === t ? (e.addOrder = -1 * this.bottomAddedCheckinsCounter, this.bottomAddedCheckinsCounter++) : n && n.addOrder && (e.addOrder = n.addOrder), e = this.addSortScoreToCheckin(e)
            }
        }], [{
            key: "compare",
            value: function(e, t) {
                var n = [],
                    a = _.intersection(Object.keys(e), Object.keys(t));
                return _.each(a, (function(a) {
                    _.isEqual(e[a], t[a]) || n.push(a)
                })), n
            }
        }, {
            key: "hasUserData",
            value: function(e) {
                return !!["facebook", "instagram", "pinterest"].includes(e.type) || !!(e.external_name || e.external_fullname || e.external_image)
            }
        }, {
            key: "prepareComment",
            value: function(e, t) {
                if (!e.html_comment) return e;
                var n = e.comment,
                    a = e.html_comment,
                    i = t,
                    r = n.length;
                return a = helpers.truncateTransformedTextPrecise(a, i, r), e.truncated_html_comment = a, e
            }
        }]), e
    })();
    window.helpers.Checkins = e
})();
"use strict";
var _slicedToArray = (function() {
        return function(r, a) {
            if (Array.isArray(r)) return r;
            if (Symbol.iterator in Object(r)) return (function(r, a) {
                var t = [],
                    n = !0,
                    e = !1,
                    o = void 0;
                try {
                    for (var i, l = r[Symbol.iterator](); !(n = (i = l.next()).done) && (t.push(i.value), !a || t.length !== a); n = !0);
                } catch (r) {
                    e = !0, o = r
                } finally {
                    try {
                        !n && l.return && l.return()
                    } finally {
                        if (e) throw o
                    }
                }
                return t
            })(r, a);
            throw new TypeError("Invalid attempt to destructure non-iterable instance")
        }
    })(),
    _createClass = (function() {
        function r(r, a) {
            for (var t = 0; t < a.length; t++) {
                var n = a[t];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(r, n.key, n)
            }
        }
        return function(a, t, n) {
            return t && r(a.prototype, t), n && r(a, n), a
        }
    })();

function _classCallCheck(r, a) {
    if (!(r instanceof a)) throw new TypeError("Cannot call a class as a function")
}!(function() {
    var r = (function() {
        function r(a) {
            _classCallCheck(this, r), this.wallOptions = a, this.originalLocation = {
                hash: location.hash,
                host: location.host,
                hostname: location.hostname,
                href: location.href,
                origin: location.origin,
                pathname: location.pathname,
                port: location.port,
                protocol: location.protocol,
                search: location.search
            }
        }
        return _createClass(r, [{
            key: "getWallUrl",
            value: function() {
                var r = this.wallOptions.wallUrl;
                return this.originalLocation.search && (r += this.originalLocation.search), this.originalLocation.hash && (r += this.originalLocation.hash), r
            }
        }, {
            key: "getDetailUrl",
            value: function(r) {
                var a = this.wallOptions.wallUrl + "/p/" + r;
                return this.originalLocation.search && (a += this.originalLocation.search), this.originalLocation.hash && (a += this.originalLocation.hash), a
            }
        }, {
            key: "getCompactDetailUrl",
            value: function(r) {
                return this.wallOptions.urls.basePath + "s/" + r
            }
        }], [{
            key: "getQueryParamForUrl",
            value: function(r, a) {
                a = a.replace(/[\[\]]/g, "\\$&");
                var t = new RegExp("[?&]" + a + "(=([^&#]*)|&|#|$)").exec(r);
                return t ? t[2] ? decodeURIComponent(t[2].replace(/\+/g, " ")) : "" : null
            }
        }, {
            key: "getQueryParamForCurrentUrl",
            value: function(a) {
                return r.getQueryParamForUrl(window.location.href, a)
            }
        }, {
            key: "updateUrlQueryParam",
            value: function(a, t, n) {
                var e = t + "=" + n,
                    o = r.getQueryParamForUrl(a, t);
                if (null === o) {
                    var i = void 0,
                        l = a.split("?"),
                        c = _slicedToArray(l, 2),
                        u = c[0],
                        s = c[1];
                    return i = u + "?" + e, s && (i = i + "&" + s), i
                }
                var h = t + "=" + o;
                return a.replace(h, e)
            }
        }, {
            key: "updateQueryParamForCurrentUrl",
            value: function(a, t) {
                var n = window.location.href;
                window.location.href = r.updateUrlQueryParam(n, a, t)
            }
        }]), r
    })();
    window.helpers.Url = r
})();
"use strict";
var _createClass = (function() {
    function e(e, t) {
        for (var r = 0; r < t.length; r++) {
            var l = t[r];
            l.enumerable = l.enumerable || !1, l.configurable = !0, "value" in l && (l.writable = !0), Object.defineProperty(e, l.key, l)
        }
    }
    return function(t, r, l) {
        return r && e(t.prototype, r), l && e(t, l), t
    }
})();

function _classCallCheck(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
}!(function() {
    var e = (function() {
        function e(t) {
            _classCallCheck(this, e), this.urlHelper = new helpers.Url(t)
        }
        return _createClass(e, [{
            key: "setUrl",
            value: function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                // if (window.history.pushState) try {
                //     var r = this.urlHelper.getCompactDetailUrl(e);
                //     t ? window.history.replaceState({
                //         detail: e
                //     }, null, r) : window.history.pushState({
                //         detail: e
                //     }, null, r)
                // } catch (e) {
                //     console.error(e)
                // }
            }
        }, {
            key: "clearUrl",
            value: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                // if (window.history.pushState) try {
                //     var t = this.urlHelper.getWallUrl();
                //     e ? window.history.replaceState({
                //         detail: null
                //     }, null, t) : window.history.state && window.history.state.detail && window.history.pushState({
                //         detail: null
                //     }, null, t)
                // } catch (e) {
                //     console.error(e)
                // }
            }
        }]), e
    })();
    window.helpers.Route = e
})();
"use strict";
helpers.time = {
    cssDurationToMs: function(s) {
        var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
            t = s.match(/^\s*([0-9.]+)\s*(ms|s)\s*$/);
        if (!t) return r;
        var e = parseFloat(t[1]);
        return "s" === t[2] ? 1e3 * e : e
    }
};
"use strict";
!(function() {
    var e = helpers.Css,
        l = e.addRootClass,
        n = e.removeRootClass,
        s = $("body"),
        r = (screenfull.enabled && document.addEventListener(screenfull.raw.fullscreenchange, (function() {
            screenfull.isFullscreen ? (l("fullscreen"), scrollTo(0, 0)) : n("fullscreen")
        })), {
            enter: function() {
                screenfull.enabled && screenfull.request()
            },
            leave: function() {
                screenfull.enabled && screenfull.isFullscreen && screenfull.exit()
            },
            isSupported: function() {
                return screenfull.enabled
            },
            isFullscreen: function() {
                return screenfull.isFullscreen
            },
            getFullscreenChangeEventName: function() {
                return _.get(screenfull, "raw.fullscreenchange")
            }
        });
    screenfull.enabled && (l("fullscreen-support"), s.on("click", ".fullscreen-toggle", (function() {
        screenfull.isFullscreen ? r.leave() : r.enter()
    }))), window.WallsioFullscreen = r
})();
"use strict";
var _createClass = (function() {
    function t(t, e) {
        for (var a = 0; a < e.length; a++) {
            var i = e[a];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
        }
    }
    return function(e, a, i) {
        return a && t(e.prototype, a), i && t(e, i), e
    }
})();

function _classCallCheck(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
}!(function() {
    var t = (function() {
        function t(e, a, i) {
            _classCallCheck(this, t), this._stack = Immutable.List(), this._checkinsData = Immutable.Map(), this._sortedCheckinsData = Immutable.List(), this._newCheckinSortScoreThreshold = -1 / 0, this.wallOptions = e, this.isAppScrollable = a, this.getTilesLimit = i, this.initAdsData(), helpers.autoBind(this)
        }
        return _createClass(t, [{
            key: "initAdsData",
            value: function() {
                this.wallOptions && this.wallOptions.ads || (this._adsData = Immutable.List()), this._adsData = Immutable.List(this.wallOptions.ads)
            }
        }, {
            key: "getRandomAd",
            value: function() {
                if (0 === this.adCount) return null;
                var t = _.random(this.adCount - 1);
                return this._adsData.get(t)
            }
        }, {
            key: "updateAdData",
            value: function(t) {
                var e = parseInt(t.id, 10),
                    a = !1;
                this._adsData = this._adsData.map((function(i) {
                    return parseInt(i.id, 10) !== e ? i : (a = !0, t)
                })), a || (this._adsData = this._adsData.push(t))
            }
        }, {
            key: "removeAdData",
            value: function(t) {
                t = parseInt(t, 10), this._adsData = this._adsData.filter((function(e) {
                    return parseInt(e.id, 10) !== t
                }))
            }
        }, {
            key: "addToStack",
            value: function(t) {
                this._stack.find((function(e) {
                    return e.id === t.id
                })) || (this._stack = this._stack.push(t))
            }
        }, {
            key: "shiftStack",
            value: function() {
                var t = this._stack.first();
                return this._stack = this._stack.shift(), t
            }
        }, {
            key: "filterStack",
            value: function(t) {
                this._stack = this._stack.filter(t)
            }
        }, {
            key: "truncateStack",
            value: function(t) {
                this._stack = this._stack.takeLast(t)
            }
        }, {
            key: "truncateCheckinData",
            value: function(t) {
                var e = this.getSortedCheckinsData().slice(t);
                if (0 !== e.size) {
                    var a = e.map((function(t) {
                        return t.id
                    }));
                    this.removeCheckinData(a.toArray())
                }
            }
        }, {
            key: "isStackEmpty",
            value: function() {
                return 0 === this.stackSize
            }
        }, {
            key: "isCheckinsDataEmpty",
            value: function() {
                return 0 === this.checkinsDataSize
            }
        }, {
            key: "getCheckinData",
            value: function(e) {
                e = t.normalizeCheckinId(e);
                return this._checkinsData.get(e, null)
            }
        }, {
            key: "hasCheckin",
            value: function(e) {
                return e = t.normalizeCheckinId(e), this._checkinsData.has(e)
            }
        }, {
            key: "setCheckinData",
            value: function(e, a) {
                e = t.normalizeCheckinId(e), this._checkinsData = this._checkinsData.set(e, a), this.updateSortedCheckinsData()
            }
        }, {
            key: "setCheckinField",
            value: function(t, e, a) {
                var i = this.getCheckinData(t);
                if (i) {
                    var n = Object.assign({}, i);
                    n[e] = a, this.setCheckinData(t, n)
                }
            }
        }, {
            key: "removeCheckinData",
            value: function(e) {
                _.isArray(e) || (e = [e]), e = _.map(e, t.normalizeCheckinId), this._checkinsData = this._checkinsData.deleteAll(e), this.updateSortedCheckinsData()
            }
        }, {
            key: "getAllCheckinsData",
            value: function() {
                return this._checkinsData
            }
        }, {
            key: "getSortedCheckinsData",
            value: function() {
                return this._sortedCheckinsData
            }
        }, {
            key: "getCheckinIds",
            value: function() {
                return this._checkinsData.keySeq().toList()
            }
        }, {
            key: "updateSortedCheckinsData",
            value: function() {
                var t = this._checkinsData.toList(),
                    e = !0,
                    a = !1,
                    i = void 0;
                try {
                    for (var n, s = this.checkinsDataSortFunctions[Symbol.iterator](); !(e = (n = s.next()).done); e = !0) {
                        var r = n.value;
                        t = t.sortBy(r)
                    }
                } catch (t) {
                    a = !0, i = t
                } finally {
                    try {
                        !e && s.return && s.return()
                    } finally {
                        if (a) throw i
                    }
                }
                this._sortedCheckinsData = t, this.updateNewCheckinSortScoreThreshold()
            }
        }, {
            key: "updateNewCheckinSortScoreThreshold",
            value: function() {
                if (!this.isAppScrollable) return !1;
                var t = this.getTilesLimit(this.wallOptions, !0),
                    e = Math.round(t / 2);
                if (this._sortedCheckinsData.size < e) return !1;
                var a = e - 1,
                    i = this._sortedCheckinsData.get(a);
                if (!i || !i.sortScore) return !1;
                this._newCheckinSortScoreThreshold = i.sortScore
            }
        }, {
            key: "getSponsoredPostInstances",
            value: function(t) {
                return t = parseInt(t, 10), this.getAllCheckinsData().filter((function(e) {
                    return "sponsored" === e.type && parseInt(e.originalId, 10) === t
                }))
            }
        }, {
            key: "adCount",
            get: function() {
                return this._adsData.size
            }
        }, {
            key: "stackSize",
            get: function() {
                return this._stack.size
            }
        }, {
            key: "checkinsDataSize",
            get: function() {
                return this._sortedCheckinsData.size
            }
        }, {
            key: "newCheckinSortScoreThreshold",
            get: function() {
                return this._newCheckinSortScoreThreshold
            }
        }, {
            key: "checkinsDataSortFunctions",
            get: function() {
                var t = [];
                return t.push((function(t) {
                    return -1 * t.sortScore
                })), t
            }
        }], [{
            key: "normalizeCheckinId",
            value: function(t) {
                return t.toString()
            }
        }]), t
    })();
    window.WallState = t
})();
"use strict";
var _createClass = (function() {
    function t(t, e) {
        for (var n = 0; n < e.length; n++) {
            var i = e[n];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
        }
    }
    return function(e, n, i) {
        return n && t(e.prototype, n), i && t(e, i), e
    }
})();

function _classCallCheck(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
}!(function() {
    var t = (function() {
        function t(e) {
            _classCallCheck(this, t), this.helpers = e, this.history = new Immutable.Map, e.autoBind(this), setInterval(this.cleanup, 6e4)
        }
        return _createClass(t, [{
            key: "getCountInLastMinute",
            value: function() {
                var t = this.helpers.getUnixTimestamp();
                return this.history.reduce((function(e, n, i) {
                    return i >= t - 60 ? e + n : e
                }), 0)
            }
        }, {
            key: "track",
            value: function() {
                var t = this.helpers.getUnixTimestamp(),
                    e = this.history.get(t, 0);
                e++, this.history = this.history.set(t, e)
            }
        }, {
            key: "cleanup",
            value: function() {
                var t = this.helpers.getUnixTimestamp() - 120;
                this.history = this.history.filter((function(e, n) {
                    return n > t
                }))
            }
        }]), t
    })();
    window.WallCheckinsPerSecondHistory = t
})();
"use strict";
var _createClass = (function() {
    function t(t, o) {
        for (var i = 0; i < o.length; i++) {
            var n = o[i];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
        }
    }
    return function(o, i, n) {
        return i && t(o.prototype, i), n && t(o, n), o
    }
})();

function _classCallCheck(t, o) {
    if (!(t instanceof o)) throw new TypeError("Cannot call a class as a function")
}!(function() {
    var t = $(window),
        o = $(document),
        i = $("body"),
        n = function() {
            return window.performance && window.performance.now ? window.performance.now() : Date.now()
        },
        e = (function() {
            function e() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    o = t.bottomRegionHeight,
                    i = t.topRegionHeight;
                _classCallCheck(this, e), this.bottomRegionHeight = o, this.topRegionHeight = i, this.lastScrollPosition = 0, helpers.autoBind(this)
            }
            return _createClass(e, [{
                key: "isIosIframeAntigrowHackActive",
                value: function() {
                    return $("html.iOs.iframe:not(.autoheight),html.iOs.preview-iframe:not(.autoheight)").length > 0
                }
            }, {
                key: "scrollToPosition",
                value: function(t) {
                    this.$scrollContainer.scrollTop(t)
                }
            }, {
                key: "getScrollPosition",
                value: function() {
                    var t = this.$scrollContainer.scrollTop();
                    return 0 === t && this.isIosIframeAntigrowHackActive() ? -1 * $(".socialwall_container").position().top : t
                }
            }, {
                key: "getDocumentHeight",
                value: function() {
                    return this.isIosIframeAntigrowHackActive() ? Math.round($(".socialwall_container").outerHeight(!0)) : o.height()
                }
            }, {
                key: "smoothScroll",
                value: function() {
                    var t = this,
                        o = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                        i = void 0,
                        e = new Promise(function(t) {
                            i = t
                        }),
                        r = this.getScrollPosition(),
                        l = o - r,
                        s = (function(t) {
                            if (!t) return 0;
                            var o = Math.abs(t / 3);
                            return _.clamp(o, 200, 1e3)
                        })(l),
                        c = n();
                    return requestAnimationFrame((function i() {
                        var e = (n() - c) / s,
                            a = (function(t) {
                                return (1 - Math.cos(Math.PI * t)) / 2
                            })(e),
                            u = r + a * l;
                        e < 1 ? (t.scrollToPosition(u), requestAnimationFrame(i)) : t.scrollToPosition(o)
                    })), setTimeout((function() {
                        t.scrollToPosition(o), i()
                    }), s), e
                }
            }, {
                key: "isCurrentScrollPositionInTopRegion",
                value: function() {
                    return this.getScrollPosition() <= this.topRegionHeight
                }
            }, {
                key: "wasLastScrollPositionInTopRegion",
                value: function() {
                    return this.lastScrollPosition <= this.topRegionHeight
                }
            }, {
                key: "isCurrentScrollPositionInBottomRegion",
                value: function() {
                    return this.getScrollPosition() + t.height() >= this.getDocumentHeight() - this.bottomRegionHeight
                }
            }, {
                key: "isCurrentScrollPositionAbsoluteBottom",
                value: function() {
                    return this.getScrollPosition() + t.height() >= this.getDocumentHeight() - 1
                }
            }, {
                key: "wasLastScrollPositionInBottomRegion",
                value: function() {
                    var o = t.height(),
                        i = this.getDocumentHeight() - this.bottomRegionHeight;
                    return this.lastScrollPosition + o >= i
                }
            }, {
                key: "hasScrolledIntoBottom",
                value: function() {
                    return !!this.isCurrentScrollPositionInBottomRegion() && (!!this.isCurrentScrollPositionAbsoluteBottom() || !this.wasLastScrollPositionInBottomRegion())
                }
            }, {
                key: "hasScrolledIntoTop",
                value: function() {
                    return !!this.isCurrentScrollPositionInTopRegion() && !this.wasLastScrollPositionInTopRegion()
                }
            }, {
                key: "fireCustomScrollEvents",
                value: function() {
                    var t = this.getScrollPosition();
                    t > this.lastScrollPosition ? (o.trigger("wall.scrollDown"), this.hasScrolledIntoBottom() && o.trigger("wall.scrollIntoBottom")) : (o.trigger("wall.scrollUp"), this.hasScrolledIntoTop() && o.trigger("wall.scrollIntoTop")), this.lastScrollPosition = t
                }
            }, {
                key: "initScrollEvents",
                value: function() {
                    var t = this;
                    this.$scrollContainer.on("scroll", _.throttle((function() {
                        t.fireCustomScrollEvents()
                    }), 150))
                }
            }, {
                key: "$scrollContainer",
                get: function() {
                    return this.isIosIframeAntigrowHackActive() ? i : t
                }
            }]), e
        })();
    window.WallScrolling = e
})();
"use strict";
!(function(e) {
    var n = helpers.Css,
        t = n.addRootClass,
        i = n.changeRootClass,
        o = n.removeRootClass,
        r = n.setWallInitializedClasses,
        a = void 0,
        l = void 0,
        s = void 0,
        c = void 0,
        d = void 0,
        h = void 0,
        u = helpers.translation,
        p = helpers.sharing,
        f = new WallCheckinsPerSecondHistory(helpers),
        m = {},
        g = e(window),
        v = e(document),
        k = void 0,
        C = !0,
        w = function() {
            var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
            C = !!e
        },
        I = function() {
            return C
        },
        S = function(e) {
            return function() {
                console.error("The method " + e + " must be overridden!")
            }
        };
    Object.assign(m, {
        messages: {},
        defaults: {
            additionalCheckins: null,
            ads: [],
            adsFrequency: null,
            animation: !0,
            container: "",
            displayNextCheckInterval: 100,
            network: null,
            postInstructionDisplayDuration: 7500,
            imageSlimproxyHost: null,
            proxyImageHeight: 250,
            proxyImageQuality: 85,
            proxyImageWidth: 300,
            proxyNoCache: !1,
            proxyProfileImageHeight: 100,
            proxyProfileImageWidth: 100,
            proxySalt: "",
            rankingMode: "time",
            revealInterval: 3e3,
            shareOriginalUrl: !0,
            wallId: 0
        },
        themeParams: {
            domUpdateTriggers: ["comment", "cta", "entities", "external_created_timestamp", "external_fullname", "external_image", "external_name", "external_user_id", "is_highlighted", "post_image", "post_image_height", "post_image_width", "post_link", "tags"],
            ignoreProxyImageHeight: !1,
            initVideoEvents: !0,
            maxCommentLength: 160
        },
        methods: {
            countTilesAboveTheFold: function() {
                var n = 0,
                    t = g.height(),
                    i = m.getSortedCheckinsData(),
                    o = !0,
                    r = !1,
                    a = void 0;
                try {
                    for (var l, s = i[Symbol.iterator](); !(o = (l = s.next()).done); o = !0) {
                        var c = l.value,
                            d = e(".checkin-wrapper-" + c.id);
                        if (0 !== d.length) {
                            if (d.offset().top > t) break;
                            n += 1
                        }
                    }
                } catch (e) {
                    r = !0, a = e
                } finally {
                    try {
                        !o && s.return && s.return()
                    } finally {
                        if (r) throw a
                    }
                }
                return n
            },
            domPrependCheckins: function(e, n) {
                e.prepend(n)
            },
            domAppendCheckins: function(e, n) {
                e.append(n)
            },
            domRemoveCheckins: function(e, n) {
                n.remove()
            },
            domCreateCheckin: S("domCreateCheckin"),
            domReplaceCheckin: function(e, n, t, i) {
                var o = m.methods.domCreateCheckin(t, i);
                if (!o) return !1;
                n.replaceWith(o.find(".checkin"))
            },
            getTilesLimit: function() {
                return S("getTilesLimit")
            },
            getSupportedRankingMode: function(e) {
                return e
            },
            isDetailViewSupported: function() {
                return !0
            },
            getNumberOfInitialCheckins: function() {
                return 30
            },
            getNumberOfCheckinsToFillScreen: function() {
                return 30
            },
            getBottomRegionHeight: function() {
                return 600
            },
            initTheme: S("initTheme"),
            setCheckinTransitionMode: function() {}
        }
    }), m.create = function(n) {
        m.defaults.initialCheckins = m.methods.getNumberOfInitialCheckins(), n.initialCheckins && !isNaN(n.initialCheckins) || delete n.initialCheckins;
        var C = e.extend({}, m.defaults, n);
        C.$container = e(".socialwall_container"), C.serverRankingMode = C.rankingMode, C.clientRankingMode = m.methods.getSupportedRankingMode(C.rankingMode);
        var S = null;
        C.network && (S = C.network), h = new helpers.Wall(C);
        var y = new WallState(C, helpers.Wall.isAppScrollable(), m.methods.getTilesLimit);
        a = new helpers.Checkins(C, y), l = new helpers.Image(C), s = new helpers.Route(C), c = new helpers.Url(C), d = new helpers.Video(C, helpers.Wall, helpers.Templates), new helpers.Tracking(C).recordPageview();
        var T = new WallScrolling({
                bottomRegionHeight: 600,
                topRegionHeight: 300
            }),
            W = null,
            D = void 0,
            b = !1,
            x = null,
            P = null,
            A = !0,
            F = !1,
            O = function() {};
        if (window.WallsioDetailView) {
            var R = e(".detail-mount-point");
            O = new window.WallsioDetailView(R, C, d, l)
        }
        var E, M = function(e) {
                return C[e] || null
            },
            N = function(e, n) {
                return void 0 !== C[e] && (C[e] = n, !0)
            },
            U = helpers.actionSelector,
            H = function() {
                return m.methods.isDetailViewSupported()
            },
            L = function(e) {
                D = e, i("load-more-disabled", !e)
            },
            z = function() {
                x = Date.now()
            },
            V = function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                return m.methods.getTilesLimit(C, e)
            },
            $ = function() {
                return b ? (e = 6e4 / C.revealInterval, f.getCountInLastMinute() > e ? 10 : V(!0)) : 1 / 0;
                var e
            },
            q = function(e, n) {
                y.isCheckinsDataEmpty() && helpers.Wall.hideWallInfo(), y.setCheckinData(e, n)
            },
            Q = function() {
                var n = helpers.integer.ceilTo,
                    t = m.defaults.proxyImageWidth,
                    i = m.defaults.proxyImageHeight,
                    o = e(".checkin").eq(0),
                    r = Math.max(o.outerWidth(), t);
                r = n(r, 50);
                var a = void 0;
                a = m.themeParams.ignoreProxyImageHeight ? null : n(a = Math.max(o.outerHeight(), i), 50), N("proxyImageWidth", r), N("proxyImageHeight", a)
            },
            j = function(e) {
                var n = C.maxCommentLength || m.themeParams.maxCommentLength;
                return helpers.Checkins.prepareComment(e, n)
            },
            B = function(e, n, t) {
                return e.isPrepared ? e : (e = a.prepareRankingData(e, n, t), e = l.prepareImages(e), e = h.prepareVideo(e), e = (function(e) {
                    return e.detailUrl = c.getDetailUrl(helpers.slug.fromId(e.id)), e.compactDetailUrl = c.getCompactDetailUrl(helpers.slug.fromId(e.id)), e
                })(e = h.prepareEntities(e)), (e = j(e)).isPrepared = !0, helpers.Image.preloadImages(e), e)
            },
            G = function(e) {
                S && S !== e.type || (q(e.id, e), y.addToStack(e), b && f.track(), y.truncateStack($()))
            },
            J = function(e) {
                return _.intersection(e, m.themeParams.domUpdateTriggers).length > 0
            },
            K = function(e) {
                var n, t;
                return _.intersection(e, (n = ["sortScore"], (t = a.getSortField()) && n.push(t), n)).length > 0
            },
            X = function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "top";
                return C.adsFrequency && 0 !== y.adCount ? a.isNewAdNeeded(e) ? (function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "top",
                        n = y.getRandomAd();
                    if (!n) return null;
                    var t = a.createCheckinDataFromAd(n, e);
                    return t = j(t), "top" === e ? G(t) : q(t.id, t), t
                })(e) : void 0 : null
            },
            Y = function(n) {
                _.isArray(n) || (n = [n]);
                var t = e();
                e(".checkin-wrapper").filter(".is-protected").each((function(t, i) {
                    n = _.without(n, e(i).attr("data-id"))
                })), _.each(n, (function(n) {
                    t = t.add(e(".socialwall_container").find(".checkin-wrapper-" + n))
                })), y.removeCheckinData(n), m.methods.domRemoveCheckins(C.$container, t)
            },
            Z = function() {
                var n = e(".checkin").length,
                    t = y.checkinsDataSize;
                return Math.min(n, t)
            },
            ee = function(e) {
                var n, t, i = Z();
                return !(i <= e) && (n = i - e, t = y.getSortedCheckinsData().takeLast(n).map((function(e) {
                    return e.id
                })).toArray(), Y(t), !0)
            },
            ne = function() {
                var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
                y.isStackEmpty() || (A ? (function(n) {
                    for (var t = e("<div>"), i = [], o = function(e) {
                            var n = y.shiftStack();
                            if (!n) return "break";
                            var o = m.methods.domCreateCheckin(n, C);
                            if (!o) return "break";
                            t.prepend(o), i.push(n.id), C.animation ? setTimeout((function() {
                                return o.addClass("is-visible")
                            }), 50) : o.css("display", "block")
                        }, r = 0; r < n && "break" !== o(); r++);
                    m.methods.domPrependCheckins(C.$container, t.contents()), _.each(i, (function(e) {
                        helpers.Wall.updateTimestamps(W, e)
                    })), T.isCurrentScrollPositionInTopRegion() && ee(V()), i.length > 0 && z()
                })(n) : n > 0 && t("new-checkins-notification-visible"))
            },
            te = function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
                if (k.connected && D) {
                    e || (e = m.methods.getNumberOfCheckinsToFillScreen(), helpers.Wall.isAutoheight() && (e = Math.min(e, 30)));
                    var n = {
                            count: e,
                            network: S
                        },
                        t = y.getSortedCheckinsData(),
                        i = (t = t.filter((function(e) {
                            return "sponsored" !== e.type
                        }))).last();
                    if (i) {
                        var o = void 0;
                        o = "weight" === C.serverRankingMode ? "weight" : "external_created_timestamp", n.olderThan = i[o], n.ignoreId = i.id
                    }
                    k.emit("request older checkins", n)
                }
            },
            ie = function(e) {
                var n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                H() && (!(function(e, n) {
                    var t = y.getCheckinData(e);
                    t ? n(t) : k.emit("get single checkin", e, n)
                })(helpers.slug.toId(e), (function(e) {
                    if (!_.get(e, "id")) return !1;
                    e = B(e), e = l.prepareImages(e, {
                        w: null,
                        h: null
                    }), O.mount(e, n)
                })), g.on("resize", O.resizeQuickThrottled))
            },
            oe = function() {
                o("show-detail"), o("show-detail-loading"), helpers.Event.triggerEvent("wallsio-detail-view-closed"), g.off("resize", O.resizeQuickThrottled);
                var n = e(".detail-inner").children();
                d.setVideoAutochangeActive(!0), setTimeout((function() {
                    n.remove()
                }), 300)
            },
            re = function(e) {
                var n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                if (H()) {
                    if (helpers.Wall.isWidget()) {
                        t("show-iframe-detail-overlay");
                        var i = {
                                lang: m.getOption("locale")
                            },
                            o = m.getOption("token");
                        return o && (i.token = o), void PostmessageApi.sendPostMessage("Wallsio.showWidgetDetail", e, m.getOption("wallUrl"), i)
                    }(function(e) {
                        return !(!e || !WallsioFullscreen.isSupported() || !helpers.Wall.isIframe() || WallsioFullscreen.isFullscreen())
                    })(n) && (WallsioFullscreen.enter(), F = !0), ie(e, n);
                    var r = !n;
                    s.setUrl(e, r)
                }
            },
            ae = function() {
                H() && (F && (WallsioFullscreen.leave(), F = !1), oe(), s.clearUrl(!1))
            },
            le = function() {
                b = !0, helpers.Tracking.trackGaTiming("wallinit", "Wall", "init"), v.trigger("wall.init"), r(), helpers.Event.triggerEvent("wallsio-wall-initialized")
            },
            se = function() {
                if (!F) {
                    var e = Z(),
                        n = m.methods.getNumberOfCheckinsToFillScreen();
                    if (n > e) te(n - e)
                }
            },
            ce = function(e) {
                return !(y.checkinsDataSize >= C.initialCheckins) || !(e.sortScore < y.newCheckinSortScoreThreshold) && ("addOrder" !== C.clientRankingMode || !(function(e) {
                    var n = y.getSortedCheckinsData().first();
                    return !!n && n.external_created_timestamp - e.external_created_timestamp > 6048e5
                })(e))
            },
            de = function(e) {
                return S ? e.filter((function(e) {
                    return e.type === S
                })) : e
            },
            he = function(n) {
                if (b || P || (P = setInterval((function() {
                        Date.now() - x > C.revealInterval && ne(1)
                    }), C.displayNextCheckInterval)), (n = de(n)) && n.length > 0 || b) n.reverse(), _.each(n, (function(e) {
                    y.hasCheckin(e.id) || (e = B(e, "top"), ce(e) && (G(e), X()))
                })), b || (ne(y.stackSize), setTimeout((function() {
                    le(), setTimeout((function() {
                        e(".wall-info").removeClass("wall-info-loading"), e(".loading-indicator").remove()
                    }), 500)
                }), 0), C.detailCheckinHash && re(C.detailCheckinHash, !1));
                else {
                    le();
                    var t = u.__("NO_POSTS_FOUND");
                    setTimeout((function() {
                        return helpers.Wall.showWallInfo(t)
                    }), 300)
                }
            },
            ue = function(n) {
                m.methods.setCheckinTransitionMode("initial");
                var t = e("<div>");
                n = de(n), _.each(n, (function(e) {
                    if (!y.hasCheckin(e.id)) {
                        e = B(e, "bottom"), q(e.id, e);
                        var n = m.methods.domCreateCheckin(e, C);
                        if (n) {
                            t.append(n.addClass("is-visible"));
                            var i = X("bottom");
                            if (i) {
                                var o = m.methods.domCreateCheckin(i, C);
                                t.append(o.addClass("is-visible"))
                            }
                        }
                    }
                })), m.methods.domAppendCheckins(C.$container, t.contents()), z(), m.methods.setCheckinTransitionMode("normal"), helpers.Wall.updateTimestamps(W)
            },
            pe = function() {
                h.loadCachedCheckins().then((function(e) {
                    e && (C.initialCheckins && (e = e.slice(0, C.initialCheckins)), he(e))
                }))
            },
            fe = function() {
                y.isCheckinsDataEmpty() && pe()
            },
            me = function() {
                clearInterval(P), k.disconnect()
            },
            ge = function() {
                (A = T.isCurrentScrollPositionInTopRegion()) && o("new-checkins-notification-visible")
            },
            ve = function(e) {
                if (e !== S) {
                    window.scrollTo(0, 0), S = e;
                    var n = y.getAllCheckinsData().filter((function(n) {
                        return n.type !== e
                    })).map((function(e) {
                        return e.id
                    })).toArray();
                    L(!0), Y(n), y.filterStack((function(e) {
                        return e.type === S
                    })), se()
                }
            },
            ke = function() {
                S && (window.scrollTo(0, 0), S = null, helpers.Wall.hasPreviewIframe() ? PostmessageApi.triggerEventInPreview("wall.removeFilter") : (ee(0), L(!0), se()))
            },
            Ce = function() {
                (k = h.getWallSocket()).on("wallping", (function(e) {
                    W = e.serverTime
                })), k.on("new checkins", he), k.on("old checkins", ue), k.on("no more old checkins", (function() {
                    if (helpers.Wall.isIframe() && PostmessageApi.sendPostMessage("Wallsio.triggerDomEvent", "WallsioNoMorePosts"), L(!1), y.isCheckinsDataEmpty() && S) {
                        var e = u.__("NO_POSTS_FOUND");
                        helpers.Wall.showWallInfo(e)
                    }
                })), k.on("looped post", (function(e) {
                    e && (Y(e.id), (e = a.makeCheckinTopRanked(e)).isLooped = !0, e = B(e, "top"), G(e), X())
                })), k.on("removed checkins", (function(e) {
                    e = _.map(e, WallState.normalizeCheckinId);
                    var n = y.getCheckinIds().toArray(),
                        t = _.intersection(n, e);
                    _.each(t, (function(e) {
                        Y(e)
                    }))
                })), k.on("update checkin data", (function(n) {
                    return !!n.id && (y.hasCheckin(n.id) ? (function(n) {
                        var t = n.id,
                            i = e(".socialwall_container").find(".checkin-" + t);
                        if (0 === i.length) return !1;
                        var o = y.getCheckinData(t);
                        if (!o) return !1;
                        n = B(n, "replace", o);
                        var r = helpers.Checkins.compare(o, n);
                        0 !== r.length && (q(t, n), J(r) ? (m.methods.domReplaceCheckin(C.$container, i, n, C), helpers.Wall.updateTimestamps(W, n.id)) : K(r) && v.trigger("wall.sortUpdateNeeded", [C]))
                    }(n), !0) : "weight" === C.clientRankingMode && ((n = a.addSortScoreToCheckin(n)).sortScore > y.newCheckinSortScoreThreshold && (he([n]), !0)))
                })), k.on("update sponsored post", (function(n) {
                    y.updateAdData(n);
                    var t = parseInt(n.id, 10);
                    y.getSponsoredPostInstances(t).toArray().forEach((function(t) {
                        var i = a.createCheckinDataFromAd(n);
                        (i = j(i)).id = t.id, i.addOrder = t.addOrder, i.bonus = t.bonus, i.sortScore = t.sortScore, (function(n) {
                            var t = n.id,
                                i = e(".socialwall_container").find(".checkin-" + t);
                            if (0 === i.length) return !1;
                            var o = y.getCheckinData(t);
                            if (!o) return !1;
                            var r = helpers.Checkins.compare(o, n);
                            0 !== r.length && (q(t, n), J(r) && m.methods.domReplaceCheckin(C.$container, i, n, C))
                        })(i)
                    }))
                })), k.on("remove sponsored post", (function(e) {
                    e = parseInt(e, 10), y.removeAdData(e);
                    var n = y.getSponsoredPostInstances(e).map((function(e) {
                        return e.id
                    })).toArray();
                    Y(n)
                })), k.on("stop", me), k.on("connect_error", (function() {
                    return k.isPollingEnabled() && fe()
                })), k.on("subscribe error", fe), h.initDynamicDisconnect(k)
            };
        E = e("<div>").addClass("checkin-wrapper is-visible is-visible-solo"), e("<div>").addClass("checkin").appendTo(E), E.appendTo(".socialwall_container"), Q(), E.remove(), (function() {
            if (Object.assign(m, {
                    isAutofillEnabled: I,
                    setAutofillEnabled: w,
                    getOption: M,
                    setOption: N,
                    getSortedCheckinsData: y.getSortedCheckinsData,
                    getCheckinData: y.getCheckinData,
                    requestOlderCheckins: te,
                    applyFilter: ve,
                    removeFilter: ke,
                    options: C
                }), !helpers.Wall.isIframe()) {
                var n = new URL(m.getOption("wallUrl"));
                if (location.origin !== n.origin) return console.clear(), console.log("%c                _ _       _\n               | | |     (_)\n __      ____ _| | |___   _  ___\n \\ \\ /\\ / / _` | | / __| | |/ _ \\\n  \\ V  V / (_| | | \\__ \\_| | (_) |\n   \\_/\\_/ \\__,_|_|_|___(_)_|\\___/", "color: red"), void(window.location.href = n.origin + location.pathname + location.search + location.hash)
            }
            helpers.Wall.isIframe() && t("iframe"), L(!0), Ce(), g.on("scroll", _.throttle((function() {
                ge()
            }), 150));
            var i = WallsioFullscreen.getFullscreenChangeEventName();
            i && v.on(i, (function() {
                !WallsioFullscreen.isFullscreen() && helpers.Wall.isIframe() && ae()
            })), setInterval((function() {
                helpers.Wall.updateTimestamps(W)
            }), 3e4), new PostmessageApi(m, helpers.Wall).initDomEvents(), T.initScrollEvents(), C.$container.on("click", U("show-detail"), (function() {
                if (!H()) return !0;
                var n = e(this);
                if ("sponsored" === n.closest(".checkin").data("type")) return !0;
                var t = n.closest(".checkin").data("id"),
                    i = helpers.slug.fromId(t);
                return re(i, !0), !1
            })), v.on("click", U("hide-detail"), (function(e) {
                if (e.target === this) return ae(), !1
            })), v.on("click", U("close-wall-notification"), (function() {
                var n = e(this).closest(".wall-notification");
                return n.removeClass("wall-notification-visible"), setTimeout((function() {
                    n.remove()
                }), 500), !1
            })), e(U("release-checkins")).on("click", (function() {
                return T.smoothScroll(0), A = !0, !1
            })), e(U("scroll-to-top")).on("click", (function() {
                return T.smoothScroll(0), !1
            })), v.on("wall.scrollIntoTop", (function() {
                ee(V()) && L(!0)
            })), v.on("wall.scrollIntoBottom", (function() {
                te(C.additionalCheckins)
            })), v.on("wall.applyFilter", (function(e, n) {
                n && ve(n.network)
            })), v.on("wall.removeFilter", (function() {
                ke()
            })), v.on("wall.hideIframeDetailOverlay", (function() {
                o("show-iframe-detail-overlay")
            })), v.on("keydown", (function(e) {
                !e.key || "Escape" !== e.key && "Esc" !== e.key || ae()
            })), g.on("resize", _.debounce((function() {
                Q(), I() && se()
            }), 500)), e(".detail-container").on("click", "a[href='']", (function(e) {
                e.preventDefault()
            })), H() && window.history.pushState && (window.onpopstate = function(e) {
                e.state && (e.state.detail ? ie(e.state.detail) : oe())
            }), H() && s.clearUrl(!0)
        })(), m.methods.initTheme(C), h.initNotificationBar(), h.generateInstructions(), h.loopInstructions(), u.translateText(), p.initSharingLinks(), m.themeParams.initVideoEvents && d.init(), C.startInStaticMode && pe(), helpers.Tracking.trackGaTiming("domready", "Wall", "domready")
    }, window.Wall = m
})(jQuery);
"use strict";
var _createClass = (function() {
    function e(e, t) {
        for (var i = 0; i < t.length; i++) {
            var a = t[i];
            a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
        }
    }
    return function(t, i, a) {
        return i && e(t.prototype, i), a && e(t, a), t
    }
})();

function _classCallCheck(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
}!(function() {
    var e = helpers.Css,
        t = e.addRootClass,
        i = e.removeRootClass,
        a = $("html"),
        n = function(e) {
            return new Promise(function(t, i) {
                var a = document.createElement("textarea");
                a.value = e, a.setAttribute("readonly", ""), a.style.position = "fixed", a.style.left = "-9999px", document.body.appendChild(a), a.select(), a.setSelectionRange(0, a.value.length);
                var n = void 0;
                try {
                    n = document.execCommand("copy")
                } catch (e) {
                    i(e), n = !1
                }
                document.body.removeChild(a), n ? t() : i()
            })
        },
        o = (function() {
            function e(t, i, a, n) {
                _classCallCheck(this, e), this.$mountPoint = t, this.wallOptions = i, this.videoHelper = a, this.imageHelper = n, helpers.autoBind(this), this.resizeQuickThrottled = _.throttle(this.resizeQuick, 100)
            }
            return _createClass(e, [{
                key: "createDom",
                value: function(e) {
                    var t = helpers.Templates.build,
                        i = helpers.checkins.getFullName(e),
                        a = helpers.checkins.getShortName(e),
                        n = helpers.checkins.getCombinedName(e),
                        o = this.imageHelper.getAspectRatio(e, "post_image", {}, !0),
                        l = Date.now() - e.external_created_timestamp,
                        s = e.post_image,
                        r = e.post_link,
                        d = e.type,
                        h = e.compactDetailUrl,
                        c = helpers.addLineBreaks(e.html_comment) || "",
                        m = this.wallOptions.twitterVia,
                        u = this.wallOptions.wallTitle,
                        p = void 0,
                        v = void 0,
                        g = void 0,
                        f = void 0;
                    v = this.wallOptions.shareOriginalUrl && r ? r : h, p = "twitter" === d ? helpers.translation.__("DETAIL_SHARING_TEXT_FOR_TWITTER_CHECKINS", a, u) : helpers.translation.__("DETAIL_SHARING_TEXT", u);
                    var w = void 0,
                        k = !1;
                    if (this.videoHelper.hasRealVideo(e) ? w = t("detail/video", {
                            postImage: s,
                            postVideo: e.post_video
                        }) : this.videoHelper.hasEmbeddedVideoSupport(e) && (w = this.videoHelper.getVideoEmbedElement(e), k = !0), e.cta) try {
                        var y = JSON.parse(e.cta);
                        g = t("cta", y = {
                            url: y.url,
                            text: y.text
                        }), f = t("detail/menu_cta", y)
                    } catch (e) {
                        console.log(e)
                    }
                    var C = t("detail/post_image", {
                            hasEmbeddedVideo: k,
                            imageAspectRatio: o,
                            postImage: s,
                            postLink: r,
                            postVideoElement: w
                        }),
                        _ = t("detail/user", {
                            combinedName: n,
                            humanTimeDiff: helpers.Wall.humanTimeDiff(l),
                            network: d,
                            postLink: r,
                            userImage: e.external_image,
                            userName: i,
                            userLink: e.external_user_link
                        }),
                        b = t("detail/sharing", {
                            link: v,
                            twitterText: p,
                            twitterVia: m
                        }),
                        T = t("detail/content", {
                            ctaElement: g,
                            detailSharingElement: b,
                            detailUserElement: _,
                            hasImage: !!s,
                            hasVideo: this.videoHelper.hasRealVideo(e),
                            id: e.id,
                            message: c,
                            network: d,
                            postImageElement: C
                        }),
                        E = t("detail/menu_sharing", {
                            link: v,
                            twitterText: p,
                            twitterVia: m
                        }),
                        x = $(t("detail/container", {
                            ctaMenu: f,
                            detailContent: T,
                            detailMenuSharing: E
                        }));
                    return this.initDomEvents(x), x
                }
            }, {
                key: "display",
                value: function(e) {
                    var n = this,
                        o = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    a.addClass("show-detail-loading"), setTimeout((function() {
                        t("show-detail"), helpers.Event.triggerEvent("wallsio-detail-view-opened")
                    }), 0);
                    var l = $(".detail-container");
                    if (e.comment && this.resizeText(e.comment.length), l.find(".detail-image").length > 0 ? (this.resizeQuick(), imagesLoaded(l.get(0), {
                            background: ".detail-image"
                        }, (function() {
                            n.resize(), i("show-detail-loading")
                        }))) : i("show-detail-loading"), this.videoHelper.setVideoAutochangeActive(!1), this.videoHelper.hasRealVideo(e)) {
                        var s = l.find(".detail-video-wrapper video");
                        this.videoHelper.play(s), o && this.videoHelper.unmute(s)
                    }
                }
            }, {
                key: "mount",
                value: function(e, t) {
                    var i = this.createDom(e);
                    this.$mountPoint.html(i), this.display(e, t)
                }
            }, {
                key: "showClipboardCopyNotification",
                value: function(e) {
                    var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                        i = void 0;
                    i = t ? ".detail-link-copied-success" : ".detail-link-copied-error";
                    var a = e.find(i);
                    a.addClass("copied-visible"), setTimeout((function() {
                        return a.removeClass("copied-visible")
                    }), 3e3)
                }
            }, {
                key: "initDomEvents",
                value: function(e) {
                    var t = helpers.actionSelector;
                    e.on("click", t("show-detail-menu-sharing"), (function() {
                        return $(".detail-menu-sharing").addClass("detail-menu-sharing-expanded"), !1
                    })), e.on("click", t("prevent-default"), (function(e) {
                        e.preventDefault()
                    }));
                    var i = this;
                    e.on("click", t("detail-copy-link"), (function(t) {
                        t.preventDefault(), (function(e) {
                            return navigator.clipboard && navigator.clipboard.writeText ? navigator.clipboard.writeText(e).catch((function(t) {
                                return console.error("clipboard.writeText failed:", t), n(e)
                            })) : n(e)
                        })($(this).attr("data-clipboard-text")).then((function() {
                            i.showClipboardCopyNotification(e, !0)
                        })).catch((function(t) {
                            console.error("Couldn't copy to clipboard:", t), i.showClipboardCopyNotification(e, !1)
                        }))
                    }))
                }
            }, {
                key: "setDimensions",
                value: function(e, t) {
                    if (e.css({
                            height: "",
                            width: ""
                        }), $(window).width() >= 840) {
                        var i = e.height() * t;
                        e.css({
                            width: i
                        })
                    } else {
                        var a = e.width() / t;
                        e.css({
                            height: a
                        })
                    }
                }
            }, {
                key: "resizeQuick",
                value: function() {
                    var e = $(".detail-image");
                    if (0 !== e.length) {
                        var t = e.data("aspect-ratio") || 1,
                            i = e.data("raw-width"),
                            a = e.data("raw-height");
                        this.setDimensions(e, t), this.handleSmallImage(e, i, a)
                    }
                }
            }, {
                key: "resetSmallImage",
                value: function(e) {
                    e.removeClass("detail-image-too-small"), e.find(".detail-image-inner").css({
                        width: "",
                        height: ""
                    })
                }
            }, {
                key: "handleSmallImage",
                value: function(e, t, i) {
                    if ($(window).width() < 840) this.resetSmallImage(e);
                    else if (t && i) {
                        var a = e.width(),
                            n = e.height();
                        1.1 * t < a && 1.1 * i < n ? (e.addClass("detail-image-too-small"), e.find(".detail-image-inner").css({
                            width: t,
                            height: i
                        })) : this.resetSmallImage(e)
                    }
                }
            }, {
                key: "resize",
                value: function() {
                    var e = this,
                        t = $(".detail-image");
                    if (0 !== t.length) {
                        var i = new Image;
                        i.src = t.data("image"), i.onload = function() {
                            var a = i.width / i.height;
                            a && (e.setDimensions(t, a), e.handleSmallImage(t, i.width, i.height), t.data("aspect-ratio", a), t.data("raw-width", i.width), t.data("raw-height", i.height))
                        }
                    }
                }
            }, {
                key: "resizeText",
                value: function(e) {
                    var t = 1.6 - .0025 * e,
                        i = _.clamp(t, .6, 1.6);
                    $(".detail-message-inner").css("font-size", i + "em")
                }
            }]), e
        })();
    window.WallsioDetailView = o
})();
"use strict";
!(function() {
    var e = helpers.Css,
        o = e.addRootClass,
        t = e.removeRootClass,
        s = !1,
        i = null,
        n = function() {
            s = !1, t("mousemoving"), helpers.Event.triggerEvent("wallsio-mousemoving-deactivated")
        };
    $(document).on("mousemove wheel touchstart touchend touchmove click mousedown", _.throttle((function() {
        s || (s = !0, o("mousemoving"), helpers.Event.triggerEvent("wallsio-mousemoving-activated")), clearTimeout(i), i = setTimeout(n, 2e3), helpers.Wall.isPreviewIframe() && PostmessageApi.sendPostMessage("Wallsio.triggerDocumentEvent", "mousemove")
    }), 100))
})();
"use strict";
var _slicedToArray = (function() {
        return function(e, r) {
            if (Array.isArray(e)) return e;
            if (Symbol.iterator in Object(e)) return (function(e, r) {
                var t = [],
                    a = !0,
                    n = !1,
                    s = void 0;
                try {
                    for (var l, o = e[Symbol.iterator](); !(a = (l = o.next()).done) && (t.push(l.value), !r || t.length !== r); a = !0);
                } catch (e) {
                    n = !0, s = e
                } finally {
                    try {
                        !a && o.return && o.return()
                    } finally {
                        if (n) throw s
                    }
                }
                return t
            })(e, r);
            throw new TypeError("Invalid attempt to destructure non-iterable instance")
        }
    })(),
    _createClass = (function() {
        function e(e, r) {
            for (var t = 0; t < r.length; t++) {
                var a = r[t];
                a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
            }
        }
        return function(r, t, a) {
            return t && e(r.prototype, t), a && e(r, a), r
        }
    })();

function _toConsumableArray(e) {
    if (Array.isArray(e)) {
        for (var r = 0, t = Array(e.length); r < e.length; r++) t[r] = e[r];
        return t
    }
    return Array.from(e)
}

function _classCallCheck(e, r) {
    if (!(e instanceof r)) throw new TypeError("Cannot call a class as a function")
}!(function() {
    var e = (function() {
        function e(r, t) {
            _classCallCheck(this, e), this.Wall = r, this.WallHelper = t, helpers.autoBind(this), this.requestOlderCheckinsThrottled = _.throttle((function(e) {
                return r.requestOlderCheckins(e)
            }), 1e3)
        }
        return _createClass(e, [{
            key: "sendDocumentHeight",
            value: function() {
                e.sendPostMessage("Wallsio.height", this.WallHelper.getWallHeight())
            }
        }, {
            key: "setNetworkFilter",
            value: function(e) {
                e ? $(document).trigger("wall.applyFilter", {
                    network: e
                }) : $(document).trigger("wall.removeFilter")
            }
        }, {
            key: "initDomEvents",
            value: function() {
                var r = this;
                $(window).on("message", (function(t) {
                    var a = t.originalEvent.data;
                    if (a) {
                        var n = a.args;
                        switch (a.method) {
                            case "Wallsio.requestOlderCheckins":
                                var s = _.get(n, 0);
                                r.requestOlderCheckinsThrottled(s);
                                break;
                            case "Wallsio.getHeight":
                                r.sendDocumentHeight.apply(r, n);
                                break;
                            case "Wallsio.setAutoFillEnabled":
                                if (!r.Wall.setAutofillEnabled) break;
                                var l = _.get(n, 0);
                                r.Wall.setAutofillEnabled(l);
                                break;
                            case "Wallsio.setCustomCss":
                                if (r.WallHelper.hasPreviewIframe()) {
                                    var o = $(".wall-preview-iframe").get(0);
                                    e.sendPostMessageToIframe.apply(e, [o, "Wallsio.setCustomCss"].concat(_toConsumableArray(n)));
                                    break
                                }
                                helpers.Css.setCustomCss.call(null, n);
                                break;
                            case "Wallsio.triggerDocumentEvent":
                                var i = _slicedToArray(n, 2),
                                    u = i[0],
                                    c = i[1];
                                $(document).trigger(u, c);
                                break;
                            case "Wallsio.setNetworkFilter":
                                r.setNetworkFilter(_.get(n, 0))
                        }
                    }
                }))
            }
        }], [{
            key: "sendPostMessage",
            value: function(e) {
                for (var r = arguments.length, t = Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++) t[a - 1] = arguments[a];
                window !== parent && parent.postMessage && parent.postMessage({
                    args: t,
                    method: e,
                    widgetId: helpers.Url.getQueryParamForCurrentUrl("widget_id")
                }, "*")
            }
        }, {
            key: "sendPostMessageToIframe",
            value: function(e, r) {
                for (var t = arguments.length, a = Array(t > 2 ? t - 2 : 0), n = 2; n < t; n++) a[n - 2] = arguments[n];
                var s = e.contentWindow;
                s && s.postMessage && s.postMessage({
                    args: a,
                    method: r
                }, "*")
            }
        }, {
            key: "triggerEventInPreview",
            value: function(r, t) {
                var a = $(".wall-preview-iframe").get(0);
                e.sendPostMessageToIframe(a, "Wallsio.triggerDocumentEvent", r, t)
            }
        }]), e
    })();
    window.PostmessageApi = e
})();
"use strict";
Wall.themeParams.enableAspectRatioImages = !0, Wall.themeParams.defaultPostImageAspectRatio = 1, Wall.themeParams.minPostImageAspectRatio = .75, Wall.themeParams.maxPostImageAspectRatio = 2.76, Wall.methods.$createUser = function(e) {
    var a = helpers.checkins.getShortName(e),
        t = helpers.checkins.getFullName(e),
        s = helpers.checkins.getCombinedName(e),
        m = helpers.checkins.hasSeparateNames(e),
        r = templates.user_name_parts({
            shortName: a,
            fullName: t,
            combinedName: s,
            hasSeparateNames: m
        });
    return $(templates.user({
        type: e.type,
        shortName: a,
        fullName: t,
        combinedName: s,
        nameParts: r,
        userId: e.external_user_id,
        userLink: e.external_user_link,
        image: e.external_image,
        externalCreatedTimestamp: e.external_created_timestamp,
        postId: e.post_id,
        postLink: e.post_link
    }))
};
"use strict";
!(function() {
    var e = void 0,
        t = function() {
            return e || (e = new helpers.Isotope(Wall.themeParams.checkinTransition)), e
        },
        a = function(e) {
            e.isotope("updateSortData").isotope()
        };
    Wall.themeParams.maxCommentLength = 220, Wall.themeParams.ignoreProxyImageHeight = !0, Wall.methods.getTilesLimit = function(e) {
        var t;
        return arguments.length > 1 && void 0 !== arguments[1] && arguments[1] || helpers.Wall.isAppScrollable() || helpers.Wall.isAutoheight() ? (t = 100, helpers.Wall.isIframe() && (t = Math.ceil(.8 * t)), helpers.Wall.isMobile() && (t = Math.ceil(.5 * t)), t) : Math.max(Wall.methods.countTilesAboveTheFold(), 20)
    }, Wall.methods.domPrependCheckins = function(e, t) {
        e.prepend(t).isotope("insert", t).isotope()
    }, Wall.methods.domAppendCheckins = function(e, t) {
        e.append(t).isotope("insert", t).isotope()
    }, Wall.methods.domRemoveCheckins = function(e, t) {
        var a = $(".socialwall_container").data("isotope").options.transitionDuration,
            i = _.isString(a) ? helpers.time.cssDurationToMs(a, 0) : 0;
        e.isotope("remove", t).isotope("layout"), setTimeout((function() {
            return t.remove()
        }), i)
    }, Wall.methods.domReplaceCheckin = function(e, t, i, n) {
        var o = Wall.methods.domCreateCheckin(i, n);
        if (!o) return !1;
        var s = t.closest(".checkin-wrapper");
        t.replaceWith(o.find(".checkin"));
        var l = s.find(".checkin-buttons"),
            r = o.find(".checkin-buttons");
        0 === l.length && r.length > 0 ? s.append(r) : l.replaceWith(r), a(n.$container)
    }, Wall.methods.domCreateCheckin = function(e, t) {
        var a, i, n, o, s, l = new helpers.Image(t),
            r = new helpers.Video(t),
            c = new helpers.Wall(t),
            d = e.post_image;
        s = helpers.addLineBreaks(e.truncated_html_comment);
        var h = null;
        if (!d && !s) return null;
        if (e.tags && (h = e.tags.replace(/#/g, "")), (i = (a = $(templates.container({
                bonus: e.bonus || 0,
                externalCreatedTimestamp: e.external_created_timestamp,
                id: e.id,
                isLooped: e.isLooped,
                originalId: e.originalId || e.id,
                tags: h,
                type: e.type,
                userId: e.external_user_id,
                weight: e.weight
            }))).find(".checkin")).addClass(c.getRandomCheckinColorClass(e.id)), e.cta) try {
            var p = JSON.parse(e.cta);
            a.append(templates.cta({
                text: p.text,
                url: p.url
            }))
        } catch (e) {
            console.log(e)
        }
        if (e.is_highlighted && (i.append(templates.highlight_icon()), i.addClass("checkin-highlighted")), a = helpers.Wall.addImageAndMessageClasses(a, "wrapper", d, s), i = helpers.Wall.addImageAndMessageClasses(i, "checkin", d, s), d) {
            var m = 100 / l.getAspectRatio(e, "post_image", Wall.themeParams) + "%",
                u = r.hasRealVideo(e),
                g = r.hasEmbeddedVideoSupport(e);
            !u && g && i.addClass("checkin-with-embedded-video"), n = $(templates.image({
                id: e.id,
                image: d,
                imagePaddingBottom: m,
                postLink: e.post_link,
                message: s,
                showPlayButton: u || g
            }))
        } else n = $(templates.message({
            message: s
        }));
        return i.append(n), helpers.Checkins.hasUserData(e) ? (o = Wall.methods.$createUser(e), i.append(o)) : i.addClass("checkin-without-user"), r.initVideo(e, i), a
    }, Wall.methods.initTheme = function(e) {
        var a = t(),
            i = a.getCheckinTransition(),
            n = i.hiddenStyle,
            o = i.visibleStyle;
        $(".socialwall_container").isotope({
            percentPosition: !1,
            columnWidth: ".checkin-wrapper",
            itemSelector: ".checkin-wrapper",
            hiddenStyle: n,
            visibleStyle: o,
            getSortData: {
                sortScore: function(e) {
                    var t = $(e).data("id"),
                        a = Wall.getCheckinData(t);
                    return a && a.sortScore ? a.sortScore : 0
                }
            },
            sortBy: ["sortScore"],
            sortAscending: {
                sortScore: !1
            },
            stagger: a.initialStagger,
            transitionDuration: a.initialTransitionDuration
        })
    }, Wall.methods.getNumberOfCheckinsToFillScreen = function() {
        var e = $(".socialwall_container"),
            t = $("<div>", {
                class: "checkin-wrapper"
            });
        e.append(t);
        var a = e.width(),
            i = t.outerWidth();
        if (i <= 0) return 5;
        var n = i / a,
            o = Math.round(1 / n);
        t.remove();
        var s = i / Wall.themeParams.maxPostImageAspectRatio,
            l = Math.min(130, s) + 83,
            r = $(window).height() - parseInt(e.css("margin-top"), 10),
            c = o * Math.ceil(r / l) + 1;
        return c < 5 ? 5 : c > 200 ? 200 : c
    }, Wall.methods.getNumberOfInitialCheckins = function() {
        return Wall.methods.getNumberOfCheckinsToFillScreen()
    }, Wall.methods.setCheckinTransitionMode = function(e) {
        var a = $(".socialwall_container");
        t().setTransitionMode(a, e)
    }, $(document).on("wall.init", (function() {
        $(".socialwall_container").isotope("updateSortData").isotope("layout").isotope(), Wall.methods.setCheckinTransitionMode("normal")
    })), $(document).on("wall.sortUpdateNeeded", (function(e, t) {
        a(t.$container)
    }))
})();
"use strict";
var _createClass = (function() {
    function e(e, t) {
        for (var a = 0; a < t.length; a++) {
            var i = t[a];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
        }
    }
    return function(t, a, i) {
        return a && e(t.prototype, a), i && e(t, i), t
    }
})();

function _toConsumableArray(e) {
    if (Array.isArray(e)) {
        for (var t = 0, a = Array(e.length); t < e.length; t++) a[t] = e[t];
        return a
    }
    return Array.from(e)
}

function _classCallCheck(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
}!(function() {
    var e = helpers.Css,
        t = e.addRootClass,
        a = e.changeRootClass,
        i = e.hasRootClass,
        r = e.removeRootClass,
        l = e.toggleRootClass,
        n = $(document),
        s = helpers.actionSelector,
        u = helpers.Url,
        o = helpers.Wall,
        c = {
            billboard: ["pause", "filter"],
            bricks: [],
            fluid: ["pause"],
            grid: ["pause"],
            kiosk: ["filter"],
            map: ["pause", "filter"]
        },
        f = ["settings", "sharing"],
        v = (function() {
            function e() {
                _classCallCheck(this, e), this.state = new Immutable.Map, helpers.autoBind(this)
            }
            return _createClass(e, [{
                key: "init",
                value: function() {
                    this.initialNetworkFilter = Wall.getOption("network"), this.initState(), this.initDomEvents(), this.initFilterMenu()
                }
            }, {
                key: "setStateField",
                value: function(e, t) {
                    if (this.state = this.state.set(e, t), "currentTheme" === e) this.updateWallActionIcons();
                    else if ("isAutoAdvancePaused" === e) {
                        a("autoadvance-paused", t);
                        var i = {
                            value: t
                        };
                        if (helpers.Wall.hasPreviewIframe()) return void PostmessageApi.triggerEventInPreview("wall.setAutoAdvancePaused", i);
                        n.trigger("wall.setAutoAdvancePaused", {
                            value: t
                        })
                    } else "currentNetworkFilter" === e && this.updateNetworkFilterMenu()
                }
            }, {
                key: "setStateFieldInParent",
                value: function(e, t) {
                    PostmessageApi.sendPostMessage("Wallsio.setWallmenuStateField", e, t)
                }
            }, {
                key: "initState",
                value: function() {
                    var e = Wall.getOption("theme"),
                        t = this.initialNetworkFilter;
                    this.setStateField("isAutoAdvancePaused", !1), this.setStateField("isFullMenuExpanded", i("full-menu-expanded")), this.setStateField("isWallPreviewActive", !1), this.setStateField("currentTheme", e), this.setStateField("currentNetworkFilter", t), o.isPreviewIframe() && (this.setStateFieldInParent("isAutoAdvancePaused", !1), this.setStateFieldInParent("currentTheme", e), this.setStateFieldInParent("currentNetworkFilter", t))
                }
            }, {
                key: "initWallSettingsIframe",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                        t = $(".wall-settings-mount-point");
                    if (0 !== t.length) {
                        var a = t.data("content-url");
                        e && (a = u.updateUrlQueryParam(a, "sharing", "1"));
                        var i = $("<iframe>").attr("src", a).addClass("wall-settings-iframe");
                        t.replaceWith(i)
                    } else e && this.activateSharingInWallSettings()
                }
            }, {
                key: "initWallPreviewIframe",
                value: function() {
                    var e = $(".wall-preview-mount-point");
                    if (0 === e.length) return !1;
                    var a = $("<iframe>").attr("src", this.getDefaultPreviewIframeUrl()).addClass("wall-preview-iframe");
                    return e.replaceWith(a), this.setStateField("isWallPreviewActive", !0), t("wall-preview-active"), n.trigger("Wallsio.disconnectSocket"), !0
                }
            }, {
                key: "triggerApplyFilter",
                value: function(e) {
                    this.setStateField("currentNetworkFilter", e), helpers.Wall.hasPreviewIframe() ? PostmessageApi.triggerEventInPreview("wall.applyFilter", {
                        network: e
                    }) : n.trigger("wall.applyFilter", {
                        network: e
                    })
                }
            }, {
                key: "triggerRemoveFilter",
                value: function() {
                    this.setStateField("currentNetworkFilter", null), helpers.Wall.hasPreviewIframe() ? PostmessageApi.triggerEventInPreview("wall.removeFilter") : n.trigger("wall.removeFilter")
                }
            }, {
                key: "initFilterMenu",
                value: function() {
                    var e = this,
                        t = $(".filter-menu-reset");
                    $(".filter-menu-network").each((function(t, a) {
                        var i = $(a),
                            r = i.data("network");
                        i.on("click", (function(t) {
                            t.stopPropagation(), r === e.currentNetworkFilter ? setTimeout((function() {
                                e.triggerRemoveFilter()
                            }), 250) : setTimeout((function() {
                                e.triggerApplyFilter(r)
                            }), 250)
                        }))
                    })), t.on("click", (function(t) {
                        t.stopPropagation(), e.triggerRemoveFilter()
                    }))
                }
            }, {
                key: "initDomEvents",
                value: function() {
                    var e = this;
                    n.on("click", s("toggle-mini-menu"), (function(e) {
                        e.preventDefault(), l("wall-action-icons-expanded")
                    })), n.on("click", s("toggle-full-menu"), (function(t) {
                        t.preventDefault(), e.toggleFullMenu()
                    })), n.on("click", s("hide-full-menu"), (function(t) {
                        t.preventDefault(), e.hideFullMenu()
                    })), n.on("click", s("show-sharing"), (function(t) {
                        t.preventDefault(), e.showSharingMenu()
                    })), n.on("click", s("toggle-filter-menu"), (function(t) {
                        t.preventDefault(), t.stopImmediatePropagation(), e.toggleFilterMenu()
                    })), n.on("mousedown", s("preload-settings-iframe"), (function(t) {
                        t.preventDefault(), e.initWallSettingsIframe()
                    })), n.on("click", s("pause-autoadvance"), (function(t) {
                        t.preventDefault(), e.setStateField("isAutoAdvancePaused", !0)
                    })), n.on("click", s("unpause-autoadvance"), (function(t) {
                        t.preventDefault(), e.setStateField("isAutoAdvancePaused", !1)
                    })), $(window).on("message", (function(t) {
                        var a = t.originalEvent.data;
                        if (a) {
                            var i = a.args || [];
                            switch (a.method) {
                                case "Wallsio.reloadWallPreviewIframe":
                                    e.reloadWallPreviewIframe();
                                    break;
                                case "Wallsio.setWallPreviewIframeUrlParam":
                                    e.setWallPreviewIframeUrlParam.apply(e, _toConsumableArray(i));
                                    break;
                                case "Wallsio.setWallUrlParam":
                                    e.setBrowserUrlParam.apply(e, _toConsumableArray(i));
                                    break;
                                case "Wallsio.hideFullMenu":
                                    e.hideFullMenu();
                                    break;
                                case "Wallsio.setWallmenuStateField":
                                    e.setStateField.apply(e, _toConsumableArray(i))
                            }
                        }
                    }))
                }
            }, {
                key: "updateWallActionIcons",
                value: function() {
                    var e = c[this.currentTheme] || [];
                    o.isIframe() && e.push.apply(e, f), WallsioFullscreen.isSupported() || e.push("fullscreen"), $(".wall-action-icons").find("[data-action-name]").each((function(t, a) {
                        var i = $(a),
                            r = i.data("action-name"),
                            l = i.parent().is("span[hidden]");
                        e.includes(r) ? l || i.wrap("<span hidden>") : l && i.unwrap()
                    }))
                }
            }, {
                key: "updateNetworkFilterMenu",
                value: function() {
                    var e = $(".filter-menu-network");
                    (e.removeClass("filter-menu-network-selected"), this.currentNetworkFilter) && e.filter('[data-network="' + this.currentNetworkFilter + '"]').addClass("filter-menu-network-selected")
                }
            }, {
                key: "getDefaultPreviewIframeUrl",
                value: function() {
                    var e = window.location.href;
                    return e = u.updateUrlQueryParam(e, "preview", "1")
                }
            }, {
                key: "activateSharingInWallSettings",
                value: function() {
                    var e = $(".wall-settings-iframe");
                    if (0 !== e.length) {
                        var t = e.get(0).contentWindow;
                        if (t.postMessage) {
                            var a = 0;
                            this.isFullMenuExpanded || (a = 300), setTimeout((function() {
                                t.postMessage({
                                    method: "Wallsio.activateSharing"
                                }, "*")
                            }), a)
                        }
                    }
                }
            }, {
                key: "reloadWallPreviewIframe",
                value: function() {
                    if (!this.initWallPreviewIframe()) {
                        var e = $(".wall-preview-iframe"),
                            t = this.getDefaultPreviewIframeUrl();
                        e.attr("src", t)
                    }
                }
            }, {
                key: "transformUrlParamValue",
                value: function(e) {
                    return !0 === e ? "1" : !1 === e ? "0" : e + ""
                }
            }, {
                key: "setWallPreviewIframeUrlParam",
                value: function(e, t) {
                    this.initWallPreviewIframe(), t = this.transformUrlParamValue(t);
                    var a = $(".wall-preview-iframe"),
                        i = a.attr("src"),
                        r = u.updateUrlQueryParam(i, e, t);
                    a.attr("src", r)
                }
            }, {
                key: "setBrowserUrlParam",
                value: function(e, t) {
                    t = this.transformUrlParamValue(t), u.updateQueryParamForCurrentUrl(e, t)
                }
            }, {
                key: "hideFullMenu",
                value: function() {
                    this.setStateField("isFullMenuExpanded", !1), r("full-menu-expanded")
                }
            }, {
                key: "showFullMenu",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                    this.initWallSettingsIframe(e), this.setStateField("isFullMenuExpanded", !0), t("full-menu-expanded")
                }
            }, {
                key: "toggleFullMenu",
                value: function() {
                    this.isFullMenuExpanded ? this.hideFullMenu() : this.showFullMenu()
                }
            }, {
                key: "showSharingMenu",
                value: function() {
                    this.showFullMenu(!0), t("show-sharing")
                }
            }, {
                key: "toggleFilterMenu",
                value: function() {
                    l("show-filter-menu")
                }
            }, {
                key: "isFullMenuExpanded",
                get: function() {
                    return this.state.get("isFullMenuExpanded")
                }
            }, {
                key: "isWallPreviewActive",
                get: function() {
                    return this.state.get("isWallPreviewActive")
                }
            }, {
                key: "currentTheme",
                get: function() {
                    return this.state.get("currentTheme")
                }
            }, {
                key: "currentNetworkFilter",
                get: function() {
                    return this.state.get("currentNetworkFilter")
                }
            }]), e
        })();
    setTimeout((function() {
        (new v).init()
    }), 0)
})();
