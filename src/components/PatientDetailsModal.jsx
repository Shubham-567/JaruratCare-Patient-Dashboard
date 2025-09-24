import {
  AlertTriangle,
  Calendar,
  Mail,
  MapPin,
  Phone,
  Stethoscope,
  X,
} from "lucide-react";
import { useEffect, useRef } from "react";

const PatientDetailsModal = ({ patient, onCLose }) => {
  if (!patient) {
    return null;
  }

  // handle outside click

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

  return (
    <div className='fixed top-0 left-0 w-full h-full px-6 flex items-center justify-center bg-background/80 z-50'>
      <div
        ref={modalRef}
        className='relative bg-surface p-6 rounded-lg shadow-lg w-full max-w-lg min-w-[300px]'>
        {/* patient Profile  */}
        <div className='flex items-center justify-between gap-4 pb-4'>
          <div className='flex items-center gap-4 px-4'>
            <img
              src={patient.avatarUrl}
              alt={patient.name}
              className='size-14 rounded-full ring-3 ring-primary/50 mx-auto'
            />
            <div className='flex-1'>
              <h3 className='text-lg font-semibold mt-2'>{patient.name}</h3>
              <p className='text-sm text-txt-secondary'>
                {patient.age} years old, {patient.gender}
              </p>
            </div>
          </div>
          <X
            className='size-6 hover:text-primary cursor-pointer'
            onClick={onCLose}
          />
        </div>

        {/* divider */}
        <hr className='absolute w-1/1 -translate-x-1/2 left-1/2 border-t border-txt-secondary/50' />

        {/* contact details */}
        <div className='my-4'>
          <h4 className='font-semibold mb-3'>Contact Information</h4>

          <div className='grid md:grid-cols-2 items-start justify-between gap-4'>
            <div className='flex items-start gap-4'>
              <Mail className='size-6 text-primary' />
              <div className='space-y-0.5'>
                <p className='text-sm text-txt-secondary'>Email Address</p>
                <p className='text-sm font-bold'>{patient.email}</p>
              </div>
            </div>

            <div className='flex items-start gap-4'>
              <MapPin className='size-6 text-primary' />
              <div className='space-y-0.5'>
                <p className='text-sm text-txt-secondary'>Address</p>
                <p className='text-sm font-bold'>
                  {patient.address.street}, {patient.address.city},{" "}
                  {patient.address.pinCode}
                </p>
              </div>
            </div>

            <div className='flex items-start gap-4'>
              <Phone className='size-6 text-primary' />
              <div className='space-y-0.5'>
                <p className='text-sm text-txt-secondary'>Contact Number</p>
                <p className='text-sm font-bold'>{patient.contact}</p>
              </div>
            </div>
          </div>
        </div>

        {/* medical History */}
        <div className='my-4 mt-8'>
          <h4 className='font-semibold mb-3'>Medical History</h4>

          <div className='grid md:grid-cols-2 items-start justify-between gap-4'>
            <div className='flex items-start gap-4'>
              <Calendar className='size-6 text-primary' />
              <div className='space-y-0.5'>
                <p className='text-sm text-txt-secondary'>Last Visit</p>
                <p className='text-sm font-bold'>
                  {patient.medicalHistory.lastVisit}
                </p>
              </div>
            </div>

            <div className='flex items-start gap-4'>
              <Stethoscope className='size-6 text-primary' />
              <div className='space-y-0.5'>
                <p className='text-sm text-txt-secondary'>Conditions</p>
                <p className='text-sm w-full font-bold flex flex-wrap items-center justify-between gap-2'>
                  {patient.medicalHistory.conditions.length === 0
                    ? "-"
                    : patient.medicalHistory.conditions.map((condition, i) => (
                        <span
                          key={i + 1}
                          className='text-xs font-bold px-2 py-1 rounded-4xl text-primary bg-primary/20'>
                          {condition}
                        </span>
                      ))}
                </p>
              </div>
            </div>

            <div className='flex items-start gap-4'>
              <AlertTriangle className='size-6 text-primary' />
              <div className='space-y-0.5'>
                <p className='text-sm text-txt-secondary'>Allergies</p>
                <p className='text-sm font-bold flex flex-wrap items-center justify-between gap-2'>
                  {patient.medicalHistory.allergies.length === 0
                    ? "-"
                    : patient.medicalHistory.allergies.map((allergy, i) => (
                        <span
                          key={i + 1}
                          className='text-xs font-bold px-2 py-1 rounded-4xl text-primary bg-primary/20 text-nowrap'>
                          {allergy}
                        </span>
                      ))}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientDetailsModal;
