export function FloatBar() {
  return (
    <div
      className={`w-full h-24 lg:w-96 flex items-center pt-6  justify-end sticky top-0 z-50`}
    >
      <a
        href="https://hotels.cloudbeds.com/pt-br/reservas/KmjgH4#checkin=2024-05-08&checkout=2024-05-09"
        className="w-full h-11 flex items-center justify-between drop-shadow-[0px_15px_25px_rgba(0,0,0,.7)] rounded-2xl lg:rounded-xl border-2 border-white"
      >
        <div className="flex items-center gap-2 pl-2">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M2.2915 9.58332C2.2915 13.6104 5.55609 16.875 9.58317 16.875C13.6102 16.875 16.8748 13.6104 16.8748 9.58332C16.8748 5.55625 13.6102 2.29166 9.58317 2.29166C5.55609 2.29166 2.2915 5.55625 2.2915 9.58332ZM9.58317 18.125C4.86574 18.125 1.0415 14.3008 1.0415 9.58332C1.0415 4.86589 4.86574 1.04166 9.58317 1.04166C14.3006 1.04166 18.1248 4.86589 18.1248 9.58332C18.1248 11.7171 17.3424 13.6681 16.0489 15.1652L18.7751 17.8914C19.0192 18.1355 19.0192 18.5312 18.7751 18.7753C18.531 19.0193 18.1353 19.0193 17.8912 18.7753L15.165 16.049C13.668 17.3426 11.7169 18.125 9.58317 18.125Z"
              fill="#F2F8FA"
            />
          </svg>
          <h1 className="montserrat text-xs font-semibold text-white">
            Verificar disponibilidade
          </h1>
        </div>
        <button className="rounded-full mr-2 text-black h-7 w-24 montserrat text-xs font-semibold bg-white">
          Reservar
        </button>
      </a>
    </div>
  );
}
