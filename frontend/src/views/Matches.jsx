"use client"

import Match from "../components/Match/Match.jsx"
import {Button,ButtonGroup} from "@nextui-org/react";



export default function Matches() {

  const mockMatches = [
  {
    id: 101,
    categoria: 'Hogar',
    subcategoria: 'Reparacion',
    codigo: 'HOG-101',
    estado: 'Confirmado',
    nombre: 'Juan Pérez',
    avatar: 'https://example.com/avatar1.jpg'
  },
  {
    id: 102,
    categoria: 'Belleza',
    subcategoria: 'Corte de Pelo',
    codigo: 'BEL-102',
    estado: 'Pendiente',
    nombre: 'Ana Martínez',
    avatar: 'https://example.com/avatar2.jpg'
  },
  {
    id: 103,
    categoria: 'Electricidad',
    subcategoria: 'Instalacion',
    codigo: 'ELE-103',
    estado: 'Confirmado',
    nombre: 'Luis Rodríguez',
    avatar: 'https://example.com/avatar3.jpg'
  },
  {
    id: 104,
    categoria: 'Fletes',
    subcategoria: 'Transporte',
    codigo: 'FLE-104',
    estado: 'Pendiente',
    nombre: 'María García',
    avatar: 'https://example.com/avatar4.jpg'
  },
  {
    id: 105,
    categoria: 'Limpieza',
    subcategoria: 'Servicio Doméstico',
    codigo: 'LIM-105',
    estado: 'Confirmado',
    nombre: 'Carolina López',
    avatar: 'https://example.com/avatar5.jpg'
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
            categoria={n.categoria}
            subcategoria={n.subcategoria}
            codigo={n.codigo}
            estado={n.estado}
            nombre={n.nombre}
            avatar={n.avatar}
          />  
        )}
      </div>
    </div>
    );
}
