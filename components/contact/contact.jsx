"use client"
import { FaWhatsapp, FaTiktok, FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { useForm, ValidationError } from "@formspree/react";
import { FaMapMarkerAlt } from "react-icons/fa";

function Contact() {
  const [state, handleSubmit] = useForm("mjvnrwkr");

  return (
    <>
      <div className="flex flex-col md:flex-row items-center justify-center w-full">
        <div className="flex flex-col md:flex-row justify-between w-full  ">
          {/* Email Form */}
          <div className="md:w-1/2 w-full mx-auto">
            <form onSubmit={handleSubmit} className="flex flex-col">
              <div className="mb-4">
                <p className="text-white mb-2 ">Email (OU Phone )</p>
                <input
                  autoComplete="on"
                  type="email"
                  name="email"
                  id="email"
                  placeholder="example@email.com"
                  className="border border-gray-600 rounded-lg p-2 w-full bg-gray-800"
                />
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                />
              </div>
              <div className="mb-4">
                <p className="text-white mb-2">Phone </p>
                <input
                  autoComplete="off"
                  placeholder="+212 123456789"
                  type="text"
                  name="number"
                  id="number"
                  className="border border-gray-600 rounded-lg p-2 w-full bg-gray-800"
                />
                <ValidationError
                  prefix="Number"
                  field="number"
                  errors={state.errors}
                />
              </div>
              <div className="mb-4">
                <p className="text-white mb-2">Message</p>
                <textarea
                  className="border border-gray-600 rounded-lg p-2 w-full bg-gray-800 h-24"
                  placeholder="Dis juste Salut"
                  required
                  name="message"
                  id="message"
                ></textarea>
                <ValidationError
                  prefix="Message"
                  field="message"
                  errors={state.errors}
                />
              </div>
              <button
                type="submit"
                disabled={state.submitting}
                className="cursor-pointer bg-accent hover:bg-white hover:text-accent  text-white rounded-lg py-2 w-full mt-4"
              >
                {state.submitting ? "Submitting..." : "Submit"}
              </button>
              {state.succeeded && (
                <p className="text-green-500 mt-4">Merci de vous joindre à nous !</p>
              )}
            </form>
          </div>

          {/* Contact Info */}
          <div className=" md:w-1/3 w-full md:mt-0 mt-7 mx-auto">
            <section id="contact" className="text-center  ">
              <p className="text-2xl mb-6 text-accent">Connectons-nous</p>
              <div className="text-gray-400 md:mb-8 mb-4">
                <p>
                veuillez remplir le formulaire ci-dessous, <br /> ou nous contacter via WhatsApp ou d'autres plateformes.
                </p>
              </div>
              <div className=" flex-col items-center ml-4">
                <span className="flex text-white items-center gap-3 w-[90%] mb-4 border-b   border-gray-500 pb-3">
                  <FaWhatsapp className="text-accent text-[25px]" />
                  <p>+212 617735607</p>
                </span>
                <span className="flex text-white items-center gap-3 mb-4 border-b w-[90%] border-gray-500 pb-3">
                  <FaGithub className="text-accent text-[25px]"  />
                  <p>EL MFH</p>
                </span>
                <span className="flex text-white items-center gap-3 mb-4 border-b w-[90%] border-gray-500 pb-3">
                  <FaLinkedin className="text-accent text-[25px]"   />
                  <p>EL MEHDI EL FHAILI</p>
                </span>
                <span className="flex text-white items-center gap-3 mb-4 border-b w-[90%] border-gray-500 pb-3">
                  <FaMapMarkerAlt className="text-accent text-[25px]"  />
                  <p>MAROC BENGUERIR HAY RIYAD </p>
                </span>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
