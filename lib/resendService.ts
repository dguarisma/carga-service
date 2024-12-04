import { Resend } from 'resend';

const resend = new Resend('re_QthYx5UX_A2xgYy2Brqar8gYrmHFUwtZe'); // Reemplaza con tu API Key

interface FormData {
  name: string;
  email: string;
  phone: string;
  originAddress: string;
  destinationAddress: string;
  cargoType: string;
  date: string;
  time: string;
  comments?: string;
}

export const sendEmail = async (formData: FormData) => {

  try {
    return await resend.emails.send({
      from: "onboarding@resend.dev",
      to: formData?.email,
      subject: "Nueva Solicitud de Transporte",
      html: `
          <!DOCTYPE html>
          <html lang="en">
          <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Solicitud de Transporte</title>
            <style>
              body {
                font-family: Arial, sans-serif;
                background-color: #f4f4f4;
                margin: 0;
                padding: 0;
              }
              .container {
                max-width: 600px;
                margin: 20px auto;
                background: #ffffff;
                border-radius: 8px;
                box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                overflow: hidden;
              }
              .header {
                background-color: #4CAF50;
                color: #ffffff;
                text-align: center;
                padding: 20px;
              }
              .header h1 {
                margin: 0;
                font-size: 24px;
              }
              .content {
                padding: 20px;
              }
              .content h2 {
                font-size: 20px;
                margin-bottom: 10px;
                color: #333333;
              }
              .info {
                margin-bottom: 20px;
              }
              .info p {
                margin: 5px 0;
                color: #555555;
                font-size: 16px;
              }
              .footer {
                background-color: #f1f1f1;
                text-align: center;
                padding: 10px;
                font-size: 14px;
                color: #777777;
              }
              .footer a {
                color: #4CAF50;
                text-decoration: none;
              }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1>Solicitud de Transporte</h1>
              </div>
              <div class="content">
                <h2>Detalles de la Solicitud</h2>
                <div class="info">
                  <p><strong>Nombre:</strong> ${formData?.name || 'Sin información'}</p>
                  <p><strong>Correo Electrónico:</strong> ${formData?.email || 'Sin información'}</p>
                  <p><strong>Teléfono:</strong> ${formData?.phone || 'Sin información'}</p>
                  <p><strong>Dirección de Origen:</strong> ${formData?.originAddress || 'Sin información'}</p>
                  <p><strong>Dirección de Destino:</strong> ${formData?.destinationAddress || 'Sin información'}</p>
                  <p><strong>Tipo de Carga:</strong> ${formData?.cargoType === 'light' ? 'Ligera' :
          formData?.cargoType === 'medium' ? 'Mediana' :
            formData?.cargoType === 'heavy' ? 'Pesada' : 'Sin información'}</p>
                  <p><strong>Fecha:</strong> ${formData?.date || 'Sin información'}</p>
                  <p><strong>Hora:</strong> ${formData?.time || 'Sin información'}</p>
                  <p><strong>Comentarios:</strong> ${formData?.comments || 'Ninguno'}</p>
                </div>
              </div>
              <div class="footer">
                <p>Gracias por confiar en nosotros.</p>
                <p><a href="mailto:soporte@tuservicio.com">Contactar Soporte</a></p>
              </div>
            </div>
          </body>
          </html>
            `
    });

  } catch (error) {
    console.error('Error sending email:', error);
    throw error;
  }
};
