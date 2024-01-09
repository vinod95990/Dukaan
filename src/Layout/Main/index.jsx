import Navbar from "../../Components/Navbar";

export default function Layout({ children }) {
  return (
    <div className="bg-white grid grid-cols-[204px,auto]">
      <Navbar />
      <div>{children}</div>
    </div>
  );
}
