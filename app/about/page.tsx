"use client"
import { title } from "@/components/primitives";
import React from "react";
import {User} from "@nextui-org/react";

export default function AboutPage() {
  return (
    <>
    <div>
      <h1 className={title()}>Hola soy Chikiza!</h1>
    </div>

    <User style={{ marginTop: '20px' }}
    name="Andrea (Chikiza) Gutiérrez Matus"
    description="Diseñadora & Fullstack Dev."
    avatarProps={{
      src: "/IMG_9304.png"
    }}
  />    <div>
  <p>Soy Diseñadora Independiente con más de ocho años de trayectoria, especializada actualmente en soluciones de almacenamiento digital en IngeniOdigital. Mi carrera se ha destacado por la capacidad de llevar a cabo proyectos integrales que abarcan desde la decoración y remodelación hasta el diseño gráfico y editorial. Al frente de mi Estudio Creativo ChikizaLAB, fusiono mi pasión por los oficios y la creatividad con la tecnologia, siempre con el objetivo de superar desafíos y aportar valor al entorno de trabajo. La colaboración y el aprendizaje continuo son fundamentales en mi enfoque profesional, permitiéndome entregar soluciones integrales y de vanguardia que satisfacen las necesidades de nuestros clientes.</p>
</div>
  </>
  );
}
