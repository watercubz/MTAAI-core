import { useNavigate } from 'react-router-dom';

export default function PageChat() {
  const navigate = useNavigate();

  const HandleChat = () => {
    navigate('/chat');
  };
  return (
    <li>
      <a href="#" className="flex items-center p-2 text-white rounded-lg group">
        <svg
          fill="none"
          className="w-6  h-6"
          viewBox="0 0 24 24"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="m17 2h-10c-2.76 0-5 2.23-5 4.98v5.98 1c0 2.75 2.24 4.98 5 4.98h1.5c.27 0 .63.18.8.4l1.5 1.99c.66.88 1.74.88 2.4 0l1.5-1.99c.19-.25.49-.4.8-.4h1.5c2.76 0 5-2.23 5-4.98v-6.98c0-2.75-2.24-4.98-5-4.98zm-9 10c-.56 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.44 1-1 1zm4 0c-.56 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.44 1-1 1zm4 0c-.56 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.44 1-1 1z"
            fill="#292d32"
          />
        </svg>
        <span className="flex-1 ms-3 whitespace-nowrap">
          <button
            onClick={HandleChat}
            className=" text-black  dark:text-white hover:text-blue-500"
          >
            chat
          </button>
        </span>
      </a>
    </li>
  );
}
