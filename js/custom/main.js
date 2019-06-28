// altura da tela
var _AlturaDocumento = $(window).height();
var menuHeight = $(".navbar-fixed").height();

// Sidenav
const sideNav = document.querySelector('.sidenav');
M.Sidenav.init(sideNav, {});

// Slider
const slider = document.querySelector('.slider');
M.Slider.init(slider, {
  indicators: false,
  height: _AlturaDocumento - menuHeight,
  transition: 500,
  interval: 6000
});

// Autocomplete
const ac = document.querySelector('.autocomplete');
M.Autocomplete.init(ac, {
  data: {
    "Aruba": null,
    "Cancun Mexico": null,
    "Hawaii": null,
    "Florida": null,
    "California": null,
    "Jamacia": null,
    "Europe": null,
  }
});

// Material Boxed
const mb = document.querySelectorAll('.materialboxed');
M.Materialbox.init(mb, {});

// ScrollSpy
const ss = document.querySelectorAll('.scrollspy');
M.ScrollSpy.init(ss, {});

// Dropdown
const dt = document.querySelectorAll('.dropdown-trigger');
M.Dropdown.init(dt, {});

// Modal
const md = document.querySelectorAll('.modal');
M.Modal.init(md, {});

// Forms login/register
$(document).ready(function() {
  $("#bt").click(function() {
    if ($('.rotate').length > 0) {
      $("#iwp").removeClass("rotate");
    }
    if ($('.rotateb').length > 0) {
      $("#iwp").removeClass("rotateb");

    }
    $("#iwp").addClass("rotate");

  });
  $("#bt2").click(function() {

    if ($('.rotate').length > 0) {
      $("#iwp").removeClass("rotate");
    }
    if ($('.rotateb').length > 0) {
      $("#iwp").removeClass("rotateb");
    }
    $("#iwp").addClass("rotateb");
  });
});

// conta os caracteres do textarea do Contato
$("#mensagemContato").keyup(function() {
  var max = parseInt($("#mensagemContato").attr('maxlength'));
  var tamanho = $('#mensagemContato').val().length;
  var newLength = max - tamanho;
  if (newLength > 0) {
    $("#spanMensagemContato").html(newLength + " caracteres restantes");
  }
  else if (newLength == 0) {
    $("#spanMensagemContato").html(null);
  }
  else {
    $("#spanMensagemContato").html(null);
  }
});

// mascara de telefone
$(document).ready(function(){
  $('#telefoneContato').mask('(99) 99999-9999');
});
