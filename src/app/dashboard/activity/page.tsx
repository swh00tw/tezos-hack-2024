"use client";

import { useWallet } from "@/hooks/useWallet";
import { billRecords, UtilityRecord } from "@/mockdata/bills";
import { Table } from "@radix-ui/themes";

function RecordRow({ record }: { record: UtilityRecord }) {
  const dateString = new Date(record.date * 1000).toLocaleDateString();

  return (
    <Table.Row>
      <Table.RowHeaderCell>{dateString}</Table.RowHeaderCell>
      <Table.Cell>{record.utility}</Table.Cell>
      <Table.Cell>{record.consumption}</Table.Cell>
      <Table.Cell>{record.unit}</Table.Cell>
    </Table.Row>
  );
}

export default function Page() {
  const { userAddress } = useWallet();
  console.log(userAddress);

  return (
    <div className="flex flex-col w-full">
      <Table.Root>
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeaderCell>Date</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Utility</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Comsumption (kWh)</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Unit</Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {billRecords
            .filter((record) => record.address === userAddress)
            .map((record) => (
              <RecordRow key={record.date} record={record} />
            ))}
        </Table.Body>
      </Table.Root>
    </div>
  );
}
