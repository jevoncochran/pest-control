import emailjs from "emailjs-com";

export const sendInquiry = (e) => {
  e.preventDefault();

  emailjs
    .sendForm(
      "service_cv3upmr",
      "template_m8cv973",
      e.target,
      "user_gcST2H5scnEqWsdWxVu4s"
    )
    .then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );

  e.target.reset();
};