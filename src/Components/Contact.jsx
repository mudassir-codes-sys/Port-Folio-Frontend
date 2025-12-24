import { useState } from "react";
import Lines from "../Lines";
import axios from "axios";
import { toast } from "sonner";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    let id;
    try {
      id = toast.loading("Sending");
      setLoading(true);
      const res = await axios.post(
        import.meta.env.VITE_BACKEND_URL + "/send/email",
        { name, email, number, message }
      );
      if (res.data.success) {
        toast.success("Sent", { id });
        setName("");
        setEmail("");
        setNumber("");
        setMessage("");
      } else {
        toast.error(res.data.message, { id });
      }
    } catch (error) {
      if (id) toast.dismiss(id);
      toast.error(error?.response?.data?.message || error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div id="contact" className="bg-[#d7d7d7]">
      <div>
        <div className="pt-32 flex mb-20 justify-center">
          <h1 className="text-4xl  border-4 px-12 py-4 font-bold">CONTACT</h1>
        </div>
        <Lines />

        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-16 p-10 w-full max-w-md mx-auto mt-10"
        >
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border-l-5 p-2 border-b-5 outline-none"
            type="text"
            placeholder="ENTER YOUR NAME"
            required
          />
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border-l-5 p-2 border-b-5 outline-none"
            type="email"
            required
            placeholder="ENTER YOUR EMAIL"
          />
          <input
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            className="border-l-5 p-2 border-b-5 outline-none"
            type="text"
            placeholder="PHONE NUMBER"
            required
          />
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="resize-none border-l-5 p-2 border-b-5  "
            placeholder="YOUR MESSAGE"
            required
          />
          <div className="max-w-md mx-auto pb-10 ">
            <button
              type="Submit"
              className="border-l-3 px-8  text-xl cursor-pointer border-r-3"
            >
              {loading ? "SUBMITTING" : "SUBMIT"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
