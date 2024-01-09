import { Badge, Button, Dropdown, Input, Space, Table, Tooltip } from "antd";
import { UserOutlined } from "@ant-design/icons";
import AmountCard from "./Common/AmountCard";
import SearchSVG from "../CustomSVG/SearchSVG";

export default function Payouts() {
  const columns = [
    {
      title: (
        <span className="font-medium text-sm text-[#4D4D4D]">Order ID</span>
      ),
      dataIndex: "orderId",
      key: "orderId",
      width: 220,
    },
    {
      title: <span className="font-medium text-sm text-[#4D4D4D]">Status</span>,
      dataIndex: "status",
      key: "status",
      width: 220,
    },
    {
      title: (
        <span className="font-medium text-sm text-[#4D4D4D]">
          Transaction ID
        </span>
      ),
      dataIndex: "transactionId",
      key: "transactionId",
      width: 220,
    },
    {
      title: (
        <span className="font-medium text-sm text-[#4D4D4D]">Refund date</span>
      ),
      key: "refundDate",
      dataIndex: "refundDate",
      width: 220,
    },
    {
      title: (
        <span className="font-medium text-sm text-[#4D4D4D]">Order amount</span>
      ),
      key: "orderAmount",
      dataIndex: "orderAmount",
      width: 220,
    },
  ];

  const data = [
    {
      orderId: (
        <span className="font-medium text-sm text-[#146EB4]">#281209</span>
      ),
      status: (
        <div className="flex items-center gap-1.5 ">
          <Badge color="#17B31B" />
          <p className="text-sm text-[#1A181E]">Successful</p>
        </div>
      ),
      transactionId: (
        <span className="font-normal text-sm text-[#4D4D4D]">131634495747</span>
      ),
      refundDate: (
        <span className="font-normal text-sm text-[#4D4D4D]">
          Today, 08:45 PM
        </span>
      ),
      orderAmount: (
        <span className="font-normal text-sm text-[#1A181E]">₹1,125.00 </span>
      ),
    },
    {
      orderId: (
        <span className="font-medium text-sm text-[#146EB4]">#281208</span>
      ),
      status: (
        <div className="flex items-center gap-1.5 ">
          <Badge color="#999999" />
          <p className="text-sm text-[#1A181E]">Processing</p>
        </div>
      ),
      transactionId: (
        <span className="font-normal text-sm text-[#4D4D4D]">131634495747</span>
      ),
      refundDate: (
        <span className="font-normal text-sm text-[#4D4D4D]">
          Yesterday, 3:00 PM{" "}
        </span>
      ),
      orderAmount: (
        <span className="font-normal text-sm text-[#1A181E]">₹1,125.00 </span>
      ),
    },
    {
      orderId: (
        <span className="font-medium text-sm text-[#146EB4]">#281207</span>
      ),
      status: (
        <div className="flex items-center gap-1.5 ">
          <Badge color="#17B31B" />
          <p className="text-sm text-[#1A181E]">Successful</p>
        </div>
      ),
      transactionId: (
        <span className="font-normal text-sm text-[#4D4D4D]">131634495747</span>
      ),
      refundDate: (
        <span className="font-normal text-sm text-[#4D4D4D]">
          12 Jul 2023, 03:00 PM{" "}
        </span>
      ),
      orderAmount: (
        <span className="font-normal text-sm text-[#1A181E]">₹1,125.00 </span>
      ),
    },
    {
      orderId: (
        <span className="font-medium text-sm text-[#146EB4]">#281206</span>
      ),
      status: (
        <div className="flex items-center gap-1.5 ">
          <Badge color="#17B31B" />
          <p className="text-sm text-[#1A181E]">Successful</p>
        </div>
      ),
      transactionId: (
        <span className="font-normal text-sm text-[#4D4D4D]">131634495747</span>
      ),
      refundDate: (
        <span className="font-normal text-sm text-[#4D4D4D]">
          12 Jul 2023, 03:00 PM{" "}
        </span>
      ),
      orderAmount: (
        <span className="font-normal text-sm text-[#1A181E]">₹1,125.00 </span>
      ),
    },
    {
      orderId: (
        <span className="font-medium text-sm text-[#146EB4]">#281205</span>
      ),
      status: (
        <div className="flex items-center gap-1.5 ">
          <Badge color="#17B31B" />
          <p className="text-sm text-[#1A181E]">Successful</p>
        </div>
      ),
      transactionId: (
        <span className="font-normal text-sm text-[#4D4D4D]">131634495747</span>
      ),
      refundDate: (
        <span className="font-normal text-sm text-[#4D4D4D]">
          12 Jul 2023, 03:00 PM{" "}
        </span>
      ),
      orderAmount: (
        <span className="font-normal text-sm text-[#1A181E]">₹1,125.00 </span>
      ),
    },
    {
      orderId: (
        <span className="font-medium text-sm text-[#146EB4]">#281204</span>
      ),
      status: (
        <div className="flex items-center gap-1.5 ">
          <Badge color="#17B31B" />
          <p className="text-sm text-[#1A181E]">Successful</p>
        </div>
      ),
      transactionId: (
        <span className="font-normal text-sm text-[#4D4D4D]">131634495747</span>
      ),
      refundDate: (
        <span className="font-normal text-sm text-[#4D4D4D]">
          12 Jul 2023, 03:00 PM
        </span>
      ),
      orderAmount: (
        <span className="font-normal text-sm text-[#1A181E]">₹1,125.00 </span>
      ),
    },
  ];

  return (
    <div>
      <div className="flex justify-between mb-6">
        <p className="text-xl font-medium">Overview</p>
        <Dropdown
          menu={{
            items: [
              {
                label: "January",
                key: "1",
              },
              {
                label: "February",
                key: "2",
              },
            ],
          }}
        >
          <Button className="flex items-center gap-1 text-[#4D4D4D]">
            This month
            <img src="./arrow-down.svg" alt="Arrow" />
          </Button>
        </Dropdown>
      </div>

      {/* cards */}
      <div className="mb-8 flex gap-5 items-center justify-between">
        <AmountCard
          active={true}
          title="Next Payout"
          orders="23"
          amount="₹2,312.23"
          date="Today, 04:00PM"
        />
        <AmountCard
          title="Next Payout"
          orders="23"
          amount="₹2,312.23"
          date="Today, 04:00PM"
        />
        <AmountCard
          title="Next Payout"
          orders="23"
          amount="₹2,312.23"
          date="Today, 04:00PM"
        />
      </div>

      {/* transaction head */}
      <div className="flex gap-6 flex-col mb-6">
        <p className="text-[#1A181E] text-xl font-medium">
          Transactions | This Month
        </p>
        <div className="flex gap-3">
          <p
            className="font-medium text-sm text-[#808080]"
            style={{
              borderRadius: "40px",
              background: "#E6E6E6",
              padding: "6px 16px",
            }}
          >
            Payouts (22)
          </p>
          <p
            className="font-mediu text-sm text-white"
            style={{
              borderRadius: "40px",
              background: "#146EB4",
              padding: "6px 16px",
            }}
          >
            Refunds (6)
          </p>
        </div>
      </div>

      {/* transaction table */}

      <div className="p-3 pb-2 flex flex-col gap-3">
        <div className="flex justify-between">
          <Input
            className="w-80"
            placeholder="Order ID or transaction ID"
            prefix={<SearchSVG width={14} height={14} fill="#999999" />}
          />
          <div className="flex gap-4 items-center">
            <div
              className="flex gap-1.5 items-center text-[#4D4D4D]"
              style={{
                borderRadius: "4px",
                border: "1px solid #D9D9D9",
                background: "#FFF",
                padding: "6px 12px",
              }}
            >
              <p>Sort</p>
              <img src="./sort.svg"></img>
            </div>
            <div
              style={{
                borderRadius: "4px",
                border: "1px solid #D9D9D9",
                padding: "8px",
              }}
            >
              <img src="./download.svg"></img>
            </div>
          </div>
        </div>
        <Table columns={columns} dataSource={data} pagination={false} />
      </div>
    </div>
  );
}
