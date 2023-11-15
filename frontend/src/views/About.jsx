import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Tooltip,
} from "@material-tailwind/react";
import "@fortawesome/fontawesome-free/css/all.css";
import { useState } from "react";

export default function About() {
  const nosotros = [
    {
      name: "Pablo",
      lastName: "Palazzetti",
      img: "nada",
      github: "https://github.com/Pablo2800",
      gmail: "mailto:pablopalazzetti@gmail.com",
      linkedin: "https://www.linkedin.com/in/pablo-palazzetti",
    },
    {
      name: "Bruno",
      lastName: "Biscay",
      img: "https://res.cloudinary.com/dnhjrtihu/image/upload/v1699618529/lkc9sjpcggcemh2hs1za.jpg",
      github: "",
      gmail: "",
      linkedin: "",
    },
    {
      name: "Andres",
      lastName: "Frei",
      img: "nada",
      github: "",
      gmail: "",
      linkedin: "",
    },
    {
      name: "Angel",
      lastName: "Suarez",
      img: "nada",
      github: "",
      gmail: "",
      linkedin: "",
    },
    {
      name: "Gonzalo",
      lastName: "Arana",
      img: "https://res.cloudinary.com/djpfzdy2c/image/upload/v1699982405/gonzalo_sw3nid.png",
      github: "https://github.com/aranagonzalo",
      gmail: "mailto:gonzaloaranam@gmail.com",
      linkedin: "https://www.linkedin.com/in/aranagonzalo",
    },
    {
      name: "Angel",
      lastName: "Tirado",
      img: "nada",
      github: "",
      gmail: "",
      linkedin: "",
    },
    {
      name: "Diego Perez",
      lastName: "",
      img: "https://web.whatsapp.com/51994620-4060-4593-b290-0d9bae22c182",
      github: "diaperezro",
      gmail: "diaperezro@unal.edu.co",
      linkedin: "",
    },
    {
      name: "Walter",
      lastName: "",
      img: "nada",
      github: "",
      gmail: "",
      linkedin: "",
    },
  ];

  const [copiedEmail, setCopiedEmail] = useState(null);

  const copyToClipboard = (email) => {
    navigator.clipboard.writeText(email);
    setCopiedEmail(email);

    setTimeout(() => {
      setCopiedEmail(null);
    }, 5000);
  };
  return (
    <div className="flex w-full items-center justify-center flex-col">
      {nosotros.map((user, i) => (
        <Card className="w-64 bg-slate-200 my-4" key={i}>
          <CardHeader floated={false} className="h-56 rounded-full">
            <img
              className="w-full h-full object-cover"
              src={user.img}
              alt="profile-picture"
            />
          </CardHeader>
          <CardBody className="text-center">
            <Typography variant="h4" color="blue-gray" className="mb-2">
              {user.name} {user.lastName}
            </Typography>
            <Typography color="blue-gray" className="font-medium" textGradient>
              CEO / Co-Founder
            </Typography>
          </CardBody>
          <CardFooter className="flex justify-center gap-7 pt-2">
            <Tooltip content="Github">
              <Typography
                as="a"
                href={user.github}
                variant="lead"
                color="blue"
                textGradient
              >
                <i className="fab fa-github" />
              </Typography>
            </Tooltip>
            <Tooltip content={user.gmail}>
              <Typography
                as="a"
                onClick={() => copyToClipboard(user.gmail)}
                variant="lead"
                color="light-blue"
                textGradient
              >
                <i className="fab fa-google" />
              </Typography>
            </Tooltip>
            <Tooltip content="Linkedin">
              <Typography
                as="a"
                href={user.linkedin}
                variant="lead"
                color="purple"
                textGradient
              >
                <i className="fab fa-linkedin" />
              </Typography>
            </Tooltip>
          </CardFooter>
          {copiedEmail === user.gmail && (
            <Typography color="black" className="text-xs text-center mb-2">
              Copiado al portapapeles
            </Typography>
          )}
        </Card>
      ))}
    </div>
  );
}
