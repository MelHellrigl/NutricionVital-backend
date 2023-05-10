import nodemailer from 'nodemailer';
import * as dotenv from 'dotenv';
import template, { capitalize } from './template.js';

dotenv.config();

const configuracion = {
	host: 'smtp.gmail.com',
	port: 587,
	auth: {
		user: 'nutricionvitalDb@gmail.com',
		pass: process.env.GOOGLE_PASSWORD,
	},
};

const transportador = nodemailer.createTransport(configuracion);

function contenidoMP(mercadoPago) {
	if (!mercadoPago || mercadoPago === undefined || mercadoPago === null || !mercadoPago.status) {
		return '';
	}
	return `
  Nº Comprobante: <p style="font-weight:bold">${mercadoPago.payment_id}</p> 
  Estado: <p style="font-weight:bold">${mercadoPago.status}</p>
  `;
}

// Este le llega a nutrición vital
export async function enviarCompraIngresada(compra) {
	const { usuario, carrito, pago, _id } = compra;
	if ((!usuario || !carrito || !pago, !_id)) {
		return console.log(
			`ERROR sending email, expect to recive { usuario, carrito and pago } and recived ${compra}`
		);
	}

	const mercadopago = contenidoMP(compra.mercadoPago);

	try {
		const mensaje = {
			from: 'nutricionvitaldb@gmail.com',
			to: 'nutricionvitaldb@gmail.com',
			subject: 'Compra en proceso || Nutrición Vital',
			html: template({
				...compra,
				title: 'Ingresó una nueva compra',
				description: `El usuario ${capitalize(usuario.nombre)} ${capitalize(
					usuario.apellido
				)} quiere realizar una compra.
        `,
				mercadopago,
			}),
		};
		await transportador.sendMail(mensaje);
	} catch (error) {
		console.log(`Error sending email: ${error}`);
	}
}

// Este le llega al cliente
export async function enviarCompraRealizada(compra) {
	const { usuario, carrito, pago, _id } = compra;

	if ((!usuario || !carrito || !pago, !_id)) {
		return console.log(
			`ERROR sending email, expect to recive { usuario, carrito and pago } and recived ${compra}`
		);
	}

	const mercadopago = contenidoMP(compra.mercadoPago);

	try {
		const mensaje = {
			from: 'nutricionvitaldb@gmail.com',
			to: usuario.email,
			subject: 'Compra en proceso || Nutrición Vital',
			html: template({
				...compra,
				title: 'Nueva compra en proceso',
				description: `Hola, ¡${capitalize(usuario.nombre)} ${capitalize(
					usuario.apellido
				)} realizaste una compra en nuestra web NutriciónVital!
        `,
				mercadopago,
			}),
		};
		await transportador.sendMail(mensaje);
	} catch (error) {
		return console.log(`Error sending email: ${error}`);
	}
}
