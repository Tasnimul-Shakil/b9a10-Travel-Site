import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import { Link, useLoaderData } from "react-router-dom";

const UpdateSpot = () => {
  const { user } = useContext(AuthContext);
  const card = useLoaderData();
  const userName = user?.displayName || "";
  const userEmail = user?.email || "";
  console.log(user);
  const handleAddWork = (event) => {
    event.preventDefault();
    const form = event.target;
    const tourist_spot_name = form.tourist_spot_name.value;
    const country_name = form.country_name.value;
    const user_name = form.user_name.value;
    const user_email = form.user_email.value;
    const location = form.location.value;
    // const theStory = form.theStory.value;
    const category = form.category.value;
    const average_cost = form.average_cost.value;
    const seasonality = form.seasonality.value;
    const total_visitors_per_year = form.total_visitors_per_year.value;
    const description = form.description.value;
    const coverPhoto = form.coverPhoto.value;
    const cardPhoto = form.cardPhoto.value;
    const photo1 = form.photo1.value;
    const photo2 = form.photo2.value;
    const photo3 = form.photo3.value;

    const updatedSpot = {
      tourist_spot_name,
      country_name,
      user_name,
      user_email,
      location,
      category,
      average_cost,
      seasonality,
      total_visitors_per_year,
      description,
      coverPhoto,
      photo1,
      photo2,
      photo3,
      cardPhoto,
    };
    // send data to server
    fetch(`http://localhost:3000/spot/${card._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedSpot),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          Swal.fire({
            title: "Success",
            text: "User Updated info successfully",
            icon: "success",
            confirmButtonColor: "#09B161",
            confirmButtonText: "ok",
          }).then((result) => {
            if (result.isConfirmed) {
              window.location.reload();
            }
          });
        }
      });
  };
  return (
    <div className="mx-auto  mt-16 max-w-7xl">
      <div className="text-sm breadcrumbs">
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
          <li>About Us</li>
        </ul>
      </div>
      <div className="mx-auto bg-[#F4F3F0] mt-4 max-w-7xl p-16 rounded-2xl">
        <h1 className="text-3xl text-center font-bold text-gray-900">
          Add New work info
        </h1>
        <form onSubmit={handleAddWork}>
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
                Tourist Spot Name
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  defaultValue={card.tourist_spot_name}
                  name="tourist_spot_name"
                  placeholder="Enter tourist spot name"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-semibold leading-6 text-gray-900">
                Country Name
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  defaultValue={card.country_name}
                  name="country_name"
                  placeholder="Enter Country Name"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-semibold leading-6 text-gray-900">
                Time Category
              </label>
              <div className="mt-2.5">
                <select
                  name="category"
                  defaultValue={card.category}
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                >
                  <option disabled>Select A Category</option>
                  <option value="3 day">3 days</option>
                  <option value="7 Days">7 Days</option>
                  <option value="15 Days">15 Days</option>
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
                  defaultValue={card.location}
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
                  defaultValue={card.description}
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
                  defaultValue={card.average_cost}
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
                  defaultValue={card.seasonality}
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
                  defaultValue={card.total_visitors_per_year}
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
                Cover Photo
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  defaultValue={card.coverPhoto}
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
                Card Photo
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  defaultValue={card.cardPhoto}
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
                  defaultValue={card.photo1}
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
                  defaultValue={card.photo2}
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
                  defaultValue={card.photo3}
                  name="photo3"
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
  );
};

export default UpdateSpot;
