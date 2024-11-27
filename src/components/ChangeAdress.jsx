import React, { useState } from "react";

const ChangeAdress = ({ setAdress, setIsModalOpen }) => {
  const [newAdress, setNewAdress] = useState("");
  const onClose = () => {
    setAdress(newAdress);
    setIsModalOpen(false);
  };
  return (
    <div>
      <input
        type="text"
        placeholder="Enter new adress"
        className="border p-2 w-full mb-4"
        onChange={(e) => setNewAdress(e.target.value)}
      />
      <div className="flex justify-end">
        <button
          className="bg-gray-500 text-white py-2 px-4 rounded mr-2"
          onClick={() => setIsModalOpen(false)}
        >
          Cancel
        </button>
        <button
          onClick={onClose}
          className="bg-blue-500 text-white py-2 px-4 rounded"
        >
          Save Adress
        </button>
      </div>
    </div>
  );
};

export default ChangeAdress;
