;(function ($) {
  'use strict'

  /*
   * HELPERS
   */
  var _dropdownOpenClass = 'open'
  var _dropdownMenuItem = '.mega-menu li.dropdown'
  var _headerScrollClass = 'scrolling'
  var _headerSelector = '.header-container'
  var _headerEl
  var _contentSelector = '.content'
  var _contentEl

  function megaMenuHover () {
    $(_dropdownMenuItem)
      .on('mouseenter', function () {
        this.classList.add(_dropdownOpenClass)
      })
      .on('mouseleave', function () {
        this.classList.remove(_dropdownOpenClass)
      })
  }

  function stickyHeader() {
      var _headerEl = $(_headerSelector)
      if (!_headerEl.length) return;

      var headerElTop = _headerEl.offset().top
      $(window).on('scroll', function () {
          var currentTop = $(window).scrollTop()
          if (currentTop > headerElTop) {
            _headerEl.addClass(_headerScrollClass)
            _contentEl.css({marginTop: _headerEl.height()})
          } else {
            _headerEl.removeClass(_headerScrollClass)
            _contentEl.css({marginTop: '0'})
          }
      })
  }

  function init () {
    _contentEl = $(_contentSelector)

    megaMenuHover()
    stickyHeader()
  }

  $(init)
})(jQuery)
