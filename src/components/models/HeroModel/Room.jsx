import { useGLTF } from "@react-three/drei";

const MODEL_PATH =
`${import.meta.env.BASE_URL}models/optimized-room.glb`;

export function Room(props) {
    const { scene } = useGLTF(MODEL_PATH);

    return (
        <primitive
            object={scene}
            {...props}
        />
    );
}

useGLTF.preload(MODEL_PATH);