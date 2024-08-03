import { title } from "@/components/primitives";
import React from "react";
import {Accordion, AccordionItem} from "@nextui-org/react";



export default function ProyectoPage() {
   const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";


  return (
    <div>
      <h1 className={title()}>Proyectos</h1>
    </div>
  );
}

