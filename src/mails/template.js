export function capitalize(string) {
	return string.charAt(0).toUpperCase() + string.slice(1);
}

export const template = ({ title, description, mercadopago, _doc: compra }) => {
	const { usuario, pago, carrito, _id } = compra;

	return `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
  <html xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office">
  <head>
  <meta charset="UTF-8">
  <meta content="width=device-width, initial-scale=1" name="viewport">
  <meta name="x-apple-disable-message-reformatting">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta content="telephone=no" name="format-detection">
  <title>New message</title><!--[if (mso 16)]>
  <style type="text/css">
  a {text-decoration: none;}
  </style>
  <![endif]--><!--[if gte mso 9]><style>sup { font-size: 100% !important; }</style><![endif]--><!--[if gte mso 9]>
  <xml>
  <o:OfficeDocumentSettings>
  <o:AllowPNG></o:AllowPNG>
  <o:PixelsPerInch>96</o:PixelsPerInch>
  </o:OfficeDocumentSettings>
  </xml>
  <![endif]--><!--[if !mso]><!-- -->
  <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap" rel="stylesheet"><!--<![endif]-->
  <style type="text/css">
  .rollover:hover .rollover-first {
  max-height:0px!important;
  display:none!important;
  }
  .rollover:hover .rollover-second {
  max-height:none!important;
  display:inline-block!important;
  }
  .rollover div {
  font-size:0px;
  }
  u ~ div img + div > div {
  display:none;
  }
  #outlook a {
  padding:0;
  }
  span.MsoHyperlink,
  span.MsoHyperlinkFollowed {
  color:inherit;
  mso-style-priority:99;
  }
  a.es-button {
  mso-style-priority:100!important;
  text-decoration:none!important;
  }
  a[x-apple-data-detectors] {
  color:inherit!important;
  text-decoration:none!important;
  font-size:inherit!important;
  font-family:inherit!important;
  font-weight:inherit!important;
  line-height:inherit!important;
  }
  .es-desk-hidden {
  display:none;
  float:left;
  overflow:hidden;
  width:0;
  max-height:0;
  line-height:0;
  mso-hide:all;
  }
  /*.es-header-body a:hover {
  color:#ffffff!important;
  }
  .es-content-body a:hover {
  color:#081D36!important;
  }
  .es-footer-body a:hover {
  color:#081D36!important;
  }
  .es-infoblock a:hover {
  color:#cccccc!important;
  }
  */
  a.es-button, button.es-button {
  padding:10px 20px 10px 20px;
  display:inline-block;
  background:#B2222D;
  border-radius:0px 0px 0px 0px;
  font-size:18px;
  font-family:arial, 'helvetica neue', helvetica, sans-serif;
  font-weight:normal;
  font-style:normal;
  line-height:120%;
  color:#ffffff;
  text-decoration:none!important;
  width:auto;
  text-align:center;
  letter-spacing:0;
  }
  .es-button-border {
  mso-hide:all;
  mso-border-alt:10px;
  border-style:solid;
  border-color:#2cb543 #2cb543 #2cb543 #2cb543;
  background:#B2222D;
  border-width:0px 0px 0px 0px;
  display:inline-block;
  border-radius:0px 0px 0px 0px;
  width:auto;
  }
  ul li,
  ol li {
  margin-left:0;
  }
  .es-p90r {
  padding-right:90px;
  }
  .es-p90l {
  padding-left:90px;
  }
  @media only screen and (max-width:600px) {h1 { font-size:30px!important; text-align:center } h2 { font-size:24px!important; text-align:center } h3 { font-size:20px!important; text-align:center } .es-m-p0r { padding-right:0px!important } .es-m-p20r { padding-right:20px!important } .es-m-p20l { padding-left:20px!important } .es-m-p20b { padding-bottom:20px!important } *[class="gmail-fix"] { display:none!important } p, a { line-height:150%!important } h1, h1 a { line-height:120%!important } h2, h2 a { line-height:120%!important } h3, h3 a { line-height:120%!important } h4, h4 a { line-height:120%!important } h5, h5 a { line-height:120%!important } h6, h6 a { line-height:120%!important } .es-header-body p { } .es-content-body p { } .es-footer-body p { } .es-infoblock p { } h4 { font-size:24px!important; text-align:left } h5 { font-size:20px!important; text-align:left } h6 { font-size:16px!important; text-align:left } .es-header-body h1 a, .es-content-body h1 a, .es-footer-body h1 a { font-size:30px!important } .es-header-body h2 a, .es-content-body h2 a, .es-footer-body h2 a { font-size:24px!important } .es-header-body h3 a, .es-content-body h3 a, .es-footer-body h3 a { font-size:20px!important } .es-header-body h4 a, .es-content-body h4 a, .es-footer-body h4 a { font-size:24px!important } .es-header-body h5 a, .es-content-body h5 a, .es-footer-body h5 a { font-size:20px!important } .es-header-body h6 a, .es-content-body h6 a, .es-footer-body h6 a { font-size:16px!important } .es-menu td a { font-size:12px!important } .es-header-body p, .es-header-body a { font-size:14px!important } .es-content-body p, .es-content-body a { font-size:14px!important } .es-footer-body p, .es-footer-body a { font-size:12px!important } .es-infoblock p, .es-infoblock a { font-size:12px!important } .es-m-txt-c, .es-m-txt-c h1, .es-m-txt-c h2, .es-m-txt-c h3, .es-m-txt-c h4, .es-m-txt-c h5, .es-m-txt-c h6 { text-align:center!important } .es-m-txt-r, .es-m-txt-r h1, .es-m-txt-r h2, .es-m-txt-r h3, .es-m-txt-r h4, .es-m-txt-r h5, .es-m-txt-r h6 { text-align:right!important } .es-m-txt-j, .es-m-txt-j h1, .es-m-txt-j h2, .es-m-txt-j h3, .es-m-txt-j h4, .es-m-txt-j h5, .es-m-txt-j h6 { text-align:justify!important } .es-m-txt-l, .es-m-txt-l h1, .es-m-txt-l h2, .es-m-txt-l h3, .es-m-txt-l h4, .es-m-txt-l h5, .es-m-txt-l h6 { text-align:left!important } .es-m-txt-r img, .es-m-txt-c img, .es-m-txt-l img, .es-m-txt-r .rollover:hover .rollover-second, .es-m-txt-c .rollover:hover .rollover-second, .es-m-txt-l .rollover:hover .rollover-second { display:inline!important } .es-m-txt-r .rollover div, .es-m-txt-c .rollover div, .es-m-txt-l .rollover div { line-height:0!important; font-size:0!important } .es-spacer { display:inline-table } a.es-button, button.es-button { font-size:18px!important } .es-m-fw, .es-m-fw.es-fw, .es-m-fw .es-button { display:block!important } .es-m-il, .es-m-il .es-button, .es-social, .es-social td, .es-menu { display:inline-block!important } .es-adaptive table, .es-left, .es-right { width:100%!important } .es-content table, .es-header table, .es-footer table, .es-content, .es-footer, .es-header { width:100%!important; max-width:600px!important } .adapt-img:not([src*="default-img"]) { width:100%!important; height:auto!important } .es-mobile-hidden, .es-hidden { display:none!important } .es-desk-hidden { width:auto!important; overflow:visible!important; float:none!important; max-height:inherit!important; line-height:inherit!important; display:table-row!important } tr.es-desk-hidden { display:table-row!important } table.es-desk-hidden { display:table!important } td.es-desk-menu-hidden { display:table-cell!important } .es-menu td { width:1%!important } table.es-table-not-adapt, .esd-block-html table { width:auto!important } .es-social td { padding-bottom:10px } a.es-button, button.es-button { display:inline-block!important } .es-button-border { display:inline-block!important } }
  </style>
  </head>
  <body style="width:100%;height:100%;padding:0;Margin:0">
  <div class="es-wrapper-color" style="background-color:#F2F0F4"><!--[if gte mso 9]>
  <v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t">
  <v:fill type="tile" color="#f2f0f4" origin="0.5, 0" position="0.5, 0"></v:fill>
  </v:background>
  <![endif]-->
  <table class="es-wrapper" width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;padding:0;Margin:0;width:100%;height:100%;background-repeat:repeat;background-position:center top;background-color:#F2F0F4">
  <tr>
  <td valign="top" style="padding:0;Margin:0">
  <table cellpadding="0" cellspacing="0" class="es-content" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;width:100%;table-layout:fixed !important">
  <tr>
  <td align="center" style="padding:0;Margin:0">
  <table bgcolor="#fff" class="es-content-body" align="center" cellpadding="0" cellspacing="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#FFFFFF;border-radius:50px 50px 0px 0px;width:500px">
  <tr>
  <td align="left" style="padding:0;Margin:0">
  <table cellpadding="0" cellspacing="0" width="100%" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
  <tr>
  <td align="center" valign="top" style="padding:0;Margin:0;width:500px">
  <table cellpadding="0" cellspacing="0" width="100%" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:separate;border-spacing:0px;border-radius:49px 49px 0 0;background-color:#b2222d" bgcolor="#b2222d" role="presentation">
  <tr>
  <td align="center" style="padding:0;Margin:0;font-size:0px"><a target="_blank" href="https://www.linkedin.com/in/matiasgstrafacedev/" style="mso-line-height-rule:exactly;text-decoration:underline;color:#081D36;font-size:18px"><img class="adapt-img" src="https://ggeles.stripocdn.email/content/guids/CABINET_6bbc7bd7cf14619eb134fa657edcd05745c6e432cbe5e847c93ce2687266cdf2/images/primernutricionistaescribiendoreceta.jpg" alt="Nutricion Vital img" style="display:block;font-size:18px;border:0;outline:none;text-decoration:none;border-radius:49px 49px 0px 0px" title="Merry Christmas" width="500"></a></td>
  </tr>
  </table></td>
  </tr>
  </table></td>
  </tr>
  <tr>
  <td align="left" style="padding:0;Margin:0">
  <table cellpadding="0" cellspacing="0" width="100%" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
  <tr>
  <td align="center" valign="top" style="padding:0;Margin:0;width:500px">
  <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
  <tr>
  <td align="center" class="es-m-p20r es-m-p20l" style="padding:0;Margin:0;padding-top:20px"><h1 style="Margin:0;font-family:Montserrat, helvetica, arial, sans-serif;mso-line-height-rule:exactly;letter-spacing:0;font-size:23px;font-style:120%;font-weight:normal;line-height:28px;color:#081D36"><b>${title}</b></h1></td>
  </tr>
  <tr>
  <td align="center" class="es-m-p20r es-m-p20l" style="padding-right:90px;padding-left:90px;Margin:0;padding-top:20px;padding-bottom:10px;font-family:arial, 'helvetica neue', helvetica, sans-serif">${description}</td>
  </tr>
  <tr>
  <td align="center" class="es-m-p20r es-m-p20l" style="padding-right:90px;padding-left:90px;Margin:0;padding-top:20px;padding-bottom:10px;font-family:arial, 'helvetica neue', helvetica, sans-serif">N° de transacción: ${_id}</td>
  </tr>
  <tr>
  <td align="center" class="es-m-p20r es-m-p20l" style="padding-right:90px;padding-left:90px;Margin:0;padding-top:20px;padding-bottom:10px;font-family:arial, 'helvetica neue', helvetica, sans-serif">Método de pago: ${pago}</td>
  </tr>
  <tr>
  <td align="center" class="es-m-p20r es-m-p20l" style="padding-right:90px;padding-left:90px;Margin:0;padding-top:20px;padding-bottom:10px;font-family:arial, 'helvetica neue', helvetica, sans-serif">${mercadopago}</td>
  </tr>


  </table></td>
  </tr>
  </table></td>
  </tr>
  </table></td>
  </tr>
  </table>
  <table cellpadding="0" cellspacing="0" class="es-footer" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;width:100%;table-layout:fixed !important;background-color:transparent;background-repeat:repeat;background-position:center top">
  <tr>
  <td align="center" style="padding:0;Margin:0">
  <table bgcolor="#ffffff" class="es-footer-body" align="center" cellpadding="0" cellspacing="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#FFFFFF;width:500px">
  <tr>
  <td align="left" style="padding:0;Margin:0;padding-top:20px;padding-right:20px;padding-left:20px">
  <table cellpadding="0" cellspacing="0" width="100%" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
  <tr>
  <td align="center" valign="top" style="padding:0;Margin:0;width:460px">
  <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
  
  <tr>
  <td align="center" style="padding:0;Margin:0"><h1 style="Margin:0;font-family:Montserrat, helvetica, arial, sans-serif;mso-line-height-rule:exactly;letter-spacing:0;font-size:18px;font-style:120%;font-weight:normal;line-height:22px;color:#081D36"><strong>Elementos comprados</strong></h1></td>
  </tr>
  ${carrito.map(
		(producto) => `<tr>
  <td align="center" style="padding:0;Margin:0;font-size:0px"><img class="adapt-img" src="https://ggeles.stripocdn.email/content/guids/CABINET_bfc47da7313b8acfe90c4f386d8c847445308ace955e75f2ed34568b18e8ffea/images/packagesolid24.png" alt style="display:block;font-size:18px;border:0;outline:none;text-decoration:none" width="24"></td>
  </tr>
  <tr>
  <td align="center" style="padding:0;Margin:0"><p style="margin:0;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:21px;letter-spacing:0;color:#081D36;font-size:14px">${capitalize(
		producto.nombre
	)}</p></td>
  </tr>
  <tr>
  <td align="center" style="padding:0;Margin:0"><p style="margin:0;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:21px;letter-spacing:0;color:#081D36;font-size:14px">Cantidad: ${
		producto.cantidad
	}</p></td>
  </tr>
  <tr>
  <td align="center" style="padding:0;Margin:0"><p style="margin:0;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:21px;letter-spacing:0;color:#081D36;font-size:14px">Precio unitario ${
		producto.precio
	}</p></td>
  </tr>`
	)}
  </table></td>
  </tr>
  </table></td>
  </tr>
  </table></td>
  </tr>
  </table>
  <table cellpadding="0" cellspacing="0" class="es-footer" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;width:100%;table-layout:fixed !important;background-color:transparent;background-repeat:repeat;background-position:center top">
  <tr>
  <td align="center" style="padding:0;Margin:0">
  <table bgcolor="#ffffff" class="es-footer-body" align="center" cellpadding="0" cellspacing="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#FFFFFF;border-radius:0 0 50px 50px;width:500px">
  <tr>
  <td align="left" style="padding:20px;Margin:0">
  <table cellpadding="0" cellspacing="0" width="100%" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
  <tr>
  <td align="center" valign="top" style="padding:0;Margin:0;width:460px">
  <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
  <tr>
  <td align="center" style="padding:0;Margin:0"><p style="margin:0;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:23px;letter-spacing:0;color:#081D36;font-size:15px"><strong>Datos del usuario</strong></p></td>
  </tr>
  <tr>
  <td align="center" style="padding:0;Margin:0"><p style="margin:0;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:21px;letter-spacing:0;color:#081D36;font-size:14px">Correo: ${
		usuario.email
	}</p></td>
  </tr>
  <tr>
  <td align="center" style="padding:0;Margin:0"><p style="margin:0;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:21px;letter-spacing:0;color:#081D36;font-size:14px">Teléfono: ${
		usuario.telefono
	}&nbsp;</p></td>
  </tr>
  <tr>
  <td align="center" style="padding:0;Margin:0"><p style="margin:0;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:21px;letter-spacing:0;color:#081D36;font-size:14px">Dirección:&nbsp;${capitalize(
		usuario.direccion
	)}, ${capitalize(usuario.localidad)}, ${capitalize(usuario.provincia)}</p></td>
  </tr>
  <tr>
  <td align="center" style="padding:0;Margin:0"><p style="margin:0;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:21px;letter-spacing:0;color:#081D36;font-size:14px">Código Postal:&nbsp;${
		usuario.codigoPostal
	}</p></td>
  </tr>
  <tr>
  <td align="center" style="padding:0;Margin:0"><p style="margin:0;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:21px;letter-spacing:0;color:#081D36;font-size:14px"><strong>En el caso de que alguna información esté incorrecta, por favor ponerse en contacto.</strong></p></td>
  </tr>
  </table></td>
  </tr>
  </table></td>
  </tr>
  </table></td>
  </tr>
  </table></td>
  </tr>
  </table>
  </div>
  </body>
  </html>`;
};

export default template;
