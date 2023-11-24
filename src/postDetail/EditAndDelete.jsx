const EditAndDelete = ({ setDeleteBox }) => {
  return (
    <div className=" absolute flex flex-col items-center gap-3 bg-gray-500 py-2 px-5 rounded-md right-[-9rem] top-[3rem]">
      {/* if click delete alert box will display and aks confirm delete and cancel (auth user only can make this ) */}
      <button
        className="bg-gray-900 text-gray-200 w-[100px] rounded-sm py-1 active:scale-95 font-Poppins"
        onClick={() => setDeleteBox((prev) => !prev)}
      >
        Delete
      </button>
      <button className="bg-gray-900 text-gray-200 w-[100px] rounded-sm py-1 active:scale-95 font-Poppins">
        Edit
      </button>
    </div>
  );
};

export default EditAndDelete;
