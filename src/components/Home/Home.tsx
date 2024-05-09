import { Nav } from "./Nav";
import Image from "next/image";
import { NoteSection } from './NoteSection';
import { Header } from './Header';

export default function HomePage() {
  return (
    <>
      <Nav name="Laura"/>
      <Header/>
      <NoteSection/>
    </>
  );
}
