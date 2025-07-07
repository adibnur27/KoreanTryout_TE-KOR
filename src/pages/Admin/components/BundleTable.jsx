import React from "react";

const BundleTable = ({ bundles }) => {
  return (
    <table className="min-w-full table-auto border">
      <thead>
        <tr className="bg-gray-100">
          <th className="p-2 border">Name</th>
          <th className="p-2 border">Description</th>
          <th className="p-2 border">Price</th>
        </tr>
      </thead>
      <tbody>
        {bundles.map(bundle => (
          <tr key={bundle.id}>
            <td className="p-2 border">{bundle.name}</td>
            <td className="p-2 border">{bundle.description}</td>
            <td className="p-2 border">Rp {bundle.price.toLocaleString()}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default BundleTable;
