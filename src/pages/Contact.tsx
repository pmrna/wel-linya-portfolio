import Contacts from "../components/Contacts";
import Divider from "../components/Divider";
import Email from "../components/Email";

export default function Contact() {
  return (
    <div
      id="contact"
      className="min-h-screen w-screen h-screen flex flex-col items-center justify-center"
    >
      <h1 className="uppercase font-archivo font-bold text-[#cdcdcd] text-4xl mb-5 border-b-2 border-[#cdcdcd]">
        Contact me
      </h1>
      <h2 className="font-archivo font-normal text-[#cdcdcd] opacity-50 text-md w-full mb-8 md:mb-0 text-center">
        // tap an icon to get redirected, or send a message directly here.
      </h2>
      <div className="flex flex-col md:flex-row justify-center items-center w-full max-w-screen-xl md:space-x-16">
        <Contacts />
        <Divider />
        <Email />
      </div>
    </div>
  );
}
