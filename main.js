$(document).ready(function (argument) {
	// body...
	var privacidad = window.location.hash;
	if ($(privacidad).length > 0) {
		$(privacidad).show();
	}

	if ($('.testimonios').length > 0) {
		MyApp.testimonios.init();
	}


	if ($('#error404-content').length > 0) {
		MyApp.page404.init();
	} else {
		MyApp.url.init();
	}

	MyApp.solicita_demo.init();
	MyApp.solicita_demo_footer.init();

	MyApp.anuncio.init();
	MyApp.inicia_sesion.init();

	if ($(".acordion").length > 0) {
		$(".acordion").accordion({
			heightStyle: "content"
		});
	}

	if ($(".single-novedad").length > 0) {
		$('header nav li').each(function () {
			var url = template_url + $(this).find('a').attr('href');
			$(this).find('a').attr('href', url);
		});
	}

	if ($('.lista_novedades .item_novedades').length > 0) {
		MyApp.novedades.init();
	}

	//setTimeout(function() {
	$('#banner .contenido-form .content-img .img1').fadeIn(300);
	//}, 10);

	setTimeout(function () {
		$('#banner .contenido-form .content-img .img2').fadeIn(800);
	}, 300);
	setTimeout(function () {
		$('#banner .contenido-form .content-img .img3').fadeIn(800);
	}, 500);
	setTimeout(function () {
		$('#banner .contenido-form .content-img .img4').fadeIn(600);
	}, 1000);

	$('header .content-nav nav li a').on('click', function () {
		if ($('.fa.fa-bars').css('display') == 'block') {
			$('header .content-nav').slideUp();
		}
	});


	$('.fa.fa-bars').on('click', function (e) {
		e.preventDefault();
		$('header .content-nav').slideToggle();
	});

	$('.close').on('click', function (e) {
		e.preventDefault();
		$('.bgfixed').hide();

		$("input[name='name_lastname_foo']").val('');
		$("input[name='celular_foo']").val('');
		$("input[name='email_foo']").val('');
		$("input[name='razon_social_foo']").val('');
		$("select[name='giro_negocio_foo']").val('');
		$("select[name='medir_foo']").val('');
	});

	$('.close_novedades').on('click', function (e) {
		e.preventDefault();
		$('.bgfixed_novedades').hide();
		$('.bgfixed_novedades .contenido_popup .item_novedades').html('');
		window.location.hash = 'novedades';
	});

	$('.close_privacidad').on('click', function (e) {
		e.preventDefault();
		$('.bgfixed-privacidad').hide();
	});

	$('.enlace-privacidad').on('click', function (e) {
		e.preventDefault();
		$('.bgfixed-privacidad').show();
	});

	$('.solicita-demo').on('click', function (e) {
		e.preventDefault();
		$('.bgfixed.main').show();
		/*$('.bgfixed').css('height', '100%');*/
	});

	if ($('.info-formulario').length > 0) {
		$(".info-formulario").stick_in_parent({
			offset_top: 10
		});
	}

	if ($('.form-singular-novedad').length > 0) {
		MyApp.solicita_novedad.init();
	}

	$(document).scroll(function () {
		if ($(document).scrollTop() >= 10) {
			$('header').addClass('fixed');
		} else {
			$('header').removeClass('fixed');
		}

		/*if($('.info-formulario').length > 0 && $('#site-singular .infoflex').css('flex-direction') != 'column'){

		}*/

	});


	/*$('.item_novedades a.leer').on( 'click', function(e){
		e.preventDefault();
		var html = $(this).parent().html();
		var url = $(this).parent().parent().attr("id");
		$('.bgfixed_novedades .contenido_popup .item_novedades').html(html);
		$('.bgfixed_novedades').show();
		window.location.hash = url;
	});*/

	$('.feedback').on('click', function (e) {
		e.preventDefault();
		$('.bgfixed_feedback').show();
	});

	$('.close_feedback').on('click', function (e) {
		e.preventDefault();
		$('.bgfixed_feedback').hide();
	});

	$('.session a').on('click', function (e) {
		e.preventDefault();
		$('.bgfixed_sesion').show();
		if ($(window).width() < 1100) {
			$('header .content-nav').slideUp();
		}
	});

	$('.close_sesion').on('click', function (e) {
		e.preventDefault();
		$('.bgfixed_sesion').hide();
	});


});

$(window).on('resize', function () {
	var width = parseInt($(this).width());

	if (width > 1000) {
		$('header .content-nav').removeAttr('style');
	}

});


MyApp = {

	page404: {
		init: function () {
			$('header nav a').on('click', function () {
				window.location.href = 'https://queop.com.pe/';
			});
		}
	},

	url: {
		init: function () {

			var id = window.location.hash;
			if (id) {
				if ($(id).hasClass('item_novedades')) {

					var html = $(id).find('.padding').html();
					$('.bgfixed_novedades .contenido_popup .item_novedades').html(html);
					$('.bgfixed_novedades').show();
				} else {
					var positionTop = $(id).offset();
					$('html, body').animate({ 'scrollTop': positionTop.top }, 800);
				}
			}
		}
	},

	testimonios: {
		init: function () {
			$('.testimonios .slick').slick({
				dots: true,
				infinite: true,
				speed: 500,
				fade: true,
				adaptiveHeight: true,
				rtl: true,
				cssEase: 'linear',
				autoplay: true,
				autoplaySpeed: 8000,
			});
		}
	},

	novedades: {
		init: function () {
			$('.lista_novedades').slick({
				infinite: false,
				slidesToShow: 3,
				slidesToScroll: 1,
				responsive: [
					{
						breakpoint: 1000,
						settings: {
							slidesToShow: 2,
							slidesToScroll: 1
						}
					},
					{
						breakpoint: 600,
						settings: {
							slidesToShow: 1,
							slidesToScroll: 1
						}
					}

				]
			});
		}
	},

	solicita_demo: {
		init: function () {
			$(".form-solicita-demo").validate({
				rules: {
					name_lastname: "required",
					celular: {
						required: true,
						number: true
					},
					email: {
						required: {
							depends: function () {
								$(this).val($.trim($(this).val()));
								return true;
							}
						},
						email: true
					},
					razon_social: "required",
					giro_negocio: "required"
				},
				messages: {
					name_lastname: "Requerido",
					celular: "Requerido",
					email: "Por favor ingrese un correo válido",
					razon_social: "Requerido",
					giro_negocio: "Requerido"
				},
				errorPlacement: function (error, element) {
					error.addClass("ui red pointing label transition");
					error.insertAfter(element);
					dataLayer.push({ 'leadhome-error': 'leadhome' });
				},
				highlight: function (element, errorClass, validClass) {
					$(element).addClass(errorClass);
				},
				unhighlight: function (element, errorClass, validClass) {
					$(element).removeClass(errorClass);
				},
				submitHandler: function (form) {

					var datos = {
						action: 'wpcf7beforeRe',
						nombres: $(".form-solicita-demo input[name='name_lastname']").val(),
						celular: $(".form-solicita-demo input[name='celular']").val(),
						email: $(".form-solicita-demo input[name='email']").val(),
						razon_social: $(".form-solicita-demo input[name='razon_social']").val(),
						giro_negocio: $(".form-solicita-demo select[name='giro_negocio']").val(),
						medir: $(".form-solicita-demo select[name='medir']").val()
					};
					$.ajax({
						beforeSend: function (qXHR, settings) {
						},
						complete: function () {
						},
						type: "post",
						url: template_url + '/wp-admin/admin-ajax.php',
						//url : 'http://nerdmedia.pe/ucal/wp-admin/admin-ajax.php',
						//url : 'https://ucalvocacional.pe/wp-admin/admin-ajax.php',
						data: datos,
						success: function (response) {

							$('.form-solicita-demo p.submit').hide();


							/* Debe desaparecer a los 5 segundos*/
							$('.form-solicita-demo .gracias').show();

							$(".form-solicita-demo input[name='name_lastname']").val('');
							$(".form-solicita-demo input[name='celular']").val('');
							$(".form-solicita-demo input[name='email']").val('');
							$(".form-solicita-demo input[name='razon_social']").val('');
							$(".form-solicita-demo select[name='giro_negocio']").val('');
							$(".form-solicita-demo select[name='medir']").val('');

							gtag('event', 'conversion', { 'send_to': 'AW-967716803/FnX2CPW1mugBEMPfuM0D', 'event_callback': 'https://queop.com.pe' });

							//gtag_report_conversion('https://queop.com.pe');

						},
						error: function (error) { console.log(error) }
					});

					return false;
				}

			});
		}
	},

	anuncio: {
		init: function () {



			$(".form-anuncio").validate({
				rules: {
					name_lastname: "required",
					sector_empresarial: "required",
					email: {
						required: {
							depends: function () {
								$(this).val($.trim($(this).val()));
								return true;
							}
						},
						email: true
					}
				},
				messages: {
					name_lastname: "Requerido",
					sector_empresarial: "Requerido",
					email: "Por favor ingrese un correo válido"
				},
				errorPlacement: function (error, element) {
					error.addClass("ui red pointing label transition");
					error.insertAfter(element);
				},
				highlight: function (element, errorClass, validClass) {
					$(element).addClass(errorClass);
				},
				unhighlight: function (element, errorClass, validClass) {
					$(element).removeClass(errorClass);
				},
				submitHandler: function (form) {
					var che_terminos = 0;
					if ($(".form-anuncio input[name='acceptance']").is(':checked')) {
						che_terminos = 1;
					}

					var datos = {
						action: 'wpcf7Anuncio',
						nombres: $(".form-anuncio input[name='name_lastname']").val(),
						email: $(".form-anuncio input[name='email']").val(),
						telefono: $(".form-anuncio input[name='celular']").val(),
						sector_empresarial: $(".form-anuncio input[name='sector_empresarial']").val(),
						terminos: che_terminos
					};
					$.ajax({
						beforeSend: function (qXHR, settings) {
						},
						complete: function () {
						},
						type: "post",
						url: template_url + '/wp-admin/admin-ajax.php',
						data: datos,
						success: function (response) {
							$('.form-anuncio .content-form-anuncio').hide();
							$('.form-anuncio .gracias').show();
							setTimeout(function () {
								$('#anuncio-facebook').hide();
								$('.form-anuncio .content-form-anuncio').show();
								$('.form-anuncio .gracias').hide();
							}, 7000);

							$(".form-anuncio input[name='name_lastname']").val('');
							$(".form-anuncio input[name='email']").val('');
							$(".form-anuncio input[name='sector_empresarial']").val('');
							$(".form-anuncio input[name='celular']").val('');

						},
						error: function (error) { console.log(error) }
					});

					return false;
				}

			});
		}
	},

	solicita_demo_footer: {
		init: function () {
			$(".form-solicita-demo-foo").validate({
				rules: {
					name_lastname_foo: "required",
					celular_foo: {
						required: true,
						number: true
					},
					email_foo: {
						required: {
							depends: function () {
								$(this).val($.trim($(this).val()));
								return true;
							}
						},
						email: true
					},
					razon_social_foo: "required",
					giro_negocio_foo: "required"
				},
				messages: {
					name_lastname_foo: "Requerido",
					celular_foo: "Requerido",
					email_foo: "Por favor ingrese un correo válido",
					razon_social_foo: "Requerido",
					giro_negocio_foo: "Requerido",
				},
				errorPlacement: function (error, element) {
					error.addClass("ui red pointing label transition");
					error.insertAfter(element);
				},
				highlight: function (element, errorClass, validClass) {
					$(element).addClass(errorClass);
				},
				unhighlight: function (element, errorClass, validClass) {
					$(element).removeClass(errorClass);
				},
				submitHandler: function (form) {

					var datos = {
						action: 'wpcf7beforeRe',
						nombres: $(".form-solicita-demo-foo input[name='name_lastname_foo']").val(),
						celular: $(".form-solicita-demo-foo input[name='celular_foo']").val(),
						email: $(".form-solicita-demo-foo input[name='email_foo']").val(),
						razon_social: $(".form-solicita-demo-foo input[name='razon_social_foo']").val(),
						giro_negocio: $(".form-solicita-demo-foo select[name='giro_negocio_foo']").val(),
						medir: $(".form-solicita-demo-foo select[name='medir_foo']").val()
					};
					$.ajax({
						beforeSend: function (qXHR, settings) {
						},
						complete: function () {
						},
						type: "post",
						url: template_url + '/wp-admin/admin-ajax.php',
						data: datos,
						success: function (response) {
							$('.form-solicita-demo-foo p.submit').hide();
							$('.form-solicita-demo-foo .gracias').show();

							$(".form-solicita-demo-foo input[name='name_lastname_foo']").val('');
							$(".form-solicita-demo-foo input[name='celular_foo']").val('');
							$(".form-solicita-demo-foo input[name='email_foo']").val('');
							$(".form-solicita-demo-foo input[name='razon_social_foo']").val('');
							$(".form-solicita-demo-foo select[name='giro_negocio_foo']").val('');
							$(".form-solicita-demo-foo select[name='medir_foo']").val('');

						},
						error: function (error) { console.log(error) }
					});

					return false;
				}

			});
		}
	},



	solicita_novedad: {
		init: function () {
			$(".form-singular-novedad").validate({
				rules: {
					name: "required",
					telephone: {
						required: true,
						number: true
					},
					email: {
						required: {
							depends: function () {
								$(this).val($.trim($(this).val()));
								return true;
							}
						},
						email: true
					}
				},
				messages: {
					name: "Requerido",
					telephone: "Requerido",
					email: "Por favor ingrese un correo válido"
				},
				errorPlacement: function (error, element) {
					error.addClass("ui red pointing label transition");
					error.insertAfter(element);
				},
				highlight: function (element, errorClass, validClass) {
					$(element).addClass(errorClass);
				},
				unhighlight: function (element, errorClass, validClass) {
					$(element).removeClass(errorClass);
				},
				submitHandler: function (form) {

					var datos = {
						action: 'wpcf7beforeRe',
						nombres: $(".form-singular-novedad input[name='name']").val(),
						celular: $(".form-singular-novedad input[name='telephone']").val(),
						email: $(".form-singular-novedad input[name='email']").val(),
						message: $(".form-singular-novedad textarea[name='message']").val(),
						medir: $(".form-singular-novedad input[name='medir']").val()
					};
					$.ajax({
						beforeSend: function (qXHR, settings) {
						},
						complete: function () {
						},
						type: "post",
						url: template_url + '/wp-admin/admin-ajax.php',
						data: datos,
						success: function (response) {
							$('.btnform').hide();
							$('.respuesta-form').show();

							$(".form-singular-novedad input[name='name']").val('');
							$(".form-singular-novedad input[name='telephone']").val('');
							$(".form-singular-novedad input[name='email']").val('');
							$(".form-singular-novedad textarea[name='message']").val('');

						},
						error: function (error) { console.log(error) }
					});

					return false;
				}

			});
		}
	},


	inicia_sesion: {
		init: function () {
			$(".bgfixed_sesion form").validate({
				rules: {
					password: "required",
					username: {
						required: {
							depends: function () {
								$(this).val($.trim($(this).val()));
								return true;
							}
						},
						email: true
					}
				},
				messages: {
					username: "Requerido",
					password: "Por favor ingrese un correo válido"
				},
				errorPlacement: function (error, element) {
					error.addClass("ui red pointing label transition");
					error.insertAfter(element);
				},
				highlight: function (element, errorClass, validClass) {
					$(element).addClass(errorClass);
				},
				unhighlight: function (element, errorClass, validClass) {
					$(element).removeClass(errorClass);
				},
				submitHandler: function (form) {


					form.submit();
					$(".bgfixed_sesion").hide();

					$("input[name='username']").val('');
					$("input[name='password']").val('');
				}

			});
		}
	}

}