import { Phone } from "lucide-react";
import Button from "./Button";

const PatientCard = ({ patient, handleViewDetails }) => {
  if (!patient) {
    return null;
  }
  //   {
  //     "id": 1,
  //     "name": "Aarav Sharma",
  //     "age": 45,
  //     "gender": "Male",
  //     "contact": "987-654-3210",
  //     "email": "aarav.sharma@example.com",
  //     "address": {
  //         "street": "123 MG Road",
  //         "city": "Mumbai",
  //         "zipCode": "400001"
  //     },
  //     "medicalHistory": {
  //         "lastVisit": "2023-10-15",
  //         "conditions": [
  //             "Hypertension",
  //             "Type 2 Diabetes"
  //         ],
  //         "allergies": [
  //             "Penicillin"
  //         ]
  //     },
  //     "avatarUrl": "https://picsum.photos/seed/aarav/200"
  // }

  return (
    <div className='card px-0 py-4'>
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
      <div className='flex items-center gap-2 mt-4 text-txt-secondary text-sm px-4'>
        <Phone className='size-4' />
        <p>{patient.contact}</p>
      </div>

      <div className='border-t border-txt-secondary/20 mt-4 px-4 pt-4'>
        <Button
          variant='secondary'
          className='px-4 py-2 w-full'
          onClick={handleViewDetails}>
          View Details
        </Button>
      </div>
    </div>
  );
};

export default PatientCard;
