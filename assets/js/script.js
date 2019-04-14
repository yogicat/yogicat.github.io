(function() {
  if (sessionStorage.fontsLoadedFoutWithClass) {
    document.documentElement.classList += 'fonts-loaded'
    return
  }

  if ('fonts' in document) {
    Promise.all([
      document.fonts.load('200 Noto Sans'),
      document.fonts.load('300 Noto Sans'),
      document.fonts.load('600 Noto Sans'),
    ]).then(function() {
      document.documentElement.className += 'fonts-loaded'
      sessionStorage.fontsLoadedFoutWithClass = true
    })
  }
})()
