import { ClimbingBoxLoader } from "react-spinners";

export default function Loader() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "50vh"
      }}
    >
      <ClimbingBoxLoader color="#22c55e" />
    </div>
  );
}
