import { useState, useEffect } from "react";
import * as THREE from "three";
import { useTransition, a } from "react-spring";

const Loading = () => {
  const [finished, set] = useState(false);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    THREE.DefaultLoadingManager.onLoad = () => set(true);
    THREE.DefaultLoadingManager.onProgress = (url, itemsLoaded, itemsTotal) =>
      setWidth((itemsLoaded / itemsTotal) * 200);
  }, []);

  const transitions = useTransition(finished, {
    from: { opacity: 1, width: 0 },
    leave: { opacity: 0 },
    update: { width },
  });

  return transitions(
    (props, item, key) =>
      !finished && (
        <a.div className="loading" style={{ opacity: props.opacity }}>
          <h1 className="welcome">Loading</h1>
          <div className="loading-bar-container">
            <a.div className="loading-bar" style={{ width: props.width }} />
          </div>
        </a.div>
      )
  );
};

export default Loading;
