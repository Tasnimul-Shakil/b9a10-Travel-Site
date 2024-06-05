import { Link, useLoaderData } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import Swal from "sweetalert2";
import { MdArrowOutward } from "react-icons/md";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Footer from "../Shared/Footer/Footer";
import nodata from "../../assets/List Is Empty.png";

const Profile = () => {
  const cards = useLoaderData();
  const { user } = useContext(AuthContext);
  const userEmail = user?.email || "";

  const userCards = cards.filter((card) => card.user_email === userEmail);

  const handleDelete = (id) => {
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
        fetch(
          `https://b9a10-travel-site-server.vercel.app/profile/${userEmail}`,
          {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ id }),
          }
        )
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
            <li>My Profile</li>
          </ul>
        </div>
        <div
          className="hero min-h-80 rounded-2xl"
          style={{
            backgroundImage: `url(https://i.ibb.co/yymPkWX/Frame-14093.png)`,
          }}
        ></div>
        <div className="flex gap-4 lg:px-12 px-4 pt-6 pb-10">
          <div className="avatar online">
            <div className="lg:w-24 w-16 rounded-full">
              <img src={user.photoURL} />
            </div>
          </div>
          <div>
            <h1 className="lg:text-2xl font-bold font-mono">
              {user.displayName}
            </h1>
            <p className="lg:text-xl text-xs">{user.email}</p>
          </div>
        </div>
        <div className="flex justify-between lg:px-10 px-4">
          <h1 className="lg:text-3xl text-xl font-head text-[#080808] font-bold">
            My Tour list: {userCards.length}
          </h1>
          <Link to="/addNewSpot">
            <button className="flex px-4 py-2 rounded-lg font-semibold lg:text-xl text-xs border-none text-white hover:text-[#080808] bg-[#080808] hover:bg-[#f0ca4e] group">
              Add New Data
              <MdArrowOutward className="lg:text-2xl text-xs transition-transform duration-500 ease-in-out transform group-hover:rotate-45" />
            </button>
          </Link>
        </div>
        {userCards.length === 0 ? (
          <div className="flex flex-col items-center justify-center mt-10">
            <img
              src={nodata}
              alt="No Data"
              className=" w-64"
            />
            <p className="text-xl text-gray-600 mt-4">No tours available. Add some tours to see them here!</p>
          </div>
        ) : (
          <div className="overflow-x-auto lg:px-10 px-4">
            <table className="table">
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
                {userCards.map((card, index) => (
                  <tr
                    key={card.id}
                    className={index % 2 === 0 ? "bg-base-200" : ""}
                  >
                    <th>{index + 1}</th>
                    <td>{card.tourist_spot_name}</td>
                    <td>{card.country_name}</td>
                    <td>
                      <Link to={`dataUpdate/${card._id}`}>
                        <button className="btn btn-accent">Edit</button>
                      </Link>
                    </td>
                    <td>
                      <button
                        className="btn btn-error"
                        onClick={() => handleDelete(card._id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Profile;
