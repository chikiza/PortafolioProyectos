"use client"
import { title } from "@/components/primitives";
import React from "react";
import {Accordion, AccordionItem} from "@nextui-org/react";


export default function ProyectoPage() {
  const defaultContent1 =
    "Este proyecto está enfocado en construir una página para un negocio. ";
    const defaultContent2 = "Este proyecto consiste en una aplicación que involucre las 4 operaciones CRUD.";
    const defaultContent3 = "Este proyecto consiste en una aplicación que consuma una API. y la incorporacion grafica con Chart.js";
  return (
    <div>
      <h1 className={title()}>Proyectos</h1>
      <Accordion>
      <AccordionItem key="1" aria-label="Accordion 1" subtitle="Más detalles" title="Proyecto 1 Landing de Venta">
        {defaultContent1}
      </AccordionItem>

      <AccordionItem key="2" aria-label="Accordion 2"
      subtitle="Más detalles" 
        title="Proyecto 2 Aplicación CRUD"
      >{defaultContent2}

      </AccordionItem>
      <AccordionItem key="3" aria-label="Accordion 3" subtitle="Más detalles" title="Proyecto 3 Tablero de Datos">
        {defaultContent3}
      </AccordionItem>
    </Accordion>
    </div>



  );
}

