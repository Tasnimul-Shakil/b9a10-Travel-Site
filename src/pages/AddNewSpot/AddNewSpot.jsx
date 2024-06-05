import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { useContext } from "react";
import Navbar from "../Shared/Navbar/Navbar";

const AddNewSpot = () => {
  const { user } = useContext(AuthContext);
  const userName = user?.displayName || "";
  const userEmail = user?.email || "";
  const userPhoto = user?.photoURL || "";
  console.log(user);
  const handleAddWork = (event) => {
    event.preventDefault();
    const form = event.target;
    const tourist_spot_name = form.tourist_spot_name.value;
    const country_name = form.country_name.value;
    const user_name = form.user_name.value;
    const user_email = form.user_email.value;
    const location = form.location.value;
    const countryPhoto = form.countryPhoto.value;
    const category = form.category.value;
    const average_cost = form.average_cost.value;
    const user_profession = form.user_profession.value;
    const seasonality = form.seasonality.value;
    const total_visitors_per_year = form.total_visitors_per_year.value;
    const description = form.description.value;
    const userPhoto = form.userPhoto.value;
    const coverPhoto = form.coverPhoto.value;
    const cardPhoto = form.cardPhoto.value;
    const photo1 = form.photo1.value;
    const photo2 = form.photo2.value;
    const photo3 = form.photo3.value;
    const photo4 = form.photo4.value;

    const newSpot = {
      tourist_spot_name,
      country_name,
      user_name,
      user_email,
      countryPhoto,
      location,
      category,
      average_cost,
      user_profession,
      seasonality,
      total_visitors_per_year,
      description,
      userPhoto,
      coverPhoto,
      photo1,
      photo2,
      photo3,
      photo4,
      cardPhoto,
    };
    console.log("all info:", newSpot);

    // send data to server
    fetch("https://b9a10-travel-site-server.vercel.app/spot", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newSpot),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            tourist_spot_name: "Success",
            text: "User added a coffee info successfully",
            icon: "success",
            confirmButtonColor: "#09B161",
            confirmButtonText: "Add another coffee info",
          });
          form.reset();
        }
      });
  };

  return (
    <div className="container mx-auto">
      <Navbar />
      <div className="">
        <div className="text-sm px-4 breadcrumbs">
          <ul>
            <li>
              <Link to="/">
                <a className="flex items-center"> Home</a>
              </Link>
            </li>
            <li>
              <Link to="/profile">
                <a className="flex items-center"> Data List</a>
              </Link>
            </li>
            <li>My Profile</li>
          </ul>
        </div>
        <div className="mx-auto bg-[#F4F3F0] mt-4 lg:p-16 p-4 rounded-2xl">
          <h1 className="lg:text-3xl text-xl text-center font-bold text-gray-900">
            Add New Tour Info
          </h1>
          <form className="py-6" onSubmit={handleAddWork}>
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
              <div>
                <label className="block text-sm font-semibold leading-6 text-gray-900">
                  User Name
                </label>
                <div className="mt-2.5">
                  <input
                    disabled
                    type="text"
                    defaultValue={userName}
                    name="user_name"
                    placeholder="Enter tourist spot name"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold leading-6 text-gray-900">
                  User Email
                </label>
                <div className="mt-2.5">
                  <input
                    disabled
                    type="text"
                    defaultValue={userEmail}
                    name="user_email"
                    placeholder="Enter Email name"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold leading-6 text-gray-900">
                  User Profession
                </label>
                <div className="mt-2.5">
                  <input
                    required
                    type="text"
                    name="user_profession"
                    placeholder="Enter Email name"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold leading-6 text-gray-900">
                  Tourist Spot Name
                </label>
                <div className="mt-2.5">
                  <input
                    type="text"
                    name="tourist_spot_name"
                    placeholder="Enter tourist spot name"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold leading-6 text-gray-900">
                  Tour Time
                </label>
                <div className="mt-2.5">
                  <input
                    type="text"
                    name="category"
                    placeholder="Enter Country Name"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold leading-6 text-gray-900">
                  Location Category
                </label>
                <div className="mt-2.5">
                  <select
                    name="country_name"
                    defaultValue="Select A Category"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  >
                    <option disabled>Select A Category</option>
                    <option value="Bangladesh">Bangladesh</option>
                    <option value="Thailand">Thailand</option>
                    <option value="Indonesia">Indonesia</option>
                    <option value="Malaysia">Malaysia</option>
                    <option value="Vietnam">Vietnam</option>
                    <option value="Cambodia">Cambodia</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold leading-6 text-gray-900">
                  Location
                </label>
                <div className="mt-2.5">
                  <input
                    type="text"
                    name="location"
                    placeholder="Enter Location Name"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold leading-6 text-gray-900">
                  Project Description
                </label>
                <div className="mt-2.5">
                  <textarea
                    type="text"
                    name="description"
                    placeholder="Enter Description Name"
                    className="textarea textarea-bordered w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold leading-6 text-gray-900">
                  Average Cost
                </label>
                <div className="mt-2.5">
                  <input
                    type="text"
                    name="average_cost"
                    placeholder="Enter average cost Review"
                    className=" w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold leading-6 text-gray-900">
                  Seasonality
                </label>
                <div className="mt-2.5">
                  <input
                    type="text"
                    name="seasonality"
                    placeholder="Enter Seasonality"
                    className=" w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold leading-6 text-gray-900">
                  Total Visitors Per Year
                </label>
                <div className="mt-2.5">
                  <input
                    type="text"
                    name="total_visitors_per_year"
                    placeholder="Enter a Number of Visitors per Year"
                    className=" w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="company"
                  className="block text-sm font-semibold leading-6 text-gray-900"
                >
                  User Photo
                </label>
                <div className="mt-2.5">
                  <input
                    type="text"
                    disabled
                    defaultValue={userPhoto}
                    placeholder="Enter photo URL"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="company"
                  className="block text-sm font-semibold leading-6 text-gray-900"
                >
                  Cover Photo
                </label>
                <div className="mt-2.5">
                  <input
                    type="text"
                    name="coverPhoto"
                    placeholder="Enter photo URL"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="company"
                  className="block text-sm font-semibold leading-6 text-gray-900"
                >
                  Country Photo
                </label>
                <div className="mt-2.5">
                  <input
                    type="text"
                    name="countryPhoto"
                    placeholder="Enter photo URL"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="company"
                  className="block text-sm font-semibold leading-6 text-gray-900"
                >
                  Card Photo
                </label>
                <div className="mt-2.5">
                  <input
                    type="text"
                    name="cardPhoto"
                    placeholder="Enter photo URL"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="company"
                  className="block text-sm font-semibold leading-6 text-gray-900"
                >
                  photo1
                </label>
                <div className="mt-2.5">
                  <input
                    type="text"
                    name="photo1"
                    placeholder="Enter photo URL"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="company"
                  className="block text-sm font-semibold leading-6 text-gray-900"
                >
                  photo2
                </label>
                <div className="mt-2.5">
                  <input
                    type="text"
                    name="photo2"
                    placeholder="Enter photo URL"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="company"
                  className="block text-sm font-semibold leading-6 text-gray-900"
                >
                  photo3
                </label>
                <div className="mt-2.5">
                  <input
                    type="text"
                    name="photo3"
                    placeholder="Enter photo URL"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="company"
                  className="block text-sm font-semibold leading-6 text-gray-900"
                >
                  photo4
                </label>
                <div className="mt-2.5">
                  <input
                    type="text"
                    name="photo4"
                    placeholder="Enter photo URL"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </div>
            <div className="mt-10">
              <button
                type="submit"
                value="Add work"
                className="block w-full rounded-md bg-[#D2B48C] px-3.5 py-2.5 text-center text-sm font-semibold text-[#331A15] hover:text-white shadow-sm hover:bg-[#9b6f35] 
                            border-2 border-[#331A15] "
              >
                Add work
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddNewSpot;
