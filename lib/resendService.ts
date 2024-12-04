import emailjs from '@emailjs/browser'

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
    emailjs.init({
      publicKey: 'jm1Z-3tJFhFfHL_dK',
      blockHeadless: true,
      limitRate: {
        id: 'app',
        throttle: 10000,
      },
    });

    const templateParams = {

      to_name: formData?.name,
      to_email: "carga.service@gmail.com",
      name: formData?.name || "Sin información",
      email: formData?.email || "Sin información",
      phone: formData?.phone || "Sin información",
      originAddress: formData?.originAddress || "Sin información",
      destinationAddress: formData?.destinationAddress || "Sin información",
      cargoType:
        formData?.cargoType === "light"
          ? "Ligera"
          : formData?.cargoType === "medium"
            ? "Mediana"
            : formData?.cargoType === "heavy"
              ? "Pesada"
              : "Sin información",
      date: formData?.date || "Sin información",
      time: formData?.time || "Sin información",
      comments: formData?.comments || "Ninguno",
    };

    emailjs.send("service_wc3pxfg", "template_4f0i199", templateParams).then(
      (response) => {
        console.log('SUCCESS!', response.status, response.text);
      },
      (error) => {
        console.log('FAILED...', error);
      },
    )
  } catch (error) {
    console.error('Error sending email:', error);
    throw error;
  }
};
