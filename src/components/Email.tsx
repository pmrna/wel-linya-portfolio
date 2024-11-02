function Email() {
  const accessKey = import.meta.env.VITE_WEB3FORMS_KEY;

  const inputStyles =
    "text-neutral-200 w-full px-4 py-2 border bg-[#0d0b04] border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#cdcdcd]";

  return (
    <form
      method="POST"
      action="https://api.web3forms.com/submit"
      className="m-14 font-roboto flex flex-col w-full max-w-fit md:max-w-[500px] flex-shrink-0"
    >
      <input type="hidden" name="access_key" value={accessKey} />

      <div className="mb-4">
        <label htmlFor="name" className="font-bold text-[#cdcdcd]">
          Your name
        </label>
        <input
          id="name"
          type="text"
          name="name"
          required
          aria-label="Your name"
          className={inputStyles}
        />
      </div>

      <div className="mb-4">
        <label htmlFor="email" className="font-bold text-[#cdcdcd]">
          Your email
        </label>
        <input
          id="email"
          type="email"
          name="email"
          required
          aria-label="Your email"
          className={inputStyles}
        />
      </div>

      <div className="mb-4">
        <label htmlFor="message" className="font-bold text-[#cdcdcd]">
          Your message
        </label>
        <textarea
          id="message"
          name="message"
          rows={10}
          required
          aria-label="Your message"
          className={`${inputStyles} resize-none`}
        ></textarea>
      </div>

      <input type="checkbox" name="botcheck" className="hidden" />

      <div className="flex justify-start items-center">
        <button
          type="submit"
          className="group px-6 py-2 mt-1 text-neutral-200 font-bold w-[150px] bg-transparent border border-gray-300 rounded transform transition-transform hover:scale-105 hover:bg-zinc-700 hover:duration-100 focus:outline-none focus:ring-2 focus:ring-[#cdcdcd]"
        >
          <span className="group-hover:scale-110 transition-transform">
            Send
          </span>
        </button>
      </div>
    </form>
  );
}

export default Email;
