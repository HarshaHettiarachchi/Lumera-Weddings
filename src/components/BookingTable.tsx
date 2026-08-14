// Imports booking data from the local JSON file
import bookings from "../data/bookings.json";

// Imports required functions from TanStack Table
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";

// Defines the TypeScript structure for booking data
const columnHelper = createColumnHelper<{
  id: number;
  name: string;
  package: string;
  date: string;
}>();

// Defines the columns displayed in the booking table
const columns = [
  // Customer name column
  columnHelper.accessor("name", {
    header: "Customer",
  }),

  // Photography package column
  columnHelper.accessor("package", {
    header: "Package",
  }),

  // Booking date column
  columnHelper.accessor("date", {
    header: "Date",
  }),
];

export default function BookingTable() {
  // Creates the TanStack Table instance using booking data and columns
  const table = useReactTable({
    data: bookings,
    columns,

    // Generates the basic row structure for the table
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    // Main booking data table
    <table className="w-full border border-gray-300">
      {/* Table header */}
      <thead>
        {/* Loops through all header groups */}
        {table.getHeaderGroups().map((headerGroup) => (
          <tr key={headerGroup.id}>
            {/* Displays each table column header */}
            {headerGroup.headers.map((header) => (
              <th
                key={header.id}
                className="border p-2"
              >
                {/* Renders the header content */}
                {flexRender(
                  header.column.columnDef.header,
                  header.getContext()
                )}
              </th>
            ))}
          </tr>
        ))}
      </thead>

      {/* Table body */}
      <tbody>
        {/* Loops through all booking data rows */}
        {table.getRowModel().rows.map((row) => (
          <tr key={row.id}>
            {/* Displays the visible cells in each row */}
            {row.getVisibleCells().map((cell) => (
              <td
                key={cell.id}
                className="border p-2"
              >
                {/* Renders the cell content */}
                {flexRender(
                  cell.column.columnDef.cell,
                  cell.getContext()
                )}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}