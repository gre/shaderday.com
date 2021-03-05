import { useState, useEffect } from "react";
import { Surface } from "gl-react-dom";

const Refresh = ({ Day }) => {
  const [time, setTime] = useState(0);
  useEffect(() => {
    let startT;
    let h;
    function loop(t) {
      h = requestAnimationFrame(loop);
      if (!startT) startT = t;
      setTime((t - startT) / 1000);
    }
    h = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(loop);
  }, []);
  return <Day.Shader time={time} />;
};

export function Visual({ Day }) {
  return (
    <Surface width={400} height={400}>
      <Refresh key={Day.n} Day={Day} />
    </Surface>
  );
}
