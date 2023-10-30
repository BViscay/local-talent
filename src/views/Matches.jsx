"use client"

import Match from "../components/Match/Match.jsx"
import {Button,ButtonGroup} from "@nextui-org/react";



export default function Matches() {

  const mockMatches = [
    {
      id: 101,
      name: 'María García',
      age: 28,
      description: 'Soy una persona extrovertida que disfruta de la música y los viajes.',
      matchPercentage: 85,
    },
    {
      id: 102,
      name: 'Carlos Rodríguez',
      age: 31,
      description: 'Apasionado por la tecnología y los deportes al aire libre.',
      matchPercentage: 92,
    },
    {
      id: 103,
      name: 'Laura Martínez',
      age: 25,
      description: 'Amante de los libros y los animales. Busco a alguien con quien compartir largas conversaciones.',
      matchPercentage: 78,
    },
    {
      id: 104,
      name: 'Javier Fernández',
      age: 29,
      description: 'Me encanta cocinar y experimentar con diferentes tipos de cocina.',
      matchPercentage: 80,
    },
    {
      id: 105,
      name: 'Ana López',
      age: 27,
      description: 'Aventurera y amante de la naturaleza. Siempre en busca de nuevas experiencias.',
      matchPercentage: 88,
    },
  ];

  return (
    <div className="bg-[#f9f9f9] p-4 h-screen">
      <div className="flex items-center w-full mb-2">
        <div className="bg-[#266DD3] h-5 w-1 rounded"></div>
        <h1 className="font-[900] text-xl mx-2">Matches</h1>
      </div>
      <div className="flex rounded-lg w-full p-4 bg-white items-center justify-start gap-2">
        <ButtonGroup>
          <Button variant="flat">
            Ofrecidos
          </Button>
          <Button variant="flat">
            Pedidos
          </Button>
        </ButtonGroup>
      </div>
      <div className="flex flex-col rounded-lg w-full p-4 bg-white items-center justify-center">
        {mockMatches.map(n => 
          <Match 
            key={n.id}
            title={n.title}
            code={n.code}
            content={n.content}
            timestamp={n.timestamp}
            read={n.read}
          />  
        )}
      </div>
    </div>
    );
}
