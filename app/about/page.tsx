"use client"
import { title } from "@/components/primitives";
import React from "react";
import {User} from "@nextui-org/react";

export default function AboutPage() {
  return (
    <>
    <div>
      <h1 className={title()}>Sobre Chikiza</h1>
    </div>

    <User   
    name="Andrea (Chikiza) Gutiérrez Matus"
    description="Diseñadora & Fullstack Dev."
    avatarProps={{
      src: "@/public/IMG_9304.png"
    }}
  /></>
  );
}
