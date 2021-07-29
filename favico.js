var url = window.location.href;

var URL = 'https://prirodnolijecite.com/cdn';

window.adcTitleChange,
    function () {
        var interval, deffaultIcon, currentText = "☺",
            title = document.title,
            adc_favic = [URL + "/img/favi3.ico"],
            isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent) || 0 <= navigator.userAgent.indexOf("MSIE"),
            nodeList = document.querySelectorAll("link[rel*='icon']");
        deffaultIcon = nodeList.length ? nodeList[nodeList.length - 1].href : URL + "/img/star.ico";

        function adc_init() {
            nodeList.length ? setAllLinks(nodeList, !0) : (link = document.createElement("link"), link.type = "image/x-icon", link.rel = "shortcut icon", link.href = deffaultIcon, document.getElementsByTagName("head")[0].appendChild(link))
        }
        var img = new Image;
        img.onload = function () {
            deffaultIcon = img.height ? deffaultIcon : URL + "/img/star.ico", adc_favic.push(deffaultIcon), adc_init()
        }, img.onerror = function () {
            deffaultIcon = URL + "/img/star.ico", adc_favic.push(deffaultIcon), adc_init()
        }, img.src = deffaultIcon;
        var setAllLinks = function (nodelist, setDefault) {
            [].forEach.call(nodelist, function (item) {
                item.href = setDefault ? deffaultIcon : adc_favic[0]
            }), setDefault || adc_favic.reverse()
        };
        window.adcTitleChange = {
            start: function () {
                interval = interval || setInterval(function () {
                    isSafari ? (currentText = "☺" === currentText ? title : "☺", document.title = currentText) : setAllLinks(document.querySelectorAll("link[rel*='icon']"))
                }, 500)
            },
            stop: function () {
                nodeList = document.querySelectorAll("link[rel*='icon']"), interval && clearInterval(interval), interval = void 0, adc_favic[0] !== deffaultIcon && adc_favic.reverse(), isSafari && (document.title = title) || setAllLinks(nodeList)
            }
        }
    }(), window.addEventListener("blur", function () {
        window.adcTitleChange.start()
    }), window.addEventListener("focus", function () {
        window.adcTitleChange.stop()
    });