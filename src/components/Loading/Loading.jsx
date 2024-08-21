import "./pacman.css";

export function Loading() {
  return (
    <div className="pacman">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid"
        width="200"
        height="200"
        style={{
          shapeRendering: "auto",
          display: "block",
          background: "transparent",
        }}
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <g>
          <g>
            <circle fill="#e15b64" r="4" cy="50" cx="60">
              <animate
                begin="-0.67s"
                keyTimes="0;1"
                values="95;35"
                dur="1s"
                repeatCount="indefinite"
                attributeName="cx"
              ></animate>
              <animate
                begin="-0.67s"
                keyTimes="0;0.2;1"
                values="0;1;1"
                dur="1s"
                repeatCount="indefinite"
                attributeName="fill-opacity"
              ></animate>
            </circle>
            <circle fill="#e15b64" r="4" cy="50" cx="60">
              <animate
                begin="-0.33s"
                keyTimes="0;1"
                values="95;35"
                dur="1s"
                repeatCount="indefinite"
                attributeName="cx"
              ></animate>
              <animate
                begin="-0.33s"
                keyTimes="0;0.2;1"
                values="0;1;1"
                dur="1s"
                repeatCount="indefinite"
                attributeName="fill-opacity"
              ></animate>
            </circle>
            <circle fill="#e15b64" r="4" cy="50" cx="60">
              <animate
                begin="0s"
                keyTimes="0;1"
                values="95;35"
                dur="1s"
                repeatCount="indefinite"
                attributeName="cx"
              ></animate>
              <animate
                begin="0s"
                keyTimes="0;0.2;1"
                values="0;1;1"
                dur="1s"
                repeatCount="indefinite"
                attributeName="fill-opacity"
              ></animate>
            </circle>
          </g>
          <g transform="translate(-15 0)">
            <path
              transform="rotate(90 50 50)"
              fill="#f8b26a"
              d="M50 50L20 50A30 30 0 0 0 80 50Z"
            ></path>
            <path fill="#f8b26a" d="M50 50L20 50A30 30 0 0 0 80 50Z">
              <animateTransform
                keyTimes="0;0.5;1"
                values="0 50 50;45 50 50;0 50 50"
                dur="1s"
                repeatCount="indefinite"
                type="rotate"
                attributeName="transform"
              ></animateTransform>
            </path>
            <path fill="#f8b26a" d="M50 50L20 50A30 30 0 0 1 80 50Z">
              <animateTransform
                keyTimes="0;0.5;1"
                values="0 50 50;-45 50 50;0 50 50"
                dur="1s"
                repeatCount="indefinite"
                type="rotate"
                attributeName="transform"
              ></animateTransform>
            </path>
          </g>
        </g>
      </svg>
    </div>
  );
}