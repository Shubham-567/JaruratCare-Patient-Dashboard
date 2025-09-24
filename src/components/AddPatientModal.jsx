import { X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const AddPatientModal = ({ onCLose, setPatients }) => {
  const [formData, setFormData] = useState({
    name: "",
    age: 0,
    gender: "Male",
    contact: "",
    email: "",
    address: { street: "", city: "", pinCode: "" },
    medicalHistory: {
      conditions: [],
      allergies: [],
    },
    // random avatar image
    avatarUrl: "https://picsum.photos/200",
  });

  const modalRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onCLose();
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [onCLose]);

  // handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);

    // validation
    if (
      !formData.name ||
      !formData.age ||
      !formData.contact ||
      !formData.email ||
      !formData.address.street ||
      !formData.address.city ||
      !formData.address.pinCode
    ) {
      alert("Please fill all the fields.");
      return;
    }

    // simulation of api call to add patient with date (dd-mm-yyyy);
    setTimeout(() => {
      setPatients((prevPatients) => [
        ...prevPatients,
        {
          ...formData,
          id: prevPatients.length + 1,
          medicalHistory: {
            ...formData.medicalHistory,
            lastVisit: new Date().toLocaleDateString("en-GB"),
          },
        },
      ]);
      onCLose();
    }, 1000);

    onCLose();
  };

  return (
    <div className='fixed top-0 left-0 w-full h-full px-6 flex items-center justify-center bg-background/50 z-50'>
      <div
        ref={modalRef}
        className='relative bg-surface pb-6 pt-0 m rounded-lg shadow-lg max-w-lg max-h-[86vh] w-full min-w-[300px] overflow-y-scroll no-scrollbar'>
        {/* modal heading */}
        <div className='sticky top-0 bg-surface flex items-center justify-between gap-4 px-6 pt-6 pb-4 z-10 border-b border-txt-secondary/20'>
          <h3 className='text-lg font-semibold'>Add Patient</h3>
          <button onClick={onCLose}>
            <X className='size-6 hover:text-primary cursor-pointer' />
          </button>
        </div>

        {/* form */}
        <form
          onSubmit={handleSubmit}
          className='grid grid-cols-2 justify-between items-center gap-4 px-6 my-4'>
          {/* name input */}
          <div className='col-span-2 sm:col-span-1'>
            <label htmlFor='name' className='text-sm text-txt-secondary'>
              Full Name
            </label>

            <input
              type='text'
              name='name'
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              id='name'
              placeholder='John Doe'
              className='w-full bg-background text-sm border border-txt-secondary/50 rounded-md px-4 py-2 mt-0.5 focus:outline-none focus:ring-2 focus:ring-primary/50'
            />
          </div>

          {/* age input */}
          <div className='col-span-2 sm:col-span-1'>
            <label htmlFor='age' className='text-sm text-txt-secondary'>
              Age
            </label>

            <input
              type='number'
              name='age'
              value={formData.age}
              onChange={(e) =>
                setFormData({ ...formData, age: e.target.value })
              }
              id='age'
              placeholder='Age'
              className='w-full bg-background text-sm border border-txt-secondary/50 rounded-md px-4 py-2 mt-0.5 focus:outline-none focus:ring-2 focus:ring-primary/50'
            />
          </div>

          {/* gender dropdown */}
          <div className='col-span-2 sm:col-span-1'>
            <label htmlFor='gender' className='text-sm text-txt-secondary'>
              Gender
            </label>

            <select
              name='gender'
              value={formData.gender}
              onChange={(e) =>
                setFormData({ ...formData, gender: e.target.value })
              }
              id='gender'
              className='w-full bg-background text-sm border border-txt-secondary/50 rounded-md px-4 py-2 mt-0.5 focus:outline-none focus:ring-2 focus:ring-primary/50'>
              <option value='male'>Male</option>
              <option value='female'>Female</option>
              <option value='other'>Other</option>
            </select>
          </div>

          {/* contact number */}
          <div className='col-span-2 sm:col-span-1'>
            <label htmlFor='contact' className='text-sm text-txt-secondary'>
              Contact Number
            </label>

            <input
              type='tel'
              name='contact'
              value={formData.contact}
              onChange={(e) =>
                setFormData({ ...formData, contact: e.target.value })
              }
              id='contact'
              placeholder='eg. (+91 98765 43210)'
              className='w-full bg-background text-sm border border-txt-secondary/50 rounded-md px-4 py-2 mt-0.5 focus:outline-none focus:ring-2 focus:ring-primary/50'
            />
          </div>

          {/* email address input  */}
          <div className='col-span-2'>
            <label htmlFor='email' className='text-sm text-txt-secondary'>
              Email Address
            </label>

            <input
              type='email'
              name='email'
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              id='email'
              placeholder='john.doe@eg.com'
              className='w-full bg-background text-sm border border-txt-secondary/50 rounded-md px-4 py-2 mt-0.5 focus:outline-none focus:ring-2 focus:ring-primary/50'
            />
          </div>

          {/* Street address input */}
          <div className='col-span-2'>
            <label htmlFor='street' className='text-sm text-txt-secondary'>
              Street Address
            </label>

            <input
              type='text'
              name='street'
              value={formData.address.street}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  address: { ...formData.address, street: e.target.value },
                })
              }
              id='street'
              placeholder='1234 Street Name'
              className='w-full bg-background text-sm border border-txt-secondary/50 rounded-md px-4 py-2 mt-0.5 focus:outline-none focus:ring-2 focus:ring-primary/50'
            />
          </div>

          {/* city input */}
          <div className='col-span-2 sm:col-span-1'>
            <label htmlFor='city' className='text-sm text-txt-secondary'>
              City Name
            </label>

            <input
              type='text'
              name='city'
              value={formData.address.city}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  address: { ...formData.address, city: e.target.value },
                })
              }
              id='city'
              placeholder='Mumbai'
              className='w-full bg-background text-sm border border-txt-secondary/50 rounded-md px-4 py-2 mt-0.5 focus:outline-none focus:ring-2 focus:ring-primary/50'
            />
          </div>

          {/* pin code input */}
          <div className='col-span-2 sm:col-span-1'>
            <label htmlFor='pinCode' className='text-sm text-txt-secondary'>
              Pin Code
            </label>

            <input
              type='text'
              name='pinCode'
              value={formData.address.pinCode}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  address: { ...formData.address, pinCode: e.target.value },
                })
              }
              id='pinCode'
              placeholder='Pin Code eg. (400001)'
              className='w-full bg-background text-sm border border-txt-secondary/50 rounded-md px-4 py-2 mt-0.5 focus:outline-none focus:ring-2 focus:ring-primary/50'
            />
          </div>

          {/* medical condition input  */}
          <div className='col-span-2'>
            <label
              htmlFor='medicalCondition'
              className='text-sm text-txt-secondary'>
              Medical Conditions
            </label>

            <input
              type='text'
              name='medicalCondition'
              value={formData.medicalHistory.conditions.join(", ")}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  medicalHistory: {
                    ...formData.medicalHistory,
                    conditions: e.target.value.split(","),
                  },
                })
              }
              id='medicalCondition'
              placeholder='Medical Condition (comma-separated)'
              className='w-full bg-background text-sm border border-txt-secondary/50 rounded-md px-4 py-2 mt-0.5 focus:outline-none focus:ring-2 focus:ring-primary/50'
            />
          </div>

          {/* allergies input  */}
          <div className='col-span-2'>
            <label htmlFor='allergies' className='text-sm text-txt-secondary'>
              Allergies
            </label>

            <input
              type='text'
              name='allergies'
              value={formData.medicalHistory.allergies.join(", ")}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  medicalHistory: {
                    ...formData.medicalHistory,
                    allergies: e.target.value.split(","),
                  },
                })
              }
              id='allergies'
              placeholder='Allergies (comma-separated)'
              className='w-full bg-background text-sm border border-txt-secondary/50 rounded-md px-4 py-2 mt-0.5 focus:outline-none focus:ring-2 focus:ring-primary/50'
            />
          </div>

          {/* submit button  */}
          <button
            type='submit'
            className='col-span-2 bg-primary text-primary-foreground rounded-md px-4 py-2 hover:bg-primary/90'>
            Add Patient
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddPatientModal;
