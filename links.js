(function(m, e, t, r, i, k, a) {
    m[i] = m[i] || function() {
        (m[i].a = m[i].a || []).push(arguments)
    };
    m[i].l = 1 * new Date();
    k = e.createElement(t), a = e.getElementsByTagName(t)[0], k.async = 1, k.src = r, a.parentNode.insertBefore(k, a)
})
(window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
ym(82344478, "init", {
    clickmap: true,
    trackLinks: true,
    accurateTrackBounce: true,
    webvisor: true
});


$(document).ready(function() {

    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const loop = urlParams.get('loop')

    const handleTrackClickUrlReplace = function(element) {
        element.href = pageSettings.newTabUrl
        element.target = '_blank'
    }

    const handleTrackClickUrlReplaceInIframe = function(element) {
        element.href = pageSettings.newTabUrl
        element.target = '_self'
    }

    const handleDoublePageOpen = function(e, aElement) {
        e.preventDefault()

        if (location.protocol === "http:") {
            window.location = pageSettings.newTabUrl
        } else if (location.protocol === "https:") {
            window.open(pageSettings.newTabUrl, "_blank")
        }

        if (location.protocol === "http:") {
            window.location = pageSettings.replaceUrl
        } else if (location.protocol === "https:") {
            window.open(pageSettings.replaceUrl, "_self")
        }
    }

    let scrollOnCLickElement = pageSettings.scrollToFormClass ? document.getElementsByClassName(pageSettings.scrollToFormClass)[0] : null
    let checkForAllForms = document.querySelectorAll('form[action]')
    if (!scrollOnCLickElement && checkForAllForms) { scrollOnCLickElement = checkForAllForms[checkForAllForms.length - 1] }

    const scrollToForm = function(e) {

        let form = scrollOnCLickElement

        if (!form) {
            console.log('noform');
            return;
        }

        // Set our distance placeholder
        let distance = 0;
        let elem = form
            // Loop up the dom
        do {
            // Increase our distance counter
            distance += elem.offsetTop;

            // Set the element to it's parent
            elem = elem.offsetParent;

        } while (elem);
        distance = distance < 0 ? 0 : distance;

        // Add offset to element position, so that fill form is visible
        let headerOffset = 100;
        let elementPosition = distance;
        // Subtract that offset from form position in dom
        let offsetPosition = elementPosition - headerOffset;

        window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
        });
    }

    let allAtags = document.getElementsByTagName('a')

    if (!allAtags || allAtags.length === 0) return

    for (let i = 0; i < allAtags.length; i++) {

        const openInSameFrame = window !== window.top
        let tempClassName = allAtags[i].className
        let elementIncludesStopRedirection = tempClassName && tempClassName.indexOf('stop-redirection') !== -1 ? true : false
        let elementForceScroll = scrollOnCLickElement && tempClassName && tempClassName.indexOf('force-scroll') !== -1 ? true : false
        if (elementIncludesStopRedirection) allAtags[i].onclick = function(e) { e.preventDefault() }
        else if (elementForceScroll) {
            allAtags[i].onclick = scrollToForm
        } else {
            if (pageSettings.pageType === 'formless') {
                if (pageSettings.useReplaceUrl && pageSettings.replaceUrl) {
                    if (openInSameFrame) {
                        handleTrackClickUrlReplaceInIframe(allAtags[i])
                    } else {
                        handleTrackClickUrlReplace(allAtags[i])
                    }
                    allAtags[i].onclick = function(e) {
                        if (loop != 0 && !openInSameFrame) { handleDoublePageOpen(e, allAtags[i]) }
                    }
                }
            } else if (scrollOnCLickElement && (pageSettings.pageType === 'prelander' || pageSettings.pageType === 'lander')) {

                if (elementIncludesStopRedirection) {
                    allAtags[i].style.cursor = 'default'
                } else {
                    allAtags[i].style.cursor = 'pointer'
                    allAtags[i].onclick = scrollToForm
                }
            }
        }


    }

})