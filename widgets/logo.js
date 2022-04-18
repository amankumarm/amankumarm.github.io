import React from 'react'

function Logo({className}) {
  return (
    <svg
      className={`${className===undefined ? "h-8 w-8": className}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 711 934"
    >
      <path
        d="M220.536 693.736l169.505-391.717 80.899 251.572-125.2 70.532-125.204 69.613zm348.786 176.74l12.23 39.882h129.054l-29.471-77.542L402.418.315l-63.754 148.109L.807 933.321l108.83-55.159 53.452-29.053 53.452-29.054L466.27 679.861a1382.273 1382.273 0 0139.487-19.481l63.565 210.096z"
        fill="white"
      ></path>
    </svg>
  )
}

export default Logo
