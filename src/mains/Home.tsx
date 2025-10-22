import Image from "../components/Image";


export default function Home() {
  return (
    <main>
      <title>Home | Jude Hosmer's Resume</title>
        <h2>Home</h2>
          <p>Welcome to my online resume. Click any section to start exploring!</p>
            <br />
            <hr />
            <br />
        <h2>Introduction</h2>
          <p>
            My name is Jude Hosmer and I am a junior at Boston University studying computer science and
            economics. I am currently exploring internship opportunities for software engineering and
            full stack web design.
          </p>
            <br/>
      <Image src="/passportphoto copy.JPG" alt="Jude Hosmer Portrait" />
            <br/>
            <br/>
    </main>
  );
}