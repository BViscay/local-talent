import {useEffect, useState} from "react";
import Match from "../components/Match/Match.jsx";
import {Button, ButtonGroup} from "@nextui-org/react";
import useMatches from "../hooks/useMatches.js";
import {useSelector} from "react-redux";
import {getMyMatches, getOwnMatches} from "../redux/sliceMatches.js";

export default function Matches() {
  const {handleMyMatches, handleOwnMatches} = useMatches();
  const ownMatches = useSelector(getOwnMatches);
  const myMatches = useSelector(getMyMatches);
  const [activeButton, setActiveButton] = useState("ofrecidos");

  useEffect(() => {
    const fetchData = async () => {
      await handleMyMatches();
      await handleOwnMatches();
    };
    fetchData();
    //eslint-disable-next-line
  }, []);

  let matchesToRender;
  if (activeButton === "ofrecidos") {
    matchesToRender = ownMatches;
  } else {
    matchesToRender = myMatches;
  }

   const isMyMatches = matchesToRender === myMatches;

  return (
    <div className='bg-[#f9f9f9] p-4 h-screen'>
      <div className='flex justify-between items-center w-full mb-2'>
        <div className='flex items-center'>
          <div className='w-1.5 rounded-lg h-6 bg-primary-600'></div>
          <h1 className='font-[900] text-2xl mx-2'>Matches</h1>
        </div>
        <ButtonGroup>
          <Button
            onClick={() => setActiveButton("ofrecidos")}
            variant='flat'
            className={`${
              activeButton === "ofrecidos"
                ? "bg-blue-500 text-white"
                : "bg-primary-100 text-black"
            } `}
          >
            Ofrecidos
          </Button>
          <Button
            onClick={() => setActiveButton("pedidos")}
            variant='flat'
            className={`${
              activeButton === "pedidos"
                ? "bg-blue-500 text-white"
                : "bg-primary-100 text-black"
            } `}
          >
            Pedidos
          </Button>
        </ButtonGroup>
      </div>
      <div className=''></div>
      <div className='flex flex-col rounded-lg w-full p-4 bg-white items-center justify-center'>
        {matchesToRender.map((match) => (
          <Match
            key={match.id}
            id={match.id}
            titulo={match.service.title}
            categoria={match.service.category.name}
            codigo={match.id.slice(0, 8)}
            estado={match.status}
            nombre={
              matchesToRender === myMatches
                ? match.service.user.firstname
                : match.user.firstname
            }
            apellido={
              matchesToRender === myMatches
                ? match.service.user.lastname
                : match.user.lastname
            }
            whatsapp={
              matchesToRender === myMatches
                ? match.service.user.whatsapp
                : match.user.whatsapp
            }
            avatar={match.avatar}
            isMyMatches={isMyMatches}
          />
        ))}
      </div>
    </div>
  );
}
