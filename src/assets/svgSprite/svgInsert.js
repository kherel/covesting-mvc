const __svg__ = { path: '*.svg', name: 'images/svg/sprite.svg' }

let svgXHR = function(options) {
  let url = false
  let baseUrl = undefined

  options && options.filename ? (url = options.filename) : null

  if (!url) return false
  let _ajax = new XMLHttpRequest()
  let _fullPath

  if (typeof XDomainRequest !== 'undefined') {
    _ajax = new XDomainRequest()
  }

  if (typeof baseUrl === 'undefined') {
    if (typeof window.baseUrl !== 'undefined') {
      baseUrl = window.baseUrl
    } else {
      baseUrl =
        window.location.protocol +
        '//' +
        window.location.hostname +
        (window.location.port ? ':' + window.location.port : '')
    }
  }

  _fullPath = (baseUrl + '/' + url).replace(/([^:]\/)\/+/g, '$1')
  _ajax.open('GET', _fullPath, true)
  _ajax.onprogress = function() {}
  _ajax.onload = function() {
    if (!_ajax.responseText || _ajax.responseText.substr(0, 4) !== '<svg') {
      throw Error('Invalid SVG Response')
    }
    if (_ajax.status < 200 || _ajax.status >= 300) {
      return
    }
    let div = document.createElement('div')
    div.innerHTML = _ajax.responseText
    document.body.insertBefore(div, document.body.childNodes[0])
  }
  _ajax.send()
}

svgXHR(__svg__)
