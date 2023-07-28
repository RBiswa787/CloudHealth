# CloudHealth

A robust and scalable remote health care platform utilizing a microservices architecture using React.js, Node.js, and MongoDB. Containerized using Docker. Deployed to AWS EC2 instance. Integrated AWS API Gateway as a reverse proxy to enhance security and manage incoming requests.

# Features

## User Profiles:
Doctors and Patients can create profiles with their relevant information.

## Doctor Availability:
Doctors can set their availability time slots for appointments.

## Doctor Search:
Patients can search for doctors based on various criteria, such as specialization, location, or availability.

## Appointment Booking:
Patients can book appointments with doctors for the next 7 days.

## Appointment Management:
Both doctors and patients can view and manage their appointments in their respective dashboards.

## Electronic Health Records (EHR):
Patients can upload and update their medical history documents in the secure Electronic Health Records system.

## Access Request:
After successful appointment booking, doctors can request access to the patient's medical documents.

## Patient Consent:
Patients are notified of the access request and can accept or deny the doctor's request.

## Temporary Access:
Upon successful request acceptance, doctors are granted temporary access to the patient's EHR.

## Revoking EHR Access:
Patients can revoke access to their Electronic Health Records after the appointment if needed.

## Video Conference Integration:
A unique video conference room is automatically created for each appointment, containing appointment details, and shared with both the doctor and patient to facilitate remote consultations.

This system aims to streamline the appointment booking process, enhance doctor-patient communication, and provide a secure platform for managing medical records.
