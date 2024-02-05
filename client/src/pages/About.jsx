const About = () => {
  const test = {
    name: "john",
    age: 23,
  };
  return (
    <div>
      {Object.entries(test).map(([key, value]) => (
        <div>
          <p>
            {key}:{value}
          </p>
        </div>
      ))}
    </div>
  );
};

export default About;
