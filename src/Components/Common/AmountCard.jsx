import { Tooltip } from "antd";
import ChevronLeft from "../../CustomSVG/ChevronLeft";
import TooltipSVG from "../../CustomSVG/TooltipSVG";
export default function AmountCard(props) {
  const { active, title, orders, amount, date } = props;

  return (
    <div
      style={{
        background: active ? "#146eb4" : "#FFF",
        boxShadow: "0px 2px 6px 0px rgba(26, 24, 30, 0.04)",
        borderRadius: "8px",
        width: "331px",
      }}
    >
      <div
        style={{
          padding: "20px",
        }}
      >
        <div className="flex items-center gap-2">
          <p
            className={`${active ? "text-white" : "text-[#4D4D4D]"} text-base`}
          >
            {title}
          </p>
          <Tooltip title="It works just fine :)" color="#1E2640">
            <TooltipSVG
              fill={active ? "white" : "#4D4D4D"}
              width={16}
              height={16}
            />
          </Tooltip>
        </div>
        <div className="flex items-center justify-between">
          <p
            className={`${
              active ? "text-white" : "text-[#1A181E]"
            } font-medium`}
            style={{
              fontSize: "32px",
            }}
          >
            {amount}
          </p>
          <div className="flex items-center">
            <p
              className={` ${
                active ? "text-white" : "text-[#146EB4]"
              } underline font-medium text-base`}
            >
              {orders} orders
            </p>
            <ChevronLeft fill={active ? "white" : "#146EB4"} />
          </div>
        </div>
      </div>
      {active && (
        <div className="rounded flex items-center justify-between px-6 py-2 bg-[#0E4F82] text-white">
          <p className="font-normal text-sm">Next payout date:</p>
          <p className="font-medium text-sm">{date}</p>
        </div>
      )}
    </div>
  );
}
