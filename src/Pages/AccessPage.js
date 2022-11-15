import React from "react";
import { useNavigate, useParams } from "react-router";
import "react-phone-number-input/style.css";
import PhoneInput, {
  formatPhoneNumber,
  isValidPhoneNumber,
  isPossiblePhoneNumber,
} from "react-phone-number-input";
import { RiCloseFill } from "react-icons/ri";
import Header from "../components/Header";
import { useUserStore } from "../store";

const AccessPage = () => {
  const { fetch, user } = useUserStore((state) => state);
  const { id } = useParams();
  const navigate = useNavigate();
  const [isWhiteContact, setIsWhiteContact] = React.useState(false);
  const [doesNotExist, setSetDoesNotExist] = React.useState(false);
  const [value, setValue] = React.useState();

  React.useEffect(() => {
    fetch(`/virtualcardapi/staff/${id}`);

    return;
  }, []);

  const openModal = () => {
    setIsWhiteContact(true);
    // setIsAddContact((prev) => !prev);
  };

  const openModal1 = () => {
    setSetDoesNotExist(true);
    // setIsAddContact((prev) => !prev);
  };

  const submit = (e) => {
    e.preventDefault();

    const fmatV = formatPhoneNumber(value).replace(/ /g, "");

    if (!value || !isValidPhoneNumber(value)) return;

    if (user == null) {
      openModal1();

      return;
    }
    const check = user?.staffAcquaintances?.filter(
      (contact) => contact.phone === fmatV
    );

    if (check.length > 0) {
      navigate(`/cardpage/${id}`);
    } else {
      openModal();
    }
  };

  const closeModal = () => {
    setIsWhiteContact((prev) => !prev);
  };

  const closeModal1 = () => {
    setSetDoesNotExist((prev) => !prev);
  };

  return (
    <>
      {isWhiteContact && (
        <div
          //   onClick={closeModal}
          className="absolute top-0 left-0 bottom-0 right-0 flex justify-center items-center bg-[rgba(0,0,0,0.8)] z-50"
        >
          <div className="relative mx-6  w-full sm:w-[460px] bg-[#f2f2f2] shadow-2xl rounded-md p-6 sm:px-8 pb-10">
            <div
              onClick={closeModal}
              className=" absolute -top-4 -right-2 flex  p-3  justify-center items-center bg-white rounded-full shadow-lg cursor-pointer hover:scale-95"
            >
              <RiCloseFill className=" text-lg " />
            </div>

            <Header text="Access Denied" />

            <div className="flex justify-start items-center  w-full h-[100px] mt-4">
              <p className="">
                This number does not have access to the Call Card. Enter your
                number correctly or Contact Card owner for access
              </p>
            </div>
          </div>
        </div>
      )}

      {doesNotExist && (
        <div
          //   onClick={closeModal}
          className="absolute top-0 left-0 bottom-0 right-0 flex justify-center items-center bg-[rgba(0,0,0,0.8)] z-50"
        >
          <div className="relative mx-6  w-full sm:w-[460px] bg-[#f2f2f2] shadow-2xl rounded-md p-6 sm:px-8 pb-10">
            <div
              onClick={closeModal1}
              className=" absolute -top-4 -right-2 flex  p-3  justify-center items-center bg-white rounded-full shadow-lg cursor-pointer hover:scale-95"
            >
              <RiCloseFill className=" text-lg " />
            </div>

            <Header text="Access Denied" />

            <div className="flex justify-start items-center  w-full h-[100px] mt-4">
              <p className="">Staff Does not exist</p>
            </div>
          </div>
        </div>
      )}

      <div className="w-[100vw] h-[100vh] flex justify-center items-center bg-[rgba(0,0,0,0.8)]">
        <div className="relative mx-6  w-full sm:w-[460px] bg-[#f2f2f2] shadow-2xl rounded-md p-6 sm:px-8 pb-10">
          <div className="flex w-full justify-between items-center mb-10">
            <p className=" text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#ff5810] to-[#ffad06] ">
              Access Point
            </p>
          </div>

          <form onSubmit={submit} className="input-group form">
            <div className="form_div">
              <PhoneInput
                placeholder="eg. 0542754476 "
                defaultCountry="GH"
                value={value}
                onChange={(value) => setValue(value)}
                className="form_input"
              />

              <label htmlFor="phone_number" className="form_label">
                Enter Your Phone Number
              </label>
            </div>
            {!value ? (
              ""
            ) : value && isValidPhoneNumber(value) ? (
              ""
            ) : (
              <p className="-mt-[2.4em] mb-[2.4em] ml-6 text-red-600 font-bold">
                Invalid Phone Number
              </p>
            )}

            <button
              disabled={isValidPhoneNumber ? false : true}
              type="submit"
              className="w-full block p-3 outline-none border-none bg-gradient-to-r from-[#ff5810] to-[#ffad06] rounded-lg transition-all hover:shadow hover:scale-95 cursor-pointer"
            >
              <p className="text-white text-sm font-bold text-center">Submit</p>
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default AccessPage;
