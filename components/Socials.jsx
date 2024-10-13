import Link from "next/link";

import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa"

const socials = [
    {icon: <FaGithub />, path: "https://github.com/PhuNguyen1404"},
    {icon: <FaLinkedin />, path: "https://www.linkedin.com/in/phú-nguyễn-a57234329"},
    {icon: <FaFacebook />, path: "https://www.facebook.com/nguyenngocphu.14203/"},
]


const Socials = ({containerStyles, iconStyles}) => {
  return (
    <div className={containerStyles}>
        {socials.map((item, index) => {
            return <Link key={index} href = {item.path} className={iconStyles}>{item.icon}</Link>
        })}
    </div>
  )
}

export default Socials