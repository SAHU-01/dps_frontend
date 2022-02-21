import "../../styles/globals.css";
import "tailwindcss/tailwind.css";
import axios from "axios";

axios.defaults.baseURL = process.env.NEXT_PUBLIC_API_BASE_ENDPOINT;
function MyApp({ Component, pageProps }) {
  return (
    <div className="h-screen font-serif text-black bg-white grid place-items-center">
      <div>
      <Component {...pageProps} />
      </div>
    </div>
  );
}

export default MyApp;
