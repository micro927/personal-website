import Frame from '../frame';

function AboutMe({ message }: { message: string }) {
  return (
    <section id="about-me">
      <Frame>
        <div>
          <p className="text-justify indent-8">{message}</p>
        </div>
      </Frame>
    </section>
  );
}

export default AboutMe;
