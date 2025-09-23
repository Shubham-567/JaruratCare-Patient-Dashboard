import { useEffect, useState } from "react";
import { patientsData } from "../constants";
import PatientCard from "../components/PatientCard";
import { Plus, Search } from "lucide-react";
import Button from "../components/Button";

const PatientPage = () => {
  const [patients, setPatients] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchInput, setSearchInput] = useState("");

  // simulation of api fetching patients data from contents.js
  useEffect(() => {
    setTimeout(() => {
      setPatients(patientsData);
      setIsLoading(false);
    }, 2000);
  }, []);

  // handle search
  const handleSearch = (e) => {
    setSearchInput(e.target.value);

    if (e.target.value === "") {
      setPatients(patientsData);
      return;
    }

    const filteredPatients = patientsData.filter((patient) => {
      return patient.name.toLowerCase().includes(e.target.value.toLowerCase());
    });

    setPatients(filteredPatients);
  };

  return (
    <main className='min-h-screen pt-18 px-6 sm:px-13 md:px-18 lg:px-26'>
      <section className='pt-10 text-start'>
        <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold'>Patients</h1>
        <p className='py-3 max-w-xl sm:text-lg text-txt-secondary'>
          Here you can view and manage your patients. You can also add new ones
          if you want.
        </p>
      </section>

      <section className='py-10 mb-6 space-y-6'>
        {/* Search Bar */}
        <div className='bg-surface p-4 sm:p-6 rounded-xl ring ring-txt-secondary/20 flex items-center gap-4'>
          <div className='relative flex-1'>
            <Search className='absolute top-1/2 left-4 -translate-y-1/2 text-txt-secondary/50' />
            <input
              type='text'
              placeholder='Search Patient'
              className='w-full px-4 py-2 pl-14 rounded-lg bg-background border border-txt-secondary/20 focus:outline-none focus:ring-2 focus:ring-primary'
              value={searchInput}
              onChange={(e) => handleSearch(e)}
            />
          </div>

          <Button variant='primary' className='text-sm px-4 py-2'>
            <Plus className='size-6' />
            Add Patients
          </Button>
        </div>

        {/* Patient Cards */}
        {isLoading ? (
          <p className='text-center mt-10 text-2xl text-txt-secondary font-bold'>
            Loading...
          </p>
        ) : error ? (
          <p className='text-center mt-10 text-2xl text-accent font-bold'>
            {error}
          </p>
        ) : patients.length === 0 ? (
          <p className='text-center mt-10 text-2xl text-txt-secondary font-bold'>
            No Patients Found
          </p>
        ) : (
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
            {patients.map((patient) => (
              <PatientCard patient={patient} />
            ))}
          </div>
        )}
      </section>
    </main>
  );
};

export default PatientPage;
