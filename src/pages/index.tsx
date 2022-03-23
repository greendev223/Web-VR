import React, { useState, useEffect, Suspense, useRef } from "react"
import { Physics } from "@react-three/cannon"
import { Stars, Sky } from "@react-three/drei"
import { createMedia } from "@artsy/fresnel"
import Media from "react-media"

import Ground from "@/components/canvas/Ground"
import Building from "@/components/canvas/Building"
import Art from "@/components/canvas/Art"
import Furniture from "@/components/canvas/Furniture"
import PlayerDesktop from "@/components/canvas/PlayerDesktop";
import PlayerMobile from "@/components/canvas/PlayerMobile";
import Lights from "@/components/canvas/Lights";
import Camera from "@/components/canvas/Camera";
import Moon from "@/components/canvas/Moon";

import Loading from "@/components/dom/Loading";
import Modal from "@/components/dom/Modal";
import ModalArtworkDetails from "@/components/dom/ModalArtworkDetails";
import InstructionsDesktop from "@/components/dom/InstructionsDesktop";
import InstructionsMobile from "@/components/dom/InstructionsMobile";

import useStore from "@/helpers/store";

// dom components goes here
const DOM = ({ ready, focusedArtwork, isModalOpen, selectArtwork }) => {
  const { MediaContextProvider, Media } = createMedia({
    breakpoints: {
      sm: 0,
      md: 991,
      lg: 1024,
      xl: 1192,
    },
  });

  return (
    <>
      {!isModalOpen && (
        <MediaContextProvider>
          <Media at="sm">
            <InstructionsMobile ready={ready} />
          </Media>
          <Media greaterThan="sm">
            <InstructionsDesktop ready={ready} />
          </Media>
        </MediaContextProvider>
      )}
      {Object.keys(focusedArtwork).length > 0 && (
        <div className="info-container">
          <div className="info-topbar">{focusedArtwork.title}</div>
          <div className="info-content">
            <button className="info-action">Press E for + details</button>
          </div>
        </div>
      )}
      <Modal>
        <ModalArtworkDetails data={selectArtwork} />
      </Modal>
      <Loading />
      <div id="mobileInterface">
        <div id="mobileControllerWrapper" />
      </div>
    </>
  );
};

// canvas components goes here
const R3F = ({ night, performance }) => {
  return (
    <>
      <Camera fov={80} position={[0,0,-20]}/>
      {night ? (
        <>
          <Stars />
          <Suspense fallback={null}>
            <Moon />
          </Suspense>
          <fog attach='fog' args={['#272730', 30, 250]} />
        </>
      ) : (
        <>
          <Sky sunPosition={[110, 170, -250]} />
          <fog attach="fog" args={["#f0f4f5", 30, 250]} />
        </>
      )}
      <Lights night={night} performance={performance} />
      <Physics gravity={[0, -30, 0]}>
        <Suspense fallback={null}>
          {/* <Ground /> */}
          <Building />
          {/* <Art /> */}
          {/* <Furniture /> */}
        </Suspense>
        <Media queries={{ small: { maxWidth: 991 } }}>
          {(matches) => (matches.small ? <PlayerMobile /> : <PlayerDesktop />)}
        </Media>
      </Physics>
    </>
  );
};

const Page = ({ artworks }) => {
  const [night, setNight] = useState(true);
  const [performance, setPerformance] = useState(true);
  const focusedArtwork = useStore((s) => s.focusedArtwork);
  const uiLock = useStore((s) => s.uiLocked);
  const modalState = useStore((s) => s.modal);
  const selectArtwork = useStore((s) => s.selectArtwork);
  const focusedElemRef = useRef(focusedArtwork);

  const handleLockchange = (e) => {
    if (document.pointerLockElement === null) {
      useStore.setState({ uiLocked: true });
    } else {
      useStore.setState({ uiLocked: false });
    }
  };

  useEffect(() => {
    document.addEventListener("pointerlockchange", handleLockchange);

    return () => {
      document.removeEventListener("pointerlockchange", handleLockchange);
    };
  });

  useEffect(() => {
    const handleKeyDown = (e) => {
      switch (e.code) {
        case "KeyN":
          setNight(!night);
          return;
        case "KeyP":
          setPerformance(!performance);
          return;
        case "KeyE": {
          if (Object.keys(focusedElemRef.current).length > 0) {
            useStore.setState({ selectArtwork: focusedElemRef.current });
            useStore.setState({ uiLocked: true });
            useStore.setState({ modal: true });
          }
          return;
        }
        default:
          return;
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [night, performance]);

  useEffect(() => {
    useStore.setState({ artworks });
  }, [artworks]);

  useEffect(() => {
    focusedElemRef.current = focusedArtwork;
  }, [focusedArtwork]);

  return (
    <>
      <DOM
        ready={!uiLock}
        isModalOpen={modalState}
        focusedArtwork={focusedArtwork}
        selectArtwork={selectArtwork}
      />
      {/* @ts-ignore */}
      <R3F r3f night={night} performance={performance} />
    </>
  );
};

export default Page;

export async function getStaticProps() {
  return {
    props: {},
  };
}
