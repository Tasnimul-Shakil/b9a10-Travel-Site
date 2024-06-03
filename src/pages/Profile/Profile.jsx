import { Link, useLoaderData } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import Swal from "sweetalert2";
import { MdArrowOutward } from "react-icons/md";

const Profile = () => {
  const cards = useLoaderData();

  const handleDelete = (id) => {
    // Here, you would typically call an API to delete the item
    console.log("Deleting item with id:", id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/spot/${id}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({}),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
              window.location.reload();
            }
          });
      }
    });
  };
  return (
    <div className="container mx-auto">
      <Navbar />
      <div className="container mx-auto">
        <div className="text-sm breadcrumbs">
          <ul>
            <li>
              <Link to="/">
                <span className="flex items-center">Home</span>
              </Link>
            </li>
            <li>About Us</li>
          </ul>
        </div>
        <div className="flex justify-between">
          <h1 className="lg:text-4xl text-3xl font-head text-[#080808] font-bold">
            DataList
          </h1>
          <Link to="/addNewSpot">
            <button className="btn text-xl border-none text-white hover:text-[#080808] bg-[#080808] hover:bg-[#FFB646] group">
              Add New Data
              <MdArrowOutward className=" text-2xl transition-transform duration-500 ease-in-out transform group-hover:rotate-45" />
            </button>
          </Link>
        </div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>Number</th>
                <th>Title</th>
                <th>Project Link</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {cards.map((cards, index) => (
                <tr
                  key={cards.id}
                  className={index % 2 === 0 ? "bg-base-200" : ""}
                >
                  <th>{index + 1}</th>
                  <td>{cards.tourist_spot_name}</td>
                  <td>{cards.country_name}</td>
                  <td>
                    <Link to={`dataUpdate/${cards._id}`}>
                      <button className="btn btn-accent">Edit</button>
                    </Link>
                  </td>
                  <td>
                    <button
                      className="btn btn-error"
                      onClick={() => handleDelete(cards._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Profile;
