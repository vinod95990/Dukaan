import { Input, Tooltip } from "antd";
import { SearchOutlined } from "@ant-design/icons";

export default function Header() {
  return (
    <div
      className="px-8 py-3 flex gap-4 items-center"
      style={{
        display: "grid",
        gridTemplateColumns: "0.6fr 1fr 0.4fr",
      }}
    >
      <div className="w-full flex items-center gap-4">
        <p className="text-xl text-[#1A181E] font-medium">Payouts</p>
        <div className="flex gap-1.5 items-center w-full">
          <Tooltip title="It works just fine :)" color="#1E2640">
            <img src="./tooltip-icon.svg"></img>
          </Tooltip>

          <p className="text-xs text-[#4D4D4D]">How it works</p>
        </div>
      </div>
      <div className="flex items-center justify-start">
        <Input
          placeholder="Search features, tutorials, etc."
          className="w-full bg-[#F2F2F2]"
          style={{
            width: "70%",
          }}
          bordered={false}
          prefix={<img src="/search-icon.svg" alt="Search" />}
        />
      </div>
      <div className="w-full flex items-center justify-end gap-3">
        <img src="./Menu.png" width={30} height={30}></img>

        <img src="./header-dropdown.png" width={30} height={30}></img>
      </div>
    </div>
  );
}
