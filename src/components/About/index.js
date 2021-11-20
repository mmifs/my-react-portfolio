import React from 'react';
import coverImage from '../../assets/cover/cover.webp';
function About() {
  return (
    <section className="my-5">
      <h1 id="about">Who am I?</h1>
      <img src={coverImage} className="my-2" style={{ width: "100%" }} alt="cover" />
      <div className="my-2">
        <p>
          I am a Business Administration graduate from the University of Guelph Humber who is now studying web design with The University of Toronto! I currently work as part of an IT Help Desk supporting internal employees to deal with front end technical issues. I am very interested in video games, music and comedy. I am excited to soon have a certificate from the U of T Web Dev Bootcamp program to move to a more technical role!
        </p>
      </div>
    </section>
  );
}

export default About;
