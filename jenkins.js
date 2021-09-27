// ==UserScript==
// @name         Jenkins Build History 加强
// @namespace    https://github.com/gaoshang212/jenkins-buildHistory-Ext
// @version      0.1
// @description  a Jenkins shortcut tools to build history
// @author       gaoshang212
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// @include      http://jenkins.abc.com/view/*
// @exclude      http://jenkins.abc.com/app/*
// ==/UserScript==

// 在 include 里输入您的 jenkins 地址

(function () {
    'use strict';

    function jenkins() {
        const $ = window.jQuery;
        if (!$) {
            return;
        }
        //'<a><img src="/static/f80a2d63/images/16x16/terminal.png" width="16" height="16" alt=""></a>&nbsp;'
        $('.build-row-cell').each((index, _node) => {
            const node = $(_node);
            const cmdlink = node.find('.build-status-link').attr('href');
            const ele = node.find('.pane.build-controls .build-badge');
            if (!ele.length) {
                return;
            }

            ele.prepend(`&nbsp;<a href='${cmdlink}'><img src="/static/f80a2d63/images/16x16/terminal.png" width="16" height="16" alt=""></a>&nbsp;`)
            const reg = cmdlink.replace(/console.*/, '')
            ///(?!=\/view\/.+)\d+(?!=console)/.exec(cmdlink);
            if (reg) {
                ele.prepend(`&nbsp;<a href='${reg}rebuild'><img src="/static/f80a2d63/images/16x16/clock.png" width="16" height="16" alt=""></a>&nbsp;`)
            }
        });
    }

    jenkins();
})();