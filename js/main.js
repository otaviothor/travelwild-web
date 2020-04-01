axios.get('https://raw.githubusercontent.com/cristianoascari/paises-no-formato-JSON/master/countriesJson_ptBR.json')
  .then((response) => {
    const mapCountries = response.data.map(dt => { return dt });

    initAutoComplete(mapCountries)
  })
  .catch((error) => {
    console.log(error)
  })

// Sidenav
const sideNav = document.querySelector('.sidenav');
M.Sidenav.init(sideNav, {});

// Slider
const slider = document.querySelector('.slider');
M.Slider.init(slider, {
  indicators: false,
  transition: 500,
  interval: 6000
});

// Autocomplete
function initAutoComplete(dt) {

  var arrCountries = []
  arrCountries = arrCountries.concat(dt.map(x => { return JSON.parse(`"${x.nome}": null`) }))

  console.log(arrCountries);



  const ac = document.querySelector('.autocomplete');
  M.Autocomplete.init(ac, {
    data: {}
  });
}

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

// conta os caracteres do textarea do Contato
$("#mensagemContato").keyup(() => {
  var max = parseInt($("#mensagemContato").attr('maxlength'));
  var tamanho = $('#mensagemContato').val().length;
  var newLength = max - tamanho;
  if (newLength > 0) {
    $("#spanMensagemContato").html(newLength + " caracteres restantes");
  } else if (newLength == 0) {
    $("#spanMensagemContato").html(null);
  } else {
    $("#spanMensagemContato").html(null);
  }
});

// mascara de telefone
$(document).ready(() => {
  $('#telefoneContato').mask('(99) 99999-9999');
});

// verifica a quantidade de caracteres no campo senha do cadastro
$("#senha").keyup(() => {
  var tamanho = $('#senha').val().length;
  if (tamanho < 8 || tamanho > 12) {
    $("#spanSenha").html("A senha deve conter no mínimo 8 caracteres e no máximo 12");
    $('#confsenha').prop('disabled', true);
  } else if (tamanho == 0) {
    $("#spanSenha").html(null);
  } else {
    $("#spanSenha").html(null);
    $('#confsenha').prop('disabled', false);
  }
});

// verifica se as senhas são iguais
$("#confsenha").keyup(() => {
  var senhaValue = $('#senha').val();
  var confSenhaValue = $('#confsenha').val();
  if (confSenhaValue != senhaValue) {
    $("#spanConfSenha").html("As senhas não conferem");
    $('#btnCadastro').prop('disabled', true);
  }
  else {
    $("#spanConfSenha").html(null);
    $('#btnCadastro').prop('disabled', false);
  }
});


// function pra alternar entre o login e o recuperar senha
$('.toggleLogin').click(() => {
  $('.formRecuperarSenha').toggleClass('hide')
  $('.formLogin').toggleClass('hide')
})

// muda o tipo do campo password pra text
function verSenha() {
  $('.btnVerSenha').toggleClass("fa-eye fa-eye-slash");
  if ($('.inputSenha').attr("type") == "password") {
    $('.inputSenha').attr("type", "text")
  } else {
    $('.inputSenha').attr("type", "password")
  }
}

// image preview
$(".inputFoto").change(() => {
  imagePreview(this);
  $('.divForms').css('overflow', 'scroll')
});

function imagePreview(input) {
  if (input.files && input.files[0]) {
    var reader = new FileReader();
    reader.onload = e => {
      $('.imagePreview').attr('src', e.target.result);
    };
    reader.readAsDataURL(input.files[0]);
  }
}